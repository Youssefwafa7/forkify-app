import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errMessage = `No recipes found for your query! Please try again ;)`;
  _generateMarkUp() {
    const markup = this._data
      .map(rec => previewView.render(rec, false))
      .join('');
    return markup;
  }
}

export default new ResultsView();
