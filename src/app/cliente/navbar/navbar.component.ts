import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { ClienteService } from "../../Services/cliente.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() id: any;
  @Output() idO: any = new EventEmitter<any>();
  ngOnChanges(changes:any) {
    console.log(changes);
  }
  ngOnInit(): void {
  }
  emitir() {
    this.idO.emit(this.id);
    console.log('emiti desde navbar', this.id);
  }

}
