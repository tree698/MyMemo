import { BaseComponent } from '../../component.js';
import { TextData } from '../dialog.js';

export class TextInputComponent extends BaseComponent<HTMLElement>
  implements TextData {
  constructor() {
    super(`<div class="text__form">
            <div class="form__title">
                <label for="title">Title</label>
                <input type="text" id="title" />
            </div>
            <div class="form__url">
                <label for="url">URL</label>
                <input type="text" id="url" />
            </div>
            <div class="form__summary">
                <label for="summary">Summary</label>
                <textarea id="summary" rows="2"></textarea>
            </div>
        </div>`);
  }

  get title(): string {
    const title = this.element.querySelector('#title')! as HTMLInputElement;
    return title.value;
  }

  get summary(): string {
    const summary = this.element.querySelector('#summary')! as HTMLInputElement;
    return summary.value;
  }

  get url(): string {
    const url = this.element.querySelector('#url')! as HTMLInputElement;
    return url.value;
  }
}
