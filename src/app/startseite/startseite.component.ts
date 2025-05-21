
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';
import { HostListener, Component, ElementRef, ViewChild,} from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css'],
  imports: [CommonModule]
})

export class StartseiteComponent {
   showLinks = false;

  @ViewChild('menuLinks') menuLinks!: ElementRef;
  @ViewChild('burgerIcon') burgerIcon!: ElementRef;

  toggleMenu(): void {
    this.showLinks = !this.showLinks;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInsideMenu = this.menuLinks?.nativeElement.contains(event.target);
    const clickedBurger = this.burgerIcon?.nativeElement.contains(event.target);

    if (!clickedInsideMenu && !clickedBurger) {
      this.showLinks = false;
    }
  }

  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;

  toggle(): void {
    this.isOpen = !this.isOpen
  }
  toggle2(): void {
    this.isOpen2 = !this.isOpen2
  }
  toggle3(): void {
    this.isOpen3 = !this.isOpen3
  }
}

