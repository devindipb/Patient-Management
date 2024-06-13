import express from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import registrationRoute from "./routes/registrationRoute.js";
import petRoute from "./routes/petRoute.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";


const app = express();


app.use(express.json());

app.use(cors());



app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use("/registration", registrationRoute);
app.use("/login", registrationRoute);
app.use("/pet",petRoute);
app.use("/books", bookRoute);

mongoose.
connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    });
