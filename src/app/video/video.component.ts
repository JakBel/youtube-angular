import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  effect,
  signal,
} from '@angular/core';
import { formatTimeDuration } from '../../utils/formatTimeDuration';
import { formatTimeAgo } from '../../utils/formatTimeAgo';
import { CommonModule } from '@angular/common';

export interface VideoPage {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent {
  @Input('video') video!: VideoPage;
  formatTimeDuration = formatTimeDuration;
  formatTimeAgo = formatTimeAgo;
  VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: 'compact',
  });
  /* -- Signals -- */
  videoPlaying = signal(false);
  @ViewChild('videoRef') videoReference!: ElementRef;
  /* -- Effects -- */
  setVideoPlaying = effect(() => {
    if (this.videoReference.nativeElement === null) return;

    if (this.videoPlaying() === true) {
      this.videoReference.nativeElement.currentTime = 0;
      this.videoReference.nativeElement.play();
    } else {
      this.videoReference.nativeElement.pause();
    }
  });
}
