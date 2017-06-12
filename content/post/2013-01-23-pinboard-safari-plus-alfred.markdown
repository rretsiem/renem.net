---
tags:
- tech
- alfred
- scripting
- osx
comments: false
date: 2013-01-23T00:00:00+02:00
title: Pinboard Safari plus Alfred
aliases:
- /2013/01/23/pinboard-safari-plus-alfred/
---

Ein mächtiges Werkzeug welches im am Mac täglich oft nutze ist [Alfred][alfredapp]. Damit lassen sich neben dem Starten von Applikationen noch einige andere nützliche Dinge erledigen.  
Da ich mich im Moment wieder mehr mit dem bloggen beschäftige benötigt man oft ein paar Helfer die mich dabei unterstützen.
s)

Ein Helfer den ich bisher vermisste ist, den aktiven Tab in Safari schnell als Lesezeichen bei [Pinboard][pinboard] (Mein Favorit wenn es um Lesezeichen geht) speichern zu können. 

Mir ist durchaus bewusst das es [Bookmarklets][wikipedia] und Erweiterungen gibt um das zu realisieren, finde ich aber persönlich zu umständlich. Daher habe ich mich einmal auf die Suche begeben nach einer Erweiterung für Alfred und bin leider nur teilweise fündig geworden.

Für Google Chrome habe ich [diese Alfred Extension][timbueno] entdeckt. Nach ein paar kleinen Anpassungen funktioniert das Skript nun auch mit Safari und kann bei Bedarf wieder auf Chrome umgestellt werden.

Damit kann man nun einfach mit

> pins _tag1 tag2 tag3 …_

das im Moment offene Tab in Safari an Pinboard senden. Es muss lediglich der _username_ und das _password_ im Script angepasst werden.  
Es wird außerdem [Growl][growl] benötigt.


[Download][cl] der Alfred Extension  
[Gist][github] auf Github


[alfredapp]: http://www.alfredapp.com/
[cl]: http://cl.ly/MNwe
[github]: https://gist.github.com/4608700
[growl]: http://www.growl.info/
[pinboard]: http://pinboard.in/
[timbueno]: http://www.timbueno.com/2012/06/27/pinboard-plus-alfred
[wikipedia]: https://de.wikipedia.org/wiki/Bookmarklet
