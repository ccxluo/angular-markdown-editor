import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorMdDirective } from './editor-md.directive';
import { EditorMarkdownComponent } from './editor-markdown/editor-markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorMdDirective,
    EditorMarkdownComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
