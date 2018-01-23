import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  logNumber(n: number) {
    console.log(n);
  }

  logString(s: string) {
    console.log(s);
  }

  log(d: any) {
    console.log(d);
  }

}
