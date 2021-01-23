import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';

@Component({
  selector: 'ngx-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  form : FormGroup;
  id: string;

  constructor(private service: AdminService, private formBuilder: FormBuilder) { 

    this.form = this.formBuilder.group({
       texto: [''],
       video: ['']
    });

    this.getData();
  }

  ngOnInit(): void {
    
  }

  getData()
  {
     this.service.getTextHome().subscribe(s=>{
       
      this.form.controls['texto'].patchValue(s[0].texto);
      this.form.controls['video'].patchValue(s[0].video);
      this.id = s[0].id;
     },e => console.log(e));
  }

  salvar()
  {
      const data = this.form.value;
      data.id = this.id;

      this.service.setTextHome(data).then(snapShot=>{
          console.log(snapShot);
      }).catch(e=>console.log(e));
  }

}
