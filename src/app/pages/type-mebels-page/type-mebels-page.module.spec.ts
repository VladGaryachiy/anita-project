import { TypeMebelsPageModule } from './type-mebels-page.module';

describe('TypeMebelsPageModule', () => {
  let typeMebelsPageModule: TypeMebelsPageModule;

  beforeEach(() => {
    typeMebelsPageModule = new TypeMebelsPageModule();
  });

  it('should create an instance', () => {
    expect(typeMebelsPageModule).toBeTruthy();
  });
});
