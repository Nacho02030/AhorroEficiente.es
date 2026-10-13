---
layout: page
title: "Ahorro con iluminación LED"
permalink: /iluminacion-led/
---

<p class="site-intro">Calcule cuánto ahorraría al sustituir bombillas antiguas por LED y en cuántos meses recuperaría la inversión. Funciona con cualquier moneda.</p>

<div class="calc-card calc-card-wide" id="tool-root" data-tool="lighting" data-lang="es">
  <div class="calc-row-fields">
    <div class="calc-mini"><span>Número de bombillas</span><input type="number" id="l-n" min="0" step="1" value="10"></div>
    <div class="calc-mini"><span>Potencia actual (W)</span><input type="number" id="l-w0" min="0" step="1" value="60"></div>
    <div class="calc-mini"><span>Potencia LED equivalente (W)</span><input type="number" id="l-w1" min="0" step="1" value="9"></div>
  </div>
  <div class="calc-row-fields">
    <div class="calc-mini"><span>Horas de uso al día</span><input type="number" id="l-h" min="0" max="24" step="0.5" value="4"></div>
    <div class="calc-mini"><span>Precio por kWh</span><input type="number" id="l-p" min="0" step="0.01" value="0.17"></div>
    <div class="calc-mini"><span>Coste de cada bombilla LED</span><input type="number" id="l-c" min="0" step="0.5" value="3"></div>
  </div>

  <div class="calc-result calc-result-4">
    <div><span>Energía ahorrada / año</span><strong id="o-kwh">0 kWh</strong></div>
    <div><span>Ahorro / año</span><strong id="o-ahorro">0,00</strong></div>
    <div><span>Inversión</span><strong id="o-inv">0,00</strong></div>
    <div><span>Amortización</span><strong id="o-pay">—</strong></div>
  </div>

  <p class="calc-hint">Los valores iniciales son un ejemplo orientativo; sustitúyalos por los de su caso. El cálculo no incluye la vida útil de las bombillas, que en el caso de las LED suele ser muy superior.</p>
</div>

<script src="{{ '/assets/calc-tools.js' | relative_url }}" defer></script>
