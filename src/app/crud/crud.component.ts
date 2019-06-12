import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  title = 'JSON to Table Example';
  arrBirds: string [];
  userform: FormGroup;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('./assets/birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
 
  }
  createUserSubmit(){
    const json = {
      ID: this.userform.value.id, Name: this.userform.value.lname,
       Type : this.userform.value.type, ScientificName: this.userform.value.sname
      };

      this.httpService.post('./assets/birds.json',json).subscribe(data => {this.arrBirds = data as string [];},(err: HttpErrorResponse) => {
        console.log (err.message);
      })
  }
}
