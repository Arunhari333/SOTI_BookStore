import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.scss']
})
export class FeaturedBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  fbooks: any[] = [
    {
      "name": "Maths",
      "price" : 30,
      "id":4,
      "url":"images.jfif"
    },
    {
      "name": "Science",
      "price" : 70,
      "id":5,
      "url":"images.jfif"
    },
    {
      "name": "English",
      "price" : 60,
      "id":6,
      "url":"None"
    },
    {
      "name": "Social",
      "price" : 50,
      "id":7,
      "url":"None"
    },
    {
      "name": "Telugu",
      "price" : 40,
      "id":8,
      "url":"None"
    }];

}