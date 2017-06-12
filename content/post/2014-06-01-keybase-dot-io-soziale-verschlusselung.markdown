---
tags:
- tech
- php
- security
comments: true
date: 2014-06-01T00:00:00+02:00
title: Keybase.io - soziale Verschlüsselung?
twitter_card:
  image: https://files.app.net/2gcrzAt73.png
aliases:
- /2014/06/01/keybase-dot-io-soziale-verschlusselung/
---

{{< figure class="center" src="https://files.app.net/2gcrzAt73.png" >}}

Seit ein paar Monaten gibt es einen neuen Service der versucht, Verschlüsselung leichter für die Masse zugänglich zu machen – [Keybase.io](https://keybase.io/). Im Detail geht es im PGP/GPG Verschlüsselung welche seit Jahren verfügbar ist, aber leider nur von technik-affinen Menschen genutzt wird, weil es eben nicht so einfach ist mal eben eine verschlüsselte E-Mail an jemanden zu schreiben.  
Ich habe dazu bereits vor einiger Zeit einmal einen [Beitrag verfasst]({{< ref "post/2013-08-02-projekt-2013-sichere-e-mails.markdown" >}}) um einen kurzen Einblick zu geben.

Keybase.io schickt sich an, hier einen etwas moderneren Ansatz zu gehen und verbindet das tauschen von Schlüsseln mit einer sozialen Komponente. Denn Schlüssel-Server die das Auffinden von öffentlichen Schlüsseln erlauben gibt es schon lang, aber sind eben nicht so einfach zu benutzen.

## Was macht Keybase.io denn nun anders?

Bisher hat man sich einen Schlüssel generiert, diesen wenn man wollte, auf einen Schlüssel-Server geladen und war so für andere Leute die mit einem verschlüsselt kommunizieren wollten auffindbar. Ob der Schlüssel den ich da hochlade echt ist und wirklich mir gehört, kann man nur feststellen wenn man seinen Schlüssel von anderen Personen unterzeichnen lässt. Dazu bietet z.B. der Heise Verlag unter dem Namen [Krypto-Kampagne](http://www.heise.de/security/dienste/Was-ist-die-c-t-Krypto-Kampagne-473381.html) seit Jahren einen Service an. Eine andere Möglichkeit sind sogenannte [Keysigning-Party](https://de.wikipedia.org/wiki/Keysigning-Party), allerdings haben die in der breiten Öffentlichkeit leider eher den Nerd-Ruf weg.  
Alles also nicht so einfach um seinen eigenen Schlüssel als wirklich seinen eigenen auszugeben.

Soviel vorweg, Keybase.io verbindet nun den Dienst einen Schlüssel-Server damit, dass man bestimmte soziale Profile, die heutzutage die meisten Menschen besitzen zu verifizieren. Wenn man z.B. einen Twitter-Account besitzt, hat man die Möglichkeit einen Tweet mit einem verschlüsselten Text zu erzeugen um zu "beweisen", dass die Person der der GPG-Schlüssel gehört auch der Twitter-Account gehört. Das gleiche geht im Moment auch mit einem Github-Account und einer eigenen Webseite.  
Um so mehr solcher Accounts man mit seinem [Keybase-Profil](https://keybase.io/renem) verbindet um so eindeutiger wird es dass der Schlüssel wirklich dieser Person gehört. Der zweite Vorteil ist, dass man es dadurch einem Angreifer schwerer macht, denn dieser müsste dann z.B. den Twitter-Account, den Github-Account und die Zugangsdaten für die Webseite besitzen.

### Follower sind Tracker
Der nächste Unterschied ist, man besitzt eine Profil-Seite, dort kann man allerlei Informationen herauslesen und andere User von Keybase haben die Möglichkeit ein Profil eines Nutzers zu verifizieren und zu "tracken". Dadurch bestätigt ein Nutzer das er die Identitäten (z.B. Twitter-Account, Webseite) geprüft hat und muss dies nicht jedes Mal von neuem tun um verschlüsselt mit dieser Person in Kontakt zu treten.

Genau so kann ich anderen Nutzern folgen um sicherzustellen das der Identität mit dem korrekten öffentlichen Schlüssel angezeigt wird.


### Wie nutzen?
Es besteht die Möglichkeit die kompl. Kommunikation über die Webseite von Keybase zu erledigen. Das setzt aber voraus das man auch seinen privaten Schlüssel preisgibt, dass passiert zwar nur lokal im Browser, via Javascript, allerdings liegt dieser dann trotzdem im Klartext vor und sollte Keybase.io einmal Ziel eines Angriffs werden, haben die Hacker auch Zugriff auf diesen Schlüssel.  
Der Keybase client kann aber auch von der Kommandozeile benutzt werden und bietet auf dem Mac mit dem GPG-Schlüsselbund sogar die Möglichkeit den Schlüssel einmal getreckte Nutzer in den lokalen Schlüsselbund zu importieren. Damit kann man dann z.B. mit den [GPG Tools](https://gpgtools.org/) und Apple Mail verschlüsseln.

Da sich Keybase.io aber im Moment in einer frühen Alpha-Phase befindet kann noch nicht jeder ein Profil erstellen. Das geht nur mit einer Einladung eines anderen Benutzers. Die Einladungen sind limitiert.  
Ich habe aber ein paar Einladungen übrig, wer also Interesse hat, [schreibt mir](/about) am besten eine Nachricht mit einem kurzen Kommentar. Auch hier kann ein Kommentar hinterlassen werden, die E-Mail Adresse an die ich die Einladung dann verschicken soll, muss ich dazu aber wissen.
