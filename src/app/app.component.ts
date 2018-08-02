import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  myForm: FormGroup;

  constructor(
  	private fb: FormBuilder
  	) {
  this.myForm = this.fb.group({
  	email: ['', Validators.required],
  	password: ['', Validators.required],
  	books: this.fb.array([])
  });

  }

  get books(): FormArray {
  	return this.myForm.get('books') as FormArray;
  }

  ngOnInit() {
  	this.addBook();
  }

  addBook() {
  	const book = this.fb.group({
  		name: ['', Validators.required]
  	});
  	this.books.push(book);
  }
}
