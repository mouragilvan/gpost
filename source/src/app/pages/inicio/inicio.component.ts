import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/services/database.service';
import { SafePipe } from '../../shared/directives/safepipe.directive';

@Component({
  selector: 'ngx-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  text : any;
  url: any;
  safe = SafePipe;
  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.getText();
  }

  getText(){
     this.db.getData().subscribe((s: any)=>{
       this.text = s[0].texto;
       this.url = s[0].video;      
     },e=>console.log(e));
  }

  
}
