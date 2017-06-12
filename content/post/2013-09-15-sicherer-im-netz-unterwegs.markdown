---
tags:
- tech
- security
comments: false
date: 2013-09-15T00:00:00+02:00
title: Sicherer im Netz unterwegs
aliases:
- /2013/09/15/sicherer-im-netz-unterwegs/
---

Für viele wird dieses Thema nicht neu sein, trotzdem möchte ich hier einmal auf ein paar Erweiterungen für das sichere Surfen im Internet hinweisen, die dabei helfen nicht alle Daten wahllos an jeden Werbetreibenden und Datensammler zu verteilen.  

### Browser

Auch wenn das viele hier nicht hören wollen, aber im Moment geht wohl kein Weg an [Mozilla Firefox](https://www.mozilla.org/de/) vorbei wenn man Wert auf Datenschutz legt. Die Erklärung dazu ist ganz einfach, Browser wie Safari, Google Chrome, der Internet Explorer und auch Opera sind Programme deren Quellcode von niemandem einsehbar ist. Firefox hingegen wird von Mozilla entwickelt die selbst sehr viel Wert auf Datenschutz legen, der Quellcode dazu ist auch einsehbar.  
Dann gibt es ja noch Chromium, eine quell-offene Alternative zu Google Chrome, leider gibt es dazu auch wenig gute Nachrichten, denn selbst hier scheint es so, dass der Browser bei jedem Kontakt und Aufruf einer Webseite Daten an bestimmte Google-Server schickt. Nachzulesen kann man das z.B. [hier](https://github.com/nylira/prism-break/issues/169).

Auch ich habe eine kurze Eingewöhnungszeit benötigt um wieder auf Firefox umzusteigen, nachdem ich jahrelang Safari und Chrome benutzt habe. Nach 2-3 Tagen und einem gut eingestellten Browser vermisse ich aber keineswegs etwas von den beiden genannten. Der erste Start von Firefox dauert ein paar Sekunden länger, das surfen im Web selbst ist aber kein Unterschied.

### Erweiterungen
Ein paar wenige ausgewählte Erweiterungen für Firefox, viele davon sind auch für Chrome und Safari erhältlich. Meiner Meinung nach sollte man aber grundsätzlich auch beim Browser selbst schon ansetzen und daher wie oben beschrieben, einen einsetzen der Datenschutz groß schreibt.

#### Adblock Edge
[Adblock Edge](https://addons.mozilla.org/de/firefox/addon/adblock-edge/) ist eine Alternative zu Adblock Plus. Warum nicht direkt Adblock Plus? Es gab in den letzten Monaten und Wochen immer wieder Berichte das die Firma hinter Adblock Plus gegen Bezahlung auch sogenannte "nicht aufdringliche Werbung" zulässt. Es ist damit Firmen also möglich nach Prüfung und einem gewissen Beitrag Werbung anzeigen zu lassen. Das widerspricht natürlich dem Konzept hinter einem Werbeblocker.  
Adblock Edge ist ein AddOn welches die selben Funktionen wie Adblock Plus bietet, zusätzlich dazu aber auch direkt nach der Installation in den Filtereinstellungen "akzeptable Werbung" abschaltet. Das kann man entweder manuell erledigen in Adblock Plus oder direkt Adblock Edge nutzen.

#### HTTPS Everywhere
Die Erweiterung [HTTPS Everywhere](https://www.eff.org/https-everywhere) der Electronic Frottier Foundation ist ein Tool welches versuche so gut wie möglich sämtliche Anfragen (auch Requests genannt) des Browser verschlüsselt abzusenden. Wenn also eine Seite die ihr aufruft in der Seite selbst bestimmte Requests auf Seiten wie Google, Facebook, … schickt, dann ist zumindest sichergestellt das diese Requests auch jeden Fall verschlüsselt stattfinden und kein Dritter mitlesen kann.
HTTPS Everywhere ist leider nicht für Safari erhältlich, es gibt zwar eine Möglichkeit, diese ist aber aufwendig und setzt ein eigenes Apple Web-Developer Zertifikat voraus.

#### Disconnect
Die Macher von [Disconnect.me](https://www.disconnect.me/) stellen mit der Erweiterung ein Tool zur Verfügung welches sogenanntes Tracking von Webseiten unterbindet. Das Plugin enthält eine Liste von bekannten Seiten die Daten wie IP-Adresse, Browser-Typ, Facebook -Infos usw. abfragen und auswerten. Das könnt ihr mit dem Tool leicht unterbinden und bekommt das grafisch auch noch nett aufbereitet angezeigt.  
Ein netter Nebeneffekt ist, das Webseiten schneller laden, da nicht alle Requests abgearbeitet werden müssen zu sämtlichen Facebook-, Twitter-, Google- & Co Seiten.

#### Weitere Tools
Mit [NoScript](http://noscript.net/) und [RequestPolicy](http://requestpolicy.com/) stehen noch zwei weitere mächtige Erweiterungen zur Verfügung die aber meiner Meinung nach aufwändiger zu pflegen und einzustellen sind. 

### Was ist mit Tor?
Das Tor-Projekt stellt mit dem [Tor Browser Bundle](https://www.torproject.org/projects/torbrowser.html.en) ein Paket zur Verfügung welches noch mehr Anonymität im Netz verspricht. Man sollte Tor allerdings nicht als Allheilmittel sehen und sich vorher mit dem Prinzip von Tor vertraut machen. Denn auch hier gab e sin letzter Zeit leider immer mal wieder Berichte das sog. Tor-Exit-Nodes kompromittiert wurden und auch die NSA und GCHQ ein Interesse an den Daten hat, die über Tor fließen.


### Fazit
Mit nur wenigen Add-Ons und dem korrekten Browser sollte es wirklich jedem möglich sein für ein gewisses Maß an Sicherheit beim surfen im Web zu sorgen. Es gibt noch eine große Anzahl weitere Erweiterungen, diese aber alle aufzuzählen würden den Beitrag hier sprengen. Dieser soll als Anregung gedacht sein und lediglich in die richtige Richtung lenken.  
Außerdem können oben genannte Erweiterungen in wenigen Sekunden installiert werden und bieten somit ohne großen Aufwand einen gewissen Mehrwert wenn es um das Datenschutz im Netz geht. Trotzdem sollte man sich mit diesem Thema konkreter auseinandersetzen, denn gegen freiwillige Angaben und Formulare die man ausfüllt helfen auch diese Tools nicht.
