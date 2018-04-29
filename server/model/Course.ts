import {Sequelize} from "sequelize";
import * as ORM from "sequelize";


export function Courses(sequelize: Sequelize) {
    return sequelize.define('Course', {
        description: ORM.STRING,
        url:  ORM.STRING,
        longDescription: ORM.TEXT,
        iconUrl: ORM.STRING,
        courseListIcon: ORM.STRING,
        seqNo: ORM.INTEGER,
        comingSoon: ORM.BOOLEAN,
        isNew: ORM.BOOLEAN,
        isOngoing: ORM.BOOLEAN
    })
}

