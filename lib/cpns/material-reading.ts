/**
 * Materi bacaan panjang per materi — ditulis sendiri (orisinal, bukan
 * salinan ebook/video), pola yang sama seperti Belajar Islam: tiap materi
 * punya 5-6 bagian (heading + 2-3 paragraf prosa) dan daftar sumber.
 * Ebook di Google Drive tetap jadi referensi bacaan lanjutan di homepage.
 */
import type { MaterialReading } from "./types";


/**
 * Materi bacaan panjang TWK — ditulis sendiri, bukan salinan ebook.
 * Mengembangkan keyPoints di lib/cpns/materials.ts menjadi prosa mengajar
 * dari nol, dengan sudut pandang soal SKD di tiap materi.
 */
export const READING_TWK: Record<string, MaterialReading> = {
  "twk-pancasila": {
    sections: [
      {
        heading: "Pancasila Itu Apa, dan Kenapa Ia Disebut Dasar Negara",
        body: [
          "Pancasila adalah dasar negara dan ideologi negara Indonesia. Artinya, seluruh aturan, kebijakan, dan cara kita bernegara harus berakar pada lima nilai yang terkandung di dalamnya. Pancasila bukan sekadar hafalan lima kalimat untuk upacara, melainkan kompas yang menunjukkan arah bangsa ini mau jadi seperti apa.",
          "Kelima sila Pancasila tercantum dalam Pembukaan UUD 1945 alinea keempat. Bunyinya adalah: Ketuhanan Yang Maha Esa; Kemanusiaan yang Adil dan Beradab; Persatuan Indonesia; Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan; dan Keadilan Sosial bagi Seluruh Rakyat Indonesia. Urutan sila ini bukan kebetulan, karena tiap sila saling menguatkan dan membentuk satu kesatuan yang utuh.",
          "Sebagai dasar negara, Pancasila menjadi sumber dari segala sumber hukum di Indonesia. Itu berarti tidak boleh ada peraturan yang bertentangan dengan nilai-nilainya. Sebagai ideologi, Pancasila menjadi pandangan hidup bersama, yaitu cara bangsa Indonesia memandang manusia, masyarakat, dan negara.",
        ],
      },
      {
        heading: "Sila Pertama: Ketuhanan Yang Maha Esa",
        body: [
          "Sila pertama menegaskan bahwa bangsa Indonesia adalah bangsa yang berketuhanan. Setiap warga negara bebas memeluk agama dan beribadah menurut agamanya masing-masing, dan kebebasan itu dijamin oleh negara. Tidak ada satu pun pihak yang boleh memaksakan keyakinannya kepada orang lain.",
          "Dalam kehidupan sehari-hari, sila pertama tampak pada sikap toleransi beragama. Misalnya, tetangga yang berbeda agama saling menjaga saat hari raya masing-masing, atau warga desa yang berbeda keyakinan bekerja sama membangun fasilitas umum tanpa mempersoalkan agama siapa yang lebih benar. Sikap seperti inilah yang dimaksud dengan mengamalkan sila pertama.",
          "Yang perlu diingat, toleransi bukan berarti menyamakan semua keyakinan atau menganggap semua agama sama. Toleransi berarti menghormati hak orang lain untuk meyakini dan menjalankan agamanya, sambil tetap teguh pada keyakinan sendiri. Perbedaan ini penting, karena soal TWK sering menguji apakah kamu bisa membedakan sikap toleran dengan sikap yang mencampuradukkan keyakinan.",
        ],
      },
      {
        heading: "Sila Kedua: Kemanusiaan yang Adil dan Beradab",
        body: [
          "Sila kedua berbicara tentang kemanusiaan, yaitu bahwa setiap manusia memiliki harkat dan martabat yang sama. Karena itu, setiap orang berhak diperlakukan secara adil dan beradab, tanpa memandang suku, agama, jenis kelamin, atau latar belakangnya. Tidak ada manusia yang lebih rendah derajatnya dari manusia lain.",
          "Dalam praktiknya, sila kedua menuntut kita untuk menghormati hak asasi orang lain dan tidak bersikap diskriminatif. Contohnya, menolak seseorang melamar pekerjaan hanya karena asal daerahnya adalah bentuk pelanggaran terhadap sila kedua. Begitu pula menertawakan orang karena kekurangan fisiknya, atau memperlakukan orang berbeda hanya karena ia miskin.",
          "Sila kedua juga mengingatkan bahwa keadilan harus disertai dengan keadaban. Menyelesaikan masalah dengan kekerasan, menghina orang lain di muka umum, atau memperlakukan orang semena-mena adalah sikap yang bertentangan dengan sila ini. Manusia yang beradab menyelesaikan persoalan dengan cara yang bermartabat, bukan dengan merendahkan orang lain.",
        ],
      },
      {
        heading: "Sila Ketiga: Persatuan Indonesia",
        body: [
          "Sila ketiga menegaskan bahwa di atas segala perbedaan, kita adalah satu bangsa Indonesia. Kepentingan bangsa dan negara diletakkan di atas kepentingan pribadi atau golongan. Ketika ada pilihan antara menguntungkan kelompok sendiri atau menjaga persatuan, sila ketiga mengajarkan untuk memilih persatuan.",
          "Persatuan ini tampak pada sikap cinta tanah air dalam bentuk yang sederhana, seperti bangga memakai produk dalam negeri, menjaga fasilitas umum, atau rela berkorban demi kepentingan bersama. Cinta tanah air tidak harus selalu berbentuk hal besar, karena menjaga kebersihan lingkungan dan menaati aturan pun termasuk wujud nyata dari persatuan. Dengan kata lain, cinta tanah air bukan soal besar-kecilnya perbuatan, melainkan soal kesadaran bahwa setiap tindakan kecil ikut menentukan masa depan bangsa.",
          "Sila ketiga juga menjadi penawar bagi sikap yang memecah belah, seperti fanatisme golongan yang berlebihan, ujaran kebencian antarsuku, atau sikap yang hanya peduli pada kelompoknya sendiri. Bangsa yang besar dibangun oleh orang-orang yang mau melihat melampaui kelompoknya dan merasa menjadi bagian dari satu Indonesia. Sebaliknya, orang yang mengamalkan sila ketiga akan merasa bahwa perbedaan daerah, suku, dan agama bukanlah alasan untuk saling menjauh, melainkan alasan untuk saling mengenal.",
        ],
      },
      {
        heading: "Sila Keempat dan Kelima: Kerakyatan dan Keadilan Sosial",
        body: [
          "Sila keempat berbunyi Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan. Inti dari sila ini adalah demokrasi Pancasila, yaitu keputusan diambil melalui musyawarah untuk mencapai mufakat. Setiap orang berhak menyampaikan pendapat, dan pendapat itu didengarkan dengan hikmat, bukan dengan paksaan atau suara yang paling keras.",
          "Musyawarah bukan berarti semua orang harus selalu sepakat, tetapi berarti proses pengambilan keputusan dilakukan secara terbuka, jujur, dan mengutamakan kepentingan bersama. Bila mufakat tidak tercapai, barulah dilakukan pemungutan suara. Yang penting adalah prosesnya yang adil, bukan siapa yang menang.",
          "Sila kelima, Keadilan Sosial bagi Seluruh Rakyat Indonesia, berbicara tentang pemerataan. Kekayaan dan kesempatan tidak boleh hanya dinikmati segelintir orang, sementara yang lain tertinggal. Nilai gotong royong dan sikap tidak serakah adalah wujud dari sila ini, misalnya dengan berbagi kepada yang membutuhkan dan menolak mengambil hak orang lain untuk kepentingan sendiri.",
        ],
      },
      {
        heading: "Pancasila sebagai Ideologi Terbuka",
        body: [
          "Pancasila disebut ideologi terbuka, dan istilah ini sering muncul dalam soal TWK yang lebih sulit. Ideologi terbuka berarti pandangan hidup yang nilai-nilainya berasal dari bangsa itu sendiri, berorientasi pada masa depan, dan terbuka terhadap perkembangan zaman tanpa kehilangan jati dirinya. Pancasila tidak datang dari luar dan tidak dipaksakan kepada bangsa Indonesia, melainkan digali dari nilai-nilai yang sudah hidup di tengah masyarakat, seperti gotong royong, musyawarah, dan toleransi.",
          "Ada beberapa ciri yang membuat sebuah ideologi disebut terbuka. Pertama, nilai dan cita-citanya berasal dari pribadi bangsa itu sendiri, bukan dari keinginan perseorangan atau dari budaya lain. Kedua, isinya tidak kaku dan bisa dijabarkan lebih lanjut mengikuti perkembangan zaman, tetapi penjabarannya tetap berakar pada nilai dasarnya. Ketiga, ia tidak memaksakan satu tafsir tunggal kepada semua orang, melainkan memberi ruang bagi musyawarah dan perbedaan pendapat yang sehat. Ketiga ciri inilah yang membedakan ideologi terbuka dari ideologi tertutup yang memaksakan satu kebenaran dan menolak perubahan.",
          "Pancasila juga menjadi sumber etika dalam berbangsa dan bernegara, sebagaimana ditegaskan dalam Ketetapan MPR. Artinya, sikap dan tingkah laku penyelenggara negara maupun warga negara seharusnya diukur dengan nilai-nilai Pancasila. Ketika soal menanyakan sumber etika berbangsa, atau menanyakan unsur ideologi terbuka, kuncinya adalah mengingat bahwa Pancasila berasal dari bangsa sendiri dan terbuka pada masa depan. Pilihan jawaban yang menyebut keinginan perseorangan, kombinasi dengan budaya lain, atau isi yang kaku dan tidak bisa dijabarkan adalah pengecoh yang bertentangan dengan pengertian ideologi terbuka.",
        ],
      },
      {
        heading: "Pancasila, Pembukaan, dan Batang Tubuh: Satu Kesatuan",
        body: [
          "Pancasila, Pembukaan UUD 1945, dan Batang Tubuh UUD 1945 tidak bisa dipisahkan satu sama lain. Hubungan ketiganya disebut hubungan kausal organis: Pancasila adalah sumbernya, Pembukaan adalah perumusan dasarnya, dan Batang Tubuh adalah penjabarannya dalam aturan yang lebih rinci. Ibarat pohon, Pancasila adalah akar, Pembukaan adalah batang, dan Batang Tubuh adalah cabang dan rantingnya. Kalau akarnya dicabut, seluruh pohon akan roboh, dan kalau Pembukaannya diubah, dasar negara ikut berubah.",
          "Karena hubungan inilah, Pancasila disebut juga paradigma pembangunan nasional. Paradigma artinya kerangka berpikir yang menjadi acuan dalam merencanakan dan melaksanakan pembangunan. Artinya, pembangunan di Indonesia tidak hanya diukur dari gedung dan jalan yang terbangun, melainkan juga dari apakah pembangunan itu mengamalkan nilai Pancasila: apakah ia adil, apakah ia mempersatukan, dan apakah ia menyejahterakan seluruh rakyat. Contoh pengamalan Pancasila sebagai paradigma adalah pembangunan yang memperhatikan pemerataan antar daerah dan tidak hanya menguntungkan segelintir orang.",
          "Pancasila juga dipandang sebagai suatu sistem filsafat, yaitu pandangan yang menyeluruh tentang manusia, masyarakat, dan negara. Cara mengetahuinya adalah dengan cara induktif, yaitu dengan melihat nilai-nilai yang hidup di tengah masyarakat Indonesia lalu merumuskannya menjadi satu sistem. Inilah sebabnya Pancasila terasa dekat dengan kehidupan sehari-hari: ia memang berasal dari kehidupan itu sendiri. Dalam soal, hubungan kausal organis dan Pancasila sebagai paradigma sering muncul sebagai pertanyaan konsep, dan kuncinya adalah memahami bahwa ketiganya, Pancasila, Pembukaan, dan Batang Tubuh, adalah satu kesatuan yang tidak bisa dipisahkan.",
        ],
      },
      {
        heading: "Cara Soal TWK Menguji Pancasila",
        body: [
          "Soal TWK tentang Pancasila jarang meminta kamu menghafal bunyi sila saja. Yang lebih sering keluar adalah studi kasus sikap sehari-hari, lalu kamu diminta menentukan sila yang paling relevan. Misalnya, ada cerita tentang warga berbeda agama yang saling menjaga saat hari raya, dan kamu harus memilih sila mana yang paling tercermin dari sikap itu.",
          "Kunci menjawab soal seperti ini adalah mencari kata kunci dalam cerita. Kalau ceritanya tentang toleransi beragama, jawabannya mengarah ke sila pertama. Kalau tentang tidak membeda-bedakan orang, mengarah ke sila kedua. Kalau tentang kepentingan bersama dan persatuan, mengarah ke sila ketiga. Kalau tentang musyawarah dan mendengar pendapat, mengarah ke sila keempat. Kalau tentang pemerataan dan gotong royong, mengarah ke sila kelima.",
          "Terkadang satu cerita bisa mengandung dua sila sekaligus, misalnya sikap toleran yang sekaligus menjaga persatuan. Kalau soal meminta satu jawaban, pilihlah sila yang paling menonjol dari konteks ceritanya. Perhatikan kata yang paling ditekankan dalam soal, karena di situlah letak petunjuk jawabannya.",
        ],
      },
    ],
    sources: [
      "Pembukaan UUD 1945 alinea ke-4 (rumusan lima sila Pancasila)",
      "UUD 1945 Pasal 29 (Ketuhanan Yang Maha Esa dan kebebasan beragama)",
      "UUD 1945 Pasal 27 (persamaan kedudukan warga negara)",
      "Ketetapan MPR tentang Pancasila sebagai sumber etika berbangsa dan bernegara",
    ],
  },
  "twk-uud-1945": {
    sections: [
      {
        heading: "Pembukaan: Empat Alinea yang Menjadi Jiwa UUD",
        body: [
          "UUD 1945 diawali dengan Pembukaan yang terdiri dari empat alinea. Pembukaan ini bukan sekadar pengantar, melainkan jiwa dari seluruh isi UUD, karena di dalamnya terkandung dasar dan tujuan negara Indonesia. Karena itu, memahami Pembukaan berarti memahami mengapa negara ini didirikan.",
          "Alinea pertama menegaskan bahwa kemerdekaan adalah hak segala bangsa dan penjajahan harus dihapuskan. Alinea kedua menceritakan perjuangan bangsa Indonesia menuju kemerdekaan, sementara alinea ketiga menyatakan kemerdekaan Indonesia atas berkat rahmat Allah Yang Maha Kuasa dan keinginan luhur untuk berkehidupan kebangsaan yang bebas. Ketiga alinea ini menjadi pengantar menuju alinea yang paling penting.",
          "Alinea keempat memuat dasar negara Pancasila dan tujuan negara, yaitu melindungi segenap bangsa dan seluruh tumpah darah Indonesia, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi, dan keadilan sosial. Empat tujuan inilah yang menjadi arah kerja seluruh penyelenggaraan negara sampai hari ini. Hafalkan keempat tujuan ini beserta bunyinya secara garis besar, karena soal TWK sering menanyakan tujuan negara yang tercantum dalam alinea keempat.",
        ],
      },
      {
        heading: "Batang Tubuh dan Amandemen Empat Kali",
        body: [
          "Setelah Pembukaan, UUD 1945 berisi batang tubuh yang mengatur susunan negara secara rinci, mulai dari bentuk negara, lembaga negara, sampai hak dan kewajiban warga negara. Batang tubuh inilah yang menjadi aturan main bernegara, sehingga isinya lebih teknis dan sering berubah mengikuti perkembangan zaman. Karena isinya yang teknis inilah, batang tubuh menjadi bagian UUD yang paling sering diubah, sementara Pembukaan tidak pernah diubah.",
          "Sejak disahkan pada 1945, UUD 1945 telah diamandemen sebanyak empat kali, yaitu pada tahun 1999, 2000, 2001, dan 2002. Amandemen dilakukan karena UUD perlu menyesuaikan diri dengan tuntutan reformasi, terutama soal pembatasan kekuasaan dan jaminan hak asasi manusia. Hasilnya, UUD yang kita pakai hari ini jauh lebih lengkap dan lebih demokratis dibandingkan naskah aslinya.",
          "Salah satu perubahan terbesar dari amandemen adalah lahirnya bab khusus tentang hak asasi manusia, yaitu Pasal 28A sampai 28J. Selain itu, amandemen juga melahirkan lembaga-lembaga baru seperti Mahkamah Konstitusi, Komisi Yudisial, dan Dewan Perwakilan Daerah. Perubahan-perubahan ini menunjukkan bahwa UUD adalah dokumen hidup yang bisa diperbaiki tanpa mengubah Pembukaannya.",
        ],
      },
      {
        heading: "Pasal 1: Bentuk Negara dan Kedaulatan Rakyat",
        body: [
          "Pasal 1 ayat (1) menyatakan bahwa Negara Indonesia ialah negara kesatuan yang berbentuk republik. Artinya, Indonesia adalah satu negara yang utuh, bukan gabungan negara-negara bagian, dan kepala negaranya adalah presiden yang dipilih rakyat, bukan raja yang mewarisi takhta. Republik berarti kepala negara dipilih melalui mekanisme yang diatur undang-undang, bukan diwariskan seperti dalam sistem monarki.",
          "Pasal 1 ayat (2) menyatakan bahwa kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar. Kalimat ini menegaskan bahwa kekuasaan tertinggi di negara ini adalah rakyat, bukan penguasa. Presiden, DPR, dan seluruh pejabat negara hanyalah pemegang amanat rakyat yang kekuasaannya dibatasi oleh aturan.",
          "Dua ayat ini sering keluar dalam soal, baik dalam bentuk hafalan langsung maupun studi kasus. Misalnya, soal bisa bertanya apa bentuk negara Indonesia, atau siapa pemegang kedaulatan tertinggi. Jawabannya selalu kembali ke dua ayat ini, sehingga keduanya wajib dihafal beserta bunyinya.",
        ],
      },
      {
        heading: "Pasal 27: Hak dan Kewajiban Warga Negara",
        body: [
          "Pasal 27 mengatur persamaan kedudukan warga negara di dalam hukum dan pemerintahan. Bunyi ayat pertamanya menegaskan bahwa segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan, dan wajib menjunjung hukum dan pemerintahan itu dengan tidak ada kecualinya. Artinya, di hadapan hukum tidak ada orang yang kebal, baik ia pejabat maupun rakyat biasa.",
          "Ayat berikutnya dari Pasal 27 mengatur hak warga negara atas pekerjaan dan penghidupan yang layak bagi kemanusiaan. Setiap orang berhak mencari nafkah dan hidup layak, dan negara wajib membuka kesempatan itu. Karena itu, menolak seseorang bekerja hanya karena asal daerah, suku, atau agamanya adalah bentuk pelanggaran terhadap pasal ini.",
          "Pasal 27 juga memuat kewajiban warga negara untuk ikut serta dalam usaha pembelaan negara, yang diatur pada ayat (3). Kewajiban ini tidak berarti semua orang harus menjadi tentara, melainkan setiap warga wajib berkontribusi menjaga negaranya sesuai kemampuan dan profesinya masing-masing. Dengan demikian, membela negara adalah tanggung jawab bersama, dan setiap profesi memiliki caranya sendiri untuk melakukannya.",
        ],
      },
      {
        heading: "Pasal 28A–28J: Jaminan Hak Asasi Manusia",
        body: [
          "Pasal 28A sampai 28J adalah bab khusus tentang hak asasi manusia yang lahir dari amandemen UUD 1945. Bab ini menjamin berbagai hak dasar warga negara, mulai dari hak untuk hidup, hak berkeluarga, hak mengembangkan diri, hak atas pekerjaan, hak beragama, sampai hak untuk tidak diperlakukan secara sewenang-wenang. Adanya bab ini menunjukkan bahwa perlindungan hak asasi bukan sekadar janji, melainkan kewajiban hukum yang mengikat negara.",
          "Yang membedakan bab ini dari pasal-pasal lain adalah sifatnya yang sangat rinci. Misalnya, ada pasal yang menjamin hak atas rasa aman dan perlindungan dari ancaman, ada yang menjamin hak berkomunikasi dan memperoleh informasi, dan ada pula yang menegaskan bahwa hak asasi tidak boleh dikurangi dalam keadaan apa pun, kecuali yang diatur secara khusus. Rincian inilah yang membuat bab ini sering diujikan.",
          "Dalam soal, Pasal 28A sampai 28J biasanya muncul dalam bentuk studi kasus pelanggaran hak. Misalnya, ada cerita tentang seseorang yang dilarang beribadah, atau seseorang yang ditahan tanpa proses hukum yang jelas. Tugasmu adalah mengenali hak mana yang dilanggar, lalu mengaitkannya dengan pasal yang tepat. Karena itu, pahami isi tiap pasal secara garis besar, bukan sekadar menghafal nomornya.",
        ],
      },
      {
        heading: "Pasal 23A: Pajak dan Keuangan Negara",
        body: [
          "Pasal 23A UUD 1945 menyatakan bahwa pajak dan pungutan lain yang bersifat memaksa untuk keperluan negara diatur dengan undang-undang. Artinya, negara tidak boleh memungut apa pun dari warga tanpa dasar hukum yang jelas, dan warga hanya wajib membayar pungutan yang sudah diatur undang-undang. Pasal ini menjadi dasar dari seluruh sistem perpajakan di Indonesia, dan karena itu sering diujikan bersamaan dengan pertanyaan tentang kewajiban warga negara.",
          "Pajak dibagi menjadi dua jenis yang wajib dibedakan. Pajak langsung adalah pajak yang bebannya ditanggung sendiri oleh wajib pajak dan tidak bisa dialihkan ke orang lain, contohnya Pajak Penghasilan (PPh) yang dipotong dari penghasilan seseorang. Pajak tidak langsung adalah pajak yang bebannya bisa dialihkan ke orang lain, contohnya Pajak Pertambahan Nilai (PPN) yang dibebankan penjual kepada pembeli saat barang dibeli. Perbedaan kuncinya ada pada bisa atau tidaknya beban pajak itu dialihkan: kalau bisa dialihkan, ia pajak tidak langsung; kalau harus ditanggung sendiri, ia pajak langsung.",
          "Dalam soal, pajak sering muncul dalam bentuk tabel yang membandingkan ciri pajak langsung dan tidak langsung, lalu kamu diminta menentukan pernyataan mana yang benar. Cara menjawabnya adalah dengan mengingat ciri pembedanya: pajak langsung tidak memiliki surat ketetapan yang bisa dialihkan, sedangkan pajak tidak langsung membebani harga barang dan ditanggung oleh pembeli akhir. Kalau ada pilihan yang mengatakan pajak langsung bisa dialihkan, atau pajak tidak langsung ditanggung sendiri oleh penjual, pilihan itu salah, karena justru kebalikannya yang benar.",
        ],
      },
      {
        heading: "Lembaga Negara dan Cara Soal Menguji Pasal",
        body: [
          "UUD 1945 mengatur delapan lembaga negara utama, yaitu MPR, DPR, DPD, Presiden, BPK, MA, MK, dan KY. Masing-masing memiliki tugas yang berbeda: MPR mengubah UUD dan melantik presiden, DPR membuat undang-undang, DPD mewakili daerah, Presiden menjalankan pemerintahan, BPK mengawasi keuangan negara, MA mengawasi peradilan, MK menguji undang-undang, dan KY menjaga kehormatan hakim. Pembagian tugas yang jelas ini penting agar tidak ada satu lembaga pun yang memegang kekuasaan tanpa batas.",
          "Hafalkan lembaga-lembaga ini beserta tugas pokoknya, karena soal sering meminta kamu memasangkan lembaga dengan fungsinya. Misalnya, soal bertanya lembaga mana yang berwenang menguji undang-undang terhadap UUD, dan jawabannya adalah Mahkamah Konstitusi. Atau, soal bertanya siapa yang memeriksa pengelolaan keuangan negara, dan jawabannya adalah Badan Pemeriksa Keuangan.",
          "Soal UUD 1945 umumnya keluar dalam dua bentuk. Bentuk pertama menguji hafalan, yaitu nomor pasal beserta isi ringkasnya, seperti Pasal 1 ayat (1) atau Pasal 27. Bentuk kedua adalah studi kasus, yaitu cerita tentang pelanggaran hak atau penyalahgunaan wewenang, lalu kamu diminta menentukan pasal yang paling relevan. Untuk bentuk kedua, latihlah dirimu membaca cerita lalu bertanya: hak siapa yang dilanggar, dan pasal mana yang menjamin hak itu.",
        ],
      },
    ],
    sources: [
      "Pembukaan UUD 1945 (empat alinea)",
      "UUD 1945 Pasal 1 ayat (1) dan (2)",
      "UUD 1945 Pasal 27",
      "UUD 1945 Pasal 28A–28J",
      "UUD 1945 Pasal 23A (pajak dan pungutan untuk keperluan negara)",
      "Amandemen UUD 1945 (1999, 2000, 2001, 2002)",
    ],
  },
  "twk-konstitusi": {
    sections: [
      {
        heading: "Apa Itu Konstitusi dan Kenapa Ia Mengikat",
        body: [
          "Konstitusi adalah hukum dasar tertinggi suatu negara. Di Indonesia, konstitusi itu adalah UUD 1945. Kedudukannya tertinggi berarti semua peraturan di bawahnya, mulai dari undang-undang sampai peraturan daerah, tidak boleh bertentangan dengannya. Kalau ada peraturan yang bertentangan dengan UUD, peraturan itu bisa dibatalkan melalui pengujian oleh Mahkamah Konstitusi.",
          "Konstitusi juga membedakan dua jenis hukum yang sering diujikan. Hukum privat, atau hukum perdata, mengatur hubungan antar warga negara dengan warga negara lain, misalnya jual beli, perkawinan, dan warisan. Hukum publik mengatur hubungan negara dengan warga negara dan hubungan antar lembaga negara, misalnya hukum pidana, hukum tata negara, dan hukum administrasi negara. Cara membedakannya sederhana: kalau yang diatur adalah urusan antar warga, itu hukum privat; kalau yang diatur melibatkan kekuasaan negara, itu hukum publik.",
          "Memahami konstitusi penting karena hampir semua soal TWK yang sulit bermuara ke sini: siapa yang berwenang apa, bagaimana aturan dibuat, dan bagaimana kekuasaan dibatasi. Konstitusi adalah aturan mainnya, dan soal TWK menguji apakah kamu memahami aturan main itu atau hanya menghafal namanya.",
        ],
      },
      {
        heading: "Amandemen UUD 1945: Empat Kali Perubahan",
        body: [
          "UUD 1945 telah diubah sebanyak empat kali, yaitu pada tahun 1999, 2000, 2001, dan 2002. Amandemen dilakukan karena UUD perlu menyesuaikan diri dengan tuntutan reformasi, terutama soal pembatasan kekuasaan dan jaminan hak asasi manusia. Pembukaan UUD tidak pernah diubah dalam keempat amandemen itu, yang diubah hanyalah batang tubuhnya.",
          "Amandemen pertama (1999) antara lain membatasi masa jabatan presiden menjadi paling lama dua periode dan memperkuat kedudukan DPR. Amandemen kedua (2000) menambahkan bab khusus tentang hak asasi manusia (Pasal 28A sampai 28J) dan mengatur tentang otonomi daerah. Amandemen ketiga (2001) antara lain mengatur kekuasaan kehakiman dalam Pasal 24, membentuk Mahkamah Konstitusi, dan mengatur tentang Dewan Perwakilan Daerah. Amandemen keempat (2002) antara lain mengatur pemilihan presiden secara langsung dan menghapus beberapa ketentuan yang sudah tidak relevan.",
          "Dalam soal, amandemen sering diuji dengan menanyakan apa yang berubah pada amandemen tertentu, atau kapan sebuah perubahan dilakukan. Misalnya, perubahan UUD yang ketiga dilaksanakan pada tanggal 9 November 2001 dan menambah ketentuan tentang kekuasaan kehakiman dalam Pasal 24. Cara mengingatnya adalah dengan mengaitkan tiap amandemen dengan perubahan besarnya: pertama membatasi presiden, kedua menambah HAM, ketiga mengatur kehakiman, keempat memilih presiden langsung.",
        ],
      },
      {
        heading: "Pasal 20: Bagaimana Undang-Undang Dibuat",
        body: [
          "Undang-undang dibuat oleh DPR bersama Presiden. Prosesnya dimulai dari rancangan undang-undang (RUU) yang diajukan, dibahas bersama, lalu disetujui bersama oleh DPR dan Presiden. Setelah disetujui bersama, RUU itu disahkan oleh Presiden menjadi undang-undang dan wajib diundangkan agar berlaku untuk umum.",
          "Ada satu ketentuan yang sering diujikan dan sering dilupakan: Pasal 20 ayat (5) UUD 1945. Ayat ini menyatakan bahwa bila Presiden tidak mengesahkan RUU yang sudah disetujui bersama dalam waktu 30 hari sejak persetujuan itu, RUU tersebut sah menjadi undang-undang dan wajib diundangkan. Artinya, Presiden tidak bisa membatalkan sebuah undang-undang hanya dengan mendiamkannya. Ketentuan 30 hari ini adalah pengaman agar proses legislasi tidak macet karena satu pihak menahan-nahan.",
          "Selain Pasal 20, ada pasal-pasal lain yang mengatur proses pembentukan undang-undang, misalnya Pasal 20 ayat (1) yang menyatakan DPR memegang kekuasaan membentuk undang-undang, dan Pasal 20 ayat (2) yang menyatakan setiap RUU dibahas oleh DPR dan Presiden untuk mendapatkan persetujuan bersama. Dalam soal, Pasal 20 biasanya muncul dalam bentuk studi kasus: apa yang terjadi bila Presiden tidak mengesahkan RUU dalam 30 hari, atau siapa yang berwenang membentuk undang-undang. Jawabannya selalu kembali ke ayat-ayat Pasal 20 ini.",
        ],
      },
      {
        heading: "Pasal 24: Kekuasaan Kehakiman",
        body: [
          "Pasal 24 UUD 1945 mengatur kekuasaan kehakiman, yaitu kekuasaan yang menegakkan hukum dan keadilan. Kekuasaan ini dijalankan oleh dua lembaga: Mahkamah Agung (MA) dan Mahkamah Konstitusi (MK). Mahkamah Agung adalah pengadilan tertinggi yang mengadili perkara pidana, perdata, dan tata usaha negara, serta mengawasi jalannya peradilan di bawahnya. Mahkamah Konstitusi menguji undang-undang terhadap UUD, memutus sengketa kewenangan antar lembaga negara, dan memutus perselisihan hasil pemilihan umum.",
          "Selain MA dan MK, ada Komisi Yudisial (KY) yang bertugas menjaga kehormatan, keluhuran martabat, dan perilaku hakim. Komisi Yudisial bisa mengusulkan pengangkatan hakim agung kepada DPR dan mengawasi perilaku hakim, tetapi ia tidak mengadili perkara. Pembagian ini penting: MA mengadili, MK menguji undang-undang, dan KY menjaga perilaku hakim. Ketiganya bekerja sama menjaga agar kekuasaan kehakiman tetap merdeka dan bersih.",
          "Dalam soal, Pasal 24 sering muncul dalam bentuk pertanyaan tentang lembaga mana yang berwenang menguji undang-undang, atau lembaga mana yang mengusulkan hakim agung. Jawabannya: yang menguji undang-undang adalah Mahkamah Konstitusi, yang mengusulkan hakim agung adalah Komisi Yudisial, dan yang mengadili perkara pada tingkat tertinggi adalah Mahkamah Agung. Jangan tertukar ketiganya, karena soal sengaja memasang ketiganya sebagai pilihan jawaban.",
        ],
      },
      {
        heading: "DPD: Suara Daerah di Parlemen",
        body: [
          "Dewan Perwakilan Daerah (DPD) adalah lembaga negara yang mewakili daerah. Anggota DPD dipilih langsung oleh rakyat di tiap provinsi, dan jumlahnya sama untuk setiap provinsi, berapa pun penduduknya. DPD berbeda dengan DPR: DPR mewakili rakyat berdasarkan jumlah penduduk, sedangkan DPD mewakili daerah sebagai kesatuan wilayah. Karena itu DPD sering disebut sebagai suara daerah di parlemen.",
          "Kewenangan DPD diatur dalam Pasal 22D UUD 1945. DPD dapat mengajukan rancangan undang-undang kepada DPR yang berkaitan dengan otonomi daerah, hubungan pusat dan daerah, pembentukan dan pemekaran serta penggabungan daerah, pengelolaan sumber daya alam dan sumber daya ekonomi lainnya, serta perimbangan keuangan antara pusat dan daerah. Selain itu, DPD juga ikut membahas RUU tentang hal-hal tersebut bersama DPR, dan memberikan pertimbangan atas RUU lain seperti APBN, pajak, pendidikan, dan agama.",
          "Dalam soal, DPD sering muncul dalam bentuk pertanyaan tentang apa yang bisa diajukan DPD kepada DPR, atau apa bedanya DPD dengan DPR. Kuncinya adalah mengingat daftar kewenangan DPD di atas: semuanya berkaitan dengan daerah, sumber daya, dan keuangan pusat-daerah. Kalau sebuah RUU tidak berkaitan dengan daerah, maka itu bukan kewenangan DPD untuk mengajukannya.",
        ],
      },
      {
        heading: "Amnesti, Grasi, Abolisi, Rehabilitasi, dan Pemberhentian Presiden",
        body: [
          "Presiden memiliki wewenang memberikan pengampunan yang diatur dalam Pasal 14 UUD 1945. Ada empat bentuk pengampunan yang wajib dibedakan. Grasi adalah pengampunan yang diberikan kepada terpidana perseorangan, dan Presiden memberikannya dengan memperhatikan pertimbangan Mahkamah Agung. Rehabilitasi adalah pemulihan nama baik dan hak-hak seseorang yang pernah dituntut atau dihukum, dan Presiden memberikannya dengan memperhatikan pertimbangan Mahkamah Agung juga.",
          "Amnesti adalah pengampunan yang diberikan kepada sekelompok orang, biasanya untuk tindak pidana yang bersifat politik, dan Presiden memberikannya dengan memperhatikan pertimbangan DPR. Abolisi adalah penghapusan penuntutan terhadap seseorang, yaitu menghentikan proses hukum yang sedang berjalan, dan Presiden memberikannya dengan memperhatikan pertimbangan DPR juga. Cara mengingatnya: grasi dan rehabilitasi urusannya dengan Mahkamah Agung, amnesti dan abolisi urusannya dengan DPR. Empat istilah ini sering keluar bersamaan dalam satu soal, dan yang diuji adalah kemampuanmu membedakan siapa yang memberi pertimbangan untuk yang mana.",
          "Selain pengampunan, UUD juga mengatur pemberhentian Presiden dalam Pasal 7B. Prosesnya bertahap: DPR mengusulkan pemberhentian setelah memeriksa pendapat bahwa Presiden melanggar hukum, lalu Mahkamah Konstitusi memeriksa dan memutus apakah pelanggaran itu terbukti, dan bila terbukti, MPR memutuskan dalam rapat paripurna. Keputusan MPR harus diambil dalam rapat paripurna yang dihadiri paling sedikit tiga perempat anggota dan disetujui paling sedikit dua pertiga dari yang hadir. Proses yang berlapis ini menunjukkan bahwa memberhentikan presiden tidak bisa dilakukan oleh satu lembaga saja.",
        ],
      },
    ],
    sources: [
      "UUD 1945 Pasal 14 (grasi, rehabilitasi, amnesti, abolisi)",
      "UUD 1945 Pasal 20 (pembentukan undang-undang)",
      "UUD 1945 Pasal 22D (kewenangan DPD)",
      "UUD 1945 Pasal 24 (kekuasaan kehakiman)",
      "UUD 1945 Pasal 7B (pemberhentian Presiden)",
      "Amandemen UUD 1945 (1999, 2000, 2001, 2002)",
    ],
  },
  "twk-nkri": {
    sections: [
      {
        heading: "Apa Itu NKRI",
        body: [
          "NKRI adalah singkatan dari Negara Kesatuan Republik Indonesia. Kata kuncinya ada pada negara kesatuan, yaitu bentuk negara yang kekuasaan tertingginya berada di tangan pemerintah pusat. Daerah memang diberi kewenangan untuk mengurus urusannya sendiri melalui otonomi, tetapi daerah tetap bagian dari satu negara yang utuh, bukan negara di dalam negara.",
          "Bentuk kesatuan ini berbeda dengan negara federal, di mana negara-negara bagian memiliki kedaulatan sendiri. Di Indonesia, tidak ada provinsi yang boleh membuat aturan yang bertentangan dengan aturan pusat, dan tidak ada daerah yang boleh memisahkan diri. Kesatuan ini adalah harga mati yang dipertahankan sejak proklamasi.",
          "Pemahaman tentang negara kesatuan ini penting karena banyak soal TWK yang menguji apakah kamu bisa membedakan negara kesatuan dengan negara federal. Kalau soal menggambarkan daerah yang ingin membuat aturan sendiri yang bertentangan dengan pusat, atau kelompok yang ingin memisahkan diri, jawaban yang tepat selalu kembali pada prinsip negara kesatuan. Sebaliknya, bila soal menggambarkan daerah yang bebas membuat aturan sendiri tanpa peduli aturan pusat, sikap itu sudah keluar dari prinsip negara kesatuan.",
        ],
      },
      {
        heading: "Wawasan Nusantara: Satu Kesatuan yang Utuh",
        body: [
          "Wawasan Nusantara adalah cara pandang bangsa Indonesia terhadap diri dan lingkungannya sebagai satu kesatuan yang utuh. Indonesia adalah negara kepulauan dengan ribuan pulau, ratusan suku, dan beragam budaya, tetapi semuanya dipandang sebagai satu kesatuan wilayah, satu kesatuan bangsa, dan satu kesatuan tujuan. Semua unsur itu, wilayah, bangsa, dan tujuan, dipandang sebagai satu kesatuan yang tidak bisa dipisahkan satu sama lain.",
          "Cara pandang ini lahir dari kesadaran bahwa laut yang memisahkan pulau-pulau bukanlah pemisah, melainkan penghubung. Dulu, orang mungkin menganggap laut sebagai penghalang, tetapi Wawasan Nusantara mengajarkan bahwa laut justru menyatukan, karena kapal dan perdagangan telah menghubungkan pulau-pulau itu sejak ratusan tahun lalu. Itulah sebabnya, dalam Wawasan Nusantara, laut disebut sebagai pemersatu, bukan pemisah, dan pulau-pulau dipandang sebagai satu kesatuan wilayah.",
          "Dalam soal, Wawasan Nusantara sering diuji melalui studi kasus tentang sikap terhadap daerah lain. Misalnya, ada cerita tentang seseorang yang menganggap daerahnya lebih penting dari daerah lain, atau yang tidak peduli dengan nasib daerah yang jauh. Sikap seperti itu bertentangan dengan Wawasan Nusantara, karena cara pandang yang benar adalah melihat Indonesia sebagai satu kesatuan yang saling membutuhkan.",
        ],
      },
      {
        heading: "Ketahanan Nasional dan Asta Gatra",
        body: [
          "Ketahanan nasional adalah kemampuan bangsa untuk mempertahankan kelangsungan hidupnya dari berbagai ancaman, baik dari dalam maupun dari luar. Bangsa yang memiliki ketahanan nasional yang kuat tidak mudah goyah ketika menghadapi krisis, karena seluruh unsur kehidupannya saling menguatkan. Ketahanan ini tidak hanya soal kekuatan militer, melainkan soal kekuatan seluruh sendi kehidupan bangsa, dari ekonomi sampai budaya.",
          "Ketahanan nasional dibangun di atas delapan unsur yang disebut Asta Gatra. Tiga di antaranya bersifat alamiah, yaitu geografi, demografi, dan sumber daya alam. Lima lainnya bersifat sosial, yaitu ideologi, politik, ekonomi, sosial budaya, dan pertahanan keamanan. Kedelapan unsur ini saling berkaitan, sehingga kelemahan pada satu unsur bisa melemahkan keseluruhan.",
          "Untuk soal, hafalkan kedelapan gatra beserta contohnya. Misalnya, geografi berkaitan dengan letak dan bentuk wilayah, demografi berkaitan dengan jumlah dan komposisi penduduk, dan pertahanan keamanan berkaitan dengan kemampuan menjaga kedaulatan. Soal sering meminta kamu menentukan gatra mana yang sedang dibicarakan dalam sebuah cerita, jadi pahami ciri khas tiap gatra.",
        ],
      },
      {
        heading: "Ancaman terhadap NKRI",
        body: [
          "NKRI menghadapi berbagai ancaman yang bisa melemahkan persatuan bangsa. Ancaman itu antara lain separatisme, yaitu gerakan yang ingin memisahkan diri dari Indonesia; terorisme, yaitu kekerasan yang menimbulkan ketakutan untuk tujuan tertentu; radikalisme, yaitu paham yang ingin mengubah tatanan secara mendasar dengan cara memaksa; serta korupsi dan disintegrasi sosial yang menggerogoti kepercayaan rakyat terhadap negara. Masing-masing ancaman ini menyerang persatuan dari sisi yang berbeda, ada yang menyerang wilayah, ada yang menyerang kepercayaan rakyat, dan ada yang menyerang akhlak para pejabatnya.",
          "Ancaman-ancaman ini tidak selalu datang dari luar. Banyak di antaranya tumbuh dari dalam, misalnya ketika kesenjangan ekonomi terlalu lebar, ketika kelompok tertentu merasa tidak didengar, atau ketika ujaran kebencian dibiarkan menyebar tanpa ada yang menegur. Karena itu, menjaga NKRI bukan hanya tugas tentara dan polisi, melainkan tugas seluruh warga negara.",
          "Dalam soal, ancaman terhadap NKRI sering muncul dalam bentuk studi kasus. Misalnya, ada cerita tentang kelompok yang menyebarkan ajakan mengganti dasar negara, atau tentang pejabat yang menyalahgunakan wewenang. Tugasmu adalah mengenali jenis ancamannya dan sikap apa yang paling tepat untuk menghadapinya.",
        ],
      },
      {
        heading: "Bela Negara: Bukan Harus Jadi Tentara",
        body: [
          "Bela negara adalah hak sekaligus kewajiban setiap warga negara, sebagaimana diatur dalam Pasal 27 ayat (3) dan Pasal 30 UUD 1945. Banyak orang mengira bela negara berarti harus menjadi tentara atau ikut perang, padahal maknanya jauh lebih luas. Bela negara berarti setiap warga berkontribusi menjaga negaranya sesuai kemampuan dan profesinya masing-masing.",
          "Wujud bela negara dalam kehidupan sehari-hari bisa sangat sederhana. Seorang pelajar yang belajar dengan sungguh-sungguh sedang membela negara, karena ia sedang menyiapkan diri menjadi generasi yang mampu membangun bangsa. Seorang guru yang mengajar dengan ikhlas, seorang pedagang yang jujur, dan seorang warga yang membayar pajak tepat waktu, semuanya sedang menjalankan bela negara.",
          "Bahkan sikap kecil seperti mengikuti upacara bendera dengan khidmat, menjaga fasilitas umum, dan tidak menyebarkan kabar bohong adalah bentuk bela negara. Intinya, bela negara bukan soal seragam dan senjata, melainkan soal kesadaran bahwa negara ini adalah rumah bersama yang harus dijaga oleh semua penghuninya. Siapa pun bisa membela negara, asalkan ia sadar bahwa dirinya adalah bagian dari bangsa ini dan mau berbuat sesuatu untuknya.",
        ],
      },
      {
        heading: "Cara Soal TWK Menguji NKRI",
        body: [
          "Soal NKRI biasanya keluar dalam bentuk studi kasus sikap, bukan hafalan definisi semata. Misalnya, ada cerita tentang pelajar yang menolak mengikuti upacara bendera dengan alasan itu bukan kewajiban, lalu soal bertanya bagaimana penilaian terhadap sikap itu dari sudut pandang bela negara. Jawabannya, upacara bendera adalah wujud sederhana dari nasionalisme, dan menolaknya tanpa alasan yang sah bertentangan dengan semangat bela negara.",
          "Selain studi kasus, soal juga menguji pemahaman konsep seperti Wawasan Nusantara, Asta Gatra, dan jenis-jenis ancaman. Cara belajarnya adalah dengan menghafalkan konsep beserta contohnya, lalu berlatih mengaitkan konsep itu dengan cerita sehari-hari. Jangan hanya menghafal istilah, karena soal akan menyajikan istilah itu dalam bentuk cerita yang berbeda-beda.",
          "Satu hal lagi yang sering muncul adalah semboyan Bhinneka Tunggal Ika yang tertulis pada lambang Garuda Pancasila. Semboyan ini berarti berbeda-beda tetapi tetap satu, dan menjadi pengingat bahwa keberagaman bukanlah ancaman bagi NKRI, melainkan kekuatannya. Soal yang membahas semboyan ini biasanya menguji pemahamanmu tentang persatuan dalam keberagaman.",
        ],
      },
    ],
    sources: [
      "UUD 1945 Pasal 1 ayat (1) (negara kesatuan berbentuk republik)",
      "UUD 1945 Pasal 27 ayat (3) (hak dan kewajiban bela negara)",
      "UUD 1945 Pasal 30 (usaha pertahanan dan keamanan negara)",
      "Lambang negara Garuda Pancasila (semboyan Bhinneka Tunggal Ika)",
    ],
  },
  "twk-otonomi-daerah": {
    sections: [
      {
        heading: "Apa Itu Otonomi Daerah dan Desentralisasi",
        body: [
          "Otonomi daerah adalah hak, wewenang, dan kewajiban daerah untuk mengatur dan mengurus urusan pemerintahannya sendiri. Prinsip yang melandasinya disebut desentralisasi, yaitu penyerahan wewenang dari pemerintah pusat kepada pemerintah daerah. Tujuannya adalah agar urusan yang menyangkut masyarakat setempat bisa diputuskan lebih cepat dan lebih tepat, karena yang paling tahu kebutuhan daerah adalah daerah itu sendiri.",
          "Desentralisasi adalah lawan dari sentralisasi, yaitu ketika semua keputusan diambil oleh pemerintah pusat. Di masa lalu Indonesia pernah sangat sentralistis, sehingga daerah harus menunggu keputusan dari pusat untuk urusan yang sebenarnya bisa diputuskan sendiri. Setelah reformasi, UUD 1945 diamandemen untuk memberi ruang otonomi yang lebih luas kepada daerah, dan otonomi daerah menjadi bagian penting dari penyelenggaraan negara.",
          "Yang perlu diingat, otonomi daerah tidak berarti daerah menjadi negara sendiri. Indonesia tetap negara kesatuan, dan otonomi berjalan dalam bingkai NKRI. Daerah boleh mengatur urusannya sendiri, tetapi tidak boleh membuat aturan yang bertentangan dengan peraturan di atasnya, dan urusan-urusan yang berskala nasional tetap menjadi wewenang pemerintah pusat.",
        ],
      },
      {
        heading: "Hubungan Wewenang Pusat dan Daerah",
        body: [
          "Pembagian wewenang antara pusat dan daerah diatur sedemikian rupa agar masing-masing fokus pada urusannya. Pemerintah pusat memegang urusan yang berskala nasional, yaitu politik luar negeri, pertahanan, keamanan, moneter dan fiskal, agama, serta peradilan. Keenam urusan ini disebut urusan pemerintahan absolut yang menjadi kewenangan pemerintah pusat dan tidak bisa diserahkan ke daerah.",
          "Di luar enam urusan itu, daerah berwenang mengatur urusannya sendiri, misalnya pendidikan, kesehatan, pekerjaan umum, dan perizinan di wilayahnya. Pembagian ini diatur dalam undang-undang tentang pemerintahan daerah, dan menjadi dasar bagi daerah untuk menyusun peraturan daerah serta anggaran daerahnya. Kalau kamu membaca soal yang menanyakan siapa yang berwenang atas suatu urusan, pertama-tama tanyakan: apakah urusan itu masuk enam urusan absolut pusat? Kalau iya, jawabannya pusat; kalau tidak, jawabannya daerah.",
          "Selain pembagian wewenang, ada juga hubungan keuangan antara pusat dan daerah, yang disebut perimbangan keuangan. Pemerintah pusat menyalurkan dana ke daerah, dan daerah mengelola anggarannya sendiri dengan tetap mempertanggungjawabkannya. Hubungan ini juga menjadi salah satu kewenangan DPD untuk memberikan pertimbangan, sebagaimana dibahas dalam materi Konstitusi.",
        ],
      },
      {
        heading: "Pemerintahan Daerah Berdasarkan Hukum",
        body: [
          "Otonomi tidak berarti daerah bebas berbuat apa saja. Pemerintahan daerah dalam menjalankan pemerintahannya tetap harus berdasarkan hukum yang berlaku, karena pemerintahan daerah adalah bagian dari pemerintahan negara yang berdasar atas hukum. Artinya, setiap kebijakan dan peraturan daerah harus sesuai dengan peraturan perundang-undangan yang lebih tinggi.",
          "Contohnya, sebuah kabupaten tidak boleh membuat peraturan daerah yang isinya bertentangan dengan undang-undang. Kalau peraturan daerah itu bertentangan, maka peraturan daerah itu tidak berlaku dan bisa dibatalkan. Begitu pula kepala daerah tidak boleh mengeluarkan kebijakan yang melanggar hukum, meskipun ia dipilih langsung oleh rakyat daerahnya. Kekuasaan yang berasal dari rakyat tetap harus dijalankan dalam koridor hukum.",
          "Dalam soal, prinsip ini sering muncul dalam bentuk studi kasus: sebuah daerah membuat aturan yang bertentangan dengan undang-undang, lalu soal bertanya bagaimana penilaiannya. Jawabannya selalu sama, yaitu aturan daerah itu tidak berlaku karena bertentangan dengan hukum yang lebih tinggi. Pegang prinsip ini baik-baik, karena ia adalah kunci dari hampir semua soal otonomi daerah yang berbentuk kasus.",
        ],
      },
      {
        heading: "Daerah Istimewa dan Otonomi Khusus",
        body: [
          "Selain daerah biasa, ada daerah-daerah yang memiliki status khusus dan diatur dengan undang-undang tersendiri. Ada dua istilah yang wajib dibedakan. Daerah istimewa adalah daerah yang memiliki keistimewaan dalam penyelenggaraan pemerintahannya karena sejarah dan budayanya, misalnya DI Yogyakarta dan DKI Jakarta. Otonomi khusus adalah kewenangan yang lebih luas yang diberikan kepada daerah tertentu, misalnya Aceh dan Papua, untuk mengatur urusannya sendiri sesuai kekhasan daerahnya.",
          "Otonomi khusus Aceh diatur dengan UU 11/2006, sedangkan otonomi khusus Papua diatur dengan UU 21/2001. Kedua undang-undang ini memberikan kewenangan yang lebih luas daripada daerah biasa, antara lain dalam hal pengelolaan sumber daya dan penyelenggaraan pemerintahan yang sesuai dengan kekhasan daerah. DI Yogyakarta memiliki keistimewaan karena kesultanannya, sedangkan DKI Jakarta memiliki keistimewaan sebagai ibu kota negara.",
          "Dalam soal, keempat daerah ini sering muncul sebagai pilihan jawaban, dan yang diuji adalah kemampuanmu membedakan mana yang berstatus istimewa dan mana yang berstatus otonomi khusus, serta undang-undang apa yang mengaturnya. Hafalkan pasangannya: Aceh dan Papua adalah otonomi khusus, Yogyakarta dan Jakarta adalah daerah istimewa, dan ingat UU 21/2001 untuk Papua serta UU 11/2006 untuk Aceh.",
        ],
      },
      {
        heading: "Otonomi Daerah dalam Kehidupan Sehari-hari",
        body: [
          "Otonomi daerah bukan hanya teori di buku, melainkan sesuatu yang kamu rasakan setiap hari. Ketika pemerintah kotamu memperbaiki jalan, membangun puskesmas, atau mengurus perizinan usaha, itu adalah wujud otonomi daerah bekerja. Urusan-urusan yang dekat dengan kehidupan warga sehari-hari memang sengaja diserahkan kepada daerah, karena daerah yang paling tahu kondisi jalan di wilayahnya, jumlah puskesmas yang dibutuhkan, dan usaha apa yang berkembang di sana.",
          "Otonomi juga berarti warga bisa berpartisipasi lebih dekat dalam pemerintahan. Kamu bisa menyampaikan aspirasi kepada DPRD kotamu, mengikuti musyawarah perencanaan pembangunan di kelurahan, atau mengawasi penggunaan anggaran daerah. Kedekatan ini adalah keuntungan desentralisasi: pemerintah menjadi lebih mudah dijangkau dan diawasi oleh warganya sendiri.",
          "Dalam soal, otonomi daerah dalam kehidupan sehari-hari sering muncul dalam bentuk cerita tentang pelayanan daerah, misalnya warga yang mengurus izin ke pemerintah kabupaten, atau kepala daerah yang membuat kebijakan untuk wilayahnya. Tugasmu adalah mengenali bahwa cerita itu tentang otonomi, lalu mengaitkannya dengan prinsip desentralisasi dan pemerintahan berdasarkan hukum.",
        ],
      },
      {
        heading: "Cara Soal TWK Menguji Otonomi Daerah",
        body: [
          "Soal otonomi daerah biasanya keluar dalam tiga bentuk. Bentuk pertama adalah hafalan, yaitu menanyakan pengertian desentralisasi, urusan absolut pusat, atau daerah yang berstatus istimewa dan otonomi khusus. Bentuk kedua adalah studi kasus, yaitu cerita tentang peraturan daerah yang bertentangan dengan undang-undang, lalu kamu diminta menilai keabsahannya. Bentuk ketiga adalah pernyataan yang harus dinilai benar atau salah, misalnya tentang hubungan wewenang antara pusat dan daerah.",
          "Untuk bentuk hafalan, kunci utamanya adalah menghafal enam urusan absolut pusat dan empat daerah berstatus khusus beserta undang-undangnya. Untuk bentuk studi kasus, kuncinya adalah prinsip pemerintahan berdasarkan hukum: aturan daerah yang bertentangan dengan aturan yang lebih tinggi tidak berlaku. Untuk bentuk pernyataan, kuncinya adalah membaca tiap pernyataan dengan teliti dan memeriksa apakah ia sesuai dengan prinsip desentralisasi.",
          "Terakhir, perhatikan bahwa soal otonomi daerah sering dikaitkan dengan materi lain, misalnya dengan DPD yang berwenang mengajukan RUU tentang otonomi daerah, atau dengan NKRI yang menjadi bingkai otonomi. Kalau kamu menemukan soal seperti itu, jangan bingung: otonomi adalah bagian dari NKRI, dan DPD adalah lembaga yang menyuarakan daerah. Memahami keterkaitan antar materi akan membuatmu lebih siap menghadapi soal yang menggabungkan dua topik sekaligus.",
        ],
      },
    ],
    sources: [
      "UUD 1945 Pasal 18 (pemerintahan daerah)",
      "UU 21/2001 tentang Otonomi Khusus bagi Provinsi Papua",
      "UU 11/2006 tentang Pemerintahan Aceh",
      "Prinsip desentralisasi dalam bingkai NKRI",
    ],
  },
  "twk-bhinneka": {
    sections: [
      {
        heading: "Dari Kitab Sutasoma: Asal Usul Bhinneka Tunggal Ika",
        body: [
          "Semboyan Bhinneka Tunggal Ika berasal dari Kitab Sutasoma, sebuah karya sastra Jawa Kuno yang ditulis oleh Mpu Tantular pada masa Kerajaan Majapahit. Kalimat aslinya berbunyi Bhinneka Tunggal Ika, Tan Hana Dharma Mangrwa, yang artinya berbeda-beda tetapi tetap satu, tidak ada kebenaran yang mendua. Nama Mpu Tantular sebagai penulisnya juga sering ditanyakan dalam soal, jadi hafalkan nama kitab dan nama pengarangnya secara berpasangan.",
          "Pada zamannya, kalimat ini lahir di tengah masyarakat yang beragam keyakinan, terutama antara pemeluk Hindu dan Buddha. Mpu Tantular ingin menegaskan bahwa perbedaan ajaran tidak harus menjadi alasan perpecahan, karena kebenaran pada dasarnya satu. Pesan yang ditulis ratusan tahun lalu itu ternyata tetap relevan sampai hari ini.",
          "Para pendiri bangsa kemudian mengangkat semboyan ini menjadi semboyan negara, dan menuliskannya pada pita yang dicengkeram oleh Garuda Pancasila. Dengan begitu, setiap kali kita melihat lambang negara, kita diingatkan bahwa keberagaman adalah kenyataan bangsa ini sejak dulu, dan persatuan adalah jawabannya. Semboyan ini menjadi pengikat yang mengingatkan setiap generasi bahwa persatuan harus terus dijaga, apa pun perbedaan yang ada.",
        ],
      },
      {
        heading: "Indonesia yang Beragam",
        body: [
          "Indonesia adalah salah satu negara paling beragam di dunia. Bangsa ini terdiri dari ratusan suku dengan bahasa daerah, adat istiadat, dan kesenian yang berbeda-beda. Di dalamnya juga hidup enam agama yang diakui negara, yaitu Islam, Kristen, Katolik, Hindu, Buddha, dan Konghucu, beserta berbagai aliran kepercayaan yang tumbuh di tengah masyarakat.",
          "Keberagaman ini bukan hasil dari satu peristiwa, melainkan hasil dari sejarah panjang. Letak Indonesia di jalur perdagangan dunia membuat berbagai bangsa datang dan menetap, membawa agama, bahasa, dan budaya mereka. Akibatnya, tidak ada satu daerah pun di Indonesia yang budayanya sepenuhnya sama dengan daerah lain.",
          "Bagi bangsa Indonesia, keberagaman adalah kekayaan, bukan beban. Bahasa daerah yang ratusan jumlahnya adalah kekayaan sastra, masakan daerah adalah kekayaan kuliner, dan upacara adat adalah kekayaan budaya. Bangsa yang menghargai keberagamannya akan lebih kuat, karena ia memiliki banyak cara untuk melihat dunia dan menyelesaikan masalah.",
        ],
      },
      {
        heading: "Toleransi yang Benar",
        body: [
          "Toleransi adalah sikap menghormati perbedaan, dan ia menjadi kunci agar keberagaman tidak berubah menjadi perpecahan. Toleransi berarti memberi ruang bagi orang lain untuk hidup sesuai keyakinannya, tanpa merasa terancam dan tanpa mengancam. Orang yang toleran tidak harus setuju dengan keyakinan orang lain, tetapi ia menghormati hak orang lain untuk meyakininya.",
          "Yang sering disalahpahami adalah anggapan bahwa toleransi berarti menyamakan semua keyakinan. Padahal tidak demikian. Toleransi bukan berarti semua agama sama dan boleh dicampuradukkan, melainkan berarti kita menghormati perbedaan sambil tetap teguh pada keyakinan sendiri. Perbedaan antara menghormati dan menyamakan ini penting, karena soal TWK sering mengujinya.",
          "Toleransi juga bukan sikap pasif yang hanya diam ketika melihat perbedaan. Toleransi yang aktif berarti berani menegur ujaran kebencian, berani membela orang yang didiskriminasi, dan berani mengajak orang lain untuk saling menghormati. Toleransi yang diam saja tidak cukup untuk menjaga persatuan.",
        ],
      },
      {
        heading: "Integrasi Nasional dan Penghambatnya",
        body: [
          "Integrasi nasional adalah proses menyatukan unsur-unsur bangsa yang beragam menjadi satu kesatuan yang utuh. Integrasi bukan berarti menghapus perbedaan, melainkan berarti membuat perbedaan itu hidup berdampingan dalam satu bingkai kebangsaan. Orang yang berbeda suku dan agama tetap merasa menjadi bagian dari satu Indonesia.",
          "Ada beberapa faktor yang menghambat integrasi nasional. Yang pertama adalah primordialisme sempit, yaitu sikap yang hanya mementingkan kelompok sendiri, seperti suku atau daerah sendiri, dan menganggap kelompok lain lebih rendah. Yang kedua adalah diskriminasi, yaitu perlakuan tidak adil terhadap kelompok tertentu. Yang ketiga adalah kesenjangan, baik ekonomi maupun pembangunan, yang membuat sebagian daerah merasa tertinggal dan tidak diperhatikan.",
          "Faktor penghambat lainnya adalah fanatisme, yaitu sikap berlebihan dalam membela keyakinan atau kelompok sendiri sampai menutup telinga terhadap pendapat orang lain. Fanatisme membuat orang sulit berdialog, karena ia merasa hanya kelompoknyalah yang benar. Keempat faktor ini sering muncul dalam soal, jadi hafalkan masing-masing beserta contohnya.",
        ],
      },
      {
        heading: "Persatuan dalam Perbedaan: Contoh Sehari-hari",
        body: [
          "Persatuan dalam keberagaman bukan hanya slogan yang dibacakan saat upacara, melainkan sikap yang bisa dilatih dalam kehidupan sehari-hari. Contoh yang paling sederhana adalah tidak mengejek logat atau bahasa daerah teman yang berasal dari daerah lain. Logat adalah bagian dari identitas seseorang, dan menertawakannya berarti merendahkan identitas itu.",
          "Contoh lainnya adalah kerja sama antarwarga yang berbeda latar belakang, seperti gotong royong membangun balai desa, atau warga berbeda agama yang saling membantu saat hajatan. Dalam momen seperti itu, perbedaan tidak hilang, tetapi tidak lagi menjadi penghalang. Orang tetap berbeda, tetapi bekerja untuk tujuan yang sama.",
          "Di lingkungan kerja dan sekolah, persatuan tampak pada sikap yang tidak membeda-bedakan teman berdasarkan suku atau agama. Orang yang mengamalkan Bhinneka Tunggal Ika tidak memilih teman berdasarkan kesamaan latar belakang, melainkan berdasarkan sikap dan karakter. Sikap seperti inilah yang membangun persatuan yang sesungguhnya.",
        ],
      },
      {
        heading: "Cara Soal TWK Menguji Bhinneka",
        body: [
          "Soal TWK tentang Bhinneka Tunggal Ika hampir selalu berupa studi kasus. Misalnya, ada cerita tentang pegawai baru dari daerah lain yang diejek logatnya oleh rekan kerja, lalu soal bertanya sikap apa yang paling mencerminkan Bhinneka Tunggal Ika. Jawaban yang tepat adalah menegur dengan sopan dan mengajak menghargai perbedaan, karena persatuan dibangun dengan menghormati keragaman, bukan menertawakan perbedaan.",
          "Soal juga sering menyajikan situasi gesekan antar kelompok, lalu meminta kamu memilih sikap yang paling tepat. Ingatlah bahwa jawaban yang benar biasanya adalah sikap yang menengahi, mendamaikan, dan mengajak musyawarah, bukan sikap yang memihak satu kelompok atau membiarkan konflik membesar. Sikap netral dan adil adalah ciri khas jawaban yang mencerminkan Bhinneka Tunggal Ika.",
          "Selain studi kasus, soal juga menguji hafalan tentang asal usul semboyan dan faktor penghambat integrasi. Hafalkan bahwa Bhinneka Tunggal Ika berasal dari Kitab Sutasoma karya Mpu Tantular, dan hafalkan empat penghambat integrasi, yaitu primordialisme, diskriminasi, kesenjangan, dan fanatisme. Dengan begitu, kamu siap menghadapi soal Bhinneka dalam bentuk apa pun.",
        ],
      },
    ],
    sources: [
      "Kitab Sutasoma karya Mpu Tantular (asal semboyan Bhinneka Tunggal Ika)",
      "Lambang negara Garuda Pancasila (pita semboyan Bhinneka Tunggal Ika)",
      "Sumpah Pemuda 28 Oktober 1928 (satu tanah air, satu bangsa, satu bahasa)",
      "UUD 1945 Pasal 29 (kebebasan beragama)",
    ],
  },
  "twk-sejarah": {
    sections: [
      {
        heading: "1908: Budi Utomo dan Kebangkitan Nasional",
        body: [
          "Pada 20 Mei 1908, berdiri sebuah organisasi bernama Budi Utomo. Organisasi ini didirikan oleh para pelajar sekolah kedokteran di Batavia, dan menjadi organisasi pergerakan pertama yang bersifat nasional. Sebelumnya, perlawanan terhadap penjajah lebih banyak bersifat kedaerahan, dipimpin oleh tokoh setempat dan terbatas pada daerahnya masing-masing.",
          "Yang membuat Budi Utomo istimewa adalah cara berpikirnya. Para pendirinya menyadari bahwa penjajah hanya bisa dilawan bila seluruh bangsa bersatu, bukan berjuang sendiri-sendiri. Karena itu, mereka mendirikan organisasi yang terbuka untuk semua orang Indonesia, tanpa memandang suku atau daerah asal. Cara berpikir inilah yang kemudian menjadi dasar kesadaran berbangsa.",
          "Atas alasan itulah, 20 Mei 1908 diperingati sebagai Hari Kebangkitan Nasional. Tanggal ini bukan sekadar tanggal berdirinya sebuah organisasi, melainkan tonggak ketika bangsa Indonesia mulai menyadari dirinya sebagai satu bangsa. Soal TWK sering menanyakan alasan di balik penetapan hari ini, dan jawabannya selalu kembali pada kesadaran nasional yang dibawa Budi Utomo.",
        ],
      },
      {
        heading: "1928: Sumpah Pemuda",
        body: [
          "Dua puluh tahun setelah Budi Utomo, tepatnya pada 28 Oktober 1928, para pemuda dari berbagai daerah berkumpul dalam Kongres Pemuda di Batavia. Di sana mereka mengikrarkan Sumpah Pemuda, yang isinya tiga tekad: satu tanah air, satu bangsa, dan satu bahasa, yaitu Indonesia. Ikrar ini menjadi pernyataan bahwa para pemuda dari suku dan daerah yang berbeda telah sepakat menjadi satu bangsa.",
          "Sumpah Pemuda penting karena ia lahir dari kesadaran para pemuda sendiri, bukan dari paksaan siapa pun. Mereka yang berasal dari Jawa, Sumatra, Sulawesi, dan daerah lain menyadari bahwa perbedaan daerah tidak menghalangi mereka untuk bersatu. Bahasa Indonesia pun dipilih sebagai bahasa persatuan, karena bahasa ini dapat menjadi jembatan antar suku tanpa mengorbankan bahasa daerah masing-masing.",
          "Dalam soal, Sumpah Pemuda sering diuji melalui tanggal, isi ikrar, dan maknanya. Hafalkan tanggal 28 Oktober 1928 beserta ketiga isi ikrarnya, dan pahami bahwa makna terdalamnya adalah persatuan. Soal juga kadang mengaitkan Sumpah Pemuda dengan nilai perjuangan, seperti rela berkorban dan pantang menyerah demi persatuan bangsa.",
        ],
      },
      {
        heading: "1945: BPUPKI, Piagam Jakarta, dan Rumusan Pancasila",
        body: [
          "Pada tahun 1945, dibentuklah BPUPKI, yaitu badan yang bertugas mempersiapkan kemerdekaan Indonesia. Dalam sidang-sidangnya, para tokoh bangsa membahas dasar negara seperti apa yang cocok untuk Indonesia yang beragam. Di sinilah Pancasila dirumuskan, melalui perdebatan dan musyawarah yang panjang antara para tokoh dengan latar belakang yang berbeda-beda.",
          "Salah satu hasil penting dari proses ini adalah Piagam Jakarta, yang disepakati pada 22 Juni 1945. Piagam ini memuat rumusan awal dasar negara, dan menjadi pijakan bagi rumusan Pancasila yang kita kenal hari ini. Perjalanan dari Piagam Jakarta menuju Pancasila menunjukkan bahwa dasar negara kita lahir dari musyawarah, bukan dari keputusan satu pihak.",
          "Untuk soal, hafalkan tiga hal dari periode ini: BPUPKI sebagai badan yang merumuskan dasar negara, Piagam Jakarta pada 22 Juni 1945, dan kedudukan Pancasila sebagai hasil musyawarah para pendiri bangsa. Soal sering meminta kamu mengurutkan peristiwa atau menentukan peran BPUPKI, jadi pahami alur ceritanya, bukan sekadar menghafal nama. Dengan memahami alur ini, kamu tidak akan tertukar antara BPUPKI yang merumuskan dasar negara dan PPKI yang mengesahkan UUD serta mengangkat presiden dan wakil presiden pertama.",
        ],
      },
      {
        heading: "17 Agustus 1945: Proklamasi",
        body: [
          "Pada 17 Agustus 1945, Soekarno dan Hatta memproklamasikan kemerdekaan Indonesia. Peristiwa ini adalah puncak dari perjuangan panjang bangsa Indonesia, dan menjadi hari lahirnya negara Indonesia. Proklamasi dibacakan di tengah situasi yang penuh ketidakpastian, karena saat itu Perang Dunia baru saja berakhir dan kekuasaan di Indonesia sedang berada dalam kekosongan.",
          "Setelah proklamasi dibacakan, dibentuklah PPKI, yaitu badan yang bertugas mengesahkan UUD 1945 dan mengangkat presiden serta wakil presiden pertama. PPKI inilah yang menetapkan Soekarno sebagai presiden dan Hatta sebagai wakil presiden, serta mengesahkan UUD 1945 sebagai dasar hukum negara yang baru merdeka. Keputusan-keputusan PPKI ini menjadi fondasi pertama negara Indonesia yang baru merdeka, sehingga perannya sering ditanyakan dalam soal.",
          "Proklamasi adalah peristiwa yang paling sering keluar dalam soal sejarah, dan hampir selalu dikaitkan dengan makna kemerdekaan. Pahami bahwa proklamasi bukan akhir perjuangan, melainkan awal dari perjuangan baru, yaitu mempertahankan kemerdekaan yang baru saja dinyatakan. Kesadaran inilah yang menghubungkan proklamasi dengan peristiwa-peristiwa setelahnya.",
        ],
      },
      {
        heading: "1945–1949: Mempertahankan Kemerdekaan",
        body: [
          "Kemerdekaan yang diproklamasikan pada 1945 tidak langsung diakui oleh semua pihak. Selama kurang lebih empat tahun setelahnya, bangsa Indonesia harus mempertahankan kemerdekaannya melalui perlawanan bersenjata sekaligus perjuangan diplomasi. Periode ini dikenal sebagai masa revolusi fisik dan diplomasi.",
          "Di satu sisi, terjadi berbagai pertempuran untuk mempertahankan wilayah dari upaya penjajahan kembali, termasuk Agresi Militer yang dilancarkan pihak Belanda. Di sisi lain, para pemimpin Indonesia menempuh jalur perundingan, antara lain melalui Perjanjian Linggarjati dan Perjanjian Renville, serta Konferensi Meja Bundar yang akhirnya menjadi jalan menuju pengakuan kedaulatan. Kedua jalur perjuangan ini, senjata dan diplomasi, berjalan beriringan dan saling menguatkan hingga kedaulatan Indonesia diakui.",
          "Periode ini mengajarkan nilai perjuangan yang sangat penting, yaitu pantang menyerah dan rela berkorban. Para pejuang tidak hanya berperang di medan tempur, tetapi juga berjuang di meja perundingan dengan kesabaran dan kecerdikan. Soal TWK sering mengaitkan peristiwa-peristiwa pada masa ini dengan nilai-nilai perjuangan, jadi pahami ceritanya, bukan sekadar nama perjanjiannya.",
        ],
      },
      {
        heading: "Sebelum 1908: Kerajaan, Prasasti, dan Masjid Kuno",
        body: [
          "Sejarah Indonesia tidak dimulai pada 1908. Jauh sebelum Budi Utomo berdiri, di Nusantara sudah ada kerajaan-kerajaan besar yang meninggalkan jejak tertulis. Yang paling awal adalah Kerajaan Kutai di Kalimantan Timur, yang rajanya bernama Mulawarman. Bukti keberadaannya adalah prasasti Yupa, yaitu tiang batu bertuliskan huruf Pallawa yang mencatat upacara keagamaan dan pemberian hadiah oleh Raja Mulawarman pada abad ke-4 Masehi. Prasasti Yupa adalah bukti tertulis tertua tentang adanya kerajaan di Indonesia.",
          "Setelah Kutai, muncul kerajaan-kerajaan Hindu-Buddha lain seperti Sriwijaya dan Majapahit, lalu datanglah Islam yang menyebar melalui perdagangan dan dakwah. Percampuran budaya Hindu-Buddha dan Islam tampak jelas pada bangunan-bangunan kuno. Masjid Agung Demak, misalnya, memiliki atap bertingkat yang disebut atap tumpang, yang bentuknya terpengaruh arsitektur Hindu-Jawa. Menara Kudus bahkan bentuknya menyerupai candi, dengan bata merah yang disusun seperti bangunan Hindu, padahal fungsinya adalah menara masjid.",
          "Dalam soal, topik ini sering muncul dalam bentuk pertanyaan tentang prasasti Yupa, tentang siapa raja yang mengeluarkannya, atau tentang bentuk percampuran budaya pada masjid kuno. Kuncinya adalah mengingat tiga hal: Yupa adalah prasasti Kerajaan Kutai dari Raja Mulawarman, masjid kuno menunjukkan percampuran Hindu-Buddha dan Islam, dan percampuran itu adalah bukti bahwa budaya Indonesia selalu terbuka dan menyerap pengaruh luar tanpa kehilangan jati dirinya.",
        ],
      },
      {
        heading: "Indonesia dan Dunia: ASEAN dan Gerakan Non-Blok",
        body: [
          "Indonesia tidak hanya berjuang di dalam negeri, tetapi juga aktif di dunia internasional. Pada 8 Agustus 1967, Indonesia bersama empat negara lain mendirikan ASEAN melalui Deklarasi Bangkok. Kelima penandatangannya adalah Adam Malik dari Indonesia, Tun Abdul Razak dari Malaysia, S. Rajaratnam dari Singapura, Thanat Khoman dari Thailand, dan Narciso Ramos dari Filipina. ASEAN didirikan untuk menjaga perdamaian dan kerja sama di Asia Tenggara, dan Indonesia menjadi salah satu pendirinya.",
          "Selain ASEAN, Indonesia juga menjadi pelopor Gerakan Non-Blok. Gerakan ini lahir dari Konferensi Asia-Afrika di Bandung pada 1955 dan diresmikan di Beograd pada 1961, dengan Soekarno sebagai salah satu tokoh pendirinya. Tujuannya adalah agar negara-negara yang baru merdeka tidak terjebak dalam persaingan dua blok besar saat Perang Dingin, melainkan bisa berdiri sendiri dan bekerja sama atas dasar kesetaraan. Meskipun Perang Dingin sudah berakhir, Gerakan Non-Blok tetap relevan karena kerja sama antar negara berkembang masih dibutuhkan.",
          "Setelah 1965, Indonesia juga menghadapi tugas berat memulihkan ekonominya, antara lain dengan merundingkan penjadwalan ulang utang luar negeri dengan negara-negara kreditor. Perundingan itu menjadi bagian dari upaya pemerintah Orde Baru menstabilkan ekonomi setelah masa pergolakan. Dalam soal, topik politik luar negeri ini sering muncul dalam bentuk pertanyaan tentang siapa penandatangan Deklarasi Bangkok, kapan ASEAN didirikan, atau mengapa Gerakan Non-Blok tetap relevan. Hafalkan nama lima penandatangan dan tahun berdirinya, lalu pahami alasan di balik berdirinya kedua organisasi itu.",
        ],
      },
      {
        heading: "Cara Belajar Sejarah untuk SKD",
        body: [
          "Belajar sejarah untuk SKD berbeda dengan belajar sejarah untuk ujian sekolah. Di SKD, yang diuji bukan sekadar hafalan nama peristiwa, melainkan pemahaman tentang tahun, tokoh, dan dampaknya. Misalnya, jangan hanya hafal bahwa Budi Utomo berdiri pada 1908, tetapi pahami juga siapa pendirinya, apa yang membuatnya istimewa, dan mengapa tanggal itu diperingati sebagai Hari Kebangkitan Nasional.",
          "Cara paling efektif adalah membuat garis waktu sederhana berisi peristiwa-peristiwa kunci: 1908 Budi Utomo, 1928 Sumpah Pemuda, 1945 BPUPKI dan Piagam Jakarta, 17 Agustus 1945 Proklamasi, dan 1945 sampai 1949 perjuangan mempertahankan kemerdekaan. Setelah garis waktunya jelas, tambahkan tokoh dan dampak pada tiap peristiwa, lalu latih dirimu menceritakan kembali alurnya dengan kata-katamu sendiri. Garis waktu seperti ini membuat peristiwa-peristiwa yang tadinya terasa terpisah menjadi satu cerita yang berkesinambungan dan mudah diingat.",
          "Terakhir, perhatikan bahwa soal sejarah sering dikaitkan dengan nilai perjuangan. Misalnya, soal bisa menceritakan sikap seorang tokoh, lalu bertanya nilai apa yang tercermin dari sikap itu, seperti rela berkorban, pantang menyerah, atau persatuan. Karena itu, setiap kali belajar satu peristiwa, tanyakan pada dirimu: nilai apa yang bisa dipetik dari peristiwa ini.",
        ],
      },
    ],
    sources: [
      "Budi Utomo, 20 Mei 1908 (Hari Kebangkitan Nasional)",
      "Sumpah Pemuda, 28 Oktober 1928",
      "Piagam Jakarta, 22 Juni 1945",
      "Proklamasi Kemerdekaan, 17 Agustus 1945",
      "Prasasti Yupa, Kerajaan Kutai, Raja Mulawarman (abad ke-4)",
      "Deklarasi Bangkok, 8 Agustus 1967 (pendirian ASEAN)",
      "Konferensi Asia-Afrika 1955 dan Gerakan Non-Blok",
    ],
  },
  "twk-bahasa-indonesia": {
    sections: [
      {
        heading: "Bahasa Indonesia sebagai Bahasa Persatuan",
        body: [
          "Bahasa Indonesia adalah bahasa persatuan bangsa Indonesia, dan kedudukannya itu diikrarkan dalam Sumpah Pemuda pada 28 Oktober 1928. Para pemuda yang berasal dari berbagai daerah sepakat menjunjung bahasa persatuan, yaitu bahasa Indonesia, sebagai jembatan antar suku. Tanpa bahasa persatuan, orang dari suku yang berbeda akan sulit berkomunikasi dan bekerja sama.",
          "Yang menarik, bahasa Indonesia tidak menggantikan bahasa daerah, melainkan hidup berdampingan dengannya. Seseorang boleh berbahasa daerah di rumah dan di kampung halamannya, tetapi ketika berkomunikasi dengan orang dari daerah lain, bahasa Indonesia menjadi bahasa bersama. Prinsip ini mencerminkan semangat Bhinneka Tunggal Ika, yaitu berbeda-beda tetapi tetap satu.",
          "Kedudukan bahasa Indonesia sebagai bahasa persatuan kemudian dikukuhkan dalam UUD 1945 sebagai bahasa negara. Artinya, bahasa Indonesia dipakai dalam pemerintahan, pendidikan, dan urusan resmi negara. Pemahaman tentang kedudukan ini sering diuji dalam soal, biasanya dengan mengaitkan bahasa Indonesia dengan Sumpah Pemuda.",
        ],
      },
      {
        heading: "Kata Baku dan Tidak Baku",
        body: [
          "Kata baku adalah kata yang penulisannya sesuai dengan kaidah bahasa Indonesia yang berlaku, sedangkan kata tidak baku adalah kata yang menyimpang dari kaidah itu. Kata baku dipakai dalam situasi resmi, seperti surat dinas, karya tulis, dan ujian, sedangkan kata tidak baku lebih sering muncul dalam percakapan santai sehari-hari. Perbedaan ini penting untuk dipahami, karena soal TWK selalu menanyakan bentuk bakunya, bukan bentuk yang biasa dipakai dalam percakapan.",
          "Beberapa contoh kata baku yang sering keluar dalam soal adalah apotek, bukan apotik; kualitas, bukan kwalitas; dan mengubah, bukan merubah. Kata-kata seperti ini tampak sepele, tetapi justru karena itulah ia sering diujikan, karena banyak orang yang sudah terbiasa dengan bentuk yang salah tanpa menyadarinya. Bila kamu menemukan kata yang penulisannya terasa janggal, besar kemungkinan kata itulah yang menjadi jawaban soal.",
          "Cara paling aman untuk menguasai kata baku adalah dengan membiasakan diri memeriksa Kamus Besar Bahasa Indonesia, atau KBBI, sebagai rujukan resmi. KBBI mencatat bentuk baku dari setiap kata, sehingga bila ragu, kamuslah yang menjadi penentunya. Latihlah dirimu dengan daftar kata baku yang sering keluar, dan perhatikan pola kesalahannya, misalnya huruf yang tertukar atau awalan yang keliru.",
        ],
      },
      {
        heading: "Huruf Kapital dan Tanda Baca",
        body: [
          "Selain kata baku, soal TWK juga sering menguji penggunaan huruf kapital dan tanda baca. Huruf kapital dipakai di awal kalimat, pada nama orang, nama tempat, nama hari, dan nama bulan, serta pada gelar dan jabatan yang diikuti nama orang. Kesalahan yang paling umum adalah memakai huruf kapital pada kata yang seharusnya huruf kecil, atau sebaliknya.",
          "Tanda baca yang paling sering diuji adalah koma dan titik. Koma dipakai untuk memisahkan unsur-unsur dalam kalimat, misalnya memisahkan anak kalimat dari induk kalimat, atau memisahkan rincian dalam daftar. Titik dipakai untuk mengakhiri kalimat berita. Kesalahan tanda baca bisa mengubah makna kalimat, sehingga soal sering meminta kamu menemukan letak kesalahan tanda bacanya.",
          "Kunci menghadapi soal ejaan adalah dengan membaca kalimat secara perlahan dan memeriksa tiap kata satu demi satu. Jangan terburu-buru memilih jawaban berdasarkan kesan pertama, karena soal ejaan memang dirancang untuk menguji ketelitian. Periksa huruf kapitalnya, periksa tanda bacanya, lalu periksa apakah ada kata yang tidak baku.",
        ],
      },
      {
        heading: "Kalimat Efektif: Hemat, Jelas, Tidak Bermakna Ganda",
        body: [
          "Kalimat efektif adalah kalimat yang menyampaikan pesan dengan hemat, jelas, dan tidak menimbulkan makna ganda. Kalimat seperti ini memiliki subjek dan predikat yang jelas, tidak ada kata yang mubazir, dan susunannya logis. Dalam penulisan resmi, kalimat efektif adalah standar yang harus dipenuhi.",
          "Syarat pertama kalimat efektif adalah hemat kata, yaitu tidak ada kata yang berlebihan. Misalnya, kata para sudah menunjukkan jamak, sehingga tidak perlu ditambah dengan kata sekalian yang maknanya juga jamak. Begitu pula kata untuk yang kadang bisa dihilangkan tanpa mengubah makna kalimat. Kata-kata yang tidak menambah makna sebaiknya dibuang.",
          "Syarat kedua adalah tidak bermakna ganda, yaitu kalimat hanya bisa ditafsirkan dengan satu cara. Kalimat yang susunannya rancu bisa dibaca dengan dua makna yang berbeda, dan itu membuatnya tidak efektif. Syarat ketiga adalah subjek dan predikatnya jelas, sehingga pembaca langsung tahu siapa yang melakukan apa dalam kalimat itu.",
        ],
      },
      {
        heading: "Kesalahan Umum dalam Kalimat",
        body: [
          "Ada beberapa kesalahan yang sangat sering muncul dalam soal kalimat efektif. Yang pertama adalah pemakaian kata yang mubazir, yaitu kata yang sebenarnya tidak diperlukan karena maknanya sudah terkandung dalam kata lain. Contohnya adalah pasangan kata yang maknanya bertumpuk, seperti para hadirin sekalian yang menggabungkan dua penanda jamak sekaligus.",
          "Kesalahan kedua adalah subjek dan predikat yang tidak jelas atau tidak sepadan. Misalnya, kalimat yang subjeknya orang tetapi predikatnya kata sifat, atau kalimat yang predikatnya tidak nyambung dengan subjeknya. Kalimat seperti ini terasa janggal dibaca, dan soal sering meminta kamu menemukan kejanggalan itu.",
          "Kesalahan ketiga adalah susunan kata yang rancu sehingga menimbulkan makna ganda. Misalnya, kalimat yang penempatan keterangannya salah, sehingga tidak jelas keterangan itu menerangkan bagian yang mana. Untuk menemukan kesalahan seperti ini, bacalah kalimat dengan suara pelan di dalam hati dan tanyakan: apakah kalimat ini hanya punya satu makna yang jelas.",
        ],
      },
      {
        heading: "Cara Soal Menguji Bahasa Indonesia",
        body: [
          "Soal Bahasa Indonesia di TWK biasanya keluar dalam dua bentuk. Bentuk pertama meminta kamu memilih kalimat yang paling efektif di antara beberapa pilihan. Bentuk kedua meminta kamu menemukan kesalahan ejaan, tanda baca, atau kata tidak baku dalam sebuah kalimat. Kedua bentuk ini sama-sama menguji ketelitian dan pemahaman kaidah.",
          "Strategi menjawabnya adalah dengan memeriksa tiap pilihan satu demi satu, bukan dengan mencari yang terasa paling benar secara sekilas. Periksa apakah ada kata yang mubazir, apakah subjek dan predikatnya jelas, dan apakah tanda bacanya tepat. Pilihan yang paling efektif biasanya adalah yang paling ringkas tanpa kehilangan makna.",
          "Latihan terbaik untuk materi ini adalah dengan mengerjakan soal-soal kalimat efektif secara rutin, lalu menganalisis mengapa jawaban yang benar dipilih dan mengapa pilihan lain salah. Dengan begitu, matamu akan terlatih mengenali pola kesalahan yang berulang, dan kecepatan menjawabmu akan meningkat tanpa harus menghafal rumus. Semakin sering kamu berlatih, semakin cepat matamu mengenali jawaban yang benar tanpa harus menganalisis setiap pilihan dari nol.",
        ],
      },
    ],
    sources: [
      "Sumpah Pemuda, 28 Oktober 1928 (bahasa Indonesia sebagai bahasa persatuan)",
      "Kamus Besar Bahasa Indonesia (KBBI) sebagai rujukan kata baku",
      "Pedoman ejaan resmi bahasa Indonesia (EYD)",
    ],
  },
};


