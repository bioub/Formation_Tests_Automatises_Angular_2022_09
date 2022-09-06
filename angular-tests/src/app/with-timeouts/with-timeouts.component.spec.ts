import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { WithTimeoutsComponent } from './with-timeouts.component';

describe('WithTimeoutsComponent', () => {
  let component: WithTimeoutsComponent;
  let fixture: ComponentFixture<WithTimeoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithTimeoutsComponent ]
    })
    .compileComponents();
  });

  // quand tous les callbacks asynchrones se sont exécutés
  // waitForAsync appelera done()
  // beforeEach(waitForAsync(() => {
  //   fixture = TestBed.createComponent(WithTimeoutsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges(); // déclenche le ngOnInit donc les setTimeout
  // }));

  // fakeAsync est une Zone qui appelle automatiquement :
  // jasmine.clock().install() et jasmine.clock().uninstall()
  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(WithTimeoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // déclenche le ngOnInit donc les setTimeout
    tick(1000); // appelle jasmine.clock().tick(1000);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // BAD PRACTICE
  // it('should update prop1 and prop2 on timeout', (done) => {
  //   setTimeout(() => {
  //     expect(component.prop1).toBe('value 1');
  //     expect(component.prop2).toBe('value 2');
  //     done();
  //   }, 1000);
  // });

  it('should update prop1 and prop2 on timeout', () => {
    expect(component.prop1).toBe('value 1');
    expect(component.prop2).toBe('value 2');
  });
});
