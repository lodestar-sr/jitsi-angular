export class RoomModel {

  public name: string;
  public jID: string;
  public email: string;
  public displayName: string;

  constructor(data?) {
    const init = Object.assign({
      name: '',
      display_name: '',
      jid: '',
      email: '',
    }, data);

    this.name         = init.name;
    this.jID          = init.display_name;
    this.email        = init.jid;
    this.displayName  = init.email;
  }
}
