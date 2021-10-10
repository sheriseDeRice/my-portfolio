import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutMeComponent } from './aboutmePage/aboutme.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { PagefooterComponent } from './common/pagefooter/pagefooter.component';
import { HighlightcardComponent } from './common/highlightcard/highlightcard.component';
import { ContentComponent } from './content/content.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutme', component: AboutMeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ToolbarComponent,
    PagefooterComponent,
    HighlightcardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
