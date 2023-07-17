import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILink, IProfile } from 'src/app/models/links.interface';
import { LinkService } from 'src/app/services/link.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-preview-by-id',
  templateUrl: './preview-by-id.component.html',
  styleUrls: ['./preview-by-id.component.scss']
})
export class PreviewByIdComponent {

  platforms:ILink[]=[]
  imagePreview:string | undefined =''
  profile:IProfile ={} as IProfile
  loading =false
  errorMessage=''
  constructor(private linkService:LinkService,private route: ActivatedRoute,private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.loading=true
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.linkService.getDataList().subscribe(data=> {
        data.forEach(item=> {
          if(item.id ==id) {
            this.platforms=item.links
            this.imagePreview=item.img
            this.profile =item.profile
          }
        })
        this.loading=false
      },(err)=> {
        this.errorMessage=err.message
        this.loading=false
      })
      
    });
  }
}
