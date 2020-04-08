import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';




@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  providers:[NativeAudio]
})
export class FolderPage implements OnInit {
  public mensaje="";
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private nativeAudio: NativeAudio) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.nativeAudio.preloadSimple('uniqueId1','assets/sonidos/ingles/dog.mp3').then(onSuccess=>{
      
      
      console.log(onSuccess);
      this.mensaje+=onSuccess.toString()+"/";
    }, onError=>{
      console.log(onError);
      this.mensaje+=onError.toString()+"/";
    });
  }

  sonido(){
    this.nativeAudio.play('uniqueId1').then(onSuccess=>{
      this.mensaje+=onSuccess.toString()+"/";
    }, onError=>{
      console.log(onError);
      this.mensaje+=onError.toString()+"/";
    });

    
  }

}
