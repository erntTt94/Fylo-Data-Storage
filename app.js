const slider = document.querySelector(".slider")
const showData = document.querySelector('h1');
const usedData = document.querySelector('p > span')
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, #25a18e 0%, #e63946 ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, rgba(53, 92, 125, 1) 100%)`;

slider.addEventListener('input', function () {
    this.style.background = `linear-gradient(to right, #25a18e 0%, #e63946 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, rgba(53, 92, 125, 1) 100%)`
    showData.innerHTML = `${1000 - this.value}<span>GB LEFT</span>`;
    usedData.textContent = `${slider.value} GB`;
});

