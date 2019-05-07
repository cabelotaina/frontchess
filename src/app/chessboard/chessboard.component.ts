import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  private selectedSquare: string = null;

  public whiteClass: string;
  public blackClass: string;

  constructor() { }

  ngOnInit() {
  }

  public disable: boolean = false; 

  selected(square){
    console.log(square);
    if (this.selectedSquare === null){
      this.selectedSquare = square;
    }
  }

  enable() {
    this.disable = false;
  }

  restart(){
    console.log("TODO: RESTART");
  }

  route(){
    console.log("TODO: ROUTE");
    
  }
}
