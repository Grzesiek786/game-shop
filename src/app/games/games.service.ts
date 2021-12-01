import { EventEmitter, Injectable } from '@angular/core';
import { Games } from './games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  gameSelected = new EventEmitter<Games>();

  private games: Games[] = [
    new Games('Gra PS4 Assassin\'s Creed: Valhalla', 'Dwunasta główna odsłona bestsellerowego cyklu od firmy Ubisoft. Assassin\'s Creed: Valhalla to gra RPG akcji przenosząca nas do IX-wiecznej Anglii. W trakcie zabawy wcielamy się w postać o imieniu Eivor, której klan wikingów szuka dla siebie nowego domu.', 'https://www.gry-online.pl/galeria/gry13/120309921.jpg'),
    new Games('Gra PS4 Assassin\'s Creed: Odyssey', 'Jedenasta główna część bestsellerowej serii sandboksowych gier akcji, tym razem wykonująca gwałtowny zwrot w stronę gatunku RPG. Assassin\'s Creed Odyssey zabiera nas w podróż do antycznej Grecji, gdzie wcielamy się w Aleksiosa lub Kassandrę, będących wnukami króla Leonidasa.', 'https://www.gry-online.pl/galeria/gry13/5488968.jpg'),
    new Games('Gra PS4 Assassin\'s Creed IV: Black Flag', 'Czwarta, pełnoprawna odsłona bestsellerowej serii przygodowych gier akcji z widokiem z perspektywy trzeciej osoby (TPP). Produkcja powstała w studiu Ubisoft Montreal przy wsparciu pozostałych zespołów deweloperskich koncernu Ubisoft.', 'https://www.gry-online.pl/galeria/gry13/513340633.jpg')
  ];

  constructor() { }

  getGames() {
    return this.games;
    // return this.games.slice();
  }

  getGame(index: number) {
    return this.games[index];
  }

  addGame(game: Games) {
    this.games.push(game);
  }
}
