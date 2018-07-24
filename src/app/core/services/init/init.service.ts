import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor() {
  }


  getConfigurations() {

    console.log(`initializeApp:: inside getConfigurations function!`);

    return new Promise((resolve, reject) => {
      console.log(`initializeApp:: getConfigurations function`);

      setTimeout(() => {

        console.log(`initializeApp:: getConfigurations resolved`);

        // doing something
        resolve();
      }, 3000);
    });
  }
}
