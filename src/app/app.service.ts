import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  adviceGeneratorURL = "https://api.adviceslip.com/advice";

  getRandomAdvice() {
    return this.http.get(this.adviceGeneratorURL);
  }
}
