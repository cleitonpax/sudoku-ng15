import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { StageComponent } from './components/stage/stage.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'game', 
    component: StageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
