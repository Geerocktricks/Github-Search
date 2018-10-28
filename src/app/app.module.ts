import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './ProfileService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule ,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
