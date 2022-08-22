import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Subject, throwError, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, catchError, retryWhen, retry } from "rxjs/operators";
import { AuthService } from '../service/auth.service';
import {SearchService} from "../service/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  paginationElements: any;
  errorMessage!: string;
  SearchText!:string
  searchForm!: FormGroup;
  
  constructor(private searchService: SearchService , private router: Router , private authService : AuthService) { }
 
  onSubmit(){
    if(this.SearchText){
      this.searchService._searchEntries(this.SearchText).subscribe(searchResults=>{
        this.paginationElements = searchResults.items;
        this.searchService.searchDetails(this.paginationElements);
        this.router.navigate(['/result'])
       })
    }else{
       this.errorMessage = 'Please Enter value'
    }
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('', Validators.required),
    });
  }

  onLoginClick(){
   this.authService.login();
  }

  onLogOutClick(){
    this.authService.logout();
  }

}
