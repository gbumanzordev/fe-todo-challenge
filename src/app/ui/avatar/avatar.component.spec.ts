import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';
import { Component, input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar-host',
  template: `<app-avatar [imageUrl]="imageUrl" [size]="size"></app-avatar>`,
  standalone: true,
  imports: [AvatarComponent],
})
class HostTestComponent {
  imageUrl = 'https://picsum.photos/100';
  size = 'sm';
}

describe('AvatarComponent', () => {
  let component: HostTestComponent;
  let fixture: ComponentFixture<HostTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct classes based on passed properties: SM', () => {
    component.size = 'sm';

    fixture.detectChanges();

    const image: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(image.className).toEqual('avatar avatar-sm');
  });

  it('should set the correct classes based on passed properties: MD', () => {
    component.size = 'md';

    fixture.detectChanges();

    const image: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(image.className).toEqual('avatar avatar-md');
  });

  it('should set the correct classes based on passed properties: LG', () => {
    component.size = 'lg';

    fixture.detectChanges();

    const image: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(image.className).toEqual('avatar avatar-lg');
  });
});
