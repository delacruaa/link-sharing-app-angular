import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent implements OnInit {
  @Input() platform!:string
  @Input() link!:string
  img=''
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
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    this.selects.forEach(item=> {
      if(item.title==this.platform) {
        if(item.img=='/assets/icon-devto-gray.svg') {
          this.img =item.img
        }else {
          this.img =item.img.substring(0, item.img.length-9)+'.svg'
        }
      }
      
    })
  }

  redirectLink() {
   if(this.link) {
    const url = this.link; 
    window.open(url, '_blank');
   }
  }
}
