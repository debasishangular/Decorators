import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildOneComponent } from './input-output/child-one/child-one.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildComponent } from './view-child/child/child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentChildComponent } from './Content-projection/content-child/content-child.component'; // Need for ngModel

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    ChildOneComponent,
    ViewChildComponent,
    ChildComponent,
    ContentProjectionComponent,
    ContentChildComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
