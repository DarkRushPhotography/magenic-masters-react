import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { fromEvent, of, Subscription, timer, merge } from 'rxjs';
import { map, switchMap, timeInterval } from 'rxjs/operators';

// OnChanges,
//import { ViewportService } from '@dark-rush-photography/elements/util';
@Component({
  selector: 'drp-progressive-image',
  templateUrl: './progressive-image.component.html',
  styleUrls: ['./progressive-image.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProgressiveImageComponent implements AfterViewInit, OnDestroy {
  private imageLoadSub?: Subscription;
  private listener?: () => void;

  isImageInViewport = false;
  imageLoaded = false;

  @ViewChild('hiddenImage') hiddenImage?: ElementRef;
  @ViewChild('image') image?: ElementRef;
  @ViewChild('thumbnail') thumbnail?: ElementRef;

  /**
   * Source of the thumbnail image
   */
  @Input() thumbnailSrc?: string;

  /**
   * Source of the image
   */
  @Input() imageSrc?: string;

  /**
   * Width of the the image.
   */
  @Input() width?: string;

  /**
   * Height of the image.
   */
  @Input() height?: string;

  /**
   * Transition time between when the image is loaded and is displayed.
   */
  @Input() transitionMilliseconds?: number;

  constructor(
    private readonly renderer2: Renderer2 //  private readonly viewportService: ViewportService
  ) {}

  /*
  ngOnChanges(changes: SimpleChanges): void {
    if ('thumbnailSrc' in changes && !changes.thumbnailSrc.currentValue) {
      console.error('thumbnailSrc must be provided');
    }
    if ('imageSrc' in changes && !changes.imageSrc.currentValue) {
      console.error('imageSrc must be provided');
    }
    if ('width' in changes && !changes.width.currentValue) {
      console.error('width must be provided');
    }
    if ('height' in changes && !changes.height.currentValue) {
      console.error('height must be provided');
    }
    this.imageLoaded$ = of(false);
    this.imageLoaded$ = timer(this.transitionMilliseconds).pipe(
      map(() => true)
    );
  }*/

  ngAfterViewInit(): void {
    timer(this.transitionMilliseconds).subscribe(
      () => (this.imageLoaded = true)
    );
    //const imageElement = this.hiddenImage?.nativeElement as HTMLImageElement;
    //if (imageElement.loading) {
    //  console.log('after view init if');
    //  this.imageLoaded$ = merge(fromEvent(imageElement, 'load')).pipe(
    //    switchMap(() => timer(this.transitionMilliseconds)),
    //    map(() => true)
    //  );
    //} else {
    //console.log('after view init else');
    //this.imageLoaded$ = of(true); //timer(this.transitionMilliseconds).pipe(
    // map(() => true)
    //);
    //}
    //const thumbnailDivElement = this.thumbnail?.nativeElement as HTMLDivElement;
    //    this.isImageInViewport = this.viewportService.getIsInViewport(
    //      thumbnailDivElement.getBoundingClientRect(),
    //      window,
    //      document
    //    );
    //this.listener = this.renderer2.listen('window', 'scroll', () => {
    //  const thumbnailDivElement = this.thumbnail
    //    ?.nativeElement as HTMLDivElement;
    //  this.isImageInViewport = this.viewportService.getIsInViewport(
    //    thumbnailDivElement.getBoundingClientRect(),
    //    window,
    //    document
    //  );
    //});
  }

  ngOnDestroy(): void {
    this.imageLoadSub?.unsubscribe();
    if (this.listener) this.listener();
  }
}
