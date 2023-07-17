import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-icon',
  templateUrl: './detail-icon.component.svg',
  styleUrls: ['./detail-icon.component.scss']
})
export class DetailIconComponent {
  @Input() fill!:string
}
