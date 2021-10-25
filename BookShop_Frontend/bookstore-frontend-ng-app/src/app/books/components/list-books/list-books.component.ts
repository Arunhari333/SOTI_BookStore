import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  books: any[] = [
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
      "url":"images.jfif"
    },
    {
      "name": "Social",
      "price" : 50,
      "id":7,
      "url":"images.jfif"
    },
    {
      "name": "Telugu",
      "price" : 40,
      "id":8,
      "url":"images.jfif"
    }];

}
