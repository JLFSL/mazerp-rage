-- --------------------------------------------------------
-- Host:                         dev.five-multiplayer.net
-- Server version:               5.7.18-0ubuntu0.16.04.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for admin_mazerp
CREATE DATABASE IF NOT EXISTS `admin_mazerp` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `admin_mazerp`;

-- Dumping structure for table admin_mazerp.houses
CREATE TABLE IF NOT EXISTS `houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ownerid` int(11) NOT NULL,
  `interiorname` varchar(64) NOT NULL,
  `position_x` float NOT NULL,
  `position_y` float NOT NULL,
  `position_z` float NOT NULL,
  `rotation_x` float NOT NULL,
  `rotation_y` float NOT NULL,
  `rotation_z` float NOT NULL,
  `interior_x` float NOT NULL,
  `interior_y` float NOT NULL,
  `interior_z` float NOT NULL,
  `locked` tinyint(1) NOT NULL DEFAULT '1',
  `rentable` tinyint(1) NOT NULL DEFAULT '0',
  `hasgarage` tinyint(1) NOT NULL DEFAULT '0',
  `forsale` tinyint(1) NOT NULL DEFAULT '1',
  `price` int(11) NOT NULL DEFAULT '0',
  `rentprice` int(11) NOT NULL DEFAULT '0',
  `maxrenters` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table admin_mazerp.houses: ~0 rows (approximately)
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
/*!40000 ALTER TABLE `houses` ENABLE KEYS */;

-- Dumping structure for table admin_mazerp.players
CREATE TABLE IF NOT EXISTS `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(256) NOT NULL,
  `staff` int(11) NOT NULL DEFAULT '0',
  `health` float NOT NULL DEFAULT '100',
  `armour` float NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT '10',
  `bankmoney` int(11) NOT NULL DEFAULT '0',
  `position_x` float NOT NULL DEFAULT '0',
  `position_y` float NOT NULL DEFAULT '0',
  `position_z` float NOT NULL DEFAULT '0',
  `heading` float NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Dumping data for table admin_mazerp.players: ~4 rows (approximately)
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` (`id`, `username`, `staff`, `health`, `armour`, `money`, `bankmoney`, `position_x`, `position_y`, `position_z`, `heading`, `created_at`, `updated_at`, `last_login`) VALUES
  (1, 'John McKenzie', 7, 100, 0, 5000, 0, -1037.24, -2737.61, 20.1693, 328.919, '2017-05-22 03:13:30', '2017-05-27 05:49:53', '2017-05-27 05:49:53'),
  (2, 'Rustic7', 0, 100, 0, 10, 0, -1037.24, -2737.61, 20.1693, 328.919, '2017-05-22 03:31:39', '2017-05-27 01:25:47', '2017-05-22 08:16:42'),
  (3, 'JustStayAlive', 9, 100, 0, 5000, 0, -795.779, -2195.87, 16.6642, 168.127, '2017-05-22 05:07:05', '2017-05-27 01:25:49', '2017-05-24 05:29:48'),
  (4, 'dasMEHDI', 0, 100, 0, 10, 0, -1037.24, -2737.61, 13.7566, 327.503, '2017-05-22 08:17:16', '2017-05-27 01:25:50', '2017-05-22 08:17:16'),
  (12, 'MrBoolean', 0, 100, 0, 10, 0, -1037.24, -2737.61, 20.1693, 328.919, '2017-06-01 13:31:07', '2017-06-01 13:41:10', '2017-06-01 13:41:10');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;

-- Dumping structure for table admin_mazerp.vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `factionid` int(11) NOT NULL DEFAULT '-1',
  `ownerid` int(11) NOT NULL DEFAULT '-1',
  `model_name` varchar(24) NOT NULL,
  `position_x` float NOT NULL,
  `position_y` float NOT NULL,
  `position_z` float NOT NULL,
  `rotation_x` float NOT NULL,
  `rotation_y` float NOT NULL,
  `rotation_z` float NOT NULL,
  `color_1` int(3) NOT NULL,
  `color_2` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table admin_mazerp.vehicles: ~0 rows (approximately)
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` (`id`, `factionid`, `ownerid`, `model_name`, `position_x`, `position_y`, `position_z`, `rotation_x`, `rotation_y`, `rotation_z`, `color_1`, `color_2`) VALUES
  (1, -1, -1, 'adder', 0, 0, 75, 0, 0, 0, 2, 5);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
