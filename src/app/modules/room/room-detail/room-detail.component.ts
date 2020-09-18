import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomService} from '@app/services/room.service';
import {RoomModel} from '@app/models/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
})
export class RoomDetailComponent implements OnInit {

  room: RoomModel;

  constructor(
    private route: ActivatedRoute,
    private roomSrv: RoomService,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.roomSrv.getRoomInfoByName(id).subscribe(room => {
      this.room = room;
    });
  }

}
