import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ISmallSidebarIcons } from '../../../data/icons';

@Component({
  selector: 'app-small-sidebar-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './small-sidebar-item.component.html',
  styleUrl: './small-sidebar-item.component.css',
})
export class SmallSidebarItemComponent {
  @Input() icon!: ISmallSidebarIcons;
}
