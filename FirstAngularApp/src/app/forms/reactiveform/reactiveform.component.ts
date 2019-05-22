import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  simpleForm: any

  constructor() { }

  ngOnInit() {
    this.simpleForm = new FormGroup({
      fname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      /* lname: new FormControl("", Validators.compose([
        Validators.pattern('^[a-zA-Z ]+$'),
        Validators.minLength(4)
      ])) */
      lname: new FormControl("", this.customLengthValidator),
      hobby: new FormControl()
    });
  }

  customLengthValidator = function(control){
    console.log("Received control instance");
    console.log(control);
    if(control.value.length<4){
      return { 'lname': true};
    }
  };

  saveData = function (something) {
    console.log(something);
  }
}
