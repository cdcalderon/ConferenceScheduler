import {Sequelize} from "sequelize";
import * as ORM from "Sequelize";
import {sequelize} from "../db/sequelizeDb";

function CreateCourse(sequelize: Sequelize) {
    return sequelize.define('Course', {
        description: ORM.STRING,
        url: ORM.STRING,
        longDescription: ORM.TEXT,
        iconUrl: ORM.STRING,
        courseListIcon: ORM.STRING,
        seqNo: ORM.INTEGER,
        comingSoon: ORM.BOOLEAN,
        isNew: ORM.BOOLEAN,
        isOngoing: ORM.BOOLEAN
    })
}

export const Course = CreateCourse(sequelize);


