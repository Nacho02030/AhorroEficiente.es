---
layout: page
title: "Simulador fotovoltaico"
permalink: /calculadora-solar/
---

<p class="site-intro">Estime la potencia necesaria, el coste con o sin batería, el ahorro anual y el plazo de amortización. Los resultados son rangos orientativos; para un precio real, solicite presupuesto a instaladores locales.</p>

<div class="calc-card calc-card-wide">
  <div class="calc-field">
    <label for="solar-pais">País</label>
    <select id="solar-pais">
      <option value="es">España</option>
      <option value="mx">México</option>
      <option value="otro">Otro país (introduzca sus precios)</option>
    </select>
  </div>

  <div id="solar-otro" style="display:none;">
    <div class="calc-row">
      <div class="calc-row-top"><strong>Datos de su país (valores de ejemplo, modifíquelos)</strong></div>
      <div class="calc-row-fields">
        <div class="calc-mini"><span>Moneda (símbolo)</span><input type="text" id="o-moneda" maxlength="5" value=""></div>
        <div class="calc-mini"><span>Producción anual (kWh por kWp)</span><input type="number" id="o-prod" min="1" step="50" value="1400"></div>
      </div>
      <div class="calc-row-fields">
        <div class="calc-mini"><span>Paneles: mínimo por kWp</span><input type="number" id="o-pmin" min="0" step="50" value="1000"></div>
        <div class="calc-mini"><span>Paneles: máximo por kWp</span><input type="number" id="o-pmax" min="0" step="50" value="1800"></div>
      </div>
      <div class="calc-row-fields">
        <div class="calc-mini"><span>Batería: mínimo por kWh</span><input type="number" id="o-bmin" min="0" step="50" value="800"></div>
        <div class="calc-mini"><span>Batería: máximo por kWh</span><input type="number" id="o-bmax" min="0" step="50" value="1200"></div>
      </div>
    </div>
  </div>

  <div class="calc-field">
    <label for="solar-consumo">Consumo medio mensual (kWh): consulte su factura o <a href="/calculadora/">calcúlelo con sus aparatos</a></label>
    <input type="number" id="solar-consumo" min="0" step="10" value="300">
  </div>

  <div class="calc-field">
    <label for="solar-precio" id="solar-precio-label">Precio por kWh que paga (€)</label>
    <input type="number" id="solar-precio" min="0" step="0.01" value="0.17">
  </div>

  <div class="calc-field">
    <label for="solar-bateria">Batería de almacenamiento</label>
    <select id="solar-bateria">
      <option value="0">Sin batería</option>
      <option value="5">5 kWh</option>
      <option value="10">10 kWh</option>
      <option value="15">15 kWh</option>
      <option value="20">20 kWh</option>
    </select>
  </div>

  <div class="calc-result calc-result-4">
    <div><span>Potencia orientativa</span><strong id="solar-kwp">0 kWp</strong></div>
    <div><span>Coste estimado</span><strong id="solar-coste">0</strong></div>
    <div><span>Ahorro anual</span><strong id="solar-ahorro">0</strong></div>
    <div><span>Amortización</span><strong id="solar-pay">—</strong></div>
  </div>

  <p class="calc-hint" id="solar-desglose"></p>
  <p class="calc-hint">Supuestos: instalación dimensionada para cubrir el consumo anual; sin batería se aprovecha en el hogar el 40 % de lo producido, y con batería sube (55 % con 5 kWh, 70 % con 10, 80 % con 15 y 85 % con 20). Los precios de España y México son valores de referencia de 2026; en "Otro país" son los que usted introduce. Las ayudas, la compensación de excedentes y la radiación de su zona modifican mucho el resultado.</p>
</div>

<script>
(function () {
  var DATOS = {
    es: { produccion: 1400, panelMin: 1000, panelMax: 1800, batMin: 800, batMax: 1200, precio: 0.17, paso: 0.01, moneda: '€' },
    mx: { produccion: 1700, panelMin: 15000, panelMax: 25000, batMin: 14000, batMax: 24000, precio: 2.5, paso: 0.1, moneda: 'MXN' }
  };
  var AUTOCONSUMO = { 0: 0.40, 5: 0.55, 10: 0.70, 15: 0.80, 20: 0.85 };

  function el(id) { return document.getElementById(id); }
  var pais = el('solar-pais'), extra = el('solar-otro');
  var consumo = el('solar-consumo'), precio = el('solar-precio'), precioLabel = el('solar-precio-label');
  var bateria = el('solar-bateria');
  var outKwp = el('solar-kwp'), outCoste = el('solar-coste'), outAhorro = el('solar-ahorro'), outPay = el('solar-pay');
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
    return Math.round(n).toLocaleString('es-ES') + (moneda ? ' ' + moneda : '');
  }

  function rangoAnios(a, b) {
    if (a > 30) return '+30 años';
    return Math.round(a) + '–' + (b > 30 ? '+30' : Math.round(b)) + ' años';
  }

  function recalcular() {
    var d = datos();
    var kwhAnual = clamp(consumo.value) * 12;
    var kwp = kwhAnual / d.produccion;
    var kwhBat = parseInt(bateria.value, 10);

    var pLo = Math.min(kwp * d.panelMin, kwp * d.panelMax), pHi = Math.max(kwp * d.panelMin, kwp * d.panelMax);
    var bLo = Math.min(kwhBat * d.batMin, kwhBat * d.batMax), bHi = Math.max(kwhBat * d.batMin, kwhBat * d.batMax);
    var cLo = pLo + bLo, cHi = pHi + bHi;
    var ahorro = kwhAnual * AUTOCONSUMO[kwhBat] * clamp(precio.value);

    precioLabel.textContent = 'Precio por kWh que paga' + (d.moneda ? ' (' + d.moneda + ')' : '');
    outKwp.textContent = kwp.toFixed(1).replace('.', ',') + ' kWp';
    outCoste.textContent = fmt(cLo, d.moneda) + ' – ' + fmt(cHi, d.moneda);
    outAhorro.textContent = fmt(ahorro, d.moneda) + ' / año';
    outPay.textContent = ahorro > 0 ? rangoAnios(cLo / ahorro, cHi / ahorro) : '—';

    var texto = 'Paneles: ' + fmt(pLo, d.moneda) + ' – ' + fmt(pHi, d.moneda);
    if (kwhBat > 0) texto += ' · Batería de ' + kwhBat + ' kWh: ' + fmt(bLo, d.moneda) + ' – ' + fmt(bHi, d.moneda);
    desglose.textContent = texto;
  }

  pais.addEventListener('change', function () {
    var otro = pais.value === 'otro';
    extra.style.display = otro ? 'block' : 'none';
    if (!otro) {
      var d = DATOS[pais.value];
      precio.value = d.precio;
      precio.step = d.paso;
    }
    recalcular();
  });
  [consumo, precio, oMon, oProd, oPmin, oPmax, oBmin, oBmax].forEach(function (i) { i.addEventListener('input', recalcular); });
  bateria.addEventListener('change', recalcular);

  var q = parseFloat(new URLSearchParams(window.location.search).get('kwh'));
  if (!isNaN(q) && q > 0) consumo.value = Math.round(q);

  recalcular();
})();
</script>
