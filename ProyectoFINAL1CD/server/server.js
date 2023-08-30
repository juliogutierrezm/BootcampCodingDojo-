const cors = require("cors");
const express = require("express");
const stripeController = require("./controllers/stripeController"); // Import the stripeController
require("../server/config/mongoose.config");
const app = express();
const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");

require("../server/config/mongoose.config"); // This is new


app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); 

require("../server/routes/product.routes")(app);
require("../server/routes/cart.routes")(app);
// Usuarios

app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);
//Stripe
app.post("/api/checkout", async (req, res) => {
  try {
    const { paymentMethodId, amount } = req.body;

    const paymentIntent = await stripeController.createPaymentIntent(
      paymentMethodId,
      amount
    );

    console.log(paymentIntent);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});

// This is new
app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
