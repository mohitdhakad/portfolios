import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs'
import { map, debounceTime, tap, merge, delay, mapTo, share, repeat, switchMap, takeUntil } from 'rxjs/operators'
import { CardConfig } from 'src/types';
@Component({
  selector: 'card',
  template: `
   <div #card style="background:red" class="card-wrap">
      <div style="background:pink" class="card-title"><p>{{cardConfig.title}}</p></div>
      <div class="card" [ngStyle]="cardStyle()">
        <div class="card-bg" [ngStyle]="cardBgTransform()">
          <div class="image-placeholder">
            <img [src]="cardConfig.imageUrl"/>
          </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  height;
  width;
  backgroundImage;
  mouseX = 0;
  mouseY = 0;
  get mousePX() {
    return this.mouseX / this.width;
  }
  get mousePY() {
    return this.mouseY / this.height;
  }

  @Input() cardConfig: CardConfig ;
  // @Input() cardBgImage: string = '';
  // @Input() title: string = '';
  @ViewChild('card', { static: true }) card: ElementRef;
  cardStyling = this.cardStyle();

  cardStyle() {
    return this.transformStyle();
  }

  cardBgTransform() {

    return this.transformStyle();
  }

  private transformStyle() {
    const tX = this.mousePX * -30;
    const tY = this.mousePY * -30;
    return { transform: `rotateY(${tX}deg) rotateX(${tY}deg)` };
  }
  get nativeElement(): HTMLElement {
    return this.card.nativeElement;
  }
  ngOnInit() {
    const mouseMove$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mousemove');
    const mouseLeave$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseleave').pipe(
      delay(100),
      mapTo(({ mouseX: 0, mouseY: 0 })),
      share()
    )
    const mouseEnter$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseenter').pipe(takeUntil(mouseLeave$))

    mouseEnter$.pipe(
      switchMap(() => mouseMove$),
      map(e => ({ mouseX: e.pageX - this.nativeElement.offsetLeft - this.width / 2, mouseY: e.pageY - this.nativeElement.offsetTop - this.height / 2 }))
      , merge(mouseLeave$), repeat()
    ).subscribe(e => {
      this.mouseX = e.mouseX;
      this.mouseY = e.mouseY;
    })

  }
  ngAfterViewInit() {
    this.width = this.card.nativeElement.offsetWidth;
    this.height = this.card.nativeElement.offsetHeight;
  }
}
