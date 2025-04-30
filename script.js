const questions = [
  {
    question: "1.Sebuah benda bermassa 2 kg didorong dengan gaya 10 N. Berapa percepatan benda tersebut?",
    options: ["2,5 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
    answer: 1
  },
  {
    question: "2.Berapa usaha yang dilakukan untuk mendorong benda sejauh 4 meter dengan gaya 10 N?",
    options: ["14 joule", "24 joule", "40 joule", "50 joule"],
    answer: 2
  },
  {
    question: "3.Menurut hukum Newton ketiga, jika kamu mendorong tembok, maka tembok akan…",
    options: [
      "Tidak melakukan apa-apa",
      "Menarik kamu ke depan",
      "Mendorong kamu dengan gaya yang sama dan berlawanan arah",
      "Membuat kamu terpental ke samping"
    ],
    answer: 2
  },
  {
    question: "4.Sebuah mobil bergerak dengan kecepatan tetap 60 km/jam selama 2 jam. Jarak yang ditempuh adalah?",
    options: ["30 km", "60 km", "90 km", "120 km"],
    answer: 3
  },
  {
    question: "5.Benda A dan B dipanaskan. Benda A memanas lebih cepat dari B. Apa yang bisa disimpulkan?",
    options: [
      "Benda A memiliki massa lebih besar",
      "Benda A memiliki kalor jenis lebih besar",
      "Benda A memiliki kalor jenis lebih kecil",
      "Benda A lebih padat",
    ],
    answer: 2
  },
  {
    question: "6.Seorang anak mendorong meja di atas lantai, tetapi meja tidak bergerak. Pernyataan mana yang paling tepat menjelaskan kejadian ini?",
    options: [
      "Tidak ada gaya yang bekerja pada meja",
      "Meja memiliki massa terlalu kecil", 
      "Gaya gesek antara meja dan lantai menahan gaya dorong anak",
      "Gaya dorong anak lebih besar dari gaya gesek",
    ],
    answer: 2
  },
  {
    question: "7.Sebuah bola dijatuhkan dari ketinggian tertentu. Apa yang terjadi pada energi bola saat jatuh?",
    options: [
      "Energi total bola bertambah",
      "Energi potensial berubah menjadi energi kinetik",
      "Energi kinetik berubah menjadi energi potensial",
      "Tidak ada perubahan energi",
    ],
    answer: 1
  },
  {
    question: "8.Mengapa kita bisa mendengar suara petir beberapa detik setelah melihat kilatnya?",
    options: [
      "Karena cahaya dan suara memiliki kecepatan yang sama",
      "Karena cahaya dipantulkan lebih dahulu",
      "Karena suara merambat lebih lambat dari pada cahaya",
      "Karena cahaya dibelokkan oleh udara",
    ],
    answer: 2
  },
  {
    question:  "9.Ketika penggaris plastik digosokkan ke rambut kering, lalu didekatkan ke potongan kertas kecil, potongan kertas itu tertarik ke penggaris. Fenomena ini disebabkan oleh", 
    options: [
      "Induksi magnet",
      "Gaya gravitasi",
      "Gaya listrik statis",
      "Energi kinetik",
    ],
    answer: 2
  },
  {
    question: "10.Sebuah benda dicelupkan ke dalam air dan tampak mengapung sebagian. Apa kesimpulan yang bisa diambil?",
    options: [
      "Massa jenis benda lebih besar dari air",
      "Benda mengalami gaya gravitasi lebih besar dari gaya apung",
      "massa jenis benda sama dengan air",
      "Massa jenis benda lebih kecil dari air",
    ],
    answer: 3
  },
  {
    question: "11.Apa yang terjadi pada benda jika resultan gaya yang bekerja padanya sama dengan nol?",
    options: ["Benda akan berhenti total", "Benda pasti bergerak melingkar", "Benda diam atau bergerak lurus beraturan", "Benda mengalami percepatan tetap"],
    answer: 2
  },
  {
    question: "12.Mengapa suara tidak bisa merambat di ruang hampa?",
    options: ["Karena tidak ada cahaya", "Karena suhu terlalu rendah", "Karena tidak ada medium perantara", "Karena tidak ada gaya gravitasi"],
    answer: 2
  },
  {
    question: "13.Bayangan yang dibentuk oleh cermin datar memiliki sifat...",
    options: ["Nyata dan terbalik", "Maya dan terbalik", "Maya dan tegak", "Nyata dan tegak"],
    answer: 2
  },
  {
    question: "14.Seseorang berjalan dengan kecepatan 2 m/s selama 10 detik. Berapa jarak yang ditempuh?",
    options: ["10 m", "20 m", "30 m", "40 m"],
    answer: 1
  },
  {
    question: "15.Sebuah gelombang memiliki frekuensi 5 Hz dan panjang gelombang 2 meter. Berapa cepat rambat gelombang tersebut?",
    options: ["7 m/s", "8 m/s", "10 m/s", "12 m/s"],
    answer: 2
  },
  {
    question: "16.Jika sebuah gelombang menempuh jarak 15 meter dalam waktu 3 detik, maka cepat rambat gelombangnya adalah...",
    options: ["3 m/s", "4 m/s", "5 m/s", "6 m/s"],
    answer: 2
  },
  {
    question: "17.Sebuah rangkaian memiliki hambatan 5 ohm dan dialiri arus sebesar 2 A. Berapa tegangan pada rangkaian tersebut?",
    options: ["5 V", "7 V", "10 V", "12 V"],
    answer: 2
  },
  {
    question: "18.Sebuah benda awalnya diam, lalu bergerak dengan percepatan 3 m/s² selama 5 detik. Berapa kecepatan akhirnya?",
    options: ["10 m/s", "12 m/s", "15 m/s", "18 m/s"],
    answer: 2
  },
  {
    question: "19.Apa yang dimaksud dengan kecepatan konstan?",
    options: [
      "Kecepatan yang selalu berubah setiap saat",
      "Kecepatan yang arah dan besarannya tetap",
      "Kecepatan yang hanya berubah arah saja",
      "Kecepatan yang hanya berubah besarannya"
    ],
    answer: 1
  },
  {
    question: "20.Jika sebuah benda bergerak semakin cepat setiap detik, maka benda tersebut mengalami...",
    options: [
      "Gerak lurus beraturan",
      "Percepatan",
      "Perlambatan",
      "Gaya nol"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer;

function submitName() {
  const name = document.getElementById("name-input").value.trim();
  if (name === "") {
    alert("Silakan masukkan nama Anda terlebih dahulu!");
    return;
  }

  document.getElementById("name-screen").style.display = "none";
  document.getElementById("menu-wrapper").style.display = "flex";
}

function startQuiz() {
  document.getElementById("menu-wrapper").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("back-button").style.display = "none";
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  document.getElementById("optionA").textContent = "A. " + q.options[0];
  document.getElementById("optionB").textContent = "B. " + q.options[1];
  document.getElementById("optionC").textContent = "C. " + q.options[2];
  document.getElementById("optionD").textContent = "D. " + q.options[3];

  document.getElementById("optionA").onclick = () => checkAnswer(0);
  document.getElementById("optionB").onclick = () => checkAnswer(1);
  document.getElementById("optionC").onclick = () => checkAnswer(2);
  document.getElementById("optionD").onclick = () => checkAnswer(3);

  resetTimer();
}

function checkAnswer(selected) {
  clearInterval(timer);
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function resetTimer() {
  timeLeft = 20;
  document.getElementById("timer").textContent = `Waktu: ${timeLeft}`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Waktu: ${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-container").style.display = "none";

  const correct = score;
  const wrong = questions.length - score;
  const finalScore = score * 5;

  document.getElementById("result").innerHTML = `
    <p>Jawaban Benar: ${correct}</p>
    <p>Jawaban Salah: ${wrong}</p>
    <p><strong>Skor Akhir: ${finalScore} dari 100</strong></p>
  `;

  const playerName = document.getElementById("name-input").value.trim();
  updateLeaderboard(playerName, finalScore);

  document.getElementById("back-button").style.display = "block";
}

function updateLeaderboard(name, score) {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name, score });

  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10); // Ambil hanya 10 teratas

  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

  const tableBody = document.querySelector("#leaderboard-table tbody");
  tableBody.innerHTML = "";
  leaderboard.forEach((entry) => {
    const row = `<tr><td>${entry.name}</td><td>${entry.score}</td></tr>`;
    tableBody.innerHTML += row;
  });

  document.getElementById("leaderboard").style.display = "block";
}


function returnToMenu() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("question-container").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("menu-wrapper").style.display = "flex";
  document.getElementById("back-button").style.display = "none";
}

function quitGame() {
  if (confirm("Yakin mau keluar?")) {
    window.location.href = "about:blank";
  }
}

let musicPlaying = true;

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const icon = document.getElementById("music-icon");

  if (musicPlaying) {
    music.pause();
    icon.src = "icon-off.png";
  } else {
    music.play();
    icon.src = "icon-on.png";
  }

  musicPlaying = !musicPlaying;
}
