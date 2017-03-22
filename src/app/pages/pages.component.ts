import {Component, ViewEncapsulation} from '@angular/core';
import { FirebaseService } from '../app-firebase.service'

var config = {
  apiKey: "AIzaSyDdcRi9L9bbmeJvZDzbPfgJTsyqY5b4f68",
  authDomain: "pruebasynergy-c92f7.firebaseapp.com",
  databaseURL: "https://pruebasynergy-c92f7.firebaseio.com",
  storageBucket: "pruebasynergy-c92f7.appspot.com",
  messagingSenderId: "785749975197"
};


@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>

    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {
  
  constructor(private fs: FirebaseService) {
    this.fs.initialize(config);
  }

  ngOnInit() {
  }
}
