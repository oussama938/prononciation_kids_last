import { Injectable } from '@angular/core';
import { Unite } from '../models/unite'; // Assuming your Unite model is in a file named unite.ts

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Array to store your Unite objects
  public unites: Unite[] = [
    new Unite(1, ['word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12', 'word13', 'word14', 'word15','word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12', 'word13', 'word14', 'word15','word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12', 'word13', 'word14', 'word15','word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12', 'word13', 'word14', 'word15'],
     ['syllabe1', 'syllabe2','word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12', 'word13', 'word14', 'word15','word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10', 'word11', 'word12', 'word13', 'word14', 'word15','word1', 'word2']),
     new Unite(2, ['word4', 'word5', 'word6'], ['syllabe3', 'syllabe4'])


  ];

  constructor() {
  }

  getUnitById(id: number): Unite {
    return this.unites[id-1]
  } 
}