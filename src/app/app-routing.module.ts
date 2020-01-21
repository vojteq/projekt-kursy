import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';


const routes: Routes = [
  // // { path: '', redirectTo: '/courses', pathMatch: 'full' },
  // { path: '', component: CoursesComponent },
  // // { path: 'details/:name', component: CourseDetailsComponent }
  // { path: 'details/:name', component: CourseDetailsComponent }
  {
    path: 'main',
    component: CoursesComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/details/:index',
    component: CourseDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
