$(document).ready(function () {
  $(".header-area .main-nav .sub_li").hover(function () {
    $(".sub_ul").slideToggle();
  });
  $(".header-area .main-nav .header-menu ul li a");
  $(".header-area .main-nav .header-menu ul li a").click(function (a) {
    $(".header-area .main-nav .header-menu ul li a").removeClass("nav_active"),
      a.target.classList.add("nav_active");
  }),
    $(".collec_lix").hover(function () {
      $(".collection_sub").slideToggle();
    });
  $(".showcase-area .button-group button");
  $(".showcase-area .button-group button").click(function (a) {
    $(".showcase-area .button-group button").removeClass("btn_active"),
      a.target.classList.add("btn_active");
    let e = $(a.target).attr("data-filter");
    return $(".showcase-area .gallery_row").isotope({ filter: e }), !1;
  }),
    $(window).scroll(function () {
      var a = $(window).scrollTop();
      a >= 100
        ? $(".header-wrap").addClass("sticky")
        : a >= 0 && $(".header-wrap").removeClass("sticky");
    }),
    $(".bar").click(function () {
      $(".small-nav").slideToggle();
    }),
    $(".sml-more").click(function () {
      $(".sml-ul").slideToggle(), $(".sml-more i").toggleClass("rotate_i");
    });
});
let url = "https://rayhan926.github.io/popup/popup.json";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    var newStyle = document.createElement("style");
    newStyle.appendChild(document.createTextNode(data.styles));
    document.querySelector("body").appendChild(newStyle);
    let newDiv = document.createElement("div");
    newDiv.classList.add("s35_popup_parent");
    document.querySelector("body").append(newDiv);
    setTimeout(() => {
      document.querySelector(".s35_popup_parent").innerHTML = data.bigShop; // Add popup name hare
    }, 1500);
  });
document.addEventListener("click", function (e) {
  if (e.target.classList == "s35_close") {
    document.querySelector(".s35_popup_wrap").classList.add("s35_hide_popup");
  }
});
