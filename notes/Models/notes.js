import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

const Note = sequelize.define(
    "Note",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true, // specify that this is the primary key of the table
            autoIncrement: true,
        },
        category: DataTypes.STRING, // we don't have to pass a configuration object if we don't want to
        title: DataTypes.STRING, // we don't have to pass a configuration object if we don't want to
        datePost: DataTypes.DATE,
        states: {
            type: DataTypes.ENUM,
            values: ['active', 'pending', 'deleted']
          }
        },
    {
        tableName: "Notes",
    }
);
export {Note}