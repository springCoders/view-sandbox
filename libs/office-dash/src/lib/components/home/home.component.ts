import { Component, OnInit,HostListener, ElementRef } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
 
@Component({
  selector: 'officeintegrator-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
         transform:' rotateZ( 180deg )',            
        transition: 'transform 150ms ease-in'
      })),
      transition('open => closed', [
        animate('.05s')
      ]),
      transition('closed => open', [
        animate('0.05s')
      ]),
    ]),
  ], 
})
export class HomeComponent {
  isOpen = true;
  fireEvent(e){
    this.isOpen = !this.isOpen;
  }
   
}
