$("h1").addClass("big-title");

$("button").click(() => {
  $("h1").css("color", "purple");
});

$(document).keypress((event) => {
  $("h1").text(event.key);
});
