import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { LinksTabComponent } from './components/links-tab/links-tab.component';
import { PhoneComponent } from './components/phone/phone.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { LinkButtonComponent } from './components/UI/link-button/link-button.component';
import { SelectComponent } from './components/UI/select/select.component';
import { ArrowIconComponent } from './components/UI/svg/arrow-icon/arrow-icon.component';
import { DetailIconComponent } from './components/UI/svg/detail-icon/detail-icon.component';
import { LinkIconComponent } from './components/UI/svg/link-icon/link-icon.component';
import { UploadIconComponent } from './components/UI/svg/upload-icon/upload-icon.component';
import { RemoveSpacePipe } from './pipe/remove-space.pipe';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environment/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { PreviewByIdComponent } from './pages/preview-by-id/preview-by-id.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkItemComponent,
    LinksTabComponent,
    PhoneComponent,
    ProfileTabComponent,
    ButtonComponent,
    LinkButtonComponent,
    SelectComponent,
    ArrowIconComponent,
    DetailIconComponent,
    LinkIconComponent,
    UploadIconComponent,
    RemoveSpacePipe,
    MainPageComponent,
    PreviewComponent,
    PreviewByIdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ClipboardModule,
    HotToastModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
