---
title: "Mein Laufdaten Workflow mit der Apple Watch"
date: 2017-08-16T22:29:38+02:00
categories:
- laufen
- tech
description: "Ein Überblick wie die Daten meiner Läufe, aufgezeichnet mit der Apple Watch, zu Strava, Runalyze & Co wandern."
draft: false
tags:
- strava
- runalyze
- ios
- garmin
- laufen
- watch
syndication:
-

---

Als Technik- und Daten-Nerd ist es für mich ja durchaus wichtig was ich an Daten aufzeichne mit denen ich auch etwas anfangen kann und wohin ich diese alle "pumpe". Vor einer [ganzen](https://renem.net/post/2016-01-11-3-tools-2015-runalyze/) [Weile](https://renem.net/post/2015-06-03-runalyze-laufstatistiken-soweit-man-laufen-kann/) hatte ich bereits über [Runalyze](https://runalyze.com) [geschrieben](https://renem.net/post/2015-12-07-adieu-strava-premium-runalyze-kann-statistiken-einfach-besser/). Aber wie kommen die Daten, die ich mit der Apple Watch und einer iOS App aufzeichne eigentlich dort hin?

Obwohl ich eine Garmin Forerunner 620 hier liegen habe, nutze ich seit ca. 6 Monaten lieber meine Apple Watch (Series 0, übrigens) für das Aufzeichnen. Das liegt unter anderem daran das ich mit der FR620 nach nicht einmal 2,5 Jahren in Probleme renne (Wortspiel, ha ha!), die bei einem Neupreis von 500€ einfach nicht pasieren dürfen. Garantie gibt es natürlich auch nicht mehr. Das geht los mit der nicht mehr korrekt funktionierenden Aufzeichnung der Herzfrequenz, mit zwei unterschiedlichen HR-Sensoren über ein kaputtes Timezone-File auf der Uhr das nicht getauscht werden kann[^1].

Die Apple Watch hingegen, von der Akku-Laufzeit einmal abgesehen funktioniert mit einem Polar H7 Brustgurt via Bluetooth wie ein Uhrwerk (Und gleich noch ein Wortspiel, ha)!

### iSmoothrun

Die App [„iSmoothRun“](https://itunes.apple.com/de/app/ismoothrun-pro-gps-pedometer-tracker-for-runners/id410965399?mt=8&at=11lKjS) die ich schon seit einiger Zeit in Verbindung mit meinem iPhone und der Apple Watch nutze, zeichnet meine Läufe auf. Diese kleine App, die zugegeben nicht gerade die hübscheste ist, bietet aber eine Menge Möglichkeiten und Einstellungen.

Angefangen bei Workouts & Intervallen die alle ohne einen Computer (Hallo Garmin!?!) erstellt und konfiguriert werden können, über Laufschuhaufzeichhnung, konfigurierbare Audio-Ansagen und vielen mehr, bietet sie außerdem eine Menge an Export-Funktionen zu allen möglichen Diensten. Unter anderen Strava, Garmin, RunKeeper, FitBit sowie weitere "Sport-Portale", desweiteren aber auch E-Mail sowie Dropbox.

Letzteres nutze[^2] ich in Verbindung mit meinem Rechner um an die *TCX* Dateien (GPX Export geht auch) zu gelangen die die kompletten Informationen und GPS Daten der Läufe enthalten. Direkt nach dem Abspeichern einer Laufes kann ich gleichzeitig zu mehreren Diensten exportieren, bei mir sind das Strava und eben Dropbox.

Die Watch App funktioniert zuverlässig und zeigt mir, natürlich konfigurierbar, bis zu 2x4 unterschiedliche Werte auf meiner Uhr während eines Laufes an.

### Tapiriik

Den WebService [Tapiriik](https://tapiriik.com) nutze ich zum Synchronisieren von verschiedenen Sport-Portalen untereinander. Unter anderen habe ich diesen so konfiguriert, dass ein Strava Workout direkt zu Garmin Connect sowie zu Smashrun geladen wird. Da dieser Service schon sehr lange sehr zuverlässig funktioniert und ich desöfteren einmal Probleme mit dem Export aus iSmoothrun zu Garmin Connect hatte, ist hier Tapiriik Mittel der Wahl.

Im Moment könnte ich auf Garmin verzichten, aber falls ich doch einmal die Kauflust bei einer Garmin verspüre, dann habe ich die Historie meiner Daten gern auch in Garmin Connect. So ist das halt mit den Daten-Silos.

Zu [Smashrun](http://smashrun.com) exportiere ich wegen der tollen Statistiken und Grafiken, da kommt einfach für mich persönlich kein anderer Dienst heran.

Bis hierhin funktioniert einfach alles direkt via simplem "Tap" vom iPhone in iSmoothrun. Einmal richtig konfiguriert braucht man sich um nichts weiter kümmern. Die Daten fließen nur so zu den Diensten die man möchte.

### Runalyze

Mein Lieblingsdienst was die Auswertung meiner Laufdaten angeht ist auch in 2017 ganz klar [Runalyze](https://runalyze.com). Weiter oben habe ich bereits auf Artikel verlinkt, weshalb das so ist, daher werde ich meine Lobpreisungen hier nicht noch einmal alle niederschreiben.

Da Runalyze hier keinen automatischen Import[^3] von Daten aus anderen Portalen anbietet, was ich übrigens begrüße und auch wirklich nicht benötige, muss hier also manuell ein Lauf an Hand einer *TCX* importiert werden. Ich möchte den automatischen Import hier deshalb nicht, da ich immer direkt beim Upload eines neuen Laufes, direkt einstelle, welcher Typ von Lauf (z.B. Dauerlauf, Intervall, Tempodauerlauf, Langer Lauf, …), welche Einheiten Aktiv oder Passiv waren und welchen Laufschuh ich verwendet habe.

Das wird automatisch alles etwas schwierig. Klar könnte man das dann nachträglich ändern, aber wer erinnert sich denn an einen Lauf vor 2 Wochen mit welchem der 4 Paar Schuhe (oder 20 und mehr, [Hallo Martin](https://runomatic.de/altra-lone-peak-3-0-test/)!) er/sie gelaufen ist? Ich kann das nicht oder nur schwer. Daher trage ich das direkt gleich im Import ein und fertig.

### Fertig

Hört sich jetzt erst einmal alles kompliziert an, aber im Endeffekt ist es nur ein manueller Schritt, der Import in Runalyze. Der Rest geht automatisch. Da ich eben Runalyze als mein primäres Lauftagebuch verwende, ist mir das wichtig und funktioniert über diesen "Workflow" in wenigen Minuten.



[^1]: Ich hatte mit dem Garmin Support über längere Zeit dazu Kontakt, bei der FR620 scheint man das TZ File nicht "reparieren zu können."
[^2]: Nur dafür nutze ich übrigens noch Dropbox, alles andere läuft via iCloud. Wenn iSmoothrun endlich mal iCloud Export könnte, würde Dropbox dort auch noch wegfallen können.
[^3]: Das stimmt so nicht ganz, es gibt über den Garmin Communicator wohl eine Möglichkeit die ich aber nicht nutze.