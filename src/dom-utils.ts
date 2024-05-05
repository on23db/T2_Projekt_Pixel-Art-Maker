//Zeigt die Pixel auf dem Bildschirm an
export function PixelGrid(container: HTMLElement, size: number): void {
    container.style.setProperty('--size', size.toString());
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('pixel');
  
      container.appendChild(div);
    }
  }

//Zeichnet auf die Pixel
export function Drawing(container: HTMLElement, color: HTMLInputElement, drawState: {draw: boolean}): void {
    container.addEventListener('mouseover', (event) => {
      if (drawState.draw) {
        const target = event.target as HTMLElement;
        if (target && target.classList.contains('pixel')) {
          target.style.backgroundColor = color.value;
        }
      }
    });
  
    container.addEventListener('mousedown', () => {
      drawState.draw = true;
    });
  
    window.addEventListener('mouseup', () => {
      drawState.draw = false;
    });
  }