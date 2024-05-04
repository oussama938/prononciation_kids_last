import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Unite } from 'src/app/models/unite';
import { DataService } from 'src/app/services/data-service.service';
import { TextToSpeechSynthService } from 'src/app/services/text-to-speech-synth.service';

@Component({
  selector: 'app-mots',
  templateUrl: './mots.component.html',
  styleUrls: ['./mots.component.css']
})
export class MotsComponent implements OnInit{
  motsUnite:any;
  wordGroups: string[][] = [];
  constructor(private route:ActivatedRoute,
              private dataService:DataService,private stt:TextToSpeechSynthService
  ){

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (prm)=>{
        this.motsUnite=this.dataService.getUnitById(prm['id']).words
        console.log(this.motsUnite)
      }
    )

    const words=this.motsUnite
    // const words = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Watermelon", "Mango", "Peach"];

    let tempGroup: string[] = [];
    for (let i = 0; i < words.length; i++) {
      tempGroup.push(words[i]);
      if ((i + 1) % 6 === 0 || i === words.length - 1) {
        this.wordGroups.push(tempGroup);
        tempGroup = [];
      }
    }

    console.log(22)
  }

  speak(word:string){
    this.stt.speak(word)
  }

}
