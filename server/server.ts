import * as ORM from "Sequelize";
import {Courses} from "./model/Course";
import {LoggingOptions} from "sequelize";

const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';

const options: LoggingOptions = {benchmark: true, logging: console.log};

const sequelize = new ORM(dbUrl, options);

const CourseModel = Courses(sequelize);

CourseModel.findAll()
    .then(r => console.log(JSON.stringify(r)));