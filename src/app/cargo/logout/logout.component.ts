import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.router.navigate(['login']);
    alert("You have successfully logged out...");
  }
  closeModal()
{
  this.router.navigate(['/cargo/home/status']);
}

}
