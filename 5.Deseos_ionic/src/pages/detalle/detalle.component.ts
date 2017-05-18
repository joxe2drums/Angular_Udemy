import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public alertCtrl:AlertController,
    private _listaDeseos:ListaDeseosService
  ) {

    this.idx = this.navParams.get('idx');
    this.lista = this.navParams.get('lista');

    console.log(this.lista);

  }

  ngOnInit() {}

  actualizarItem(item:ListaItem) {
    item.completado = !item.completado;

    let todosMarcados = true;
    for (let item of this.lista.items) {
        if (!item.completado) {
          todosMarcados = false;
          break;
        }
    }
    this.lista.terminada = todosMarcados;
    this._listaDeseos.guardarData();
  }

  eliminarItem(ix:number) {
    this.lista.items.splice(ix, 1);
    this._listaDeseos.guardarData();
    // this._listaDeseos.eliminarItem(this.idx, ix);
  }

  eliminarLista() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar lista',
      message: `¿Estás seguro de que quieres eliminar la lista "${this.lista.nombre}?"`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
