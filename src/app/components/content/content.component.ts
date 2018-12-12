import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PartialNavbarComponent } from '../partials/partial-navbar/partial-navbar.component';
import { PartialNavheaderComponent } from '../partials/partial-navheader/partial-navheader.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  @ViewChild('navbar') childnavbar: PartialNavbarComponent;
  @ViewChild('navheader') childheader: PartialNavheaderComponent;
  constructor() { }

  ngOnInit() {
    this.childheader.emitEvent.subscribe(
      res => {
        //console.log("attribute: "+res);
        this.childnavbar.dataShared = res;
      }
    );
  }

  change(): void {
    this.childheader.function1();
  }

  getMensaje(e) {
    //console.log(e);
    this.childheader.function1();
  }

}
