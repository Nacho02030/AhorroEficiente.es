---
layout: page
title: "Solar PV Simulator"
permalink: /en/solar-calculator/
---

<p class="site-intro">Estimate the capacity you would need, the cost with or without a battery, annual savings and the payback period. Results are indicative ranges; for a real price, request quotes from local installers.</p>

<div class="calc-card calc-card-wide">
  <div class="calc-field">
    <label for="solar-pais">Country</label>
    <select id="solar-pais">
      <option value="us">United States</option>
      <option value="otro">Other country (enter your own prices)</option>
    </select>
  </div>

  <div id="solar-otro" style="display:none;">
    <div class="calc-row">
      <div class="calc-row-top"><strong>Your country's data (example values, please edit)</strong></div>
      <div class="calc-row-fields">
        <div class="calc-mini"><span>Currency (symbol)</span><input type="text" id="o-moneda" maxlength="5" value=""></div>
        <div class="calc-mini"><span>Yearly output (kWh per kW)</span><input type="number" id="o-prod" min="1" step="50" value="1400"></div>
      </div>
      <div class="calc-row-fields">
        <div class="calc-mini"><span>Panels: minimum per kW</span><input type="number" id="o-pmin" min="0" step="50" value="1000"></div>
        <div class="calc-mini"><span>Panels: maximum per kW</span><input type="number" id="o-pmax" min="0" step="50" value="1800"></div>
      </div>
      <div class="calc-row-fields">
        <div class="calc-mini"><span>Battery: minimum per kWh</span><input type="number" id="o-bmin" min="0" step="50" value="800"></div>
        <div class="calc-mini"><span>Battery: maximum per kWh</span><input type="number" id="o-bmax" min="0" step="50" value="1200"></div>
      </div>
    </div>
  </div>

  <div class="calc-field">
    <label for="solar-consumo">Average monthly usage (kWh): check your bill or <a href="/en/calculator/">work it out from your appliances</a></label>
    <input type="number" id="solar-consumo" min="0" step="10" value="900">
  </div>

  <div class="calc-field">
    <label for="solar-precio" id="solar-precio-label">Price per kWh you pay ($)</label>
    <input type="number" id="solar-precio" min="0" step="0.01" value="0.17">
  </div>

  <div class="calc-field">
    <label for="solar-bateria">Battery storage</label>
    <select id="solar-bateria">
      <option value="0">No battery</option>
      <option value="5">5 kWh</option>
      <option value="10">10 kWh</option>
      <option value="15">15 kWh</option>
      <option value="20">20 kWh</option>
    </select>
  </div>

  <div class="calc-result calc-result-4">
    <div><span>Rough system size</span><strong id="solar-kwp">0 kW</strong></div>
    <div><span>Estimated cost</span><strong id="solar-coste">0</strong></div>
    <div><span>Savings per year</span><strong id="solar-ahorro">0</strong></div>
    <div><span>Payback</span><strong id="solar-pay">—</strong></div>
  </div>

  <p class="calc-hint" id="solar-desglose"></p>
  <p class="calc-hint">Assumptions: system sized to cover yearly usage; without a battery about 40% of output is used at home, rising with storage (55% at 5 kWh, 70% at 10, 80% at 15, 85% at 20). United States prices are typical 2026 figures before incentives; under "Other country" they are the figures you enter. Incentives, net-metering rules and local sunshine change the result considerably.</p>
</div>

<script>
(function () {
  var DATOS = {
    us: { produccion: 1400, panelMin: 2500, panelMax: 3500, batMin: 800, batMax: 1300, precio: 0.17, moneda: '$' }
  };
  var AUTOCONSUMO = { 0: 0.40, 5: 0.55, 10: 0.70, 15: 0.80, 20: 0.85 };

  function el(id) { return document.getElementById(id); }
  var pais = el('solar-pais'), extra = el('solar-otro');
  var consumo = el('solar-consumo'), precio = el('solar-precio'), precioLabel = el('solar-precio-label');
  var bateria = el('solar-bateria');
  var outKw = el('solar-kwp'), outCoste = el('solar-coste'), outAhorro = el('solar-ahorro'), outPay = el('solar-pay');
  var desglose = el('solar-desglose');
  var oMon = el('o-moneda'), oProd = el('o-prod'), oPmin = el('o-pmin'), oPmax = el('o-pmax'), oBmin = el('o-bmin'), oBmax = el('o-bmax');

  function clamp(n) {
    n = parseFloat(n);
    return (isNaN(n) || n < 0) ? 0 : n;
  }

  function datos() {
    if (pais.value !== 'otro') return DATOS[pais.value];
    return {
      produccion: Math.max(clamp(oProd.value), 1),
      panelMin: clamp(oPmin.value), panelMax: clamp(oPmax.value),
      batMin: clamp(oBmin.value), batMax: clamp(oBmax.value),
      moneda: oMon.value.trim()
    };
  }

  function fmt(n, moneda) {
    return (moneda || '') + (moneda && moneda.length > 1 ? ' ' : '') + Math.round(n).toLocaleString('en-US');
  }

  function years(a, b) {
    if (a > 30) return '30+ years';
    return Math.round(a) + '–' + (b > 30 ? '30+' : Math.round(b)) + ' years';
  }

  function recalcular() {
    var d = datos();
    var kwhAnual = clamp(consumo.value) * 12;
    var kw = kwhAnual / d.produccion;
    var kwhBat = parseInt(bateria.value, 10);

    var pLo = Math.min(kw * d.panelMin, kw * d.panelMax), pHi = Math.max(kw * d.panelMin, kw * d.panelMax);
    var bLo = Math.min(kwhBat * d.batMin, kwhBat * d.batMax), bHi = Math.max(kwhBat * d.batMin, kwhBat * d.batMax);
    var cLo = pLo + bLo, cHi = pHi + bHi;
    var ahorro = kwhAnual * AUTOCONSUMO[kwhBat] * clamp(precio.value);

    precioLabel.textContent = 'Price per kWh you pay' + (d.moneda ? ' (' + d.moneda + ')' : '');
    outKw.textContent = kw.toFixed(1) + ' kW';
    outCoste.textContent = fmt(cLo, d.moneda) + ' – ' + fmt(cHi, d.moneda);
    outAhorro.textContent = fmt(ahorro, d.moneda) + ' / yr';
    outPay.textContent = ahorro > 0 ? years(cLo / ahorro, cHi / ahorro) : '—';

    var texto = 'Panels: ' + fmt(pLo, d.moneda) + ' – ' + fmt(pHi, d.moneda);
    if (kwhBat > 0) texto += ' · ' + kwhBat + ' kWh battery: ' + fmt(bLo, d.moneda) + ' – ' + fmt(bHi, d.moneda);
    desglose.textContent = texto;
  }

  pais.addEventListener('change', function () {
    var otro = pais.value === 'otro';
    extra.style.display = otro ? 'block' : 'none';
    if (!otro) precio.value = DATOS[pais.value].precio;
    recalcular();
  });
  [consumo, precio, oMon, oProd, oPmin, oPmax, oBmin, oBmax].forEach(function (i) { i.addEventListener('input', recalcular); });
  bateria.addEventListener('change', recalcular);

  var q = parseFloat(new URLSearchParams(window.location.search).get('kwh'));
  if (!isNaN(q) && q > 0) consumo.value = Math.round(q);

  recalcular();
})();
</script>
