import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { ListComprobanteComponent } from './components/comprobante/list-comprobante/list-comprobante.component';

// importamos para usar las rutas
import { routes } from './app.routes'; // para el archivo que creamos
import { RouterModule } from '@angular/router'; // propio de angular

import { HttpClientModule } from '@angular/common/http';
import { PartialNavbarComponent } from './components/partials/partial-navbar/partial-navbar.component';
import { PartialNavheaderComponent } from './components/partials/partial-navheader/partial-navheader.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ListComprobanteComponent,
    PartialNavbarComponent,
    PartialNavheaderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
