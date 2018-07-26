import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { ApiService } from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-todo-details-page',
  templateUrl: './todo-details-page.component.html',
  styleUrls: ['./todo-details-page.component.css']
})
export class TodoDetailsPageComponent implements OnInit, OnDestroy {
  id: number;
  todo: any;
  private subscription: any;

  constructor(private route: ActivatedRoute, private storageService: StorageService, private apiService: ApiService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.apiService.getTodo(this.id).subscribe((element) => {
        this.todo = element;
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  markDone(){
    this.todo.finished = true;
    this.todo.finishedAt = new Date();
    return this.apiService.markDone(this.todo)
      .subscribe(
        res => {
          console.log(res);
        });
  }

  delete(){
    this.apiService.delete(this.id)
      .subscribe(
        res => {
          console.log(res);
        });
  }
}
