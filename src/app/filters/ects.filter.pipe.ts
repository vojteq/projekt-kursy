import { Pipe, PipeTransform } from "@angular/core";
import { Course } from '../models/Course';

@Pipe({
    name: 'ectsFilterPipe',
    pure: false
})

export class EctsFilterPipe implements PipeTransform {
    transform(courses: Course[], searchEcts: number): Course[] {
        if (!courses) return [];
        if (!searchEcts) return courses;
        searchEcts = searchEcts.valueOf();
        return courses.filter( course => {
            return course.ects.valueOf() == searchEcts;
        })
    }
}