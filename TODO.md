# TODO Submission Bookshelf API

## 1. Persiapan Project (Setup)

- [x] Initialize Project (`npm init -y`)
- [x] Install Framework (`npm install @hapi/hapi` atau `express`)
- [x] Install Nanoid versi 3 (`npm install nanoid@3`)
- [x] Install Nodemon untuk development (`npm install --save-dev nodemon`)
- [x] Install ESLint (Opsional, untuk nilai maksimal/bintang 5)
- [x] Buat struktur folder (`src/server.js`, `src/routes.js`, `src/handler.js`, `src/books.js`)

## 2. Konfigurasi Server & Scripts

- [x] **Kriteria 2:** Tambahkan script di `package.json`:
  - [x] `"start": "node src/server.js"` (Wajib, jangan pakai nodemon disini)
  - [x] `"start-dev": "nodemon src/server.js"` (Opsional, untuk development)
- [x] **Kriteria 1:** Set Port server ke **9000**
- [x] Setup CORS (Agar lolos test Postman)
- [x] Siapkan array untuk menyimpan data buku (in-memory)

## 3. Implementasi API (Kriteria Wajib)

### A. Route: POST /books (Menyimpan Buku)

- [x] **Kriteria 3:** Implementasi logika `POST`.
- [x] Validasi Input:
  - [x] Cek properti `name`. Jika kosong -> Return 400 (`Gagal menambahkan buku. Mohon isi nama buku`).
  - [x] Cek `readPage` > `pageCount`. Jika ya -> Return 400 (`Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount`).
- [x] Data Processing:
  - [x] Generate `id` (unik, gunakan nanoid).
  - [x] Generate `insertedAt` & `updatedAt` (`new Date().toISOString()`).
  - [x] Set `finished` (true jika `pageCount === readPage`, else false).
  - [ ] Set `reading` (default false jika tidak dikirim, atau ambil dari request).
- [x] Response Sukses:
  - [x] Return 201.
  - [x] Body: `{ status: "success", message: "...", data: { bookId: "..." } }`.

### B. Route: GET /books (Menampilkan Seluruh Buku)

- [x] **Kriteria 4:** Implementasi logika `GET` all.
- [x] Mapping Data:
  - [x] Hanya tampilkan properti: `id`, `name`, `publisher`.
- [x] Response Sukses:
  - [x] Return 200.
  - [x] Body: `{ status: "success", data: { books: [] } }`.

### C. Route: GET /books/{bookId} (Detail Buku)

- [x] **Kriteria 5:** Implementasi logika `GET` by ID.
- [x] Cek keberadaan ID di array.
- [x] Jika ID tidak ditemukan -> Return 404 (`Buku tidak ditemukan`).
- [x] Jika ditemukan -> Return 200 + Full object buku.

### D. Route: PUT /books/{bookId} (Mengubah Data Buku)

- [x] **Kriteria 6:** Implementasi logika `PUT` by ID.
- [x] Cek keberadaan ID. Jika tidak ketemu -> Return 404 (`Gagal memperbarui buku. Id tidak ditemukan`).
- [x] Validasi Input (Sama seperti POST):
  - [x] Cek `name`. Jika kosong -> Return 400.
  - [x] Cek `readPage` > `pageCount`. Jika salah -> Return 400.
- [x] Update Data:
  - [x] Update field yang dikirim.
  - [x] Update `updatedAt` dengan waktu sekarang.
- [x] Response Sukses: Return 200 (`Buku berhasil diperbarui`).

### E. Route: DELETE /books/{bookId} (Menghapus Buku)

- [x] **Kriteria 7:** Implementasi logika `DELETE` by ID.
- [x] Cek keberadaan ID. Jika tidak ketemu -> Return 404 (`Buku gagal dihapus. Id tidak ditemukan`).
- [x] Hapus data dari array.
- [x] Response Sukses: Return 200 (`Buku berhasil dihapus`).

## 4. Fitur Opsional (Nilai Bintang 5)

- [x] **Query Parameter:** Implementasi filter pada route `GET /books`:
  - [x] `?name`: Cari buku berdasarkan nama (case insensitive/non-exact).
  - [x] `?reading`: Filter `0` (false) atau `1` (true).
  - [x] `?finished`: Filter `0` (false) atau `1` (true).
- [x] **Code Quality:** Jalankan ESLint dan pastikan tidak ada error.

## 5. Pengujian & Finalisasi

- [x] Download Postman Collection & Environment.
- [x] Import ke aplikasi Postman.
- [x] Jalankan Collection Runner.
  - [x] Pastikan semua test "Mandatory" PASS.
  - [x] (Opsional) Pastikan test "Optional" PASS.
- [x] Hapus folder `node_modules`.
- [x] Zip folder project.
- [x] Submit!
