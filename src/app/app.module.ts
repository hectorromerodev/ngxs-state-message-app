import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateMessageComponent } from './create-message/create-message.component';

// NGXS dependencies
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { MessagesState } from './store/messages/message.state';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([
      MessagesState
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
