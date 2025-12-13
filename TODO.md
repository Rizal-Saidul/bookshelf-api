# TODO Submission Bookshelf API

## 1. Persiapan Project (Setup)
- [x] Initialize Project (`npm init -y`)
- [x] Install Framework (`npm install @hapi/hapi` atau `express`)
- [ ] Install Nanoid versi 3 (`npm install nanoid@3`)
- [ ] Install Nodemon untuk development (`npm install --save-dev nodemon`)
- [ ] Install ESLint (Opsional, untuk nilai maksimal/bintang 5)
- [ ] Buat struktur folder (`src/server.js`, `src/routes.js`, `src/handler.js`, `src/books.js`)

## 2. Konfigurasi Server & Scripts
- [ ] **Kriteria 2:** Tambahkan script di `package.json`:
    - [ ] `"start": "node src/server.js"` (Wajib, jangan pakai nodemon disini)
    - [ ] `"start-dev": "nodemon src/server.js"` (Opsional, untuk development)
- [ ] **Kriteria 1:** Set Port server ke **9000**
- [ ] Setup CORS (Agar lolos test Postman)
- [ ] Siapkan array untuk menyimpan data buku (in-memory)

## 3. Implementasi API (Kriteria Wajib)

### A. Route: POST /books (Menyimpan Buku)
- [ ] **Kriteria 3:** Implementasi logika `POST`.
- [ ] Validasi Input:
    - [ ] Cek properti `name`. Jika kosong -> Return 400 (`Gagal menambahkan buku. Mohon isi nama buku`).
    - [ ] Cek `readPage` > `pageCount`. Jika ya -> Return 400 (`Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount`).
- [ ] Data Processing:
    - [ ] Generate `id` (unik, gunakan nanoid).
    - [ ] Generate `insertedAt` & `updatedAt` (`new Date().toISOString()`).
    - [ ] Set `finished` (true jika `pageCount === readPage`, else false).
    - [ ] Set `reading` (default false jika tidak dikirim, atau ambil dari request).
- [ ] Response Sukses:
    - [ ] Return 201.
    - [ ] Body: `{ status: "success", message: "...", data: { bookId: "..." } }`.

### B. Route: GET /books (Menampilkan Seluruh Buku)
- [ ] **Kriteria 4:** Implementasi logika `GET` all.
- [ ] Mapping Data:
    - [ ] Hanya tampilkan properti: `id`, `name`, `publisher`.
- [ ] Response Sukses:
    - [ ] Return 200.
    - [ ] Body: `{ status: "success", data: { books: [] } }`.

### C. Route: GET /books/{bookId} (Detail Buku)
- [ ] **Kriteria 5:** Implementasi logika `GET` by ID.
- [ ] Cek keberadaan ID di array.
- [ ] Jika ID tidak ditemukan -> Return 404 (`Buku tidak ditemukan`).
- [ ] Jika ditemukan -> Return 200 + Full object buku.

### D. Route: PUT /books/{bookId} (Mengubah Data Buku)
- [ ] **Kriteria 6:** Implementasi logika `PUT` by ID.
- [ ] Cek keberadaan ID. Jika tidak ketemu -> Return 404 (`Gagal memperbarui buku. Id tidak ditemukan`).
- [ ] Validasi Input (Sama seperti POST):
    - [ ] Cek `name`. Jika kosong -> Return 400.
    - [ ] Cek `readPage` > `pageCount`. Jika salah -> Return 400.
- [ ] Update Data:
    - [ ] Update field yang dikirim.
    - [ ] Update `updatedAt` dengan waktu sekarang.
- [ ] Response Sukses: Return 200 (`Buku berhasil diperbarui`).

### E. Route: DELETE /books/{bookId} (Menghapus Buku)
- [ ] **Kriteria 7:** Implementasi logika `DELETE` by ID.
- [ ] Cek keberadaan ID. Jika tidak ketemu -> Return 404 (`Buku gagal dihapus. Id tidak ditemukan`).
- [ ] Hapus data dari array.
- [ ] Response Sukses: Return 200 (`Buku berhasil dihapus`).

## 4. Fitur Opsional (Nilai Bintang 5)
- [ ] **Query Parameter:** Implementasi filter pada route `GET /books`:
    - [ ] `?name`: Cari buku berdasarkan nama (case insensitive/non-exact).
    - [ ] `?reading`: Filter `0` (false) atau `1` (true).
    - [ ] `?finished`: Filter `0` (false) atau `1` (true).
- [ ] **Code Quality:** Jalankan ESLint dan pastikan tidak ada error.

## 5. Pengujian & Finalisasi
- [ ] Download Postman Collection & Environment.
- [ ] Import ke aplikasi Postman.
- [ ] Jalankan Collection Runner.
    - [ ] Pastikan semua test "Mandatory" PASS.
    - [ ] (Opsional) Pastikan test "Optional" PASS.
- [ ] Hapus folder `node_modules`.
- [ ] Zip folder project.
- [ ] Submit!