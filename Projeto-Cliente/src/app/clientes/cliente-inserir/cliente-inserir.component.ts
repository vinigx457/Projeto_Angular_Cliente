import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../cliente.module';
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})
export class ClienteInserirComponent {
  @Output() clienteAdicionado = new EventEmitter<Cliente>();
  nome: string;
  fone: string;
  email: string;

  constructor() {
    this.nome = '';
    this.fone = '';
    this.email = '';
  }

  onAdicionarCliente() {
    //console.log('Inserindo um cliente...');
    const cliente: Cliente = {
      nome: this.nome,
      fone: this.fone,
      email: this.email,
    };
    this.clienteAdicionado.emit(cliente);
  }
}
