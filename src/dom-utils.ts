// Erstelle das Raster im Canvas
export function createGrid(canvas: HTMLCanvasElement, size: number): void {
  const context = canvas.getContext('2d');
  const backgroundColor = '#1A1A1A'; // Hintergrundfarbe des Canvas

  function drawGrid() {
      if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
          context.fillStyle = backgroundColor;
          context.fillRect(0, 0, canvas.width, canvas.height);

          const pixelSize = canvas.width / size;
          context.strokeStyle = '#2B2B2B'; // Setzt die Farbe des Rasters etwas dunkler
          context.lineWidth = 2; // Dicke der Raster Linien

          for (let x = 0; x <= canvas.width; x += pixelSize) {
              context.beginPath();
              context.moveTo(x, 0);
              context.lineTo(x, canvas.height);
              context.stroke();
          }
          for (let y = 0; y <= canvas.height; y += pixelSize) {
              context.beginPath();
              context.moveTo(0, y);
              context.lineTo(canvas.width, y);
              context.stroke();
          }
      }
  }

  drawGrid();

  canvas.addEventListener('change', () => {
      drawGrid();
  });
}

// Zeichne ein Pixel auf das Canvas
export function drawPixel(canvas: HTMLCanvasElement, x: number, y: number, color: string, size: number): void {
  const context = canvas.getContext('2d');
  const pixelSize = canvas.width / size; // Größe jedes Pixels im Raster

  if (context) {
      context.fillStyle = color;
      context.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);

       // Zeichne die Gitterlinien für das gelöschte Pixel neu
       context.strokeStyle = '#2B2B2B'; // Setzt die Farbe des Rasters etwas dunkler
       context.lineWidth = 2; // Dicke der Raster Linien
 
       context.beginPath();
       context.moveTo(x * pixelSize, 0);
       context.lineTo(x * pixelSize, canvas.height);
       context.stroke();
       context.beginPath();
       context.moveTo(0, y * pixelSize);
       context.lineTo(canvas.width, y * pixelSize);
       context.stroke();
  }
}

// Lösche ein Pixel vom Canvas
export function erasePixel(canvas: HTMLCanvasElement, x: number, y: number, size: number): void {
  const context = canvas.getContext('2d');
  const pixelSize = canvas.width / size; // Größe jedes Pixels im Raster

  if (context) {
      context.fillStyle = '#1A1A1A'; // Hintergrundfarbe des Canvas
      context.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      
      // Zeichne die Gitterlinien für das gelöschte Pixel neu
      context.strokeStyle = '#2B2B2B'; // Setzt die Farbe des Rasters etwas dunkler
      context.lineWidth = 2; // Dicke der Raster Linien

      context.beginPath();
      context.moveTo(x * pixelSize, 0);
      context.lineTo(x * pixelSize, canvas.height);
      context.stroke();
      context.beginPath();
      context.moveTo(0, y * pixelSize);
      context.lineTo(canvas.width, y * pixelSize);
      context.stroke();
  }
}

// Funktion zum Zurücksetzen des Canvas, inklusive des Rasters
export function resetCanvas(canvas: HTMLCanvasElement, size: number): void {
  createGrid(canvas, size);
}
