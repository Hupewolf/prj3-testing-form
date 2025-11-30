const form = document.getElementById("formDK");
const resultList = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Lấy dữ liệu từ input
    const first = document.getElementById("first").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const note = document.getElementById("note").value;

    // Tạo một khối mới
    const box = document.createElement("div");
    box.className = "list-container-table-row";

    box.innerHTML = `
        <p class="list-container-table-row-text name">${first} ${name}</p>
        <p class="list-container-table-row-text email"><span>Email: </span>${email}</p>
        <p class="list-container-table-row-text phone"><span>SĐT: </span>${phone}</p>
        <p class="list-container-table-row-text desc"><span>Kinh nghiệm: </span>${note}</p>
    `;

    // Thêm vào danh sách
    resultList.appendChild(box);

    // Xóa form sau khi gửi
    form.reset();
});