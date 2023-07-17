import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-icon',
  templateUrl: './upload-icon.component.svg',
  styleUrls: ['./upload-icon.component.scss']
})
export class UploadIconComponent {
  @Input() fill =''
}
