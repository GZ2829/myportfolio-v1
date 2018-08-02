import { NgModule, Component } from '@angular/core';

import {Routes, RouterModule} from '@angular/router'

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CryptoportfolioComponent } from './components/cryptoportfolio/cryptoportfolio.component';
import { TransportconsolidatedComponent } from './components/transportconsolidated/transportconsolidated.component';
import { BusinesswebsiteComponent } from './components/businesswebsite/businesswebsite.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'crypto-portfolio', component: CryptoportfolioComponent },
  { path: 'transport-consolidated', component: TransportconsolidatedComponent },
  { path: 'business-website', component: BusinesswebsiteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,CryptoportfolioComponent,TransportconsolidatedComponent,BusinesswebsiteComponent]
