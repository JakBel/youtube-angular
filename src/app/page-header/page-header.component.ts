import { Component, HostListener, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatInputModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
})
export class PageHeaderComponent {
  windowWidth: number;
  showFullWidth = signal(false);

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.windowWidth = event.target.innerWidth;
  }

  showFullWidthSearch(val: boolean) {
    this.showFullWidth.set(val);
  }
}
