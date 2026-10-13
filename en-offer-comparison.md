---
layout: page
title: "Electricity Offer Comparison"
permalink: /en/offer-comparison/
---

<p class="site-intro">Enter the prices of two real offers and your monthly usage: the tool works out which one costs less. It works with any currency in any country, because you supply the figures for each offer.</p>

<div class="calc-card calc-card-wide" id="tool-root" data-tool="compare" data-lang="en">
  <div class="calc-row-fields">
    <div class="calc-mini"><span>Monthly usage (kWh)</span><input type="number" id="c-kwh" min="0" step="10" value="300"></div>
    <div class="calc-mini"><span>% of usage at off-peak times</span><input type="number" id="c-valle" min="0" max="100" step="5" value="0"></div>
  </div>

  <div class="calc-row">
    <div class="calc-row-top"><strong>Offer A</strong></div>
    <div class="calc-row-fields">
      <div class="calc-mini"><span>Price per kWh (peak)</span><input type="number" id="a-p" min="0" step="0.001" value="0.14"></div>
      <div class="calc-mini"><span>Price per kWh (off-peak, optional)</span><input type="number" id="a-v" min="0" step="0.001" value=""></div>
      <div class="calc-mini"><span>Fixed monthly charge</span><input type="number" id="a-f" min="0" step="0.01" value="6"></div>
    </div>
  </div>

  <div class="calc-row">
    <div class="calc-row-top"><strong>Offer B</strong></div>
    <div class="calc-row-fields">
      <div class="calc-mini"><span>Price per kWh (peak)</span><input type="number" id="b-p" min="0" step="0.001" value="0.18"></div>
      <div class="calc-mini"><span>Price per kWh (off-peak, optional)</span><input type="number" id="b-v" min="0" step="0.001" value="0.08"></div>
      <div class="calc-mini"><span>Fixed monthly charge</span><input type="number" id="b-f" min="0" step="0.01" value="4"></div>
    </div>
  </div>

  <div class="calc-result calc-result-4">
    <div><span>Offer A / month</span><strong id="o-a">0.00</strong></div>
    <div><span>Offer B / month</span><strong id="o-b">0.00</strong></div>
    <div><span>Difference / month</span><strong id="o-diff">0.00</strong></div>
    <div><span>Difference / year</span><strong id="o-year">0.00</strong></div>
  </div>
  <p class="calc-hint"><strong id="o-win"></strong></p>

  <p class="calc-hint">The initial values are an example: replace them with those of your own offers. If an offer has no off-peak rate, leave that field empty. The fixed charge should include any capacity or standing charge; taxes and other bill items are not included unless you add them to these figures.</p>
</div>

<script src="{{ '/assets/calc-tools.js' | relative_url }}" defer></script>
