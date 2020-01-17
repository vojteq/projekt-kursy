import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSES } from '../mock-courses';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  // counter:number = 12;

  // increaseCounter() {
  //   this.counter++;
  // }

  getCourses() : Observable<Course[]> {
    return of(COURSES);
  }

  addCourse(course) {
    COURSES.push(course);
  }

  deleteCourse(course) {
    COURSES.splice(COURSES.indexOf(course), 1);
  }
}
