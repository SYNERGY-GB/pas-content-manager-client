import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from ' @angular/router';

@Component({
    selector: 'news',
    template: require('./news.html')
})
export class NewsComponent {
    public ns = [];

    constructor(private fs: FirebaseService) {
        this.setFirebaseCallbacks();
    }

    setFirebaseCallbacks(){
        var moduleRef = this.fs.db.ref('faq');

        moduleRef.on('child_added', (data) => {
            this.ns.push({key: data.key, value: data.val()})
        });

        moduleRef.on('child_removed', (data) => {
            var objects = [];
            for (var o in this.ns){
                if (this.ns[o].key != data.key)
                {
                    objects.push(this.ns[o]);
                }
            }
            this.ns = objects;
        });

        moduleRef.on('child_changed', (data) =>{
            for (var o in this.ns){
                if (this.ns[o].key == data.key)
                    this.ns[o].value = data.val();
            }
        });
    }
}