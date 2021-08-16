import { CommonSel, chai } from "./common_selectors";
const comS = new CommonSel();
import UserCreds from "./user_creds";
const userCreds = new UserCreds();
import { Urls } from "./url_selectors";
const urlSel = new Urls();
import { Login } from "./users_login_flow";
const login = new Login();
import { ChooseFriend } from "./choose_friend";
const chooseFriend = new ChooseFriend();
import { PlayGame } from "./play_game";
const playGame = new PlayGame();

describe("Chess playing", function() {
  it("Chess playing", async () => {
    this.urlSel = urlSel;
    this.userCreds = userCreds;
    this.comS = comS;

    await login.player1Login.call(this)
    await login.player2Login.call(this)
    // await browser.debug()
    await chooseFriend.chooseFriendCase.call(this, chai)
    await playGame.playGameCase.call(this, chai)
  });
});
