---
tags:
- tech
- octopress
comments: false
date: 2013-07-18T00:00:00+02:00
title: Octopress mit Echtzeit-Feeds ausstatten - kurz Pubsubhubbub
aliases:
- /2013/07/18/octopress-mit-echtzeit-feeds-ausstatten-kurz-pubsubhubbub/
---

Das ist mit Sicherheit die bisher schwierigste Erweiterung für Octopress. Nicht weil die Konfiguration an sich kompliziert ist, sondern weil das Wort [Pubsubhubbub](https://de.wikipedia.org/wiki/PubSubHubbub) und auch der PuSH Service [superfeedr.com](http://superfeedr.com) schwer zu schreiben sind!
Mir sei also verziehen, wenn ich trotz mehrmaligem Korrekturlesen einen der Services mit einem Rechtschreibfehler versehe.

Pubsubhubbub ist ein offenes Protokoll um Echtzeitkommunikation zu ermöglichen. Es wird verwendet um RSS- und Atom-Feeds zu erweitern, damit Benutzer oder Dienste die diese Feeds abonniert haben in Echtzeit über Änderungen informiert werden können. Der [Wikipedia-Eintrag](https://de.wikipedia.org/wiki/PubSubHubbub) dazu beschreibt das noch einmal ein klein wenig ausführlicher.

Ich werde in diesem Beitrag erklären wie man [Octopress](http://octopress.org/) mit Pubsubhubbub erweitert um einen Push-fähigen RSS/Atom-Feed zu erhalten. Für das Beispiel hier benötigt man einen Account bei [superfeedr.com](http://superfeedr.com), welcher für meine Zwecke ausreicht und kostenlos ist.

Nachdem man sich einen Hub bei Superfeedr erstellt hat, muss man diesen in der Konfiguration von Octopress einmal bekannt machen. In meinem Fall ist der Hub [renem.superfeedr.com](http://renem.superfeedr.com).

``` yaml _config.yml
# …
# Pubsubhubbub
hub_url: http://renem.superfeedr.com/  ### Das muss mit dem eigenen Hub ersetzt werden!
```

Zusätzlich muss noch die Atom-Feed Generierung um eine Zeile erweitert werden.
{% codeblock source/atom.xml lang:python %}
{% if site.hub_url %}<link href="{{ site.hub_url }}" rel="hub"/>{% endif %}
{% endcodeblock %}

Das sollte dann ungefähr so aussehen:

{% codeblock source/atom.xml lang:xml %}
{% raw %}
---
layout: nil
---
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">

  <title><![CDATA[{{ site.title }}]]></title>
  <link href="{{ site.url }}/atom.xml" rel="self"/>
  <link href="{{ site.url }}/"/>
  {% if site.hub_url %}<link href="{{ site.hub_url }}" rel="hub"/>{% endif %}
  <updated>{{ site.time | date_to_xmlschema }}</updated>
  <id>{{ site.url }}/</id>
  <author>
    <name><![CDATA[{{ site.author | strip_html }}]]></name>
    {% if site.email %}<email><![CDATA[{{ site.email }}]]></email>{% endif %}
  </author>
  <generator uri="http://octopress.org/">Octopress</generator>

  {% for post in site.posts limit: 20 %}
  <entry>
    <title type="html"><![CDATA[{{ post.title | cdata_escape }}]]></title>
    <link href="{{ site.url }}{{ post.url }}"/>
    <updated>{{ post.date | date_to_xmlschema }}</updated>
    <id>{{ site.url }}{{ post.id }}</id>
    <content type="html"><![CDATA[{{ post.content | expand_urls: site.url | cdata_escape }}]]></content>
  </entry>
  {% endfor %}
</feed>
{% endraw %}
{% endcodeblock %}

Damit ist nach einem _rake generate_ der Atom-Feed soweit vorbereitet um im letzten Schritt an Superfeedr publiziert werden zu können.

``` python Rakefile
## …
## Pubsubhubbub support
## Ping superfeedr.com
desc 'Ping Superfeedr'
task :pubsubhubbub do
  begin
    require 'net/http'
    require 'uri'
    hub_url = "http://renem.superfeedr.com" ### Anpassen an eigenen Hub!!
    atom_url = "https://renem.net/index.xml" ### Hier muss der eigenen Feed rein!
    resp, data = Net::HTTP.post_form(URI.parse(hub_url), {'hub.mode' => 'publish', 'hub.url' => atom_url})
    raise "!! Pubsubhubbub error: #{resp.code} #{resp.msg}, #{data}" unless resp.code == "204"
    puts "## Notified (" + hub_url + ") that the feed #{atom_url} has been updated"
  end
end
```

Das kann dann mit einem _rake pubsubhubbub_ auch gleich getestet werden.

Testen kann man das dann z.B. mit einem Jabber oder gTalk-Client (Ich verwende [Adium](http://www.adium.im/)) in dem man sich einen PuSH Bot wie z.B. [https://push-bot.appspot.com](https://push-bot.appspot.com/) in die Kontakt-Liste aufnimmt. Auf der Seite ist auch gut beschrieben wie man das dann testen kann.
