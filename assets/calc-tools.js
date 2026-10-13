(function () {
  var root = document.getElementById('tool-root');
  if (!root) return;

  var lang = root.getAttribute('data-lang') === 'en' ? 'en' : 'es';
  var locale = lang === 'en' ? 'en-US' : 'es-ES';
  var T = {
    es: { tie: 'Ambas ofertas cuestan lo mismo.', winA: 'La oferta A resulta más económica.', winB: 'La oferta B resulta más económica.', months: ' meses', never: 'No se amortiza' },
    en: { tie: 'Both offers cost the same.', winA: 'Offer A is cheaper.', winB: 'Offer B is cheaper.', months: ' months', never: 'No payback' }
  }[lang];

  function num(id) {
    var e = root.querySelector('#' + id);
    var n = e ? parseFloat(e.value) : 0;
    return (isNaN(n) || n < 0) ? 0 : n;
  }
  function raw(id) {
    var e = root.querySelector('#' + id);
    return e ? e.value : '';
  }
  function set(id, text) {
    var e = root.querySelector('#' + id);
    if (e) e.textContent = text;
  }
  function f2(n) { return n.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function f1(n) { return n.toLocaleString(locale, { maximumFractionDigits: 1 }); }

  var TOOLS = {
    compare: function () {
      var kwh = num('c-kwh');
      var valle = Math.min(num('c-valle'), 100) / 100;
      function coste(p) {
        var punta = num(p + '-p');
        var v = raw(p + '-v') === '' ? punta : num(p + '-v');
        return kwh * ((1 - valle) * punta + valle * v) + num(p + '-f');
      }
      var a = coste('a'), b = coste('b'), d = a - b;
      set('o-a', f2(a));
      set('o-b', f2(b));
      set('o-diff', f2(Math.abs(d)));
      set('o-year', f2(Math.abs(d) * 12));
      set('o-win', Math.abs(d) < 0.005 ? T.tie : (d < 0 ? T.winA : T.winB));
    },

    carbon: function () {
      var kg = num('k-kwh') * num('k-f');
      set('o-mes', f1(kg) + ' kg');
      set('o-anio', f2(kg * 12 / 1000) + ' t');
    },

    lighting: function () {
      var n = num('l-n'), w0 = num('l-w0'), w1 = num('l-w1');
      var h = Math.min(num('l-h'), 24), p = num('l-p'), c = num('l-c');
      var kwh = n * Math.max(w0 - w1, 0) / 1000 * h * 365;
      var ahorro = kwh * p, inversion = n * c;
      set('o-kwh', f1(kwh) + ' kWh');
      set('o-ahorro', f2(ahorro));
      set('o-inv', f2(inversion));
      set('o-pay', ahorro > 0 ? f1(inversion / (ahorro / 12)) + T.months : T.never);
    }
  };

  var run = TOOLS[root.getAttribute('data-tool')];
  if (!run) return;
  root.addEventListener('input', run);
  root.addEventListener('change', run);
  run();
})();
