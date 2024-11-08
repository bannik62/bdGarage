CREATE DATABASE IF NOT EXISTS db_garage;
USE db_garage;

CREATE TABLE IF NOT EXISTS vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(100) NOT NULL,
    build YEAR NOT NULL,
    carburant VARCHAR(50) NOT NULL,
    couleur VARCHAR(50) NOT NULL,
    km INT NOT NULL,
    controle_technique DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
