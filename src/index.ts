// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';


//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE

// Importiert die Funktion PixelGrid aus der Datei dom-utils.ts
import { PixelGrid } from './dom-utils';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container') as HTMLElement;
  const sizeEl = document.querySelector('.size') as HTMLInputElement;
  const resetButton = document.querySelector('.btn') as HTMLButtonElement;

  let size = parseInt(sizeEl.value);

  PixelGrid(container, size);
});