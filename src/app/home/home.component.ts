import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  menuIsOpen = signal(false);

  toggleMenu () {
    this.menuIsOpen.set(!this.menuIsOpen());
  }
}
