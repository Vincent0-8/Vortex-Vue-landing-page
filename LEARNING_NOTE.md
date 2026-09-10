# 📚 LEARNING NOTE: VUE 3 + TAILWIND CSS (LANDING PAGE VORTEX)

> Panduan komprehensif untuk memahami arsitektur, konsep inti Vue 3, perbandingan ekosistem (Vue vs React, Vite vs Nuxt), serta panduan wawancara kerja (*interview cheatsheet*).

---

## 1. 🗺️ Peta Arsitektur Proyek (Bagaimana File Saling Terhubung)

```
index.html                        (Pintu masuk browser, memuat font & meta SEO)
  └── src/main.js                 (Inisialisasi Vue & impor CSS Tailwind)
        └── src/App.vue           (Orkestrator utama yang merakit seluruh seksi & state modal)
              ├── Navbar.vue               (Header, link navigasi, tombol auth)
              ├── HeroSection.vue          (Headline utama, checklist, preview dashboard)
              ├── LogoCloud.vue            (Grid 6 logo brand "Trusted By")
              ├── SolutionsSection.vue     (3 kartu solusi utama)
              ├── FeatureTabsSection.vue   (Interactive tab switcher dengan <Transition>)
              ├── FeaturesSection.vue      (3 langkah alur kerja / How It Works)
              ├── TestimonialsSection.vue  (Ulasan klien & testimoni tim engineering)
              ├── FaqSection.vue           (Accordion tanya-jawab interaktif)
              ├── CtaSection.vue           (Banner konversi akhir)
              ├── Footer.vue               (Footer multi-kolom)
              └── AuthModal.vue            (Modal Sign In/Up via <Teleport to="body">)
```

---

## 2. 🧩 Kenapa Vue Bisa Campur dengan HTML? (Single File Component / SFC)

Di proyek ini, setiap file berekstensi `.vue` disebut **Single File Component (SFC)**.

### Perbandingan dengan React:
- **Di React (JSX/TSX)**: HTML ditaruh **di dalam** JavaScript. Komponen adalah fungsi JavaScript yang me-return sintaks HTML (`return <div className="...">...</div>`). Di React: *"Semuanya adalah JavaScript"*.
- **Di Vue (SFC)**: Komponen dibagi secara fisik menjadi **3 bagian yang terpisah dan rapi**:
  1. `<script setup>` ➔ Tempat logika (JavaScript).
  2. `<template>` ➔ Tempat struktur antarmuka (HTML murni yang diberi kekuatan reaktif Vue).
  3. `<style scoped>` ➔ Tempat styling lokal komponen (CSS).

### Bagaimana browser bisa menjalankannya?
Browser web sebenarnya **tidak paham** apa itu file `.vue`. Di balik layar, ada build tool **Vite** bersama plugin `@vitejs/plugin-vue`. Saat Anda menjalankan `npm run dev` atau `npm run build`, Vite meng-compile ketiga bagian tersebut menjadi kode JavaScript dan CSS standar yang dipahami 100% oleh browser.

---

## 3. ⚖️ Vue + Vite vs Nuxt (Analoginya dengan React vs Next.js)

Banyak pemula bingung membedakan kapan harus menggunakan Vue murni dan kapan harus menggunakan Nuxt. Gunakan tabel analogi ini:

| Ekosistem React | Ekosistem Vue | Jenis Arsitektur | Kapan Digunakan? |
| :--- | :--- | :--- | :--- |
| **React + Vite** | **Vue + Vite** *(Proyek Kita)* | **Single Page Application (SPA)** / Client-Side Rendering (CSR) | Tampilan dirender langsung di browser pengguna. Sangat cepat, ringan, tidak butuh server Node.js khusus di hosting backend. Cocok untuk landing page, web dashboard, dan web apps. |
| **Next.js** | **Nuxt** | **Server-Side Rendering (SSR)** / Fullstack Framework | Halaman HTML dirakit di server backend sebelum dikirim ke browser. Punya sistem routing otomatis berdasarkan folder `pages/`. Cocok untuk website berita/e-commerce dengan jutaan konten dinamis dari database untuk kebutuhan SEO berat. |

