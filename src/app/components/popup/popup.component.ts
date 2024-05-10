import { Component, Input, OnInit } from '@angular/core';
import { VoiceService } from 'src/app/services/voice.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
  showSuccess: boolean = false;
  showFail: boolean = false;
  showPopup: boolean = false;
  @Input() data?: boolean;
constructor(private voiceService : VoiceService){}

  playSuccessSound() {
    // Your logic for correct spelling
    this.voiceService.playSuccessSound();
    this.showPopup = true;
    this.showSuccess = true;
    setTimeout(() => this.showSuccess = false, 2000);
    setTimeout(() => this.showPopup = false, 2000);
  }

  playErrorSound() {
    // Your logic for incorrect spelling
    this.voiceService.playErrorSound();
    this.showPopup = true;
    this.showFail = true;
    setTimeout(() => this.showFail = false, 2000);
    setTimeout(() => this.showPopup = false, 2000000);
  }
  ngOnInit(): void {
    
      if(this.data==undefined){
        return;
      }
      if(this.data == true){
        this.playSuccessSound()
      }
      else{ 
        this.playErrorSound()
      }
      this.data = true;
      console.log(this.data);
  }

}
