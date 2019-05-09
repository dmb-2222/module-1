import { EventEmitter } from "events";
import { LOCALSTORAGE } from "./storage";

export default class Model extends EventEmitter {
  constructor(linksArr = []) {
    super();
    this.linksArr = linksArr;
  }

  addUrl(text) {
    if (!this.checkValue(text, this.linksArr)) {
      this.linksArr.unshift({ url: text });
      LOCALSTORAGE.set("linksArr", this.linksArr);
    } else {
      alert("Такая ссылка уже существует");
    }
    return this.linksArr;
  }

  checkValue(value, arr) {
    return arr.some(el => el.url === value);
  }
  loadUrl() {
    if (LOCALSTORAGE.get("linksArr") === undefined) return;
    this.linksArr = LOCALSTORAGE.get("linksArr");

    return this.linksArr;
  }

  removeUrl(e) {
    e.target.parentNode.remove();

    this.linksArr = this.linksArr.filter(
      el => el.url != e.target.previousElementSibling.innerText
    );
    LOCALSTORAGE.set("linksArr", this.linksArr);
  }


}
