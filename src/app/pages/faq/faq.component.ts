import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'faq',
    template: require('./faq.html')
})
export class FaqComponent {
    public qa = []; //questions and answers
    
    constructor(private fs: FirebaseService) {
        this.setFirebaseCallbacks();
    }

    setFirebaseCallbacks(){
        var moduleRef = this.fs.db.ref('faq');

        moduleRef.on('child_added', (data) => {
            this.qa.push({key: data.key, value: data.val()})
        });

        moduleRef.on('child_removed', (data) => {
            var objects = [];
            for (var o in this.qa){
                if (this.qa[o].key != data.key)
                {
                    objects.push(this.qa[o]);
                }
            }
            this.qa = objects;
        });

        moduleRef.on('child_changed', (data) =>{
            for (var o in this.qa){
                if (this.qa[o].key == data.key)
                    this.qa[o].value = data.val();
            }
        });
    }
}   