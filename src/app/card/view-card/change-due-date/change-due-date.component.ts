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

  saveDueDate(): void {
    this.sendChangesToServer(this.getDateTimeFromPicker(), "created");
    this.changeVisibilityOfDueDatePicker.emit();
  }

  removeDueDate(): void {
    if (this.dueDate.length > 0) {
      this.sendChangesToServer(null, "removed");
    }

    this.changeVisibilityOfDueDatePicker.emit();
  }

  closeDueDateComponent(): void {
    this.changeVisibilityOfDueDatePicker.emit();
  }

  private sendChangesToServer(newValue: string | null, message: string): void {
    this.apiService.executePostRequest(`${endpoints.CARD_EDIT}/${this.cardId}`, this.getData(newValue), true).subscribe(
      resp => {
        console.log(`Due date ${message}.`);
        this.requestCardData.emit();
      },
      error => console.log(error)
    );
  }

  private setDueDate(): void {
    if (this.dueDate.length > 0) {
      this.setDateTimeFromSetted();
    } else {
      this.setLocalCurrentDateTime();
    }
  }

  private setLocalCurrentDateTime(): void {
    this.setCurrentDate(this.datetime.getFullYear(), this.datetime.getMonth() + 1, this.datetime.getDate());
    this.setCurrentTime(this.datetime.getHours(), this.datetime.getMinutes(), 0);
  }

  private setDateTimeFromSetted(): void {
    let datetime = this.extractDateFromDueDate(this.dueDate);

    this.setCurrentDate(datetime['year'], datetime['month'], datetime['day']);
    this.setCurrentTime(datetime['hour'], datetime['minute'], datetime['second']);
  }

  private getDateTimeFromPicker(): string {
    let month = this.getProperStringValue(this.calendarModel.month);
    let day = this.getProperStringValue(this.calendarModel.day);

    let hour = this.getProperStringValue(this.timeModel.hour);
    let minute = this.getProperStringValue(this.timeModel.minute);
    let second = this.getProperStringValue(this.timeModel.second);

    return `${this.calendarModel.year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  private getProperStringValue(value: number): string {
    return this.getProperDatetimeValue(String(value));
  }

  private getProperDatetimeValue(text: string) {
    return text.length == 1 ? `0${text}` : text;
  }

  private extractDateFromDueDate(text: string): object {
    let temp = text.split(' ');
    let date = temp[0].split('.');
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

  private getData(newValue: string | null): Object {
    return {
      name: "dueDate",
      value: newValue
    }
  }

}
