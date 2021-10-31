import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: any[]=[];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.getCategories()
      .subscribe((res: any) => {
        console.log(res);
        this.categories = res;
      });
  }

}
