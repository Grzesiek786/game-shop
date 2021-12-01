import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Games } from '../games.model';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.scss']
})
export class GamesEditComponent implements OnInit {
  id: number;
  gameNewForm: FormGroup;

  constructor(private gameService: GamesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.initForm();
        }
      )
  }

  onSubmit() {
    // const newGame = new Games(
    //   this.gameNewForm.value['name'],
    //   this.gameNewForm.value['description'],
    //   this.gameNewForm.value['imagePath'],
    // );
    this.gameService.addGame(this.gameNewForm.value);
    this.onCancel();
    console.log(this.gameNewForm);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  private initForm() {
    let gameName = '';
    let gameImagePath = '';
    let gameDescription = '';
    this.gameNewForm = new FormGroup({
      'name': new FormControl(gameName, Validators.required),
      'imagePath': new FormControl(gameImagePath, Validators.required),
      'description': new FormControl(gameDescription, Validators.required)
    })
  }
}
