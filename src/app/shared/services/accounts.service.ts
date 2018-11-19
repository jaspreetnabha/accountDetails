import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountModel } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private path = '/assets/mocks/accounts.json';
  constructor(private httpClient: HttpClient) { }

  getAccounts(): Observable<any> {
    return this.httpClient.get(this.path).pipe(
      map((accountDetails: any[]) =>
        accountDetails.map(accountDetail =>
          new AccountModel(accountDetail)
        )));
  }

}
