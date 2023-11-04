import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './components/profiles/profiles/profiles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProfilesComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProfilesComponent, HttpClientModule],
})
export class ProfileModule {}
