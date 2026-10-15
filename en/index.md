---
layout: landing
title: "Home"
permalink: /en/
---

<section class="hero">
  <div class="hero-text">
    <h1>Household energy efficiency, grounded in data</h1>
    <p class="site-intro">Independent guides and simulators to understand your electricity use, assess tariffs and evaluate an investment in solar self-generation, with an international outlook.</p>
    <div class="hero-actions">
      <a class="btn btn-light" href="#tools">Explore the tools</a>
      <a class="btn btn-ghost" href="#guides">Read the guides</a>
    </div>
  </div>
  <div class="hero-icon">{% include icon.html name="house" %}</div>
</section>

<h2 class="section-title" id="tools">Tools</h2>
{% include tools-grid.html %}

<div class="pillars">
  <div class="pillar"><strong>Independence</strong><span>No sponsored content: no company funds or influences our recommendations.</span></div>
  <div class="pillar"><strong>Methodological transparency</strong><span>Every tool states its assumptions and presents results as ranges, not exact figures.</span></div>
  <div class="pillar"><strong>International scope</strong><span>Content in Spanish and English, with units and criteria applicable across countries.</span></div>
</div>

<h2 class="section-title" id="guides">Latest guides</h2>
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
    {% if post.image contains '/assets/img/' %}<img class="post-card-thumb" src="{{ post.image | relative_url }}" alt="" loading="lazy">{% endif %}
  </li>
{% endfor %}
</ul>
