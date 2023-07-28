import { Component } from '@angular/core';

interface UserDetails {
  name: string;
  mobileNumber: string;
  email: string;
  aadharCardNumber: string;
  Address: string;
  occupation: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user: UserDetails = {
    name: '',
    mobileNumber: '',
    email: '',
    aadharCardNumber: '',
    Address: '',
    occupation: ''
  };

  saveDetails(): void {
    // Here, you can implement the logic to save the user details to a database or any other storage mechanism.
    console.log('User Details:', this.user);
  }
}
