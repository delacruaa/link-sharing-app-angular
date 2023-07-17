import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/links.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.scss']
})
export class ProfileTabComponent implements OnInit {
  formGroup!:FormGroup
  submitted = false;
  selectedFile!: File;
  imagePreview!: string;
  currentFileUpload?: FileUpload;
  loading=false
  constructor(private linkService:LinkService,private router: Router) {}
  ngOnInit(): void {
 
    this.formGroup = new FormGroup({
      firstName:new FormControl( this.linkService.profile.value.firstName || '', [Validators.required]),
      lastName:new FormControl( this.linkService.profile.value.lastName || '', [Validators.required]),
      email:new FormControl( this.linkService.profile.value.email || '', [Validators.required, Validators.email]),
     
    })
    
   this.linkService.imageUrl.subscribe(img=> {
      if (img) {
      this.imagePreview =img
     }
   })
    this.formGroup.valueChanges.subscribe((value)=> {
      this.linkService.profile.next(this.formGroup.value)
    })
  }
  async onFileSelected(event: any) {
    this.loading = true
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.currentFileUpload = new FileUpload(this.selectedFile );
      this.linkService.pushFileToStorage(this.currentFileUpload).subscribe(
        percentage => {
          if(percentage==100) {
            this.loading=false
          }
        },
        error => {
          console.log(error);
          this.loading=false
        }
      );
    }
  }

  
  backToLinks () {
    this.linkService.tab.next('links')
  }

  submitForm() {
    this.submitted = true;
    if(this.formGroup.valid) {
      console.log(this.formGroup.value)
      this.router.navigate(['/preview']);  
    }
  }


}
