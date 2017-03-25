import { RicodatoPage } from './app.po';

describe('ricodato App', () => {
  let page: RicodatoPage;

  beforeEach(() => {
    page = new RicodatoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
