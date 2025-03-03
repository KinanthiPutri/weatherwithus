class Weather extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="tittle_section">Todays Weather</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="inputbox">
          <search-weather></search-weather>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="card_weather col-md-12-responsive">
        <div class="row weather-cards"></div>
      </div>
    </div>
  </div>

    `;
  }
}

customElements.define('current-weather', Weather);
