import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'portafolio',
    template: require('./portafolio.html')
})
export class PortafolioComponent{
    public photos = [];

    constructor(private fs: FirebaseService) {
        this.setFirebaseCallbacks();
    }

    setFirebaseCallbacks(){
        var moduleRef = this.fs.db.ref('faq');

        moduleRef.on('child_added', (data) => {
            this.photos.push({key: data.key, value: data.val()})
        });

        moduleRef.on('child_removed', (data) => {
            var objects = [];
            for (var o in this.photos){
                if (this.photos[o].key != data.key)
                {
                    objects.push(this.photos[o]);
                }
            }
            this.photos = objects;
        });

        moduleRef.on('child_changed', (data) =>{
            for (var o in this.photos){
                if (this.photos[o].key == data.key)
                    this.photos[o].value = data.val();
            }
        });
    }
}