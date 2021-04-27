import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Message } from '../store/messages/message.model';
import { RemoveMessage } from '../store/messages/message.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public messages$: Observable<Message[]>;

  constructor(
    private store: Store
  ) {
    this.messages$ = this.store.select(state => state.messages.messages);
  }

  ngOnInit(): void {
  }

  public removeMessage(id: string) {
    this.store.dispatch(new RemoveMessage(id))
  }

}
