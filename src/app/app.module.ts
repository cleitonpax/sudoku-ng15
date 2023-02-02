import {
  NgbModule,
  NgbPaginationModule,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoxComponent } from './components/box/box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CelComponent } from './components/cel/cel.component';
import { ErrorComponent } from './components/error/error.component';
import { GridComponent } from './components/grid/grid.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from '@components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { StageComponent } from './components/stage/stage.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    GridComponent,
    BoxComponent,
    CelComponent,
    ErrorComponent,
    HomeComponent,
    ModalComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPopoverModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
