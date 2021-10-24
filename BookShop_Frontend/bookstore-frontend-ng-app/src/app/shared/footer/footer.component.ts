import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
    <hr>
    <app-menu><li class="nav-item">
      <a class="nav-link" href="#">Back to Top</a>
    </li></app-menu>
    
      <p class="copyright">Copyright 2021 - booooook store!!!</p>
      
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
