$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});
$("document").ready(function () {
  var vw;
  $(window).resize(function () {
    vw = $(window).width() / 2;
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9").stop();
    $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 }, 500);
    $("#b88").animate({ top: 240, left: vw + 300 }, 500);
    $("#b99").animate({ top: 240, left: vw + 350 }, 500);
  });

  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");
    $(this)
      .fadeOut("slow")
      .delay(500)
      .promise()
      .done(function () {
        $("#play").fadeIn("slow");
      });
  });
  $("#play").click(function () {
    var audio = $(".song")[0];
    audio.play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
    $(this)
      .fadeOut("slow")
      .delay(500)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });

  $("#bannar_coming").click(function () {
    $(".bannar").addClass("bannar-come");
    $(this)
      .fadeOut("slow")
      .delay(500)
      .promise()
      .done(function () {
        $("#balloons_flying").fadeIn("slow");
      });
  });

  function loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b1").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopOne();
    });
  }
  function loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b2").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopTwo();
    });
  }
  function loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b3").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopThree();
    });
  }
  function loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b4").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopFour();
    });
  }
  function loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b5").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopFive();
    });
  }

  function loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b6").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopSix();
    });
  }
  function loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b7").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopSeven();
    });
  }
  function loopEight() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b8").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopEight();
    });
  }
  function loopNine() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b9").animate({ left: randleft, bottom: randtop }, 500, function () {
      loopNine();
    });
  }

  $("#balloons_flying").click(function () {
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7,#b9").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6,#b8").addClass("balloons-rotate-behaviour-two");
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();
    loopEight();
    loopNine();
    $(this)
      .fadeOut("slow")
      .delay(4000)
      .promise()
      .done(function () {
        $("#cake_fadein").fadeIn("slow");
      });
  });

  $("#cake_fadein").click(function () {
    $(".cake").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .delay(500)
      .promise()
      .done(function () {
        $("#light_candle").fadeIn("fast");
      });
  });

  $("#light_candle").click(function () {
    $(".fuego").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .promise()
      .done(function () {
        $("#wish_message").fadeIn("slow");
      });
  });

  $("#wish_message").click(function () {
    vw = $(window).width() / 2;
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#8,#9").stop();
    $("#b1").attr("id", "b11");
    $("#b2").attr("id", "b22");
    $("#b3").attr("id", "b33");
    $("#b4").attr("id", "b44");
    $("#b5").attr("id", "b55");
    $("#b6").attr("id", "b66");
    $("#b7").attr("id", "b77");
    // $("#b8").attr("id", "b88");
    // $("#b9").attr("id", "b99");
    $("#b11").animate({ top: 240, left: vw - 300 }, 500);
    $("#b22").animate({ top: 240, left: vw - 200 }, 500);
    $("#b33").animate({ top: 240, left: vw - 100 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    $("#b66").animate({ top: 240, left: vw + 100 }, 500);
    $("#b77").animate({ top: 240, left: vw + 200 }, 500);
    // $("#b88").animate({ top: 240, left: vw + 200 }, 500);
    // $("#b99").animate({ top: 240, left: vw + 300 }, 500);
    $("#b1010").animate({ top: 240, left: vw + 400 }, 500);
    $(".balloons").css("opacity", "0.9");
    $(".balloons h2").fadeIn(3000);
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#story").fadeIn("slow");
      });
  });

  //   $("#story").click(function () {
  //     $(this).fadeOut("slow");
  //     $(".cake")
  //       .fadeOut("fast")
  //       .promise()
  //       .done(function () {
  //         $(".message").fadeIn("slow");
  //       });

  //     var i;

  //     function msgLoop(i) {
  //       $("p:nth-child(" + i + ")")
  //         .fadeOut("slow")
  //         .delay(800)
  //         .promise()
  //         .done(function () {
  //           i = i + 1;
  //           $("p:nth-child(" + i + ")")
  //             .fadeIn("slow")
  //             .delay(1000);
  //           if (i == 50) {
  //             $("p:nth-child(49)")
  //               .fadeOut("slow")
  //               .promise()
  //               .done(function () {
  //                 $(".cake").fadeIn("fast");
  //               });
  //           } else {
  //             msgLoop(i);
  //           }
  //         });
  //     }
  //     msgLoop(0);
  //   });

  function ConfettiGenerator(params) {
    //////////////
    // Defaults
    var appstate = {
      target: "confetti-holder", // Id of the canvas
      max: 80, // Max itens to render
      size: 1, // prop size
      animate: true, // Should animate?
      respawn: true, // Should confettis be respawned when getting out of screen?
      props: ["circle", "square", "triangle", "line"], // Types of confetti
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
      ], // Colors to render confetti
      clock: 25, // Speed of confetti fall
      interval: null, // Draw interval holder
      rotate: false, // Whenever to rotate a prop
      start_from_edge: false, // Should confettis spawn at the top/bottom of the screen?
      width: window.innerWidth, // canvas width (as int, in px)
      height: window.innerHeight, // canvas height (as int, in px)
    };

    //////////////
    // Setting parameters if received
    if (params) {
      if (params.target) appstate.target = params.target;
      if (params.max) appstate.max = params.max;
      if (params.size) appstate.size = params.size;
      if (params.animate !== undefined && params.animate !== null)
        appstate.animate = params.animate;
      if (params.respawn !== undefined && params.respawn !== null)
        appstate.respawn = params.respawn;
      if (params.props) appstate.props = params.props;
      if (params.colors) appstate.colors = params.colors;
      if (params.clock) appstate.clock = params.clock;
      if (
        params.start_from_edge !== undefined &&
        params.start_from_edge !== null
      )
        appstate.start_from_edge = params.start_from_edge;
      if (params.width) appstate.width = params.width;
      if (params.height) appstate.height = params.height;
      if (params.rotate !== undefined && params.rotate !== null)
        appstate.rotate = params.rotate;
    }

    //////////////
    // Early exit if the target is not the correct type, or is null
    if (
      typeof appstate.target != "object" &&
      typeof appstate.target != "string"
    ) {
      throw new TypeError("The target parameter should be a node or string");
    }

    if (
      (typeof appstate.target == "object" &&
        (appstate.target === null ||
          !appstate.target instanceof HTMLCanvasElement)) ||
      (typeof appstate.target == "string" &&
        (document.getElementById(appstate.target) === null ||
          !document.getElementById(appstate.target) instanceof
            HTMLCanvasElement))
    ) {
      throw new ReferenceError(
        "The target element does not exist or is not a canvas element"
      );
    }

    //////////////
    // Properties
    var cv =
      typeof appstate.target == "object"
        ? appstate.target
        : document.getElementById(appstate.target);
    var ctx = cv.getContext("2d");
    var particles = [];

    //////////////
    // Random helper (to minimize typing)
    function rand(limit, floor) {
      if (!limit) limit = 1;
      var rand = Math.random() * limit;
      return !floor ? rand : Math.floor(rand);
    }

    var totalWeight = appstate.props.reduce(function (weight, prop) {
      return weight + (prop.weight || 1);
    }, 0);
    function selectProp() {
      var rand = Math.random() * totalWeight;
      for (var i = 0; i < appstate.props.length; ++i) {
        var weight = appstate.props[i].weight || 1;
        if (rand < weight) return i;
        rand -= weight;
      }
    }

    //////////////
    // Confetti particle generator
    function particleFactory() {
      var prop = appstate.props[selectProp()];
      var p = {
        prop: prop.type ? prop.type : prop, //prop type
        x: rand(appstate.width), //x-coordinate
        y: appstate.start_from_edge
          ? appstate.clock >= 0
            ? -10
            : parseFloat(appstate.height) + 10
          : rand(appstate.height), //y-coordinate
        src: prop.src,
        radius: rand(4) + 1, //radius
        size: prop.size,
        rotate: appstate.rotate,
        line: Math.floor(rand(65) - 30), // line angle
        angles: [
          rand(10, true) + 2,
          rand(10, true) + 2,
          rand(10, true) + 2,
          rand(10, true) + 2,
        ], // triangle drawing angles
        color: appstate.colors[rand(appstate.colors.length, true)], // color
        rotation: (rand(360, true) * Math.PI) / 180,
        speed: rand(appstate.clock / 7) + appstate.clock / 30,
      };

      return p;
    }

    //////////////
    // Confetti drawing on canvas
    function particleDraw(p) {
      if (!p) {
        return;
      }

      var op = p.radius <= 3 ? 0.4 : 0.8;

      ctx.fillStyle = ctx.strokeStyle = "rgba(" + p.color + ", " + op + ")";
      ctx.beginPath();

      switch (p.prop) {
        case "circle": {
          ctx.moveTo(p.x, p.y);
          ctx.arc(p.x, p.y, p.radius * appstate.size, 0, Math.PI * 2, true);
          ctx.fill();
          break;
        }
        case "triangle": {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(
            p.x + p.angles[0] * appstate.size,
            p.y + p.angles[1] * appstate.size
          );
          ctx.lineTo(
            p.x + p.angles[2] * appstate.size,
            p.y + p.angles[3] * appstate.size
          );
          ctx.closePath();
          ctx.fill();
          break;
        }
        case "line": {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.line * appstate.size, p.y + p.radius * 5);
          ctx.lineWidth = 2 * appstate.size;
          ctx.stroke();
          break;
        }
        case "square": {
          ctx.save();
          ctx.translate(p.x + 15, p.y + 5);
          ctx.rotate(p.rotation);
          ctx.fillRect(
            -15 * appstate.size,
            -5 * appstate.size,
            15 * appstate.size,
            5 * appstate.size
          );
          ctx.restore();
          break;
        }
        case "svg": {
          ctx.save();
          var image = new window.Image();
          image.src = p.src;
          var size = p.size || 15;
          ctx.translate(p.x + size / 2, p.y + size / 2);
          if (p.rotate) ctx.rotate(p.rotation);
          ctx.drawImage(
            image,
            -(size / 2) * appstate.size,
            -(size / 2) * appstate.size,
            size * appstate.size,
            size * appstate.size
          );
          ctx.restore();
          break;
        }
      }
    }

    //////////////
    // Public itens
    //////////////

    //////////////
    // Clean actual state
    var _clear = function () {
      appstate.animate = false;
      clearInterval(appstate.interval);

      requestAnimationFrame(function () {
        ctx.clearRect(0, 0, cv.width, cv.height);
        var w = cv.width;
        cv.width = 1;
        cv.width = w;
      });
    };

    //////////////
    // Render confetti on canvas
    var _render = function () {
      cv.width = appstate.width;
      cv.height = appstate.height;
      particles = [];

      for (var i = 0; i < appstate.max; i++) particles.push(particleFactory());

      function draw() {
        ctx.clearRect(0, 0, appstate.width, appstate.height);

        for (var i in particles) particleDraw(particles[i]);

        update();

        if (appstate.animate) requestAnimationFrame(draw);
      }

      function update() {
        for (var i = 0; i < appstate.max; i++) {
          var p = particles[i];

          if (p) {
            if (appstate.animate) p.y += p.speed;

            if (p.rotate) p.rotation += p.speed / 35;

            if (
              (p.speed >= 0 && p.y > appstate.height) ||
              (p.speed < 0 && p.y < 0)
            ) {
              if (appstate.respawn) {
                particles[i] = p;
                particles[i].x = rand(appstate.width, true);
                particles[i].y =
                  p.speed >= 0 ? -10 : parseFloat(appstate.height);
              } else {
                particles[i] = undefined;
              }
            }
          }
        }

        if (
          particles.every(function (p) {
            return p === undefined;
          })
        ) {
          _clear();
        }
      }

      return requestAnimationFrame(draw);
    };

    return {
      render: _render,
      clear: _clear,
    };
  }
  //ConfettiGenerator();
});
