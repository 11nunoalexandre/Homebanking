import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { HomeComponent } from './componets/home/home.component';
import { MenuComponent } from './componets/menu/menu.component';
import { FooterComponent } from './componets/footer/footer.component';
import { FormComponent } from './componets/form/form.component';
import { ButtonComponent } from './componets/button/button.component';
import { InputComponent } from './componets/input/input.component';
import { TableComponent } from './componets/table/table.component';
import { BankComponent } from './componets/bank/bank.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    FormComponent,
    ButtonComponent,
    InputComponent,
    TableComponent,
    BankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
