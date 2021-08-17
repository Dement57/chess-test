export class DefineColor {
  async defineColorFn(chai) {
    /**
     * MAIN GAME FLOW
     */
    await this.comS.waiter(pl1, this.comS.timer);
    const isPl1White = await (await (await pl1.$$(this.comS.timer)[1].getAttribute('class')).toString()).includes('clock-white');
    if (isPl1White){
      console.log('PL1 IS WHITE COLOR');
      this.pl1White = true;
    } else {
      console.log('PL1 IS BLACK COLOR');
      this.pl1White = false;
    }
    // await pl1.debug();
}}
