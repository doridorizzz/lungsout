// 학생 데이터 예제
const students = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김철수" },
    { id: 3, name: "이영희" },
];

// 출석부 테이블 생성
function loadTable() {
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
}

// 출석 데이터 저장 (로컬 스토리지 활용)
function saveAttendance() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const attendance = {};
    checkboxes.forEach(box => {
        const studentId = box.getAttribute("data-id");
        attendance[studentId] = box.checked;
    });
    localStorage.setItem("attendance", JSON.stringify(attendance));
    alert("출석이 저장되었습니다!");
}

// 초기화
document.addEventListener("DOMContentLoaded", loadTable);