import View from './View.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkUp() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (curPage === 1 && numPages > 1) return this._generateNextMarkUp(2);
    if (curPage === 1 && numPages === 1) return '';
    if (curPage === numPages) return this._generatePrevMarkUp(numPages - 1);
    if (curPage !== 1 && numPages > 1)
      return `${this._generatePrevMarkUp(
        curPage - 1
      )}${this._generateNextMarkUp(curPage + 1)}`;
  }

  _generatePrevMarkUp(page) {
    return `<button data-goto ="${page}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page}</span>
          </button>`;
  }
  _generateNextMarkUp(page) {
    return `<button data-goto ="${page}" class="btn--inline pagination__btn--next">
            <span>Page ${page}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
  }
}

export default new PaginationView();
