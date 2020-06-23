import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TasksComponent } from "./tasks/tasks.component";
import { HttpErrorHandler } from "./http-error-handler.service";
import { MessageService } from "./message.service";
import { TasksService } from './tasks/tasks.service';


@NgModule({  
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, TasksComponent ],
  providers: [MessageService, HttpErrorHandler, TasksService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
