import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeviconContainerComponent } from '../devicon-container/devicon-container.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule,DeviconContainerComponent]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
