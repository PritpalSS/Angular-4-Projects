import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit() {
  	firebase.initializeApp({
  		apiKey: "AIzaSyD82zKQP7Qr07ConjVYsn4hoPj_ouxsyD0",
    	authDomain: "ng-recipe-book-e8c76.firebaseapp.com"
  	});
  }

  onNavigate(feature: string){
  	this.loadedFeature = feature;
  }
}
