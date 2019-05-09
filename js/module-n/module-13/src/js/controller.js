export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.on("add", this.addUrl.bind(this));
    this.view.on("remove", this.removeUrl.bind(this));
    this.view.on("LocalStor", this.localStorUrl.bind(this));
  }

  addUrl(url) {
    const arr = this.model.addUrl(url);
    this.view.makeMarkUp(arr);
  }

  removeUrl(e) {
    this.model.removeUrl(e);
    this.view.removeUrl(e);
  }

  localStorUrl() {
    const localStorageArr = this.model.loadUrl();
    this.view.loadUrl(localStorageArr);
  }
}
