import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BiglistsearchComponent } from './biglistsearch/biglistsearch.component';
import { FormsModule } from '@angular/forms';
import { ThingsService } from './things.service';
import { BigListPipePipe } from './biglistsearch/big-list-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    BiglistsearchComponent,
    BigListPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ThingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
