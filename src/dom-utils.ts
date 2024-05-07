// Erstelle das Raster im Canvas
export function createGrid(canvas: HTMLCanvasElement, size: number): void {
  const context = canvas.getContext('2d');
  const pixelSize = 20; // Größe jedes Pixels im Raster
  

  // Funktion zum Zeichnen des Rasters
  function drawGrid() {
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        context.strokeStyle = '#2B2B2B'; // Setze die Farbe des Rasters
        context.lineWidth = 1; // Setze die Dicke des Rasters
        

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

  // Initialisierung des Rasters
  drawGrid();

  // Event-Listener für Änderungen der Größe
  canvas.addEventListener('change', () => {
      size = parseInt(size.toString());
      drawGrid();
  });
}

// Zeichne ein Pixel auf das Canvas
export function drawPixel(canvas: HTMLCanvasElement, x: number, y: number, color: string): void {
  const context = canvas.getContext('2d');
  const pixelSize = 20; // Größe jedes Pixels im Raster

  if (context) {
    context.fillStyle = color;
    context.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
  }

  
}
