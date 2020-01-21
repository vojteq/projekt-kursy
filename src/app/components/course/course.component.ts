import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Input() index: number;
  courses: Course[];
  constructor(private coursesService:CoursesService, private authService: AuthService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(courses => this.courses = courses)
  }

  addCourse(courseToAdd:Course) {
    this.coursesService.addCourse(courseToAdd);
  }

  deleteCourse(courseToDelete:Course) {
    this.coursesService.deleteCourse(courseToDelete);
  }


  setClasses() {
    let classes;
    if (this.index % 2 == 0) {
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
