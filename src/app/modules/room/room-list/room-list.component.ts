import {Component, OnInit} from '@angular/core';
import {RoomService} from '@app/services/room.service';
import {RoomModel} from '@app/models/room';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
})
export class RoomListComponent implements OnInit {

  rooms: RoomModel[] = [];
  roomInfos: string[] = [];

  constructor(
    private roomSrv: RoomService,
  ) {
  }

  ngOnInit(): void {
    this.roomSrv.getRoomList().subscribe(rooms => {
      this.rooms = rooms;

      const joins = this.rooms.map(itm => this.roomSrv.getUsersInRoom(itm.name));
      forkJoin(joins).subscribe(res => {
        this.roomInfos = res.map(itm => itm.map(usr => usr.displayName).join(', '));
      });
    });
  }

  save() {

  }

  undo() {

  }
}
