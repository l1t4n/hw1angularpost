import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ! Foreign modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


// ! Components
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ChatsWindowComponent } from './chats-window/chats-window.component';
import { ProfileWindowComponent } from './profile-window/profile-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ChatsWindowComponent,
    ProfileWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //form module
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
