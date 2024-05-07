// Erstelle das Raster im Canvas mit dunklerem Hintergrund und dunkleren Zwischenräumen
export function createGrid(canvas: HTMLCanvasElement, size: number): void {
  const context = canvas.getContext('2d');
  const pixelSize = 20; // Größe jedes Pixels im Raster
  
  // Dunklere Farbe für das Raster
  const backgroundColor = '#1A1A1A'; // Hintergrundfarbe des Canvas

  // Funktion zum Zeichnen des Rasters und Einfärben der Zwischenräume
  function drawGrid() {
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        // Hintergrund einfärben
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Dunklere Farbe für das Raster
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

// Funktion zum Zurücksetzen des Canvas, inklusive des Rasters
export function resetCanvas(canvas: HTMLCanvasElement, size: number): void {
  const context = canvas.getContext('2d');
  
  if (context) {
    // Lösche den gesamten Inhalt des Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Erstelle das Raster erneut
    createGrid(canvas, size);
  }
}
