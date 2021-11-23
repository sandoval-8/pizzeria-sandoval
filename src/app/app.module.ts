import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './view/index/index.component';
import { BuyComponent } from './view/buy/buy.component';
import { BodyComponent } from './view/index/body/body.component';
import { BodyComprarComponent } from './view/buy/body-comprar/body-comprar.component';
import { NosotrosComponent } from './view/nosotros/nosotros.component';
import { BodyNosotrosComponent } from './view/nosotros/body-nosotros/body-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    BuyComponent,
    BodyComponent,
    BodyComprarComponent,
    NosotrosComponent,
    BodyNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
