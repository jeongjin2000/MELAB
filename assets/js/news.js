var newsJsonPath = "/data/news/";
var mainContainer = document.getElementById("news__container");

var modal = document.getElementById("defaultModal");
var modalTitle = document.getElementById("modalTitle");
var modalTextOne = document.getElementById("modalTextOne");
var modalCloseBtn = document.getElementById("modalCloseButton");
modalCloseBtn.addEventListener("click", function (event) {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
});

async function fetchJson() {
  await fetch(newsJsonPath + "News Sheet.json")
    .then((response) => response.json())
    .then((json) => {
      for (key in json) {
        console.log(json[key]);
        var item = json[key];

        // <a href="https://kaist.ac.kr/kr/" class="" target="_blank">
        //   <div class="news__box default_hover_box flex flex-col" style="border-radius: 4px 4px 4px 4px;">
        //     <div class="img__container flex-initial" style="height: 200px; background-color: gray; border-radius: 4px 4px 0px 0px;"><img
        //         src="/data/home/previewimages/preview images form/image/0003061517_001_20221124162603400 - Khaknazar Mukash.jpg">
        //     </div>
        //     <div class="news__details flex-none p-3" style="height: 103px; justify-content: space-between;">
        //       <div class="news__title text-black text-base font-semibold self-stretch">New members join our lab!</div>
        //       <div class="news__content truncate font-normal text-black text-xs" style="height: 35px;">Two new master's students joining our
        //         lab from Spring 2023 Semester. [Name] graduated from NU and have worked for Google and Facebook
        //         before.................</div>
        //       <div class="news__metadata text-right font-medium text-xs text-gray-300">KAIST, 2/20/2023</div>
        //     </div>
        //   </div>
        // </a>
        
        var newsAnchor = document.createElement("a");
        var newsBox = document.createElement("div");
        if (item["News Source"] == "External Link") {
          newsAnchor.href = item["Article Link"];
        } else {
          newsAnchor.addEventListener("click", function (event) {
            if (modal.classList.contains("hidden")) {
              modal.classList.remove("hidden");
              modalTitle.innerHTML = item["Title"];
              modalTextOne.innerHTML = item["Text File"];
            }
          });
        }
        newsAnchor.target = "_blank";
        newsBox.classList.add(
          "news__box",
          "default_hover_box",
          "flex",
          "flex-col",
        );
        newsBox.style.borderRadius = "border-radius: 4px 4px 4px 4px";
        newsBox.style.overflow = "hidden";

        var imgContainer = document.createElement("div");
        imgContainer.classList.add("img__container", "flex-initial");
        imgContainer.style.height = "200px";
        imgContainer.style.borderRadius = "border-radius: 4px 4px 0px 0px";
        imgContainer.style.backgroundImage = "url('/data/home/previewimages/preview images form/image/0003061517_001_20221124162603400 - Khaknazar Mukash.jpg')";

        var newsDetails = document.createElement("div");
        newsDetails.classList.add("news__details", "flex-none", "p-3");
        newsDetails.style.height = "103px";
        newsDetails.style.justifyContent = "space-between";
        newsDetails.style.display = "flex";
        newsDetails.style.flexDirection = "column";
        
        var newsTitle = document.createElement("div");
        newsTitle.classList.add(
          "news__title",
          "truncate",
          "text-black",
          "text-sm",
          "font-bold",
          "self-stretch"
        );
        // newsTitle.style.height = "24px";
        newsTitle.innerHTML += item["Title"];
        // newsTitle.style.textOverflow = "ellipsis";
        newsDetails.appendChild(newsTitle);

        var newsContent = document.createElement("div");
        newsContent.classList.add(
          "news__content",
          // "truncate",
          "font-normal",
          "text-black",
          "text-xs"
        );
        newsContent.style.widows = "100%";
        newsContent.style.height = "35px";
        newsContent.style.webkitLineClamp = "2";
        newsContent.style.display = "-webkit-box";
        newsContent.style.overflow = "hidden";
        newsContent.style.textOverflow = "ellipsis";
        newsContent.innerHTML += item["Short Content"];
        newsDetails.appendChild(newsContent);

        var newsMetadata = document.createElement("div");
        newsMetadata.classList.add(
          "news__metadata",
          "truncate",
          "text-right",
          "font-normal",
          "text-xs",
          "text-gray-300"
        );
        newsMetadata.innerHTML += item["Location"] + ", " + item["Time"];
        newsDetails.appendChild(newsMetadata);

        newsBox.appendChild(imgContainer);
        newsBox.appendChild(newsDetails);
        newsAnchor.appendChild(newsBox);
        mainContainer.appendChild(newsAnchor);
      }
    });
}

fetchJson();

function createModal(item) {
  console.log(item);
}
