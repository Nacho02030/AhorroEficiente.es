---
layout: landing
title: "Ahorro Eficiente · Guías y herramientas de eficiencia energética"
---

<section class="hero">
  <div class="hero-text">
    <h1>Eficiencia energética del hogar, con rigor y datos</h1>
    <p class="site-intro">Guías independientes y simuladores para comprender su consumo eléctrico, evaluar tarifas y valorar una inversión en autoconsumo fotovoltaico, con enfoque internacional.</p>
    <div class="hero-actions">
      <a class="btn btn-light" href="#herramientas">Explorar herramientas</a>
      <a class="btn btn-ghost" href="#guias">Leer las guías</a>
    </div>
  </div>
  <div class="hero-icon">{% include icon.html name="house" %}</div>
</section>

<h2 class="section-title" id="herramientas">Herramientas</h2>
{% include tools-grid.html %}

<div class="pillars">
  <div class="pillar"><strong>Independencia</strong><span>Contenido sin patrocinio: ninguna empresa financia ni condiciona nuestras recomendaciones.</span></div>
  <div class="pillar"><strong>Transparencia metodológica</strong><span>Cada herramienta muestra sus supuestos y expresa los resultados como rangos, no como cifras exactas.</span></div>
  <div class="pillar"><strong>Alcance internacional</strong><span>Contenidos en español e inglés, con unidades y criterios aplicables a distintos países.</span></div>
</div>

<h2 class="section-title" id="guias">Últimas guías</h2>
<ul class="post-list">
{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts %}
  <li class="post-card">
    <span class="post-card-icon">{% include icon.html name=post.icon %}</span>
    <div class="post-card-body">
      <span class="post-meta">{{ post.date | date: "%d/%m/%Y" }}</span>
      <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
    </div>
    {% if post.image contains '/assets/img/' %}<img class="post-card-thumb" src="{{ post.image | relative_url }}" alt="" loading="lazy">{% endif %}
  </li>
{% endfor %}
</ul>
