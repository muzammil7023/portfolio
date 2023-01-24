const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function () {

    const current = this.wordIndex % this.words.length;
    const fullText = this.words[current];
    let typeSpeed = 175;

    if (this.isDeleting) {
        this.txt = fullText.substring(0, this.txt.length - 1)
        typeSpeed /= 2;
    } else {
        this.txt = fullText.substring(0, this.txt.length + 1)
    }

    if (!this.isDeleting && this.txt === fullText) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 250;
    }

    this.txtElement.innerHTML = `<span class="text-cursor">${this.txt}</span>|`;

    setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}