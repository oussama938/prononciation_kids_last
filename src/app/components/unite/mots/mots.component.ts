import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Unite } from 'src/app/models/unite';
import { DataService } from 'src/app/services/data-service.service';
import { TextToSpeechSynthService } from 'src/app/services/text-to-speech-synth.service';
import { VoiceService } from 'src/app/services/voice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mots',
  templateUrl: './mots.component.html',
  styleUrls: ['./mots.component.css']
})
export class MotsComponent implements OnInit{
  motsUnite:any;
  displayedMots : any;
  Paginator : any
  id = 0;
  idPageUnit = 0;
  showPopup: boolean = false;
  popupData?: boolean;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioPlayerFail') audioPlayerFail!: ElementRef<HTMLAudioElement>;
  showSuccess: boolean = false;
  showFail: boolean = false;
  constructor(private route:ActivatedRoute,
              private dataService:DataService,private stt:TextToSpeechSynthService,
              private voiceService : VoiceService
  ){

  }
  ngOnInit(): void {
    
    this.route.params.subscribe(
      (prm)=>{
        this.motsUnite=this.dataService.getUnitById(prm['id']).words
        this.Paginator = this.chunkArray(this.motsUnite , 6)
        this.displayedMots = this.chunkArray(this.motsUnite , 6)[0]
        console.log("displayed mot",this.displayedMots);

        this.idPageUnit = prm['id']
        console.log(this.motsUnite)
        
      }
    )
    
    
  }

  speak(word:string){
    this.stt.speak(word)
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  testSpeech(){
    // const result = true;
    this.popupData = true;
    this.playSuccessSound();
  }
  changeElements(id:number){
    console.log(id);
    this.displayedMots = this.chunkArray(this.motsUnite , 6)[id]
    console.log("hey", this.chunkArray(this.motsUnite , 6));
    
    
  }

  playSuccessSound() {
    // Your logic for correct spelling
    this.voiceService.playSuccessSound();
    this.showPopup = true;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
      this.showPopup = false;
    }, 2000);
  }

  playErrorSound() {
    // Your logic for incorrect spelling
    this.voiceService.playErrorSound();
    this.showPopup = true;
    this.showFail = true;
    setTimeout(() => {
      this.showFail = false;
      this.showPopup = false;
    }, 2000);
  }

  
  

  

  

 

}
