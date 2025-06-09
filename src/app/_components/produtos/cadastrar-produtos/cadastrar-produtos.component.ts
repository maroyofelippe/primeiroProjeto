import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../../Models/IProdutos.models';
import { ProdutosService } from '../../../services/produtos.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produtos',
  standalone: false,
  templateUrl: './cadastrar-produtos.component.html',
  styleUrl: './cadastrar-produtos.component.css'
})
export class CadastrarProdutosComponent implements OnInit {

  produto: IProduto = {
    nomeProduto: '',
    dataValidade: new Date(),
    precoProduto: 0
  }

  constructor(private produtosService:ProdutosService, private router: Router){}

  ngOnInit(): void {}

  salvarProduto(): void{
    this.produtosService.cadastrarSomee(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nomeProduto}, foi cadastrado com sucesso! ID ${this.produto.id}`,
        `toast-success`
      );
      this.router.navigate(['/produtos']);

    });
  }

}
