import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { DoHttpRequestService } from '../do-http-request.service';

import { DoHttpRequestComponent } from './do-http-request.component';

describe('DoHttpRequestComponent', () => {
  let component: DoHttpRequestComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<DoHttpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoHttpRequestComponent ],
      imports: [ HttpClientModule ],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true
    })
    .compileComponents();
  });

  beforeEach((() => {
    const doHttpRequestService = TestBed.inject(DoHttpRequestService);

    spyOn(doHttpRequestService, 'getLuke').and.returnValue(of({ name: 'Titi'}))

    fixture = TestBed.createComponent(DoHttpRequestComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges(); // rendu initial
  }));

  it('should display Titi', () => {
    // fixture.detectChanges(); // met à jour le DOM (si pas autoDetectChanges)
    expect(nativeElement.textContent).toContain('Titi');
  });
});
