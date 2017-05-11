import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = "Jose Carlos";
  nombre2 = "jOse caRLos alMenDros vaqUerO"
  array = [0,1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 19
    }
  }
  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llogo la data!'), 3500 );
  })
  fecha = new Date();
  video = '1qT0-OnvI5c?ecver=2';

}
