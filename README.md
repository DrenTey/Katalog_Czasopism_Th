# Katalog_Czasopism_Th
Prosta wyszukiwarka tytułów dostępnych w Czasopismach Teologicznych (zwłaszcza Open Access)

Ta prosta wyszukiwaka była pisana hobbistycznie aby wspomóc proces wyszukiwania artykułów naukowych dla studentów teologii. 
Gdy szukałem artykułów dla kilku osób, które mnie o to prosiły zobaczyłem ciekawy bilans:

- Wiele artykułów jest dostępnych w polityce Open Access, na różnych portalach, tworząc stabilny dostęp.
- Te portale, często zbierają wiele innych dziedzin, i mają systemy wyszukiwania, które zamiast limitować zawsze zwiększają.

Postanowiłem, więc wspomóc kilku moich przyjaciół i na szybko opracowałem:
- Stronę html, która będzie służyła jako interface pomiędzy danymi i filtrami użytkownika
- Jupiter Notebook, który zbiera informację o tytułach w danym wydaniu Czasopisma i konwertują je do formatu zrozumiałego dla Zotero
- Sposób importu do Zotero [BLaTex]  i eksportu z Zotero [CSL JSON]
  - Import jako better LaTex pozwala na dodanie informacji, które mogłyby się przydać moim kolegom. 
  - Cała kolekcja jest zapisana jako jedna tablica, której wystarczy zadeklarować jako zmienną.
  - Tak obrobiony plik można zapisać jako plik js i dodać w nagłówku lub dowolnym innym miejscu strony jako źródło danych
- Skrypt js który pozwalałby na import danych z żródła.js do DOM strony głównej jako tablicy html
- Skrypt js który pozwalałby użytkownikom poprzez button z "onkey" na wyszukiwanie jednego z interesujących ich parametrów.

Stopniowo postaram się 
- dopracować źródło danych,
- dodać opcję wyszukiwania łączonych kryteriów
- wyświetlenie bezpośrednich linków do wyszukanych artykułów.
- poprawić szatę graficzną
