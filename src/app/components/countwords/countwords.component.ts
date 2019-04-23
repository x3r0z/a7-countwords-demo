import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/service/count.service';

@Component({
  selector: 'app-count-words',
  templateUrl: './countwords.component.html',
  styleUrls: ['./countwords.component.scss']
})
export class CountWordsComponent implements OnInit {
  
  public sentence: string;
  public results: any;
  public lastSentence: string;
  public key: string;
  public displayResult: boolean;

  constructor(
    private countService: CountService
  ) {}

  ngOnInit(): void {
    this.results = null;
    this.sentence = '';
    this.displayResult = false;
  }

  count() {
    this.countService.countWords(this.sentence).subscribe(
      (response: any) => {
        this.results = response;
      },
      () => {
        this.results = null;
      },
      () => {
        this.lastSentence = this.sentence;
        this.checkDisplay();
      }
    );
  }

  checkDisplay() {
    this.displayResult = !(this.results && (Object.keys(this.results).length === 0));
  }
}
