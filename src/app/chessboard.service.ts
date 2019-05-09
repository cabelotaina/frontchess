import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { KnightMoviments } from './knight.model';

@Injectable({
  providedIn: 'root'
})
export class ChessboardService {

  private baseRoute = environment.api;
  private knightMovimentsRoute = this.baseRoute+'knight/'

  constructor(private http: HttpClient) {}

  public get(square){
    return this.http.get<KnightMoviments>(
      this.knightMovimentsRoute+square
    );
  }
}
