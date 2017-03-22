import { Component } from '@angular/core';
import { FirebaseService } from '../../app-firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/routes';

@Component({
    selector: 'home',
    template: require('./home.html')
})
export class HomeComponent {
    public banners = [];
    public news = [];
    public portafolio = [];
    public faq = [];

    constructor(private fs: FirebaseService){
        this.setFirebaseCallbacks(this.banners, "banners");
        this.setFirebaseCallbacks(this.news, "news");
        this.setFirebaseCallbacks(this.portafolio, "portafolioPhotos");
        this.setFirebaseCallbacks(this.faq, "faq");
    }

    setFirebaseCallbacks(objs, mod){
        /* Push the new object added to the Firebase into the 
        objects array  */
        var moduleRef = this.fs.db.ref(mod);
        moduleRef.on('child_added', (data) => {
            objs.push({key: data.key, value: data.val()})
        });

        /* Creates a new array of objects with all the elements, 
        excepte the deleted one */
        moduleRef.on('child_removed', (data) => {
            var objects = [];
            for (var o in objs){
                if (objs[o].key != data.key)
                {
                    objects.push(objs[o]);
                }
            }
            objs = objects;
        });
	}
}
