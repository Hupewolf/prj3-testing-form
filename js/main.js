const form = document.getElementById("formDK");
const resultList = document.getElementById("resultList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Lấy dữ liệu từ input
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const note = document.getElementById("note").value;

    // Tạo một khối mới
    const box = document.createElement("div");
    box.className = "item-box";

    box.innerHTML = `
        <p><strong>Họ tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p><strong>Ghi chú:</strong> ${note}</p>
    `;

    // Thêm vào danh sách
    resultList.appendChild(box);

    // Xóa form sau khi gửi
    form.reset();
});