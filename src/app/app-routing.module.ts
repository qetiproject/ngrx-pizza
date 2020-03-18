import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaOrderComponent } from './pizza/pizza-order/pizza-order.component';


const routes: Routes = [
  {path: 'pizza', component: PizzaOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
