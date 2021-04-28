import { Message } from './message.model';
export class AddMessage {
  static readonly type = '[MESSAGES] Add';
  constructor(public payload: Message) { }
}

export class RemoveMessage {
  static readonly type = '[MESSAGES] Remove';
  constructor(public payload: string) { }
}
