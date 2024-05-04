import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextToSpeechSynthService } from './services/text-to-speech-synth.service';
import { SttService } from './services/stt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  transcript: string = '';


  constructor(private route:Router,public sp:TextToSpeechSynthService,private speechToTextService:SttService){
    // this.speechToTextService.onResult((result) => {
    //   this.transcript = result;
    // });
  }

  ngOnInit(): void {
    this.route.navigateByUrl('listedesunite')
    console.log(window)
    // this.loadScript('../assets/script/script.js').then(() => {
    //   // Script has loaded, you can use functions defined in script.js here
    //   this.askForAuthorization();
    // }).catch((error) => {
    //   // Handle error if script fails to load
    //   console.error('Script loading failed:', error);
    // });
  }

  loadScript(src: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.body.appendChild(script);
    });
  }

  askForAuthorization() {
    // Call the function from the loaded script to ask for microphone authorization
    (window as any).askForMicrophoneAuthorization()
      .then(() => console.log("Microphone authorized"))
      .catch((error: any) => console.error("Error asking for authorization:", error));
  }

  listenForSpeech() {
    // Call the function from the loaded script to listen for speech
    (window as any).listenForSpeech(5000) // Listen for 5 seconds
      .then((transcript: any) => console.log("Recognized speech:", transcript))
      .catch((error: any) => console.error("Error recognizing speech:", error));
  }
  
  

}
