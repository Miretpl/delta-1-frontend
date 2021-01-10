import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-activity',
  templateUrl: './show-activity.component.html',
  styleUrls: ['./show-activity.component.css']
})
export class ShowActivityComponent implements OnInit {
  @Input() username: string;
  @Input() description: string;
  @Input() creationTime: string;

  date: string;
  usernameFirstLetter: string;

  constructor() { }

  ngOnInit(): void {
    this.prepareData();
  }

  private prepareData(): void {
    if (this.isCorrectString(this.creationTime)) {
      var creationTimeTmp = this.creationTime.split("T");
      var timeTmp = creationTimeTmp[1].split(":");
  
      this.date = `${creationTimeTmp[0]} at ${timeTmp[0]}:${timeTmp[1]}`;
    }

    if (this.isCorrectString(this.username)) {
      this.usernameFirstLetter = this.username.charAt(0);
    }
  }

  private isCorrectString(text: string): boolean {
    return text != null && text.length > 0;
  }

}
