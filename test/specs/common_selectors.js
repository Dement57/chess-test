import chai from "chai";
export {chai};
export class CommonSel {
  email = "#username";
  password = "#password";
  loginBtn = "#login";

  /**
   * START GAME
   */
  menuBtn = 'span[class="icon-font-chess menu"]';
  playBtn = "span=Play";
  playByNet = "h2=Play online";
  playWithFriend = "h2=Play a Friend";
  kolyaFriend = "a=KolyaQa";
  timeSetDrop = 'button[class*="time-selector-button"]';
  set30min = 'button=30 min';
  startGameBtn = 'button[class*="custom-game-options-play-button"]';
  gameOverModal = 'div[class="game-over-modal-content"]';
  cookieBanner = 'div[class="bottom-banner-content"]';
  agreeCookieBtn = 'button=I Agree'
  notifIcon = 'a[class="toolbar-action notifications"]'
  acceptOffer = 'div[class*="notification-item-accept"]'
  newGameBtn = 'span=New Game'
  playerSearchInput = 'input[class*="form-input-input"]'
  kolyaFriendInList = 'span=KolyaQa'
  oldGameTab = 'a[data-tab="game"]'
  oldGameTabClose = 'span[class*="tabs-close"]'
  oddsTooltip = 'div[class="odds-tooltip-tooltip"]'


  async waiter(browserType, sel) {
    const selector = sel;
    await browserType.waitUntil(
      () => {
        // console.log(JSON.stringify(selector) + "SELECTOR HERE **************************************************");
        console.log("WAITER!!!!");
        // const newSel = browserType.$(sel)
        // if(!newSel.isEnabled()){browser.debug()}
        // browserType.pause(50)
        // console.log(`WAITER RESULT >>>>>>>>>>> ${sel.toString()}`, newSel.isClickable(), newSel.isDisplayed(), newSel.isExisting(), newSel.isEnabled())
        return browserType.$(selector).isDisplayed();
        // return browserType.$(selector).isClickable() && browserType.$(selector).isDisplayed();
      },
      {
        timeout: 10000,
        timeoutMsg: `NOT FOUND!!! ${JSON.stringify(browserType.$(selector))} -----WAIT CONDITION-----`,
        interval: 500,
      }
    );
  }

  // async waiter (sel) {
  //   const selector = sel;
  //   browser.waitUntil(
  //     () => {
  //       // console.log(JSON.stringify(selector) + 'SELECTOR HERE **************************************************')
  //       return selector.isDisplayed()
  //       // return selector.isDisplayed() && selector.isClickable();
  //     },

  //     {
  //       timeout: 10000,
  //       timeoutMsg: "NOT FOUND!!! " + JSON.stringify(selector) + " -----WAIT CONDITION-----",
  //       interval: 500,
  //     }
  //   );
  // }

  //SELECT DROP-DOWN
  selectBtn(selectBtn, chooseItem) {
    selectBtn.click();
    chooseItem.click();
  }
  waiterCond(cond) {
    const condition = cond;
    browser.waitUntil(
      () => {
        // console.log('________________________________'+ browser.getUrl(),'___' + condition)
        return condition;
      },
      {
        timeout: 20000,
        timeoutMsg: "NOT FOUND!!! -----WAIT CONDITION-----",
        interval: 500,
      }
    );
  }

  uploadFile(selector) {
    // const fileDir = path.join(__dirname, 'C:/Users/Admin/appium_js/test/stats_data')
    const filePath = path.join(global.fileDir, "/qa_image.jpg");
    selector.setValue(filePath);
  }
  waitRequest(browserType, req) {
    let request = req;
    browserType.waitUntil(
      () => {
        console.log("MATCHES ARE EXIST >>>>>", request["matches"].length > 0);
        console.log(request);
        return request["matches"].length > 0 === true && request["matches"].length > 0 === true;
      },
      {
        timeout: 10000,
        timeoutMsg: "EXPECTED MATCHES, BUT THERE'S NOTHING LIKE THIS",
      }
    );
    return true;
  }
}
