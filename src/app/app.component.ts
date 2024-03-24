import { Component, OnDestroy } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private storage: LocalStorageService) {

  }

  ngOnDestroy(): void {
    this.storage.clearData();
  }
}
