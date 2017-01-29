import { HackDayAppPage } from './app.po';

describe('hack-day-app App', function() {
  let page: HackDayAppPage;

  beforeEach(() => {
    page = new HackDayAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
