import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";

@Component({  //creating component decorator function
    selector: 'courses', // <courses> = "courses", <div class="courses"> = .courses, <div id="courses"> = #courses
    template: '<h2>Courses</h2>', //HTML markup to be rendered for this component

})
export class CoursescComponent{


}