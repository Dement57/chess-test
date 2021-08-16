export class PlayGame {
  async playGameCase(chai) {
    /**
     * MAIN GAME FLOW
     */
    await pl1.pause(3000)
    let pl1White;
    await this.comS.waiter(pl1, this.comS.defineColorTag);
    const isPl1White = await (await (await pl1.$$(this.comS.timer)[1].getAttribute('class')).toString()).includes('clock-white');
    if (isPl1White){
      console.log('PL1 IS WHITE COLOR');
      pl1White = true;
    } else {
      console.log('PL1 IS BLACK COLOR');
      pl1White = false;
    }
    await pl1.debug();
}}
