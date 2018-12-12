import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partial-navbar',
  templateUrl: './partial-navbar.component.html',
  styles: []
})
export class PartialNavbarComponent implements OnInit {
  @Input() dataShared:boolean = false;
  isActive = false;
  constructor() { }

  ngOnInit() {
  }

}
