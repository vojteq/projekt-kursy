import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TypeOfClasses } from '../../models/TypeOfClasses';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent implements OnInit {
  @Output() addCourse: EventEmitter<any> = new EventEmitter();
  
  name: string;
  ects: number;
  semester: number;
  type: TypeOfClasses;
  maxStudents: number;
  rating: number;
  numberOfRatings: number;
  sumOfRatings: number;
  description: string;
  pictureUrl: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const course = {
      name: this.name,
      ects: this.ects,
      semester: this.semester,
      type: this.type,
      maxStudents: this.maxStudents,
      numberOfRatings: 1,
      sumOfRatings: this.rating,
      description: this.description,
      pictureUrl: this.pictureUrl
    }
    this.addCourse.emit(course);
  }
}
