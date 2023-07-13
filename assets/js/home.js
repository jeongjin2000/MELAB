// fetch preview images
imagesJsonPath = "./data/home/previewimages/";
var mainContainer = document.getElementById("slideshow__container");
var counter = 0;
let slideIndex = 0;

async function fetchJson() {
  await fetch(imagesJsonPath + "Preview Images Sheet.json")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      for (key in json) {
        // <div class="myslides fade" style="background-image: url(); background-size: cover;">
        //   <div class="slideshow_bottom" style="background: rgba(0,0,0,0.3); border-radius: 0 0 12px 12px;">
        //     <div class="slideshow_info">
        //       <div class="slides__title">title</div>
        //       <div class="slides__subtitle">news caption</div>
        //     </div>
        //     <div class="slideshow_picker">
        //       <span class="dot" onclick="currentSlide(1)"></span>
        //       <span class="dot" onclick="currentSlide(2)"></span>
        //       <span class="dot" onclick="currentSlide(3)"></span>
        //     </div>
        //   </div>
        // </div>

        console.log(json[key]);
        var item = json[key];
        
        var slideContainer = document.createElement("div");
        slideContainer.classList.add("myslides", "fade"); 
        slideContainer.setAttribute("id", "slideshow__img");
        slideContainer.onclick = function () {
          window.open(item["Link to News"]);
        };
        slideContainer.style.backgroundImage = "url('" + (imagesJsonPath + "preview images form/image/" + item["Image Title"]) + "')";
        slideContainer.style.backgroundSize = "cover";
        slideContainer.style.borderRadius = "12px";
        console.log(item["Link to News"]);

        var slideBottom = document.createElement("div");
        slideBottom.classList.add("slideshow_bottom");
        slideBottom.style.background = "rgba(0,0,0,0.6)"
        slideBottom.style.borderRadius = "0 0 12px 12px"

        var slidesTextContainer = document.createElement("div");
        slidesTextContainer.classList.add("slideshow_info");

        var slidesTitle = document.createElement("div");
        slidesTitle.classList.add("slides__title");
        slidesTitle.setAttribute("id", `slides__${counter}`);
        counter += 1;
        slidesTitle.innerHTML += item["Title"];
        slidesTextContainer.appendChild(slidesTitle);

        var slidesCaption = document.createElement("div");
        slidesCaption.classList.add("slides__subtitle");
        slidesCaption.innerHTML += item["Caption"];
        slidesTextContainer.appendChild(slidesCaption);

        slideBottom.appendChild(slidesTextContainer);
        slideContainer.appendChild(slideBottom);

        mainContainer.appendChild(slideContainer);
        /*
        <div class="myslides fade">
          <img
            id="slideshow__img"
            src="./assets/img/about.jpeg"
            alt="Team Photo"
          />
          <div class="slides__text">
            <div class="slides__title" id="slides__1">TITLE 1</div>
            <div class="slides__subtitle">CAPTION 1</div>
          </div>
        </div>
      */

        var leftButton = document.createElement("a");

        /** 
       * <!-- next/previous buttons -->
        <a onclick="plusSlides(-1)" class="prev">&#10094;</a>
        <a onclick="plusSlides(1)" class="next">&#10095;</a>
       * 
      */
      }
    });

  showSlides();
}

fetchJson();
// auto image slide

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
