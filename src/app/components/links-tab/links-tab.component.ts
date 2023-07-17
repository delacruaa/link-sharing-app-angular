import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ILink } from 'src/app/models/links.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-links-tab',
  templateUrl: './links-tab.component.html',
  styleUrls: ['./links-tab.component.scss']
})
export class LinksTabComponent implements OnInit{
  formGroup!:FormGroup
  submitted = false;
  selects =[
    {
    img:'/assets/icon-github-gray.svg',
    title:'Github'
    },
    {
      img:'/assets/icon-frontend-mentor-gray.svg',
      title:'Frontend Mentor'
    },
    {
      img:'/assets/icon-twitter-gray.svg',
      title:'Twitter'
    },
    {
      img:'/assets/icon-linkedin-gray.svg',
      title:'LinkedIn'
    },
    {
      img:'/assets/icon-youtube-gray.svg',
      title:'Youtube'
    },
    {
      img:'/assets/icon-facebook-gray.svg',
      title:'Facebook'
    },
    {
      img:'/assets/icon-twitch-gray.svg',
      title:'Twitch'
    },
    {
      img:'/assets/icon-devto-gray.svg',
      title:'Dev.to'
    },
    {
      img:'/assets/icon-codewars-gray.svg',
      title:'Codewars'
    },
    {
      img:'/assets/icon-codepen-gray.svg',
      title:'Codepen'
    },
    {
      img:'/assets/icon-freecodecamp-gray.svg',
      title:'freeCodeCamp'
    },
    {
      img:'/assets/icon-gitlab-gray.svg',
      title:'GitLab'
    },
    {
      img:'/assets/icon-hashnode-gray.svg',
      title:'Hashnode'
    },
    {
      img:'/assets/icon-stack-overflow-gray.svg',
      title:'Stack Overflow'
    }
  ]
  constructor(private linkService:LinkService){}
  ngOnInit(): void {
   let linksArr:any[]= this.linkService.linksArr.getValue()
   if(linksArr.length) {
      linksArr = linksArr.map(item=> {
        return new FormGroup({
          platform:new FormControl(item.platform, [Validators.required]),
          link:new FormControl(item.link, [Validators.required, Validators.pattern('^https?://[a-z0-9]+([-.][a-z0-9]+)*.[a-z]{2,}(/.*)?$')]),
        })
      })
      this.formGroup = new FormGroup({
        itemList: new FormArray(linksArr)
      })
   }else {
      this.formGroup = new FormGroup({
        itemList: new FormArray([
          new FormGroup({
            platform:new FormControl('', [Validators.required]),
            link:new FormControl('', [Validators.required, Validators.pattern('^https?://[a-z0-9]+([-.][a-z0-9]+)*.[a-z]{2,}(/.*)?$')]),
          })
        ])
      })
   }
  
  this.formGroup.valueChanges.subscribe((value)=> {
    //@ts-ignore
    this.linkService.linksArr.next(Object.values(value)[0])
  })
    
  }
  get itemListFormGroups () {
    return this.formGroup.get('itemList') as FormArray
  }
  addItemList() {
    const item=<FormArray>this.formGroup.controls['itemList'];
    item.push(
      new FormGroup({
        platform:new FormControl('', [Validators.required]),
        link:new FormControl('', [Validators.required]),
      })
    )
  }
  removeItemList(index:number) {
    const item=<FormArray>this.formGroup.controls['itemList'];
    item.removeAt(index)
  }

  setPlatformValue(value:string, i:number) {
    this.itemListFormGroups.controls[i].get('platform')?.setValue(value)
    
  }
  
  getImgLink(i:number) {
    this.selects.forEach(item=> {
      if(item.title==this.itemListFormGroups.controls[i].get('platform')?.value) {
        return item.img
      }
      return ''
    })
  }

  submitForm() {
    this.submitted=true
    if(this.formGroup.valid) {
      this.linkService.tab.next('profile')
    }
  }
}
