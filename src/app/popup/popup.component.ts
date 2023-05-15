import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  isSigned = false;
  isAadhaarVerified = false;

  ngOnInit() {
    setTimeout(() => {
      this.isSigned = true;
    }, 3000);

    setTimeout(() => {
      this.isSigned = true;
      this.isAadhaarVerified = true;
    }, 3000);
  }
}
