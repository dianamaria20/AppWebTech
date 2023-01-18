import express from "express";
import * as notesController from "../Controllers/notesController.js";

const router = express.Router();

router.get("/notes", notesController.getAllNotesFromDB);
router.get("/notesCategory", notesController.getAllNotesCategoryFromDB);
router.post("/newNote", notesController.insertNoteIntoDB);
router.put("/note/:id", notesController.updateNoteById); // update is associated to the HTTP PUT method
router.delete("/note/:id", notesController.deleteNote); // delete is associated to the HTTP DELETE method

export { router as notesRouter };
