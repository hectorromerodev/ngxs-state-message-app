import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddMessage } from '../store/messages/message.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {
  public text: string = '';
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public addMessage() {
    this.store.dispatch(new AddMessage({ id: uuidv4(), text: this.text }));
    this.text = '';
  }

}
