import { Component } from '@angular/core';
import { SmallSidebarItemComponent } from './small-sidebar-item/small-sidebar-item.component';
import { LargeSidebarSectionComponent } from './large-sidebar-section/large-sidebar-section.component';
import {
  ILargeSidebarIcons,
  ISmallSidebarIcons,
  largeIconsMain,
  largeIconsSubs,
  largeIconsUser,
  smallIcons,
} from '../../data/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SmallSidebarItemComponent,
    LargeSidebarSectionComponent,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  smallIcons: ISmallSidebarIcons[];
  mainIcons: ILargeSidebarIcons[];
  userIcons: ILargeSidebarIcons[];
  subsIcons: ILargeSidebarIcons[];

  constructor() {
    this.smallIcons = smallIcons;
    this.mainIcons = largeIconsMain;
    this.userIcons = largeIconsUser;
    this.subsIcons = largeIconsSubs;
  }
}
