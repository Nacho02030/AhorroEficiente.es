---
layout: page
title: "LED Lighting Savings"
permalink: /en/led-savings/
---

<p class="site-intro">Work out how much you would save by replacing old bulbs with LED, and how many months it takes to recover the investment. Works with any currency.</p>

<div class="calc-card calc-card-wide" id="tool-root" data-tool="lighting" data-lang="en">
  <div class="calc-row-fields">
    <div class="calc-mini"><span>Number of bulbs</span><input type="number" id="l-n" min="0" step="1" value="10"></div>
    <div class="calc-mini"><span>Current wattage (W)</span><input type="number" id="l-w0" min="0" step="1" value="60"></div>
    <div class="calc-mini"><span>Equivalent LED wattage (W)</span><input type="number" id="l-w1" min="0" step="1" value="9"></div>
  </div>
  <div class="calc-row-fields">
    <div class="calc-mini"><span>Hours used per day</span><input type="number" id="l-h" min="0" max="24" step="0.5" value="4"></div>
    <div class="calc-mini"><span>Price per kWh</span><input type="number" id="l-p" min="0" step="0.01" value="0.17"></div>
    <div class="calc-mini"><span>Cost of each LED bulb</span><input type="number" id="l-c" min="0" step="0.5" value="3"></div>
  </div>

  <div class="calc-result calc-result-4">
    <div><span>Energy saved / year</span><strong id="o-kwh">0 kWh</strong></div>
    <div><span>Savings / year</span><strong id="o-ahorro">0.00</strong></div>
    <div><span>Investment</span><strong id="o-inv">0.00</strong></div>
    <div><span>Payback</span><strong id="o-pay">—</strong></div>
  </div>

  <p class="calc-hint">The initial values are an indicative example; replace them with your own. The calculation does not include bulb lifespan, which for LEDs is usually far longer.</p>
</div>

<script src="{{ '/assets/calc-tools.js' | relative_url }}" defer></script>
