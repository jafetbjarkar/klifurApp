import { KlifurAppPage } from './app.po';

describe('klifur-app App', function() {
  let page: KlifurAppPage;

  beforeEach(() => {
    page = new KlifurAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
