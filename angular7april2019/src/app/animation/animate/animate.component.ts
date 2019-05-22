import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';



@Component({
  selector: 'app-animate',
  animations:[
    trigger('doAnimateText',[
      state('start',  style({ 
        color:'brown',
        transform: 'scale(1)'
      })),
      state('end', style({
        color:'blue',
        transform: 'scale(2)',
        letterSpacing: '5px'
      })),
      transition('start<->end', 
                  animate('2000ms ease-in'))
    ])
  ],
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
})
export class AnimateComponent implements OnInit {

  currentState = 'start';

  constructor() { }

  ngOnInit() {
  }

  doAnimation = function(){
    this.currentState = this.currentState === 'start'?'end':'start'
  }
}
