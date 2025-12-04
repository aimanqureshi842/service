import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostOneComponent } from './shared/component/post-one/post-one.component';
import { PostTwoComponent } from './shared/component/post-two/post-two.component';
import { PostThreeComponent } from './shared/component/post-three/post-three.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/component/material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PostOneComponent,
    PostTwoComponent,
    PostThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
