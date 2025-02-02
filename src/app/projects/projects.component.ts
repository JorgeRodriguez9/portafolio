import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeviconContainerComponent } from '../devicon-container/devicon-container.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule, DeviconContainerComponent]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
