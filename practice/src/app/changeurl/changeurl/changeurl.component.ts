import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-changeurl',
  templateUrl: './changeurl.component.html',
  styleUrls: ['./changeurl.component.css']
})
export class ChangeurlComponent implements OnInit {
  customerdetails = function (Customer) {
    switch (Customer) {
      case "Customer":
        this.customergrid = '1';
        this.activebutton = 'Customer';
        this.__router.navigateByUrl('/Customer');
        break;
      case "father":
        this.customergrid = '2';
        this.activebutton = 'father';
        this.__router.navigateByUrl('/father');
        break;
      case "mother":
        this.customergrid = '3';
        this.activebutton = 'mother';
        this.__router.navigateByUrl('/mother');
        break;
      case "spouse":
        this.customergrid = '4';
        this.activebutton = 'spouse';
        this.__router.navigateByUrl('/spouse');
        break;
      case "allfields":
        this.customergrid = '5';
        this.activebutton = 'allfields';
        this.__router.navigateByUrl('/allfields');
        break;
      case "cbrother":
        this.customergrid = '6';
        this.activebutton = 'cbrother';
        this.__router.navigateByUrl('/cbrother');
        break;
      case "csister":
        this.customergrid = '7';
        this.activebutton = 'csister';
        this.__router.navigateByUrl('/csister');
        break;
      case "fbsister":
        this.customergrid = '8';
        this.activebutton = 'fbsister';
        this.__router.navigateByUrl('/fbsister');
        break;
      case "mbsister":
        this.customergrid = '9';
        this.activebutton = 'mbsister';
        this.__router.navigateByUrl('/mbsister');
        break;
      case "reference":
        this.customergrid = '10';
        this.activebutton = 'reference';
        this.__router.navigateByUrl('/reference');
        break;
      case "partner":
        this.customergrid = '11';
        this.activebutton = 'partner';
        this.__router.navigateByUrl('/partner');
        break;
    }

  };

  constructor(private __router: Router) {}

  ngOnInit() {
  }

}

