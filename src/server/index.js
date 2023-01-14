

const express = require("express");
const cors = require("cors");

const app = express();

const stripe = require('stripe')('sk_test_wsFx86XDJWwmE4dMskBgJYrt')

const port = 8081;

app.use(express.json());
app.use(cors());

app.use(
    express.urlencoded({
      extended: true,
    })
);

const userRouter = require("./routes/user");
const businessUserRouter = require('./routes/businessUser')
const activityRouter = require('./routes/activity')

////////////// TEST STRIPE

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Basic Plan',
            },
            unit_amount: 14995,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:${port}/success`,
      cancel_url: `http://localhost:${port}/cancel`,
    });


	console.log(session)
  
    res.redirect(303, session.url);
});




////////////////

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.get("/success", (req, res) => {

    res.json({ message: "success payment" });

})

app.get("/cancel", (req, res) => {

    res.json({ message: "payment fail" });
    
})

app.use('/user', userRouter);
app.use('/businessUser', businessUserRouter)
app.use('/activity', activityRouter)

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
