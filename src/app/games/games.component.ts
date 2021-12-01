import { Component, OnInit } from '@angular/core';
import { Games } from './games.model';
import { GamesService } from './games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  selectedGame: Games;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.gameSelected
      .subscribe(
        (game: Games) => {
          this.selectedGame = game;
        }
      )
  }

}
