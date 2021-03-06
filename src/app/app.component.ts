import { Component } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/Http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HTTP';
  private articles = [];
  private hledat = "";
  private adresa = "https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-12&sortBy=publishedAt&apiKey=9cfbf2304e8248d0a332605e34ce2258";

  clickedButton() {
    this.adresa = "https://newsapi.org/v2/everything?q=" + this.hledat + "&from=2020-01-12&sortBy=publishedAt&apiKey=9cfbf2304e8248d0a332605e34ce2258";
    console.log(this.adresa);
    this.articles = [];
    this.httpClient
    .get(this.adresa)
    .subscribe(
      (data: any) => {
        this.articles = data["articles"];
        console.log(this.articles);
        }, (error) => {

      }
    );
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient
    .get(this.adresa)
    .subscribe(
      (data: any) => {
        this.articles = data["articles"];
        console.log(this.articles);
        }, (error) => {

      }
    );
  }
  
}
