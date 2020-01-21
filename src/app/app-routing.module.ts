import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';


const routes: Routes = [
  // // { path: '', redirectTo: '/courses', pathMatch: 'full' },
  // { path: '', component: CoursesComponent },
  // // { path: 'details/:name', component: CourseDetailsComponent }
  // { path: 'details/:name', component: CourseDetailsComponent }
  {
    path: 'glowna',
    component: CoursesComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/details/:index',
    component: CourseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
