# Bookshelf API 📚

Proyek ini adalah submission (tugas akhir) untuk kelas **Belajar Membuat Aplikasi Back-End untuk Pemula** di **Dicoding Indonesia**.

Aplikasi ini merupakan **RESTful API** sederhana untuk mengelola data buku (Bookshelf). API ini memungkinkan client untuk menambahkan, membaca, mengubah, dan menghapus data buku (CRUD).

## 🛠️ Teknologi yang Digunakan

- **Node.js**: Runtime environment untuk JavaScript.
- **Express**: Web framework untuk membuat server (Pilih salah satu sesuai yang kamu pakai).
- **Nanoid (v3)**: Library untuk membuat ID unik string.
- **ESLint**: Linter untuk menjaga kualitas kode (Standar AirBnb/Google).

## Fitur & Kriteria

Proyek ini memenuhi seluruh kriteria wajib dan opsional (Bintang 5) dari submission:

### Kriteria Wajib (Mandatory)
- [ ] Server berjalan pada **Port 9000**.
- [ ] Aplikasi dijalankan dengan `npm run start`.
- [ ] **POST /books**: Dapat menyimpan buku dengan validasi input.
- [ ] **GET /books**: Dapat menampilkan seluruh buku (id, nama, publisher).
- [ ] **GET /books/{bookId}**: Dapat menampilkan detail buku berdasarkan ID.
- [ ] **PUT /books/{bookId}**: Dapat mengubah data buku berdasarkan ID.
- [ ] **DELETE /books/{bookId}**: Dapat menghapus data buku berdasarkan ID.

### Kriteria Opsional (Optional)
- [ ] **Pencarian Nama**: Fitur query parameter `?name=` (case insensitive).
- [ ] **Filter Reading**: Fitur query parameter `?reading=` (0 atau 1).
- [ ] **Filter Finished**: Fitur query parameter `?finished=` (0 atau 1).
- [ ] **Code Quality**: Menggunakan ESLint tanpa error.

## 🚀 Cara Menjalankan Project

1. **Clone Repository**
   ```bash
   git clone [https://github.com/username-kamu/bookshelf-api.git](https://github.com/Rizal-Saidul/bookshelf-api.git)
   cd bookshelf-api```

2.  **Install Dependencies**
    Pastikan kamu sudah menginstall Node.js. Lalu jalankan:

    ```bash
    npm install
    ```

3.  **Jalankan Server**

    ```bash
    npm run start
    ```

    Server akan berjalan di `http://localhost:9000`.

    > **Note:** Untuk mode development (dengan nodemon), gunakan `npm run start-dev` (jika sudah dikonfigurasi).

## 📖 Dokumentasi API

Berikut adalah daftar endpoint yang tersedia:

| Method | Endpoint | Deskripsi | Request Body (JSON) |
| :--- | :--- | :--- | :--- |
| **POST** | `/books` | Menambahkan buku baru | `{ name, year, author, summary, publisher, pageCount, readPage, reading }` |
| **GET** | `/books` | Mengambil seluruh buku | - |
| **GET** | `/books/{id}` | Mengambil detail buku | - |
| **PUT** | `/books/{id}` | Update data buku | `{ name, year, author, ... }` |
| **DELETE**| `/books/{id}` | Menghapus buku | - |

### Contoh Request Body (POST/PUT)

```json
{
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 25,
    "reading": false
}
```

## 🧪 Pengujian (Testing)

Proyek ini telah diuji menggunakan **Postman Collection** yang disediakan oleh Dicoding.

  - Semua *Mandatory Test* berhasil (Passed).
  - Semua *Optional Test* berhasil (Passed).

-----

**Disclaimer:** Proyek ini dibuat untuk tujuan belajar dan pemenuhan tugas submission Dicoding.

```