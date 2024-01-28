import express from "express";
import connectDb from "./connect.db.js";
import productRoute from "./products/product.route.js";
import userRoute from "./user/user.route.js";
const app = express();

// to make app understand json
app.use(express.json());

// connect DB
connectDb();

// register routes
app.use(productRoute);
app.use(userRoute);

// listening port and server
const port = 5005;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
