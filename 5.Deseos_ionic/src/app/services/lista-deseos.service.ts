import { Injectable } from '@angular/core';
import { Lista, ListaItem } from '../classes/index';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {
    this.cargarData();
  }

  guardarData() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarData() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  agregarLista(lista:Lista) {
    this.listas.push(lista);
    this.guardarData();
  }

  eliminarLista(ix:number) {
    this.listas.splice(ix, 1);
    this.guardarData();
  }

  eliminarItem(ixLista:number, ixItem:number) {
    this.listas[ixLista].items.splice(ixItem, 1);
    this.guardarData();
  }

  agregarItem(ixLista:number, item:ListaItem) {
    this.listas[ixLista].items.push(item);
    this.guardarData();
  }

}
