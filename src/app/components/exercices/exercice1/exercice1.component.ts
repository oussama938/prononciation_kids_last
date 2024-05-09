import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit{
  public exercice1:string[][]=[]
  public mots=[]
  public syllabes=[]
  public tableManager?: Map<string, Array<string>>










  


  constructor(private dataService:DataService){

    // if(this.mots){
    //   this.tableManager=new Map([
    //     [this.mots[0], ['value1', 'value2']],
    //     [this.mots[1], ['value3', 'value4']],
    //     [this.mots[2], ['value5', 'value6']],
    //     [this.mots[2], ['value5', 'value6']]
    //   ]);

    //   console.log(this.tableManager)

    // }else{
     
    // }



    // this.initializeTableManager();

  }
  // private initializeTableManager() {
  //   // Ensure exercice1[1] is defined before trying to access it
  //   if (this.exercice1[1]) {
  //     this.exercice1[1].forEach((el) => {
  //       this.tableManager.set(el, []);
  //     });
  //     console.log(this.tableManager);
  //   } else {
  //     console.error('exercice1[1] is undefined');
  //   }}
  
  ngOnInit(): void {
    this.exercice1 = this.dataService.exercice1

    this.tableManager=new Map([
      [
        this.exercice1[1][0],[],
      ],
      [
        this.exercice1[1][1],[],
      ],
      [
        this.exercice1[1][2],[],
      ],
      [
        this.exercice1[1][3],[],
      ],      
      [
        this.exercice1[1][0],this.exercice1[0],
      ],

    ])

    console.log(this.tableManager)
  }

  table1Items = ['Item 1', 'Item 2', 'Item 3'];
  table2Items: string[] = [];

  onDragStart(event: DragEvent, item: string) {
    event.dataTransfer?.setData('text/plain', item);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const item = event.dataTransfer?.getData('text/plain');
    if (item) {
      this.table2Items.push(item);
      // Optionally, remove the item from table1Items if needed
    }
  }

}
