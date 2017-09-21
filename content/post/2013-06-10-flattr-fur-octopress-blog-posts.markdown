---
tags:
- tech
- octopress
comments: false
date: 2013-06-10T00:00:00+02:00
title: Flattr Button für Octopress Blog-Posts
aliases:
- /2013/06/10/flattr-fur-octopress-blog-posts/
---

Am Wochenende hatte ich mal wieder etwas Zeit um an [meiner Octopress-Installation]({{< relref "2013-01-21-alles-neu-schon-wieder.markdown" >}}) zu basteln. Dieses Mal hatte ich mir vorgenommen einen [Flattr](https://flattr.com/) Button zu integrieren.

Es existiert zwar bereits ein [3rd-party Plugin](https://github.com/PartTimeLegend/octopress-flattr-donation-aside) auf der offiziellen Octopress Seite, dieses integriert sich allerdings in die Sidebar. Da ich den Blog hier  minimalistisch halte und auf eine Sidebar verzichte bringt mir das leider nicht viel. Daher habe ich mich dazu entschlossen, einen Button zum flattrn unter jeden Blog-Post zu bringen, an die selbe Stelle an der sich auch die Sharing-Buttons befinden. Am unteren Ende eines jeden Beitrages.

Die Bastelstunde war aber nur von kurzer Dauer, denn alles was es zu tun gibt ist folgendes:

In der *_config.yml* folgende Zeilen am Ende der Datei ergänzen

``` yaml _config.yml
# Flattr
flattr_user: rretsiem
flattr_button: true
```
Im Ordner *source/_includes/post* die *sharing.html* um folgende Zeile erweitern:

{% codeblock source/_includes/post/sharing.html lang:html %}
{% raw %}
<div class="sharing">
  {% if site.flattr_button %}
  	<script id='flattrbtn' defer>(function(i){var f,s=document.getElementById(i);f=document.createElement('iframe');f.src='//api.flattr.com/button/view/?uid={{ site.flattr_user }}&button=compact&url='+encodeURIComponent(document.URL);f.title='Flattr';f.height=20;f.width=110;f.style.borderWidth=0;s.parentNode.insertBefore(f,s);})('flattrbtn');</script>
  {% endif %}
</div>
{% endraw %}
{% endcodeblock %}

Das *div* Element sollte bei einer Standard-Octopress Installation bereits vorhanden sein, die drei Zeilen können also direkt dort integriert werden. An welcher Stelle bleibt jedem selbst überlassen.

Mehr ist nicht zu tun. Nach einem *rake generate* ist der Button bereits aktiv und sollte wie hier im Beitrag unten zu sehen sein.
