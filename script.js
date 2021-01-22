var sub = document.querySelector(".sub");

var buttom = document.querySelector(".show-more")



buttom.addEventListener("click", function() {
    sub.querySelectorAll(".no-show").forEach(element => {
        element.classList.toggle("load-more")

    });
    // document.querySelector(".noticia").classList.toggle("ver-mais");


});