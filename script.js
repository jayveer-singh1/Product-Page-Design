let productImg = document.querySelector("#productImg");
let btn = document.getElementsByClassName("btn");

btn[0].addEventListener('click', function () {
    productImg.src = "./Image/image1.png";

    for (bt of btn) {
        bt.classList.remove("active")
    }
    this.classList.add("active");
});

btn[1].addEventListener('click', function () {
    productImg.src = "./Image/image2.png";

    for (bt of btn) {
        bt.classList.remove("active")
    }
    this.classList.add("active");
});

btn[2].addEventListener('click', function () {
    productImg.src = "./Image/image3.png";

    for (bt of btn) {
        bt.classList.remove("active")
    }
    this.classList.add("active");
});
