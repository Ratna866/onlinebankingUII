import { Component } from '@angular/core';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
  selectedTransferType: string = 'RTGS';

  transferFunds() {
    // You can implement the fund transfer logic here
    console.log('Transfer type:', this.selectedTransferType);

}
}
