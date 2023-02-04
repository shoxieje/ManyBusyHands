

const express = require("express");
const cors = require("cors");
const multer = require("multer")
const fs = require("fs")
const path = require("path")
const bodyParser = require('body-parser')


let upload = null;
let uploadImage = null;

const app = express();

const stripe = require('stripe')('sk_test_wsFx86XDJWwmE4dMskBgJYrt')

const port = 8081;

app.use(express.json());
app.use(cors());
app.use(express.static('static'))

// app.use(bodyParser.urlencoded({
//     extended: true,
// }))

app.use(
    express.urlencoded({
      extended: true,
    })
);


const userRouter = require("./routes/user");
const businessUserRouter = require('./routes/businessUser')
const activityRouter = require('./routes/activity')
const sessionTokenRouter = require('./routes/user_session')
const jobAdRouter = require('./routes/jobAd')
const postcodeRouter = require('./routes/postcode')
const candidateRouter = require('./routes/candidate')
const jobSeekerUserRouter = require('./routes/jobSeekerUser')

///////////////////////// TEST STRIPE

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


///////////////////////////////////////////////////////

// storage 
const business_photo_storage = multer.diskStorage({

    destination: (req, file, cb) => {

        const dir = path.join(__dirname, `../assets/users/business/${req.params.id}/images`)

        fs.mkdirSync(dir, {recursive: true})
        cb(null, dir)
    },

    filename: (req, file, cb) => {

        cb(null, req.params.filename)

    }

})


upload = multer({storage: business_photo_storage})

app.post('/business_user/:id/images/:filename', upload.single('file'), (req, res) => {

    console.log('storage location is ', req.hostname +'/' + req.file.path);
    return res.send(req.file);

})


/////////////////////////////////////////////////////

const job_ad_photo_storage = multer.diskStorage({

	destination: (req, file, cb) => {

		console.log(req.params.id)

		const dir = path.join(__dirname, `../assets/job_ad/${req.params.id}/images`)

		fs.mkdirSync(dir, {recursive: true})
		cb(null, dir)
	},

	filename: (req, file, cb) => {

		cb(null, req.params.filename)

	}

})

uploadImage = multer({storage: job_ad_photo_storage})

app.post('/job_ad/:id/images/:filename', uploadImage.single('file'), (req, res) => {

    console.log('storage location is ', req.hostname +'/' + req.file.path);
    return res.send(req.file);

})



/////////////////////////////////////////////////////


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
app.use('/sessionToken', sessionTokenRouter)
app.use('/jobAd', jobAdRouter)
app.use('/postcode', postcodeRouter)
app.use('/candidate', candidateRouter)
app.use('/jobSeekerUser', jobSeekerUserRouter)

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
