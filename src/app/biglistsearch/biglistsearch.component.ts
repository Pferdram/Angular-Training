import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ThingsService } from '../things.service';
import { Thing } from '../thing';

@Component({
  selector: 'app-biglistsearch',
  templateUrl: './biglistsearch.component.html',
  styleUrls: ['./biglistsearch.component.sass']
})
export class BiglistsearchComponent implements OnInit {
  searchForm: FormGroup;
  things: Thing[];

  constructor(
    private formBuilder: FormBuilder,
    private thingsService: ThingsService
  ) {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      name: ''
    });

    this.thingsService.getThings().then(things => (this.things = things));
  }

  onSubmit() {}

  ngOnInit() {}
}
