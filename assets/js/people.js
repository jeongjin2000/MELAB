// ######## SCRIPT FOR PEOPLE PAGE ##############

var labels = [
  "Name\n(English)",
  "Title\n(Undergraduate, Graduate, Professor, etc.)",
  "Email",
  "Phone number",
  "Fields of Interest\n(English)\n(Please list using ; )\nExample: 1; 2; 3;",
  "SNS\n(List using ;)",
  "Profile Photo",
  "Select what you want to be publicly available",
  "Name\n(Korean)",
  "Fields of Interest \n(Korean)\n(Please list using ; )\nExample: 1; 2; 3;",
];

peopleJsonPath = "/data/people/";

var people = document.getElementById("people__container");
var details = document.getElementById("details__container");
var detailsText = document.getElementById("info__container");
var data;

function createDetailSection(item, key1) {
  var [detailsBox, detailsInfo] = createDetailBox(key1);

  var rawText = item[key1];
  if (rawText) {
    sectionItems = rawText.split(";");
    for (i in sectionItems) {
      elem = sectionItems[i];
      console.log(elem);
      elemArr = elem.split("#");
      var subdetailsInfo = initiateSubDetails(elemArr[0], elemArr[1]);
      detailsInfo.appendChild(subdetailsInfo);
    }

    detailsBox.appendChild(detailsInfo);
  }
  return detailsBox;
}

function createDetailBox(key1) {
  var detailsBox = document.createElement("div");
  detailsBox.classList.add("details__box", "flex", "flex-col");
  detailsBox.style.marginTop = "52px";

  var detailsType = document.createElement("div");
  detailsType.classList.add(
    "details__type",
    "text-black",
    "font-bold",
    "text-base"
  );
  detailsType.innerHTML = key1;
  detailsBox.appendChild(detailsType);

  var detailsInfo = document.createElement("div");
  detailsInfo.classList.add("details__info", "flex", "flex-col", "mt-4");

  return [detailsBox, detailsInfo];
}

function initiateSubDetails(key1, key2) {
  var subdetailsBox = document.createElement("div");
  subdetailsBox.classList.add("subdetail__box", "flex", "flex-row", "w-full");

  var subdetailLabel = document.createElement("div");
  subdetailLabel.classList.add(
    "subdetail__label",
    "text-left",
    // "w-2/12",
    "mr-8",
    "font-medium",
    "text-base",
    "text-black",
    "break-all"
  );
  subdetailLabel.innerHTML = key1;
  subdetailLabel.style.width = "192px";
  subdetailsBox.appendChild(subdetailLabel);

  var subdetailText = document.createElement("div");
  subdetailText.classList.add(
    "subdetail__text",
    "text-left",
    // "w-10/12",
    "text-black",
    "text-base",
    "font-normal"
  );
  subdetailText.innerHTML = key2;
  subdetailsBox.appendChild(subdetailText);

  return subdetailsBox;
}

var selectedIdx;

function selectIdx(index){
  const prevDetails = document.getElementById("details_" + selectedIdx);
  if(prevDetails != undefined){
    prevDetails.classList.add('hidden');
  }
  selectedIdx = index;
  const curDetails = document.getElementById("details_" + selectedIdx);
  curDetails.classList.remove('hidden');
}

