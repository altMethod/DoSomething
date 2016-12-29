import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { 
    path: 'todo',
    component: TodosComponent,
    pathMatch: 'full'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutes {}