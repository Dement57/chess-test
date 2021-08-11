export class CommonSel {
  email = "#username";
  password = "#password";
  loginBtn = "#login";
  menuBtn = 'span[class="icon-font-chess menu"]';
  playBtn = "span=Играть";
  playByNet = "h2=Играть по сети";
  playWithFriend = "h2=Играть с другом";
  kolyaFriend = "a=KolyaQa";

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

  getCity(cityName, selector) {
    return $(`${selector}=${cityName}`);
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

  waiterHubDate(dateInDOM, day) {
    browser.waitUntil(
      () => {
        // console.log('________________________________'+ dateInDOM.getAttribute('ng-reflect-model'),'___   ' + day, '___: ' + dateInDOM.getAttribute('ng-reflect-model').includes(day))
        console.log(
          "________________________________" + dateInDOM.getValue(),
          "___   " + day,
          "___: " + dateInDOM.getValue().includes(day)
        );
        // return dateInDOM.getAttribute('ng-reflect-model').includes(day)
        return dateInDOM.getValue().includes(day);
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

  waiterErrorNotExist(errorMess) {
    const errorMessage = errorMess;
    browser.waitUntil(
      () => {
        // console.log('________________________________'+ browser.getUrl(),'___' + condition)
        return !errorMessage.isExisting();
      },
      {
        timeout: 20000,
        timeoutMsg: "NOT FOUND!!! -----WAIT CONDITION-----",
        interval: 500,
      }
    );
  }
  newMock() {
    return browser.mock();
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
  waitRequest(browserType, req) {
    let request = req;
    if (request["matches"].length > 0 === true && request["matches"].length > 0 === true) {
    }
    return true;
  }
}
