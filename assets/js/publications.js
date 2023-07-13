const years = [];

publicationsPath = "/data/publications/";

var publications = document.getElementById("publications__container");
fetch(publicationsPath + "Publications Sheet.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (key in data) {
      item = data[key];
      var pubLink = document.createElement("a");
      pubLink.href = "";
      pubLink.target = "_blank";

      // <a href="">
      //   <div
      //     class="publication__box default_hover_box p-3 flex flex-row justify-between w-full flex-1"
      //     style="gap: 24px; padding: 0.75rem 0.75rem"
      //   >
      //     <div class="title font-semibold text-sm text-black w-full">
      //       Emergent Constraints on future precipitation changes
      //     </div>
      //     <div class="details w-full flex flex-col" style="gap: 4px;">
      //       <div class="authors text-xs text-black font-normal">
      //         Shiogama, H., M. Watanabe, H. Kim and N. Hirota
      //       </div>
      //       <div class="year text-xs text-gray-300">
      //         2022
      //       </div>
      //     </div>
      //   </div>
      // </a>
      // <hr style="width:100%;"></hr>
      
      var pubBox = document.createElement("div");
      pubBox.classList.add(
        "publication__box",
        "default_hover_box",
        "p-3",
        "flex",
        "flex-row",
        "justify-between",
        "w-full",
        "flex-1"
      );
      pubBox.style.gap = "24px";
      pubBox.style.padding = "0.75rem 0.75rem";

      var pubTitle = document.createElement("div");
      pubTitle.classList.add("title", "font-semibold", "text-sm", "text-black", "w-full");
      pubTitle.innerHTML += item["Title"];
      pubBox.appendChild(pubTitle);

      var pubDetails = document.createElement("div");
      pubDetails.classList.add(
        "details", "w-full", "flex", "flex-col"
      );
      pubDetails.style.gap = "4px"
      var pubAuthors = document.createElement("div");
      pubAuthors.classList.add(
        "authors",
        "text-xs",
        "text-black",
        "font-normal"
      );
      pubAuthors.innerHTML += item["Authors"];
      pubDetails.appendChild(pubAuthors);

      var pubYear = document.createElement("div");
      pubYear.classList.add("year", "text-xs", "text-gray-300");
      pubYear.innerHTML += item["Publication Year"];
      pubDetails.appendChild(pubYear);

      pubBox.appendChild(pubDetails);

      pubLink.appendChild(pubBox);

      publications.appendChild(pubLink);

      if(key != data[data.length - 1]){
        var hr = document.createElement("hr");
        hr.style.width = "100%"
        publications.appendChild(hr);
      }
    }
  })
  .catch((error) => console.log(error));

/**
   * <a href="">
            <div
              class="publication__box mb-3 border-solid border-gray-400 border-[1px] p-6 flex flex-col justify-between items-start w-full flex-1"
            >
              <div class="title font-bold text-base text-black">
                Emergent Constraints on future precipitation changes
              </div>
              <div class="details">
                <div class="authors text-xs text-black font-normal">
                  Shiogama, H., M. Watanabe, H. Kim and N. Hirota
                </div>
                <div class="year text-[10px] text-gray-400">2022</div>
              </div>
            </div>
          </a>
   */
