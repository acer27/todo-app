import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TaskComponent } from './task/task.component';

@NgModule({
    declarations: [AppComponent, NavigationComponent, TaskComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}