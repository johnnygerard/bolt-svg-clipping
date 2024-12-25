export function createImageDemo(imageUrl) {
  return `
    <div class="example">
      <h2>Original Image</h2>
      <img src="${imageUrl}" alt="Sample image" class="demo-image" />
    </div>
    <div class="example">
      <h2>Clipped Image</h2>
      <div class="clipped-container">
        <img src="${imageUrl}" alt="Clipped sample image" class="demo-image clipped" />
      </div>
    </div>
  `;
}