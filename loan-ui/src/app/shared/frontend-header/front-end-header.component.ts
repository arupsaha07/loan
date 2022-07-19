import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-end-header',
  templateUrl: './front-end-header.component.html',
  styleUrls: ['./front-end-header.component.css']
})
export class FrontEndHeaderComponent implements OnInit {
  logoSrc = 'assets/logo.png'
  logoAlt = 'logo'
  constructor() { }

  ngOnInit(): void {
  }

}
