import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

const Student = sequelize.define(
    "Student",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true, // specify that this is the primary key of the table
            autoIncrement: true,
        },
        firstName: DataTypes.STRING, // we don't have to pass a configuration object if we don't want to
        lastName: DataTypes.STRING, // we don't have to pass a configuration object if we don't want to
        email: DataTypes.STRING, // we don't have to pass a configuration object if we don't want to
        gender: {
            type: DataTypes.STRING,
            allowNull: false, // whether we allow for null values in this column or not
          },
        },
    {
        tableName: "Students",
    }
);
export {Student}