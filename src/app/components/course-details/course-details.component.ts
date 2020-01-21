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
  @Input() rate: number;

  constructor(private coursesService:CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCourse();
  }

  onSubmitCourse() {
    this.course.sumOfRatings += this.rate;
    this.course.numberOfRatings ++;
  }

  getCourse(): void {
    const index = +this.route.snapshot.paramMap.get('index');
    this.coursesService.getCourse(index)
      .subscribe(course => this.course = course);
  }

}
