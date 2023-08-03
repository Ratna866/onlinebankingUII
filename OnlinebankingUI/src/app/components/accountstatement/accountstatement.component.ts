import { Component } from '@angular/core';

interface AccountStatementData {
  accountNumber: string;
  name: string;
  accountType: string;
  balance: number;
}

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent {
  startDate: string | undefined;
  endDate: string | undefined;
  accountStatementData: AccountStatementData[] = [];

  getAccountStatement() {
    this.accountStatementData = [
    
      // {
      //   accountNumber: '123456789',
      //   name: 'John Doe',
      //   accountType: 'Savings',
      //   balance: 5000
      // },
      // {
      //   accountNumber: '987654321',
      //   name: 'Jane Smith',
      //   accountType: 'Current',
      //   balance: 10000
      // }
    ];
  }
}

