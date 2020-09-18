export class UserModel {

  public jID: string;
  public email: string;
  public displayName: string;

  constructor(data?) {
    const init = Object.assign({
      display_name: '',
      jid: '',
      email: '',
    }, data);

    this.jID          = init.jid;
    this.email        = init.email;
    this.displayName  = init.display_name;
  }
}
