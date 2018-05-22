import {Request, Response} from "express";
import {CourseController} from "../controllers/courseController";

export function  apiGetAllCourses(req:Request, res:Response) {
    let courseController: CourseController = new CourseController();

    courseController.allCourses()
        .then(courses => {
            res.status(200).json({courses});
        });
}