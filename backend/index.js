const express = require('express');
const mongoose = require('mongoose');
const UserRoutes = require('./Router/user.router.js');
const DeliveryRoutes = require('./Router/deliver.router.js');
const BeauticiansRoutes = require('./Router/beautician.router.js');
const CommentRoutes = require('./Router/comment.router.js');
const CheckoutRoutes = require('./Router/checkout.router.js');
const AdditemRoutes = require('./Models/additem.model.js');


const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use('/user', UserRoutes); // Use the user routes
app.use('/deliver', DeliveryRoutes); 
app.use('/beautician', BeauticiansRoutes); 
app.use('/comment', CommentRoutes); 
app.use('/checkout',CheckoutRoutes ); 
app.use('/additem', AdditemRoutes); 



mongoose.connect("mongodb+srv://praneeth:grp123@cluster.jxwk423.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")


    .then(() => {
        console.log("connected to db");
        app.listen(3000, () => {
            console.log("server is running on port 3000");
        });
    })
    .catch((err) => {
        console.log("connection error: " + err);
    });
