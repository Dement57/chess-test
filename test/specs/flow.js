import { CommonSel, chai } from "./common_selectors";
const comS = new CommonSel();
import UserCreds from "./user_creds";
const userCreds = new UserCreds();
import { Urls } from "./url_selectors";
const urlSel = new Urls();
import { Login } from "./users_login_flow";
const login = new Login();
import { StartGame } from "./start_game";
const startGame = new StartGame();

describe("Chess playing", function() {
  it("Chess playing", async () => {
    this.urlSel = urlSel;
    this.userCreds = userCreds;
    this.comS = comS;
    this.comS = comS;

    await login.player1Login.call(this)
    await login.player2Login.call(this)
    // await browser.debug()
    await startGame.startGameCase.call(this, chai)
  });
});
