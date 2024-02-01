import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css']
})
export class MediumCardComponent implements OnInit {
  @Input()
  photo: string = ""
  @Input()
  title: string = ""
  @Input()
  description: string = ""
  @Input()
  link : string = ""

  constructor(){}

  ngOnInit(): void {
  }
}
