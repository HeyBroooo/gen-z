import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST'){
        console.log(req.body)

        res.status(200).json({ success: "success"})
    }
    else {
        res.status(400).json({error: "this method is not allowed"})

    }

}
export default connectDb(handler);