import { Action, Selector, State, StateContext } from "@ngxs/store";
import { MessagesStateModel } from "./message.model";
import { AddMessage, RemoveMessage } from "./message.actions";

@State({
  name: 'messages',
  defaults: {
    messages: []
  }
})
export class MessagesState {
  @Selector()
  static getMessages(state: MessagesStateModel) {
    return state.messages;
  }

  // Añade un nuevo mensaje al estado
  @Action(AddMessage)
  add({ getState, patchState }: StateContext<MessagesStateModel>, { payload }: AddMessage) {
    const state = getState();
    patchState({
      messages: [...state.messages, payload]
    });
  }

  // Elimina un mensaje del estado
  @Action(RemoveMessage)
  remove({ getState, patchState }: StateContext<MessagesStateModel>, { payload }: RemoveMessage) {
    patchState({
      messages: getState().messages.filter(message => message.id !== payload)
    });
  }
}
