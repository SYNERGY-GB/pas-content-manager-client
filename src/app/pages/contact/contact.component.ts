import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contact',
    template: require('./contact.html')
})
export class ContactComponent {
    public myobj;
    public numbers = [];

    constructor(private fs: FirebaseService){
        this.fs.db.ref('contact').limitToLast(1).on('value',(snapshot) => {
            var aux = snapshot.val();
            for (var o in aux)
                this.myobj = aux[o];
        });
        this.fs.db.ref('phones').on('child_added', (data) =>{
            this.numbers.push({key: data.key, value: data.val()})
        });
        this.fs.db.ref('phones').on('child_changed', (data) => {
            for (var o in this.numbers){
                if (this.numbers[o].key == data.key)
                    this.numbers[o].value = data.val();
            }
        });
        this.fs.db.ref('phones').on('child_removed', (data) => {
            var objects = [];
            for (var o in this.numbers){
                if (this.numbers[o].key != data.key)
                {
                    objects.push(this.numbers[o]);
                }
            }
            this.numbers = objects;
        });
    }
}
