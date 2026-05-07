import { navigateToLocalFile } from '../support/helpers.js';
import { expect } from '@playwright/test';

export class VideoModel {
    constructor(page) {
        this.page = page;

        //locators
        this.landingCard = page.getByText('Welcome to the Experience!')
		this.startButton = page.getByRole('button', { name: 'Start Video' });
		this.video = page.locator('#video');
		this.skipButton =  page.getByRole('button', { name: 'Skip' });
		this.endCard = page.getByText('Thanks for Watching!')
		this.closeButton = page.getByRole('button', { name: 'X' });
    }

    async openVideoFile() {
		await navigateToLocalFile(this.page, 'video');
	}

	async isLandingCardVisible(isVisible = true) {
		if (isVisible) {
			await expect(this.landingCard).toBeVisible();
		} else {
			await expect(this.landingCard).toBeHidden();
		}
	}

	async clickStartButton() {
		await this.startButton.click();
	}

	async isEndCardVisible(isVisible = true) {
		if (isVisible) {
			await expect(this.endCard).toBeVisible();
		} else {
			await expect(this.endCard).toBeHidden();
		}
	}

	async isVideoPlaying() {
		const start = await this.video.evaluate(video => video.currentTime);
		await this.page.waitForTimeout(1500);
		const end = await this.video.evaluate(video => video.currentTime);
		const progress = end - start;

		console.log(
			`Video playback: ${start.toFixed(2)}s → ${end.toFixed(2)}s (+${progress.toFixed(2)}s)`
		);

		expect(progress).toBeGreaterThan(0);
	}

	async clickSkipButton() {
		await this.skipButton.click();
	}

	async clickCloseButton() {
		await this.closeButton.click();

	}
}
