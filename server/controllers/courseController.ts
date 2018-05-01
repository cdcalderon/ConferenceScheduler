
import {Inject} from "typescript-ioc";
import {CourseService} from "../service/CourseService";

export class CourseController {
    @Inject courseService: CourseService;

    allCourses() {
        return this.courseService.allCourses();
    }
}