import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  addHandlerBookmark(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkUp() {
    const markup = this._data
      .map(rec => previewView.render(rec, false))
      .join('');
    return markup;
  }
}

export default new BookmarksView();
