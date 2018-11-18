import { BasketPageModule } from './basket-page.module';

describe('BasketPageModule', () => {
  let basketPageModule: BasketPageModule;

  beforeEach(() => {
    basketPageModule = new BasketPageModule();
  });

  it('should create an instance', () => {
    expect(basketPageModule).toBeTruthy();
  });
});
