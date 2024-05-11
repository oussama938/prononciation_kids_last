import { Component } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercice.service';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public tableWords: string[];
  exerciseservice: ExerciseService;
  ex1 = ['garçon', 'mamon', 'chanter','tante', 'content', 'onele','une', 'tu', 'papi','une','jolie','colorier'];

  constructor(exerciseservice: ExerciseService) {
    this.exerciseservice = exerciseservice;
    this.tableWords = this.ex1 || [];
  }

  dragStart(event: DragEvent) {
    event.dataTransfer?.setData("text/plain", (event.target as HTMLElement).textContent || '');
  }

  drop(event: DragEvent, targetId: string) {
    event.preventDefault();
    const droppedWord = event.dataTransfer?.getData("text/plain");
    if (droppedWord) {
        // Get the target cell using its ID
        const targetCell = document.getElementById(targetId);
        if (targetCell && targetCell.textContent !== null) {
            // Check if the word is already present in the target cell
            if (!targetCell.textContent.includes(droppedWord)) {
                // Create a new cell
                const newCell = document.createElement('div');
                newCell.textContent = droppedWord;
                newCell.draggable = true; // Make the new cell draggable
                newCell.addEventListener('dragstart', (event) => this.dragStart(event)); // Add dragstart event listener
                // Append the new cell to the target cell
                targetCell.appendChild(newCell);
                // Remove the dropped word from the list
                this.tableWords = this.tableWords.filter(word => word !== droppedWord);
  
                // Remove the dropped word from its original cell if it exists
                const originalCell = event.target as HTMLElement;
                if (originalCell && originalCell !== targetCell && originalCell.textContent !== null) {
                    originalCell.textContent = originalCell.textContent.replace(droppedWord, '').trim();
                }
            }
        }
    }
  }
  
  

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  preventDrag(event: MouseEvent) {
    event.preventDefault();
  }
}
