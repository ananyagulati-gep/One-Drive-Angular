import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { test1 } from '../assets/javascript/demo';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { onedrive } from 'one-drive-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // onedrive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
