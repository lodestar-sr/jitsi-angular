export class RoomModel {

  public name: string;

  constructor(data?) {
    const init = Object.assign({
      name: '',
    }, data);

    this.name         = init.name;
  }
}
