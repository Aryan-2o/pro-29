class Cube extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);

  }

display(){
console.log(this.body.speed);
if (this.body.speed < 3){
  super.display();
}
else {
  World.remove(world, this.body);
}
}
score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }
}
};