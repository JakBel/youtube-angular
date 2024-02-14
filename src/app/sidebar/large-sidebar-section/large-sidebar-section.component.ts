import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, effect, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LargeSidebarItemComponent } from './large-sidebar-item/large-sidebar-item.component';
import { ILargeSidebarIcons } from '../../../data/icons';

@Component({
  selector: 'app-large-sidebar-section',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    LargeSidebarItemComponent,
  ],
  templateUrl: './large-sidebar-section.component.html',
  styleUrl: './large-sidebar-section.component.css',
})
export class LargeSidebarSectionComponent implements OnInit {
  @Input() visibleItemCount?: number;
  @Input() title?: string;
  @Input() icons!: ILargeSidebarIcons[];
  @Input() isPhoto?: boolean;
  photoDetected?: boolean;
  expanded = signal(false);

  buttonIcon!: string;
  showExpandButton: boolean = false;
  visibleSidebarItems!: ILargeSidebarIcons[];

  checkVisibility = effect(() => {
    this.visibleSidebarItems =
      this.expanded() === true
        ? this.icons
        : this.icons.slice(0, this.visibleItemCount);
  });

  ngOnInit(): void {
    this.buttonIcon =
      this.expanded() === true ? 'keyboard_arrow_up' : 'keyboard_arrow_down';

    if (this.visibleItemCount) {
      this.showExpandButton = this.icons.length > this.visibleItemCount;
    }

    if (this.isPhoto) this.photoDetected = true;
  }

  setExpanded() {
    this.expanded.update((e) => !e);
    this.buttonIcon =
      this.expanded() === true ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  }
}
