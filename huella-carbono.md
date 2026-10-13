---
layout: page
title: "Huella de carbono de su electricidad"
permalink: /huella-carbono/
---

<p class="site-intro">Convierta su consumo eléctrico en emisiones de dióxido de carbono. El factor de emisión depende de cómo se genera la electricidad en su país, por lo que puede ajustarlo.</p>

<div class="calc-card calc-card-wide" id="tool-root" data-tool="carbon" data-lang="es">
  <div class="calc-row-fields">
    <div class="calc-mini"><span>Consumo mensual (kWh)</span><input type="number" id="k-kwh" min="0" step="10" value="300"></div>
    <div class="calc-mini"><span>Factor de emisión (kg CO₂ por kWh)</span><input type="number" id="k-f" min="0" step="0.01" value="0.45"></div>
  </div>

  <div class="calc-result">
    <div><span>Emisiones al mes</span><strong id="o-mes">0 kg</strong></div>
    <div><span>Emisiones al año</span><strong id="o-anio">0 t</strong></div>
  </div>

  <p class="calc-hint">El valor inicial (0,45) es solo un orden de magnitud de la media mundial. El factor real varía mucho entre países y años según su mezcla de generación: consulte el dato oficial de su país o el que publique su comercializadora, y sustitúyalo aquí.</p>
</div>

<script src="{{ '/assets/calc-tools.js' | relative_url }}" defer></script>
