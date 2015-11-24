# Cashbook

In Cashbook gibt es ein paar zentrale Funktionen und Konzepte, die wir einmal kurz erläutern möchten.
Zur Benutzung der App muss man sich zunächst registrieren. Um die Verwendung desselben Accounts auf verschiedenen Geräten zu ermöglichen, besteht auch die Möglichkeit, sich mit einem bereits erstellten Account einzuloggen.
Nach dem Einrichten eines neuen Accounts hat man zunächst noch keine WG. Der Benutzer hat die Wahl, eine WG zu gründen, oder einer WG beizutreten. Die WG-Gründung ist immer möglich, aber für den Beitritt in eine bestehende WG benötigt man eine Einladung. Einladungen kann man bei der Gründung einer WG verschicken, zudem ist es möglich nach der Gründung weitere Mitglieder einzuladen.
Das Herzstück von Cashbook sind jedoch die Ausgaben. Ausgaben anzulegen ist durch zwei Eingabefelder leicht und intuitiv machbar. Heutigen Standards entsprechend funktioniert das Löschen über Wisch-Gesten. Wischt man eine Ausgabe nach links, erscheint der Löschen-Button.

Für Cashbook hat sich unser Entwicklerteam ehrgeizige Ziele gesetzt:
- Nutzer sollen in Echtzeit Auskünfte über Budget und Ausgaben bekommen
- für den Einsatz auf iOS, der für die Zukunft angestrebt wird, soll derselbe Code wie auf Android verwendet werden können
- Updates sollen schell und in kurzen Abständen einspielbar sein.
- Die Entwicklung soll schnell voranschreiten

# Meteor

Das Entwicklerteam von Cashbook setzt für die Entwicklung voll auf die hochmoderne Programmier-Plattform "Meteor".

Für die Programmierung stellt Meteor ein mächtiges Framework und Entwicklungstools bereit, die die Programmierung stark vereinfachen und beschleunigen. Für dieses Framework existieren zudem viele Erweiterungen, die für uns kostenlos nutzbar sind. Ein Beispiel für eine solche Erweiterung wäre das "hammer"-plugin, das den Umgang mit Wisch-gesten stark vereinfacht. Durch Verwendung von "Hammer" haben wir nur spezifizieren müssen, was beim Wischen passieren soll, anstatt alles von Anfang an neu zu programmieren. Somit können wir für gängige Anforderungen auf Standardlösungen setzen und uns auf das konzentrieren was unsere App von allen anderen unterscheidet.

Meteor ermöglicht es uns Cashbook komplett in der Programmiersprache Javascript zu schreiben. Zudem kann der Code gleichermaßen auf Android und iOS laufen, und zum Teil läuft derselbe Code auch auf dem Server. Das reduziert den Umfang des nötigen Codes drastisch, was sich stark positiv auf die Entwicklungszeit und -kosten auswirkt. Durch den Einsatz von Javascript als einziger Programmiersprache, konnte sich unser Unternehmen voll auf Javascript spezialisieren, anstatt kleine spezialisierte Teams bilden zu müssen, wodurch wiederum Kosten gespart werden.

Für den Betrieb von Cashbook wird ein zentraler Server benötigt, auf dem u.a. die Daten gespeichert werden. Das Einspielen von Updates auf einem Server kann unter Umständen umständlich und zeitintensiv sein, oder es muss ein kompliziertes Programm nur für diese Aufgabe geschrieben werden. Nicht so bei Meteor. Das Einspielen von Updates ist über einen einzigen Befehl möglich, alles läuft automatisch. Zudem gibt es Hosting-Dienste, die sich auf Meteor spezialisiert haben, und neben zuverlässigen Servern interessante Features wie Performance-Überwachung, Usertracking und das updaten der App bei den Benutzern anbieten.

Neben diesen Vorteilen ist Meteor auch spezialisiert auf die Verarbeitung von Daten in Echtzeit. Daten wie z.B. Ausgaben und Budget einer WG werden zwischen Mitgliedern und Server bei jeder Änderung synchronisiert, sodass alle auf dem letzten Stand bleiben. Da nur die Daten und keine großen Dateien ausgetauscht werden, benötigt die App wenig Bandbreite. Für Cashbook ist das essenziell, da wir den Fokus auf die mobile Nutzbarkeit gelegt haben. Zudem bietet Meteor Konzepte, um mit Latenz umzugehen. So werden beispielsweise neu erstellte Ausgaben schon angezeigt, bevor der Server die Erstellung bestätigt hat. Dadurch wirkt Cashbook auch bei langsamer Internetverbindung nie langsam.

Wie sie sehen, haben wir auf technischer Seite die Weichen für eine hochlukrative Anwendung gestellt, indem wir auf ein schlankes, elegantes System setzen, das von einem kleinen Team schnell weiter entwickelt werden kann. Cashbook ist längst mehr als eine Idee, es ist eine App in den Startlöchern inklusive Prototyp, Werbevideo und Testserver. Nun gilt es zu investieren, um zu wachsen!

Investitionen sind vor allem in den Bereichen Marketing, Entwicklung und Hosting geplant. Ein Hosting für eine junge App ist bereits ab ca. 50$ monatlich möglich, mit zunehmender Popularität und Funktionsumfang der Anwendung kann nachträglich skaliert werden. Es soll eine Website geben, die Cashbook bewirbt, und die App soll demnächst im Google Play Store erscheinen.