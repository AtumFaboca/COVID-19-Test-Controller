import { Component, OnInit } from '@angular/core';
import { covid19APIService } from 'src/app/services/covid19API.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Users } from 'src/app/classes/users';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private covid19APIService : covid19APIService, public router : Router, private _location: Location) { 
    this.elementID = "registerUsers";
   }

  ngOnInit(): void {
    if(this.elementID === "registerTechnicians" && this.router.url == "/register"){
      this.elementID = "registerUsers";
    }
    if(this.elementID === "registerUsers" && this.router.url == "/technicians/register"){
      this.elementID = "registerTechnicians";
    }
  }

  elementID: String;
  user = new Users();

  resultado;

  isChecked:boolean = false;
  
  isSelected(checked:String){
    if(checked === "other"){
      this.isChecked = true;
      this.user.gender = "";
    }
    else{
      this.isChecked = false;
      if(checked === "male"){
        this.user.gender = "male";
      }
      if(checked === "female"){
        this.user.gender = "female";
      }
    }
  }

  register(){
    if(this.router.url === "/register"){
      this.covid19APIService.register(this.user).subscribe(
        (data : any)=>{
          this.resultado = data.Success;
        },
        (err : HttpErrorResponse) =>{
          console.log(err);
          this.resultado = err.error.Error;
        }
      )
    }
    else{
      this.covid19APIService.registerTechnician(this.user).subscribe(
        (data : any)=>{
          this.resultado = data;
        },
        (err : HttpErrorResponse) =>{
          console.log(err);
          this.resultado = err.error;
        }
      )
    }
  }

  cancelar(){
    this._location.back();
  }
}