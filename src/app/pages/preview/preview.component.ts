import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILink, IProfile } from 'src/app/models/links.interface';
import { LinkService } from 'src/app/services/link.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  platforms:ILink[]=[]
  imagePreview:string | undefined =''
  profile:IProfile ={} as IProfile
  file!:File |null
  loading=false
  constructor(private linkService:LinkService,private router: Router,private clipboard: Clipboard,private toast: HotToastService,private spinner: NgxSpinnerService,) {}

  ngOnInit(): void {
    this.platforms = this.linkService.linksArr.getValue()
    this.profile =this.linkService.profile.getValue()
    this.linkService.imageUrl.subscribe(img=>{
      this.imagePreview=img
    })
    
  }
  createData() {
    this.spinner.show();
  
    let id = new Date().getTime()
    let data = {
      id:id,
      links:this.platforms,
      profile:this.profile,
      img:this.imagePreview
    }

    this.linkService.createData(id, data).then(()=> {
      this.spinner.hide();
       this.toast.success('Done! you will be redirected');
        window.open(`https://link-sharing-app-angular.vercel.app/${id}`, '_blank');
    }).catch(()=> {
      this.spinner.hide();
      this.toast.error('Error, try later');
      console.log('error')
    })
  }
}
