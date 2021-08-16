import { CommonSel, chai } from "../vars/common_selectors";
const comS = new CommonSel();
import UserCreds from "../vars/user_creds";
const userCreds = new UserCreds();
import { Urls } from "../vars/url_selectors";
const urlSel = new Urls();
import { Login } from "../features/users_login_flow";
const login = new Login();
import { ChooseFriend } from "../features/choose_friend";
const chooseFriend = new ChooseFriend();
import { PlayGame } from "../features/play_game";
const playGame = new PlayGame();
import { DefineColor } from "../features/define_color";
const defineColor = new DefineColor();

describe("Chess playing", function() {
  it("Chess playing", async () => {
    this.urlSel = urlSel;
    this.userCreds = userCreds;
    this.comS = comS;

    await login.player1Login.call(this)
    await login.player2Login.call(this)
    await chooseFriend.chooseFriendCase.call(this, chai)
    await defineColor.defineColorFn.call(this, chai)
    await playGame.playGameCase.call(this, chai)
  });
});
