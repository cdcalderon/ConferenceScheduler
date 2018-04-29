import {Course} from "../model/Course";

export class CourseRepository {

    coursesAll$ = Course.findAll({
        order: ['seqNo']
    });

    findAllCourses() {
        return this.coursesAll$;
    }
}