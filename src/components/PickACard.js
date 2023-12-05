const template = document.createElement('template')
template.innerHTML = `
  <style>
    /* your styles */
  </style>
  <span id="count"></span>
  
`


class MyCounter {
    /**
     * @param
     */
    constructor() {
      super()
      this.count = 0
      // open mode keeps all elements accessible to the outside world
      this.attachShadow({ mode: 'open' })
      this.
    }
    // ...
  }
  
  // tell the browser to use this class for all `<my-counter>` elements
  customElements.define('my-counter', MyCounter)
  