/**
 * Materi bacaan panjang TIU — ditulis sendiri, bukan salinan ebook.
 * Mengembangkan keyPoints di lib/cpns/materials.ts menjadi prosa mengajar
 * dari nol: TIU adalah keterampilan, jadi bacaan ini mengajarkan CARA
 * mengerjakan soal, dengan contoh kecil yang dijelaskan langkah demi langkah.
 */
export const READING_TIU: Record<string, MaterialReading> = {
  "tiu-verbal": {
    sections: [
      {
        heading: "Analogi: Cari Hubungannya Dulu, Baru Cari Pasangannya",
        body: [
          "Analogi itu soal hubungan. Kamu diberi sepasang kata, lalu diminta mencari pasangan lain yang hubungannya sama. Kuncinya bukan menebak kata yang mirip, melainkan menemukan dulu hubungan apa yang menghubungkan pasangan pertama. Kalau hubungannya sudah ketemu, barulah cari opsi yang hubungannya sama persis. Banyak orang gagal di soal analogi bukan karena tidak tahu artinya, tetapi karena langsung melompat ke opsi tanpa merumuskan hubungannya.",
          "Ambil contoh yang paling terkenal: dokter berpasangan dengan pasien, dan kita diminta mencari pasangan untuk guru. Hubungan dokter dan pasien adalah 'dokter melayani atau mengobati pasien', dan hubungan yang sejajar untuk guru adalah 'guru mengajar murid'. Jadi dokter : pasien sama dengan guru : murid, karena keduanya adalah profesi dengan orang yang dilayaninya. Kalau kamu cuma mencari kata yang berhubungan dengan guru tanpa merumuskan hubungannya, kamu bisa tergoda memilih 'guru : sekolah', padahal sekolah adalah tempat, bukan orang yang dilayani.",
          "Latihan lain yang sering muncul: pilot : pesawat. Hubungannya adalah 'pilot mengendalikan pesawat', jadi pasangannya harus profesi yang mengendalikan alat transportasi besar. Nakhoda : kapal cocok, karena nakhoda mengendalikan kapal di laut seperti pilot mengendalikan pesawat di udara. Sopir : mobil memang mirip, tetapi mobil adalah kendaraan kecil di darat, sehingga sejajarnya kurang kuat dibanding nakhoda dan kapal. Di soal seperti ini, jawaban yang dipilih adalah yang hubungannya paling sejajar, bukan yang sekadar mirip.",
        ],
      },
      {
        heading: "Sinonim dan Antonim: Kosakata adalah Modal Utama",
        body: [
          "Sinonim adalah kata yang artinya sama atau hampir sama, sedangkan antonim adalah kata yang artinya berlawanan. Soal seperti ini tidak bisa dijawab dengan rumus, karena yang diuji adalah seberapa banyak kata yang kamu kenal. Kabar baiknya, kosakata bisa dilatih: setiap hari biasakan membaca satu artikel pendek, lalu catat dua atau tiga kata yang belum kamu kenal beserta artinya. Dalam sebulan, kamu sudah mengumpulkan puluhan kata baru tanpa merasa sedang menghafal.",
          "Cara belajar yang paling efektif adalah belajar kata berpasangan, bukan satu-satu. Kalau kamu belajar kata 'rajin', sekalian pelajari sinonimnya seperti 'tekun' dan 'gigih', serta antonimnya seperti 'malas' dan 'lalai'. Dengan begitu, satu kata yang kamu pelajari langsung membuka tiga atau empat kata lain, dan ingatanmu tentang kata itu menjadi lebih kuat karena ada jaringannya. Kata-kata yang sering muncul di soal biasanya kata yang umum dipakai dalam bahasa formal, jadi bacaan berita dan buku pelajaran adalah sumber latihan yang bagus.",
          "Hati-hati dengan jebakan kata yang mirip tetapi artinya berbeda jauh. Misalnya kata 'efektif' dan 'efisien' sering tertukar, padahal efektif berarti berhasil mencapai tujuan sedangkan efisien berarti hemat dalam memakai sumber daya. Begitu juga 'aktif' dan 'proaktif', yang sama-sama bergerak tetapi proaktif berarti bergerak sebelum diminta. Di soal sinonim dan antonim, beda satu nuansa saja bisa membuat jawabanmu salah, jadi biasakan membaca kata dengan teliti dan bertanya pada diri sendiri apa arti tepatnya sebelum memilih.",
        ],
      },
      {
        heading: "Pemahaman Bacaan: Baca Pertanyaannya Dulu",
        body: [
          "Soal pemahaman bacaan memberikan sebuah teks pendek, lalu menanyakan isi, gagasan utama, atau kesimpulan dari teks itu. Kesalahan paling umum adalah membaca seluruh teks pelan-pelan dari awal sampai akhir seperti sedang membaca novel, padahal waktu yang tersedia sangat terbatas. Cara yang lebih cepat adalah membaca pertanyaannya dulu, baru membaca teksnya dengan tujuan mencari jawaban. Dengan begitu, matamu tahu apa yang harus dicari begitu bertemu teksnya.",
          "Setelah tahu apa yang ditanyakan, bacalah teks sambil menandai kata kunci dari pertanyaan itu. Kalau pertanyaannya menanyakan alasan sesuatu, carilah kata-kata seperti 'karena', 'sebab', atau 'akibat' di dalam teks. Kalau pertanyaannya menanyakan gagasan utama, perhatikan kalimat pertama dan kalimat terakhir paragraf, karena gagasan utama biasanya tersimpan di salah satu dari keduanya. Jangan terpaku pada detail kecil seperti angka atau nama, kecuali pertanyaan memang menanyakannya.",
          "Jebakan yang paling sering muncul adalah opsi yang memakai kata-kata dari teks tetapi maknanya dibelokkan sedikit. Opsi seperti ini terasa benar karena kata-katanya familiar, padahal isinya tidak sesuai dengan yang dikatakan teks. Karena itu, setelah memilih jawaban, sempatkan untuk mencocokkannya kembali dengan kalimat di teks: apakah teks benar-benar mengatakan itu, atau hanya mirip? Kalau teksnya tidak mendukung, opsi itu harus dibuang meskipun bunyinya meyakinkan.",
        ],
      },
      {
        heading: "Silogisme: Logika Jika Semua A adalah B",
        body: [
          "Silogisme adalah soal logika yang memberikan dua pernyataan, lalu menanyakan kesimpulan apa yang pasti benar dari keduanya. Bentuk yang paling dasar adalah seperti ini: semua A adalah B, dan semua B adalah C, maka semua A adalah C. Contohnya, semua kucing adalah hewan, dan semua hewan bernapas, maka semua kucing bernapas. Logikanya sederhana, tetapi soal ujian sering menyamarkannya dengan kata-kata yang panjang sehingga kamu harus membongkarnya dulu menjadi bentuk A, B, dan C.",
          "Cara paling mudah membayangkan silogisme adalah dengan lingkaran di dalam lingkaran. Bayangkan lingkaran A berada di dalam lingkaran B, dan lingkaran B berada di dalam lingkaran C, maka lingkaran A pasti berada di dalam lingkaran C. Gambaran ini membantu ketika soalnya memakai kalimat yang membingungkan, seperti 'semua siswa yang rajin lulus ujian' dan 'semua yang lulus ujian mendapat beasiswa'. Dari dua kalimat itu, kesimpulan yang pasti adalah 'semua siswa yang rajin mendapat beasiswa', karena rantai logikanya tidak terputus.",
          "Hati-hati dengan kesimpulan yang terdengar masuk akal tetapi tidak dijamin oleh pernyataannya. Misalnya dari 'semua dokter memakai jas putih' tidak bisa disimpulkan 'semua yang memakai jas putih adalah dokter', karena arah logikanya hanya satu arah. Kesalahan seperti ini disebut membalik logika, dan soal silogisme sengaja memasang opsi seperti itu untuk menjebak. Karena itu, sebelum memilih jawaban, tanyakan pada diri sendiri: apakah kesimpulan ini benar-benar mengikuti pernyataan, atau hanya kebetulan masuk akal?",
        ],
      },
      {
        heading: "Jebakan yang Sering Muncul di Soal Verbal",
        body: [
          "Soal verbal tidak hanya menguji pengetahuan, tetapi juga ketelitianmu membaca. Jebakan yang paling sering muncul adalah hubungan yang terbalik: pasangan kata yang hubungannya dibalik, misalnya sebab ditulis sebagai akibat atau sebaliknya. Kalau pasangan pertama adalah 'api : panas' yang berarti api menyebabkan panas, maka pasangan yang benar harus mengikuti arah yang sama, bukan 'panas : api'. Membaca arah hubungan dengan teliti adalah separuh dari pekerjaan.",
          "Jebakan kedua adalah opsi yang nyaris benar. Opsi ini biasanya punya hubungan yang mirip dengan yang diminta, tetapi ada satu detail kecil yang tidak cocok, misalnya profesinya benar tetapi alatnya salah, atau hubungannya benar tetapi tingkatannya berbeda. Cara menghadapinya adalah membandingkan setiap opsi dengan hubungan yang sudah kamu rumuskan di awal, kata demi kata, dan membuang opsi yang melanggar satu saja unsur dari hubungan itu. Jangan memilih opsi hanya karena terasa paling familiar.",
          "Jebakan ketiga adalah kata yang kamu tidak tahu artinya. Ketika bertemu kata asing di soal, jangan langsung panik dan menebak asal. Perhatikan kata-kata di sekitarnya, karena konteks sering memberi petunjuk tentang artinya, misalnya kata itu dipasangkan dengan kata yang kamu kenal atau dijelaskan dalam kalimat yang sama. Kalau tetap tidak tahu, gunakan strategi eliminasi: buang opsi yang jelas-jelas salah, lalu pilih dari sisa yang ada. Menebak dari dua opsi yang tersisa jauh lebih baik daripada menebak dari lima.",
        ],
      },
      {
        heading: "Kosakata Sulit yang Sering Keluar",
        body: [
          "Soal sinonim dan antonim di tingkat HOTS memakai kata-kata yang jarang muncul dalam percakapan sehari-hari, dan kata-kata itulah yang paling sering membuat peserta gugur. Berikut adalah kata-kata yang wajib kamu hafal beserta artinya, karena semuanya sudah terbukti keluar dalam soal. Primordial berarti asli atau yang berhubungan dengan awal mula, sinonimnya primitif. Taksa berarti tidak jelas atau samar, sinonimnya kabur dan ambigu. Kuosien berarti hasil bagi, yaitu hasil dari pembagian. Egaliter berarti menganut kesetaraan, sinonimnya setara dan sama rata.",
          "Obsolet berarti ketinggalan zaman atau sudah tidak berlaku lagi, sinonimnya usang dan kuno. Reformasi berarti perbaikan atau pembaruan, sinonimnya pembaruan. Pailit berarti bangkrut, antonimnya makmur dan sejahtera. Resesi berarti kemerosotan ekonomi, antonimnya kemakmuran dan pertumbuhan. Picik berarti sempit pandangan dan tidak luas pikirannya, antonimnya lapang dan bijaksana. Natalitas berarti angka kelahiran, antonimnya mortalitas yang berarti angka kematian. Optimis berarti berpengharapan baik dan yakin, antonimnya pesimis. Bakhil berarti kikir dan pelit, antonimnya dermawan dan murah hati.",
          "Cara menghafal kata-kata ini adalah dengan membuat kartu kecil berisi kata dan artinya, lalu mengulanginya setiap hari selama seminggu. Jangan hanya menghafal artinya, tetapi hafalkan juga sinonim dan antonimnya, karena soal bisa menanyakan dari arah mana saja. Misalnya, kalau kamu hafal bahwa pailit berarti bangkrut, kamu juga harus tahu bahwa antonimnya adalah makmur. Satu kata yang dihafal dengan pasangan sinonim dan antonimnya memberi kamu tiga jawaban sekaligus dalam ujian.",
        ],
      },
      {
        heading: "Jenis Hubungan Analogi",
        body: [
          "Analogi yang sulit bukan karena kata-katanya asing, melainkan karena hubungannya tidak langsung terlihat. Ada beberapa jenis hubungan yang sering dipakai dalam soal HOTS dan wajib kamu kenali polanya. Hubungan alat ukur: gempa diukur dengan richter, jadi pasangannya adalah sesuatu yang diukur dengan alatnya, misalnya suhu dengan termometer atau berat dengan timbangan. Hubungan ilmu: kardiologi adalah ilmu tentang jantung, jadi pasangannya adalah ilmu dengan objek yang dipelajarinya, misalnya geologi dengan bumi atau botani dengan tumbuhan.",
          "Hubungan bagian: bawang terdiri dari siung, jadi pasangannya adalah benda dengan bagiannya, misalnya buku dengan halaman atau rumah dengan pintu. Hubungan hasil: susu dihasilkan oleh sapi, jadi pasangannya adalah produk dengan sumbernya, misalnya madu dengan lebah atau telur dengan ayam. Hubungan alat dan bahan: gergaji dipakai untuk memotong kayu, jadi pasangannya adalah alat dengan bahan yang dikerjakannya, misalnya palu dengan paku atau gunting dengan kain. Hubungan kategori: baju adalah salah satu jenis pakaian, jadi pasangannya adalah anggota dengan kelompoknya, misalnya beras adalah salah satu jenis makanan pokok.",
          "Cara memakai pola ini adalah dengan merumuskan hubungan pasangan pertama dalam satu kalimat pendek, lalu menguji tiap opsi dengan kalimat yang sama. Misalnya pasangan pertama adalah gempa dan richter, dan kalimatnya adalah 'richter adalah alat untuk mengukur gempa'. Kalau opsi adalah 'suhu dan termometer', kalimatnya menjadi 'termometer adalah alat untuk mengukur suhu', dan itu cocok. Kalau opsi adalah 'panas dan api', kalimatnya menjadi 'api adalah alat untuk mengukur panas', dan itu tidak cocok. Rumuskan kalimatnya dulu, baru uji opsinya, dan kamu tidak akan lagi menebak secara acak.",
        ],
      },
      {
        heading: "Berlatih Verbal dengan Timer",
        body: [
          "Kemampuan verbal tumbuh dari latihan yang rutin, bukan dari membaca teori sekali lalu selesai. Sisihkan waktu lima belas sampai dua puluh menit setiap hari untuk mengerjakan sepuluh soal verbal, lalu periksa jawabanmu dan pahami kenapa jawaban yang benar itu benar. Latihan yang sedikit tetapi rutin jauh lebih efektif daripada latihan seratus soal sekaligus lalu tidak berlatih lagi selama seminggu, karena otakmu butuh pengulangan untuk menyimpan pola.",
          "Latihlah dengan timer, karena di ujian nanti waktu adalah bagian dari soalnya. Mulailah dengan target yang longgar, misalnya dua menit per soal, lalu perlahan turunkan menjadi satu menit per soal. Kalau ada soal yang memakan waktu lebih dari dua menit, lewati dulu dan kerjakan soal lain, karena satu soal yang macet bisa memakan waktu tiga soal lain yang sebenarnya bisa kamu jawab. Soal yang dilewati bisa dikerjakan lagi di akhir kalau waktu masih tersisa.",
          "Setelah selesai berlatih, jangan hanya menghitung skor, tetapi catat jenis soal apa yang paling sering kamu salah. Kalau analogi yang paling sering salah, perbanyak latihan analogi di hari berikutnya; kalau sinonim yang lemah, tambah daftar kosakatamu. Catatan kesalahan ini adalah peta belajarmu: ia menunjukkan dengan tepat bagian mana yang harus diperbaiki, sehingga latihanmu tidak lagi asal-asalan.",
        ],
      },
    ],
    sources: [
      "Pola soal TIU SKD CPNS",
      "Kaidah penalaran silogisme",
      "Kamus Besar Bahasa Indonesia (KBBI)",
    ],
  },
  "tiu-numerik": {
    sections: [
      {
        heading: "Deret Angka: Mulai dari Selisih",
        body: [
          "Deret angka adalah barisan bilangan yang mengikuti pola tertentu, dan tugasmu adalah menemukan bilangan berikutnya. Langkah pertama yang selalu dilakukan adalah menghitung selisih antara bilangan yang berurutan. Kalau selisihnya tetap, polanya adalah tambah atau kurang dengan bilangan yang sama, dan soal selesai dalam sekejap. Kalau selisihnya berubah, jangan panik, karena perubahan selisih itu sendiri sering mengikuti pola.",
          "Ambil contoh deret 3, 6, 11, 18, 27. Selisihnya adalah 3, 5, 7, dan 9, dan selisih itu bertambah 2 setiap langkah. Karena polanya jelas, selisih berikutnya adalah 11, sehingga bilangan berikutnya adalah 27 tambah 11, yaitu 38. Perhatikan caranya: kita tidak menebak bilangan berikutnya secara langsung, melainkan menemukan pola selisihnya dulu, lalu memakai pola itu untuk melangkah satu kali lagi. Cara berpikir dua lapis seperti ini adalah inti dari hampir semua soal deret.",
          "Kalau selisih tidak membentuk pola, langkah kedua adalah memeriksa rasio, yaitu perkalian atau pembagian antar bilangan, misalnya tiap bilangan dikali dua atau dibagi dua. Kalau rasio juga tidak cocok, langkah ketiga adalah memeriksa pola loncat, yaitu memisahkan suku ganjil dan suku genap menjadi dua deret sendiri. Misalnya dalam deret 2, 5, 4, 10, 8, 20, suku ganjilnya adalah 2, 4, 8 yang dikali dua setiap langkah, sedangkan suku genapnya adalah 5, 10, 20 yang juga dikali dua. Urutan memeriksa ini, selisih dulu, lalu rasio, lalu pola loncat, membuatmu tidak lagi menebak secara acak.",
        ],
      },
      {
        heading: "Deret Huruf: Ubah Huruf Menjadi Angka",
        body: [
          "Deret huruf bekerja dengan cara yang sama seperti deret angka, hanya saja yang dipakai adalah huruf. Triknya adalah mengubah setiap huruf menjadi nomor urutnya dalam alfabet: A sama dengan 1, B sama dengan 2, C sama dengan 3, dan seterusnya sampai Z sama dengan 26. Setelah diubah menjadi angka, carilah polanya persis seperti mencari pola deret angka, yaitu dengan selisih, rasio, atau pola loncat.",
          "Contohnya deret A, C, F, J, O. Setelah diubah menjadi angka, deret itu menjadi 1, 3, 6, 10, 15. Selisihnya adalah 2, 3, 4, dan 5, dan selisih itu bertambah satu setiap langkah. Selisih berikutnya adalah 6, sehingga angka berikutnya adalah 21, dan huruf ke-21 adalah U. Tanpa mengubah huruf menjadi angka, pola ini sulit dilihat, tetapi setelah diubah, polanya menjadi jelas seperti deret angka biasa.",
          "Ada juga deret huruf yang polanya adalah melompat dengan jarak tetap, misalnya A, D, G, J yang setiap langkahnya maju tiga huruf. Untuk soal seperti ini, hafalkan posisi huruf yang menjadi patokan, misalnya A sama dengan 1, E sama dengan 5, J sama dengan 10, O sama dengan 15, dan T sama dengan 20. Patokan ini membuatmu tidak perlu menghitung dari awal setiap kali, dan mengurangi risiko salah hitung ketika hurufnya sudah jauh di akhir alfabet. Kalau deretnya menurun, misalnya Z, X, V, maka arahnya mundur dan selisihnya negatif, tetapi caranya tetap sama.",
        ],
      },
      {
        heading: "Persen Cepat Tanpa Kalkulator",
        body: [
          "Persen adalah cara lain menulis pecahan per seratus, dan banyak soal CPNS menanyakan persen dari suatu bilangan. Kunci kecepatan adalah menguasai beberapa persen dasar dan menggabungkannya. Sepuluh persen dari suatu bilangan didapat dengan membagi bilangan itu dengan sepuluh, jadi sepuluh persen dari 450 adalah 45. Lima persen adalah setengah dari sepuluh persen, jadi lima persen dari 450 adalah 22,5. Dua puluh lima persen adalah seperempat, jadi cukup membagi bilangan dengan empat.",
          "Dengan persen dasar itu, persen lain bisa dirakit dengan penjumlahan. Dua puluh persen dari 450 adalah sepuluh persen dikali dua, yaitu 90. Lima belas persen adalah sepuluh persen ditambah lima persen, yaitu 45 ditambah 22,5, hasilnya 67,5. Tujuh puluh lima persen adalah tiga kali dua puluh lima persen, atau seratus persen dikurangi dua puluh lima persen, jadi 450 dikurangi 112,5, hasilnya 337,5. Cara merakit ini jauh lebih cepat daripada mengalikan persen dengan bilangan lalu membagi seratus.",
          "Soal persen sering dibungkus dalam cerita diskon atau kenaikan harga, dan jebakan yang paling umum adalah salah menentukan bilangan acuannya. Misalnya harga barang 200 ribu didiskon 20 persen, lalu harganya naik lagi 20 persen, banyak orang mengira harganya kembali ke 200 ribu. Padahal setelah diskon harganya menjadi 160 ribu, dan naik 20 persen dari 160 ribu adalah 32 ribu, sehingga harga akhirnya 192 ribu, bukan 200 ribu. Kenaikan persen selalu dihitung dari harga yang sedang berlaku, bukan dari harga semula, dan memahami hal ini menyelamatkanmu dari jebakan yang paling sering muncul.",
        ],
      },
      {
        heading: "Perbandingan dan Skala: Samakan Satuan Dulu",
        body: [
          "Soal perbandingan menanyakan hubungan antara dua besaran, misalnya perbandingan uang Andi dan Budi adalah 3 berbanding 5, dan jumlah uang mereka adalah 160 ribu. Cara menyelesaikannya adalah menjumlahkan bagian perbandingannya, yaitu 3 tambah 5 sama dengan 8, lalu membagi jumlah uang dengan 8 untuk mendapat nilai satu bagian, yaitu 20 ribu. Uang Andi adalah 3 bagian, yaitu 60 ribu, dan uang Budi adalah 5 bagian, yaitu 100 ribu. Kuncinya adalah jangan langsung membagi jumlah uang dengan salah satu angka perbandingan tanpa menjumlahkan bagiannya dulu.",
          "Jebakan yang paling sering muncul di soal perbandingan adalah satuan yang berbeda. Misalnya jarak pada peta 4 cm mewakili jarak sebenarnya 8 km, dan kamu diminta mencari skala petanya. Kalau kamu langsung membagi 8 dengan 4, hasilnya salah, karena satuannya berbeda. Samakan dulu satuannya: 8 km sama dengan 800.000 cm, sehingga skalanya adalah 4 berbanding 800.000, atau 1 berbanding 200.000. Aturan yang harus diingat adalah samakan satuan dulu, baru hitung, karena hampir semua kesalahan di soal skala berasal dari langkah ini.",
          "Soal skala juga sering muncul dalam bentuk peta atau denah, misalnya jarak dua kota pada peta 5 cm dengan skala 1 berbanding 500.000. Jarak sebenarnya adalah 5 dikali 500.000, yaitu 2.500.000 cm, atau 25 km setelah diubah satuannya. Perhatikan arahnya: dari peta ke sebenarnya dikali skala, dari sebenarnya ke peta dibagi skala. Kalau arahnya tertukar, jawabanmu meleset jauh, jadi sebelum menghitung, tuliskan dulu apa yang diketahui dan apa yang ditanya, lalu tentukan arah hitungnya.",
        ],
      },
      {
        heading: "Soal Cerita: Tulis Dulu, Hitung Belakangan",
        body: [
          "Soal cerita adalah soal hitungan yang dibungkus dalam kisah sehari-hari, misalnya tentang kecepatan kendaraan, jumlah pekerja, atau harga barang. Kesalahan paling umum adalah langsung menghitung di kepala begitu selesai membaca, padahal yang diketahui dan yang ditanya belum jelas. Cara yang benar adalah menulis dulu di kertas: apa saja yang diketahui, dan apa yang ditanyakan. Tulisan singkat ini memaksa otakmu memisahkan informasi yang penting dari yang hanya hiasan cerita.",
          "Contohnya sebuah mobil menempuh jarak 180 km dalam waktu 3 jam, dan ditanyakan kecepatannya. Yang diketahui adalah jarak 180 km dan waktu 3 jam, yang ditanya adalah kecepatan. Kecepatan adalah jarak dibagi waktu, jadi 180 dibagi 3 sama dengan 60 km per jam. Contoh ini terlihat mudah, tetapi ketika ceritanya lebih panjang, misalnya ada dua mobil yang berangkat dari arah berlawanan, tulisan tentang yang diketahui dan yang ditanya inilah yang menyelamatkanmu dari kebingungan. Jangan malu menulis, karena kertas coretan itu bagian dari cara kerja, bukan tanda tidak bisa.",
          "Soal cerita juga sering menyembunyikan operasi hitungnya dalam kata-kata: kata 'selisih' berarti pengurangan, 'jumlah' berarti penjumlahan, 'tiap' atau 'per' biasanya berarti pembagian, dan 'kali' berarti perkalian. Biasakan menerjemahkan kata-kata itu menjadi operasi sebelum menghitung, karena salah menerjemahkan satu kata saja sudah cukup untuk membuat jawabanmu salah. Setelah mendapat jawaban, periksa kembali dengan akal sehat: apakah jawabannya masuk akal dengan cerita soalnya? Kalau sebuah mobil melaju 600 km per jam, jelas ada yang salah dalam hitunganmu.",
        ],
      },
      {
        heading: "Deret Tingkat Lanjut: Kuadrat, Loncat, dan Dua Operasi",
        body: [
          "Deret tingkat lanjut memakai pola yang tidak terlihat dari selisih biasa, dan karena itu ia menjadi pembeda antara peserta biasa dan peserta yang siap. Pola pertama adalah deret kuadrat, yaitu bilangan yang merupakan hasil kuadrat dari bilangan lain. Contohnya deret 225, 196, 169: kalau kamu mengenali bahwa 225 adalah 15 kuadrat, 196 adalah 14 kuadrat, dan 169 adalah 13 kuadrat, maka polanya jelas, yaitu bilangan dasarnya berkurang satu setiap langkah, sehingga bilangan berikutnya adalah 12 kuadrat, yaitu 144. Hafalkan kuadrat 1 sampai 20, karena deret kuadrat hampir selalu memakai bilangan dalam rentang itu.",
          "Pola kedua adalah deret loncat dua lapis, yaitu dua deret yang diseling menjadi satu. Contohnya deret 16, 480, 36, 240, 56, 120: suku pada posisi ganjil adalah 16, 36, 56 yang bertambah 20 setiap langkah, sedangkan suku pada posisi genap adalah 480, 240, 120 yang dibagi dua setiap langkah. Cara menemukannya adalah dengan memisahkan suku ganjil dan suku genap, lalu mencari pola masing-masing. Kalau sebuah deret terasa kacau dan tidak berpola, cobalah pisahkan suku ganjil dan genapnya, karena kemungkinan besar ada dua pola yang berjalan bersamaan.",
          "Pola ketiga adalah deret dua operasi, yaitu deret yang setiap langkahnya memakai dua operasi sekaligus. Contohnya deret 5, 13, 15, 26, 45, 52: dari 5 ke 13 ditambah 8, dari 13 ke 15 ditambah 2, dari 15 ke 26 ditambah 11, dari 26 ke 45 ditambah 19, dan dari 45 ke 52 ditambah 7. Kalau diperhatikan, pertambahannya mengikuti pola yang bergantian, dan menemukan pola pertambahannya adalah kunci. Untuk deret seperti ini, tuliskan selisihnya di kertas, lalu carilah pola pada selisih itu, karena jawaban sering tersembunyi di lapis kedua.",
        ],
      },
      {
        heading: "Diagram Venn dan Himpunan",
        body: [
          "Diagram Venn adalah gambar dua lingkaran yang beririsan, dan ia adalah alat paling ampuh untuk soal himpunan. Bayangkan ada dua kelompok, misalnya balita yang diberi vaksin campak dan balita yang diberi vaksin polio. Lingkaran pertama berisi semua balita yang diberi vaksin campak, lingkaran kedua berisi semua balita yang diberi vaksin polio, dan bagian yang beririsan berisi balita yang diberi kedua vaksin itu. Yang tidak masuk kedua lingkaran adalah balita yang tidak diberi vaksin apa pun.",
          "Contoh soalnya seperti ini: dari 30 balita, 6 balita pernah diberi vaksin campak dan polio, 3 balita belum pernah diberi vaksin kedua penyakit itu, dan banyak balita yang diberi vaksin campak adalah dua kali lipat dari yang diberi vaksin polio. Berapa balita yang diberi vaksin campak? Cara menyelesaikannya adalah dengan memisalkan jumlah balita yang diberi vaksin polio adalah x, maka yang diberi vaksin campak adalah 2x. Balita yang hanya diberi vaksin campak adalah 2x dikurangi 6, balita yang hanya diberi vaksin polio adalah x dikurangi 6, dan ketiganya ditambah yang tidak diberi vaksin harus sama dengan 30. Persamaannya menjadi (2x dikurangi 6) ditambah (x dikurangi 6) ditambah 6 ditambah 3 sama dengan 30, sehingga 3x sama dengan 33, x sama dengan 11, dan balita yang diberi vaksin campak adalah 2 dikali 11, yaitu 22.",
          "Kunci mengerjakan soal Venn adalah selalu menuliskan dulu apa yang diketahui: totalnya berapa, irisannya berapa, yang tidak masuk berapa, lalu memisalkan yang belum diketahui dengan huruf. Jangan mencoba menghitung di kepala, karena soal Venn sengaja dibuat dengan angka yang mengecoh. Gambar lingkarannya di kertas coretan, isi tiap bagiannya satu per satu, dan periksa kembali apakah jumlah semua bagian sama dengan totalnya. Kalau jumlahnya tidak sama, ada yang salah hitung, dan lebih baik mengulang dari awal daripada memaksakan jawaban.",
        ],
      },
      {
        heading: "Soal Cerita Multi-Langkah: Dagang dan Pekerjaan",
        body: [
          "Soal cerita multi-langkah adalah soal yang tidak selesai dalam satu hitungan, melainkan butuh dua atau tiga langkah berurutan. Jenis yang paling sering keluar adalah soal jual beli. Sebelum menghitung, hafalkan dulu satuan dagangnya: satu lusin sama dengan 12 buah, satu kodi sama dengan 20 buah, dan satu gross sama dengan 144 buah atau 12 lusin. Misalnya koperasi membeli 5 lusin pulpen dengan harga 18 ribu per lusin, maka jumlah pulpennya adalah 60 buah dan modalnya 90 ribu. Kalau koperasi ingin untung 36 ribu, maka total harga jualnya harus 126 ribu, dan harga jual per pulpen adalah 126 ribu dibagi 60, yaitu 2.100 rupiah. Langkahnya adalah samakan satuan dulu, hitung modal, tambah keuntungan, baru bagi ke harga satuan.",
          "Jenis kedua adalah soal pekerjaan dengan gangguan di tengah jalan. Contohnya, sebuah proyek harus selesai dalam 30 hari dengan 15 pekerja, tetapi setelah 6 hari pelaksanaan proyek dihentikan sementara. Untuk menyelesaikan soal seperti ini, hitung dulu berapa pekerjaan yang sudah selesai dalam 6 hari, lalu berapa sisa pekerjaan dan sisa waktunya, dan terakhir berapa pekerja yang dibutuhkan untuk menyelesaikan sisa itu dalam waktu yang tersisa. Kuncinya adalah memisahkan pekerjaan menjadi 'yang sudah selesai' dan 'yang masih tersisa', lalu menghitung masing-masing dengan rumus yang sama: jumlah pekerjaan sama dengan jumlah pekerja dikali waktu.",
          "Jenis ketiga adalah soal kecepatan yang melibatkan dua kendaraan atau dua cara berpergian. Misalnya jarak 120 km ditempuh mobil dalam 2 jam, sedangkan jarak 100 meter ditempuh jalan kaki dalam waktu tertentu. Untuk soal seperti ini, samakan dulu satuannya, misalnya ubah kilometer menjadi meter atau sebaliknya, lalu hitung kecepatan masing-masing dengan rumus jarak dibagi waktu. Kesalahan yang paling umum adalah langsung membandingkan angka tanpa menyamakan satuan, sehingga jawabannya meleset jauh. Tulis yang diketahui, samakan satuan, baru hitung.",
        ],
      },
      {
        heading: "Berlatih Numerik dengan Timer",
        body: [
          "Numerik adalah bagian yang paling membutuhkan kecepatan, dan kecepatan hanya tumbuh dari latihan yang diukur waktunya. Berlatihlah dengan timer sejak awal, misalnya dua puluh soal dalam tiga puluh menit, lalu periksa berapa soal yang benar dan berapa yang salah karena kehabisan waktu. Latihan dengan timer melatih dua hal sekaligus: kecepatan hitungmu dan keberanianmu melewati soal yang macet. Tanpa timer, kamu tidak akan tahu apakah caramu sudah cukup cepat untuk ujian yang sebenarnya.",
          "Saat berlatih, biasakan memakai strategi eliminasi. Di soal pilihan ganda, jawaban yang salah sering kali terlihat dari jauh: angka yang terlalu besar, terlalu kecil, atau tidak masuk akal dengan cerita soalnya. Buang dulu opsi yang jelas salah, sehingga pilihanmu menyempit dari lima menjadi dua atau tiga. Menebak di antara dua opsi yang tersisa memberi peluang jauh lebih besar daripada menebak dari lima opsi, dan strategi ini bisa menyelamatkan beberapa soal yang sebenarnya tidak sempat kamu hitung sampai selesai.",
          "Setelah latihan, luangkan waktu untuk memeriksa kesalahanmu satu per satu dan menuliskan pola kesalahannya. Kalau deret angka yang paling sering salah, latih deret angka lebih banyak besok; kalau soal cerita yang paling sering salah, latih cara menulis yang diketahui dan yang ditanya. Jangan mengulang latihan yang sama tanpa memeriksa kesalahan, karena latihan tanpa evaluasi hanya mengulang cara yang salah. Kecepatan yang benar lahir dari cara yang benar yang diulang sampai menjadi kebiasaan.",
        ],
      },
    ],
    sources: [
      "Pola soal TIU SKD CPNS",
      "Aritmetika dasar: persen, perbandingan, dan skala",
      "Pola deret angka dan huruf dalam tes kemampuan dasar",
    ],
  },
  "tiu-figural": {
    sections: [
      {
        heading: "Rotasi: Bayangkan Gambarnya Berputar",
        body: [
          "Soal rotasi meminta kamu membayangkan sebuah gambar diputar sebesar 90 derajat, 180 derajat, atau 270 derajat, lalu memilih hasil putarannya. Kuncinya adalah memperhatikan elemen kecil di dalam gambar, bukan hanya bentuk besarnya. Bentuk besar seperti segitiga atau lingkaran sering terlihat sama setelah diputar, tetapi posisi elemen kecil di dalamnya, misalnya sebuah titik atau garis pendek, akan berubah, dan perubahan itulah yang membedakan jawaban yang benar dari yang salah.",
          "Ambil contoh sebuah segitiga yang menghadap ke atas, dan di dalamnya ada satu titik di sudut kiri bawah. Kalau gambar ini diputar 180 derajat, segitiganya menghadap ke bawah, dan titiknya berpindah ke sudut kanan atas, karena putaran 180 derajat membalik atas-bawah sekaligus kiri-kanan. Cara mudah mengingatnya adalah membayangkan gambar itu dibalik seperti membalik selembar kertas: apa yang tadinya di kiri bawah akan berada di kanan atas. Kalau putarannya hanya 90 derajat, gambarnya akan miring ke samping, dan titiknya berpindah ke sudut yang bersebelahan, bukan yang berlawanan.",
          "Untuk melatih rotasi, biasakan menggerakkan jarimu di udara mengikuti arah putaran, searah jarum jam atau berlawanan arah jarum jam, sesuai yang diminta soal. Gerakan tangan ini membantu otak membayangkan putarannya, terutama ketika gambarnya rumit. Perhatikan juga arah putarannya: soal sering tidak menyebutkan arah secara eksplisit, dan jawabannya bisa berbeda antara putaran searah dan berlawanan arah jarum jam. Kalau arah tidak disebutkan, periksa kedua kemungkinan dan lihat mana yang cocok dengan opsi yang tersedia.",
        ],
      },
      {
        heading: "Pencerminan: Cermin Vertikal dan Cermin Horizontal",
        body: [
          "Pencerminan adalah membayangkan gambar dilihat di cermin, dan hasilnya berbeda tergantung posisi cerminnya. Cermin vertikal adalah cermin yang berdiri tegak di samping gambar, dan hasilnya adalah kiri dan kanan bertukar tempat, sedangkan atas dan bawah tetap. Cermin horizontal adalah cermin yang terletak di bawah atau di atas gambar, dan hasilnya adalah atas dan bawah bertukar tempat, sedangkan kiri dan kanan tetap. Menghafal perbedaan ini adalah langkah pertama, karena soal pencerminan sering menguji apakah kamu tertukar antara keduanya.",
          "Contohnya sebuah panah yang menunjuk ke kanan dengan satu titik di sisi atasnya. Kalau dicerminkan dengan cermin vertikal, panahnya menunjuk ke kiri, tetapi titiknya tetap di sisi atas. Kalau dicerminkan dengan cermin horizontal, panahnya tetap menunjuk ke kanan, tetapi titiknya berpindah ke sisi bawah. Perhatikan bahwa dalam pencerminan, hanya satu sumbu yang berubah, berbeda dengan rotasi 180 derajat yang mengubah keduanya sekaligus. Karena itu, pencerminan dan rotasi 180 derajat tidak menghasilkan gambar yang sama, dan soal sering memasang keduanya sebagai opsi untuk menguji ketelitianmu.",
          "Cara paling mudah membayangkan pencerminan adalah menempelkan telapak tanganmu di atas meja seolah-olah itu cermin, lalu membayangkan bayangan gambar di baliknya. Untuk cermin vertikal, bayangkan cermin berdiri di samping kanan gambar: apa yang dekat dengan cermin akan tetap dekat, dan apa yang jauh akan tetap jauh, hanya kiri-kanannya bertukar. Latihlah dengan gambar sederhana dulu, misalnya huruf atau angka, karena huruf seperti B dan D akan langsung menunjukkan apakah bayanganmu sudah benar.",
        ],
      },
      {
        heading: "Pola Berurutan: Apa yang Berubah di Tiap Gambar",
        body: [
          "Soal pola berurutan menampilkan tiga atau empat gambar yang berubah sedikit demi sedikit, dan kamu diminta menemukan gambar berikutnya. Yang harus dicari adalah apa yang berubah di setiap langkah: apakah ada elemen yang bertambah, berkurang, atau berpindah posisi. Biasanya hanya satu hal yang berubah dalam satu waktu, jadi kalau kamu menemukan perubahan itu, gambar berikutnya sudah bisa ditebak. Mulailah dengan menghitung jumlah elemen di tiap gambar, karena perubahan jumlah adalah pola yang paling mudah dilihat.",
          "Contohnya sebuah kotak yang di dalamnya ada satu titik pada gambar pertama, dua titik pada gambar kedua, dan tiga titik pada gambar ketiga. Polanya jelas: jumlah titik bertambah satu setiap langkah, sehingga gambar berikutnya harus berisi empat titik. Contoh lain adalah sebuah panah yang setiap langkah berputar 90 derajat searah jarum jam: gambar pertama menghadap ke atas, gambar kedua menghadap ke kanan, gambar ketiga menghadap ke bawah, sehingga gambar berikutnya harus menghadap ke kiri. Dalam kedua contoh ini, kuncinya adalah menemukan perubahan yang terjadi di antara dua gambar yang berurutan, bukan membandingkan gambar pertama dan terakhir.",
          "Kalau jumlah elemen tidak berubah, periksa posisinya: mungkin ada elemen yang bergerak satu langkah setiap gambar, misalnya sebuah titik yang berpindah dari sudut kiri atas ke sudut kanan atas, lalu ke sudut kanan bawah, mengelilingi kotak. Atau mungkin ada elemen yang berubah bentuk, misalnya lingkaran menjadi segitiga lalu menjadi persegi, yang menambah satu sisi setiap langkah. Buatlah catatan kecil tentang apa yang berubah, karena dengan menulisnya, pola yang tadinya samar sering menjadi jelas.",
        ],
      },
      {
        heading: "Pengelompokan Bentuk: Cari Ciri yang Sama",
        body: [
          "Soal pengelompokan memberikan beberapa gambar dan meminta kamu mengelompokkannya berdasarkan ciri yang sama. Ciri yang dimaksud biasanya sederhana, misalnya jumlah sisi, jumlah titik, atau jenis garisnya. Tugasmu adalah menemukan ciri yang membagi gambar-gambar itu menjadi dua kelompok yang jelas, tanpa ada gambar yang tersisa atau masuk ke dua kelompok sekaligus. Soal seperti ini menguji ketelitianmu melihat detail, bukan kecepatan hitungmu.",
          "Misalnya ada enam gambar: tiga gambar berbentuk segitiga, persegi, dan segi lima, dan tiga gambar lainnya berbentuk lingkaran, setengah lingkaran, dan bentuk bulan sabit. Ciri yang membaginya adalah garis lurus versus garis lengkung: kelompok pertama seluruh sisinya garis lurus, sedangkan kelompok kedua seluruhnya atau sebagian garis lengkung. Ciri lain yang sering dipakai adalah jumlah sisi, misalnya gambar dengan sisi genap dikelompokkan dengan gambar bersisi genap, dan gambar bersisi ganjil dengan yang ganjil. Kalau satu ciri tidak menghasilkan kelompok yang rapi, coba ciri lain, karena biasanya hanya ada satu ciri yang membagi gambar dengan bersih.",
          "Ciri yang lebih halus juga sering dipakai, misalnya jumlah titik di dalam gambar, jumlah sudut, atau apakah gambarnya simetris atau tidak. Sebuah gambar dikatakan simetris kalau bisa dilipat menjadi dua bagian yang sama persis, dan banyak soal pengelompokan memakai ciri ini. Untuk melatihnya, biasakan mengajukan pertanyaan pada setiap gambar: berapa sisinya, berapa titiknya, garisnya lurus atau lengkung, dan apakah ia simetris. Daftar pertanyaan ini menjadi alat pemeriksamu, dan dengan alat ini, soal pengelompokan tidak lagi terasa seperti tebak-tebakan.",
        ],
      },
      {
        heading: "Strategi Eliminasi: Buang yang Jelas Salah",
        body: [
          "Di soal figural, kamu tidak selalu harus menemukan jawaban yang benar secara langsung, karena sering kali lebih mudah membuang jawaban yang jelas salah. Setiap pola punya aturan, dan opsi yang melanggar aturan itu bisa langsung dicoret. Misalnya kalau polanya adalah jumlah titik bertambah satu setiap gambar, maka opsi dengan jumlah titik yang tidak sesuai bisa langsung dibuang tanpa perlu memeriksa detail lainnya. Strategi ini mengubah soal yang sulit menjadi soal yang lebih mudah, karena membuang empat opsi yang salah sama saja dengan menemukan satu opsi yang benar.",
          "Cara memakai eliminasi adalah dengan memeriksa satu ciri dulu untuk semua opsi, lalu lanjut ke ciri berikutnya kalau masih ada lebih dari satu opsi yang tersisa. Misalnya setelah memeriksa jumlah titik masih tersisa dua opsi, periksa posisi titiknya, lalu periksa arah gambarnya. Setiap pemeriksaan menyaring opsi yang tersisa, sampai tinggal satu. Jangan memeriksa semua ciri pada satu opsi sebelum memeriksa opsi lainnya, karena cara itu lambat dan membuatmu kehilangan gambaran besarnya.",
          "Hati-hati dengan opsi yang dibuat mirip dengan jawaban benar tetapi melanggar satu detail kecil, misalnya arah panahnya benar tetapi posisi titiknya salah. Opsi seperti ini sengaja dipasang untuk menjebak orang yang hanya melihat gambar secara sekilas. Karena itu, setelah tinggal satu opsi, sempatkan untuk memeriksa sekali lagi apakah opsi itu benar-benar memenuhi semua aturan pola, bukan hanya sebagian. Pemeriksaan terakhir ini hanya butuh beberapa detik, tetapi sering menyelamatkan jawabanmu.",
        ],
      },
      {
        heading: "Melatih Mata dan Imajinasi Spasial",
        body: [
          "Kemampuan figural adalah keterampilan visual, dan seperti keterampilan lainnya, ia tumbuh dari latihan yang rutin. Latihan figural tidak harus selalu dari soal ujian: kamu bisa melatihnya dengan memperhatikan pola di sekelilingmu, misalnya pola ubin di lantai, susunan jendela di gedung, atau bentuk rambu lalu lintas. Setiap kali melihat pola, tanyakan pada diri sendiri apa yang berulang dan apa yang berubah, karena kebiasaan bertanya seperti ini melatih matamu untuk menangkap pola dengan cepat.",
          "Saat berlatih soal figural, biasakan mendeskripsikan gambar dengan kata-kata sebelum memilih jawaban. Misalnya katakan dalam hati: gambar ini adalah segitiga menghadap ke atas, ada titik di kiri bawah, dan panahnya menunjuk ke kanan. Mendeskripsikan gambar dengan kata-kata memaksa otakmu memperhatikan detail yang mungkin terlewat kalau hanya dilihat sekilas, dan deskripsi itu juga menjadi pegangan ketika kamu membandingkan gambar dengan opsi yang tersedia.",
          "Latihlah figural dengan timer seperti bagian TIU lainnya, karena di ujian nanti soal figural sering terasa paling menyita waktu. Mulailah dengan target yang longgar, misalnya dua menit per soal, lalu turunkan perlahan menjadi satu menit. Kalau ada soal yang tidak kunjung ketemu polanya setelah satu menit, lewati dulu dan kerjakan soal lain, karena satu soal figural yang macet bisa memakan waktu tiga soal lain yang sebenarnya bisa kamu jawab. Soal yang dilewati bisa dikerjakan lagi di akhir kalau waktu masih tersisa, dan sering kali polanya justru terlihat setelah otakmu beristirahat sejenak dari soal itu.",
        ],
      },
    ],
    sources: [
      "Pola soal TIU SKD CPNS",
      "Penalaran figural: rotasi, pencerminan, dan pola gambar",
      "Pola pengelompokan bentuk dalam tes kemampuan dasar",
    ],
  },
};


