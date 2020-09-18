import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoomRoutingModule} from './room-routing.module';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    RoomListComponent,
    RoomDetailComponent,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MatListModule
  ]
})
export class RoomModule {
}
