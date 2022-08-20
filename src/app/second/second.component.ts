import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EchoService } from '../echo.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  public response!: Observable<any>;
  constructor(private echoService: EchoService) {}

  ngOnInit(): void {
    this.response = this.echoService.makeCall();
  }
}
