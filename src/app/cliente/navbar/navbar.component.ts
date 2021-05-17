import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() id: any;
  ngOnInit(): void {
    console.log('aqui stoy en navbar',this.id);
  }

}
