export class MessagesStateModel {
  messages: Message[] = [];
}

export interface Message {
  id: string;
  text: string;
}
