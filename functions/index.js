const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HbEUpE4bxvmFApJ7rArFO7iiMowmpfVX5lSudT39hgDTQhhmue2JSi1ljTUTlxJEb2rz2esncteIINYMKYlSb0u00cQQ18AZU"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
// example endpoint : http://localhost:5001/darnazon/us-central1/api
// sk_test_51HbEUpE4bxvmFApJ7rArFO7iiMowmpfVX5lSudT39hgDTQhhmue2JSi1ljTUTlxJEb2rz2esncteIINYMKYlSb0u00cQQ18AZU