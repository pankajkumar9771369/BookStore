const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const bookRoutes = require('./src/books/book.route'); ///
const orderRoutes = require("./src/orders/order.route")
const adminRoutes = require("./src/stats/admin.stats")
const userRoutes =  require("./src/users/user.route")
// middleware
app.use(express.json());
// app.use(cors({
//     origin: [' http://localhost:5173/'],
//     credentials: true,
//   }));
app.use(
    cors({
      origin: "http://localhost:5173", // Your frontend URL
      methods: "GET,POST,PUT,DELETE",
      credentials: true, // Enable cookies
      allowedHeaders: "Content-Type,Authorization",
    })
  );


// routes
app.use("/api/books",bookRoutes);
app.use("/api/orders", orderRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/auth", userRoutes)

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));


//   app.use("/", (req, res) => {
//     res.json({ message: 'Hello from the server!' });
//   });
  
async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    app.use("/", (req, res) => {
        res.json({message:"Book Store Server is running!"})
    });
  }
  
  main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  