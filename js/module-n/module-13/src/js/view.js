import * as Handlebars from "./handlebars-v4.1.1";
import { EventEmitter } from "events";

export default class Veiw extends EventEmitter {
  constructor() {
    super();
    this.urlList = document.querySelector(".url-list");
    this.sourse = document.querySelector(".template").innerHTML.trim();
    this.template = Handlebars.compile(this.sourse);
    this.form = document.querySelector(".form");
    this.input = this.form.querySelector("#input");

    this.urlList.addEventListener("click", this.handleRemove.bind(this));
    this.form.addEventListener("submit", this.handleAdd.bind(this));
    document.addEventListener("DOMContentLoaded", this.onLocalStor.bind(this));
  }

  handleAdd(e) {
    e.preventDefault();

    const { value } = this.input;
    if (value === "") return;

    this.emit("add", value);
  }

  makeMarkUp(arr) {
    this.urlList.innerHTML = "";

    let markUp = arr.reduce((acc, url) => acc + this.template(url), "");

    this.urlList.insertAdjacentHTML("afterbegin", markUp);
    this.form.reset();
  }

  handleRemove(e) {
    e.preventDefault();
    if (e.target.classList.value === "button") {
      this.emit("remove", e);
    }
  }
  
  onLocalStor() {
    this.emit("LocalStor");
  }
  removeUrl(e) {
    e.target.parentNode.remove();
  }

  loadUrl(arr) {
    this.makeMarkUp(arr);
  }
}
