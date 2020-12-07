import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct, NgbTimepickerConfig, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

@Component({
  selector: 'app-change-due-date',
  templateUrl: './change-due-date.component.html',
  styleUrls: ['./change-due-date.component.css']
})
export class ChangeDueDateComponent implements OnInit {
  @Output("changeVisibilityOfDueDatePicker") changeVisibilityOfDueDatePicker: EventEmitter<any> = new EventEmitter();
  @Output("requestCardData") requestCardData: EventEmitter<any> = new EventEmitter();

  @Input() cardId: string;
  @Input() dueDate: string;

  datetime: Date = new Date();
  calendarModel: NgbDateStruct;
  timeModel: NgbTimeStruct;

  constructor(private configTimePicker: NgbTimepickerConfig, private apiService: ApiService) { 
    this.configTimePicker.spinners = false;
  }

  ngOnInit(): void {
    this.setDueDate();
  }

  save(): void {
    this.apiService.executePostRequest(`${endpoints.CARD_EDIT}/${this.cardId}`, this.getData(), true).subscribe(
      resp => {
        console.log("Due date added.");
        this.requestCardData.emit();
      },
      error => console.log(error)
    )
    
    this.remove();
  }

  remove(): void {
    this.changeVisibilityOfDueDatePicker.emit();
  }

  private setDueDate(): void {
    if (this.dueDate.length > 0) {
      let datetime = this.extractDateFromDueDate(this.dueDate);

      this.setCurrentDate(datetime['year'], datetime['month'], datetime['day']);
      this.setCurrentTime(datetime['hour'], datetime['minute'], datetime['second']);
    } else {
      this.setCurrentDate(this.datetime.getFullYear(), this.datetime.getMonth(), this.datetime.getDay());
      this.setCurrentTime(this.datetime.getHours(), this.datetime.getMinutes(), 0);
    }
  }

  private getDateTimeFromPicker(): string {
    let month = this.getProperDayOrMonth(String(this.calendarModel.month));
    let day = this.getProperDayOrMonth(String(this.calendarModel.day));

    let hour = this.getProperDayOrMonth(String(this.timeModel.hour));
    let minute = this.getProperDayOrMonth(String(this.timeModel.minute));
    let second = this.getProperDayOrMonth(String(this.timeModel.second));

    return `${this.calendarModel.year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  private getProperDayOrMonth(text: string) {
    return text.length == 1 ? `0${text}` : text;
  }

  private extractDateFromDueDate(text: string): object {
    let temp = text.split(' ');
    let date = temp[0].split('-');
    let time = temp[1].split(':');
    
    return {
      year: Number(date[0]),
      month: Number(date[1]),
      day: Number(date[2]),
      hour: Number(time[0]),
      minute: Number(time[1]),
      second: Number(time[2])
    }
  }

  private setCurrentDate(customYear: number, customMonth: number, customDay: number): void {
    this.calendarModel = {
      year: customYear,
      month: customMonth,
      day: customDay
    };
  }

  private setCurrentTime(customHour: number, customMinute: number, customSecond: number): void {
    this.timeModel = {
      hour: customHour,
      minute: customMinute,
      second: customSecond
    };
  }

  private getData(): Object {
    return {
      name: "dueDate",
      value: this.getDateTimeFromPicker()
    }
  }

}
