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
