import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
   { path: '', component: ChessboardComponent },
   { path: 'knight', component: ChessboardComponent },
   { path: '404', component: NotFoundComponent },
   { path: 'unknight', component: NotFoundComponent },
   { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}