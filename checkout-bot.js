const puppeteer = require('puppeteer');
const mail = 'Mail';
const password = 'Password';

let browser = null;
let page = null;

(async () => {
  browser = await puppeteer.launch({ headless: false });

  page = await browser.newPage();
  page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false,
  });

  await page.goto('https://www.freelancer.com/login', {
    waitUntil: 'networkidle2',
  });

  await page.type('input[id="emailOrUsernameInput"]', mail, { delay: 25 });
  await page.type('input[id="passwordInput"]', password, { delay: 25 });

  await page.click('.CheckboxLabel');
  await page.click('xpath/html/body/app-root/app-logged-out-shell/app-login-page/fl-container/fl-bit/app-login/app-credentials-form/form/app-login-signup-button/fl-button/button');

  await page.waitForXPath('/html/body/app-root/fl-modal/div/div/div/ng-component/div[2]/fl-button[2]/button');
  await page.click('xpath/html/body/app-root/fl-modal/div/div/div/ng-component/div[2]/fl-button[2]/button');

  await page.click('xpath/html/body/app-root/app-logged-in-shell/div/div[1]/div/app-navigation/app-navigation-primary/div/fl-container/fl-callout[1]/fl-callout-trigger/fl-button/button');
  await page.click('xpath/html/body/div[2]/div/div/div/fl-callout-content/div/div[2]/app-browse/div/app-browse-links/div/div[2]/fl-grid/fl-col[1]/app-browse-links-item/fl-link/a');

  await page.waitForXPath('/html/body/app-root/app-logged-in-shell/div/fl-container/div/div/app-search/app-search-projects/fl-bit/fl-container/fl-bit/fl-bit[2]/app-search-results/fl-card/div/div[2]/app-search-results-projects/fl-bit/fl-list/fl-list-item[1]/div/div/div[1]/div[1]/fl-link/a/fl-project-contest-card/div[1]');
  await page.click('xpath/html/body/app-root/app-logged-in-shell/div/fl-container/div/div/app-search/app-search-projects/fl-bit/fl-container/fl-bit/fl-bit[2]/app-search-results/fl-card/div/div[2]/app-search-results-projects/fl-bit/fl-list/fl-list-item[1]/div/div/div[1]/div[1]/fl-link/a/fl-project-contest-card/div[1]');

  await page.waitForXPath('/html/body/app-root/app-logged-in-shell/div/fl-container/div/div/app-project-view/app-project-view-details/fl-page-layout/main/fl-container/fl-page-layout-single/fl-grid/fl-col[1]/app-project-details-freelancer/app-bid-form/fl-card/div/div[2]/fl-bit[1]/fl-textarea/textarea');
  await page.type('xpath/html/body/app-root/app-logged-in-shell/div/fl-container/div/div/app-project-view/app-project-view-details/fl-page-layout/main/fl-container/fl-page-layout-single/fl-grid/fl-col[1]/app-project-details-freelancer/app-bid-form/fl-card/div/div[2]/fl-bit[1]/fl-textarea/textarea', 'About Yourself', { delay : 25});

  await page.waitForXPath('/html/body/app-root/app-logged-in-shell/div/fl-container/div/div/app-project-view/app-project-view-details/fl-page-layout/main/fl-container/fl-page-layout-single/fl-grid/fl-col[1]/app-project-details-freelancer/app-bid-form/fl-card/div/div[2]/fl-bit[3]/fl-button/button');
  await page.click('xpath/html/body/app-root/app-logged-in-shell/div/fl-container/div/div/app-project-view/app-project-view-details/fl-page-layout/main/fl-container/fl-page-layout-single/fl-grid/fl-col[1]/app-project-details-freelancer/app-bid-form/fl-card/div/div[2]/fl-bit[3]/fl-button/button');
})();
