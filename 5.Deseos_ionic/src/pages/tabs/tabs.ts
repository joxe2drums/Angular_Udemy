import { Component } from '@angular/core';

import { PendientesComponent } from '../pendientes/pendientes.component';
import { TerminadosComponent } from '../terminados/terminados.component';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;

  constructor() {

  }
}
