---
tags:
- tech
- security
- pgp
comments: false
date: 2013-08-02T00:00:00+02:00
title: Projekt 2013 - Sichere E-Mails
aliases:
- /2013/08/02/projekt-2013-sichere-e-mails/
---

Wie im [letzten Post]({{< relref "/post/2013-07-29-projekt-2013-zweiter-akt-sicherheit.markdown">}}) angekündigt, möchte ich meine E-Mails in Zukunft verschlüsselt versenden und empfangen. Das ist nicht so einfach, denn dazu gehört ja auch immer der Kommunikationspartner mit dem man E-Mails austauscht. Da ich damit selbst noch etwas wenig Erfahrung habe, hilft nur "Learning by doing".

Was ich bisher dabei gelernt habe ist, dass es eben nicht einfach nur reicht auf den "Senden-Button" zu klicken, aber genau das macht es ja auch spanend. Erfahrungen habe ich dabei schon einige gesammelt, welche mir auch helfen sollten in Zukunft dieses Thema an nicht ganz so technik-begabte Menschen zu bringen.

### Anfangen!

Da man am besten den Umgang mit neuen Lösungen lernt in dem man sie verwendet. Wer also sicher versendete Mails testen will und den Umgang damit, der kann mir gern eine Mail schreiben. Die Daten dazu stehen oben im Menü. Ihr benötigt [meinen öffentlichen Schlüssel]({{< relref "/pgp.md" >}}) und [meine Mail-Adresse]({{< relref "/about.md" >}}).


### Software

Das soll nur ein kurzer Überblick sein, es gibt sicherlich mehr Programme und andere Wege, das sind meine Erfahrungen und sollten einen schnellen Einstieg ermöglichen.

#### Mac

Es gibt eine super Lösung Namens [GPGMail 2](https://gpgtools.org/gpgmail/index.html). Damit kann man Schlüssel erzeugen, verwalten und auch in der Apple eigenen Mail.app PGP-Verschlüsselung nutzen.  
Meine Erfahrung damit war positiv und damit ist es auch technik-fremdem Menschen möglich Mails sicher zu versenden.

#### Windows

Auch für Windows gibt es eine Lösung die den Einstieg einfach macht, [GPG4Win](http://www.gpg4win.org/index-de.html) nennt sich diese.  Die Software allein reicht allerdings nicht um damit Mails zu versenden. Das erledigt ihr am besten mit [Thunderbird](https://www.mozilla.org/de/thunderbird) und dem Add-On [EnigMail](http://www.enigmail.net).  
Ich hatte lediglich ein Problem während der Installation unter Windows 8, das aber durch einen Reboot des Rechners behoben werden konnte. Die Software wurde nicht gefunden, meldete EnigMail nach der Installation, nach einem Neustart war aber alles lauffähig.

#### Für alle Plattformen (Mac, Windows, Linux)

Dank [Mozillas Thunderbird](https://www.mozilla.org/de/thunderbird) gibt es eine E-Mail Programm welches ihr in fast jedem Betriebssystem verwenden könnt. Die OpenGPG Suite ist auch auf den meisten Plattformen verfügbar. Dazu das [Add-On EnigMail](http://www.enigmail.net/home/index.php)  welches sich komfortabel über Thunderbird selbst installieren lässt.  
Der klare Vorteil ist, das man selbst bei einem Wechsel des Betriebssystems immer noch die gewohnte E-Mail Umgebung nutzen kann.

#### Mobil

Ich habe den Punkt Mobil extra an das Ende gepackt, denn hier kommt der großes Nachteil. Es gibt zwar Lösungen die PGP/GPG auf dem iPhone anbieten, leider aber eher kompliziert und nicht so einfach wie auf dem Desktop. Wie es bei Android aussieht, kann ich nicht sagen, wenn hier aber jemand von euch einen Tipp hat werde ich den Artikel gern aktualisieren.  
Grundsätzlich funktioniert Verschlüsselung auf dem Mobiltelefon, aber eben nicht so komfortabel.

- [iPGMail](https://itunes.apple.com/de/app/ipgmail/id430780873) (iOS)
- [oPenGP](https://itunes.apple.com/de/app/opengp/id414003727) (iOS)
- [SecuMail](https://itunes.apple.com/de/app/secumail/id414328661) (iOS) - keine Erfahrung, da mir das Programm dann doch etwas zu teuer ist, Test-Version gibt es keine.
- [K-9 Mail](https://play.google.com/store/apps/details?id=com.fsck.k9) (Android) - keine Erfahrung da kein Android-Gerät verfügbar

### Weitere Infos

Auf folgenden Blogs und Seiten findet ihr weitere Informationen Tips und andere interessante Beiträge dazu.

- [GPGMail2](http://www.happybuddha1975.de/gpgmail-2/) bei HappyBuddha
- [Verschlüsselt mehr Mails](http://cbrueggenolte.de/2013/07/verschluesselt-mehr-emails/) bei Carsten
- [PGP und GnuPG](http://www.sven-walther.de/pgp/index.html) bei Sven
