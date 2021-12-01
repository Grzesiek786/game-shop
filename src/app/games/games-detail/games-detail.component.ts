import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Games } from '../games.model';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.scss']
})
export class GamesDetailComponent implements OnInit {
  @Input() game: Games;
  id: number

  constructor(private route: ActivatedRoute,
              private gameService: GamesService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.game = this.gameService.getGame(this.id);
        }
      )
  }

}
