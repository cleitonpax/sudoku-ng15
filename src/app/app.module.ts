import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoxComponent } from './components/box/box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CelComponent } from './components/cel/cel.component';
import { ErrorComponent } from './components/error/error.component';
import { GridComponent } from './components/grid/grid.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { StageComponent } from './components/stage/stage.component';
import { GameService } from './services/game.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPopoverModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
