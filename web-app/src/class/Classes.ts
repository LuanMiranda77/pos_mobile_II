import { Coache } from "./Coache";

export class Classes {
  id: string;
  subject: string;
  cost: number;
  coache: Coache;
  deleted: number;

  constructor() {
    this.id = '';
    this.subject = "";
    this.cost = 0;
    this.coache = new Coache();
    this.deleted = 0;
  }
}
