import { Component, OnInit } from '@angular/core';

interface Transaction {
  date: string;
  description: string;
  amount: number;
}

interface FinancialDetails {
  accountNumber: string;
  balance: number;
  recentTransactions: Transaction[];
}

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrls: ['./financial-details.component.scss']
})
export class FinancialDetailsComponent implements OnInit {
  // financialDetails: FinancialDetails = {
  //   accountNumber: '',
  //   balance: ,
  //   recentTransactions: [
  //     { date: '', description: '', amount: -50 },
  //     { date: '', description: '', amount: 2000 },
  //     { date: '', description: '', amount: -150 },
  //     { date: '', description: '', amount: -100 }
  //   ]
  // };

  constructor() { }

  ngOnInit(): void {
    // Here you can fetch the financial details from a service and update the `financialDetails` object accordingly.
  }
}
