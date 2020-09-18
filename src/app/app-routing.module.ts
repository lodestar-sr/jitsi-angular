import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './layout/full-layout/full-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/room/list',
    pathMatch: 'full'
  },
  {
    path: 'room',
    redirectTo: '/room/list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {path: 'room', loadChildren: () => import('@modules/room/room.module').then(m => m.RoomModule)},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
