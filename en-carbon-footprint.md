---
layout: page
title: "Carbon Footprint of Your Electricity"
permalink: /en/carbon-footprint/
---

<p class="site-intro">Convert your electricity use into carbon dioxide emissions. The emission factor depends on how electricity is generated in your country, so you can adjust it.</p>

<div class="calc-card calc-card-wide" id="tool-root" data-tool="carbon" data-lang="en">
  <div class="calc-row-fields">
    <div class="calc-mini"><span>Monthly usage (kWh)</span><input type="number" id="k-kwh" min="0" step="10" value="300"></div>
    <div class="calc-mini"><span>Emission factor (kg CO₂ per kWh)</span><input type="number" id="k-f" min="0" step="0.01" value="0.45"></div>
  </div>

  <div class="calc-result">
    <div><span>Emissions per month</span><strong id="o-mes">0 kg</strong></div>
    <div><span>Emissions per year</span><strong id="o-anio">0 t</strong></div>
  </div>

  <p class="calc-hint">The initial value (0.45) is only an order of magnitude for the world average. The real factor varies widely between countries and years depending on the generation mix: look up the official figure for your country or the one published by your supplier, and enter it here.</p>
</div>

<script src="{{ '/assets/calc-tools.js' | relative_url }}" defer></script>
