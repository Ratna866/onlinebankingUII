import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { AccountstatementComponent } from './components/accountstatement/accountstatement.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OpenAccComponent } from './components/open-acc/open-acc.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { FinancialDetailsComponent } from './components/financial-details/financial-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AccountstatementComponent,
    ChangePasswordComponent,
    HomepageComponent,
    OpenAccComponent,
    FundTransferComponent,
    ForgotPasswordComponent,
    SignupComponent,
    RegisterComponent,
    UserDetailsComponent,
    AccountSummaryComponent,
    FinancialDetailsComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
