import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout(): void {
    // Perform logout actions here, such as clearing session data

    // Navigate to the homepage or the desired logout page
    this.router.navigate(['/homepage']);
  
}
}