-- MySQL dump 10.13  Distrib 8.0.41, for macos15 (arm64)
--
-- Host: localhost    Database: digiprop_db
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service` varchar(255) DEFAULT NULL,
  `property` varchar(255) DEFAULT NULL,
  `postcode` varchar(20) DEFAULT NULL,
  `property_value` varchar(255) DEFAULT NULL,
  `bedrooms` int DEFAULT NULL,
  `selected_date` date DEFAULT NULL,
  `selected_time` varchar(50) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `referrer_code` varchar(255) DEFAULT NULL,
  `postcode_address` varchar(20) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `county` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `payment_status` enum('pending','paid') DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `total_price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,'360 Inventory','Building','3232','£201k - £250k',2,'2025-03-06','8:00 AM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'pending','2025-03-06 18:48:07',NULL),(2,'Media Pack','house','32323','£126k - £200k',2,'2025-03-06','8:00 AM','Mohamed Arham','arhamajmal@gmail.com','0772133583',NULL,'323232','d3du3d32',NULL,'Colombo',NULL,'United Kingdom','credit-card','paid','2025-03-06 18:53:51',NULL),(3,'360 Mid-Term Inspection','house','323','£126k - £200k',3,'2025-03-06','8:00 AM','Afthi khan','khan@gmail.com','0772133583',NULL,'323233','123 Main Street',NULL,'Colombo',NULL,'United States','credit-card','paid','2025-03-06 19:22:55','300'),(4,'Level 1 RICS Condition Report Service','house','123456','Up to £125k',2,'2025-03-06','8:00 AM','Arham','arham@gmail.com','0772133583',NULL,'323232','d3du3d32',NULL,'Colombo',NULL,'United States','credit-card','paid','2025-03-06 19:52:57',NULL);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('client','partner') NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mohamed Arham','arhamajmal@gmail.com','$2b$10$cGxd1Zd58Prm4AO5l4UJSuulr6VXNEvdthmWN8K4aizsH.VV2/CsO','partner','2025-03-06 08:57:13'),(2,'Afthi Khan','afthi','$2b$10$Ps7p6FEtlORGKTNeBW1JnOOob7ohFtfiujUhjYysppB0lOQsLkcJK','client','2025-03-06 09:07:31'),(3,'Ajmal Khan','a@gmail.com','$2b$10$dSrrT5doMI5LmCPUUTOUAO3rO/cmt4whMaexE1KS2HcXS34tRGIXK','partner','2025-03-06 09:09:40'),(4,'Afka Khan','arhamal@gmail.com','$2b$10$j//bpGutDHx5.mNu6VciI.5ejvkX0SPkCPc.fJAfOLkDuplAF9lTi','client','2025-03-06 09:10:21'),(5,'John J','johnj@gmail.com','$2b$10$WaAac1EtM3AmhjryAP8LJulGA3G.nppaCZgIW1W6h50ufJ/XVV10m','client','2025-03-06 09:22:41'),(6,'Ben B','benb@gmail.com','$2b$10$uXUhK8DRjqNqDQ6g6ndpKOwb5Q5WactdELWlxAm2s4l4.DZYMI89q','client','2025-03-06 09:27:19'),(7,'Abdul haq','arham2@gmail.com','$2b$10$7S.BasbhXccyQyT.ZHaoNenUSoSDOJazHir0Qgv.2jQM1pryk8kQ2','client','2025-03-07 01:07:36');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-07 17:41:54
