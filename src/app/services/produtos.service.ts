import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { IProduto } from '../Models/IProdutos.models';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URLJS: string = 'http://localhost:3000/produtos';

  private urlBaseProdutos: string = 'https://backendprodutos.somee.com/backendprodutos/Produtos';
  private lerTudo: string = '/GetAll';
  
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  
  //Escrevendo os Serviços para consumir a API hospedada em SOMEE.COM
  //Buscar todos
  buscarTodosSomee(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.urlBaseProdutos+this.lerTudo).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }

  //Buscar por ID Produto
  buscarPorIdSomee(id: number): Observable<IProduto>{
    return this.http.get<IProduto>(`${this.urlBaseProdutos}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }

  //Adicionar novo Produto
  cadastrarSomee(produto: IProduto): Observable<IProduto>{
    return this.http.post<IProduto>(this.urlBaseProdutos, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }

  //Atualizar Produto
  atualizarSomee(produto: IProduto): Observable<IProduto>{
    return this.http.put<IProduto>(`${this.urlBaseProdutos}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }


  //Remover Produto
  excluirSomee(id: number): Observable<any>{
    return this.http.delete<any>(`${this.urlBaseProdutos}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }


  //Fim dos Métodos dos Serviços que consomem a API hospedada em SOMEE.COM







  //Métodos GET para recuperar dados do BD.
  /*buscarTodos2(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL + this.METODO);
  }*/

  buscarTodos(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URLJS).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }

  //Método GET por Id, busca produto pelo ID.
  buscarPorId(id: number): Observable<IProduto>{
    return this.http.get<IProduto>(`${this.URLJS}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }

  //Método POST para inserir um novo registro no BD.
  cadastrar(produto: IProduto): Observable<IProduto>{
    return this.http.post<IProduto>(this.URLJS, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }

  //Método PUT para Atualizar um registro no BD.
  atualizar(produto: IProduto): Observable<IProduto>{
    return this.http.put<IProduto>(`${this.URLJS}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }

  //Método DELETE para Atualizar um registro no BD.
  excluir(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URLJS}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));
  }

  //Sistema de Mensagens
  exibirErro(e: any): Observable<any>{
    this.exibirMensagem('Erro!!', 'Não foi possível realizar a operação', `toast-error`);
    //console.log(e);
    return EMPTY;

  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);

  }
}



