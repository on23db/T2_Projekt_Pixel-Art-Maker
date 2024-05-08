// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';

import { createGrid, drawPixel, resetCanvas } from './dom-utils';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const sizeEl = document.querySelector('.size') as HTMLInputElement;
    const resetButton = document.querySelector('.reset') as HTMLButtonElement;
    const colorPicker = document.querySelector('.color') as HTMLInputElement;
    const resizeButton = document.querySelector('.resize-button') as HTMLButtonElement;

    let size = parseInt(sizeEl.value);
    let currentColor = colorPicker.value;

    // Erstelle das Raster
    createGrid(canvas, size);

    // Event-Listener für den Reset-Button
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        resetCanvas(canvas, size);
      });
    }

    // Event-Listener zum Zeichnen auf das Canvas
    canvas.addEventListener('mousemove', (event) => {
      const x = Math.floor(event.offsetX / 20); // 20 = pixelSize
      const y = Math.floor(event.offsetY / 20); // 20 = pixelSize
      const context = canvas.getContext('2d');
      if (context && event.buttons === 1) { // Linker Mausklick
        drawPixel(canvas, x, y, currentColor, size); // Setzt die Farbe des Pixels
      }
    });

    // Event-Listener für den Color Picker
    colorPicker.addEventListener('input', () => {
        currentColor = colorPicker.value;
    });

    // Event-Listener für den Resize-Button
    if (resizeButton) {
      resizeButton.addEventListener('click', () => {
        size = parseInt(sizeEl.value);
        createGrid(canvas, size);
      });
    }
});