async function fetchJson() {
  const response = await fetch(peopleJsonPath + "ME Lab Members Form.json");
  const json = await response.json();
  var arr = [];
  var ind = 0;
  for (key in json) {
    var item = json[key];
    arr.push(item);
    // var personBox = document.createElement("div");
    // personBox.classList.add("person__box", "mx-4", "cursor-pointer");

    // var imgContainer = document.createElement("div");
    // imgContainer.classList.add("img__container", "w-full");

    // var imgSource = document.createElement("img");
    // imgSource.classList.add(
    //   "h-64",
    //   "w-48",
    //   "object-cover",
    //   "rounded-2xl",
    //   "border",
    //   "border-solid",
    //   "border-slate-300"
    // );
    // if (item["Photo Name"])
    //   imgSource.src = "/data/people/profile photo/" + item["Photo Name"];
    // else imgSource.src = "/data/people/profile photo/avatar-placeholder.png";
    // imgContainer.appendChild(imgSource);

    // personBox.appendChild(imgContainer);

    // personBox.id = `person_${ind}`;

    // <div class="nav__item" style="width: auto; display: flex; flex-direction: column; gap: 0px; user-select: none; cursor: pointer;">
    //   <div class="text-base">Hyunjun Kim</div>
    //   <div class="text-xs">professor</div>
    // </div>

    var textContainer = document.createElement("div");
    textContainer.id = `person_${ind}`;
    textContainer.classList.add("nav__item");
    textContainer.style.width = "auto";
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.gap = "0px";
    textContainer.style.userSelect = "none";
    textContainer.style.cursor = "pointer";

    var personName = document.createElement("div");
    personName.classList.add("text__name", "text-base");
    personName.innerHTML += item["Name\n(English)"];

    var personTitle = document.createElement("div");
    personTitle.classList.add("text__position", "text-xs");
    personTitle.innerHTML +=
      item["Title\n(Undergraduate, Graduate, Professor, etc.)"];

    textContainer.appendChild(personName);
    textContainer.appendChild(personTitle);

    let _ind = ind;
    console.log(_ind);
    textContainer.onclick = () => {
      selectIdx(_ind);
    };

    people.appendChild(textContainer);

    var detailsOutBox = document.createElement("div");
    detailsOutBox.classList.add(`details_${ind}`, "hidden");
    detailsOutBox.id = `details_${ind}`;

    // <div class="flex flex-col">
    //   <img style="width: 168px; aspect-ratio: 3 / 4;">
    // </div>

    // <div class="details flex flex-col" style="width: 100%; flex: 1; gap: 52px;">
    //   <div style="width: auto; display: flex; flex-direction: column; gap: 4px; user-select: none; cursor: pointer;">
    //     <div class="text-xl font-semibold">Hyunjun Kim</div>
    //     <div class="text-base">professor</div>
    //   </div>

    //   <div class="contact flex flex-col" style="width: 100%; gap: 8px;">
    //     <div class="font-semibold text-sm">Contact</div>
    //     <div class="contact flex flex-col" style="width: 100%; gap: 4px;">
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">tel</div>
    //         <div class="text-sm" style="">000-0000-0000</div>
    //       </div>
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">email</div>
    //         <div class="text-sm" style="">aaa@aaaaa.com</div>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="Education flex flex-col" style="width: 100%; gap: 8px;">
    //     <div class="font-semibold text-sm">Education</div>
    //     <div class="contact flex flex-col" style="width: 100%; gap: 4px;">
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">2010</div>
    //         <div class="text-sm" style="">동경대학교 사회기반학과 박사</div>
    //       </div>
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">2010</div>
    //         <div class="text-sm" style="">동경대학교 사회기반학과 박사</div>
    //       </div>
    //     </div>
        
    //   </div>

    //   <div class="Career flex flex-col" style="width: 100%; gap: 8px;">
    //     <div class="font-semibold text-sm">Career</div>
    //     <div class="contact flex flex-col" style="width: 100%; gap: 4px;">
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">2012-2021</div>
    //         <div class="text-sm" style="">일본 동경대학교 사회기반학과/생산기술연구소 조교수/부교수</div>
    //       </div>
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">2012-2021</div>
    //         <div class="text-sm" style="">일본 동경대학교 사회기반학과/생산기술연구소 조교수/부교수</div>
    //       </div>
    //     </div>
        
    //   </div>

    //   <div class="Award flex flex-col" style="width: 100%; gap: 8px;">
    //     <div class="font-semibold text-sm">Award</div>
    //     <div class="contact flex flex-col" style="width: 100%; gap: 4px;">
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">2021</div>
    //         <div class="text-sm" style="">한국과학기술원 인문사회융합과학대학 연구혁신 우수상</div>
    //       </div>
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">2021</div>
    //         <div class="text-sm" style="">한국과학기술원 인문사회융합과학대학 연구혁신 우수상</div>
    //       </div>
    //     </div>
        
    //   </div>

    //   <div class="Project flex flex-col" style="width: 100%; gap: 8px;">
    //     <div class="font-semibold text-sm">Project</div>
    //     <div class="contact flex flex-col" style="width: 100%; gap: 4px;">
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">2021-2030</div>
    //         <div class="text-sm" style="">한국연구재단 해외우수과학자유치사업Plus 사업 “적응형 미래전략 수립을 위한 빅데이터-물리모델 융합 프레임워크의 개발”</div>
    //       </div>
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px; flex-shrink: 0;">2021-2030</div>
    //         <div class="text-sm" style="">한국연구재단 해외우수과학자유치사업Plus 사업 “적응형 미래전략 수립을 위한 빅데이터-물리모델 융합 프레임워크의 개발”</div>
    //       </div>
    //     </div>
        
    //   </div>

    //   <div class="Paper flex flex-col" style="width: 100%; gap: 8px;">
    //     <div class="font-semibold text-sm">Paper</div>
    //     <div class="contact flex flex-col" style="width: 100%; gap: 4px;">
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px;">2022</div>
    //         <div class="text-sm" style="">The timing of unprecedented hydrological drought under climate change, Nature Communications</div>
    //       </div>
    //       <div class="flex flex-row" style="gap: 24px;">
    //         <div class="text-sm" style="width: 72px;">2022</div>
    //         <div class="text-sm" style="">The timing of unprecedented hydrological drought under climate change, Nature Communications</div>
    //       </div>
    //     </div>
        
    //   </div>
    // </div>

    // Contacts
    var imgSource = document.createElement("img");
    imgSource.classList.add(
      "h-64",
      "w-48",
      "object-cover",
      "rounded-2xl",
      "border",
      "border-solid",
      "border-slate-300"
    );
    if (item["Photo Name"])
      imgSource.src = "/data/people/profile photo/" + item["Photo Name"];
    else imgSource.src = "/data/people/profile photo/avatar-placeholder.png";

    
    var [detailsBox, detailsInfo] = createDetailBox("Contacts");

    detailsOutBox.appendChild(imgSource);

    var subdetailsInfo = initiateSubDetails("tel", item["Phone"]);
    detailsInfo.appendChild(subdetailsInfo);
    subdetailsInfo = initiateSubDetails("email", item["Email"]);
    detailsInfo.appendChild(subdetailsInfo);

    detailsBox.appendChild(detailsInfo);
    detailsOutBox.appendChild(detailsBox);

    // Education
    if (item["Education"]) {
      detailsBox = createDetailSection(item, "Education");
      detailsOutBox.appendChild(detailsBox);
    }

    // Career
    if (item["Career"]) {
      detailsBox = createDetailSection(item, "Career");
      detailsOutBox.appendChild(detailsBox);
    }

    // Award
    if (item["Award"]) {
      detailsBox = createDetailSection(item, "Award");
      detailsOutBox.appendChild(detailsBox);
    }

    // Project
    if (item["Project"]) {
      detailsBox = createDetailSection(item, "Project");
      detailsOutBox.appendChild(detailsBox);
    }

    // Paper
    if (item["Paper"]) {
      detailsBox = createDetailSection(item, "Paper");
      detailsOutBox.appendChild(detailsBox);
    }

    // append all to document
    const details = document.getElementById("details");
    details.appendChild(detailsOutBox);

    ind += 1;
  }

  var persons = document.getElementsByClassName("person__box");
  console.log(arr);
  for (var i = 0; i < persons.length; i++) {
    let ind = persons.item(i).id;
    ind = ind.split("_")[1];
    persons.item(i).addEventListener("click", function (event) {
      if (details.classList.contains("hidden")) {
        // show profile
        details.classList.remove("hidden");
        var text = document.getElementById(`details_${ind}`);
        text = text.cloneNode(true);
        text.classList.remove("hidden");
        // details.innerHTML = "";
        console.log(ind);
        // detailsText.appendChild(text);

        detailsText.replaceChildren(text);
      } else {
        // hide profile
        details.classList.add("hidden");
      }
    });
  }
}

data = fetchJson();
