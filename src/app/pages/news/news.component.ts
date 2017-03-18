import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from ' @angular/router';

@Component({
    selector: 'news',
    template: require('./news.html')
})
export class NewsComponent {}