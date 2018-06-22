import {Component, Input, OnInit} from '@angular/core';
import {ModalInterface} from '../../app.component';
import { HelperService} from '../../service/helper/helper.service';
declare const $:any
@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {



  @Input('modalData') modalData:ModalInterface<any>;

  constructor(public helperService:HelperService) {



  }

  ngOnInit() {
  }

}
