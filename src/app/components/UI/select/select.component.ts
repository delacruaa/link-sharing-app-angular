import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @HostBinding('class')
  hostClass = 'hidden';

  private skipClick = false;

  constructor() {
  }

  @HostListener('click', ['$event'])
  hostClick(event: Event) {
    console.log('click', event);
    event.stopPropagation();
  }

  show() {
    this.hostClass = '';
    this.skipClick = true;
  }
  toggle() {
    if(this.hostClass=='hidden') {
      this.hostClass = '';
    }else {
      this.hostClass = 'hidden';
    }
    this.skipClick = true;
  }
  @HostListener('window:click')
  hide() {
    if (this.skipClick) {
      this.skipClick = false;
      return;
    }
    this.hostClass = 'hidden';
  }
}
