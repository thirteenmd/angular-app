import { ConcatNameIdPipe } from './concat-name-id.pipe';

describe('ConcatNameIdPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatNameIdPipe();
    expect(pipe).toBeTruthy();
  });
});
