import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Games } from '../../games.model';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.scss']
})
export class GamesItemComponent implements OnInit {
  @Input() game: Games;
  @Input() index: number;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  }
}
