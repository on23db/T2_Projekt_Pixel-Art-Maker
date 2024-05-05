//Zeigt die Pixel auf dem Bildschirm an
export function PixelGrid(container: HTMLElement, size: number): void {
    container.style.setProperty('--size', size.toString());
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('pixel');
  
      container.appendChild(div);
    }
  }