import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

const Admin = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Initialize Firebase (replace with your configuration)
        const firebaseConfig = {
            apiKey: "AIzaSyABIMBD-WPh0P8I4glfgq6EsddCkmgb9Ek",
            authDomain: "hoodiehub.firebaseapp.com",
            projectId: "hoodiehub",
            storageBucket: "hoodiehub.appspot.com",
            messagingSenderId: "557600069902",
            appId: "1:557600069902:web:59918565ba0a1fc4b95f5f",
            measurementId: "G-W72SMZHYQJ",
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        // Upload image to Firebase Storage
        const storageRef = firebase.storage().ref(`product_images/${Date.now()}.jpg`);
        await storageRef.put(image);

        const imageUrl = await storageRef.getDownloadURL();

        // Send product data to backend
        const response = await fetch('/api/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                description,
                price: parseFloat(price),
                imageUrl
            })
        });

        if (response.ok) {
            alert('Product added successfully!');
            setName('');
            setDescription('');
            setPrice('');
            setImage(null);
        } else {
            alert('Error adding product.');
        }
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" />
                <input type="file" onChange={handleImageChange} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Admin;
