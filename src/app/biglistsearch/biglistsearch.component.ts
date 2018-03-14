import { Component, OnInit } from '@angular/core';
import { ThingsService } from '../things.service';
import { Thing } from '../thing';

@Component({
  selector: 'app-biglistsearch',
  templateUrl: './biglistsearch.component.html',
  styleUrls: ['./biglistsearch.component.sass']
})
export class BiglistsearchComponent implements OnInit {
  things: Thing[];
  filter: string;

  constructor(private thingsService: ThingsService) {}

  onFilterChanged() {}

  ngOnInit() {
    this.filter = 'asd';
    this.thingsService.getThings().then(things => (this.things = things));
  }
}
