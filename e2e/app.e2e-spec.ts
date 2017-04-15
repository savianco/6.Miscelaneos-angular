import { MiscelaneosAngularPage } from './app.po';

describe('miscelaneos-angular App', () => {
  let page: MiscelaneosAngularPage;

  beforeEach(() => {
    page = new MiscelaneosAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
