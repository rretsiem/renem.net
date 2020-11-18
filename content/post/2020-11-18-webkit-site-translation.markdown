---
title: "Safari 14 übersetzt Webseiten"
date: 2020-11-18T21:12:34+01:00
categories:
- blog
- tech
description: "Safari 14 unterstützt nun selektives übersetzen von Webseiten, ausprobiert."
draft: false
tags:
- apple
- tipps
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

Ich bin für die technischen Details die vielleicht meinen Blog betreffen könnten und interessant klingen zu schnell begeistern. Als ich die neuen [Webkit-Features](https://webkit.org/blog/11340/new-webkit-features-in-safari-14/) vom Webkit-Team in Apples Safari 14 diese Woche gesehen und gelesen habe, war wieder so ein Moment um das gleich auszuprobieren.

Neben jeder Menge anderen technischen Neuerungen in Safari 14 (für Big Sur [^1], iOS14 & iPadOS14) geht es hier um _Webpage Translation_. Über die kleinen Buchstaben oben links in der URL-Zeile kann man nämlich unter z.B. iOS 14 nun eine Webseite übersetzen lassen. Und die ersten Tests damit lesen sich wirklich gut und nicht _zu_ maschinell übersetzt. Auch wenn natürlich nicht 100% alles passt.

> WebKit with Safari 14 on macOS Big Sur, iOS 14, and iPad OS 14 allows users to translate webpages between _English, Spanish, Simplified Chinese, French, German, Russian, and Brazilian Portuguese_. Safari automatically detects the language of webpages and offers translation based on the user’s Preferred Languages list. - [New WebKit Features in Safari 14](https://webkit.org/blog/11340/new-webkit-features-in-safari-14/)

Das musste ich hier für den Blog gleich mal ausprobieren und habe für alle Artikel sowie Titel im Blog die Übersetzung "erlaubt" und für Dinge wie Tags, Footer, etc. unterbunden, da dort bereits einiges an Text in Englisch ist.

Wer das auch nachbauen will:

> Content authors can instruct Safari on the specific elements that should or should not be translated. Enable translation of element contents with an empty `translate` attribute or `translate="yes"`, or disable with `translate="no"`. It’s best to mark specific elements and avoid using the attribute on a single container for the entire document.

Was leider bei dem Feature nicht zu funktionieren scheint ist die Kombination eine Webseite zu übersetzen und dann in den _Reader-Modus_ zu schalten. Es geht nur eines von beiden, vielleicht wird das ja noch nachgereicht.

[^1]: Das geht leider mit Safari 14 unter MacOS Catalina nicht, nur mit Big Sur.

