import { SVG_WIDTH, SVG_HEIGHT, IMAGE_URL } from '../constants.js';
import { createCodeBlock } from './CodeBlock.js';

export function createSvgDemo() {
  const basicSvgCode = `<svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}">
  <image
    href="${IMAGE_URL}"
    width="${SVG_WIDTH}"
    height="${SVG_HEIGHT}"
    preserveAspectRatio="xMidYMid slice"
  />
</svg>`;

  const clippedSvgCode = `<svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}">
  <defs>
    <clipPath id="circleClip">
      <circle cx="${SVG_WIDTH/2}" cy="${SVG_HEIGHT/2}" r="120" />
    </clipPath>
  </defs>
  <image
    href="${IMAGE_URL}"
    width="${SVG_WIDTH}"
    height="${SVG_HEIGHT}"
    preserveAspectRatio="xMidYMid slice"
    clip-path="url(#circleClip)"
  />
</svg>`;

  return `
    <div class="example">
      <svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}" viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}">
        <image
          href="${IMAGE_URL}"
          width="${SVG_WIDTH}"
          height="${SVG_HEIGHT}"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
      <p class="caption">Basic SVG Image Element</p>
      <p class="description">Using SVG's native &lt;image&gt; element to embed a raster image</p>
      ${createCodeBlock(basicSvgCode)}
    </div>
    <div class="example">
      <svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}" viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}">
        <defs>
          <clipPath id="circleClip">
            <circle cx="${SVG_WIDTH/2}" cy="${SVG_HEIGHT/2}" r="120" />
          </clipPath>
        </defs>
        <image
          href="${IMAGE_URL}"
          width="${SVG_WIDTH}"
          height="${SVG_HEIGHT}"
          preserveAspectRatio="xMidYMid slice"
          clip-path="url(#circleClip)"
        />
      </svg>
      <p class="caption">Clipped SVG Image</p>
      <p class="description">The same image with a circular clip-path applied</p>
      ${createCodeBlock(clippedSvgCode)}
    </div>
  `;
}