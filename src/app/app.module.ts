import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { HeaderComponent } from './layout/header/header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

// import { AngularFireModule} from "@angular/fire";
// import { AngularFireAuthModule} from "@angular/fire/auth";
// import { AngularFirestoreModule} from '@angular/fire/firestore';
// import { AngularFireDatabaseModule} from '@angular/fire/database';
// import { environment } from '../environments/environment';

import { NameFilterPipe } from './filters/name.filter.pipe';
import { EctsFilterPipe } from './filters/ects.filter.pipe';
import { SemesterFilterPipe } from './filters/semester.filter.pipe';
import { CourseComponent } from './components/course/course.component';
// import { environment } from 'src/environments/environment';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    HeaderComponent,
    CoursesComponent,

    NameFilterPipe,
    EctsFilterPipe,
    SemesterFilterPipe,
    CourseDetailsComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule,

    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
