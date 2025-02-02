import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './devicon.component.html',
  styleUrls: ['./devicon.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DeviconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (this.size === "small")
    {
      this.iconSize = "icon-small";
      this.containerSize = "container-small";
    }
  }

  @Input()
  iconName : string = "test";

  @Input()
  baseIcon : string = "devicon-angularjs-plain";

  @Input()
  size : string = "big";

  @Input()
  showText : boolean = false;

  iconSize : string = "icon-big";
  containerSize : string = "container-big";
}
