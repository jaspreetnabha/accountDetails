import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { AccountModel } from '../../models/account';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public show = 3; //can be configured
  public order: number = 1;
  public column:string = "";
  public accounts: AccountModel[];
  public sortObject = {
    active: '',
    descending: undefined
  }     
  private showMoreStyle: boolean = true;
  
  constructor(private accountService: AccountsService,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts().subscribe((res: AccountModel[]) => {
      console.log(res);       
      this.accounts = res;
    })
  }

  sort(column){
    if (this.sortObject.active == column) {
      this.sortObject.descending = !this.sortObject.descending;
   } 
   else {
    this.sortObject.active = column;
    this.sortObject.descending = false;
   }
    this.utilityService.sort(column,this.accounts,this.order);
    this.order = (this.order==1)?-1:1;
    this.column=column;
  }

  getIcon = function(column) {
      if (this.sortObject.active == column) {
      return this.sortObject.descending
        ? 'fas fa-caret-down'
        : 'fas fa-caret-up';
      }
  }

  showAllAccounts() {
    this.show = this.accounts.length;
    this.showMoreStyle = false; 
  }
}
