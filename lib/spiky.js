import Platform from './platform';

class Spiky extends Platform {
  constructor(ctx, x, y){
    super(ctx, x, y);
    this.type = "spiky";
  }

  drawPlatform() {
    super.drawPlatform();
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillRect(0, 0, 260, 32);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0)
    this.ctx.lineWidth = 2;
    this.drawSpikes();
    this.ctx.closePath();
    this.ctx.fillStyle = "#aaaaaa";
    this.ctx.fill();
    this.ctx.strokeStyle = "#aaaaaa";
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawSpikes() {
    const right = 260;
    const bottom = 0;
    const spikeHeight = 30;
    const spikeWidth = 10;
    for (let x = 0; x < right;) {
      this.ctx.lineTo(x += spikeWidth, -spikeHeight);
      this.ctx.lineTo(Math.min(x += spikeWidth, right), bottom);
    }
  }

  land(player) {
    player.life -= 3;
    player.score += 0;
    player.hurt = true;
  }
}

export default Spiky;