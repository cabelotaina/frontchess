import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public disable: boolean = false; 

  selected(square){
    console.log(square);
    this.disable = true;
  }

  enable() {
    this.disable = false;
  }
}
