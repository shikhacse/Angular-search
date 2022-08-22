import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
paginationElements : any
page:any;
  constructor(private searchService : SearchService , private router: Router) { }

  ngOnInit(): void {
    this.searchService.serachResult.subscribe(data=>{
      this.paginationElements = data;
    })
  }

  showDetail(result:any){
    this.searchService.searchDetail(result);
    this.router.navigate(['/detail'])
   }

}
