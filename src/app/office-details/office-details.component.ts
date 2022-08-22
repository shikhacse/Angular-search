import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-office-details',
  templateUrl: './office-details.component.html',
  styleUrls: ['./office-details.component.css']
})
export class OfficeDetailsComponent implements OnInit {
 officeList : any;
  constructor( private searchService : SearchService) { }

  ngOnInit(): void {
   this.searchService.listOfResult.subscribe(data=>{
    this.officeList = data;
   })
  }

}
