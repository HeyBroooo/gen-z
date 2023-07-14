import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  // try {
  //   // Check if a connection to MongoDB already exists
   if (mongoose.connections[0].readyState) {
  //     // Connection already exists, invoke the API route handler
   return handler(req, res)
   }

    // Connect to the MongoDB server
    await mongoose.connect(process.env.MONGO_URI) 
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    // });

//     // Connection successful, invoke the API route handler
     return handler(req, res);
//   } catch (error) {
//     // Error occurred while connecting to the MongoDB server
//     console.error("Failed to connect to MongoDB:", error);
//     res.status(500).json({ error: "Failed to connect to MongoDB laure" });
   }
// };

export default connectDb;
