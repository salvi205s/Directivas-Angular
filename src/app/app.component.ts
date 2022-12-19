import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = '';
  registrado = false;
  nombre: String = '';
  apellido: String = '';
  cargo:string="";
  entradas: any;

  constructor() {
    this.entradas = [
      { titulo: 'Python cada dia mas presente' },
      { titulo: 'Java presente desde hace mas de 20 años' },
      { titulo: 'JavaScript cada dia mas funcional ' },
      { titulo: 'Kotlin potencia para tus apps' },
      { titulo: 'Donde quedo pascal?' },
    ];
  }

  registrarUsuario() {
    this.registrado = true;

    this.mensaje = 'Usuario registrado con exito';
  }
}
