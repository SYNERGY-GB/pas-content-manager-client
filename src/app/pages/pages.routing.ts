import { Routes, RouterModule, CanActivateChild }  from '@angular/router';
import { Pages } from './pages.component';
import { AuthGuard } from '../auth-guard.service';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'content-manager', loadChildren: () => System.import('./content/content.module')},
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'content/:id', loadChildren: () => System.import('./content/content.module')},
      { path: 'content', loadChildren: () => System.import('./content/content.module')},
      { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
      //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
      { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
      { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
      { path: 'home', loadChildren: () => System.import('./home/home.module') },
      { path: 'contact', loadChildren: () => System.import('./contact/contact.module') },
      { path: 'portafolio', loadChildren: () => System.import('./portafolio/portafolio.module') },
      { path: 'news', loadChildren: () => System.import('./news/news.module') },
      { path: 'faq', loadChildren: () => System.import('./faq/faq.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
