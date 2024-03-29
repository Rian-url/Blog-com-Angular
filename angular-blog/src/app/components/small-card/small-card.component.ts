import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photo: string = ""
  @Input()
  title: string = ""
  @Input()
  link : string = ""

  constructor(){}

  ngOnInit(): void {
  }
}
