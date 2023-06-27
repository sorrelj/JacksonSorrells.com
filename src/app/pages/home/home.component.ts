import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
    document.body.classList.add("overflow-hidden");
  }

  ngOnDestroy() {
    document.body.classList.remove("overflow-hidden");
  }
}
