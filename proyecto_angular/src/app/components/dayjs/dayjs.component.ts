import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import Config from "@/config/Config";
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


@Component({
  selector: 'app-dayjs',
  standalone: true,
  imports: [],
  templateUrl: './dayjs.component.html',
  styleUrl: './dayjs.component.css'
})
export class DayjsComponent implements OnChanges {

  @Input() locale: string = Config.DEFAULT_LANGUAGE;
  @Input() format?: string;
  @Input() dateString: string = '';

  dateTime: Date = new Date();
  dayJsDate!: Dayjs;
  computedFormat: string = '';

  constructor() {
    dayjs.extend(relativeTime);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateString']) {
      this.dateTime = new Date(this.dateString);
      this.dayJsDate = dayjs(this.dateTime).locale(this.locale);
      this.updateComputedFormat();
    }
  }

  private updateComputedFormat(): void {
    this.computedFormat = this.format ? this.dayJsDate.format(this.format) : this.dayJsDate.fromNow();
  }


}
