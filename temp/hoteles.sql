CREATE TABLE `Hoteles` (
	`id` INT NOT NULL,
	`hotel_id` INT NOT NULL,
	`Nombre` VARCHAR(50) NOT NULL DEFAULT '0',
	`Direccion` VARCHAR(50) NOT NULL DEFAULT '',
	`Ciudad` VARCHAR(50) NOT NULL DEFAULT '',
	`Tipo` VARCHAR(50) NULL DEFAULT '',
	`review_nr` INT NULL DEFAULT 0,
	`id_zona` INT NOT NULL DEFAULT 0,
	PRIMARY KEY (`id`)
)
;
ALTER TABLE posadas.Hoteles MODIFY COLUMN id int(11) auto_increment NOT NULL;





CREATE TABLE `Valoreciones` (
	`id` INT NOT NULL,
	`time` VARCHAR(50) NOT NULL DEFAULT '',
	`Hotel_ID` INT NOT NULL DEFAULT 0,
	`WIFI` FLOAT NOT NULL DEFAULT 0,
	`Ubicacion` VARCHAR(50) NOT NULL DEFAULT '0',
	`Total` FLOAT NOT NULL DEFAULT 0,
	`Clean` FLOAT NOT NULL DEFAULT 0,
	`Money` VARCHAR(50) NOT NULL DEFAULT '0',
	`Personal` FLOAT NOT NULL DEFAULT 0,
	`Confort` FLOAT NOT NULL DEFAULT 0,
	`Instalaciones` FLOAT NOT NULL DEFAULT 0,
	`Servicios` FLOAT NOT NULL DEFAULT 0,
	`Calificacion` FLOAT NOT NULL DEFAULT 0,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_general_ci'
;

ALTER TABLE posadas.Valoreciones MODIFY COLUMN id int(11) auto_increment NOT NULL;
ALTER TABLE posadas.Valoreciones ADD CONSTRAINT Valoreciones_FK FOREIGN KEY (Hotel_ID) REFERENCES posadas.Hoteles(id);