import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomService} from '@app/services/room.service';
import {RoomModel} from '@app/models/room';
import {UserModel} from '@app/models/user';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
})
export class RoomDetailComponent implements OnInit {

  users: UserModel[];

  constructor(
    private route: ActivatedRoute,
    private roomSrv: RoomService,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.roomSrv.getUsersInRoom(id).subscribe(users => {
      this.users = users;
    });
  }

}
