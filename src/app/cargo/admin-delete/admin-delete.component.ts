import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) {this.id=0 }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
    }
  }

  deleteOrder() {
    this.adminService.deleteOrder(this.id).subscribe(
      () => {
        this.router.navigate(['admin']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
