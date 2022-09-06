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
      imports: [HttpClientModule],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true
    })
    .compileComponents();
  });

  // ça fonctionne mais l'API REST est requêté donc
  // si erreur de l'API, si la donnée est supprime de l'API ----> Problème
  // + le temps de réponse
  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DoHttpRequestComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges(); // rendu initial
    fixture.autoDetectChanges(); // quand les callback async s'éxécutent
    // les detectChanges se font tout seuls (ici le .subscribe((luke) => {}))
  }));

  it('should display Luke Skywalker', () => {
    // fixture.detectChanges(); // met à jour le DOM (si pas autoDetectChanges)
    expect(nativeElement.textContent).toContain('Luke Skywalker');
  });
});
