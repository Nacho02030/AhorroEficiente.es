---
layout: page
title: Home
permalink: /en/
---

<section class="hero">
  <div class="hero-text">
    <h1>Understand your power bill and start saving</h1>
    <p class="site-intro">Clear, no-filler guides and tools to work out what you spend and what you could save — appliances, heating and cooling, smart home gear, and solar.</p>
    <div class="hero-actions">
      <a class="btn btn-light" href="/en/calculator/">Calculate my usage</a>
      <a class="btn btn-ghost" href="/en/solar-calculator/">Estimate solar panels</a>
    </div>
  </div>
  <div class="hero-icon">{% include icon.html name="house" %}</div>
</section>

<h2 class="section-title">Tools</h2>
<div class="tools-grid">
  <a class="tool-card" href="/en/calculator/">
    {% include icon.html name="plug" %}
    <strong>Usage calculator</strong>
    <span>Add all your appliances and see what they cost per month.</span>
  </a>
  <a class="tool-card" href="/en/solar-calculator/">
    {% include icon.html name="sun" %}
    <strong>Solar calculator</strong>
    <span>System size, battery, yearly savings and payback time.</span>
  </a>
</div>

<h2 class="section-title">Latest articles</h2>
<ul class="post-list">
{% assign sorted_posts = site.posts_en | sort: 'date' | reverse %}
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

<p><a class="lang-link" href="/">🇪🇸 Leer este sitio en español</a></p>
