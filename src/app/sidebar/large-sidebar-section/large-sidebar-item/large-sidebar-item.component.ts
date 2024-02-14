import { Component, Input } from '@angular/core';
import { ILargeSidebarIcons } from '../../../../data/icons';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-large-sidebar-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './large-sidebar-item.component.html',
  styleUrl: './large-sidebar-item.component.css',
})
export class LargeSidebarItemComponent {
  @Input() icon!: ILargeSidebarIcons;
  @Input() photoDetected?: boolean;
}
