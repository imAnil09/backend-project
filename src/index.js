import connectDB from "./db/index.js";
// require('dotenv').config({path: '/.env'});
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config({
    path: '/.env'
})

const app = express();

// middleware will use by method called app.use()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
// app.use(express.json({limit: "16kb"})) we can mention the size of the json we should allow

// express.urlencoded() is an middleware, which is used to format the spaces in url like %20 || + .
app.use(express.urlencoded());

// static setting to access the media from public for app
app.use(express.static("public"));

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log('App is listening to PORT: ', process.env.PORT || 8000)
    });

    app.on('error', (error) => {
        console.log("ERROR: ", error)
    })
}).catch(error => {
    console.log('MONGO_DB CONNECTION FAILED !!', error)
});

export default app;

//#region process 1 to connect with DB
// import express from 'express';

// const app = express();

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (error) => {
//             console.log("ERROR: ", error)
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on PORT: ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log('ERROR: ', error);
//     }
// })();
//#endregion