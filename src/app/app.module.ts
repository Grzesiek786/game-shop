import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GamesDetailComponent } from './games/games-detail/games-detail.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { GamesItemComponent } from './games/games-list/games-item/games-item.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { GameStartComponent } from './games/game-start/game-start.component';
import { GamesEditComponent } from './games/games-edit/games-edit.component';
import { DropDownDirective } from './shared/appDropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    LoginComponent,
    HeaderComponent,
    GamesComponent,
    GamesListComponent,
    GamesDetailComponent,
    GamesItemComponent,
    ShortenPipe,
    HomeComponent,
    PageNotFoundComponent,
    GameStartComponent,
    GamesEditComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
