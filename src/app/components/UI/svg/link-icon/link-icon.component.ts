import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-icon',
  templateUrl: './link-icon.component.svg',
  styleUrls: ['./link-icon.component.scss']
})
export class LinkIconComponent {
  @Input() fill!:string
}
