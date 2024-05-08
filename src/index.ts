// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';

import { createGrid, drawPixel, erasePixel, resetCanvas } from './dom-utils';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const sizeEl = document.querySelector('.size') as HTMLInputElement;
    const resetButton = document.querySelector('.reset') as HTMLButtonElement;
    const colorPicker = document.querySelector('.color') as HTMLInputElement;
    const resizeButton = document.querySelector('.resize-button') as HTMLButtonElement;
    const penButton = document.querySelector('.pen') as HTMLButtonElement;
    const eraseButton = document.querySelector('.erase') as HTMLButtonElement;

    let size = parseInt(sizeEl.value);
    let currentColor = colorPicker.value;
    let isErasing = false;

    createGrid(canvas, size);

    resetButton.addEventListener('click', () => {
        resetCanvas(canvas, size);
        isErasing = false;
        penButton.disabled = false;
        eraseButton.disabled = false;
    });

    canvas.addEventListener('mousemove', (event) => {
        const x = Math.floor(event.offsetX / 20); // 20 = pixelSize
        const y = Math.floor(event.offsetY / 20); // 20 = pixelSize
        if (event.buttons === 1) { // Linker Mausklick
            if (!isErasing) {
                drawPixel(canvas, x, y, currentColor, size);
            } else {
                erasePixel(canvas, x, y, size);
            }
        }
    });

    colorPicker.addEventListener('input', () => {
        currentColor = colorPicker.value;
    });

    resizeButton.addEventListener('click', () => {
        size = parseInt(sizeEl.value);
        createGrid(canvas, size);
    });

    penButton.addEventListener('click', () => {
        isErasing = false;
        penButton.disabled = true;
        eraseButton.disabled = false;
    });

    eraseButton.addEventListener('click', () => {
        isErasing = true;
        eraseButton.disabled = true;
        penButton.disabled = false;
    });
});
