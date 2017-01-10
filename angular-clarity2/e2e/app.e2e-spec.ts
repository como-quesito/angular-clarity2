import { AngularClarity2Page } from './app.po';

describe('angular-clarity2 App', function() {
  let page: AngularClarity2Page;

  beforeEach(() => {
    page = new AngularClarity2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
