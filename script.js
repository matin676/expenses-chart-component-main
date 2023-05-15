const mon = document.querySelector(".mon"),
  tue = document.querySelector(".tue"),
  wed = document.querySelector(".wed"),
  thu = document.querySelector(".thu"),
  fri = document.querySelector(".fri"),
  sat = document.querySelector(".sat"),
  sun = document.querySelector(".sun"),
  bar = document.querySelector(".week-graph-item");

bar.addEventListener("mouseover", function () {
  mon.setAttribute("title", "$17.45");
});
bar.addEventListener("mouseover", function () {
  tue.setAttribute("title", "$34.91");
});
bar.addEventListener("mouseover", function () {
  wed.setAttribute("title", "$52.36");
});
bar.addEventListener("mouseover", function () {
  thu.setAttribute("title", "$31.07");
});
bar.addEventListener("mouseover", function () {
  fri.setAttribute("title", "$23.39");
});
bar.addEventListener("mouseover", function () {
  sat.setAttribute("title", "$43.28");
});
bar.addEventListener("mouseover", function () {
  sun.setAttribute("title", "$25.48");
});

const today = new Date();
const dayOfWeek = today.getDay();

const currentDayBackgroundColor = "rgba(0, 128, 128, 0.632)";
const otherWeekdayBackgroundColor = "rgb(236, 119, 95)";

for (let i = 0; i < 7; i++) {
  const day = i + 1;

  if (day === dayOfWeek) {
    document.getElementById(`day-${day}`).style.backgroundColor =
      currentDayBackgroundColor;
  } else {
    document.getElementById(`day-${day}`).style.backgroundColor =
      otherWeekdayBackgroundColor;
  }
}