> 💡 **Di proyek ini kita memakai Vue 3 murni + Vite** karena untuk landing page modern berskala ini, arsitektur SPA menghasilkan bundle sangat kecil (~40kB), performa sangat cepat, dan bisa di-deploy secara gratis di mana saja (Vercel, Netlify, GitHub Pages) sebagai file statis (`dist/`).

---

## 4. 📖 Kamus Sintaks Vue 3 yang Dipakai di Proyek Ini

### A. `<script setup>` (Composition API)
Standar resmi Vue 3 modern. Semua variabel, fungsi, atau import yang ditulis di dalam `<script setup>` langsung otomatis bisa dipakai di dalam `<template>` tanpa perlu repot menulis `return {}` atau `export default {}`.

### B. `ref()` (State Reaktif)
```js
import { ref } from 'vue'

const activeTab = ref(0)
const isAuthModalOpen = ref(false)
```
- Variabel biasa di JS tidak akan meng-update HTML saat nilainya berubah.
- Dengan `ref()`, variabel menjadi reaktif: jika nilainya berganti, tampilan HTML yang memakainya akan **langsung ter-update otomatis**.
- **Aturan**: Di dalam `<script>`, ubah nilainya menggunakan `.value` (misal: `isAuthModalOpen.value = true`). Di dalam `<template>`, Anda cukup panggil namanya langsung (`isAuthModalOpen`).

### C. `v-model` (Two-Way Data Binding)
```html
<input v-model="email" type="email" placeholder="name@company.com" />
```
Apa pun yang diketik user di form input akan langsung otomatis sinkron mengisi variabel `email` di JavaScript.

### D. `v-for` & `:key` (Perulangan Data)
```html
<article v-for="item in solutions" :key="item.title">
  <h3>{{ item.title }}</h3>
</article>
```
Mengulang isi array menjadi elemen HTML. Wajib menyertakan atribut unik `:key` agar performa render Vue optimal.

### E. `v-if` (Kondisi Render)
```html
<div v-if="activeFaq === index">
  <p>{{ faq.a }}</p>
</div>
```
Elemen hanya akan dimasukkan ke dalam DOM jika kondisinya bernilai benar (*true*).

### F. `:class` (Dynamic Class Binding)
```html
<button :class="activeTab === index ? 'bg-slate-900 border-emerald-500' : 'bg-slate-900/30'">
```
Mengatur class Tailwind CSS secara kondisional berdasarkan state reaktif.

