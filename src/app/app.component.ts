import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { CategoriesComponent } from './categories/categories.component';
import { VideoComponent, VideoPage } from './video/video.component';
import { videos } from '../data/home';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PageHeaderComponent,
    CategoriesComponent,
    VideoComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'youtube-angular';
  videos: VideoPage[] = videos;
}
