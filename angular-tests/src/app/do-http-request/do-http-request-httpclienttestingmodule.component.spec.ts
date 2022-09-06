import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DoHttpRequestComponent } from './do-http-request.component';

describe('DoHttpRequestComponent', () => {
  let component: DoHttpRequestComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<DoHttpRequestComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoHttpRequestComponent ],
      imports: [HttpClientTestingModule],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true
    })
    .compileComponents();
  });

  beforeEach((() => {
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(DoHttpRequestComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges(); // rendu initial
  }));

  it('should display Luke Skywalker', () => {
    httpTestingController.expectOne('https://swapi.dev/api/people/1').flush({ name: 'Tata' });

    fixture.detectChanges(); // met à jour le DOM (si pas autoDetectChanges)
    expect(nativeElement.textContent).toContain('Tata');
  });
});
