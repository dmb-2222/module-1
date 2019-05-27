let tabaAvailable = 6;
let SharmAvailable = 15;
let HurgadaAvailable = 25;
let amount = prompt("Сколько мест вам нужно?");

if (amount === null) {
  alert("Нам очень жаль, приходите еще!");
} else if (Number(amount) !== Number.parseInt(amount) || amount < 0) {
  alert("Ошибка ввода");
} else if (amount <= tabaAvailable) {
  let yes = confirm("Есть места в группе Таба, вы согласны?");
  {
    if (yes) {
      alert("Приятного путешествия в группе Taба");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  }
} else if (amount <= SharmAvailable) {
  let yes = confirm("Есть места в группе Шарм, вы согласны?");
  {
    if (yes) {
      alert("Приятного путешествия в группе Шарм");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  }
} else if (amount <= HurgadaAvailable) {
  let yes = confirm("Есть места в группе Хургада, вы согласны?");
  {
    if (yes) {
      alert("Приятного путешествия в группе Хургада");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  }
} else {
  alert("Извините, столько мест нет ни в одной группе!");
}
