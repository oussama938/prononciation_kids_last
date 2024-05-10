import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component {
  progress: number = 0;
  progressWidth?: number;
  timer=60;
  listSyllabes: any =['a', 'ma', 'am', 'al', 'mi', 'li', 'mil', 'imi', 'lam', 'lal', 'lil', 'lim', 'mil', 'lam', 'am', 'imi', 'ili', 'ima', 'lima', 'alal', 'mami', 'mimi', 'ali', 'la', 'ma', 'il', 'ami', 'mal', 'amal', 'ala']
  syllabesGroups: string[][] = [];
  buttonValue:string = "Commencer"
  score : number = 0;
  
constructor() { }

ngOnInit(): void {
  this.splitSyllabes();
  this.updateProgress();
}

updateProgress() {
  setTimeout(() => {
    this.progress += 10; // Increase progress by 10%
    this.progressWidth = this.progress; // Set progressWidth to match progress
    if (this.progress <= 100) {
      this.updateProgress(); // Call the function recursively until progress reaches 100%
    }
  }, 1000); // Update progress every 1 second
}

splitSyllabes() {
  for (let i = 0; i < this.listSyllabes.length; i += 5) {
    this.syllabesGroups.push(this.listSyllabes.slice(i, i + 5));
  }
}
hideCTADiv() {
  this.buttonValue = "Réjouer";
}

}