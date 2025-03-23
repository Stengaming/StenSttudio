<!DOCTYPE html>
<html lang="nl">
<head>-sectie:<link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
            margin: 0;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 300px;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            width: 100%;
            padding: 10px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="container" id="login-container">
        <h2>Login</h2>
        <input type="text" id="login-user" placeholder="Gebruikersnaam" required>
        <input type="password" id="login-pass" placeholder="Wachtwoord" required>
        <button onclick="login()">Inloggen</button>
    </div>

    <script>
        function login() {
            let user = document.getElementById("login-user").value;
            let pass = document.getElementById("login-pass").value;
            
            if (user === "admin" && pass === "1234") {
                window.location.href = "test.js";
            } else {
                alert("Ongeldige inloggegevens!");
            }
        }
    </script>
</body>
</html>
