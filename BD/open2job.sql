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
CREATE TABLE IF NOT EXISTS `open2job`.`cv_objetivos` (
  `idcv_objetivos` INT NOT NULL AUTO_INCREMENT,
  `iduser` INT NOT NULL,
  `objetivo_personal` TEXT NOT NULL,
  `objetivo_profesional` TEXT NOT NULL,
  PRIMARY KEY (`idcv_objetivos`),
  CONSTRAINT `fk_cv_objetivo___cv_contacto__1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_experiencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `open2job`.`cv_experiencias` (
  `idcv_experiencia` INT NOT NULL AUTO_INCREMENT,
  `iduser` INT NOT NULL,
  `funcion` VARCHAR(255) NOT NULL,
  `empresa` VARCHAR(255) NOT NULL,
  `lugar` VARCHAR(100) NOT NULL,
  `finicio` DATE NOT NULL,
  `ffin` DATE NULL,
  `actual` TINYINT NOT NULL,
  `experiencia` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idcv_experiencia`),
  CONSTRAINT `fk_cv_experiencias_cvcontacto__1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_hardskills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `open2job`.`cv_hardskills` (
  `idcv_hardskills` INT NOT NULL AUTO_INCREMENT,
  `iduser` INT NOT NULL,
  `centro` VARCHAR(255) NOT NULL,
  `diploma` VARCHAR(255) NULL,
  `lugar` VARCHAR(45) NOT NULL,
  `fgraduacion` VARCHAR(4) NOT NULL,
  `formacion` VARCHAR(255) NOT NULL,
  `actual` TINYINT(1) NULL,
  PRIMARY KEY (`idcv_hardskills`),
  CONSTRAINT `fk_cv_hardskills_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_softskills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `open2job`.`cv_softskills` (
  `idcv_softskills` INT NOT NULL AUTO_INCREMENT,
  `iduser` INT NOT NULL,
  `habilidad` VARCHAR(100) NOT NULL,
  `explicacion` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idcv_softskills`),
  CONSTRAINT `iduser`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_idiomas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `open2job`.`cv_idiomas` (
  `idcv_idiomas` INT NOT NULL AUTO_INCREMENT,
  `iduser` INT NOT NULL,
  `idioma` VARCHAR(45) NOT NULL,
  `nivel` VARCHAR(45) NULL,
  `certificado` TINYINT NULL,
  `fcertif` VARCHAR(45) NULL,
  PRIMARY KEY (`idcv_idiomas`),
  CONSTRAINT `fk_Idioma_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_techs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `open2job`.`cv_techs` (
  `idcv_techs` INT NOT NULL AUTO_INCREMENT,
  `tecnologia` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idcv_techs`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`cv_hobbies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `open2job`.`cv_hobbies` (
  `idcv_hobbies` INT NOT NULL AUTO_INCREMENT,
  `interes` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idcv_hobbies`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open2job`.`techs_contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `open2job`.`techs_contacto` (
  `iduser` INT NOT NULL,
  `idcv_techs` INT NOT NULL,
  PRIMARY KEY (`iduser`, `idcv_techs`),
  CONSTRAINT `fk_cv_techs_has_cv_contacto_cv_techs1`
    FOREIGN KEY (`idcv_techs`)
    REFERENCES `open2job`.`cv_techs` (`idcv_techs`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cv_techs_has_cv_contacto_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `open2job`.`hobbies_contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `open2job`.`hobbies_contacto` (
  `iduser` INT NOT NULL,
  `idcv_hobbies` INT NOT NULL,
  PRIMARY KEY (`idcv_hobbies`, `iduser`),
  CONSTRAINT `fk_cv_hobbies_has_cv_contacto_cv_hobbies1`
    FOREIGN KEY (`idcv_hobbies`)
    REFERENCES `open2job`.`cv_hobbies` (`idcv_hobbies`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cv_hobbies_has_cv_contacto_cv_contacto1`
    FOREIGN KEY (`iduser`)
    REFERENCES `open2job`.`cv_contacto` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
