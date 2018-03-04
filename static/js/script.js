function wave(width, height, context, fillStyle, amplitude, frequency, start_height, ease) {

  var segments = 1000;
  var interval = width / segments;

  var points = [];

  height = 500;
  for (var i = 0; i <= segments+1; i++) {
    var norm = i / segments;
    var point = {
      x: i * interval,
      y: 1
    };
    var tween = TweenMax.to(point, 4, {
      y: -1,
      repeat: -1,
      yoyo: true,
      ease: ease
    }).progress(norm * frequency)
    points.push(point);
  }
  context.beginPath();
  context.moveTo(points[0].x, start_height + points[0].y * amplitude);

  for (var i = 1; i < segments+1; i++) {

    var point = points[i];
    context.lineTo(point.x, start_height + point.y * amplitude);
  }

  context.lineTo(width, height);


  // for (var i = segments+1; i > -1; i--) {
  //
  //   var point = points[i];
  //
  //   // console.log(point.x);
  //   console.log(start_height + point.y * amplitude)
  //   context.lineTo(point.x, height +  + start_height + point.y * amplitude);
  // }


  context.lineTo(0, height);
  context.closePath();
  context.fillStyle = fillStyle;
  context.fill();
}

function run() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var width = document.body.clientWidth;
  // var height = window.clientWidth;
  var height = 500;

  console.log(width);
  console.log(height);

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  context.globalCompositeOperation = "soft-light";
  context.clearRect(0, 0, width, height);

  wave(width, height, context, "rgba(103,58,183,0.8)", width / 18, 1.5, 250, Sine.easeInOut);
  wave(width, height, context, "rgba(63,81,181,0.7)", width / 20, 3.5, 200, Sine.easeInOut);

}

window.addEventListener("resize", function() {
  run()
});

run()
