---
tags:
- google
- tech
- icloud
comments: false
date: 2013-01-26T00:00:00+02:00
title: Projekt 2013 - weniger Google Dienste - Kontakte
aliases:
- /2013/01/26/projekt-2013-weniger-google-dienste-kontakte/
---

Hier also nun ein erster detaillierter Beitrag zu meinem "[Projekt 2013](http://blog.renem.net/2013/01/22/weniger-google-projekt-2013/)". Da ich das alles in Teilschritten durchführe, bzw. bereits durchgeführt habe, behandle ich hier die "Google Kontakte".

Da ich diesen Schritt bereits durchgeführt habe, ist dies hier eine Aufstellung an Überlegungen und Ideen die ich dazu hatte um meine Kontakte künftig bei einem "Nicht-Google Dienst" zu speichern aber trotzdem unabhängig zu sein. Letzteres ist mir so nicht ganz gelungen, wenn man weiterliest, aber ich erkläre weiter unten auch warum ich trotzdem diese Entscheidung getroffen habe.

### Google Kontakte-Ersatz
Das war wohl so ziemlich der schwierigste Schritt. Die Kontakte und Gruppen bei Google habe ich schon seit mindestens 4-5 Jahren und habe mit den unterschiedlichsten Mobil-Telefonen keine Probleme gehabt. Denn Google wird so ziemlich von jedem Hersteller out-of-the-box bereit gestellt.  
Das ändert sich aber mit dem 30. Januar denn da will Google für neu eingerichtete Accounts [keinen "Google-Sync" mehr anbieten](http://www.areamobile.de/news/23119-google-activesync-fuer-googlemail-wird-abgeschaltet). Damit fällt für viele der Kalender und Kontakte-Sync weg, denn Google nutzt hier das Microsoft ActiveSync-Protokoll. Zwar wird eine Alternative mit [CalDav](https://de.wikipedia.org/wiki/CalDAV) und [CardDav](https://de.wikipedia.org/wiki/CardDAV) geboten, aber Stand Heute wird dies nur von iOS-Geräten unterstützt, von Android-Geräten einmal abgesehen. Selbst Microsoft mit Windows Phone 8 ist im Moment davon betroffen und hat noch keine Lösung. Windows Phone 7, webOS und  vermutlich auch ältere Blackberrys stehen dann auch nicht gerade gut da.

Soviel zum Einstieg, warum es nun nicht ganz so einfach ist, wenn man unabhängig bleiben möchte. Denn auch Google ist somit kein Garant mehr dafür auf jeder Plattform vollständig unterstützt zu werden. Sicherlich ändert sich das in den nächsten Monaten wenn die Hersteller Updates herausbringen, aber im Moment ist das alles etwas unsicher.

### Wahl des Services
Da ich im Moment ein iPhone benutze, habe ich mich erst einmal umgesehen was hier bei Kontakten alles unterstützt wird.

* iCloud
* Exchange
* Yahoo!
* AOL (wusste nicht das die noch existieren...)
* Microsoft Hotmail ([seit August ja Outlook.com](http://www.heise.de/newsticker/meldung/Microsoft-erneuert-Webmail-Dienst-Aus-Hotmail-wird-Outlook-1656800.html "Microsoft erneuert Webmail-Dienst: Aus Hotmail wird Outlook | heise ..."))

Den iCloud-Dienst nutzt man als iOS Benutzer ja bereits, daher musste ich mir diesen nicht genauer ansehen. Einen Blick habe ich aber zu Yahoo! und auch zu Outlook.com geworfen. Die E-Mail Webseite macht bei Microsoft einen sehr guten Eindruck, die Kontakte ebenfalls, nur der Kalender sieht immer noch aus wie eine MS Live-Webseite.  
Die Webseiten waren aber nur ein kleiner Teil, denn eigentlich geht es mir primär um die Anbindung meiner Geräte und die Synchronisation derer.  
Hier nehmen sich die Anbieter relativ wenig bis auf einige Dinge, wie spezielle Felder werden auf iOS und dem Mac alle gut unterstützt.  
Es gibt auch Anbieter die einen kompletten Exchange-Server für ein paar Euro pro Monat zur Verfügung stellen, allerdings weiß ich hier genau so wenig was mit meine Kontakten passiert wie bei Google, Microsoft, Apple & Co.

Bevor ich mich aber für einen Dienst festgelegt habe, war zu prüfen wie gut ich die importierten Kontakte wieder exportieren kann, wenn ich doch einmal das Bedürfnis habe zu wechseln. Auch hier bieten alle Anbieter den Export der Kontakte, somit also Gleichstand.

Die Entscheidung fiel schlussendlich auf iCloud. Das hatte mehrere Gründe und sicherlich wird diese nicht jeder nachvollziehen können. Da ich aber die Möglichkeit habe, jederzeit meine Kontakte zu exportieren bin ich hier also nicht gebunden und kann schnell auf einen anderen Anbieter wechseln.  
Laut diversen [Forenberichten](http://www.mactechnews.de/forum/thread/Wie-ICloud-Kalender-auch-iOS-4-Usern-zur-Verfugung-stellen-302859.html "Wie ICloud Kalender auch iOS 4 Usern zur Verfügung stellen ...") von iCloud auch das CardDav-Protokoll unterstützt, sollten also in Zukunft weitere Hersteller CardDav einsetzen, dann kann ich ohne Umzug iCloud mit einer anderen Plattform nutzen. 

Die Synchronisation in einer Mac-Umgebung und iOS-Geräten klappt einfach wunderbar. Es wird Push unterstützt, so das eine Änderung an einer Adresse sofort auf alle anderen synchronisierten Geräte aktualisiert wird. Die Oberfläche der Webseite ist sicherlich nicht mein Geschmack, aber diese muss ich ja nicht unbedingt nutzen. Die Kontakte.app auf dem Mac kann den Export bei Bedarf.  
Wenn ich eine Plattform ohne CardDav wähle, so exportiere ich meine Kontakte und würde vermutlich Yahoo! als zweite Wahl nehmen. Das liegt einfach daran, das ich persönlich meine Kontakte lieber Apple anvertraue als Google und Microsoft. Warum kann ich nicht bestätigen, es ist einfach ein Bauchgefühl. Ich bin zumindest der Meinung das ich bei Apple der Kunde und nicht das Produkt bin, mit welchem Geld verdient wird, denn Werbung auf Grund von bestimmten Texten in E-Mails findet hier nicht statt.

### Export von Google Kontakten
Glücklicherweise unterstützt auch Google den Export von Kontakten in verschiedenen Formaten, darunter auch das [vCard-Format](http://de.wikipedia.org/wiki/VCard "vCard – Wikipedia"). Das konnte ich also direkt in iCloud importieren und hatte nach einer kurzen Prüfung auch keine Probleme mit vermissten Datensätzen oder Feldern festgestellt. Selbst die Geburtstage wurden einwandfrei übernommen und mir auch im Geburtstagskalender auf dem Mac angezeigt.

### Import
Wie schon beschrieben ging der Import ohne Probleme. Wenn man keinen Mac hat, bietet auch die iCloud.com Webseite einen Import. Diesen habe ich allerdings nicht getestet und weiß daher auch nicht, ob man darüber auch mehrere Kontakte für einmal importieren kann. Das wäre sicherlich ein No-Go für iCloud gewesen, ich musste diesen Weg aber nicht gehen und konnte alle auf einmal importieren.  
Am Mac hat man dann noch die Möglichkeit die Geburtstage für Kontakte anzeigen zu können, ohne einen eigenen Kalender wie bei Google dafür abonnieren zu müssen, sehr praktisch.

Alles in allem hat mich der Export und Import der Kontakte nur ein paar Minuten gekostet, viel mehr Zeit habe ich damit verbracht zu prüfen ob auch wirklich alle Daten sauber übernommen wurden. Hier muss man also bei Bedarf nicht etwas Bereinigung einplanen.

### Synchronisation
Das ist in einer reinen iOS und Apple-Umgebung natürlich einfach.  
Auf dem Mac in den Systemeinstellungen für iCloud die Kontakte aktivieren. Dadurch wird aber automatisch Google deaktiviert, da die App auf dem Mac nur eine Quelle dafür akzeptiert.

Auf dem iPhone und dem iPad geschieht dies fast genauso. In den Systemeinstellungen für iCloud die Kontakte aktivieren und im eventuell konfigurieren Google-Konte deaktivieren. 

So habe ich die ersten 10 Tage einfach eine Art Misch-Betrieb benutzt, bei dem ich zu jeder seit wieder auf Google umschalten können und evtl. neue oder geänderte Kontakte haben sich in dieser Zeit bei mir in Grenzen gehalten. Somit hätte ich diese bei Bedarf bei Google manuell aktualisiert.  
Nach 10 Tagen, fühlte ich mich dann sicher, habe noch einmal ein Backup der Google-Kontakte bei mir auf dem Rechner abgelegt und alle Kontakte über die Google Webseite gelöscht. Meinen eigenen Kontakt habe ich mit deutlich reduzierten Daten bestehen gelassen, den benötigt man anscheinend für Google+. Entfernt wurde aber alles was ich für nicht wichtig für Google erachtete.

### Fazit
Der Umzug der Kontakt hat zwar ungefähr eine Stunde an Aufwand verursacht, aber ansonsten bleibt alles transparent. Ich aktualisiere und füge neue Kontakte nach wie vor über die iOS Kontakte oder am Mac hinzu. Somit war der erste Schritt, weg von Google erledigt und ich konnte mich um dem Kalender kümmern.



