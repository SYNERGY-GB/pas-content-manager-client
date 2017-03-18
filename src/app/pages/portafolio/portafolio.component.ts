import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'portafolio',
    template: require('./portafolio.html')
})
export class PortafolioComponent{}