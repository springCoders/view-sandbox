import { Component, OnInit, Inject, HostListener, ElementRef, ViewChild} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {TweenLite} from "gsap";
import { Indicator } from './indicator';
declare var $: any;
declare var TweenMax: any;
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

  index = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '12345'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });

  // @ViewChild('slider') sliderEl: ElementRef;
  eventText = '';
  indicators;
   
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
  
  

constructor() { 
    this.indicators = new Indicator();

    // Hammer.on(window, "load resize scroll", function(ev) {
    
    //   var myElement = document.getElementById('inTry');
    //   var myElement2 = document.getElementById('inTry2');
    //   //     var hammertime = new Hammer(myElement);
    //   //     hammertime.on('pan', function(ev) {
    //   // 	console.log(ev);
    //   // });
      
    //   var mc = new Hammer.Manager(myElement, {
    //     recognizers: [ 
    //       [Hammer.Rotate],
    //       [Hammer.Pinch, { enable: false }, ['rotate']],
    //       [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
    //     ]
    //   });
    //   var hammertime = new Hammer(document.getElementById('inTry'));
    //   hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    //   hammertime.get('pinch').set({ enable: true });
    //   hammertime.get('rotate').set({ enable: true });
    //   hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });       // var pinch = new Hammer.Pinch();
    //   // mc.add(pinch);
    //   mc.add( new Hammer.Swipe({ direction: Hammer.DIRECTION_ALL, threshold: 0, pointers: 0 }) );
    //   mc.add( new Hammer.Tap({ event: 'quadrupletap', taps: 4 }) );
    //   var lastCenter;

    //   function onDrag(ev){

    //     var center = ev.gesture.center;
    //     if (lastCenter) 
    //     myElement2.innerHTML = "hello inner";
    //     lastCenter = center;
    // }

    //   mc.on("Swipe", onDrag);
      
    //   console.log(ev.type);
    // });
    Hammer.on(window, "load resize scroll", function(ev) {
    // var sliderEl = document.querySelector( '.slider' );
    var sliderEl = document.getElementById( 'slider' );
    var slideCount = 3;
    var activeSlide = 0; // NEW: the current slide # (0 = first)
    var sliderManager = new Hammer.Manager( sliderEl );
    sliderManager.add( new Hammer.Pan({ threshold: 0, pointers: 0 }) );
    sliderManager.on( 'pan', function( e ) {
      var percentage = 100 / slideCount * e.deltaX / window.innerWidth;
      var transformPercentage = percentage - 100 / slideCount * activeSlide; // NEW
      sliderEl.style.transform = 'translateX( ' + transformPercentage + '% )';
      if( e.isFinal ) { // NEW: this only runs on event end
        if( percentage < 0 )
          goToSlide( activeSlide + 1 );
        else if( percentage > 0 )
          goToSlide( activeSlide - 1 );
        else
          goToSlide( activeSlide );
      }
    });
    
    // NEW: function that changes the slide
    var goToSlide = function( number ) {
      if( number < 0 )
        activeSlide = 0;
      else if( number > slideCount - 1 )
        activeSlide = slideCount - 1
      else
        activeSlide = number;
    
     var percentage = -( 100 / slideCount ) * activeSlide;
     sliderEl.style.transform = 'translateX( ' + percentage + '% )';
    };
    });
  }

  ngOnInit() {}

  imageZoom(vk){
    this.zoom = true;
    this.vv = vk;
  }
  close(){
    this.zoom = false;
  }
 
 
push() {
  this.avatars.push(
    {
      url: `https://picsum.photos/600/400/?${this.avatars.length + 1}`,
      title: `${this.avatars.length + 1}`
    }
  );
}

remove() {
  this.avatars.splice(this.avatars.length - 1, 1);
}


indexChanged(index) {
  console.log(index);
}

toggleDirection($event) {
  this.direction = this.directionToggle ? 'right' : 'left';
}


 }
