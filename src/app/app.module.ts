import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from './form.service';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
