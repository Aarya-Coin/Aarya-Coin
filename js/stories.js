
    const storyCards = document.querySelectorAll('.story-card');
const modalTemplate = `
  <div class="modal">
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <img class="modal-image" src="">
      <h2 class="modal-title"></h2>
      <div class="modal-content-body"></div>
    </div>
  </div>
`;

storyCards.forEach(function (storyCard) {
  storyCard.addEventListener('click', function () {
    const modal = document.createElement('div');
    modal.innerHTML = modalTemplate;

    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalParagraphs = modal.querySelector('.modal-content-body');
    const modalClose = modal.querySelector('.modal-close');

    const imageSrc = storyCard.querySelector('img').getAttribute('src');
    const title = storyCard.querySelector('h2').textContent;
    const paragraphs = storyCard.querySelectorAll('.truncatePara');

    modalImage.setAttribute('src', imageSrc);
    modalTitle.textContent = title;

    paragraphs.forEach(function (paragraph) {
      const clonedParagraph = paragraph.cloneNode(true);
      clonedParagraph.classList.remove('truncatePara');
      clonedParagraph.classList.add('modal-paragraphs');
      modalParagraphs.appendChild(clonedParagraph);
    });

    document.body.appendChild(modal);
    const modalMain = document.querySelector('.modal');

    modalMain.addEventListener('click', function (event) {
      if (event.target === modalMain || event.target === modalClose) {
        modal.remove();
      }
    });
  });
});
