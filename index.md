---
layout: page
title: Inicio
---

<section class="hero">
  <div class="hero-text">
    <h1>Entiende tu factura de la luz y empieza a ahorrar</h1>
    <p class="site-intro">Guías claras y sin relleno, y herramientas para calcular cuánto gastas y cuánto podrías ahorrar con tarifas, electrodomésticos y energía solar.</p>
    <div class="hero-actions">
      <a class="btn btn-light" href="/calculadora/">Calcular mi consumo</a>
      <a class="btn btn-ghost" href="/calculadora-solar/">Calcular placas solares</a>
    </div>
  </div>
  <div class="hero-icon">{% include icon.html name="house" %}</div>
</section>

<h2 class="section-title">Herramientas</h2>
<div class="tools-grid">
  <a class="tool-card" href="/calculadora/">
    {% include icon.html name="plug" %}
    <strong>Calculadora de consumo</strong>
    <span>Añade todos tus aparatos y mira cuánto gastan al mes.</span>
  </a>
  <a class="tool-card" href="/calculadora-solar/">
    {% include icon.html name="sun" %}
    <strong>Calculadora solar</strong>
    <span>Potencia, batería, ahorro anual y años de amortización.</span>
  </a>
</div>

<h2 class="section-title">Últimos artículos</h2>
<ul class="post-list">
{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts %}
  <li class="post-card">
    <span class="post-card-icon">{% include icon.html name=post.icon %}</span>
    <div class="post-card-body">
      <span class="post-meta">{{ post.date | date: "%d %b %Y" }}</span>
      <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
    </div>
    {% if post.image %}<img class="post-card-thumb" src="{{ post.image }}" alt="" loading="lazy">{% endif %}
  </li>
{% endfor %}
</ul>

<p><a class="lang-link" href="/en/">🇬🇧 Read this site in English</a></p>
