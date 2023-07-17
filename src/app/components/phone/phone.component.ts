import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/models/links.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  platforms:ILink[] =[]
  imagePreview!:string
  lastName =''
  firstName =''
  email =''
  constructor(private linkService:LinkService){}

  ngOnInit(): void {
    this.linkService.linksArr.subscribe(link=> {
      this.platforms= [...link]
      console.log(this.platforms)
    })
    this.linkService.imageUrl.subscribe(img=> {
      if(img) {
        this.imagePreview=img
      }
      
    })

    this.linkService.profile.subscribe(profile => {
      this.lastName = profile.lastName
      this.firstName =profile.firstName
      this.email =profile.email
    })
  }
}
