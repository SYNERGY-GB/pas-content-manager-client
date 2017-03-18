import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './portafolio.component';

const routes: Routes = [
    {
        path: '',
        component: PortafolioComponent
    }
]

export const routing = RouterModule.forChild(routes);