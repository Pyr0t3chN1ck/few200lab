import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  add(descriptionEl: HTMLInputElement): void {
    // - create a new TodoListItem
    // - ?? Do Something with it.
    this.itemAdded.emit(descriptionEl.value);
    // - Clear out the text in the textbox
    descriptionEl.value = '';
    descriptionEl.focus();
  }
}
