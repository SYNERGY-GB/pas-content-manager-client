import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './portafolio.component';
import { routing } from './portafolio.routing';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        NgaModule,
    ],
    declarations: [
        PortafolioComponent
    ]
})
export default class PortafolioModule{}