export class Login {
  async usersLoginCase(browsers, chai) {
    await pl1.setWindowRect(960, 0, 960, 1080);
    await pl2.setWindowRect(0, 0, 960, 1080);
    
    /**
     * PETYA LOGIN
     */
    await pl1.url(this.urlSel.host);
    await this.comS.waiter(pl1, this.comS.email);
    await pl1.$(this.comS.email).setValue(this.userCreds.petyaName);
    await pl1.$(this.comS.password).setValue(this.userCreds.password);
    await pl1.$(this.comS.loginBtn).click();

    /**
     * KOLYA LOGIN
     */
     await pl2.url(this.urlSel.host);
     await this.comS.waiter(pl2, this.comS.email);
     await pl2.$(this.comS.email).setValue(this.userCreds.kolyaName);
     await pl2.$(this.comS.password).setValue(this.userCreds.password);
     await pl2.$(this.comS.loginBtn).click();
  }
}
