---
layout: page
title: "Comparador de ofertas eléctricas"
permalink: /comparador-ofertas/
---

<p class="site-intro">Introduzca los precios de dos ofertas reales y su consumo mensual: la herramienta calcula cuál resulta más económica. Funciona con cualquier moneda y en cualquier país, porque usted aporta los datos de cada oferta.</p>

<div class="calc-card calc-card-wide" id="tool-root" data-tool="compare" data-lang="es">
  <div class="calc-row-fields">
    <div class="calc-mini"><span>Consumo mensual (kWh)</span><input type="number" id="c-kwh" min="0" step="10" value="300"></div>
    <div class="calc-mini"><span>% del consumo en horas valle</span><input type="number" id="c-valle" min="0" max="100" step="5" value="0"></div>
  </div>

  <div class="calc-row">
    <div class="calc-row-top"><strong>Oferta A</strong></div>
    <div class="calc-row-fields">
      <div class="calc-mini"><span>Precio kWh (punta)</span><input type="number" id="a-p" min="0" step="0.001" value="0.14"></div>
      <div class="calc-mini"><span>Precio kWh (valle, opcional)</span><input type="number" id="a-v" min="0" step="0.001" value=""></div>
      <div class="calc-mini"><span>Término fijo mensual</span><input type="number" id="a-f" min="0" step="0.01" value="6"></div>
    </div>
  </div>

  <div class="calc-row">
    <div class="calc-row-top"><strong>Oferta B</strong></div>
    <div class="calc-row-fields">
      <div class="calc-mini"><span>Precio kWh (punta)</span><input type="number" id="b-p" min="0" step="0.001" value="0.18"></div>
      <div class="calc-mini"><span>Precio kWh (valle, opcional)</span><input type="number" id="b-v" min="0" step="0.001" value="0.08"></div>
      <div class="calc-mini"><span>Término fijo mensual</span><input type="number" id="b-f" min="0" step="0.01" value="4"></div>
    </div>
  </div>

  <div class="calc-result calc-result-4">
    <div><span>Oferta A / mes</span><strong id="o-a">0,00</strong></div>
    <div><span>Oferta B / mes</span><strong id="o-b">0,00</strong></div>
    <div><span>Diferencia / mes</span><strong id="o-diff">0,00</strong></div>
    <div><span>Diferencia / año</span><strong id="o-year">0,00</strong></div>
  </div>
  <p class="calc-hint"><strong id="o-win"></strong></p>

  <p class="calc-hint">Los valores iniciales son un ejemplo: sustitúyalos por los de sus ofertas. Si una oferta no distingue horas, deje vacío su precio de valle. El término fijo debe incluir la potencia contratada y cualquier cuota mensual; el cálculo no incluye impuestos ni otros conceptos de la factura, salvo que los incorpore usted a esas cifras.</p>
</div>

<script src="{{ '/assets/calc-tools.js' | relative_url }}" defer></script>
