import {AutoWired, Inject} from "typescript-ioc";
import {CourseRepository} from "../repo/courseRepository";

export class CourseService {
    @Inject courseRepo: CourseRepository;

    allCourses() {
        return this.courseRepo.findAllCourses();
    }
}