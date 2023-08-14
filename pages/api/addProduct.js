import admin from 'firebase-admin';
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { Readable } from 'stream';

// Initialize Firebase Admin SDK (replace with your credentials)
const serviceAccount = require('../../path/to/serviceAccountKey.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://your-project-id.firebaseio.com'
    });
}

const storage = admin.storage();
const db = admin.firestore();

const uploadImageToStorage = async (image) => {
    const bucket = storage.bucket();
    const imageStream = new Readable();
    imageStream.push(image.buffer);
    imageStream.push(null);

    const filename = `${uuidv4()}.jpg`;
    const file = bucket.file(`product_images/${filename}`);
    await imageStream.pipe(file.createWriteStream());

    return file.getSignedUrl({
        action: 'read',
        expires: '03-09-2491'
    });
};

const addProductHandler = async (req: NextApiRequest, res: NextApiResponce) => {
    try {
        const { name, description, price, imageUrl } = req.body;

        const imageDownloadUrl = await uploadImageToStorage(req.file);

        await db.collection('products').add({
            name,
            description,
            price,
            imageUrl: imageDownloadUrl[0]
        });

        res.status(200).send('Product added successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding product.');
    }
};

export const config = {
    api: {
        bodyParser: false // Disable automatic body parsing, we handle it manually
    }
};

// Multer middleware for handling file uploads
const upload = multer({
    storage: multer.memoryStorage()
});

export default upload.single('image')(addProductHandler);
