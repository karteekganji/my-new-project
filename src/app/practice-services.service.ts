import { Constants } from './constants';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpErrorResponse
} from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class PracticeServicesService {
  httpdata;
  baseUrl = Constants.Base_URL;
  constructor(private http: Http, private toastr: ToastrService) {}
  ngOnInit() {
  
  }
  public static practiceApiList = {
    getCities : "get-cities",
    getAllBooks : "get-all-books",
    login :"login",
    getLibraries :"get-all-library",
    getLibraryBooks :"library-books/",
    signUp :"signup",
    logOut :"logout?auth=",
  }

  getService(url){
    return this.http.get(this.baseUrl+url)
    .map(response =>  response.json()).catch(this.handleError);
  }
  postService(url, data){
    console.log(data)
    return this.http.post(this.baseUrl+url,data)
    .map(response =>response.json()).catch(this.handleError);
  }
  isLogin(){
    if (localStorage.getItem("Auth-Token")) {
      return true;
    }else {
      return false;
    }
  }

 handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
