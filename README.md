# landkreise-deutschland

[![Greenkeeper badge](https://badges.greenkeeper.io/mojoaxel/landkreise-deutschland.svg)](https://greenkeeper.io/)

Kreisfreie Städte und Landkreise nach Fläche, Bevölkerung und Bevölkerungsdichte

Stand: 31.12.2018

## API

- DISTRICT_FIELDS
- getDistricts()
- getDistrictByAGS(ags)
- getDistrictByNUC(nuc)
- getDistrictByNameAndType(name, type?)

Beispiele zur Benutzung findet man im `tests` Ordner.

## Example District:

```js
{
	"AGS": "09563",
	"type": "Kreisfreie Stadt",
	"name": "Fürth",
	"NUTS3": "DE253",
	"area_km2": 63.35,
	"population": 127748,
	"population_male": 62603,
	"population_female": 65145,
	"population_per_km2": 2017
}
```

## Update

Sollen die Daten upgedated werden sind folgende Schritte durchzuführen:

- Neue XLSX Datei [herunterladen](https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/04-kreise.html).
- Die Datei als CSV exportieren.
- CSV-Datei aufräumen.
- Spalten-Namen ändern.
- Alle Zahlenformate anpassen.
- Folgender String muss aus allen Namen entfernt werden: `, Stadtkreis`
- Als CSV abspiechern.
- CSV in JSON konvertieren.


## Quelle

https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/04-kreise.html

Quelle: Gemeindeverzeichnis-Informationssystem GV-ISys

- Fläche in Rheinland-Pfalz: Ohne das Gebiet "gemeinsames deutsch-luxemburgisches Hoheitsgebiet" von 6,20 km2.
- Fläche in Mecklenburg-Vorpommern: Ohne das Gebiet "Küstengewässer einschl. Anteil am Festlandsockel" von 1,00 km2.
- Abweichungen bei den Flächenangaben sind durch Runden der Zahlen möglich.
- Aufgrund fachlicher und methodischer Umstellungen in der Vermessungsverwaltung auf das Amtliche Liegenschaftskataster-Informationssystem (ALKIS®) ist der Vergleich der Flächendaten ab 2014 mit den Flächendaten vorangegangener Jahre nur eingeschränkt möglich.
- Die Ergebnisse ab Berichtsjahr 2016 sind aufgrund methodischer Änderungen und technischer Weiterentwicklung nur bedingt mit den Vorjahreswerten vegleichbar. Erläuterungen dazu finden Sie unter www.destatis.de beim Bevölkerungsstand."

## Lizenz

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode) © Statistisches Bundesamt (Destatis), 2019, Daten im Auftrag der Herausgebergemeinschaft Statistische Ämter des Bundes und der Länder, 

Vervielfältigung und Verbreitung, auch auszugsweise, mit Quellenangabe gestattet.
