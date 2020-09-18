import {Injectable} from '@angular/core';
import {ApiService} from '@app/services/api.service';
import {HttpClient} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {environment} from '@env';
import {RoomModule} from '@modules/room/room.module';
import {RoomModel} from '@app/models/room';
import {Observable} from 'rxjs';
import {UserModel} from '@app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends ApiService {

  constructor(
    protected http: HttpClient,
    protected spinner: NgxSpinnerService
  ) {
    super(http, spinner);
  }

  getRoomList() {
    const url = `${environment.APIHOST}/rooms`;
    return new Observable<RoomModel[]>((observer) => {
      this.get(url).subscribe(data => {
        const rooms = data.map(itm => new RoomModel(itm));
        observer.next(rooms);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  getUsersInRoom(name: string) {
    const url = `${environment.APIHOST}/room-info?room=${name}`;
    return new Observable<UserModel[]>((observer) => {
      this.get(url).subscribe(data => {
        const users = data.map(itm => new UserModel(itm));
        observer.next(users);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
