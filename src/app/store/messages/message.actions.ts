import { Message } from './message.model';


/*
  1. En el archivo message.actions.ts importamos la interfaz Message.
  2. Exportamos una clase llamada AddMessage la cual possee dos miembros
*/

export class AddMessage {
  static readonly type = '[MESSAGES] Add';
  constructor(public payload: Message) { }
}

export class RemoveMessage {
  static readonly type = '[MESSAGES] Remove';
  constructor(public payload: string) { }
}
