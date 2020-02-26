---
title: "HealthFit – Apple Watch Workouts exportieren"
date: 2017-11-19T21:58:46+01:00
lastmod: 2020-02-26T09:41:00+01:00
categories:
- sport
description: ""
draft: false
tags:
- running
- tech
- apple
syndication:
- https://twitter.com/rretsiem/status/932366159705493504
- https://twitter.com/rretsiem/status/986566603784511488
lastmod: 2018-04-18

---



<hr>

*UPDATE 18.04.2018: Mit Version 3.0.0 von HealthFit ist nun auch ein direkter Export nach Runalyze möglich. [Mein Beitrag dazu vom 18.04.2018](https://renem.net/post/2018-04-18-apple-watch-runalyze-healthfit/) beschreibt das kurz.*

<hr>

> Stillstand ist Rückschritt

Getreu diesem Motto habe ich die letzten Monate meine Läufe alle mit [iSmoothRun](https://itunes.apple.com/de/app/ismoothrun/id410965399?mt=8&ct=wfiOS&at=11lKjS) auf dem iPhone aufgezeichnet und bin weiterhin damit durchaus zufrieden damit. Beim stöbern im Netz und lesen von Artikeln bin ich vor wenigen Tagen auf die App [HealthFit](https://itunes.apple.com/de/app/healthfit/id1202650514?mt=8&ct=wfiOS&at=11lKjS) gestossen. Mit dieser App ist es möglich Workouts die mit der Apple Watch Workouts App aufgezeichnet wurden zu exportieren.

Leider bietet Apple hier ja keinen direkten Weg und dies ist nur über Umwege möglich. Da ich iSmoothrun auf dem iPhone nutze, habe ich dank eigener Anwendung und der vielfältigen Export-Funktion der App alle Möglichkeiten und kann meine Läufe dann in [Runalyze](https://runalyze.com/) direkt importieren. Wer mehr darüber wissen will, [hier]({{<  relref "2017-08-16-mein-laufdaten-workflow.markdown" >}}) habe ich darüber bereits geschrieben. Da ich mit dieser Lösung zufrieden bin, gibt es eigentlich keinen Grund für mich etwas anderes zu verwenden.

Neugierig wie ich nunmal bin, habe ich heute einen Lauf mit der Workouts App auf der Watch[^1] aufgezeichnet und konnte diesen im Anschluß daran mit HealthFit exportieren. Dabei bietet die App eine überschaubare Anzahl an Zielen an. Der Export einer FIT-Datei auf iCloud Drive gefällt mir besonders gut und ist auch meine erste Wahl. Desweiteren kann man auch direkt zu Strava, Dropbox und weiteren Diensten exportieren. Da Runalyze leider keine API anbietet für einen direkten Import, ist für mich der Weg via iCloud Drive aber der einfachste und funktioniert ähnlich meines bisherigen Workflows.

Ein Import der FIT-Datei meines Laufes heute bei Runalyze verlief ohne Probleme und es sind auch alle wichtigen Daten korrekt aufgezeichnet worden. Zum Vergleich habe ich den Lauf parallel mit iSmoothRun aufgezeichnet mit dem Unterschied, dass letztere die Herzfrequenz via Polar Brustgurt empfängt, die Apple Watch aber über den optischen Sensor[^2]. Ein Vergleich der beiden Daten war zu meinem Erstaunen äußerst positiv und es gab keine groben Schnitzer der Apple Watch. Meines Wissens nach wurde auch an der Hardware der Apple Watch in den letzten Revisionen bezüglich Herzfrequenz nichts neues eingebaut, die Aufzeichnung zeigte jedenfalls keine Schwächen im Vergleich zu den aktuellen Berichten mit einer Series 3.

Dank der Entdeckung von HealthFit habe ich nun eine weitere Möglichkeit meine Daten zu exportieren, auch ohne iSmoothRun. Denn so sehr ich die App mag, die Entwicklung zu neuen Funktionen scheint im Moment nicht wirklich voran zu gehen. So dass die Zukunft für mich ungewiss ist. Wenn Apple hier mit WatchOS 5 noch einmal nachlegt um Intervalle[^3] und andere Dinge zu unterstützen wäre das eine wirkliche Alternative.

Apropos Alternative, mir ist bewusst das es noch weitere Apps in der Richtung gibt. Allen voran vermutlich [RunGap](https://itunes.apple.com/de/app/rungap-workout-data-manager/id534460198?mt=8&uo=4&at=11lKjS&ct=searchlink), welches einen Import von verschiedenen Diensten und auch den Export zu einer großen Zahl dieser bereitstellt. HealthFit war für mich im Moment aber die Erste Wahl, da es ein Tool ist, welches genau eine Sache macht und diese richtig gut.

Ein weiterer Punkt der mir beim Export der Daten aufgefallen ist, die FIT-Datei von HealthFit hat 56kb, iSmoothRun export die TCX mit 650kb und RunGap erstellt ein ZIP mit 118kb Größe. Auch wenn es sich nur um wenige Kilobyte handelt, scheinen FIT-Dateien wohl für den Datenaustausch ideal zu sein.



[^1]: Ich nutze übrigens immer noch eine "Series 0", also die Original Watch von 2015
[^2]: Ich könnte die Watch auch direkt mit dem Polar Brustgurt koppeln, dann verliere ich aber die Möglichkeit direkt mit dem iPhone aufzuzeichnen. Multi-Point Bluetooh scheint bei Brustgurten & Co noch nicht möglich zu sein.
[^3]: Eine neue Runde kann man übrigens mit einem Doppel-Tap "anlegen".