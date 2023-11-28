
const distanceSelector = document.querySelector('.distance-selector');
const line = document.querySelector('.line');
const arrow = document.querySelector('.arrow');
let isDragging = false;
let startX = 0;
let arrowStartX = 0;

arrow.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    arrowStartX = arrow.offsetLeft;
});

distanceSelector.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const minX = distanceSelector.offsetLeft;
        const maxX = distanceSelector.offsetWidth + minX;
        const moveX = event.clientX - startX;
        const newArrowX = arrowStartX + moveX;

        if (newArrowX >= minX && newArrowX <= maxX) {
            arrow.style.left = `${newArrowX}px`;
        }
    }
});

distanceSelector.addEventListener('click', (event) => {
    const clickX = event.clientX - distanceSelector.getBoundingClientRect().left;
    const lineLength = distanceSelector.offsetWidth;
    const arrowPosition = (clickX / lineLength) * 100;

    arrow.style.left = `${arrowPosition}%`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
