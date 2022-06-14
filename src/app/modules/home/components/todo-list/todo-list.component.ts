import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  //public taskList: Array<{ task: string; checked: boolean }> = [];
  //Adicinando a taskList
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  ); // [{ task: 'Minha nova Task', checked: true },
  // { task: 'Minha nova Task 2', checked: false },];

  constructor() {}
  ngDoCheck() {}

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
    // console.log(event);
  }

  public deleteItemTaskList(event: number) {
    // Deletando a posição do nó
    this.taskList.splice(event, 1);
  }
  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja realmente Deletar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja Deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        // Todos os valores checador vao ficar para baixo e os não ticados ficara para cima
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      //LocalStatorage só aceita string, ai devemos converter um array de objetos para string
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
