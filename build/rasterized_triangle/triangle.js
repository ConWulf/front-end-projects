
function init() {

    const stage = new createjs.Stage("grid");

    for (let i = 0; i < 5 * 5; i++) {
        let square = new createjs.Shape();
        square.graphics.beginFill("black").rect(2, 2, 20, 20);
      // let square = new createjs.Graphics()
      //     .setStrokeStyle(3)
      //     .beginStroke("#000")
      //     .beginFill()

      square.x = (20 + 2)*(i%15);
      square.y = (20 + 2)*Math.floor(i/15);
      stage.addChild(square);

    }

    stage.update();
    console.log(stage.canvas.height);
    console.log(stage.canvas.width);
    console.log(stage);


}