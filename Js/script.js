const btnAngle = document.querySelector(".btn-angle")
const angle = document.querySelector("#angle")
const navbar2 = document.querySelector("#navbar2")

btnAngle.addEventListener("click", function () {
    angle.classList.toggle("angle")
    navbar2.classList.toggle("d-flex")
    navbar2.classList.toggle("d-none")
})

const message = document.querySelector("#message")
const sidebar = document.querySelector("#sidebar")

message.addEventListener("click", function () {
    sidebar.classList.toggle("d-none")
})