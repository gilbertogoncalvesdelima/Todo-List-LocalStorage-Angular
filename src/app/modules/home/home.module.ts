import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Componentes
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//Page
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
  ],
  //Importando formsModule, para funionar o ngModel, que está sendo utilizado no html
  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
