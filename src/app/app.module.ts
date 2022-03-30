import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './shared/components/form/form.component';
import { InputComponent } from './shared/components/input/input.component';
import { ArrayJoinPipe } from './shared/pipes/array-join/array-join.pipe';

@NgModule({
  declarations: [AppComponent, FormComponent, InputComponent, ArrayJoinPipe],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
