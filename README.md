# Wedding site — gotowy projekt

W tym folderze znajdziesz prostą, estetyczną stronę wizytówkę ślubno-weselną:
- `index.html` — główny plik strony
- `style.css` — stylizacja
- `script.js` — proste skrypty (RSVP + lightbox)
- `images/` — miejsce na zdjęcia (podmień pliki na własne)

## Jak edytować (szybko)
- Otwórz `index.html` w edytorze tekstu (np. VS Code, Notepad++).
- Zmień imiona i datę w sekcji **HERO** (komentarz: EDYTUJ).
- Zaktualizuj adresy i godziny w sekcji **Informacje**.
- Podmień pliki w `images/` (możesz nadpisać te pliki swoimi zdjęciami o tych samych nazwach).
- Aby zmienić wygląd, edytuj `style.css`.

## Jak przetestować lokalnie
1. Rozpakuj zip.
2. Otwórz `index.html` dwukrotnie klikając plik (będzie działać lokalnie), lub uruchom prosty serwer:
   ```
   cd wedding-site
   python3 -m http.server 8000
   ```
   i odwiedź `http://localhost:8000`.

## Jak wrzucić na GitHub (dwie metody)

### Metoda A — (najprostsza) przez przeglądarkę (GitHub web)
1. Zaloguj się na https://github.com.
2. Kliknij **New repository**.
   - Nazwa: np. `wedding-site`
   - Zaznacz: Public (lub Private), według preferencji.
   - Nie musisz niczego inicjalizować (README można dodać później).
3. Po utworzeniu repo: kliknij **Add file → Upload files**.
4. Rozpakuj zip i przeciągnij wszystkie pliki i folder `images/` do pola przeciągania.
5. Na dole wpisz commit message (np. "Initial site") i kliknij **Commit changes**.
6. W repo przejdź do **Settings → Pages** (lub w nowym UI: **Settings → Pages and deployments**).
   - Wybierz branch: `main` (albo `master` jeśli taka jest) i folder: `/ (root)`.
   - Kliknij **Save / Deploy**.
7. Po chwili (kilka sekund–minut) strona będzie dostępna pod adresem:
   ```
   https://[twoja-nazwa-uzytkownika].github.io/wedding-site/
   ```

> Uwaga: jeżeli nie widzisz opcji Pages w Settings, poszukaj sekcji "Pages" lub "Pages and deployments" — GitHub czasem zmienia układ, ale opcja jest dostępna w ustawieniach repozytorium.

### Metoda B — (zalecana, jeśli znasz git) przez wiersz poleceń
1. Zainstaluj git i skonfiguruj (jeśli jeszcze nie):
   ```
   git config --global user.name "Twoje Imię"
   git config --global user.email "twoj@email"
   ```
2. Utwórz repo na GitHub (np. `wedding-site`) — zapamiętaj URL (HTTPS lub SSH).
3. W terminalu:
   ```
   cd /sciezka/do/rozpakowanego/wedding-site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/TWOJ_LOGIN/wedding-site.git
   git push -u origin main
   ```
4. W repo na GitHub -> Settings -> Pages -> wybierz branch `main` i folder `root` -> Save.
5. Strona opublikuje się pod:
   ```
   https://TWOJ_LOGIN.github.io/wedding-site/
   ```

## Dalsze kroki (opcjonalnie)
- Możemy podłączyć formularz RSVP do Google Forms lub do prostego endpointu (np. Formspree) — daj znać, jeśli chcesz.
- Możemy dodać mapę Google (iframe) w sekcji Lokalizacja.
- Jeśli chcesz, mogę pomóc opublikować repo (potrzebowałbym dostępu lub możesz podać kroki, które wykonasz — nie mogę logować się za Ciebie).

---  
Powodzenia! Jeśli chcesz, mogę teraz przygotować ZIP i udostępnić go do pobrania (gotowy do wrzucenia na GitHub).  
