import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tab='links'
  constructor(private linkService:LinkService) {}
  ngOnInit(): void {
    this.linkService.tab.subscribe(tab=> {
      this.tab= tab
    })
  }
}
