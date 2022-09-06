import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let nativeElement: HTMLElement;
  let originalConsoleError!: any;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = function (message?: any, ...optionalParams: any[]): void {
      const params = optionalParams ? `\nParams: ${optionalParams}` : '';
      fail(`Test contained console error:\n${message}${params}`);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo Input', () => {
    component.todo = 'ABC';

    fixture.detectChanges();

    expect(nativeElement.textContent).toContain('ABC');
  });
});
