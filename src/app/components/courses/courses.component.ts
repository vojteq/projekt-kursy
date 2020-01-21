import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Course } from '../../models/Course';
// import { TypeOfClasses } from '../../models/TypeOfClasses';
import { CoursesService } from '../../services/courses.service'
import { TypeOfClasses } from 'src/app/models/TypeOfClasses';
import { AuthService } from '../auth/auth.service';
// import { EventEmitter } from 'protractor';
// import { emit } from 'cluster';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() course: Course;    //czy to wgl potrzebne xd
  @Input() rating: number;    //
  @Output() rateCourse: EventEmitter<any> = new EventEmitter()
  // course: Course;
  // rating: number;

  courses: Course[];
  
  constructor(private coursesService:CoursesService, private authService: AuthService) { }

  ngOnInit() {
    // this.courses = this.coursesService.getCourses();
    this.coursesService.getCourses().subscribe(courses => this.courses = courses)
  }

  // onSubmit(course:Course, rating:number) {
              // this.course.sumOfRatings += this.rating;
    // course.sumOfRatings += rating;
    // course.numberOfRatings++;
              // this.courses.splice(this.courses.indexOf(course), 1, course);
              // course.sumOfRatings = course.sumOfRatings + rate;
              // course.numberOfRatings = course.numberOfRatings + 1;
  // }
  // onSubmit() {
  //   this.course.sumOfRatings +=this.rating;
  //   this.course.numberOfRatings++;
  // }

  addCourse(courseToAdd:Course) {
    // this.courses.push(courseToAdd);
    this.coursesService.addCourse(courseToAdd);
  }

  deleteCourse(courseToDelete:Course) {
    // delete this.courses[this.courses.indexOf(courseToDelete, 0)]
    this.coursesService.deleteCourse(courseToDelete);
  }

  setClasses(index:number) {
    let classes;
    if (index % 2 == 0) {
      classes = {
        even: true,
        odd: false
      }
    }
    else {
      classes = {
        even: false,
        odd: true
      }
    }
    return classes;
  }
}
