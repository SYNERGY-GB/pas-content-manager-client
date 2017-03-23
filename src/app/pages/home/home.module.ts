import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { NgaModule } from '../../theme/nga.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        routing,
        NgaModule,
		NgbModule
    ],
    declarations: [
        HomeComponent
    ]
})
export default class HomeModule {}
