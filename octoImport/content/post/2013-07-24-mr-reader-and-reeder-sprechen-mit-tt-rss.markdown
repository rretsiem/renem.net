---
tags:
- tech
- rss
- ios
comments: false
date: 2013-07-24T00:00:00+02:00
title: Mr. Reader &amp; Reeder sprechen mit TT-RSS
url: /2013/07/24/mr-reader-and-reeder-sprechen-mit-tt-rss/
---

Was sich anhört wie der Titel einer Serie, ist in Wirklichkeit tiefste Technik und nur für Leute interessant die wissen was [TT-RSS](http://tt-rss.org/) ist und diese Software auch einsetzen oder einsetzen wollen.  
Für alle die nicht wissen was TT-RSS ist aber eventuell näheres erfahren wollen, hier die Beschreibung von den Entwicklern:

> Tiny Tiny RSS is an open source web-based news feed (RSS/Atom) reader and aggregator, designed to allow you to read news from any location, while feeling as close to a real desktop application as possible.

Und genau der letzte Teil dieses Satzes läset mich schaudern. Wer sich dazu noch die Homepage des Projektes ansieht und dort die Screenshots anschaut, wird feststellen, das dies so eigentlich im Jahr 2013 nicht nutzbar ist. Die Oberfläche erinnert eher an Windows 3.11/95 Explorer. Sicherlich gibt es Leute denen das gefällt, mir persönlich nicht. Dafür gibt es auch eine Menge an Skins/Themes um das Lesen von RSS-Feeds am Desktop angenehmer zu machen.

In diesem Blog-Post hier möchte ich aber auf die Integration von TT-RSS mit meinen präferierten RSS-Clients auf dem iPad und dem iPhone eingehen. Ich konsumiere nunmal am liebsten auf diesen Geräten meine täglichen Nachrichten. Dank der Abschaltung von Google Reader hat sich hier ja einiges getan. Und das ist bis zum heutigen Tag, alles positiv.

### Fever heißt das Zauberwort
Die Integration funktioniert, da [Mr. Reader](http://clkde.Tradedoubler.com/click?p=23761&amp;a=2217627&amp;url=https://itunes.apple.com/de/app/mr.-reader/id412874834?partnerId=2003) und auch [Reeder](http://clkde.Tradedoubler.com/click?p=23761&amp;a=2217627&amp;url=https://itunes.apple.com/de/app/reeder/id325502379?partnerId=2003) mit dem [Fever-Service](http://feedafever.com) sprechen können. Gegen Fever spricht für mich allerdings das die Registrierung an eine feste Domain gebunden ist und die Entwicklung im Moment wohl auch mehr vor sich hin vegetiert als aktiv zu sein. Dafür dann aber Geld zu zahlen sehe ich nicht ein.
Daher gibt es etliche Alternativen, die nur sehr selten benutzt werden, oder eben keine guten Clients besitzen mit denen man relaxed auf der Couch liegen kann und Nachrichten konsumiert.

### Los geht's
Die Implementierung ist eigentlich schnell gemacht. Alles was wir brauchen ist eine laufende TT-RSS Installation. Davon gehe ich aber hier einfach aus. Wer dazu Hilfe benötigt kann mich gern kontaktieren.  
Da TT-RSS nicht direkt mit den oben genannten Applikationen kompatibel ist, müssen wir diesem die Fever-API beibringen. Dank Plugin-Technologie ist das aber kein Problem. Entwickelt wurde das Plugin von einem User Namens _DigitalDJ_ auch schon, wir müssen es nur noch einbinden.  

- Zuerst einmal müsst ihr für den User mit dem ihr von einem Client zugreifen wollt, den API-Zugriff erlauben, das geht in den Einstellungen von TT-RSS wenn ihr als der entspr. Benutzer angemeldet seid.  
- In diesem [Github-Repository](https://github.com/dasmurphy/tinytinyrss-fever-plugin) finden wir alles was wir benötigen.
- Das Plugin muss in den Ordner _plugins_ der TT-RSS Installation kopiert werden. Sollte also dann in etwas so aussehen: _tt-rss/plugins/fever/_ 
- In den Einstellungen der TinyTiny RSS Installation das Plugin aktivieren.  
- Danach noch ein Passwort für die Fever-API-Emulation im Plugin eingeben, dass ist notwendig da das Plugin und die Fever Authentifizierung anders funktionieren.

Eigentlich war es das auch schon alles. Nun noch einen Client eurer Wahl auswählen der mit Fever sprechen kann und zumindest Basis-Funktionen nutzen.

### Clients
Wenn ihr einen Client gefunden habt, dann wählt als Service "Fever" aus und als URL verwendet ihr

- URL: _http://<eureIPvonTT-RSS/plugins/fever/_
- User/Email: _<euer user sum anmelden an tt-rss>_
- Passwort: _<Passwort welches ihr im Plugin-Dialog für das Fever-Plugin eingegeben habt._
- Solltet ihr Mr. Reader verwende, den Schalter _Fever Klon_ aktivieren, dann werden bestimmte Fever-API Aufrufe weggelassen.

Als Clients kann ich persönlich die folgenden iOS Clients empfehlen:

- [Reeder](http://clkde.Tradedoubler.com/click?p=23761&amp;a=2217627&amp;url=https://itunes.apple.com/de/app/reeder/id325502379?partnerId=2003) für's iPhone mein bevorzugter Client
- [Mr. Reader](http://clkde.Tradedoubler.com/click?p=23761&amp;a=2217627&amp;url=https://itunes.apple.com/de/app/mr.-reader/id412874834?partnerId=2003) ist einfach der beste Client für iPad
- [Sunstroke](http://clkde.Tradedoubler.com/click?p=23761&amp;a=2217627&amp;url=https://itunes.apple.com/de/app/sunstroke/id488564806?partnerId=2003) nutze ich selbst nicht, soll aber auch mit dem Fever-Plugin funktionieren.

Am Mac benutze ich persönlich [ReadKit](http://clkde.Tradedoubler.com/click?p=23761&amp;a=2217627&amp;url=https://itunes.apple.com/de/app/readkit/id588726889?partnerId=2003), welcher deutlich mehr Komfort bietet als die TT-RSS Weboberfläche.
Mit Tipps zu Applikationen für Android und die anderen mobilen Betriebssystem kann ich allerdings nicht helfen, da ich hier keine Erfahrungen habe.

Es gibt einen [Thread](http://tt-rss.org/forum/viewtopic.php?f=22&amp;t=1981) im offiziellen TT-RSS Forum welcher auch noch weitere Hinweise auf die Verwendung des Plugins gibt. Allerdings ist es **wichtig zu erwähnen, dass das im Forum-Post enthaltene Plugin fehlerhaft ist!** Daher bitte unbedingt die aktuelle Version vom o.g. [Github-Repository](https://github.com/dasmurphy/tinytinyrss-fever-plugin) verwenden.

### Was geht nicht?
Die meisten Clients bieten bei Fever weitere Funktionen die TT-RSS aber nicht bietet. Auch andersherum kann TT-RSS mit den intelligenten Ordner eine Features die Fever nicht kann. Die Clients unterstützen diese Funktion dann natürlich auch nicht. Was Stand heute auch noch nicht funktioniert ist ein vernünftiges Feed-Management, man ist also gezwungen die Feeds über die "normale" Oberfläche zu verwalten. Vielleicht ändert sich hier ja noch etwas in Zukunft.

Danke an den User *DigitalDJ* der das Plugin entwickelt hat und immer noch weiterentwickelt!
