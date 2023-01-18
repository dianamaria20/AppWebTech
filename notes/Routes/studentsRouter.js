import express from "express";
import * as studentsController from "../Controllers/studentsController.js";

const router = express.Router();

router.get("/users", studentsController.getAllUsersFromDB);
router.get("/usersGenres", studentsController.getAllUsersGenresFromDB);
router.post("/newUser", studentsController.insertMovieIntoDB);
router.put("/users/:userID", studentsController.updateMovieById); // update is associated to the HTTP PUT method
router.delete("/users/:userId", studentsController.deleteMovie); // delete is associated to the HTTP DELETE method

export { router as studentsRouter };
