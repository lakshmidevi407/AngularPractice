import { Component, OnInit, ViewChild } from '@angular/core';
import { AgelessComponent } from '../../ageless/ageless/ageless.component';
import { LessvalueComponent } from '../../lessvalue/lessvalue/lessvalue.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-clickurl',
  templateUrl: './clickurl.component.html',
  styleUrls: ['./clickurl.component.css']
})
export class ClickurlComponent implements OnInit {
  @ViewChild('AgelessComponent') public AgelessComponent: AgelessComponent;
  @ViewChild('LessvalueComponent') public LessvalueComponent: LessvalueComponent;
  public showhideageless: Boolean;
  public showhidelessvalue: Boolean;
  constructor() { }
  clickchange = function (type) {
    switch (type) {
      case "Home":
        this.activebutton = 'Home';
        this.showhideageless = true;
        this.showhidelessvalue = false;
        break;
      case "Contact":
        this.activebutton = 'Contact';
        this.showhideageless = false;
        this.showhidelessvalue = true;
        break;
     
    }

  };
  ngOnInit() {
  }

}
