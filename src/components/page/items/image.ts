import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
            <div class="image__holder">
              <a class="image__link" target="_blank">
                <img class="image__thumbnail">
              </a>
            </div>
            <div class="image__description">
              <div>Image 🎉</div>
              <p class="image__title"></p>
            </div>
          </section>
    `);

    const imageTitle = this.element.querySelector(
      '.image__title'
    )! as HTMLParagraphElement;
    imageTitle.textContent = title;

    const imageSrc = this.element.querySelector(
      '.image__thumbnail'
    )! as HTMLImageElement;
    imageSrc.alt = title;
    imageSrc.src = url;

    const imageLink = this.element.querySelector(
      '.image__link'
    )! as HTMLAnchorElement;
    imageLink.href = url;
  }
}
