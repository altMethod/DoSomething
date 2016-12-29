import { DosomethingPage } from './app.po';

describe('dosomething App', function() {
  let page: DosomethingPage;

  beforeEach(() => {
    page = new DosomethingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
