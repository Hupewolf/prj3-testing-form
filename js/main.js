const form = document.getElementById("formDK");
const resultList = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault(); //Này kiểu khi nhấn xong submit nó không load lại trang để khỏi mất dữ liệu

    // Dạ cái này là lấy dữ liệu từ mấy ô nhập
    const first = document.getElementById("first").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const note = document.getElementById("note").value;

    // Này là kiểu tạo cái ô mới kiểu cái mình mới nhập
    const box = document.createElement("div");
    box.className = "list-container-table-row";

    box.innerHTML = `
        <p class="list-container-table-row-text name">${first} ${name}</p>
        <p class="list-container-table-row-text email"><span>Email: </span>${email}</p>
        <p class="list-container-table-row-text phone"><span>SĐT: </span>${phone}</p>
        <p class="list-container-table-row-text desc"><span>Kinh nghiệm: </span>${note}</p>
    `;

    // Thêm box vào trong resultList kiểu thêm mấy cái nội dung khi gửi submit
    resultList.appendChild(box);

    // Xóa form sau khi gửi
    form.reset();
});