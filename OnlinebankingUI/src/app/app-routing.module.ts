import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AccountstatementComponent } from './components/accountstatement/accountstatement.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { OpenAccComponent } from './components/open-acc/open-acc.component';

const routes:Routes=[
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // Default route

    { path:'homepage',
      component:HomepageComponent
    },
    { path:'login',
      component:LoginComponent
    },
    {
      path:'signup',
      component:SignupComponent
    },
    { path:'AccountStatement',
      component:AccountstatementComponent
    },
    { 
    path: 'Account-Summary', 
    component:AccountSummaryComponent
    },
    { 
      path: 'forgot-password', 
      component:ForgotPasswordComponent
    },

    { path: 'app-change-password', 
    component: ChangePasswordComponent 
    },
    { 
      path: 'Fund-Transfer', 
      component:FundTransferComponent
    },
    { 
      path: 'open-acc', 
      component:OpenAccComponent
    },
    // { 
    //   path: 'pendingApproval',
    //   component:pendingApprivals 
  // },

    {
      path:'dashborad',
      component:DashboardComponent
    },
    
    

  
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports:[RouterModule]
})
export class AppRoutingModule { }
