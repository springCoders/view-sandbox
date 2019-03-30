import { Component, OnInit, Inject, HostListener, ElementRef } from '@angular/core';
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
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //       opacity: 1,
  //     })),
  //     state('closed', style({
  //        transform:' rotateY( 180deg )',            
  //       transition: 'transform 150ms ease-in'
  //     })),
  //     transition('open => closed', [
  //       animate('.05s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.05s')
  //     ]),
  //   ]),
  // ], 
})
export class HomeComponent implements OnInit  {
  zoom: Boolean = false;
  vv: any;


  items = [
    { title: 'Slide 1', image: 'assets/laptop1.jpeg' },
    { title: 'Slide 2', image: 'assets/laptop2.jpeg' },
    { title: 'Slide 3', image: 'assets/laptop1.jpeg' },
  ]
  
  addSlide() {
    this.items.push({
      title: `Slide 4` , image: 'assets/laptop2.jpeg' 
    });
  }


   portflio = [
  {id: 1, image: "assets/01.jpg", department: 'Angular Development'},
  {id: 1, image:"assets/01.jpg", department: 'Pythan Development'},
  {id: 1, image:"assets/01.jpg", department: 'ReactJS Development'},
  {id: 1, image:"assets/01.jpg", department: 'React Native Development'},
  {id: 1, image: "assets/01.jpg", department: 'Web Development'},
  {id: 1, image:"assets/01.jpg", department: 'Wordpress Development'},
  {id: 1, image:"assets/01.jpg", department: 'Jave Development'},
  {id: 1, image:"assets/01.jpg", department: ' Development'}
];

whatIdo = [
  { service: 'WEB DESIGN', image: 'add_to_queue', description: 'Proin a ullamcorper et primis lobortis laoreet senectus. Vitae dignissim sollicitudin eleifend cursus tempus curabitur posuere nam arcu platea sodales.'},
  { service: 'WEB DEVELOPMENT', image: 'add_to_queue', description: 'Proin a ullamcorper et primis lobortis laoreet senectus. Vitae dignissim sollicitudin eleifend cursus tempus curabitur posuere nam arcu platea sodales.'},
  { service: 'GRAPHIC DESIGN', image: 'add_to_queue', description: 'Proin a ullamcorper et primis lobortis laoreet senectus. Vitae dignissim sollicitudin eleifend cursus tempus curabitur posuere nam arcu platea sodales.'},
  { service: 'BRANDING', image: 'add_to_queue', description: 'Proin a ullamcorper et primis lobortis laoreet senectus. Vitae dignissim sollicitudin eleifend cursus tempus curabitur posuere nam arcu platea sodales.'},
  { service: 'WEB DESIGN', image: 'add_to_queue', description: 'Proin a ullamcorper et primis lobortis laoreet senectus. Vitae dignissim sollicitudin eleifend cursus tempus curabitur posuere nam arcu platea sodales.'},
  { service: 'OPENCART', image: 'add_to_queue', description: 'Proin a ullamcorper et primis lobortis laoreet senectus. Vitae dignissim sollicitudin eleifend cursus tempus curabitur posuere nam arcu platea sodales.'}, 
];

client =[
  {image:"assets/01.jpg", name:'Grace Ruby', comment:'Sem duis platea erat feugiat vivamus nascetur sapien tortor. Sollic dictum ultric. Aliquam inceptos bibendum fringilla sodales. Molest lacin urna per aenean commodo sociosqu.'},
  {image:"assets/01.jpg", name:'Grace Ruby', comment:'Sem duis platea erat feugiat vivamus nascetur sapien tortor. Sollic dictum ultric. Aliquam inceptos bibendum fringilla sodales. Molest lacin urna per aenean commodo sociosqu.'}
]
 



  isOpen = true;
  fireEvent(e){
    this.isOpen = !this.isOpen;
  }
  mouseenter(){ }
  mouseleave(){}
  constructor() { }

  ngOnInit() {}

  imageZoom(vk){
    this.zoom = true;
    this.vv = vk;
  }
  close(){
    this.zoom = false;
  }
}
