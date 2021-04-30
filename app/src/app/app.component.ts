import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MilionesimaToDoList';

  toDoList: string[] = [];
  tasksDone: string[] = [];
  taskToAdd: string;

  constructor() {

  }

  ngOnInit() {

  }

  addTaskToDo() {
    if(!this.toDoList.includes(this.taskToAdd)) {
      this.toDoList.push(this.taskToAdd);
    }
  }

  addToDoneList(selectedTaskIndex: number) {
    this.tasksDone.push(this.toDoList[selectedTaskIndex]);
    this.toDoList.splice(selectedTaskIndex, 1);
  }
}
