function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

function removeClass(id, className) {
  document.getElementById(id).classList.remove(className);
}
function addClass(id, className) {
  document.getElementById(id).classList.add(className);
}
const checkClass = function (id, className) {
  return document.getElementById(id).classList.contains(className);
};

function checkInput(weight, diary, feelings) {
  const userWeight = trim(weight) !== "";
  const userDiary = trim(diary) !== "";
  const userfeelings = feelings !== null;

  if (userWeight && userDiary && userfeelings) {
    // axios 전송
    removeClass("weight", "nothing");
    removeClass("diary", "nothing");
    removeClass("feelings", "nothing");
    console.log("성공 짝짝");
  } else {
    switch (userWeight) {
      case false:
        addClass("weight", "nothing");
        break;
      case true:
        if (checkClass("weight", "nothing")) {
          removeClass("weight", "nothing");
        }
        break;
    }
    switch (userDiary) {
      case false:
        addClass("diary", "nothing");
        break;
      case true:
        if (checkClass("diary", "nothing")) {
          removeClass("diary", "nothing");
        }
        break;
    }
    switch (userfeelings) {
      case false:
        addClass("feelings", "nothing");
        break;
      case true:
        if (checkClass("feelings", "nothing")) {
          removeClass("feelings", "nothing");
        }
        break;
    }
  }
}

export default checkInput;
