import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        NgaModule
    ],
    declarations: [
        HomeComponent
    ]
})
export default class HomeModule {}