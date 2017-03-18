import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routing } from './contact.routing';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        NgaModule
    ],
    declarations: [
        ContactComponent
    ]
})
export default class ContactModule {}