document.addEventListener("DOMContentLoaded", function() {
    var slideinBar = document.createElement("div");
    slideinBar.classList.add("slidein-bar");
    slideinBar.innerHTML = "<h2>ยินดีต้อนรับ!</h2><p>ขอบคุณที่เข้าสู่เว็บไซต์ของเรา</p>";

    document.body.appendChild(slideinBar);

    setTimeout(function() {
      slideinBar.classList.add("show");
    }, 1000); // แสดงแถบ Slide-in หลังจากผ่านไป 1 วินาที

    setTimeout(function() {
      slideinBar.classList.remove("show");
    }, 5000); // ซ่อนแถบ Slide-in หลังจากผ่านไป 5 วินาที
  });