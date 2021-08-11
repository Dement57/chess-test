import { CommonSel } from "./common_selectors";
const comS = new CommonSel();
import UserCreds from "./user_creds";
const userCreds = new UserCreds();
import { Urls } from "./url_selectors";
const urlSel = new Urls();
import { Login } from "./users_login_flow";
const login = new Login();

describe("Chess playing", function() {
  it("Chess playing", async () => {
    this.urlSel = urlSel;
    this.userCreds = userCreds;
    this.comS = comS;
    await login.usersLoginCase.call(this)

    // await pl1.$(comS.email).setValue(useCreds.petyaName);
    // await pl1.$(comS.password).setValue(useCreds.password);
    // await pl1.$(comS.loginBtn).click();
    // await comS.waiter(pl1, comS.menuBtn);
    // await pl1.$(comS.menuBtn).click();
    // await comS.waiter(pl1, comS.playBtn);
    // await pl1.$(comS.playBtn).click();
    // // await pl1.debug();
    // await comS.waiter(pl1, comS.playWithFriend);
    // await pl1.$(comS.playWithFriend).click();
    // await comS.waiter(pl1, comS.kolyaFriend);
    // await pl1.$(comS.kolyaFriend).click();
    // await pl1.debug();
  });
});
