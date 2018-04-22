import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { Log } from '../models/log';
@Injectable()
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSource.asObservable();
  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Component',
        date: new Date(),
      },
      {
        id: '2',
        text: 'Generated Component',
        date: new Date(),
      },
      {
        id: '3',
        text: 'Generated Component',
        date: new Date(),
      },
    ];
  }
  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }
  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
