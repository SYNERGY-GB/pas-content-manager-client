import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contact',
    template: require('./contact.html')
})
export class ContactComponent {
    public direction: string;
    public numbers: string[];
    public title: string;

    constructor(private fs: FirebaseService){
        this.fs.db.ref('modules/contact').on('value',(snapshot) => {
            this.direction = snapshot.direction;
            this.numbers = snapshot.val().numbers;
            this.title = snapshot.val().title;
        });
    }
}