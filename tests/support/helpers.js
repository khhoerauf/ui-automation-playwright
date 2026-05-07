import path from 'path';

export async function navigateToLocalFile(page, fileName) {
  const filePath = `file://${path.resolve('tests/support/mediaFiles', `${fileName}.html`)}`;
  await page.goto(filePath);
}
