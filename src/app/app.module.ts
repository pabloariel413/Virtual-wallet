import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardComponent } from './components/card/card.component';
import { ChartBalanceComponent } from './components/chart-balance/chart-balance.component';
import { ChartEarningsComponent } from './components/chart-earnings/chart-earnings.component';
import { ChartExpensesComponent } from './components/chart-expenses/chart-expenses.component';
import { CreditItemComponent } from './components/credit-item/credit-item.component';
import { CreditsComponent } from './components/credits/credits.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavleftItemComponent } from './components/navleft-item/navleft-item.component';
import { NavleftListComponent } from './components/navleft-list/navleft-list.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    DashboardComponent,
    CardInfoComponent,
    CardComponent,
    ChartBalanceComponent,
    ChartEarningsComponent,
    ChartExpensesComponent,
    CreditItemComponent,
    CreditsComponent,
    NavbarItemComponent,
    NavbarComponent,
    NavleftItemComponent,
    NavleftListComponent,
    TransactionItemComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
