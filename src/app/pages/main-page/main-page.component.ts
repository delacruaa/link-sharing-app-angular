import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  tab='links'
  constructor(private linkService:LinkService) {}
  ngOnInit(): void {
    this.linkService.tab.subscribe(tab=> {
      this.tab= tab
    })
  }
  
}
