import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

// TODO replace with
// errorOnUnknownElements: true,
// errorOnUnknownProperties: true,
// with Angular 14
console.error = (message) => {
  fail(message);
};

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 0 inside button initially', () => {
    const buttonEl = nativeElement.querySelector('button');
    expect(buttonEl?.textContent).toContain('0');
  });

  it('should show value passed as Input', () => {
    component.count = 10;

    fixture.detectChanges();

    const buttonEl = nativeElement.querySelector('button');
    expect(buttonEl?.textContent).toContain('10');
  })

  it('should increment when the button is clicked', () => {
    // buttonEl.addEventListener('click', () => {
    //
    // })
    // buttonEl.dispatchEvent(new Event('tripleclick'));
    const buttonEl = nativeElement.querySelector('button');
    buttonEl?.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges(); // déclenche la détection de
    // changement (pas ngZone dans les tests)

    expect(component.count).toBe(1);
    expect(buttonEl?.textContent).toContain('1');
  });

  it('should emit increment event on button click', () => {
    component.count = 10;

    const spy = jasmine.createSpy();
    component.increment.subscribe(spy);

    const buttonEl = nativeElement.querySelector('button');
    buttonEl?.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalledWith(11);
  })
});
