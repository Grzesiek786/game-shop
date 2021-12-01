import { Games } from "../games/games.model";

// dziedzizenie to relacja typu is-a, czyli JEST gra
// to jest tez zlamanie asady SOC czyli separation f  concerns, czyli tego, zeby klasa zajmowaa sie tylko wybrana funkcjonalnoscia
export class ShopGame extends Games {
    /**
     * nie extend. bo sklep ma calkowicie inne znaczenie biznesowe niz gra. Wiec sklep nie moze dziedziczyc po grze. 
     * 
     * ALE sklep moe zawierac gry. Taka relacja nazywa sie kompozycja.
     * 
     *
     */
    public price: number;
    public isAvailable: string;
    public shipment: string;
    public producent: string;

    //to ponizej to pRZYKLAD KOMPOZYCJI relacja typu has-a, czyli MA gry
    public games: Games[];
    
    constructor(name: string, desc: string, imagePath: string, price: number, isAvailable: string, shipment: string, producent: string) {
        super(name, desc, imagePath);
        this.price = price;
        this.isAvailable = isAvailable;
        this.shipment = shipment;
        this.producent = producent;
    }

    addGame(game: Games) {
        
    }
}