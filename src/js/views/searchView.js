import View from './View.js';
class SearchView extends View {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
}
export default new SearchView();
