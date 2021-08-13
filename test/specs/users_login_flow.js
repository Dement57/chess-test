export class Login {
  async player1Login(browsers, chai) {
    /**
     * PETYA LOGIN
     */
    await pl1.setWindowRect(960, 0, 960, 1047);
    await pl1.url(this.urlSel.host);
    await this.comS.waiter(pl1, this.comS.email);
    await pl1.$(this.comS.email).setValue(this.userCreds.petyaName);
    await pl1.$(this.comS.password).setValue(this.userCreds.password);
    await pl1.$(this.comS.loginBtn).click();
    await this.comS.waiter(pl1, this.comS.menuBtn);
    await pl1.$(this.comS.menuBtn).click();
    await this.comS.waiter(pl1, this.comS.playBtn);
    await pl1.$(this.comS.playBtn).click();
    await this.comS.waiter(pl1, this.comS.playWithFriend);
    await pl1.$(this.comS.playWithFriend).click();
    await pl1.pause(1000);
    if (await pl1.$(this.comS.oldGameTab).isDisplayed()) {
      await pl1.$(this.comS.oldGameTab).click();
      await this.comS.waiter(pl1, this.comS.oldGameTabClose);
      await pl1.$(this.comS.oldGameTabClose).click();
    }

  }

  async player2Login(){
    /**
     * KOLYA LOGIN
     */
     await pl2.setWindowRect(0, 0, 960, 1047);
     await pl2.url(this.urlSel.host);
     await this.comS.waiter(pl2, this.comS.email);
     await pl2.$(this.comS.email).setValue(this.userCreds.kolyaName);
     await pl2.$(this.comS.password).setValue(this.userCreds.password);
     await pl2.$(this.comS.loginBtn).click();
     await this.comS.waiter(pl2, this.comS.menuBtn);
     await pl2.$(this.comS.menuBtn).click();
     await this.comS.waiter(pl2, this.comS.playBtn);
     await pl2.$(this.comS.playBtn).click();
     await this.comS.waiter(pl2, this.comS.playWithFriend);
     await pl2.$(this.comS.playWithFriend).click();
     await pl2.pause(1000);
     if (await pl2.$(this.comS.oldGameTab).isDisplayed()) {
       await pl2.$(this.comS.oldGameTab).click();
       await this.comS.waiter(pl2, this.comS.oldGameTabClose);
       await pl2.$(this.comS.oldGameTabClose).click();
     }
  }
}
