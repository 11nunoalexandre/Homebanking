import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./componets/menu/menu.component";
import {FooterComponent} from "./componets/footer/footer.component";
import {LoginComponent} from "./componets/login/login.component";
import {BankComponent} from "./componets/bank/bank.component";
import {HomeComponent} from "./componets/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'bank', component: BankComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
