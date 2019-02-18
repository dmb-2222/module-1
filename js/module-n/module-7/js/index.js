"user strict";
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

// select body
let body = document.querySelector("body");
const createPostCard = function(obj) {
  // craete element HTML
  let cardFilms = document.createElement("div");
  let imgCard = document.createElement("img");
  let movieBodyDiv = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let movieDateP = document.createElement("p");
  let movieRating = document.createElement("p");

  // classes
  cardFilms.classList.add("movie");
  imgCard.classList.add("movie__image");
  movieBodyDiv.classList.add("movie__body");
  h2.classList.add("movie__title");
  p.classList.add("movie__description");
  movieDateP.classList.add("movie__date");
  movieRating.classList.add("movie__rating");
  // attribute
  imgCard.setAttribute("src", obj.img);
  imgCard.setAttribute("alt", "movie image");

  //text content
  h2.textContent = obj.title;
  p.textContent = obj.text;
  movieDateP.textContent = "Released: 1972-03-14";
  movieRating.textContent = "Released: 1972-03-14";

  // paste el to html
  body.append(cardFilms);
  cardFilms.append(imgCard);
  cardFilms.append(movieBodyDiv);
  movieBodyDiv.append(h2);
  movieBodyDiv.append(p);
  movieBodyDiv.append(movieDateP);
  movieBodyDiv.append(movieRating);
  return cardFilms;
};

const createCards = function(posts) {
  for (let obj of posts) {
    body.append(createPostCard(obj));
  }
};
createCards(posts);
