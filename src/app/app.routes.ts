
import { Routes } from '@angular/router';
import { ListComprobanteComponent } from './components/comprobante/list-comprobante/list-comprobante.component';

export const routes: Routes = [
    { path: 'list-comprobante', component: ListComprobanteComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-comprobante' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-comprobante' }
];