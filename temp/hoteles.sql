CREATE TABLE `Hoteles` (
	`id` INT(11) NOT NULL,
	-- `hotel_id` INT(11) NOT NULL,
	`Nombre` VARCHAR(50) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	`Direccion` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
	`Ciudad` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
	`Tipo` VARCHAR(50) NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
	`review_nr` INT(11) NULL DEFAULT '0',
	`id_zona` INT(11) NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`) USING BTREE
	-- UNIQUE INDEX `hotel_id` (`hotel_id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=6
;

CREATE TABLE `Conceptos` (
	`id` INT(11) NOT NULL,
	`Nombre` VARCHAR(50) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `Valoraciones` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`time` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci' ,
	`hotel_id` INT(11) NOT NULL DEFAULT '0' FOREIGN KEY references Hoteles(id),
	`valor` FLOAT NOT NULL,
	`concepto_id` INT(11) NOT NULL FOREIGN KEY references Conceptos(id),
	PRIMARY KEY (`id`) USING BTREE
	
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;