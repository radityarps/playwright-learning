# Playwright Learning

Repo latihan QA automation dengan Playwright Test: UI testing aplikasi Todo, API testing, locators, fixtures, page object model, dan test isolation.

## Persiapan

- Node.js (versi yang mendukung `pnpm-lock.yaml`)
- pnpm
- Browser Playwright yang diperlukan untuk project yang dijalankan

```sh
pnpm install
pnpm exec playwright install
```

## Menjalankan test

```sh
# Semua test di semua browser yang dikonfigurasi
pnpm exec playwright test

# Test Chromium saja
pnpm exec playwright test --project=chromium

# Capstone saja di Chromium
pnpm exec playwright test tests/capstone --project=chromium

# Mode UI interaktif
pnpm exec playwright test --ui

# Laporan HTML setelah test selesai
pnpm exec playwright show-report
```

Konfigurasi berada di `playwright.config.ts`; test ada di `tests/`. Laporan HTML, hasil test, dan trace kegagalan dibuat oleh Playwright dan diabaikan Git.

## Catatan

Test API menggunakan layanan contoh JSONPlaceholder. Test UI Todo bergantung pada aplikasi Todo yang digunakan dalam latihan; lihat URL/konfigurasi di test terkait sebelum menjalankan jika aplikasi local tidak tersedia.
