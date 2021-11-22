import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './view/index/index.component';
import { BuyComponent } from "./view/buy/buy.component";

const routes: Routes = [
      { path: '', component: IndexComponent },
      { path: 'buy', component: BuyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
