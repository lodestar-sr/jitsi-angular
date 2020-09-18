import {NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';
import {RoomListComponent} from '@modules/room/room-list/room-list.component';
import {RoomDetailComponent} from '@modules/room/room-detail/room-detail.component';


const routes: Routes = [
  {path: 'list', component: RoomListComponent},
  {path: 'info/:id', component: RoomDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {
}
