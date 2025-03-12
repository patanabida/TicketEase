document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("register-form")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        alert(data.message || "Registration successful!");
    });
    
    document.getElementById("login-form")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login successful!");
        } else {
            alert("Invalid credentials");
        }
    });

    document.getElementById("book-form")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const dateOfTravel = document.getElementById("dateOfTravel").value;
        const numberOfPassengers = document.getElementById("numberOfPassengers").value;
        const token = localStorage.getItem("token");
        if (!token) return alert("Please login first");

        const response = await fetch("http://localhost:5000/api/tickets/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({ from, to, dateOfTravel, numberOfPassengers })
        });
        const data = await response.json();
        alert(data.message || "Ticket booked successfully!");
    });
});
