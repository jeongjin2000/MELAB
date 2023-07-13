// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
/**
 * <div class="flex">
          <div
            class="flex flex-col pl-[15%] pr-2.5 justify-center items-center"
          >
            <h2
              class="not-italic font-bold text-xs flex items-center text-center text-black"
            >
              email
            </h2>
            <h2
              class="not-italic font-bold text-xs flex items-center text-center text-black"
            >
              call
            </h2>
            <h2
              class="not-italic font-bold text-xs flex items-center text-center text-black"
            >
              map
            </h2>
          </div>
          <div class="w-3/5">
            <h2
              class="not-italic font-normal text-xs flex items-center text-black"
            >
              hklab.kaist@gmail.com
            </h2>
            <h2
              class="not-italic font-normal text-xs flex items-center text-black"
            >
              042-350-4036
            </h2>
            <div class="h-[400px] w-full" id="map"></div>
          </div>
          <div class="contacts__box"></div>
        </div>
 */
