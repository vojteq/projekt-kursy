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
  // type: TypeOfClasses;
  type: string;
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

// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { TypeOfClasses } from '../../models/TypeOfClasses';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-add-course',
//   templateUrl: './add-course.component.html',
//   styleUrls: ['./add-course.component.css']
// })

// export class AddCourseComponent implements OnInit {
//   @Output() addCourse: EventEmitter<any> = new EventEmitter();
//   courseFormGroup: FormGroup;
//   constructor() { }

//   ngOnInit() {
//     let name: string;
//     let ects: number;
//     let type: TypeOfClasses;
//     let maxStudents: number;
//     let rating: number;
//     let description: string;
//     let pictureUrl: string;

//     this.courseFormGroup = new FormGroup({
//       name: new FormControl(name, Validators.required),
//       ects: new FormControl(ects, Validators.required),
//       type: new FormControl(type, Validators.required),
//       maxStudents: new FormControl(maxStudents, Validators.required),
//       rating: new FormControl(rating, Validators.required),
//       description: new FormControl(description, Validators.required),
//       pictureUrl: new FormControl(pictureUrl, Validators.required),
//     });
//   }
  
//   onSubmit() {
//     const course = {
//       name: this.courseFormGroup.value.name,
//       ects: this.courseFormGroup.value.ects,
//       semester: this.courseFormGroup.value.semester,
//       type: this.courseFormGroup.value.type,
//       maxStudents: this.courseFormGroup.value.maxStudents,
//       numberOfRatings: 1,
//       sumOfRatings: this.courseFormGroup.value.rating,
//       description: this.courseFormGroup.value.description,
//       pictureUrl: this.courseFormGroup.value.pictureUrl
//     }
//     this.addCourse.emit(course);
//   }
// }
