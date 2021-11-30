
export class Alert{
  title: string;
  resume: string;
  expandable = false;

  static create(res){
    const alert = new Alert();
    alert.title = res.title;
    alert.resume = res.resume;
    return alert;
  }
}
