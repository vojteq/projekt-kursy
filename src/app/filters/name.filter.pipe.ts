import { Pipe, PipeTransform } from "@angular/core";
import { Course } from '../models/Course';

@Pipe({
    name: 'nameFilterPipe',
    pure: false
})

export class NameFilterPipe implements PipeTransform {
    transform(courses: Course[], searchName: string): Course[] {
        if (!courses) return [];
        if (!searchName) return courses;
        searchName = searchName.toLowerCase();
        return courses.filter( course => {
            return course.name.toLowerCase().includes(searchName);
        })
    }
}