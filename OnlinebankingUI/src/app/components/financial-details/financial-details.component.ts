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
  financialDetails: FinancialDetails = {
    accountNumber: '1234567890',
    balance: 5000,
    recentTransactions: [
      { date: '2023-07-26', description: 'Groceries', amount: -50 },
      { date: '2023-07-25', description: 'Salary', amount: 2000 },
      { date: '2023-07-24', description: 'Utilities', amount: -150 },
      { date: '2023-07-23', description: 'ATM Withdrawal', amount: -100 }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    // Here you can fetch the financial details from a service and update the `financialDetails` object accordingly.
  }
}
