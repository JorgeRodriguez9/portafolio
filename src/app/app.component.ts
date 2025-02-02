import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DeviconContainerComponent } from './devicon-container/devicon-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, DeviconContainerComponent, RouterOutlet, RouterLink]

})
export class AppComponent {
  title = 'portafolio-2022';

  constructor(private router: Router) {
    if(this.router.url === '/'){
      router.navigateByUrl('./');
    }
  }

  current = false;

  updateSelection(id: string) {
    if (id === 'a1') {
      this.current = false;
      return;
    }

    this.current = true;
  }
}

