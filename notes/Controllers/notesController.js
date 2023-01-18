import { Note } from "../Models/notes.js";
import { Op } from "sequelize";

//Controller example with SQLite Database => Sequelize Querying

// get all movies
const getAllNotesFromDB = async (req, res) => {
  try {
    //The findAll() method will return your table rows as an array of objects.
    //The Sequelize findAll() method is used to query data from your SQL table to your JavaScript application.
    const notes = await Note.findAll();
    return res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all movies but only some columns
const getAllNotesCategoryFromDB = async (req, res) => {
  try {
    //The findAll() method will return your table rows as an array of objects.
    //The attributes key will limit the return value to specific columns of the records.
    const notes = await Note.findAll({ attributes: ["category"] });
    return res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
};

// the ID is the primary key => findByPk() sequelize method
const getNotesFromDBById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id); // find by primary key => findByPK()
    if (note) {
      return res.status(200).json(note);
    } else {
      // if no entity exists, null is returned;
      return res
        .status(404)
        .json({ error: `Note with id ${req.params.id} not found` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//INSERT INTO
const insertNoteIntoDB = async (req, res) => {
  try {
    //create is mapped by Sequelize to "INSERT INTO ..."
    const newNote = await Note.create(req.body);
    return res.status(200).json(newNote);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//UPDATE
const updateNoteById = async (req, res) => {
  try {
    const note = await Student.findByPk(req.params.id);
    if (movie) {
      const updateNote = await note.update(req.body); // update using the update() method provided by Sequelize on the returned PK object
      // OBS: update on the found object and not on the "Movie" model
      return res.status(200).json(updateNote);
    } else {
      // if no entity exists, null is returned;
      return res
        .status(404)
        .json({ error: `Note with id ${req.params.id} not found` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteNote = async (req, res) => {
  try {
    const note = await Student.findByPk(req.params.id); // find by primary key => findByPK()
    if (note) {
      // destroy() is mapped to "DELETE ... FROM ..."
      await note.destroy();
      return res.status(200).json("Entity deleted successfully!");
      //OBS: destroy() the found movie and do not call destroy() on the "Movie" model
    } else {
      // if no entity exists, null is returned;
      return res
        .status(404)
        .json({ error: `Movie with id ${req.params.id} not found` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//FILTER

const filterNotesFromDB = async (req, res) => {
  try {
    const date = req.query.date; //
    const notes = await Note.findAll({
      //parametrize the findAll with a "where" object
      //use the ternary operator =>
      where: date ? { datePost: { [Op.gt]: date } } : undefined,

      // use Op for accessing sequelize Operators => Op.gt = greater-than
    });
    return res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
};

export {
    deleteNote,
    filterNotesFromDB,
    updateNoteById,
    insertNoteIntoDB,
    getNotesFromDBById,
    getAllNotesCategoryFromDB,
    getAllNotesFromDB
};
