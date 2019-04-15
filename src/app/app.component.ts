import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-cart';
  selectedPage = 'recipes'; //default page
  //selectedPage = 'shopping-list';

  onSelectedPage(page: string) {
    this.selectedPage = page;
  }
}
