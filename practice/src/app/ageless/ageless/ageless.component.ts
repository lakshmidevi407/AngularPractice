import { Component, OnInit, ViewChild } from '@angular/core';
import { Arraysbindings } from '../../../common/binding';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
export interface agelessinterface {
  selectagefrm: string;
  selectageto: string;
  heightfrm: any;
  heightto: any;
}

@Component({
  selector: 'app-ageless',
  templateUrl: './ageless.component.html',
  styleUrls: ['./ageless.component.css'],
  providers: [
    { provide: ToastrService }]
})
export class AgelessComponent implements OnInit {
  public selectagefrmarray: any[] = [];
  public heightarray = [];
  public partnerpreferenceobj: agelessinterface;
  public mySettings = Arraysbindings.mySettings;
  public mysingleSettings = Arraysbindings.mysingleSettings;
  public myTexts = Arraysbindings.myTexts;
  public mysingleTexts = Arraysbindings.myTextsSingle;
  constructor(private toastr: ToastrService) {
    this.selectagefrmarray = Arraysbindings.partnerAgebind('select');
    this.heightarray = Arraysbindings.heightsearch;
  }
  Partnerpreferencesubmit(model, isValid: boolean) {
    // AgeGapFrom: this.__commonservice.checkvalsarraysting(model.selectagefrm) ? model.selectagefrm.toString() : null,
    //   AgeGapTo: this.__commonservice.checkvalsarraysting(model.selectageto) ? model.selectageto.toString() : null,
    //     HeightFrom: this.__commonservice.checkvalsarraysting(model.heightfrm) ? model.heightfrm.toString() : null,
    //       HeightTo: this.__commonservice.checkvalsarraysting(model.heightto) ? model.heightto.toString() : null,
  }
  partnerprefenceage(from, to, type) {
    switch (type) {
      case "age":
        if (parseInt(from) > parseInt(to)) {
          this.toastr.error('Please Select Correct Value', 'Alert!', { timeOut: 3000 });
          this.partnerpreferenceobj.selectagefrm = '';
          this.partnerpreferenceobj.selectageto = '';
        } else {

        }
        break;
      case "height":
        if (parseInt(from) > parseInt(to)) {
          this.toastr.error('Please Select Correct Value', 'Alert!', { timeOut: 3000 });
          this.partnerpreferenceobj.heightfrm = '';
          this.partnerpreferenceobj.heightto = '';
        } else {

        }
        break;
    }

  };
  ngOnInit() {
    this.partnerpreferenceobj = {
      selectagefrm: null,
      selectageto: null,
      heightfrm: null,
      heightto: null,
    };
  
  }
}


