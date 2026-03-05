const API_URL = "https://69a77efa2cd1d0552690c46c.mockapi.io/api/assigment/products"; 

async function Save() {
    const fullname = document.getElementById("name").value;
    const id_pro = document.getElementById("id").value;
    const name_pro = document.getElementById("name_pro").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    const discount = quantity >= 10 ? 0.1 : 0;
    const amount = quantity * price;
    const total = amount - amount * discount;

    const data = {
        fullname,
        id_pro,
        name_pro,
        quantity,
        price,
        discount,
        amount,
        total
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Add failed");
        }

        alert("Save success");
    } catch (error) {
        console.error(error);
        alert("Error when saving");
    }
}