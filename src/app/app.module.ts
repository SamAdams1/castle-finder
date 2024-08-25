// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeafletModule } from '@bluehalo/ngx-leaflet'; // Import LeafletModule

@NgModule({
  declarations: [
    // AppComponent,
    // Other components
  ],
  imports: [
    BrowserModule,
    LeafletModule,  // Add LeafletModule here
    // Other modules
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
