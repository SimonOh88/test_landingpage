import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PricingcardComponent } from './pricingcard/pricingcard.component';
import { TrialcalloutComponent } from './trialcallout/trialcallout.component';
import { FeaturecardComponent } from './featurecard/featurecard.component';
import { HeroComponent } from './hero/hero.component';
import { WayfindingComponent } from './wayfinding/wayfinding.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeswitchComponent } from './themeswitch/themeswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PricingcardComponent,
    TrialcalloutComponent,
    FeaturecardComponent,
    HeroComponent,
    WayfindingComponent,
    FooterComponent,
    ThemeswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
