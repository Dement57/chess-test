export class StartGame {
  async startGameCase() {
    /**
     * START GAME BY PLAYER 1
     */
    if (await pl1.$(this.comS.cookieBanner).isDisplayed()) {
      await pl1.$(this.comS.agreeCookieBtn).click();
    }
    if (await pl2.$(this.comS.cookieBanner).isDisplayed()) {
      await pl2.$(this.comS.agreeCookieBtn).click();
    }
    await this.comS.waiter(pl1, this.comS.newGameBtn);
    await pl1.$(this.comS.newGameBtn).click();
    await pl1.pause(500);
    await this.comS.waiter(pl1, this.comS.playerSearchInput);
    await pl1.$(this.comS.playerSearchInput).setValue("KolyaQa");
    await this.comS.waiter(pl1, this.comS.kolyaFriendInList);
    await pl1.$(this.comS.kolyaFriendInList).click();
    /**
     * ACCEPT COOKIE
     */
    await pl1.pause(500);
     if (await pl1.$(this.comS.oddsTooltip).isDisplayed()) {
      await pl1.$(this.comS.oddsTooltip).$('a=Close').click();
      pl1.pause(50);
    }
    await this.comS.waiter(pl1, this.comS.timeSetDrop);
    await pl1.$(this.comS.timeSetDrop).click();
    await this.comS.waiter(pl1, this.comS.set30min);
    await pl1.$(this.comS.set30min).click();
    await pl1.$(this.comS.startGameBtn).click();
    await browser.debug();
    // await browser.debug();
    await pl2.pause(3000);
    await pl2.refresh();
    await this.comS.waiter(pl2, this.comS.notifIcon);
    await pl2.$(this.comS.notifIcon).click();
    await this.comS.waiter(pl2, this.comS.acceptOffer);
    await pl2.$(this.comS.acceptOffer).click();
    await pl2.pause(1000);
    if (await pl2.$(this.comS.oldGameTab).isDisplayed()) {
      await pl2.$(this.comS.oldGameTab).click();
      await this.comS.waiter(pl2, this.comS.oldGameTabClose);
      await pl2.$(this.comS.oldGameTabClose).click();
    }
    // console.log("ALERT>>>>", pl2.$(this.comS.cookieBanner));
    if (await pl2.ale) {
      await pl2.acceptAlert();
    }
    await browser.debug();
    // window.opener
    // chai.expect("");
  }
}
