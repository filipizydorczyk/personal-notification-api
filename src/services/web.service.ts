import puppeteer, { Browser } from 'puppeteer';
import { Injectable } from '@nestjs/common';

const TODAY_MATCHES_SELECTOR =
  '#wrapper > div.col-container > div > div:nth-child(3)';
const GITHUB_HEATMAP_SELECTOR =
  'html body.logged-out.env-production.page-responsive.page-profile div.logged-out.env-production.page-responsive.page-profile div.application-main main div.container-xl.px-3.px-md-4.px-lg-5 div.Layout.Layout--flowRow-until-md.Layout--sidebarPosition-start.Layout--sidebarPosition-flowRow-start div.Layout-main turbo-frame#user-profile-frame div.position-relative div.mt-4.position-relative div.js-yearly-contributions div.position-relative div.border.py-2.graph-before-activity-overview';

@Injectable()
/**
 * This service is used to scrape data from websites. It mainly exists for stuff
 * that is not using REST api on their website and there is no other way to
 * get what I want
 */
export class WebService {
  private browser: Browser;

  constructor() {
    this.init();
  }

  async init() {
    // TODO see if this could be passed with dependency injection
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }

  /**
   * Method to check todays matches at vlr.gg
   * @returns screenshot of mathces that are happening today
   */
  async getTodayValorantMatches(): Promise<Buffer> {
    const page = await this.browser.newPage();

    await page.goto('https://www.vlr.gg/matches/');
    await page.waitForSelector(TODAY_MATCHES_SELECTOR);

    const element = await page.$(TODAY_MATCHES_SELECTOR);
    const img = await element.screenshot({ type: 'png' });

    page.close();

    return typeof img === 'string' ? Buffer.from(img, 'base64') : img;
  }

  /**
   * Method to return image of my headtmap on my github profile page
   * Used to get quick overview of how many contributions I did so
   * far in a week
   * @returns buffer of screenshot
   */
  async getGitHubHeatMap(): Promise<Buffer> {
    const page = await this.browser.newPage();

    await page.goto('https://github.com/filipizydorczyk');
    await page.waitForSelector(GITHUB_HEATMAP_SELECTOR);

    const element = await page.$(GITHUB_HEATMAP_SELECTOR);
    const img = await element.screenshot({ type: 'png' });

    page.close();

    return typeof img === 'string' ? Buffer.from(img, 'base64') : img;
  }
}
