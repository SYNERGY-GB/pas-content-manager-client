import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { routing } from './faq.routing';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        NgaModule,
    ],
    declarations: [
        FaqComponent
    ]
})
export default class FaqModule {}

