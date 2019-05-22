import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  money = 88;

  location = "chennai";

  birthday = new Date()

  friends:["Kumar", "Vinay", "Gokulash", "Ajay", "Suresh"]

  constructor() { }

  ngOnInit() {
  }

}
