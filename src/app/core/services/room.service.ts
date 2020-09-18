import {Injectable} from '@angular/core';
import {ApiService} from '@app/services/api.service';
import {HttpClient} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {environment} from '@env';
import {RoomModule} from '@modules/room/room.module';
import {RoomModel} from '@app/models/room';
import {Observable} from 'rxjs';

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

  getRoomInfoByName(name: string) {
    const url = `${environment.APIHOST}/room-info?room=${name}`;
    return new Observable<RoomModel>((observer) => {
      this.get(url).subscribe(data => {
        const room: RoomModel = new RoomModel(data[0]);
        observer.next(room);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