### G. Komunikasi Komponen: `defineProps` & `defineEmits`
Komponen di Vue menggunakan prinsip **One-Way Data Flow**:
1. **`defineProps` (Data Masuk dari Parent ke Child)**:
   Di [AuthModal.vue](file:///d:/Job%20Data/Software%20Engineer%20things/Landing%20Page/Vue-landing-page/src/components/common/AuthModal.vue), komponen menerima prop status buka/tutup:
   ```js
   const props = defineProps({ isOpen: Boolean, initialMode: String })
   ```
2. **`defineEmits` (Sinyal Keluar dari Child ke Parent)**:
   Di [Navbar.vue](file:///d:/Job%20Data/Software%20Engineer%20things/Landing%20Page/Vue-landing-page/src/components/layout/Navbar.vue), saat tombol diklik, Navbar menembak sinyal ke `App.vue`:
   ```js
   const emit = defineEmits(['open-auth'])
   emit('open-auth', 'signin')
   ```

### H. `<Teleport to="body">` (Komponen Bawaan Vue)
- **Masalah dalam HTML/CSS**: Jika modal ditaruh di dalam komponen anak yang parent-nya memiliki CSS `overflow: hidden`, `position: relative`, atau `z-index` rendah, tampilan modal bisa terpotong atau tertutup.
- **Solusi**: `<Teleport to="body">` memindahkan elemen HTML modal langsung ke bawah tag `<body>` di DOM browser, **tetapi data reaktif dan event-nya tetap dikendalikan oleh komponen Vue tersebut**.

### I. `<Transition mode="out-in">` (Animasi Transisi Bawaan)
Digunakan di [FeatureTabsSection.vue](file:///d:/Job%20Data/Software%20Engineer%20things/Landing%20Page/Vue-landing-page/src/components/sections/FeatureTabsSection.vue):
- Memberikan animasi halus saat konten berganti tab.
- Atribut `mode="out-in"` memastikan konten lama selesai menghilang (*leave*) sebelum konten baru muncul (*enter*), sehingga tidak terjadi *layout shift*.

### J. Composable Reusable (`useScrollReveal.js`)
Di Vue 3, logika mandiri seperti memantau posisi scroll browser menggunakan `IntersectionObserver` dipisahkan ke dalam folder `src/composables/`. Cukup panggil `useScrollReveal()` di `App.vue`, maka seluruh elemen dengan class `.reveal-item` akan otomatis muncul perlahan saat di-scroll.

---

## 5. 🎨 Aturan Baru Tailwind CSS v4

Pada proyek ini kita menggunakan Tailwind CSS v4 terbaru. Beberapa aturan sintaks yang diperbarui:
- `bg-linear-to-r` menggantikan sintaks lama `bg-gradient-to-r`.
- `bg-linear-to-b` menggantikan sintaks lama `bg-gradient-to-b`.
- `min-h-65` menggantikan arbitrary class `min-h-[260px]`.
- Penggunaan `enabled:cursor-pointer disabled:cursor-not-allowed` untuk menghindari konflik kursor pada tombol.

---

## 6. 🎯 5 Pertanyaan Wawancara Kerja Terkait Proyek Ini & Cara Menjawabnya

### Pertanyaan 1: "Kenapa kamu menggunakan Composition API (`<script setup>`) di Vue 3?"
> **Jawaban**:  
> *"Saya memilih Composition API dengan `<script setup>` karena merupakan standar modern Vue 3. Keunggulannya adalah sintaks lebih padat dan bersih, performa runtime lebih optimal, serta logika fitur dapat diekstrak ke dalam Composable terpisah secara modular, berbeda dengan Options API yang memecah logika satu fitur ke dalam data, methods, dan computed yang terpisah-pisah."*

### Pertanyaan 2: "Kapan kita harus menggunakan `<Teleport>` di Vue?"
> **Jawaban**:  
> *"Untuk komponen overlay seperti Modal Dialog, Toast, atau Tooltip. Tujuannya agar posisi modal tidak terpotong atau rusak oleh CSS milik parent (seperti `overflow: hidden` atau `z-index`). `<Teleport to="body">` memindahkan HTML modal langsung ke bawah tag `<body>`, namun state reaktif dan logic-nya tetap berada di komponen Vue tersebut."*

### Pertanyaan 3: "Bagaimana cara komponen berkomunikasi di Vue 3?"
> **Jawaban**:  
> *"Menggunakan prinsip One-Way Data Flow: Parent mengirim data ke child menggunakan `Props` (`defineProps`), sedangkan Child mengirim notifikasi aksi ke parent menggunakan `Emits` (`defineEmits`). Contohnya di proyek ini: tombol di Navbar menembak emit ke App.vue, lalu App.vue mengubah state modal yang dikirimkan via Props ke AuthModal."*

### Pertanyaan 4: "Bagaimana kamu mengoptimalkan performa landing page ini?"
> **Jawaban**:  
> *"Pertama, menggunakan Tailwind CSS v4 yang di-compile langsung oleh Vite sehingga ukuran CSS sangat kecil (~41kB). Kedua, mengeliminasi library animasi eksternal yang berat dengan memanfaatkan `<Transition>` bawaan Vue dan browser native `IntersectionObserver`. Ketiga, memastikan seluruh gambar dimuat dengan atribut width, height, dan semantic HTML yang benar."*

### Pertanyaan 5: "Apa bedanya `ref` dan variabel JavaScript biasa?"
> **Jawaban**:  
> *"Variabel biasa di JavaScript tidak memiliki mekanisme pelacakan perubahan (*dependency tracking*). Jika nilainya diubah, DOM tidak akan merespons. Sedangkan `ref` di Vue membungkus nilai tersebut dengan JavaScript Proxy atau objek reaktif, sehingga setiap kali nilai `.value`-nya berubah, Vue langsung mengetahui bagian DOM mana yang perlu di-render ulang secara efisien."*

---

## 7. 🚀 Cara Memasang Proyek Ini ke Portofolio / CV Anda

1. **Upload ke GitHub**:
   - Buat repositori publik di akun GitHub Anda (misal: `vortex-landing-page`).
   - Push folder ini ke repositori tersebut.
2. **Deploy Gratis ke Vercel / Netlify**:
   - Hubungkan akun GitHub Anda ke [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
   - Klik import project, biarkan pengaturan build default (`npm run build`), dan klik Deploy.
   - Dalam 1 menit web Anda sudah online dengan link publik resmi (misal: `vortex-landing.vercel.app`).
3. **Deskripsi untuk CV / LinkedIn**:
   > *"Developed a modern, responsive SaaS landing page using Vue 3 (Composition API with `<script setup>`), Tailwind CSS v4, Teleported modal dialogs, and custom IntersectionObserver composables for smooth viewport scroll reveals."*

---

## 8. 🧭 Panduan Navigasi Dokumentasi Resmi Vue (vuejs.org)

Dokumentasi resmi Vue 3 ([vuejs.org/guide](https://vuejs.org/guide/introduction.html)) sangat lengkap, tapi bagi pemula membaca dari halaman pertama sampai terakhir bisa membuat kewalahan (*information overload*).

Berikut adalah peta prioritas: **bagian mana yang wajib sering dibaca**, dan **bagian mana yang sebaiknya diabaikan dulu**.

> ⚠️ **TIPS UTAMA SEBELUM BACA DOCS VUE**:  
> Di pojok kiri atas atau sidebar situs [vuejs.org](https://vuejs.org), selalu pastikan tombol saklar API disetel ke **"Composition API"** (bukan Options API). Jangan sampai membaca kode bertuliskan `export default { data() { return ... } }` karena itu gaya lama Vue 2 yang tidak kita pakai di proyek modern ini.

---

### 🟢 TIER 1: Wajib & Paling Sering Dibaca (80% Pekerjaan Harian Anda)

Bagian-bagian ini adalah "roti dan mentega" seorang Vue Frontend Engineer:

| Halaman Docs | Kenapa Sering Dibuka? | Contoh Nyata di Proyek Vortex |
| :--- | :--- | :--- |
| **1. Reactivity Fundamentals**  `vuejs.org/guide/essentials/reactivity-fundamentals.html` | Memahami `ref()` vs `reactive()`. Komunitas dan tim Vue resmi 90% merekomendasikan `ref()` untuk konsistensi. | Variabel state seperti `isAuthModalOpen`, `activeTab`, `email`. |
| **2. Template Syntax**  `vuejs.org/guide/essentials/template-syntax.html` | Sintaks template wajib: `{{ data }}`, binding atribut `:class`, `:id`, `:src`, dan shorthand event `@click`. | Hampir di semua baris `<template>` di setiap komponen. |
| **3. Computed Properties**  `vuejs.org/guide/essentials/computed-properties.html` | Memahami kapan pakai `computed()` dibanding fungsi biasa. `computed` memiliki caching otomatis berbasis dependensinya. | Menghitung filter list, total cart, atau validasi form sederhana. |
| **4. Conditional & List Rendering**  `vuejs.org/guide/essentials/conditional.html` & `list.html` | Memahami beda `v-if` vs `v-show` (kapan destroy DOM vs hanya `display: none`), serta aturan wajib `:key` di `v-for`. | Accordion FAQ (`v-if="activeFaq === index"`), list render logo & fitur. |
| **5. Event Handling & Form Input**  `vuejs.org/guide/essentials/event-handling.html` & `forms.html` | Event modifiers seperti `@submit.prevent` (mencegah reload browser) dan form binding `v-model` (modifiers: `.trim`, `.number`). | Form Sign In/Up di `AuthModal.vue` (`@submit.prevent="handleSubmit"`). |
| **6. Watchers**  `vuejs.org/guide/essentials/watchers.html` | `watch()` & `watchEffect()`. Digunakan saat Anda ingin menjalankan efek samping (side-effect) ketika suatu data berubah. | Di `AuthModal.vue` baris 24: `watch(() => props.initialMode, ...)` untuk sinkronisasi tab modal. |
| **7. Lifecycle Hooks**  `vuejs.org/guide/essentials/lifecycle.html` | `onMounted()` dan `onUnmounted()`. Wajib paham kapan elemen sudah siap di layar dan kapan harus membersihkan event listener. | Pasang listener tombol keyboard `Escape` di `onMounted`, lalu cabut di `onUnmounted` agar tidak bocor memori (*memory leak*). |
| **8. Component Props & Events**  `vuejs.org/guide/components/props.html` & `events.html` | Jantung arsitektur Vue: `defineProps` (menerima data) dan `defineEmits` (mengirim event ke parent). | `Navbar.vue` menembak emit `open-auth`, `AuthModal.vue` menerima prop `isOpen`. |
| **9. Composables**  `vuejs.org/guide/reusability/composables.html` | Pola arsitektur terbaik untuk membuat reusable logic (mirip Custom Hooks di React). | File `useScrollReveal.js` yang membungkus `IntersectionObserver` agar bisa dipanggil di komponen mana saja. |
| **10. Built-in: `<Teleport>` & `<Transition>`**  `vuejs.org/guide/built-ins/teleport.html` & `transition.html` | Komponen bawaan Vue yang membuat aplikasi terasa mahal dan profesional tanpa plugin berat pihak ketiga. | `<Teleport to="body">` di `AuthModal.vue`, `<Transition mode="out-in">` di `FeatureTabsSection.vue`. |

---

### 🟡 TIER 2: Dibaca Saat Proyek Anda Membesar (Next Steps Belajar)

Jangan baca ini sekarang jika belum butuh, tapi simpan sebagai referensi saat Anda membuat aplikasi multi-halaman atau aplikasi dengan backend database:

1. **Vue Router ([router.vuejs.org](https://router.vuejs.org/))**:
   - Dibaca saat web Anda butuh link halaman berbeda: `/`, `/about`, `/dashboard`, `/settings`.
   - Konsep penting: `createRouter()`, `<RouterView>`, `useRoute()`, dan `useRouter()`.
2. **Pinia ([pinia.vuejs.org](https://pinia.vuejs.org/))**:
   - Store manajemen state global resmi Vue (pengganti Vuex).
   - Dibaca saat data user login atau keranjang belanja perlu diakses oleh puluhan komponen yang posisinya berjauhan tanpa repot passing props (*prop drilling*).
3. **Slots ([vuejs.org/guide/components/slots.html](https://vuejs.org/guide/components/slots.html))**:
   - Wadah placeholder `<slot />` di dalam komponen. Berguna saat Anda membuat Button atau Card yang isinya fleksibel (*content projection*).

---

### 🔴 TIER 3: Abaikan / Lewati Dulu (Jangan Buang Waktu di Sini)

Banyak pemula kehabisan energi karena tersesat membaca topik-topik ini di dokumentasi:

- ❌ **Options API**: Jangan pelajari kecuali Anda bekerja di kantor yang memelihara proyek lama Vue 2. Fokus 100% pada Composition API (`<script setup>`).
- ❌ **Custom Directives** (`v-focus`, dsb.): 95% masalah UI dapat diselesaikan dengan props atau lifecycle hook biasa.
- ❌ **Render Functions & JSX di Vue**: Ini hanya dipakai oleh pengembang yang membangun library UI besar (seperti Shadcn atau Headless UI).
- ❌ **Reactivity in Depth (Internals)**: Penjelasan mekanis bagaimana Javascript Proxy melacak memori internal. Menarik, tetapi tidak ditanyakan untuk posisi junior/mid dan tidak membuat Anda lebih cepat merilis web.
- ❌ **Server-Side Rendering (SSR) dari nol**: Untuk SSR, langsung gunakan **Nuxt**, jangan ikuti panduan manual setup Node SSR di docs Vue murni.

---

## 9. 🐛 Studi Kasus Nyata: Kenapa Elemen Menghilang Saat Di-Klik? (Virtual DOM vs Native DOM)

> 🎓 **Pelajaran Emas untuk Wawancara Kerja**: Ini adalah salah satu pertanyaan jebakan paling sering ditanyakan kepada pelamar frontend (baik di Vue maupun React).

### Kronologi Bug:
Pada komponen `FaqSection.vue`, ketika pengguna mengklik salah satu baris pertanyaan FAQ, baris tersebut tiba-tiba menghilang (*invisible*) dan seolah menjadi nonaktif/rusak.

### Akar Masalah:
1. Kita memiliki styling CSS untuk animasi scroll reveal:
   ```css
   .reveal-item { opacity: 0; transform: translateY(24px); }
   .reveal-item.is-visible { opacity: 1; transform: translateY(0); }
   ```
2. Melalui JavaScript native (`IntersectionObserver`), kita menambahkan class:
   ```js
   element.classList.add('is-visible') // Native DOM API
   ```
   Saat halaman di-scroll, elemen menjadi tampak (`opacity: 1`).
3. Namun, di elemen kartu FAQ tersebut, kita juga memasang class reaktif Vue:
   ```html
   <div 
     class="reveal-item ..." 
     :class="activeFaq === index ? 'bg-slate-900 border-emerald-500' : '...'"
   >
   ```
4. **Apa yang terjadi saat tombol diklik?**
   - Saat `activeFaq` berubah, Virtual DOM (VDOM) Vue melakukan proses **Reconciliation / Patching**.
   - Vue menghitung ulang atribut `class` berdasarkan template yang dia ketahui (`static class + dynamic :class`).
   - Karena class `is-visible` ditambahkan oleh JavaScript native di luar pengetahuan Vue, **Vue menimpa (overwrite) seluruh daftar class elemen tersebut**.
   - Akibatnya: class `is-visible` terhapus! Yang tersisa hanyalah `.reveal-item`.
   - Karena `.reveal-item` memiliki CSS `opacity: 0`, elemen seketika menghilang dari layar!

### Solusinya:
**Jangan taruh class animasi native pada elemen yang memiliki binding `:class` dinamis**.
Pindahkan class `.reveal-item` ke kontainer pembungkusnya (parent container) yang sifatnya statis:
```html
<!-- ✅ BENAR: reveal-item ditaruh di pembungkus luar yang statis -->
<div class="space-y-3.5 reveal-item">
  <div 
    v-for="(faq, index) in faqs" 
    :key="index"
    :class="activeFaq === index ? 'bg-slate-900 border-emerald-500' : '...'"
  >
    ...
  </div>
</div>
```
Dengan cara ini, animasi scroll reveal tetap berjalan mulus untuk satu blok FAQ, dan klik buka-tutup accordion di dalamnya aman 100% tanpa risiko class tertimpa oleh Virtual DOM.


