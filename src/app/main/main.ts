import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

  product = [
     {
       "id": 1,
    "image": "/images/1.jpg" ,
  },
  {
    "id": 2,
    "image": "/images/2.jpg",
  },
  {
    "id": 3,
    "image": "/images/3.jpg",
  },
  {
    "id": 4,
    "image": "/images/4.jpg",
  },
  {
  "id": 5,
  "image" : "/images/5.jpg",
  },
    {
  "id": 6,
  "image" : "/images/6.jpg",
  },
    {
  "id": 7,
  "image" : "/images/7.webp",
  },
    {
  "id": 8,
  "image" : "/images/8.jpg",
  },
    {
  "id": 9,
  "image" : "/images/9.webp",
  },
    {
  "id": 10,
  "image" : "/images/10.webp",
  },
  {
    "id": 11,
    "image": "/images/11.webp",
  },
  {
    "id": 12,
    "image": "/images/12.webp",
  },
  {
    "id": 13,
    "image": "/images/13.webp",
  },
  {
    "id": 14,
    "image": "/images/14.webp",
  },
  {
    "id": 15,
    "image": "/images/15.jpg",
  },
  {
    "id": 16,
    "image": "/images/16.webp",
  },
  {
    "id": 17,
    "image": "/images/17.jpg",
  },
  {
    "id": 18,
    "image": "/images/18.jpg",
  },
  {
    "id": 19,
    "image": "/images/19.webp",
  },
  {
    "id": 20,
    "image": "/images/20.webp",
  },
  ]




  showWork = "Work"
   workClass = "hideCard"
   onClickWork() { if(this.showWork == "Work") {
    this.showWork = "Work."
  this.workClass = "showCard"
   } else {
    this.showWork = "Work"
    this.workClass = "hideCard"
   }
   }



    navAboutMe = "About Me"
     showAboutMe = "hideAboutMeContainer"

     onClickAboutMe() {
      if(this.navAboutMe == "About Me") {
        this.navAboutMe = "About Me."
        this.showAboutMe = "showAboutMeContainer"
      }
      else {
        this.navAboutMe = "About Me"
        this.showAboutMe = "hideAboutMeContainer"
      }
     }

     navContact = "Contact"
     showContact = "hideContact"

}
