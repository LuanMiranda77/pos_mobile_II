import { Schedule } from "./Schedule";

export class Coache {
  id: string | undefined;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: Array<Schedule>;

  constructor() {
    this.id = "";
    this.name = "";
    this.avatar = "";
    this.whatsapp = "";
    this.bio = "";
    this.subject = "";
    this.cost = 0;
    this.schedule = new Array<Schedule>();
  }
}
