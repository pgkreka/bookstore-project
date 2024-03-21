// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Add this import

import { AppComponent } from './app.component';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SearchPageComponent } from "./search-page/search-page.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NgModule
      ],
      declarations: [
        AppComponent,
        TopBarComponent,
        SearchPageComponent
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
