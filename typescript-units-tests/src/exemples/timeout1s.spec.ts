import { timeout1s } from './timeout1s';

describe('timeout1s function', () => {
  // it('should call callback', () => {
  //   timeout1s(() => {
  //     expect(false).toBeTrue(); // PAS EXECUTE
  //   });
  // })
  // it('should call callback', (done) => {
  //   timeout1s(() => {
  //     expect(true).toBeTrue();
  //     done();
  //   });
  // });
  // it('should call callback', (done) => {
  //   const spy = jasmine.createSpy().and.callFake(() => {
  //     expect(spy).toHaveBeenCalled();
  //     done();
  //   });
  //   timeout1s(spy);
  // });
  it('should call callback', () => {
    jasmine.clock().install(); // remplace les fonctions de temps par des fonctions synchrones (setTimeout..)
    const spy = jasmine.createSpy();
    timeout1s(spy); // appel du setTimeout défini par jasmine.clock().install();

    jasmine.clock().tick(1000); // avance de 1s (appel toutes les fonctions
    // qui aurait du s'exécuter en 0 et 1s)
    expect(spy).toHaveBeenCalled();

    jasmine.clock().uninstall();
  });
});
