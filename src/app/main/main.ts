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
    "name": "Laab kai chicken salad",
    "price": 10,
    "nuts": true,
    "image": "https://course-jsbasic.javascript.ru/assets/products/laab_kai_chicken_salad.png",
    "vegeterian": false,
    "spiciness": 2,
    "categoryId": 1,
    "color" : ["pink", "blue", "green"],

  },
  {
    "id": 2,
    "name": "Som tam papaya salad",
    "price": 9.5,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/som_tam_papaya_salad.png",
    "vegeterian": true,
    "spiciness": 0,
    "categoryId": 1,
   "color" : ["red", "blue", "green"]
  },
  {
    "id": 3,
    "name": "Tom yam kai",
    "price": 7,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png",
    "vegeterian": false,
    "spiciness": 3,
    "categoryId": 2,
       "color" : ["yellow", "blue", "green"]
  },
  {
    "id": 4,
    "name": "Tom kha kai",
    "price": 7,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png",
    "vegeterian": false,
    "spiciness": 3,
    "categoryId": 2,
       "color" : ["red", "purple", "green"]
  }
  ]
}
