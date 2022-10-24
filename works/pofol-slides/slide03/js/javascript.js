const $indicators = document.querySelectorAll(
  ".slides > .slides-pagination > li > a"
);
const $container = document.querySelector(".slides > .slides-container");
const $sideBanrs = document.querySelectorAll(
  ".slides > .slides-container > li > a > div"
);

let nowIdx = 0;
let oldIdx = nowIdx;

$indicators.forEach(function ($indicator, idx) {
  $indicator.addEventListener("click", function (evt) {
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx = idx;

    $indicators[nowIdx].parentElement.classList.add("on");
    $indicators[oldIdx].parentElement.classList.remove("on");

    $container.style.left = -550 * nowIdx + "px";

    $sideBanrs.forEach(function ($sideBanr) {
      $sideBanr.style.left = "-350px";
      $sideBanr.style.display = "none";
    });

    $sideBanrs[nowIdx].style.display = "block";
    setTimeout(function () {
      $sideBanrs[nowIdx].style.left = "20px";
    }, 400);
  });
});
