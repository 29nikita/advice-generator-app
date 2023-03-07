import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advice-generator-app';
  response: any;

  constructor(private appService: AppService) { }
  ngOnInit() {

    this.onClickRandomAdviceGenerator();

  }

  onClickRandomAdviceGenerator() {
    this.appService.getRandomAdvice().subscribe((data) => {
      this.response = data;
    })
  }

}
