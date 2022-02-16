import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({  //creating component decorator function
    selector: 'courses', // <courses> = "courses", <div class="courses"> = .courses, <div id="courses"> = #courses
    template: '<h2>{{"Title:" + title }}</h2><ul> <li *ngFor="let course of courses">{{ course }} </li></ul>'


})
export class CoursesComponent{
    title = " List of Courses";
    courses: any;

    constructor(service: CoursesService){
        this.courses= service.getCourses;
    }

}