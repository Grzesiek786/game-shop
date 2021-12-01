import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../games.model';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Games[];

  constructor(private gamesService: GamesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }

  onNewGame() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
