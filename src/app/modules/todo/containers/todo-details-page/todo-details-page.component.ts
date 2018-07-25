import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../../core/services/storage/storage.service';

@Component({
  selector: 'app-todo-details-page',
  templateUrl: './todo-details-page.component.html',
  styleUrls: ['./todo-details-page.component.css']
})
export class TodoDetailsPageComponent implements OnInit, OnDestroy {
  id: number;
  todo: any;
  private subscription: any;

  constructor(private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.todo = this.storageService.getTodo(this.id);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  markDone(){
    this.storageService.markDone(this.id);
    this.todo = this.storageService.getTodo(this.id);
  }

  delete(){
    this.storageService.delete(this.id);
  }
}
