import { Component, OnInit } from '@angular/core';
import { ShopGame } from './shop-game.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  gamesShop: ShopGame[] = [
    new ShopGame('Gra PS4 Assassin\'s Creed: Valhalla', 'Dwunasta główna odsłona bestsellerowego cyklu od firmy Ubisoft. Assassin\'s Creed: Valhalla to gra RPG akcji przenosząca nas do IX-wiecznej Anglii. W trakcie zabawy wcielamy się w postać o imieniu Eivor, której klan wikingów szuka dla siebie nowego domu.', 'https://www.gry-online.pl/galeria/gry13/120309921.jpg', 220, 'dostępna', '24 godziny', 'Ubisoft'),
    new ShopGame('Gra PS4 Assassin\'s Creed: Odyssey', 'Jedenasta główna część bestsellerowej serii sandboksowych gier akcji, tym razem wykonująca gwałtowny zwrot w stronę gatunku RPG. Assassin\'s Creed Odyssey zabiera nas w podróż do antycznej Grecji, gdzie wcielamy się w Aleksiosa lub Kassandrę, będących wnukami króla Leonidasa.', 'https://www.gry-online.pl/galeria/gry13/5488968.jpg', 140, 'dostępna', '48 godzin', 'Ubisoft'),
    new ShopGame('Gra PS4 Assassin\'s Creed IV: Black Flag', 'Czwarta, pełnoprawna odsłona bestsellerowej serii przygodowych gier akcji z widokiem z perspektywy trzeciej osoby (TPP). Produkcja powstała w studiu Ubisoft Montreal przy wsparciu pozostałych zespołów deweloperskich koncernu Ubisoft.', 'https://www.gry-online.pl/galeria/gry13/513340633.jpg', 80, 'niedostepna', '48 godzin', 'Ubisoft'),
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
