---
tags:
- tech
- backup
comments: true
date: 2014-06-22T00:00:00+02:00
title: Meine Backup-Strategie
aliases:
- /2014/06/22/meine-backup-strategie/
---

{{< figure src="https://files.app.net/2lvwlFJHT.jpg" caption="Backup Strategie" >}}

Ich hatte dazu bereits vor einiger Zeit schon einmal einen [Post geschrieben]({{< ref "post/2012-10-16-backup.markdown" >}}), aber etwas Auffrischung kann bei so einem wichtigen Thema nicht schaden.

Da ich gerade wieder einen Fall von Datenverlust im entfernten Bekanntenkreis hatte, denke ich ist es mal wieder an der Zeit meine persönliche Backup-Strategie vorzustellen. Diese ist sicherlich nicht perfekt und es gibt wie immer viele Lösungen, aber vielleicht ist es ja ein guter Denkanstoß für jene die das bisher komplett vernachlässigt haben.  

### Time Machine

Für jeden Mac-User ein Muss! Wenn man auch nur ein paar Dateien, Dokumente , Erinnerungen, etc. hat die einem wichtig sind dann unbedingt nutzen.  
Seit OS X Leopard (10.5) ist [Time Machine](https://de.wikipedia.org/wiki/Time_Machine_%28Apple%29) bei allen Mac OS Versionen dabei und hat mir schon einiges an Arbeit erspart. Ich hatte zwar bisher (Auf Holz klopf) keinen Datenverlust, aber auch bei Neuinstallationen kann man mit einer Sicherung aus Time Machine eine komplette Rücksicherung durchführen und alles ist nach einem Neustart so wie beim letzten Backup. Von den Einstellungen in Programmen bis hin zum Chaos auf dem Desktop.

Da Time Machine inkrementelle Sicherungen durchführt dauert die Sicherung auch nicht lang und läuft fast unbemerkt im Hintergrund mit. Alles was man dazu benötigt ist eine externe Festplatte.

Für jeden Mac-User gilt also, Festplatte anstecken oder kaufen und Time Machine einschalten, keine Ausrede!

### BitTorrent Sync (BTSync)

Alle meine Ordner mit Dokumenten habe ich hier im lokalen Netzwerk mit [BitTorrent Sync](http://www.bittorrent.com/sync) "gesichert". Ich schreibe gesichert absichtlich in Anführungszeichen da es sich eigentlich nicht direkt um eine Sicherung handelt, aber dadurch dass die Dokumente auf jedem Computer im lokalen Haushalt verfügbar sind kann ich bei Bedarf auch von dort eine Wiederherstellung starten. Ein netter Nebeneffekt einer lokalen Synchronisationslösung.  
Man muss sich aber bewusst sein das mit BitTorrent Sync nicht verschiedene Versionen einer Datei gesichert werden. Wenn man also eine Datei Ausversehen ändert, dann wird diese im Normalfall auch direkt synchronisiert zu den anderen PCs. Gelöschte Dateien können dank der _Archive_ Funktion aber wiederhergestellt werden.

#### Alternativ Dropbox

Wer [Dropbox](https://www.dropbox.com/) nutzt kann damit seine Dokumente und Daten dort speichern. Das liegt aber bei jedem persönlich und jeder muss für sich selbst einschätzen können, ob er wichtige Dokumente mit evtl. persönlichen Informationen oder Fotos einem externen Dienstleister anvertrauen will. Die Dateien liegen umverschlüsselt bei Dropbox. Wenn einen das nicht stört, wäre das wie gesagt eine Alternative.

### SuperDuper!

Vor ein paar Wochen habe ich mir für ca. 25€ die Software [SuperDuper!](http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html) gekauft. Die Software an sich gibt es für den Mac schon ewig aber ich hatte bisher immer die kostenlose Variante genutzt. Diese eignet sich allerdings nicht für eine automatische Sicherung ohne zutun.  
Mit SuperDuper! kann man voll startfähige Kopien seiner Festplatte anfertigen. Und selbstverständlich benötigt man eine weitere Festplatte und macht das SuperDuper! Backup nicht auf der gleichen Festplatte wie die, die für Time Machine benutzt wird.  
Mit der gekauften Version kann man wie oben angesprochen automatische Backups durchführen und dafür jedes Mal ein Passwort eingeben zu müssen. Damit habe ich also im Falle des Falles dass die SSD in meinem MacBook kaputt geht, direkt die Möglichkeit von der SuperDuper! Festplatte zu starten und weiterzuarbeiten.  
Bei neueren MacBooks kann man die SSDs ja leider nicht einmal mehr selbst tauschen und muss diese einschicken oder damit zum AppleStore oder -Partner. Ich kann die SSD zwar noch wechseln, aber eine zweite habe ich auch nicht auf Lager und wenn ein Fehler passiert dann ja immer am Wochenende und damit auch keine Möglichkeit mal eben schnell eine neue zu kaufen.

### Backblaze

Seit gut 2 Jahren nutze ich nun den Online-Backup-Dienst [Backblaze](https://secure.backblaze.com/r/00mqxc).[^1] Im Hintergrund läuft eine Software auf dem Mac mit der ohne Zutun die wichtigen Daten (keine Programme und Systemdaten) sichert und auf deren Servern speichert. Die Daten liegen dort dann verschlüsselt[^2] vor und können nur mit der eingegeben Passphrase wieder hergestellt werden.  
Auch vom iPhone aus kann ich dank einer App direkt auf meine Sicherung zugreifen und bei Bedarf somit auch auf einzelne Dateien von unterwegs.

Die Firma hat dazu gerade [interessante Studie](http://blog.backblaze.com/2014/06/16/seniors-are-the-kings-of-data-backup/) veröffentlicht. Es ist erschreckend wie wenig Nutzer wirklich Wert auf eine Sicherung legen.

{{< figure class="center" src="https://files.app.net/2lvpvlV7e.jpg" width="400" height="400" title="Backblaze Studie" >}}


Backblaze gibt es ebenfalls für Windows und stellt bei mir nach wie vor die wichtige _Off-Site-Backup-Lösung_ dar. Damit habe ich auch dann noch all meine wichtigen Daten wenn zu Hause der Rechner weg ist, oder durch einen Schaden (Wasser, Feuer, Diebstahl) gar nicht mehr verfügbar.

### Wie schaut's mit dem iPhone oder iPad aus?

Da halte ich es ziemlich einfach. Ich nutze die iCloud Backups der Geräte. Der Speicherplatz von Apple reicht mir dazu im Moment noch aus und in Zukunft hoffe ich das Apple wie angekündigt die Preise senkt und die Speichergrenzen erhöht.
Ab und zu stecke ich das iPhone auch mal an den Rechner und mache ein lokales Backup mit iTunes, das geschieht aber eher selten und nicht regelmäßig.  
Geschossene Fotos landen Dank BitTorrent Sync im Hintergrund direkt auf meinen lokalen Rechner und damit muss ich Fotos nicht extra noch einmal sichern. Sehr hilfreich und das funktioniert prima.  
Kontakte und Kalender habe ich bei [Posteo](https://posteo.de/) gehostet und die lokalen synchronisierten Daten sind somit immer aktuell. Einmal im Monat (wenn ich daran denke) lade ich eine Sicherung der Kontakte und Kalender von Posteo auf meine Festplatte herunter und damit habe ich durch oben genannten Dienste und Anwendungen mit TimeMachine und Backblaze auch diese immer gesichert.

### Fazit

Meine Strategie habe ich hier nun vorgestellt. Der Post ist mal wieder länger als geplant geworden, bei so einem wichtigen Thema darf man das aber auch mal tun.  
Es sollte für jeden etwas dabei sein, auch wenn es sicherlich andere, bessere oder alternative Lösungen gibt. Die Anwendungen und Dienste die ich oben erwähnt habe, erfüllen für mich aber voll ihren Zweck und alles ist darauf eingestellt.  
Sollte aber jemand eine bessere Lösung oder weitere Tipps haben, kann er dies gern in den Kommentaren erläutern.


[^1]: Der Link ist ein Invite-Link. Wer sich einen Account bei Backblaze damit erstellt erhält automatisch 1 Monate umsonst. Auch ich erhalte dadurch einen extra Monat.

 [^2]: Wenn man Backblaze installiert ist die Verschlüsselung nicht automatisch eingeschaltet. Man muss hier in den Einstellungen der App am Mac eine sichere Passphrase definieren. Damit werden dann alle Backups verschlüsselt und können auch nur mit dieser Passphrase wiederhergestellt werden.
