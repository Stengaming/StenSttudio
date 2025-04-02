<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$password = $data['password'];

$users = [
    "admin" => ["password" => "1234", "redirect" => "/dashboard/admin.html", "cookie" => "113"],
    "sten" => ["password" => "Stenhoogterp.2013", "redirect" => "/dashboard/sten.html", "cookie" => "222"],
    "sten2" => ["password" => "Stenhoogterp2013!", "redirect" => "/dashboard/sten2.html", "cookie" => "2324"]
];

if (isset($users[$username]) && $users[$username]['password'] === $password) {
    setcookie("user", $users[$username]['cookie'], time() + (86400), "/"); // 1 dag geldig
    echo json_encode(["success" => true, "redirect" => $users[$username]['redirect']]);
} else {
    echo json_encode(["success" => false]);
}
?>
