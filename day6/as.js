const apiUrl = "https://69a77efa2cd1d0552690c46c.mockapi.io/api/assigment/table";

function fetchData(url, data) {
    try {
        const response =  fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Thêm phòng thất bại");
        }

        const result =  response.json();
        alert("Thêm phòng thành công!");
        console.log(result);

    } catch (error) {
        console.error(error.message);
    }
}
function getRooms() {
    try {
        const response = fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Không lấy được dữ liệu");
        }

        const rooms = response.json();
        renderRooms(rooms);

    } catch (error) {
        console.error(error.message);
    }
}
function renderRooms(rooms) {
    const container = document.getElementById("roomContainer");
    container.innerHTML = "";

    rooms.forEach(room => {
        const card = document.createElement("div");
        card.className = "room-card";

        card.innerHTML = `
            <img src="${room.image}" alt="room">
            <div class="room-title">${room.name}</div>
            <div>${room.describe}</div>
            <div class="room-price">${room.quantity} đ</div>
            <button class="book-btn">Đặt Ngay</button>
        `;

        container.appendChild(card);
    });
}

function getData() {
    let name = document.getElementById("name_room").value;
    let describe = document.getElementById("describe_room").value;
    let quantity = document.getElementById("quantity").value;
    let image = document.getElementById("image").value;
    const newData = {
        name,
        describe,
        quantity,
        image
    };

    fetchData(apiUrl, newData);
}
document.getElementById("addRoomBtn")
        .addEventListener("click", getData);
document.getElementById("showRoombtn")
        .addEventListener("click", getRooms);