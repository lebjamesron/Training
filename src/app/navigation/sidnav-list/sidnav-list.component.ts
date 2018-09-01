import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidnav-list',
  templateUrl: './sidnav-list.component.html',
  styleUrls: ['./sidnav-list.component.css']
})
export class SidnavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter<void>();
  @Input() listItems;

  constructor() { }

  ngOnInit() {
  }

  closeSidenav() {
    this.sidenavClose.emit();
  }

}
