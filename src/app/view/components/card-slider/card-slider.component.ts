import {Component, Input, OnInit} from '@angular/core';
import {IBookInfo} from "../../../models/IBookInfo";

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {
  @Input() bookCategory: string = "Default";
  @Input() bookList: IBookInfo[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
