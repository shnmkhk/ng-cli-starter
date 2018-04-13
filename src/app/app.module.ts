import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PasswordStrengthBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
