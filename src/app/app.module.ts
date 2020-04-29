import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

// import { GithubUserWidgetModule } from '../../projects/github-user-widget/src/lib/github-user-widget.module';
import { GithubUserWidgetModule } from 'github-user-widget';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GithubUserWidgetModule, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
