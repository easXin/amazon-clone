const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51J3ShRGAAaJKc6gNtlNB9tguzZ6VjXmxe0WBGuhC6r7xumVM4tf97saZHZt35hbBgUQrfCIGocZX3IdWHqOnqDr700k2DXpm4H"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //OK Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// emulate it
// firebase emulator:start

// example endpoint
// http://localhost:5001/challenge-d9db1/us-central1/api
