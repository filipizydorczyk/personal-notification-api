import puppeteer from 'puppeteer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VlrService {
  async getHello(): Promise<string> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto('https://www.vlr.gg/matches/');

    const title = await page.title();

    await browser.close();

    return title;
  }
}
