import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CountWordsComponent } from './components/countwords/countwords.component';
import { MatchWordPipe } from './pipes/match-word.pipe';
import { CountService } from './service/count.service';

@NgModule({
  declarations: [
    CountWordsComponent,
    MatchWordPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [MatchWordPipe, CountService],
  bootstrap: [CountWordsComponent]
})
export class AppModule { }
