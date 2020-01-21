import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent implements OnInit {
  @Input() index: number;
  // @Input() chosenCourse: Course;
  courses: Course[];
  // @Input() chosenCourse:Course;
  // @Input() set chosenCourse(chosenCourse: Course){ this.course = chosenCourse}
  course: Course;

  constructor(private coursesService:CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.pipe(map(params => params['course.name'])).subscribe(course => { this.course = this.coursesService.getCourse(this.courseIndex)})
    // this.coursesService.getCourse(this.courseIndex).subscribe(course => this.course = course)

    // this.coursesService.getCourses().subscribe(courses => this.courses = courses);
    // this.coursesService.getCourse(this.courses.indexOf(this.chosenCourse)).subscribe(course => this.course = course)
    this.coursesService.getCourse(this.index).subscribe(course => this.course = course);
  }

}
