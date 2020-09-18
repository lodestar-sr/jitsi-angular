import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {LayoutModule} from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [
    NgbActiveModal,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
