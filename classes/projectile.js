export class Projectile {
  constructor(game, x, y, damage, speed) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 8;
    this.height = 20;
    this.speed = speed; 
    this.damage = damage;
  }

  update() {
    this.y -= this.speed; 
  }

  draw(context) {
    context.fillStyle = 'red'; 
    context.fillRect(this.x, this.y, this.width, this.height); 
  }

  removeProjectile(projectile){
    const index  = this.game.projectiles.indexOf(projectile)

    if(index !== -1){
      this.game.projectiles.splice(index, 1)
    }
  }

  isOffScreen() {
    return this.y + this.height <= 0;
  }
}
