import puppeteer from 'puppeteer';
import { Injectable } from '@nestjs/common';

const TODAY_MATCHES_SELECTOR =
  '#wrapper > div.col-container > div > div:nth-child(3)';

@Injectable()
export class VlrService {
  /**
   * Method to check todays matches at vlr.gg
   * @returns screenshot of mathces that are happening today
   */
  async getTodayMatches(): Promise<Buffer> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.goto('https://www.vlr.gg/matches/');
    await page.waitForSelector(TODAY_MATCHES_SELECTOR);

    const element = await page.$(TODAY_MATCHES_SELECTOR);
    const img = await element.screenshot({ type: 'png' });

    await browser.close();

    return typeof img === 'string' ? Buffer.from(img, 'base64') : img;
  }
}
