import { GroupeePaypalPage } from './app.po';

describe('groupee-paypal App', () => {
  let page: GroupeePaypalPage;

  beforeEach(() => {
    page = new GroupeePaypalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
