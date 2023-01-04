import {
  Component,
  OnInit
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  headers: string[] = ['Header 1', 'Header 2', 'Header 3'];
  currentHeaderIndex: number = 0;
  currentBreakpoint: string = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, '(min-width: 500px)'])
    .pipe(
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => {
      if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
        this.currentBreakpoint = 'desktop';
      } else if (this.breakpointObserver.isMatched('(min-width: 500px)')) {
        this.currentBreakpoint = 'mobile';
      }
    });
  }

  headerChanged(event: any, val: any): void {
    const selection = val.selected[0]?.value.toString();
    if (selection === this.headers[0]) {
      this.currentHeaderIndex = 0;
    } else if (selection === this.headers[1]) {
      this.currentHeaderIndex = 1;
    } else if (selection === this.headers[2]) {
      this.currentHeaderIndex = 2;
    }
  }
  accordionChanged(val: number): void {
    this.currentHeaderIndex = val;
  }
}
