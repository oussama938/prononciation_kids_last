import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
import { TextToSpeechSynthService } from 'src/app/services/text-to-speech-synth.service';

@Component({
  selector: 'app-syllabes',
  templateUrl: './syllabes.component.html',
  styleUrls: ['./syllabes.component.css']
})
export class SyllabesComponent {
  syllabesUnite:any;
  idPageUnit = 0;
  wordGroups: string[][] = [];
  constructor(private route:ActivatedRoute,
              private dataService:DataService,private stt:TextToSpeechSynthService
  ){

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (prm)=>{
        this.syllabesUnite=this.dataService.getUnitById(prm['id']).syllabes
        this.idPageUnit = prm['id']
        console.log(this.syllabesUnite)
      }
    )

    const words=this.syllabesUnite
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
