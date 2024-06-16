import connectDB from "./db/index.js";
// require('dotenv').config({path: '/.env'});
import dotenv from 'dotenv';

dotenv.config({
    path: '/.env'
})

connectDB();


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