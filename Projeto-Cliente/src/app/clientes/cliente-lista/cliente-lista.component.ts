import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente.module';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  @Input() clientes: Cliente[] = [];
  /*clientes = [
    {
      nome: 'Vinicius',
      fone: '11945160224',
      email: 'vinigx457@gmail.com',
    },
    {
      nome: 'Vanda',
      fone: '11999442389',
      email: 'vanda@gmail.com',
    },
  ];
*/
  constructor() {}

  ngOnInit(): void {}
}
