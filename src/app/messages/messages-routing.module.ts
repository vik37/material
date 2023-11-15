import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageListComponent} from 'src/app/messages/message-list/message-list.component';
import {MessageNewComponent} from 'src/app/messages/message-new/message-new.component';

const routes: Routes = [
  {
    path: '',
    component: MessageListComponent
  },
  {
    path: 'new',
    component: MessageNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
