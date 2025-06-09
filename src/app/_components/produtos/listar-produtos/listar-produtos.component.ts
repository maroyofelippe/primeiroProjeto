import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';
import { IProduto } from '../../../Models/IProdutos.models';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css'
})
export class ListarProdutosComponent implements OnInit {
  listaProdutos: IProduto[] = [];

  constructor(private produtosServices: ProdutosService) {}

  ngOnInit(): void { 
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosServices.buscarTodosSomee().subscribe(retorno => {
      this.listaProdutos = retorno;
    })
  }

  deletar(produto: IProduto):void{
    this.produtosServices.excluirSomee(produto.id!).subscribe(() =>{
      this.produtosServices.exibirMensagem(
        'SISTEMA',
        `${produto.nomeProduto} foi excluído com sucesso!`,
        'toast-error'
      );

      this.carregarProdutos();
    })
  }

}



