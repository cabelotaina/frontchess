import { Component, OnInit } from '@angular/core';
import { ChessboardService } from '../chessboard.service';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  public selectedSquare: string = null;
  private event;
  public whiteClass: string;
  public blackClass: string;
  private squares: [];
  private turnButtom;

  constructor(private chessboardService: ChessboardService) { }

  ngOnInit() {
  }

  public disable: boolean = false; 

  selected(event){
    if (this.selectedSquare === null) {
      let square: string = event.target.id;
      this.event = event;
      event.target.style.backgroundColor = 'yellow';
      this.selectedSquare = square;
    }
  }

  enable() {
    this.disable = false;
  }

  restart() {
    this.selectedSquare = null;
    if (this.event) {
      this.event.target.style.backgroundColor = '';
    }
    if (this.squares) {
      for (let square of this.squares) {
        var target = document.getElementById(square);
        target.style.backgroundColor = '';
      }
    }
    if (this.turnButtom) {
      this.turnButtom.disabled = false;
    }
  }

  route(event) {
    this.turnButtom = event;
    this.turnButtom.target.disabled = true;

    this.chessboardService.get(this.selectedSquare)
    .subscribe(res => {
      this.squares = res.squares;
      for (let square of this.squares) {
        var target = document.getElementById(square);
        target.style.backgroundColor = 'green';
      }
    }, err => {
      console.error(err);
      alert(err.message);
    })
  }
}
