import { Component } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/routes';

@Component({
    selector: 'home',
    template: require('./home.html')
})
export class HomeComponent {}