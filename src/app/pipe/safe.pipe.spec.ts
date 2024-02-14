import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe(
      // @ts-ignore
      null
    );
    expect(pipe).toBeTruthy();
  });
});
