class SearchView {
  _parentEl = document.querySelector(".search");
  _searchField = this._parentEl.querySelector(".search__field");

  getQuery() {
    const query = this._searchField.value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._searchField.value = "";
    this._searchField.blur();
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
