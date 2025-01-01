// Firebase SDK 초기화
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyAzG-BIGsqncyy1OqNw3umz3MSteWyjmBg",
    authDomain: "lungsout-5afc5.firebaseapp.com",
    databaseURL: "https://lungsout-5afc5-default-rtdb.firebaseio.com",
    projectId: "lungsout-5afc5"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 학생 데이터
const students = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김철수" },
    { id: 3, name: "이영희" },
];

// 테이블 생성
const table = document.getElementById("attendanceTable");
students.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td><input type="checkbox" data-id="${student.id}"></td>
    `;
    table.appendChild(row);
});

// 출석 저장
document.getElementById("saveAttendance").addEventListener("click", () => {
    const attendance = {};
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        attendance[checkbox.getAttribute("data-id")] = checkbox.checked;
    });

    set(ref(db, "attendance"), attendance)
        .then(() => alert("출석 저장 완료"))
        .catch(err => console.error(err));
});
