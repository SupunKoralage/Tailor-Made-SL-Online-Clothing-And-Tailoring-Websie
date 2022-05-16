import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import{CrudService}from '../services/crud.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newconfirm',
  templateUrl: './newconfirm.component.html',
  styleUrls: ['./newconfirm.component.scss']
})
export class NewconfirmComponent implements OnInit {

message:string="";
  order=new FormGroup({
    material: new FormControl(''),
    collarsize:new FormControl(''),
    chestsize:new FormControl(''),
    length:new FormControl(''),
    Colour:new FormControl('')
  
  })
   


  constructor(public  FirebseService: FirebaseService , private CrudService:CrudService,private fb: FormBuilder) { }

  ngOnInit(): void {


  }



  userorder(){
    let orderRecord:any ={};

    orderRecord = this.order.value;
    

this.CrudService.create_order(orderRecord).then(res =>{
 
  

  console.log(res);
 this.message="data save done";
}).catch(error =>{
  console.log(error);
});
  }

}
