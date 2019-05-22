import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {

  friends = ["Kumar", "Kalanghiyam", "KK"]
  locations = [
    {
      city: "Chennai",
      code: "044"
    },
    {
      city: "Mumbai",
      code: "022"
    },
    {
      city: "Bangalore",
      code: "080"
    }
  ]

  display: boolean = true
  checkOne:boolean = true
  
  check = "K"

  playHideAndSeek = function () {
    this.display = this.display ? false : true
  }

  displayOnOff = function () {
    this.checkOne = this.checkOne ? false : true
  }

  constructor() { }

  ngOnInit() {
  }

}
