$('[data-mdb-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy("refresh");
});

$(".carousel").carousel({
  interval: 0,
  keyboard: true,
  pause: "hover",
});

VANTA.GLOBE({
  el: ".home",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xff5a00,
  color2: 0xff5a00,
  size: 0.7,
  backgroundColor: 0x0,
});
