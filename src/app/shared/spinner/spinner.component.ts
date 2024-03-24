import { Loader } from './../interfaces/loader.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  color = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  show = false;
  value = 100;
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.subscription = this.loaderService.loaderState.subscribe((state: Loader) => {
      this.show = state.show;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}