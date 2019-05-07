import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChessboardService {

  private baseRoute = 'http://localhost:3000/api/v1/';
  private knightRoute = this.baseRoute+'knight/'

  constructor(private http: HttpClient) { }

  public get(square){
    return this.http.get<any>(this.knightRoute+square);
  }
}
