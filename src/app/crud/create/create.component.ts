import { Component, OnInit } from '@angular/core';
//import { CrudService } from '../crud.service';
import { CrudService } from '../crud.service.mock';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  quoteForm: FormGroup;

  ngOnInit() {
      this.quoteForm = this.fb.group({
      id: [''],
      quotation: [''],
      author: ['']
    })
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ){ }
  submitForm() {
    this.crudService.create(this.quoteForm.value).subscribe(res => {
      console.log('Quote created!');
      this.router.navigate(['/crud/home/']);
    })

  }

}
