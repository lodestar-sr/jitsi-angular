import {Component, OnInit} from '@angular/core';
import {RoomService} from '@app/services/room.service';
import {RoomModel} from '@app/models/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
})
export class RoomListComponent implements OnInit {

  rooms: RoomModel[] = [];

  constructor(
    private roomSrv: RoomService,
  ) {
  }

  ngOnInit(): void {
    this.roomSrv.getRoomList().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  save() {

  }

  undo() {

  }
}
