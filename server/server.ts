import {Course} from "./model/Course";

const courses$ = Course.findAll();

courses$
    .then(r => console.log(JSON.stringify(r)));