import { Component } from '@angular/core';
import { VoiceService } from 'src/app/services/voice.service';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component {
  progress: number = 0;
  progressWidth?: number;
  timerValue: string = '--:--';
  timer: number = 90;
  interval: any;
  listSyllabes: any =['a', 'ma', 'am', 'al', 'mi', 'li', 'mil', 'imi', 'lam', 'lal', 'lil', 'lim', 'mil', 'lam', 'am', 'imi', 'ili', 'ima', 'lima', 'alal', 'mami', 'mimi', 'ali', 'la', 'ma', 'il', 'ami', 'mal', 'amal', 'ala']
  syllabesGroups: string[][] = [];
  buttonValue:string = "Commencer"
  score : number = 0;
  currentWordIndex: number = -1;
  correctWord: string = this.listSyllabes[this.currentWordIndex];
  evaluationInterval: number = 0;
  idPageUnit = 0;
  showPopup: boolean = false;
  showSuccess: boolean = false;
  popupData: boolean | undefined = false;
  showFail: boolean = false;
  constructor(private voiceService : VoiceService) { }

  ngOnInit(): void {
    this.splitSyllabes();
    
    
    console.log(this.currentWordIndex);
    
  }



  splitSyllabes() {
    for (let i = 0; i < this.listSyllabes.length; i += 5) {
      this.syllabesGroups.push(this.listSyllabes.slice(i, i + 5));
    }
  }

  hideCTADiv() {
    this.buttonValue = "Réjouer";
  }

  startTimer() {
    // Start the timer
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
    
    
  }

  updateTimer() {
    console.log(this.currentWordIndex);
  this.timer--;
  this.evaluationInterval++; // Increment the evaluation interval
  
  if (this.evaluationInterval === 2) {
    // Generate random boolean data for the popup
    const popupData = this.generateBoolean();
    // Pass data to the popup component
    this.popupData = popupData;
  }

  if (this.evaluationInterval === 3) {
    // Evaluate the word
    this.evaluateWord(this.correctWord);
    this.evaluationInterval = 0;
    this.currentWordIndex++; // Reset the evaluation interval
  }
    
    if (this.timer <= 0) {
      clearInterval(this.interval);
      console.log("Time's up!");
    }
    

    
    this.timerValue = this.formatTime(this.timer);
    if (this.timerValue === '00:00') {
      console.log("end");
    }
    
  }
  
  evaluateWord(word: string) {
    const correctWord = this.listSyllabes[this.currentWordIndex];
    return true;
    
  }
  showSuccessPopup() {
    // Implement logic to show success popup
    console.log('Success!');
  }

  generateBoolean(){
    return Math.random()>0.5?true:false
  }

  showFailurePopup() {
    // Implement logic to show failure popup
    console.log('Failure!');
  }

  // detectSonFor3Secands(){}

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();
    return formattedMinutes + ':' + formattedSeconds;
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
