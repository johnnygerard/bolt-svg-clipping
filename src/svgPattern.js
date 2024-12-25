export function createPattern(width, height, lineCount) {
  return Array.from({ length: lineCount }, (_, i) => `
    <line
      x1="0"
      y1="${i * (height / lineCount)}"
      x2="${width}"
      y2="${i * (height / lineCount)}"
      stroke="gold"
      stroke-width="2"
    />
  `).join('');
}