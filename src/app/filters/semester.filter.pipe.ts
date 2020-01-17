import { Pipe, PipeTransform } from "@angular/core";
import { Course } from '../models/Course';

@Pipe({
    name: 'semesterFilterPipe',
    pure: false
})

export class SemesterFilterPipe implements PipeTransform {
    transform(courses: Course[], searchSemester: number): Course[] {
        if (!courses) return [];
        if (!searchSemester) return courses;
        searchSemester = searchSemester.valueOf();
        return courses.filter( course => {
            return course.semester.valueOf() == searchSemester;
        });
    }
}