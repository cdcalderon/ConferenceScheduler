import * as express from 'express';
import {Application} from "express";
import {CourseController} from "./controllers/courseController";

const app: Application = express();

app.route('/api/courses').get((req, res) => {
    let courseController: CourseController = new CourseController();

    courseController.allCourses()
        .then(courses => {
            res.status(200).json({courses});
        });


});

app.listen(8090, () => {
    console.log('Server is running............');
});






