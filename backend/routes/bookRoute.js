import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route for Save a new Book for database
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.Name ||
      !request.body.Email ||
      !request.body.Feedback
    ) {
      return response.status(400).send({
        message: "send all required fields: name, email, feedback",
      });
    }
    const newBook = {
      Name: request.body.Name,
      Email: request.body.Email,
      Feedback: request.body.Feedback,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get all Books from database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get one Book from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for update a Book from database
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.Name ||
      !request.body.Email ||
      !request.body.Feedback
    ) {
      return response.status(400).send({
        message: "Send all required fields: name, email, feedback",
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Feedback not found" });
    }
    return response.status(200).send({ message: "Feedback updated successfully!" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Feedback not found" });
    }

    return response.status(200).send({ message: "Feedback deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
