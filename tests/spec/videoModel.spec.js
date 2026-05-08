import { test } from "@playwright/test";
import { VideoModel } from "../pages/videoModel.js";

test.describe('feature: video', () => {
  test("video should start after click start button", async ({ page }) => {
    const video = new VideoModel(page);
    await video.openVideoFile();

    await video.isLandingCardVisible();
    await video.clickStartButton();
    await video.isLandingCardVisible(false);
    await video.isVideoPlaying();
  });

  test("video should auto start with 2 seconds delay", async ({ page }) => {
    const video = new VideoModel(page);
    await video.openVideoFile();

    await video.isLandingCardVisible();
    await video.isLandingCardVisible(false);
    await video.isVideoPlaying();
  });

  test("video should be able to skip after 5 seconds", async ({ page }) => {
    const video = new VideoModel(page);
    await video.openVideoFile();

    await video.isLandingCardVisible();
    await video.isLandingCardVisible(false);

    await video.isVideoPlaying();
    await video.clickSkipButton();
    await video.isEndCardVisible();
  });

  test("close button should hide end card", async ({ page }) => {
    const video = new VideoModel(page);
    await video.openVideoFile();

    await video.isLandingCardVisible();
    await video.isLandingCardVisible(false);
    await video.clickSkipButton();
    await video.isEndCardVisible();
    await video.clickCloseButton();
    await video.isEndCardVisible(false);
  });
});