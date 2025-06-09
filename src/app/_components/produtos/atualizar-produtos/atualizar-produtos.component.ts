import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../../Models/IProdutos.models';
import { ProdutosService } from '../../../services/produtos.service';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: 'app-atualizar-produtos',
  standalone: false,
  templateUrl: './atualizar-produtos.component.html',
  styleUrl: './atualizar-produtos.component.css'
})
export class AtualizarProdutosComponent implements OnInit {

  produto: IProduto = {
    id: 0,
    nomeProduto: '',
    precoProduto: 0,
    dataValidade: new Date
  };

  constructor(private produtosService: ProdutosService, 
    private router: Router,
    private activateRouter: ActivatedRoute) {}
  
    ngOnInit(): void {

      const id = this.activateRouter.snapshot.paramMap.get('id');


      if(id){
        let produtoId = Number(id);
        this.carregarProduto(produtoId);
      }
      
    }

  carregarProduto(id: number):void{
    this.produtosService.buscarPorIdSomee(id).subscribe(retorno => {
      this.produto = retorno;
    });
  }

  salvarProduto(): void{
    this.produtosService.atualizarSomee(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nomeProduto}, foi alterado com sucesso! ID ${this.produto.id}`,
        `toast-success`
      );
      this.router.navigate(['/produtos']);
    });
    }

}
