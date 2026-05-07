import { test } from '@playwright/test';
import { VideoModel } from '../pages/videoModel.js';

test('video should start after click start button', async ({ page }) => {
    const video = new VideoModel(page);
    await video.openVideoFile();

    await video.isLandingCardVisible();
    await video.clickStartButton();
    await video.isLandingCardVisible(false);
    await video.expectVideoPlaying();
});
