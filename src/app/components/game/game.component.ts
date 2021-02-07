import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  helloMessageForuUser: string;
  rootObject: RootObject;
  result: string;
  confirmStartCurrencyMessageForUser: string;


  constructor(private currencyClientService: CurrencyClientService) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }

  // tslint:disable-next-line:typedef
  sayHello(value: string) {
    this.helloMessageForuUser = `Hello ` + value + '. Lets start the game!'  ;
  }

  // tslint:disable-next-line:typedef
  check(value: string) {
    // @ts-ignore
    if (value > this.rootObject.rates.PLN) {
      // @ts-ignore
      this.result = 'Too much! The correct value is ' + this.rootObject.rates.PLN ;
    }
    else { // @ts-ignore
      if (value < this.rootObject.rates.PLN) {
            // @ts-ignore
        this.result = 'Not enough! The correct value is ' + this.rootObject.rates.PLN ;
          }
          else {
            this.result = 'You did it! Congratulations!';
          }
    }
  }
}
