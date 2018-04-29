import * as ORM from "sequelize";

import {LoggingOptions} from "sequelize";

const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';

const options: LoggingOptions = {benchmark: true, logging: console.log};

export const sequelize = new ORM(dbUrl, options);

