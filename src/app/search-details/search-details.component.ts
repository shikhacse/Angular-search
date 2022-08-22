import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
resultData: any;
  constructor(private searchService : SearchService , private router : Router) { }

  ngOnInit(): void {
    this.searchService.detail.subscribe(data=>{
      this.resultData = data;
    });
  }

  listOfficer(caompanyNumber:number){
   this.searchService._ListOfficer(caompanyNumber).subscribe(data=>{
    this.router.navigate(['/list-officer']);
    this.searchService.listOfficerResult(data.items , caompanyNumber , this.resultData.title);
   })
  }

}
