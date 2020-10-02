---
title: "Apple Watch synchronisiert Trainings nicht"
date: 2020-10-02T08:35:13+02:00
categories:
- sport
description: "Bei aufgezeichneten Trainings mit der Apple Watch fehlen Daten wie die Route/GPS oder die Herzfrequenz, hier die mögliche Lösung"
draft: false
tags:
- apple
- watch
- iphone
images:
-
mfbookmark: ""
mfbookmarkof: ""
mfrepostof: ""
mfreplyto: ""
mflikeof: ""
syndication:
-
---

Da ich ebenfalls seit dem Update im September 2020 mit iOS 14 und watchOS7 Probleme mit den Trainingsdaten habe, schreibe ich hier mal meine Erkenntnisse zusammen.

Beim Laufen zeichne ich meine Läufe normalerweise mit [WorkoutDoors](https://apps.apple.com/us/app/workoutdoors/id1241909999) auf und [synchronisiere diese dann im Anschluss](https://renem.net/post/2020-02-26-watch-healthfit-sync/) zu [Runalyze](https://runalyze.com/) & Co.

Allerdings habe ich seit September eben auch beobachtet, dass den Trainings am Ende meist die GPS-Daten – sprich die Route – fehlen. Man sieht einen Startpunkt, allerdings nicht den Weg den man gelaufen ist. Nach kurzer Recherche, musste ich feststellen, dass ich nicht der einzige bin und das iOS 14 und watchOS 7 hier einen Bug enthalten.

```md
{{< tweet 1307323429008277504 >}}
```

Da ich aber nun bereits auf den aktuellen Versionen war, ist ein Downgrade auf iOS13 und watchOS6 nicht mehr möglich und wollte ich auch gar nicht.

Nachdem sich dann in den letzten Tagen auch im offiziellen Apple Support Forum die Beschwerden häuften, hat Apple reagiert und ein [Support-Dokument](https://support.apple.com/en-us/HT211865) herausgegeben welches die Schritte beschreibt um das Problem zu lösen. Leider nur in Englisch und leider auch sehr ernüchternd was zu tun ist.

Wer es noch nicht gelesen hat, die Kurzform (Backups!! unbedingt Backups!!):

- Apple Watch vom iPhone entkoppeln (Hierbei wird automatisch ein Backup der Watch erstellt)
- iPhone komplett zurücksetzen
- iPhone aus Backup - das man vorher angefertigt hat!! - wiederherstellen
- Apple Watch wieder mit dem iPhone koppeln und ebenfalls aus einem Backup wiederherstellen.

Also einmal alles frisch aufsetzen. Das ist zeitintensiv und für Leute – wie mich – die ihre Ringe täglich schließen wollen auch nicht so einfach umzusetzen. Denn das ganze Prozedere dürfte bis zum letzten Punkt gute 2-4 Stunden dauern und noch einmal 1-3 Tage bis die Healthdaten wieder auf dem iPhone aus iCloud synchronisiert sind.

Auch ist mir nicht klar, was mit meiner eSIM in der Apple Watch passiert wenn ich diese entkopple und das iPhone ebenfalls zurücksetze.

Für ungeduldige ist das im Moment der einzige Weg, der laut ersten Berichten auch Abhilfe schafft. Ich werde das Ganze noch ein paar Tage beobachten und hoffen das Apple evtl. eine Möglichkeit bietet mit z.B. iOS 14.02 oder watchOS 7.02 den Bug ebenfalls zu beheben.

