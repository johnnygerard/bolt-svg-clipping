export function createCodeBlock(code) {
  const escapedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return `
    <pre class="code-block"><code>${escapedCode}</code></pre>
  `;
}