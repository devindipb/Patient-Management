/*import express from "express";
import { Registration } from "../models/registrationModel.js";


const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await Registration.findOne({ email });

    if (!user || user.password !== password) {
      return response
      .status(401)
      .json({ message: 'Invalid email or password', name:user.name,phonenumber:user.phonenumber,address:user.address,});
    }

    // If authentication is successful, you can generate a token here and send it back to the client
    response.status(200).json({ message: "Login successful"});
  } catch (error) {
    console.error("Error during login:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});

export default router;*/
/*import express from "express";
import cors from "cors"; // Import the cors middleware
import { Registration } from "../models/registrationModel.js";

const router = express.Router();

// Use the cors middleware to enable CORS
router.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend origin
  credentials: true // Enable sending cookies with the request
}));

router.get("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await Registration.findOne({ email });

    if (!user || user.password !== password) {
      return response
      .status(401)
      .json({ message: 'Invalid email or password', name:user.name,phonenumber:user.phonenumber,address:user.address,});
    }

    // If authentication is successful, you can generate a token here and send it back to the client
    response.status(200).json({ message: "Login successful"});
  } catch (error) {
    console.error("Error during login:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});
router.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await Registration.findOne({ email });

    if (!user || user.password !== password) {
      return response.status(401).json({ message: 'Invalid email or password' });
    }

    response.status(200).json({
      message: "Login successful",
      name: user.name,
      phoneNumber: user.phoneNumber,
      address: user.address,
      email: user.email
    });
  } catch (error) {
    console.error("Error during login:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});



export default router;*/
import express from "express";
import cors from "cors";
import { Registration } from "../models/registrationModel.js";

const router = express.Router();

// Set up CORS middleware
router.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

router.get("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await Registration.findOne({ email });

    if (!user || user.password !== password) {
      return response.status(401).json({ message: 'Invalid email or password' });
    }

    response.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await Registration.findOne({ email });

    if (!user || user.password !== password) {
      return response.status(401).json({ message: 'Invalid email or password' });
    }

    response.status(200).json({
      message: "Login successful",
      name: user.name,
      phoneNumber: user.phoneNumber,
      address: user.address,
      email: user.email
    });
  } catch (error) {
    console.error("Error during login:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});
app.listen(5555, () => {
  console.log("Server is running on port 5555");
});

export default router;
