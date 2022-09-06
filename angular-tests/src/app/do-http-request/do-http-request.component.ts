import { Component, OnInit } from '@angular/core';
import { DoHttpRequestService } from '../do-http-request.service';
import { People } from '../people.model';

@Component({
  selector: 'app-do-http-request',
  templateUrl: './do-http-request.component.html',
  styleUrls: ['./do-http-request.component.css']
})
export class DoHttpRequestComponent implements OnInit {

  luke!: People;

  constructor(private doHttpRequestService: DoHttpRequestService) { }

  ngOnInit(): void {
    this.doHttpRequestService.getLuke().subscribe((luke) => {
      this.luke = luke;
    });
  }

}
