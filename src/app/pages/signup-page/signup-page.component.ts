import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  loadBtn: any = 1;
  errorMsg:any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSignupButtonClicked(nama:string, alamat:string, jenisKlaim:string, nik: string, noHp:string, penghasilan:number, email: string, password: string) {
    this.loadBtn = 0;
    this.errorMsg = null;
    const status = 'Dalam Proses';
    console.log(nama, alamat, jenisKlaim, nik, noHp, penghasilan, email, password, status);
    this.authService.signup(nama, alamat, jenisKlaim, nik, noHp, penghasilan, email, password, status).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        // we have logged in successfully
        this.router.navigate(['/lists']);
        this.loadBtn = 1;
      }
    },
    error => {
      this.loadBtn = 1;
      this.errorMsg = "Harap mengisi semua data!";
      console.log(error);    
    })
  }

}
