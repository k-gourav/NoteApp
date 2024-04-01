const arrow = document.querySelector("#btn");
const filterBody = document.getElementsByClassName("filterBody");

// COLLAPSE AND EXPAND FEATURE
const toggleArrow = () => {
  if (filterBody[0].style.display == "flex") {
    filterBody[0].style.display = "none";
  } else {
    filterBody[0].style.display = "flex";
  }
};
arrow.addEventListener("click", toggleArrow);

// DO NOTE FEATURE
const doList = document.querySelector(".taskMainDo");
const doingList = document.querySelector(".taskMainDoing");
const doneList = document.querySelector(".taskMainDone");
const doCount = document.querySelector('.doCount');
const doingCount = document.querySelector('.doingCount');
const doneCount = document.querySelector('.doneCount');
const pendingTasks = document.querySelector('#pendingTasks')
const doNoteText = [
  {
    isChecked: false,
    text: `Create a project, call it "Bucket List" and enter things I want to do once things get better`,
    isStarred: false,
  },
  {
    isChecked: false,
    text: `Figure out what Rapunzel did while she was quarantined in a castle 🏰`,
    isStarred: false,
  },
  {
    isChecked: false,
    text: `Giveaway your old clothes to charity`,
    isStarred: false,
  },
  {
    isChecked: false,
    text: `Read a book 📖`,
    isStarred: false,
  },
  {
    isChecked: true,
    text: `Try meditating once`,
    isStarred: false,
  },
  {
    isChecked: false,
    text: `Video call 3 friends I've not spoken to in a long time`,
    isStarred: false,
  },
];
doCount.innerText = doNoteText.length
const doingNoteText = [
    {
      isChecked: true,
      text: `Create a shared project with someone dear to me consisting of tasks the both of us want to complete this year`,
      isStarred: false,
    },
    {
      isChecked: true,
      text: `Get a quarantine hair cut`,
      isStarred: true,
    },
];
doingCount.innerText = doingNoteText.length
const doneNoteText = [
    {
      isChecked: false,
      text: `Try out yoga once 🧘‍♂️🧘‍♀️`,
      isStarred: true,
    },
];
doneCount.innerText = doneNoteText.length
pendingTasks.innerText = doNoteText.length + doingNoteText.length
function insertElement(element,item){
    element.innerHTML += `<div class="taskBody">
    <div class="taskText">
      <input ${item.isChecked ? "checked": ""} type="checkbox" name="list"/ >
      <p class="doTaskList"> ${item.text} </p>
    </div>
    <button>
      <img class="star" src=${item.isStarred ? "./assets/star.png": "./assets/unstar.png"} alt="star icon"/>
    </button>
  </div>`;
}
doNoteText.forEach(function (item) {
    insertElement(doList, item)
});
doingNoteText.forEach(function (item){
    insertElement(doingList, item)
})
doneNoteText.forEach(function(item){
    insertElement(doneList, item)
})


