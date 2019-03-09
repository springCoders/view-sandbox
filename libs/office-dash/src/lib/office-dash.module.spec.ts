import { async, TestBed } from '@angular/core/testing';
import { OfficeDashModule } from './office-dash.module';

describe('OfficeDashModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OfficeDashModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OfficeDashModule).toBeDefined();
  });
});
