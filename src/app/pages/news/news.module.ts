import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { routing } from './news.routing';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        NgaModule,
    ],
    declarations: [
        NewsComponent
    ]
})
export default class NewsModule {}