export const READING_TKP: Record<string, MaterialReading> = {
  "tkp-pelayanan-publik": {
    sections: [
      {
        heading: "TKP Itu Tes Sikap, Bukan Tes Hafalan",
        body: [
          "Bayangkan kamu sudah lolos TWK dan TIU, lalu berhadapan dengan TKP dan kaget karena soalnya tidak seperti yang kamu bayangkan. Tidak ada rumus yang perlu dihafal, tidak ada jawaban yang bisa ditebak dari buku, dan tidak ada satu pun soal yang meminta kamu menghafal definisi. Soal TKP menyajikan situasi sehari-hari di kantor pemerintahan, lalu meminta kamu memilih sikap yang paling tepat. Setiap pilihan bernilai 1 sampai 5 poin, jadi tidak ada jawaban yang nilainya nol, dan yang dicari adalah sikap yang paling ideal.",
          "Ada 45 soal TKP dan tiap soal maksimal 5 poin, jadi total tertinggi yang bisa kamu raih adalah 225 poin. Batas lolosnya adalah 166 poin, artinya kamu tidak harus sempurna di semua soal, tetapi harus konsisten memilih sikap yang baik. Karena itu strategi terbaik bukan menebak, melainkan memahami pola pikirnya: apa yang akan dilakukan ASN yang benar-benar melayani? Kalau kamu sudah paham polanya, soal apa pun bentuknya akan terasa mirip.",
          "Pola itu yang akan kita pelajari di materi ini. Kita akan membahas apa itu pelayanan prima, kenapa sikap proaktif selalu menang, dan jebakan apa saja yang membuat nilai jatuh. Semua dijelaskan dengan contoh sehari-hari, supaya kamu bisa membayangkan situasinya, bukan sekadar menghafal definisi.",
        ],
      },
      {
        heading: "Pelayanan Prima: Enam Kata yang Wajib Diingat",
        body: [
          "Pelayanan prima adalah standar tertinggi dalam melayani masyarakat, dan ia diringkas dalam enam kata: cepat, tepat, ramah, adil, transparan, dan akuntabel. Cepat berarti warga tidak dibiarkan menunggu tanpa kejelasan, tepat berarti urusannya selesai sesuai kebutuhan dan aturan, dan ramah berarti disambut dengan senyum dan bahasa yang sopan. Tiga kata pertama ini menyangkut cara melayani, dan ketiganya harus hadir bersamaan, karena pelayanan yang cepat tetapi kasar tetap buruk, begitu pula pelayanan yang ramah tetapi bertele-tele.",
          "Adil berarti semua warga diperlakukan sama tanpa membedakan latar belakang, kenalan, atau besar kecilnya urusan. Transparan berarti warga tahu apa syaratnya, berapa biayanya kalau ada, dan berapa lama prosesnya, tanpa ada yang disembunyikan. Akuntabel berarti setiap tindakan bisa dipertanggungjawabkan, ada catatannya, dan ada yang bisa dimintai tanggung jawab bila terjadi kesalahan.",
          "Enam kata ini bukan hiasan dinding kantor, melainkan alat ukur untuk menilai jawaban soal TKP. Ketika kamu membaca sebuah soal, tanyakan pada dirimu: pilihan mana yang paling cepat, paling tepat, paling ramah, paling adil, paling transparan, dan paling bisa dipertanggungjawabkan? Pilihan yang memenuhi paling banyak kriteria itulah yang biasanya bernilai 5.",
        ],
      },
      {
        heading: "Dahulukan Warga, Bukan Kenyamanan Sendiri",
        body: [
          "Prinsip paling dasar dalam pelayanan publik adalah kepentingan masyarakat didahulukan di atas kenyamanan pribadi petugas. Kedengarannya sederhana, tetapi dalam praktiknya sering diuji oleh situasi kecil, misalnya warga datang lima menit sebelum jam layanan tutup dengan berkas yang belum lengkap. Petugas yang mendahulukan kenyamanannya akan berkata, 'Maaf, sudah mau tutup, besok saja,' lalu menutup jendela loket. Padahal warga itu mungkin menempuh perjalanan jauh, mengambil cuti kerja, atau sudah antre sejak pagi.",
          "Petugas yang mendahulukan warga akan tetap melayani dengan ramah, memeriksa berkasnya, menjelaskan apa yang kurang, dan memberi tahu cara melengkapinya agar ia tidak perlu bolak-balik. Kalau memang tidak bisa diselesaikan hari itu juga, petugas tetap memberi solusi, misalnya mencatat nomor antrean untuk besok atau memberi daftar periksa dokumen yang harus dibawa. Sikap seperti inilah yang dinilai 5 dalam soal TKP, karena ia menunjukkan empati sekaligus tanggung jawab.",
          "Kuncinya adalah membayangkan dirimu sebagai warga itu. Kalau kamu yang datang jauh-jauh lalu ditolak mentah-mentah, bagaimana rasanya? Soal TKP sering menguji kemampuanmu berempati seperti ini, jadi setiap kali membaca soal, coba letakkan dirimu di posisi warga yang dilayani. Pilihan yang paling manusiawi dan paling membantu biasanya adalah jawaban yang dicari.",
        ],
      },
      {
        heading: "Proaktif Selalu Menang atas Pasif",
        body: [
          "Ada dua jenis petugas yang sama-sama 'sesuai prosedur': yang pasif dan yang proaktif. Petugas pasif menunggu warga bertanya, menjawab seperlunya, dan kalau ada yang kurang ia hanya berkata, 'Itu bukan urusan saya,' atau, 'Silakan tanya ke loket sebelah.' Secara aturan ia tidak salah, tetapi ia tidak membantu. Petugas proaktif justru sebaliknya: ia menawarkan bantuan sebelum diminta, mengarahkan warga ke loket yang benar, dan memastikan warga pulang dengan jawaban, bukan dengan kebingungan.",
          "Dalam soal TKP, pilihan yang pasif hampir selalu bernilai rendah, sementara pilihan yang proaktif bernilai tinggi. Misalnya ada warga kebingungan mengisi formulir, jawaban 'biarkan saja, nanti juga bisa sendiri' bernilai rendah, sedangkan 'mendampingi dan menjelaskan langkah demi langkah' bernilai 5. Perbedaannya bukan pada benar atau salah secara aturan, melainkan pada ada atau tidaknya kemauan membantu.",
          "Latih dirimu untuk selalu mencari pilihan yang paling aktif membantu. Kalau ada opsi yang berbunyi 'menawarkan bantuan', 'menjelaskan dengan sabar', 'mencarikan solusi', atau 'menghubungi pihak terkait', kemungkinan besar itulah jawaban terbaik. Sebaliknya, waspadai opsi yang berbunyi 'menunggu perintah', 'sesuai prosedur saja', atau 'bukan tugas saya', karena kata-kata itu biasanya menandai jawaban bernilai rendah.",
        ],
      },
      {
        heading: "Tiga Sikap yang Membuat Nilai Jatuh",
        body: [
          "Selain mencari jawaban terbaik, kamu juga harus mengenali jawaban yang harus dihindari. Yang pertama adalah menyalahkan warga. Misalnya warga mengeluh karena prosesnya lama, lalu petugas menjawab, 'Salah sendiri datangnya kesiangan,' atau, 'Berkasnya tidak lengkap, makanya lama.' Sikap seperti ini menempatkan warga sebagai pihak yang bersalah, padahal tugas ASN adalah melayani, bukan menghakimi.",
          "Yang kedua adalah menunda tanpa solusi. Menunda itu kadang tidak bisa dihindari, tetapi menunda tanpa memberi kepastian, tanpa menjelaskan alasan, dan tanpa menawarkan jalan keluar adalah bentuk pelayanan yang buruk. Jawaban seperti 'nanti saja' atau 'belum bisa, tunggu dulu' tanpa tindak lanjut hampir selalu bernilai rendah. Kalau memang harus menunggu, warga berhak tahu kenapa dan sampai kapan.",
          "Yang ketiga, dan yang paling fatal, adalah meminta imbalan. Pungutan liar, uang pelicin, atau hadiah sebagai syarat mempercepat layanan adalah pelanggaran integritas dan tidak pernah bisa dibenarkan, apa pun alasannya. Dalam soal TKP, pilihan apa pun yang mengandung unsur imbalan atau pungli selalu bernilai paling rendah, bahkan ketika dibungkus dengan bahasa yang halus seperti 'uang terima kasih'.",
        ],
      },
      {
        heading: "Cara Memilih Jawaban Terbaik",
        body: [
          "Setelah memahami prinsipnya, cara menjawab soal TKP menjadi lebih mudah. Pertama, baca situasinya dengan tenang dan bayangkan kamu ada di sana. Kedua, periksa setiap opsi dengan kacamata enam prinsip pelayanan prima: mana yang paling cepat, tepat, ramah, adil, transparan, dan akuntabel? Ketiga, pilih opsi yang paling proaktif membantu dan paling berempati kepada warga.",
          "Kalau dua opsi tampak sama-sama baik, bandingkan detailnya: opsi yang memberi solusi konkret biasanya lebih baik daripada opsi yang hanya memberi janji, dan opsi yang mendampingi warga sampai selesai lebih baik daripada opsi yang hanya mengarahkan lalu meninggalkan. Perhatikan juga kata-kata dalam opsi: kata 'segera', 'membantu', 'menjelaskan', dan 'mencarikan solusi' adalah tanda jawaban yang baik. Sebaliknya, kata 'menunggu', 'menolak', 'menyalahkan', dan 'membiarkan' adalah tanda jawaban yang buruk.",
          "Terakhir, jangan panik bila kamu ragu di antara dua pilihan. Ingat bahwa tidak ada jawaban yang bernilai nol, jadi kalaupun kamu tidak memilih yang terbaik, kamu tetap mendapat poin. Yang penting adalah konsistensi: selama kamu selalu memilih sikap yang paling membantu dan paling ramah, total nilaimu akan terkumpul dengan sendirinya dan peluang lolos passing grade menjadi besar.",
        ],
      },
    ],
    sources: [
      "Prinsip pelayanan prima: cepat, tepat, ramah, adil, transparan, dan akuntabel",
      "Undang-Undang tentang Pelayanan Publik",
      "Nilai dasar ASN BerAKHLAK — Berorientasi Pelayanan",
      "Standar pelayanan publik dan etika aparatur negara",
    ],
  },
  "tkp-jejaring-kerja": {
    sections: [
      {
        heading: "ASN Tidak Bekerja Sendirian",
        body: [
          "Hampir tidak ada pekerjaan ASN yang dikerjakan sendirian. Surat yang kamu ketik akan diperiksa rekanmu, data yang kamu kumpulkan akan dipakai bagian lain, dan layanan yang kamu berikan adalah hasil kerja banyak orang di belakang layar. Karena itu soal jejaring kerja menguji satu hal mendasar: bisakah kamu bekerja sama dengan orang lain? Bukan seberapa pintar kamu sendirian, melainkan seberapa baik kamu menjadi bagian dari tim.",
          "Soal-soal di bagian ini biasanya menyajikan situasi tim: ada rekan yang kesulitan, ada tugas yang harus dibagi, ada perbedaan pendapat, atau ada rekan yang bersikap tidak menyenangkan. Yang dinilai adalah sikapmu dalam situasi itu. Apakah kamu membantu, berkomunikasi, dan mencari jalan tengah, atau justru menghindar, menyalahkan, dan bekerja sendiri?",
          "Pola jawabannya mirip dengan pelayanan publik: yang proaktif dan empatik menang, yang pasif dan egois kalah. Bedanya, di sini yang kamu layani bukan warga, melainkan rekan kerjamu sendiri. Kalau kamu bisa memperlakukan rekanmu sebaik kamu memperlakukan warga, nilai TKP bagian ini akan mengikuti.",
        ],
      },
      {
        heading: "Membagi Tugas dengan Adil",
        body: [
          "Kerja tim yang baik dimulai dari pembagian tugas yang adil dan masuk akal. Adil bukan berarti semua orang mengerjakan jumlah yang sama persis, melainkan tugas dibagi sesuai kemampuan dan beban masing-masing. Ada rekan yang cepat mengolah data tetapi lambat menulis laporan, ada yang sebaliknya, dan tugas yang baik memanfaatkan kelebihan tiap orang.",
          "Yang harus dihindari adalah membebankan semua pekerjaan ke satu orang, entah karena ia yang paling bisa, paling baru, atau paling tidak berani menolak. Dalam soal TKP, pilihan yang membagi ulang tugas secara proporsional atau menawarkan bantuan kepada rekan yang kewalahan hampir selalu bernilai tinggi. Sebaliknya, pilihan yang membiarkan satu orang menanggung semuanya, atau yang memilih tugas paling mudah untuk diri sendiri, bernilai rendah.",
          "Contoh yang sering muncul: rekan satu timmu kesulitan menyelesaikan bagiannya dan deadline sudah dekat. Sikap terbaik bukan membiarkannya sendiri, bukan pula langsung melapor ke atasan, melainkan menawarkan bantuan dan membagi ulang tugas secara proporsional. Membantu dulu, melapor belakangan, dan hanya bila memang sudah tidak bisa diatasi bersama.",
        ],
      },
      {
        heading: "Konflik Diselesaikan dengan Komunikasi",
        body: [
          "Di mana ada orang bekerja bersama, di situ ada perbedaan pendapat. Ada yang merasa tugasnya lebih berat, ada yang tidak setuju dengan cara kerja rekan lain, ada yang tersinggung oleh ucapan yang sebenarnya tidak bermaksud menyinggung. Konflik seperti ini wajar, dan yang dinilai bukan apakah konflik terjadi, melainkan bagaimana kamu menyikapinya.",
          "Cara terbaik menyelesaikan konflik adalah komunikasi terbuka. Ajak bicara langsung dengan cara yang tenang, dengarkan sudut pandangnya, sampaikan keberatanmu tanpa menyerang, lalu cari jalan tengah yang bisa diterima bersama. Diam dan memendam masalah hanya membuat konflik membesar di belakang, sementara langsung mengadu ke atasan tanpa mencoba bicara dulu menunjukkan kamu tidak mau repot menyelesaikan masalah sendiri.",
          "Dalam soal TKP, waspadai pilihan yang berbunyi 'mendiamkan saja', 'menghindari rekan tersebut', atau 'melaporkan ke atasan' sebagai langkah pertama. Pilihan-pilihan itu hampir selalu bernilai rendah. Carilah pilihan yang mengandung kata 'berkomunikasi', 'mendengarkan', 'membicarakan baik-baik', atau 'mencari solusi bersama', karena itulah sikap yang diharapkan dari seorang ASN.",
        ],
      },
      {
        heading: "Kepemimpinan: Mendengar, Mencontoh, Bertanggung Jawab",
        body: [
          "Soal jejaring kerja juga sering menguji kepemimpinan, dan ini berlaku bukan hanya untuk atasan, melainkan untuk siapa pun yang dipercaya memimpin sebuah tim atau kegiatan. Pemimpin yang baik bukan yang paling keras suaranya atau paling banyak memberi perintah, melainkan yang mau mendengarkan anggota timnya, memberi contoh lewat perbuatan, dan bertanggung jawab atas hasil tim, baik maupun buruk. Tiga hal itulah yang akan kita bahas satu per satu.",
          "Mendengarkan berarti memberi ruang bagi anggota tim untuk menyampaikan pendapat dan keluhan, lalu benar-benar mempertimbangkannya sebelum memutuskan. Memberi contoh berarti kamu mengerjakan bagianmu dengan sungguh-sungguh sebelum meminta orang lain bekerja keras. Bertanggung jawab berarti ketika tim gagal, kamu tidak mencari kambing hitam, melainkan mengakui bagianmu dan mengajak tim memperbaiki bersama.",
          "Perhatikan bahwa ketiga hal ini bertolak belakang dengan gaya memimpin yang otoriter: memerintah tanpa mendengar, menuntut tanpa memberi contoh, dan menyalahkan anggota saat gagal. Dalam soal TKP, pilihan yang menunjukkan pemimpin yang mendengarkan dan bertanggung jawab selalu bernilai lebih tinggi daripada pilihan yang menunjukkan pemimpin yang sekadar memerintah. Pemimpin yang otoriter mungkin terlihat tegas, tetapi timnya tidak akan percaya dan tidak akan bekerja dengan sepenuh hati.",
        ],
      },
      {
        heading: "Inisiatif dan Empati, Bukan Menunggu Perintah",
        body: [
          "Ciri ASN yang baik dalam kerja tim adalah inisiatif: ia melihat ada pekerjaan yang perlu dikerjakan lalu mengerjakannya, tanpa menunggu disuruh. Misalnya ia melihat rekan lain kewalahan, ia menawarkan bantuan. Ia melihat ada bagian yang macet, ia mencari tahu penyebabnya. Ia tidak berkata, 'Itu bukan tugas saya,' karena baginya keberhasilan tim adalah keberhasilan bersama.",
          "Empati adalah pasangannya: kemampuan memahami perasaan dan kesulitan orang lain. Rekan yang pendiam belum tentu malas, bisa jadi ia sedang punya masalah di rumah atau tidak memahami tugasnya tetapi malu bertanya. ASN yang empatik akan bertanya dengan lembut, bukan menghakimi, dan menawarkan bantuan dengan cara yang tidak merendahkan.",
          "Dalam soal TKP, jawaban terbaik hampir selalu menunjukkan inisiatif dan empati sekaligus. Kalau kamu membaca sebuah opsi dan di dalamnya ada kemauan membantu tanpa diminta, serta kepedulian pada perasaan rekan kerja, kemungkinan besar itulah jawaban bernilai 5. Sebaliknya, opsi yang menunggu perintah atasan atau mengabaikan kesulitan rekan biasanya bernilai rendah.",
        ],
      },
      {
        heading: "Skenario Sulit: Tim yang Tidak Kompak",
        body: [
          "Tidak semua tim bekerja dengan kompak, dan soal TKP sering mengujimu dengan tim yang bermasalah. Contohnya, rekan kerjamu yang paling aktif mulai sering absen dan tidak bersemangat, sehingga target tim terancam. Atau, ada rekan yang tidak mau mengikuti rapat karena sibuk dengan urusannya sendiri. Dalam situasi seperti ini, jawaban yang dinilai paling baik bukan langsung mengadu ke atasan, melainkan mendekati rekan itu dulu dan menanyakan apa yang sebenarnya terjadi.",
          "Alasannya sederhana: masalah di tim sering kali bukan karena orangnya malas, melainkan karena ada kendala yang tidak terlihat, misalnya masalah keluarga, beban kerja yang tidak seimbang, atau kesalahpahaman dengan anggota tim lain. Dengan bertanya baik-baik, kamu bisa menemukan akar masalahnya dan menawarkan bantuan yang tepat, misalnya membagi tugas sementara atau menemani rekan itu berbicara dengan atasan. Sikap ini menunjukkan empati dan inisiatif, dua nilai yang paling dicari dalam soal jejaring kerja.",
          "Kalau pendekatan pribadi sudah dilakukan tetapi rekan itu tetap tidak berubah dan target tim benar-benar terancam, barulah kamu melibatkan atasan, dan itu pun dengan cara yang konstruktif: sampaikan fakta dan dampaknya pada target tim, bukan dengan mengeluh atau menyalahkan. Urutan ini penting, yaitu bantu dulu, bicara baik-baik, baru libatkan atasan bila sudah mentok. Soal TKP hampir selalu menempatkan opsi 'langsung mengadu' sebagai pilihan dengan skor rendah, dan opsi 'mendekati dan membantu dulu' sebagai pilihan dengan skor tertinggi.",
        ],
      },
      {
        heading: "Cara Menjawab Soal Jejaring Kerja",
        body: [
          "Saat mengerjakan soal jejaring kerja, bayangkan dirimu benar-benar anggota tim itu. Tanyakan pada dirimu: apa yang akan membuat tim ini berhasil dan tetap rukun? Biasanya jawabannya adalah komunikasi, bantuan, dan pembagian tugas yang adil. Pilihlah opsi yang paling menjaga hubungan baik sekaligus menyelesaikan pekerjaan, bukan opsi yang menyelesaikan pekerjaan dengan mengorbankan hubungan, atau menjaga hubungan dengan mengorbankan pekerjaan.",
          "Urutan yang baik untuk diingat adalah: bantu dulu, bicara dulu, laporkan belakangan. Artinya, ketika ada masalah dalam tim, langkah pertama adalah mencoba membantu dan membicarakannya dengan orang yang bersangkutan, bukan langsung membawa masalah itu ke atasan. Melapor ke atasan adalah langkah terakhir, ketika semua upaya sudah dicoba dan masalah tetap tidak selesai.",
          "Terakhir, perhatikan kata-kata kunci dalam opsi. Kata 'membantu', 'berkomunikasi', 'mendengarkan', 'membagi tugas', dan 'mencari solusi bersama' adalah tanda jawaban yang baik. Kata 'mendiamkan', 'menghindari', 'menyalahkan', dan 'melaporkan' sebagai langkah pertama adalah tanda jawaban yang buruk. Dengan mengenali pola kata ini, kamu bisa menjawab lebih cepat dan lebih percaya diri.",
        ],
      },
    ],
    sources: [
      "Prinsip kerja sama tim dan pembagian tugas yang adil",
      "Nilai dasar ASN BerAKHLAK — Harmonis dan Kolaboratif",
      "Komunikasi efektif dalam lingkungan kerja",
    ],
  },
  "tkp-sosial-budaya": {
    sections: [
      {
        heading: "ASN Melayani Semua Orang",
        body: [
          "Indonesia adalah negara yang sangat beragam: ratusan suku, bahasa daerah yang tak terhitung, dan agama yang berbeda-beda hidup berdampingan. Sebagai ASN, kamu akan melayani semua orang itu tanpa kecuali, dari warga yang logatnya sama denganmu sampai warga yang bahasanya baru pertama kali kamu dengar. Soal sosial budaya menguji apakah kamu siap melayani keberagaman itu dengan sikap yang benar.",
          "Yang diuji di sini bukan hafalan tentang nama suku atau adat istiadat, melainkan sikap: apakah kamu menghargai perbedaan, atau justru menganggap kelompokmu lebih baik? Apakah kamu bersedia bergotong royong dengan siapa saja, atau hanya dengan orang yang seasal denganmu? Jawaban terbaik selalu menunjukkan keterbukaan dan rasa hormat terhadap semua kelompok.",
          "Materi ini berkaitan erat dengan nilai Pancasila, terutama sila pertama tentang toleransi beragama dan sila ketiga tentang persatuan. Kalau kamu sudah memahami kedua sila itu, soal sosial budaya akan terasa seperti kelanjutannya: bagaimana nilai-nilai itu diwujudkan dalam sikap sehari-hari seorang ASN. Karena itu, sebelum mengerjakan soal bagian ini, ada baiknya kamu mengingat kembali materi Pancasila.",
        ],
      },
      {
        heading: "Menghargai Perbedaan, Bukan Sekadar Menoleransi",
        body: [
          "Menghargai perbedaan lebih dalam daripada sekadar menoleransi. Menoleransi kadang hanya berarti membiarkan orang lain berbeda tanpa mengganggunya, tetapi menghargai berarti mengakui bahwa perbedaan itu berharga dan tidak membuat seseorang lebih rendah dari yang lain. Misalnya, rekan kerja dari daerah lain diejek logatnya, sikap menghargai adalah menegur ejekan itu dengan sopan dan mengajak yang lain menghormati perbedaan, bukan ikut tertawa atau pura-pura tidak mendengar.",
          "Dalam kehidupan sehari-hari, perbedaan bisa muncul dalam hal kecil: cara berpakaian, makanan, kebiasaan, hingga hari raya yang dirayakan. ASN yang baik tidak menjadikan perbedaan itu bahan candaan atau alasan untuk menjauh, melainkan menganggapnya sebagai kekayaan. Ia bertanya dengan tulus tentang kebiasaan orang lain, bukan untuk menghakimi, melainkan untuk memahami.",
          "Dalam soal TKP, pilihan yang menghargai perbedaan selalu bernilai tinggi, sedangkan pilihan yang meremehkan, mengejek, atau menganggap satu kelompok lebih unggul selalu bernilai rendah. Perhatikan juga pilihan yang tampak netral tetapi sebenarnya menghindar, misalnya 'tidak ikut campur' saat ada yang diejek karena berbeda: itu bukan sikap menghargai, melainkan sikap membiarkan. Sikap yang benar adalah menegur dengan sopan, bukan diam.",
        ],
      },
      {
        heading: "Gotong Royong: Ikut Aktif, Bukan Jadi Penonton",
        body: [
          "Gotong royong adalah cara Indonesia menyelesaikan urusan bersama, dari membersihkan lingkungan sampai membangun balai desa. Sebagai ASN yang tinggal di tengah masyarakat, kamu diharapkan ikut aktif dalam kegiatan seperti itu, bukan hanya menjadi penonton atau tamu undangan yang datang untuk difoto. Kehadiranmu yang ikut bekerja menunjukkan bahwa kamu bagian dari masyarakat, bukan pejabat yang menjaga jarak.",
          "Dalam soal TKP, pilihan yang menunjukkan keikutsertaan aktif hampir selalu bernilai tinggi. Misalnya ada kerja bakti di lingkungan tempat tinggalmu, jawaban terbaik adalah ikut serta dan membantu sesuai kemampuan, bukan beralasan sibuk atau hanya menyumbang tanpa hadir. Menyumbang itu baik, tetapi hadir dan bekerja bersama jauh lebih bermakna sebagai wujud gotong royong.",
          "Gotong royong juga berlaku di kantor: membantu rekan yang kewalahan, ikut menjaga kebersihan ruang kerja bersama, atau berpartisipasi dalam kegiatan sosial instansi. Semuanya menunjukkan sikap yang sama, yaitu kesediaan memberi waktu dan tenaga untuk kepentingan bersama. Di mana pun bentuknya, gotong royong selalu dinilai sebagai sikap yang baik dalam soal TKP.",
        ],
      },
      {
        heading: "Menjadi Penengah yang Netral dan Adil",
        body: [
          "Salah satu ujian terberat bagi ASN adalah ketika ia harus menghadapi konflik antar warga. Misalnya dua kelompok warga bertikai soal penggunaan balai desa, dan kamu tinggal di lingkungan itu. Sebagai ASN, kamu diharapkan menjadi penengah yang netral dan adil, bukan membela kelompok yang kamu kenal atau kelompok yang seasal denganmu.",
          "Menjadi penengah berarti mendengarkan kedua pihak dengan sabar, tanpa memotong dan tanpa memihak, lalu mengusulkan musyawarah sebagai jalan keluar. Kamu tidak perlu menjadi hakim yang memutuskan siapa yang benar, cukup menjadi jembatan agar kedua pihak mau duduk bersama dan mencari kesepakatan. Sikap ini mencerminkan sila keempat Pancasila, yaitu musyawarah untuk mencapai mufakat.",
          "Dalam soal TKP, pilihan yang menunjukkan sikap netral dan mengajak musyawarah selalu bernilai tinggi. Sebaliknya, pilihan yang membela satu pihak, menyalahkan satu pihak tanpa mendengar keduanya, atau membiarkan konflik membesar karena 'bukan urusan saya' selalu bernilai rendah. Ingat, netral bukan berarti diam, melainkan aktif mendamaikan tanpa memihak.",
        ],
      },
      {
        heading: "Jebakan: Memihak dan Stereotip",
        body: [
          "Ada dua jebakan yang paling sering muncul dalam soal sosial budaya: memihak dan stereotip. Memihak berarti kamu membela satu kelompok hanya karena kamu berasal dari kelompok itu, mengenal orangnya, atau merasa kelompok itu lebih benar tanpa mendengar pihak lain. Dalam soal, memihak sering dibungkus dengan alasan yang terdengar masuk akal, misalnya 'membela teman sendiri', tetapi tetap saja itu bukan sikap ASN.",
          "Stereotip adalah anggapan umum tentang suatu kelompok yang belum tentu benar, misalnya menganggap suku tertentu pemalas, atau agama tertentu tidak toleran. Stereotip berbahaya karena ia membuatmu menilai orang dari kelompoknya, bukan dari perbuatannya. Dalam soal TKP, pilihan apa pun yang menyebarkan atau membenarkan stereotip selalu bernilai rendah, apa pun kelompok yang dimaksud.",
          "Cara mengenali jebakan ini adalah dengan memeriksa apakah sebuah pilihan menilai seseorang berdasarkan kelompoknya atau berdasarkan perbuatannya. Kalau alasannya adalah 'karena dia dari suku X' atau 'karena mereka beragama Y', itu stereotip. Kalau alasannya adalah 'karena ia memang berbuat begitu', itu penilaian yang adil.",
        ],
      },
      {
        heading: "Cara Menjawab Soal Sosial Budaya",
        body: [
          "Strategi menjawab soal sosial budaya cukup sederhana: cari pilihan yang paling menghargai perbedaan dan paling mendamaikan. Kalau soalnya tentang konflik, pilih opsi yang mengajak musyawarah dan mendengarkan kedua pihak. Kalau soalnya tentang kegiatan masyarakat, pilih opsi yang ikut aktif dan bergotong royong. Kalau soalnya tentang perbedaan, pilih opsi yang menunjukkan rasa hormat, bukan ejekan atau penghindaran.",
          "Perhatikan juga kata-kata dalam opsi. Kata 'menghargai', 'menghormati', 'musyawarah', 'mendengarkan', dan 'gotong royong' adalah tanda jawaban yang baik. Kata 'memihak', 'membela kelompok sendiri', 'mengejek', 'menyalahkan', dan 'membiarkan' adalah tanda jawaban yang buruk. Dengan mengenali pola ini, kamu bisa menjawab soal sosial budaya dengan lebih cepat dan tenang.",
          "Satu hal terakhir yang perlu diingat: bersikap netral bukan berarti tidak peduli. ASN yang netral tetap aktif mendamaikan, tetap ikut gotong royong, dan tetap menegur sikap yang tidak menghargai perbedaan. Ia hanya tidak memihak. Bedakan antara diam karena tidak peduli dan diam karena mendengarkan, karena dalam soal TKP, keduanya terlihat mirip tetapi nilainya sangat berbeda.",
        ],
      },
    ],
    sources: [
      "Semboyan Bhinneka Tunggal Ika dan nilai persatuan dalam Pancasila",
      "UUD 1945 tentang kebebasan beragama dan hak asasi manusia",
      "Nilai dasar ASN BerAKHLAK — Harmonis",
      "Prinsip gotong royong dalam kehidupan bermasyarakat",
    ],
  },
  "tkp-teknologi-informasi": {
    sections: [
      {
        heading: "ASN di Era Digital",
        body: [
          "Pekerjaan ASN hari ini tidak bisa lepas dari teknologi. Surat menyurat sudah digital, layanan sudah online, data sudah tersimpan di sistem elektronik, dan warga pun semakin terbiasa mengurus keperluan lewat ponsel. Soal teknologi informasi dan komunikasi menguji apakah kamu siap bekerja di era seperti ini: bukan sekadar bisa memakai aplikasi, melainkan bersikap benar dalam menggunakan teknologi.",
          "Yang dinilai di sini ada tiga hal besar: kemauan beradaptasi dengan teknologi baru, kepedulian terhadap keamanan data dan kerahasiaan instansi, serta kemampuan memakai teknologi untuk membantu warga, termasuk warga yang belum melek digital. Ketiganya sama penting, dan soal-soal di bagian ini biasanya menguji salah satu dari ketiganya lewat situasi sehari-hari. Karena itu, materi ini akan membahas ketiganya satu per satu.",
          "Kabar baiknya, kamu tidak perlu menjadi ahli teknologi untuk menjawab soal ini. Yang dibutuhkan adalah pola pikir yang benar: teknologi itu alat untuk mempercepat dan mempermudah, bukan untuk mempersulit, dan data serta informasi harus dijaga sebagaimana kamu menjaga amanah. Kalau kamu memegang dua prinsip itu, soal bagian ini akan terasa jauh lebih mudah.",
        ],
      },
      {
        heading: "Teknologi Harus Mempercepat, Bukan Mempersulit",
        body: [
          "Tujuan utama teknologi dalam pelayanan publik adalah membuat urusan warga lebih cepat dan lebih mudah. Formulir online seharusnya menghemat waktu warga, bukan menambah kebingungan. Sistem antrean digital seharusnya membuat antrean lebih tertib, bukan membuat warga yang tidak punya ponsel pintar menjadi tertinggal.",
          "Masalahnya, tidak semua warga melek digital. Ada warga lanjut usia yang tidak tahu cara mengisi formulir online, ada warga di daerah yang sinyalnya lemah, dan ada warga yang baru pertama kali memegang ponsel pintar. Sikap ASN yang benar adalah mendampingi mereka dengan sabar: menjelaskan langkah demi langkah, membantu mengisi, dan memastikan mereka pulang dengan urusan selesai.",
          "Dalam soal TKP, pilihan yang membantu warga gaptek dengan sabar hampir selalu bernilai 5, sedangkan pilihan yang menyuruh warga belajar sendiri, menyalahkan warga karena tidak bisa teknologi, atau membiarkan mereka kebingungan selalu bernilai rendah. Ingat, teknologi yang baik adalah teknologi yang memudahkan semua orang, bukan hanya yang sudah melek digital. Kalau sebuah pilihan membuat warga yang gaptek semakin tertinggal, itu bukan jawaban yang baik.",
        ],
      },
      {
        heading: "Jaga Data dan Rahasia Instansi",
        body: [
          "Sebagai ASN, kamu akan memegang data warga dan informasi instansi: nomor identitas, alamat, data keuangan, hingga dokumen internal yang tidak untuk disebarluaskan. Data dan informasi ini adalah amanah, dan menjaganya adalah bagian dari profesionalisme. Membagikan data warga di media sosial, memotret dokumen internal lalu mengunggahnya, atau menceritakan rahasia instansi kepada orang luar adalah pelanggaran yang serius.",
          "Dalam soal TKP, situasi yang menguji hal ini sering dibungkus dengan cara yang halus. Misalnya rekan kerja memintamu mengirim data warga lewat aplikasi pesan pribadi karena 'lebih cepat', atau seseorang memintamu memotret dokumen untuk 'dokumentasi pribadi'. Jawaban terbaik selalu menolak dengan sopan dan menawarkan cara yang aman dan sesuai aturan, misalnya memakai sistem resmi instansi atau meminta izin terlebih dahulu.",
          "Prinsipnya sederhana: kalau ragu apakah sebuah informasi boleh dibagikan, jangan dibagikan. Lebih baik bertanya kepada atasan atau mengikuti prosedur yang ada daripada menyesal setelah informasi itu tersebar. Keamanan data bukan urusan bagian teknologi saja, melainkan tanggung jawab setiap ASN.",
        ],
      },
      {
        heading: "Adaptif: Mau Belajar Teknologi Baru",
        body: [
          "Teknologi berubah dengan cepat, dan sistem yang dipakai instansi hari ini bisa berbeda dengan sistem lima tahun lalu. ASN yang adaptif tidak mengeluh setiap kali ada sistem baru, melainkan mau belajar, mencoba, dan meminta bantuan bila kesulitan. Ia sadar bahwa menolak teknologi sama saja dengan menolak melayani warga dengan lebih baik.",
          "Adaptif juga berarti tidak gagap ketika terjadi perubahan cara kerja, misalnya rapat yang pindah ke daring atau layanan yang beralih ke aplikasi. Dalam soal TKP, pilihan yang menunjukkan kemauan belajar dan mencoba hal baru selalu bernilai lebih tinggi daripada pilihan yang menolak perubahan atau menunggu orang lain yang mengerjakan. Perubahan cara kerja memang tidak selalu nyaman, tetapi sikap terbuka terhadapnya adalah tanda ASN yang baik.",
          "Kamu tidak perlu menguasai semua teknologi, cukup menunjukkan sikap terbuka dan mau belajar. Kalau ada pelatihan sistem baru, ikuti dengan sungguh-sungguh. Kalau ada rekan yang lebih paham, tanyakan caranya. Sikap seperti inilah yang dicari soal TKP bagian teknologi.",
        ],
      },
      {
        heading: "Hoaks: Verifikasi Dulu Sebelum Menyebar",
        body: [
          "Di era media sosial, informasi palsu atau hoaks menyebar jauh lebih cepat daripada kebenaran. Sebagai ASN, kamu memikul tanggung jawab lebih besar dalam hal ini, karena apa yang kamu bagikan sering dianggap lebih dipercaya oleh masyarakat. Karena itu prinsipnya jelas: verifikasi dulu sebelum menyebarkan, apa pun isi beritanya dan dari siapa pun datangnya.",
          "Verifikasi tidak harus rumit. Periksa sumbernya: apakah berita itu berasal dari media atau akun resmi? Periksa isinya: apakah ada data yang bisa dicek, atau hanya berupa klaim tanpa bukti? Periksa tanggalnya: apakah berita itu masih relevan, atau sebenarnya berita lama yang diunggah ulang? Kalau salah satu saja meragukan, jangan disebarkan, dan beri tahu pengirimnya dengan baik bahwa informasi itu belum terverifikasi.",
          "Dalam soal TKP, pilihan yang mengecek kebenaran sebelum menyebar selalu bernilai tinggi, sedangkan pilihan yang langsung meneruskan karena 'katanya penting' atau 'supaya orang lain tahu' selalu bernilai rendah. Bahkan ketika berita itu tampaknya benar dan niatmu baik, menyebarkan tanpa verifikasi tetap salah, karena niat baik tidak memperbaiki informasi yang salah. Yang dicari adalah sikap hati-hati, bukan kecepatan menyebar.",
        ],
      },
      {
        heading: "Cara Menjawab Soal Teknologi Informasi",
        body: [
          "Saat menjawab soal teknologi informasi, tanyakan tiga hal pada dirimu: apakah pilihan ini membantu warga, apakah pilihan ini menjaga data, dan apakah pilihan ini menunjukkan kemauan belajar? Pilihan yang menjawab 'ya' untuk ketiganya adalah jawaban terbaik. Kalau sebuah pilihan tampak canggih tetapi justru mempersulit warga, itu bukan jawaban yang baik.",
          "Perhatikan juga arah sikapnya. Pilihan yang mendampingi warga gaptek, menolak membagikan data sembarangan, dan mau mempelajari sistem baru adalah pilihan yang baik. Pilihan yang menyuruh warga belajar sendiri, membagikan data demi kecepatan, dan menolak perubahan adalah pilihan yang buruk. Polanya konsisten di semua soal bagian ini.",
          "Terakhir, ingat bahwa teknologi adalah alat, bukan tujuan. Jawaban terbaik dalam soal TKP bagian ini hampir selalu adalah jawaban yang memakai teknologi untuk melayani manusia dengan lebih baik, bukan jawaban yang mengagungkan teknologi itu sendiri. Selama kamu memegang prinsip itu, soal teknologi informasi akan mudah dijawab.",
        ],
      },
    ],
    sources: [
      "Prinsip keamanan data dan kerahasiaan informasi instansi",
      "Etika bermedia sosial dan literasi digital bagi ASN",
      "Nilai dasar ASN BerAKHLAK — Adaptif",
      "Pelayanan digital dan pendampingan warga yang belum melek digital",
    ],
  },
  "tkp-profesionalisme": {
    sections: [
      {
        heading: "Apa Itu Profesionalisme",
        body: [
          "Profesionalisme adalah cara bekerja seorang ASN yang bisa dipercaya: jujur, disiplin, bertanggung jawab, dan memegang aturan. Kata ini sering terdengar abstrak, tetapi dalam kehidupan sehari-hari wujudnya sangat konkret: datang tepat waktu, menyelesaikan tugas sesuai target, mengakui kesalahan, dan menolak segala bentuk penyimpangan, sekecil apa pun. Materi ini akan membahas satu per satu wujud itu dengan contoh yang bisa kamu bayangkan.",
          "Soal profesionalisme menguji hal-hal itu lewat dilema sehari-hari. Misalnya atasan menyuruhmu melompati antrean untuk kerabatnya, atau rekan kerja mengajakmu memalsukan laporan, atau seseorang menawarkan uang agar urusannya dipercepat. Dalam situasi seperti itu, yang dinilai bukan pengetahuanmu tentang aturan, melainkan keberanianmu memegang aturan ketika ada tekanan.",
          "Materi ini adalah salah satu bagian TKP yang paling menentukan, karena integritas adalah fondasi seluruh pelayanan publik. ASN yang tidak jujur tidak bisa dipercaya melayani siapa pun, betapa pun pintar dan ramahnya ia. Karena itu pahami materi ini baik-baik.",
        ],
      },
      {
        heading: "Integritas: Jujur Meski Tak Diawasi",
        body: [
          "Integritas berarti kejujuran yang tidak bergantung pada ada atau tidaknya yang mengawasi. Orang yang berintegritas tidak mencuri waktu kerja hanya karena atasannya sedang tidak di kantor, tidak memalsukan laporan hanya karena tidak ada yang memeriksa, dan tidak menerima gratifikasi hanya karena tidak ada yang tahu. Ia jujur karena memang begitu seharusnya, bukan karena takut ketahuan.",
          "Gratifikasi adalah pemberian dalam bentuk apa pun yang berkaitan dengan jabatan, dan pungli adalah pungutan liar di luar ketentuan. Keduanya sering dibungkus dengan bahasa yang halus, misalnya 'uang terima kasih', 'uang rokok', atau 'biaya percepatan', tetapi intinya sama: imbalan yang tidak seharusnya. Dalam soal TKP, pilihan apa pun yang menerima atau membenarkan gratifikasi dan pungli selalu bernilai paling rendah.",
          "Sikap yang benar adalah menolak dengan sopan dan tegas, lalu tetap melayani sesuai aturan. Misalnya ada warga yang menyelipkan uang agar berkasnya dipercepat, jawaban terbaik adalah menolak uang itu dengan baik, menjelaskan bahwa semua berkas diproses sesuai antrean, lalu tetap membantu warga tersebut menyelesaikan urusannya. Menolak imbalan tidak berarti menolak melayani: warga tetap dibantu, hanya saja tanpa jalan pintas.",
        ],
      },
      {
        heading: "Disiplin dan Tanggung Jawab",
        body: [
          "Disiplin adalah kebiasaan menaati aturan dan waktu tanpa perlu diingatkan. Datang tepat waktu, menyelesaikan tugas sebelum batas waktu, dan mengikuti prosedur yang berlaku adalah wujud disiplin yang paling dasar. Disiplin memang terlihat sepele, tetapi ia adalah bukti paling nyata bahwa seseorang bisa dipercaya memegang amanah yang lebih besar.",
          "Tanggung jawab adalah pasangannya: kesediaan menanggung akibat dari perbuatan sendiri. ASN yang bertanggung jawab mengakui kesalahannya ketika ia salah, meminta maaf bila perlu, dan memperbaikinya, bukan menyalahkan rekan kerja, menyalahkan sistem, atau menyalahkan warga. Dalam soal TKP, pilihan yang mengakui kesalahan dan memperbaikinya selalu bernilai tinggi, sedangkan pilihan yang melempar kesalahan selalu bernilai rendah.",
          "Contoh yang sering muncul: kamu membuat kesalahan dalam sebuah dokumen dan atasanmu belum menyadarinya. Sikap terbaik adalah memberitahukan kesalahan itu dan memperbaikinya, bukan berharap tidak ada yang tahu. Memang terasa tidak nyaman, tetapi justru di situlah integritas dan tanggung jawab diuji: apakah kamu jujur ketika jujur itu merugikanmu?",
        ],
      },
      {
        heading: "Netralitas ASN",
        body: [
          "Netralitas berarti ASN tidak berpihak dalam politik praktis saat menjalankan tugas. Ia melayani semua warga secara adil, apa pun pilihan politik mereka, dan tidak menggunakan jabatan atau fasilitas negara untuk mendukung salah satu pihak. Netralitas bukan berarti ASN tidak boleh punya pandangan politik, melainkan ia tidak boleh membiarkan pandangan itu memengaruhi pelayanan dan pekerjaannya.",
          "Dalam praktiknya, netralitas bisa diuji oleh situasi yang tampak sepele, misalnya diminta membagikan konten kampanye di media sosial, atau diminta mendahulukan warga yang mendukung pihak tertentu. Sikap yang benar adalah menolak dengan sopan dan tetap bersikap adil kepada semua pihak, karena ASN adalah pelayan seluruh masyarakat, bukan pelayan satu golongan. Fasilitas negara pun tidak boleh dipakai untuk kepentingan satu pihak.",
          "Dalam soal TKP, pilihan yang menunjukkan netralitas dan keadilan kepada semua pihak selalu bernilai tinggi. Sebaliknya, pilihan yang memihak atau mendahulukan kelompok tertentu selalu bernilai rendah. Begitu pula pilihan yang memakai jabatan untuk kepentingan politik, karena jabatan adalah amanah, bukan alat.",
        ],
      },
      {
        heading: "Dilema: Atasan Menyuruh Menyalahi Aturan",
        body: [
          "Ini adalah jenis soal profesionalisme yang paling sering keluar dan paling penting dipahami. Bayangkan atasanmu memintamu mempercepat pengurusan berkas kerabatnya dengan melompati antrean, atau memintamu mengubah data agar sesuai dengan keinginannya. Kamu berada di antara dua tekanan: mematuhi atasan atau memegang aturan.",
          "Jawaban terbaik adalah menolak dengan sopan dan berpegang pada aturan. Menolak bukan berarti membangkang, melainkan menyampaikan dengan bahasa yang baik bahwa semua berkas diproses sesuai antrean dan aturan yang berlaku, lalu menawarkan bantuan yang masih dalam koridor aturan, misalnya menjelaskan syarat yang harus dilengkapi. Sikap ini menunjukkan integritas sekaligus rasa hormat kepada atasan.",
          "Yang harus dihindari adalah dua ekstrem: menuruti perintah yang salah karena takut kepada atasan, dan menolak dengan kasar atau mempermalukan atasan di depan orang lain. Yang pertama mengorbankan integritas, yang kedua mengorbankan hubungan kerja. Jalan tengahnya adalah menolak dengan sopan, menjelaskan alasannya, dan tetap membantu sebatas yang dibenarkan aturan.",
        ],
      },
      {
        heading: "Skenario Sulit: Pimpinan yang Sulit dan Tekanan Kerja",
        body: [
          "Dalam dunia kerja, kamu tidak selalu mendapat pimpinan yang mudah diajak bekerja sama. Soal TKP sering menghadirkan pimpinan yang kasar, kaku, atau sewenang-wenang, lalu menanyakan bagaimana sikapmu. Misalnya, pimpinanmu sering memarahi bawahan di depan umum, atau pimpinanmu menolak semua usulan tanpa memberi alasan. Dalam situasi seperti ini, jawaban terbaik bukan melawan pimpinan di depan umum, bukan pula diam dan memendam, melainkan tetap profesional dan menyampaikan pendapat dengan tenang melalui jalur yang tepat.",
          "Kuncinya adalah membedakan antara sikap yang tidak menyenangkan dan pelanggaran aturan. Kalau pimpinan hanya galak tetapi tidak melanggar aturan, cara terbaik adalah bersikap sabar, bekerja dengan baik, dan menyampaikan masukan pada saat yang tepat, misalnya dalam pertemuan tertutup. Kalau pimpinan sudah melanggar aturan, misalnya menyalahgunakan wewenang atau memotong hak bawahan, barulah kamu melaporkannya melalui jalur resmi, misalnya ke atasan yang lebih tinggi atau ke unit pengawasan internal. Urutan ini penting: komunikasikan dulu, laporkan bila sudah melanggar.",
          "Tekanan kerja juga sering muncul dalam soal profesionalisme, misalnya kamu diberi tugas dengan tenggat yang sangat mepet sementara rekanmu sedang cuti. Dalam situasi seperti ini, jawaban terbaik adalah tetap menyelesaikan tugas dengan mengutamakan yang paling penting, meminta bantuan bila perlu, dan berkomunikasi dengan atasan tentang kondisi yang sebenarnya. Soal profesionalisme selalu menghargai sikap yang tenang, bertanggung jawab, dan terbuka, bukan sikap yang panik, menyalahkan orang lain, atau mengorbankan kualitas demi mengejar tenggat.",
        ],
      },
      {
        heading: "Cara Menjawab Soal Profesionalisme",
        body: [
          "Saat menjawab soal profesionalisme, tanyakan pada dirimu: pilihan mana yang paling jujur, paling disiplin, dan paling bertanggung jawab? Pilihan yang menolak gratifikasi, mengakui kesalahan, dan memegang aturan hampir selalu bernilai 5. Kalau kamu menemukan opsi yang mengandung kata 'menolak dengan sopan', 'melaporkan sesuai prosedur', atau 'memperbaiki kesalahan', kemungkinan besar itulah jawaban terbaik.",
          "Waspadai opsi yang tampak praktis tetapi mengorbankan integritas, misalnya 'menuruti atasan agar tidak bermasalah', 'menerima saja karena semua orang melakukannya', atau 'menyalahkan orang lain agar aman'. Alasan 'semua orang melakukannya' tidak pernah membuat sebuah pelanggaran menjadi benar, dan soal TKP selalu menilai sikap seperti itu dengan nilai rendah. Kalau semua orang melakukan kesalahan, yang benar tetap yang menolak ikut melakukannya.",
          "Terakhir, ingat bahwa profesionalisme bukan soal menjadi kaku atau tidak berperasaan. ASN yang profesional tetap ramah dan membantu, hanya saja ia tidak pernah menukar kejujuran dengan kenyamanan. Ia menolak dengan sopan, menjelaskan dengan sabar, dan melayani dengan adil, dan itulah kombinasi yang dicari soal TKP.",
        ],
      },
    ],
    sources: [
      "Undang-Undang tentang Aparatur Sipil Negara",
      "Prinsip integritas, antigratifikasi, dan antipungli",
      "Netralitas ASN dalam peraturan perundang-undangan",
      "Nilai dasar ASN BerAKHLAK — Akuntabel dan Loyal",
    ],
  },
  "tkp-anti-radikalisme": {
    sections: [
      {
        heading: "Apa Itu Radikalisme",
        body: [
          "Radikalisme adalah paham yang menginginkan perubahan mendasar dalam tatanan masyarakat atau negara, dan memperjuangkannya dengan cara kekerasan atau pemaksaan. Kata kuncinya ada dua: perubahan mendasar dan cara yang memaksa. Tidak semua keinginan berubah itu radikal, yang membuatnya radikal adalah penolakan terhadap jalan damai dan musyawarah, lalu memilih kekerasan, ancaman, atau pemaksaan kehendak kepada orang lain.",
          "Radikalisme bisa muncul dalam berbagai bentuk, dari ajakan mengganti dasar negara dengan ideologi lain sampai seruan untuk memusuhi kelompok yang berbeda keyakinan. Yang perlu dipahami, radikalisme bukan soal agama tertentu, melainkan soal cara berpikir: merasa paling benar, menolak perbedaan, dan membenarkan kekerasan demi tujuan. Karena itu, mengenali radikalisme berarti mengenali cara berpikirnya, bukan sekadar mengenali simbol atau kelompoknya.",
          "Sebagai ASN, kamu wajib memahami batas ini dengan jelas, karena soal anti-radikalisme menguji kesetiaanmu pada Pancasila dan UUD 1945 serta kemampuanmu mengenali dan menyikapi paham radikal di lingkungan sekitar. Materi ini akan membahas satu per satu sikap yang diharapkan darimu. Tenang saja, polanya jelas dan mudah dikenali begitu kamu memahaminya.",
        ],
      },
      {
        heading: "Pancasila dan UUD 1945 Bukan untuk Ditawar",
        body: [
          "Pancasila adalah dasar negara dan ideologi negara, tercantum dalam Pembukaan UUD 1945, dan menjadi kesepakatan bersama seluruh bangsa Indonesia. Setia pada Pancasila berarti menerima bahwa Indonesia adalah negara yang berketuhanan, berperikemanusiaan, bersatu, bermusyawarah, dan berkeadilan sosial, dan tidak ada ideologi lain yang boleh menggantikannya. Kesepakatan ini bukan sekadar sejarah, melainkan janji bersama yang masih berlaku sampai hari ini.",
          "Kesetiaan ini juga berarti kewajiban bela negara, sebagaimana diatur dalam Pasal 27 ayat (3) dan Pasal 30 UUD 1945. Bela negara tidak harus menjadi tentara: menjaga persatuan, menolak paham yang memecah belah, dan bekerja dengan jujur untuk masyarakat adalah wujud bela negara sehari-hari. Setiap ASN, apa pun jabatannya, memikul kewajiban yang sama.",
          "Dalam soal TKP, pilihan yang menunjukkan kesetiaan pada Pancasila dan UUD 1945 selalu bernilai tinggi, sedangkan pilihan yang membenarkan penggantian dasar negara, menoleransi ajakan mengganti Pancasila, atau bersikap acuh terhadap paham yang bertentangan dengannya selalu bernilai rendah. Tidak ada jalan tengah dalam hal ini: kesetiaan pada dasar negara bukan hal yang bisa ditawar. Kalau kamu ragu di antara dua pilihan, pilihlah yang paling tegas membela Pancasila.",
        ],
      },
      {
        heading: "Moderasi Beragama: Seimbang dan Menghargai",
        body: [
          "Moderasi beragama berarti menjalankan agama secara seimbang: taat beragama tanpa berlebihan, dan menghormati perbedaan tanpa mengorbankan keyakinan sendiri. Orang yang moderat beribadah dengan sungguh-sungguh, tetapi tidak memaksakan keyakinannya kepada orang lain dan tidak menganggap orang yang berbeda dengannya sebagai musuh. Ia memegang teguh keyakinannya sendiri sambil tetap menghormati keyakinan orang lain.",
          "Lawan dari moderasi adalah ekstremisme, yaitu sikap beragama yang kaku, merasa paling benar, dan memusuhi siapa pun yang berbeda. Ekstremisme bisa muncul dalam bentuk yang halus, misalnya menolak bertetangga dengan orang yang berbeda keyakinan, atau dalam bentuk yang keras, misalnya mengajak kekerasan atas nama agama. Keduanya sama-sama bertentangan dengan nilai Pancasila, terutama sila pertama dan sila ketiga.",
          "Dalam soal TKP, pilihan yang menunjukkan sikap moderat — menghormati perbedaan, menolak ekstremisme, dan menjaga kerukunan — selalu bernilai tinggi. Sebaliknya, pilihan yang membenarkan pemaksaan keyakinan, memusuhi kelompok lain, atau menganggap perbedaan sebagai ancaman selalu bernilai rendah. Moderasi bukan berarti setengah-setengah beragama, melainkan beragama dengan cara yang seimbang dan tidak memusuhi.",
        ],
      },
      {
        heading: "Konten Radikal di Sekitar Kita",
        body: [
          "Radikalisme hari ini lebih sering menyebar lewat layar ponsel daripada lewat pidato di lapangan. Video, pesan berantai, dan unggahan media sosial yang mengajak mengganti Pancasila, memusuhi kelompok tertentu, atau membenarkan kekerasan bisa sampai ke siapa saja, termasuk ke lingkungan kerja. Sebagai ASN, kamu harus bisa mengenali konten seperti itu dan menyikapinya dengan benar.",
          "Langkah pertama adalah tidak menyebarkannya, apa pun alasannya. Meneruskan konten radikal dengan dalih 'supaya orang lain waspada' tetap saja menyebarkan paham itu lebih luas, dan bisa membuatmu ikut terseret. Langkah kedua adalah mengingatkan pengirimnya dengan baik bila memungkinkan, dan langkah ketiga, bila konten itu terus disebarkan atau berasal dari lingkungan kerja, adalah melaporkannya melalui jalur resmi di instansimu.",
          "Dalam soal TKP, pilihan yang menolak, mengingatkan, dan melapor melalui jalur resmi selalu bernilai tinggi. Pilihan yang menyebarkan, membiarkan, atau ikut menyetujui selalu bernilai rendah. Ingat, melaporkan bukan berarti mengadu domba, melainkan melindungi lingkungan kerja dan masyarakat dari paham yang merusak persatuan.",
        ],
      },
      {
        heading: "Sikap Sehari-hari Seorang ASN Moderat",
        body: [
          "Menjadi ASN yang anti-radikal bukan berarti kamu harus berdebat dengan semua orang yang berbeda pendapat, melainkan tercermin dalam sikap sehari-hari: menghormati rekan kerja yang berbeda keyakinan, tidak ikut menyebarkan ujaran kebencian, dan menjadi teladan kerukunan di lingkungan tempat tinggalmu. Sikap-sikap kecil seperti ini justru yang paling dinilai, karena radikalisme tumbuh dari kebiasaan meremehkan perbedaan. Teladan yang konsisten jauh lebih kuat daripada ceramah yang sesekali.",
          "Di lingkungan kerja, kamu bisa menjadi penyejuk dengan cara sederhana: tidak ikut tertawa saat ada yang mengejek keyakinan orang lain, mengajak rekan yang berbeda untuk bekerja sama, dan menunjukkan bahwa perbedaan tidak menghalangi kerja sama. Di lingkungan tempat tinggal, kamu bisa aktif dalam kegiatan bersama yang melibatkan semua warga tanpa membeda-bedakan. Kedua lingkungan itu sama-sama ladang untuk menunjukkan sikap moderat.",
          "Sikap moderat juga berarti berani bersikap ketika diperlukan. Kalau ada rekan kerja yang membagikan konten yang mengajak mengganti Pancasila, sikap yang benar adalah menolak ajakan itu, mengingatkannya dengan baik, dan bila berlanjut, melapor melalui jalur resmi. Diam dalam situasi seperti itu bukan netralitas, melainkan pembiaran.",
        ],
      },
      {
        heading: "Cara Menjawab Soal Anti-Radikalisme",
        body: [
          "Strategi menjawab soal anti-radikalisme cukup jelas: cari pilihan yang paling setia pada Pancasila, paling menghargai perbedaan, dan paling tegas menolak kekerasan. Kalau soalnya tentang ajakan mengganti dasar negara, jawabannya adalah menolak dan berpegang pada Pancasila. Kalau soalnya tentang konten radikal, jawabannya adalah tidak menyebarkan dan melapor melalui jalur resmi.",
          "Perhatikan kata-kata dalam opsi. Kata 'menolak', 'melaporkan melalui jalur resmi', 'menghormati perbedaan', dan 'moderasi' adalah tanda jawaban yang baik. Kata 'membiarkan', 'menyebarkan', 'menyetujui', dan 'memaksakan' adalah tanda jawaban yang buruk. Polanya konsisten, dan setelah kamu memahaminya, soal bagian ini menjadi salah satu yang paling mudah ditebak jawabannya.",
          "Satu hal yang perlu diingat: soal anti-radikalisme tidak menguji seberapa keras kamu beragama, melainkan seberapa moderat dan setia kamu pada dasar negara. Jangan tertukar antara ketegasan beragama dan ekstremisme: orang yang taat beragama tetapi menghormati perbedaan adalah teladan moderasi, sedangkan orang yang memaksakan keyakinannya kepada orang lain adalah yang dinilai negatif. Pegang perbedaan itu baik-baik, karena di situlah letak kunci jawaban soal bagian ini.",
        ],
      },
    ],
    sources: [
      "Pembukaan UUD 1945 — Pancasila sebagai dasar negara",
      "UUD 1945 tentang bela negara (Pasal 27 ayat 3 dan Pasal 30)",
      "Prinsip moderasi beragama: seimbang, menghormati perbedaan, menolak ekstremisme",
    ],
  },
};

/** Semua materi bacaan, digabung per seksi. */
export const MATERIAL_READING: Record<string, MaterialReading> = {
  ...READING_TWK,
  ...READING_TIU,
  ...READING_TKP,
};

/** Materi bacaan untuk satu slug, atau undefined bila belum ada. */
export function getMaterialReading(slug: string): MaterialReading | undefined {
  return MATERIAL_READING[slug];
}
