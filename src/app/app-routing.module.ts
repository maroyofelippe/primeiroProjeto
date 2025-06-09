import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { ListarProdutosComponent } from './_components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './_components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { AtualizarProdutosComponent } from './_components/produtos/atualizar-produtos/atualizar-produtos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'produtos', component:ListarProdutosComponent},
  {path:'produtos/cadastrarProdutos', component:CadastrarProdutosComponent},
  {path:'produtos/atualizar/:id', component:AtualizarProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
