export class ChooseFriend {
  async chooseFriendCase(chai) {
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
    await pl1.$(this.comS.playerSearchInput).setValue(this.userCreds.mishaName);
    await this.comS.waiter(pl1, this.comS.mishaFriendInList);
    await pl1.$(this.comS.mishaFriendInList).click();
    
    
    /**
     * CLOSE ODDS TOOLTIP IF EXISTS
     */
    await pl1.pause(500);
     if (await pl1.$(this.comS.oddsTooltip).isDisplayed()) {
      await pl1.$(this.comS.oddsTooltip).$('a=Close').click();
      pl1.pause(50);
    }

    /**
     * SET TIME AND START GAME
     */
    await this.comS.waiter(pl1, this.comS.timeSetDrop);
    await pl1.$(this.comS.timeSetDrop).click();
    await this.comS.waiter(pl1, this.comS.set30min);
    await pl1.$(this.comS.set30min).click();
    await pl1.$(this.comS.startGameBtn).click();
    // await pl2.pause(1000);
    // await browser.debug();

    /**
     * NOTIFICATION BUTTON LOGIC
     */
    // await pl2.refresh();
    // await this.comS.waiter(pl2, this.comS.notifIcon);
    // await pl2.$(this.comS.notifIcon).click();
    // await this.comS.waiter(pl2, this.comS.acceptOffer);
    // await pl2.$(this.comS.acceptOffer).click();
    // await pl2.pause(1000);
    // if (await pl2.$(this.comS.oldGameTab).isDisplayed()) {
    //   await pl2.$(this.comS.oldGameTab).click();
    //   await this.comS.waiter(pl2, this.comS.oldGameTabClose);
    //   await pl2.$(this.comS.oldGameTabClose).click();
    // }
    // console.log("ALERT>>>>", pl2.$(this.comS.cookieBanner));

    /**
     * ACCEPT GAME FROM DOWN-RIGHT WINDOW
     */
    await this.comS.waiter(pl2, this.comS.inviteWindow);
    chai.expect(await pl2.$(this.comS.memberAleshaLink).getText()).to.eql(this.userCreds.aleshaName)
    await pl2.$(this.comS.inviteWindow).$(this.comS.acceptGame).click();
    await pl1.pause(2000);
  }
}
