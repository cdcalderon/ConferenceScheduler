import {Inject} from "typescript-ioc";
import {CourseService} from "./service/CourseService";

class CourseController {
    @Inject courseService: CourseService;

    allCourses() {
        return this.courseService.allCourses();
    }
}

let courseController: CourseController = new CourseController();

courseController.allCourses()
    .then(r => {
        console.log(JSON.stringify(r))
    });
