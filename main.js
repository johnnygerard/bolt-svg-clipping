import './style.css'
import { createHeader } from './src/components/Header.js'
import { createSvgDemo } from './src/components/SvgDemo.js'
import { createCredits } from './src/components/Credits.js'

document.querySelector('#app').innerHTML = `
  <div>
    ${createHeader()}
    <div class="comparison-container">
      ${createSvgDemo()}
    </div>
    ${createCredits()}
  </div>
`