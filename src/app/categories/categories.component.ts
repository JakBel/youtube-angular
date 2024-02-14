import {
  Component,
  ElementRef,
  ViewChild,
  effect,
  signal,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { categories } from '../../data/home';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    MatChipsModule,
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {

  /* -- Variables -- */
  @ViewChild('categoryInfo', { static: true }) categoryInfo!: ElementRef;
  // Show categories
  categories: string[] = categories;
  index: number = 0;
  // Arrows
  private TRANSLATE = 200;
  isLeftVisible = signal(false);
  isRightVisible = signal(false);
  translate = signal(0);

  /* -- Effects -- */
  hideArrows = effect(
    () => {
      if (this.categoryInfo.nativeElement === null) return;

      const container = this.categoryInfo.nativeElement;
      if (container === null) return;
      this.translate() > 0
        ? this.changeLeftVisibility(true)
        : this.changeLeftVisibility(false);
      this.translate() + container.clientWidth < container.scrollWidth
        ? this.changeRightVisibility(true)
        : this.changeRightVisibility(false);
    },
    { allowSignalWrites: true }
  );

  /* -- Functions -- */
  changeLeftVisibility(val: boolean) {
    this.isLeftVisible.set(val);
  }

  changeRightVisibility(val: boolean) {
    this.isRightVisible.set(val);
  }

  selectedButton(num: number) {
    this.index = num;
  }

  translateLeft() {
    this.translate.update((trans) => {
      const newTranslate = trans - this.TRANSLATE;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  }

  translateRight() {
    this.translate.update((trans) => {
      if (this.categoryInfo === null) {
        return trans;
      }
      const newTranslate = trans + this.TRANSLATE;
      const edge = this.categoryInfo.nativeElement.scrollWidth;
      const width = this.categoryInfo.nativeElement.clientWidth;
      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  }
}
