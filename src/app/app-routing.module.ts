import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamesDetailComponent } from "./games/games-detail/games-detail.component";
import { GamesEditComponent } from "./games/games-edit/games-edit.component";
import { GamesComponent } from "./games/games.component";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ShopListComponent } from "./shop-list/shop-list.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'games', component: GamesComponent, children: [
        { path: 'new', component: GamesEditComponent },
        { path: ':id', component: GamesDetailComponent }
    ] },
    { path: 'shop-list', component: ShopListComponent },
    { path: 'login', component: LoginComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '404'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}