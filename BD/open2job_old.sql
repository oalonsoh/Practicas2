-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema open2job
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `open2job` ;

-- -----------------------------------------------------
-- Schema open2job
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `open2job` DEFAULT CHARACTER SET utf8 ;
USE `open2job` ;

-- -----------------------------------------------------
-- Table `open2job`.`cv_contacto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open2job`.`cv_contacto` ;

CREATE TABLE IF NOT EXISTS `open2job`.`cv_contacto` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `email2` VARCHAR(255) NULL,
  `telf1` VARCHAR(45) NOT NULL,
  `telf2` VARCHAR(45) NULL,
  `direccion` VARCHAR(255) NOT NULL,
  `poblacion` VARCHAR(100) NOT NULL,
  `cp` CHAR(5) NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  `permiso_conducir` TINYINT NULL,
  `estado_civil` VARCHAR(20) NULL,
  `fnacimiento` VARCHAR(10) NOT NULL,
  `genero` VARCHAR(2) NULL,
  `linkedin` VARCHAR(225) NULL,
  `facebook` VARCHAR(225) NULL,
  `instagram` VARCHAR(225) NULL,
  `twitter` VARCHAR(225) NULL,
  `web` VARCHAR(225) NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_objetivos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open2job`.`cv_objetivos` ;

CREATE TABLE IF NOT EXISTS `open2job`.`cv_objetivos` (
  `iduser` INT NOT NULL,
  `objetivo_personal` VARCHAR(255) NOT NULL,
  `objetivo_profesional` VARCHAR(255) NOT NULL,
  CONSTRAINT `fk_cv_objetivo___cv_contacto__1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_experiencias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open2job`.`cv_experiencias` ;

CREATE TABLE IF NOT EXISTS `open2job`.`cv_experiencias` (
  `iduser` INT NOT NULL,
  `funcion` VARCHAR(255) NOT NULL,
  `empresa` VARCHAR(255) NOT NULL,
  `lugar` VARCHAR(100) NOT NULL,
  `finicio` DATE NOT NULL,
  `ffin` DATE NULL,
  `actual` TINYINT NOT NULL,
  `experiencia` VARCHAR(255) NOT NULL,
  CONSTRAINT `fk_cv_experiencias_cvcontacto__1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_hardskills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open2job`.`cv_hardskills` ;

CREATE TABLE IF NOT EXISTS `open2job`.`cv_hardskills` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `centro` VARCHAR(255) NOT NULL,
  `diploma` VARCHAR(255) NULL,
  `lugar` VARCHAR(45) NOT NULL,
  `fgraduacion` VARCHAR(4) NOT NULL,
  `formacion` VARCHAR(255) NOT NULL,
  `actual` TINYINT(1) NULL,
  CONSTRAINT `fk_cv_hardskills_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_idiomas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open2job`.`cv_idiomas` ;

CREATE TABLE IF NOT EXISTS `open2job`.`cv_idiomas` (
  `iduser` INT NOT NULL,
  `idioma` VARCHAR(45) NOT NULL,
  `nivel` VARCHAR(45) NULL,
  `certificado` TINYINT NULL,
  `fcertif` VARCHAR(45) NULL,
  CONSTRAINT `fk_Idioma_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_techs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open2job`.`cv_techs` ;

CREATE TABLE IF NOT EXISTS `open2job`.`cv_techs` (
  `iduser` INT NOT NULL,
  `Tecnologia` VARCHAR(225) NULL,
  CONSTRAINT `fk_cv_techs_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_softskills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open2job`.`cv_softskills` ;

CREATE TABLE IF NOT EXISTS `open2job`.`cv_softskills` (
  `iduser` INT NOT NULL,
  `habilidad` VARCHAR(45) NULL,
  `explicacion` VARCHAR(225) NULL,
  CONSTRAINT `fk_cv_softskills_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_hobbies`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open2job`.`cv_hobbies` ;

CREATE TABLE IF NOT EXISTS `open2job`.`cv_hobbies` (
  `iduser` INT NOT NULL,
  `interes` VARCHAR(225) NOT NULL,
  CONSTRAINT `fk_cv_hobbies_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
