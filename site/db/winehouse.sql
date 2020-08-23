CREATE DATABASE  IF NOT EXISTS `winehouse` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `winehouse`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: winehouse
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.38-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(50) NOT NULL,
  `number` int(11) NOT NULL,
  `apartment` varchar(5) DEFAULT NULL,
  `zipCode` varchar(10) NOT NULL,
  `city` varchar(30) NOT NULL,
  `province` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartproduct`
--

DROP TABLE IF EXISTS `cartproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '1',
  `subtotal` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartproduct`
--

LOCK TABLES `cartproduct` WRITE;
/*!40000 ALTER TABLE `cartproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `cartproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `stateId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (7,'Cervezas'),(5,'Espirituosos'),(4,'Espumantes'),(2,'Vinos Blancos'),(3,'Vinos Rosados'),(1,'Vinos Tintos'),(6,'Whiskies');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `paymentMethodId` int(11) NOT NULL,
  `shipmentOptionId` int(11) NOT NULL,
  `addressId` int(11) DEFAULT NULL,
  `shipmentCost` int(11) NOT NULL DEFAULT '0',
  `totalInvoice` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethods`
--

DROP TABLE IF EXISTS `paymentmethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paymentmethods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethods`
--

LOCK TABLES `paymentmethods` WRITE;
/*!40000 ALTER TABLE `paymentmethods` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymentmethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producers`
--

DROP TABLE IF EXISTS `producers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producers`
--

LOCK TABLES `producers` WRITE;
/*!40000 ALTER TABLE `producers` DISABLE KEYS */;
INSERT INTO `producers` VALUES (2,'Aleanna '),(6,'Alta Vista'),(18,'Antares'),(1,'Catena Zapata'),(15,'Chivas Regal'),(10,'Escorihuela Gascón'),(16,'Estrella Damm'),(12,'Jack Daniels'),(13,'Jameson'),(14,'Johnnie Walker'),(8,'Laureano Gómez'),(5,'Luigi Bosca'),(9,'Nieto Senetiner'),(4,'Rosell Boher'),(3,'Rutini Wines'),(17,'Schofferhofer'),(7,'Trapiche'),(11,'Zorzal Wines');
/*!40000 ALTER TABLE `producers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sku` varchar(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `categoryId` tinyint(4) NOT NULL,
  `price` int(11) NOT NULL,
  `imageSm` varchar(30) NOT NULL,
  `imageLg` varchar(30) NOT NULL,
  `volume` mediumint(9) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `producerId` int(11) NOT NULL,
  `varietalId` int(11) NOT NULL,
  `blend` varchar(100) DEFAULT NULL,
  `vintage` smallint(6) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  `alcohol` decimal(3,1) DEFAULT NULL,
  `elaboration` varchar(500) DEFAULT NULL,
  `aging` varchar(500) DEFAULT NULL,
  `stock` smallint(6) NOT NULL DEFAULT '0',
  `selection` varchar(2) DEFAULT NULL,
  `sale` varchar(2) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_sku` (`sku`),
  UNIQUE KEY `unique_imageSm` (`imageSm`),
  UNIQUE KEY `unique_imageLg` (`imageLg`),
  KEY `producer_idx` (`producerId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'0020110001','NICASIA VINEYARDS RED BLEND',1,650,'1_small.jpeg','1_big.jpeg',800,'Se perciben en este vino intensos y dulces sabores a ciruelas y moras maduras aportados por el Malbec, junto a sutiles notas especiadas conferidos por el Cabernet Sauvignon y el Petit Verdot. El paso por roble incrementa aún más la complejidad de este vino, otorgando ligeras notas de vanilla y café.',1,2,'90% Malbec, 6% Cabernet Sauvignon, 4% Petit Verdot',2018,'Altamira, San Carlos. Provincia de Mendoza, Argentina',13.1,'Fermentación: Max Temp Ferm. 28º, durante 11 días. 18 días maceración pelicular. Fermentación maloláctica completa.','12 meses en roble francés, 30% nuevo.',6,'on',NULL,'2020-08-11 01:09:36','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'0020110002','EL ENEMIGO MALBEC',1,1300,'2_small.jpeg','2_big.jpeg',750,'En vista un rojo rubí de alta intensidad y destellos violáceos. En nariz mucha madera. Tardó en abrirse en copa y luego del agite aparece fruta roja madura. En boca, un ataque brutal al paladar. Algo dulce y carnoso de muy buen equilibrio y acidez con taninos muy marcados.',2,2,'89% Malbec, 11% Petit Verdot',2017,'Gualtallary. Provincia de Mendoza, Argentina.',13.5,NULL,'14 meses de crianza en barricas de roble francés.',6,'on',NULL,'2020-08-11 18:58:17','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'0020110003','TRUMPETER MALBEC',1,510,'3_small.jpeg','3_bigl.jpeg',750,'Rojo violáceo brillante, seduce con sus aromas frutales (cerezas) y especiados (canela, cardamomo, pimienta negra). Posee gran cuerpo y su vivaz estructura acentúa los taninos intensos que se vuelven aterciopelados en el retrogusto.',3,2,'100% Malbec',2019,'Tupungato. Provincia de Mendoza, Argentina',13.0,'Fermentación maloláctica: 100%','7 meses. Roble: 30% americano nuevo, 30% francés nuevo y 40% americano de 2do. y 3er. uso.',6,NULL,NULL,'2020-08-12 04:25:22','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'0020110004','CASA BOHER MALBEC',1,502,'4_small.jpeg','4_big.jpeg',750,'Vista: A la vista se muestra como un vino joven de colores intensos y oscuros donde se destaca el rojo cereza. Es un vino de aspecto límpido y brillante, con lagrimas bien definidas. Nariz: A la nariz presenta frutas secas como pasas de uva y ciruelas y toques de frutas rojas como guinda y cereza. También percibimos café, vainilla y toques de cuero fresco. Boca: En boca aparecen los sabores a mermelada de ciruela, dulce de guinda más lo percibido en nariz. De gran estructura polifenólica y con taninos dulces; su riqueza alcohólica en equilibrio con su acidez lo hace muy persistente en boca.',4,2,'100% Malbec',2018,'Valle de Uco. Provincia de Mendoza, Argentina',14.3,'Cosecha manual en cajas de 20 kilogramos. Por la fecha de cosecha (Mediados de Abril) se logran frutos con muy buena maduración polifenolica y gran contenido azucarino. Se realiza una maceración en frío durante 3 días con temperaturas de 8º C . Fermentación tradicional con levaduras seleccionadas durante 20 días, con temperaturas de 25-28º C, con tres remontajes diarios.','El 60% de la masa vínica tuvo un paso de 12 meses en barricas de primer uso de roble francés.',6,NULL,'on','2020-08-12 04:33:07','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'\"001234834003','LUIGI BOSCA CABERNET SAUVIGNON',1,900,'producto-1595380910186.jpeg','producto-1595380910190.jpeg',750,'Rojo rubí, brillante, limpio. Fresco, frutado aterciopelado.Aromas de frutas rojas y negras, violetas y chocolate. De gran estructura y cuerpo, un vino de carácter y exquisita elegancia.',5,3,'100% Cabernet Sauvignon',2019,'Argentina',5.5,'Finca El Paraíso, Maipú. Provincia de Mendoza; Argentina.',NULL,10,NULL,'on','2020-08-12 05:01:19','0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'001234834324','EL ENEMIGO CHARDONNAY',2,1100,'producto-1595381652198.jpeg','producto-1595381652204.jpeg',750,'Fresco, con aporte del calcáreo y la tiza del suelo de Gualtallary, el resultado es un Chardonnay chispeante, aromático y notablemente aterciopelado en boca.',2,4,'Chardonnay',2019,'Gualtallary. Provincia de Mendoza, Argentina.',12.8,NULL,'Fermentado en barricas de segundo y tercer uso. Trabajo sobre borras para otorgar cremosidad.',6,NULL,NULL,'2020-08-12 05:17:48','0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,'001234833489','ALTA VISTA ESTATE PREMIUM TORRONTÉS',2,550,'producto-1595388069897.jpeg','producto-1595388069901.jpeg',750,'De color amarillo brillante, con aromas florales delicados, este Premium Torrontés exalta los sentidos por su frescura y vivacidad.',6,5,'100% Torrontés',2019,'Cafayate. Provincia de Salta, Argentina.',14.0,'Vendimia: Tres fechas entre marzo y abril. Tipo de piletas: Tanques de acero inoxidable con control de temperatura. Prensado: Descobajo y presión hasta 1 bar para evitar extracción de fenoles y terpenos. Maceración pre fermentaria: Pelicular de 2 horas para favorecer la extracción de precursores aromáticos. Fermentación maloláctica: No, para conservar la acidez y fruta fresca. Corte: El vino proviene del corte de las 3 fechas de cosecha que se mezcla en función de sus cualidades: 1.- Su acidez ','En tanques de acero inoxidable a baja temperatura para conservar la fruta. Guarda en botella: Ninguna para aprovechar la expresión de la fruta fresca.',12,NULL,'on','2020-08-12 05:39:20','0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'002012594567','FOND DE CAVE RESERVA SAUVIGNON BLANC',2,724,'producto-1595388472152.jpeg','producto-1595388472157.jpeg',750,'Color amarillo pálido con reflejos verdosos. Aromas intensos de ruda, hierbas frescas, frutas tropicales y notas de pomelo rosado. En boca se presenta con mucho volumen, resaltan la frescura y la persistencia. Caudaloso y de final aterciopelado.',7,6,'100% Sauvignon Blanc',2018,'Tupungato. Provincia de Mendoza, Argentina.',12.0,NULL,NULL,8,NULL,NULL,'2020-08-12 06:02:19','0000-00-00 00:00:00','0000-00-00 00:00:00'),(9,'001234936478','LAUREANO GOMEZ SEMILLÓN CHARDONNAY',2,830,'producto-1595388841597.jpeg','producto-1595388841601.jpeg',750,'Notas florales muy dulces, mezcladas con frutas, indican atractivo. En boca es suave, amplio y por demás untuoso, donde se funde el varietal expresado en frutos de carozo y miel, nota refrescante y fresco con marcada acidez.',8,1,'Semillón, Chardonnay',2019,'Valle de Uco, Mendoza',12.5,'Fermentación y crianza por separado en barricas de roble francés, completan la elaboración y estabilización natural. Luego se cortan previo al envasado.',NULL,5,'on',NULL,'2020-08-12 06:14:11','0000-00-00 00:00:00','0000-00-00 00:00:00'),(10,'00123421983','NIETO SENETINER BELIEVE IN ROSÉ',3,366,'producto-1595434723656.jpeg','producto-1595434723660.jpeg',750,'Rosado pretencioso a base de Malbec (80%) y Pinot Noir (20%), de aromas expresivos y vivaces. Paladar vibrante con una acidez protagonista y un final equilibrado.',9,1,'80% Malbec, 20% Pinot Noir',2019,'Provincia de Mendoza, Argentina',12.2,NULL,NULL,6,NULL,'on','2020-08-12 06:17:41','0000-00-00 00:00:00','0000-00-00 00:00:00'),(11,'002012555213','LUIGI BOSCA ROSÉ',3,900,'producto-1595435096355.jpeg','producto-1595435096359.jpeg',750,'Luigi Bosca Rosé es un vino seductor, mágico y hechizante, tanto por sus características aromáticas y su sabor como por su mágico color salmón. Tiene una expresión fresca en nariz y en boca, con notas florales y de frutos rojos, resaltándose la cereza. En el paladar su equilibrada acidez lo hace un vino fácil de beber, ligero, de mediana estructura y con un final de boca dulce y refrescante que recuerda a caramelos de cereza y confituras.',5,1,'Pinot Gris, Syrah',2019,'Finca Don Leoncio, Barrancas, Maipú. Provincia de Mendoza, Argentina.',12.0,'Las dos variedades se cosechan manualmente en cajas de 18 kilogramos en su momento justo de madurez y en horas tempranas de la mañana. Se hace una doble selección, primero de los racimos, y luego del despalillado, de las mejores bayas de los racimos. Luego la uva pasa a una prensa neumática hermé- tica donde se maceran en forma distintas las dos variedades: el Pinot Gris de 6 a 8 horas, mientras que el Syrah 3 horas. Luego las bayas se prensan muy suavemente. Una vez obtenido los mostos, decanta',NULL,10,NULL,NULL,'2020-08-12 06:22:53','0000-00-00 00:00:00','0000-00-00 00:00:00'),(12,'001234838008','FAMILIA GASCÓN MALBEC ROSÉ',3,395,'producto-1595435630260.jpeg','producto-1595435630263.jpeg',750,'De color rosa coral, brillante, con delicados aromas a frutos rojos. En boca es fresco y sensual, con taninos suaves y equilibrada acidez.',10,2,'100% Malbec',2019,'Agrelo, Luján de Cuyo. Provincia de Mendoza, Argentina.',13.2,'Cosecha: A mano. Fermentación: 15º C en tanques de acero inoxidable.','Fermentado en tanques de acero inoxidable.',4,NULL,NULL,'2020-08-12 06:37:16','0000-00-00 00:00:00','0000-00-00 00:00:00'),(13,'001234859871','ZORZAL TERROIR ÚNICO PINOT NOIR ROSÉ',3,650,'producto-1595436412133.jpeg','producto-1595436412136.jpeg',750,'Color: Rosa brillante. Aroma: Frutilla, ciruela, guinda, ensalada de frutas y flores. Sabor: Es muy fresco y equilibrado en boca.',11,7,'100% Pinot Noir',2019,'Gualtallary, Valle de Uco. Provincia de Mendoza, Argentina',13.2,NULL,NULL,6,NULL,NULL,'2020-08-12 06:58:28','0000-00-00 00:00:00','0000-00-00 00:00:00'),(14,'002012555891','JACK DANIELS WHISKY 750 ML',6,4260,'producto-1595436921702.jpeg','producto-1595436921705.jpeg',750,'El whisky se realiza con agua subterránea sacada de una cueva en Tennessee, además al whisky se lo somete a un proceso llamado \\\"charcoal mellowing\\\" que consiste en filtrarlo a través de carbón de arce sacarino que lo convierte en lo que es: un Tennessee Whisky y no en un Bourbon, licor con el que se lo confunde por su suavidad a pesar de su alta graduación alcohólica. Finalmente el whisky es añejado en barriles de roble blanco que son ensamblados a mano y quemados por dentro para fundir los azucares propios de la madera y darle al Jack Daniels su sabor y color ámbar.',12,8,'Tennessee Whisky',2020,'Tennessee. Estados Unidos',40.0,NULL,NULL,12,NULL,NULL,'2020-08-12 08:08:43','0000-00-00 00:00:00','0000-00-00 00:00:00'),(15,'001234855899','JAMESON IRISH WHISKEY',6,1350,'producto-1595437260544.jpeg','producto-1595437260549.jpeg',750,'Nariz: En la nariz, Jameson muestra un ligero aroma floral, vigorizado con madera especiada y notas dulces.\\r\\nBoca: Equilibrio perfecto de especiado, notas de frutos secos y vainilla con tonos de jerez seco y una suavidad excepcional.',13,9,'Irish Whiskey',2020,'Midleton, Irlanda',40.0,'Mezclamos nuestros extraordinarios whiskeys de alambique con un delicado whiskey de grano, los infusionamos en nuestras barricas de jerez impregnadas de sabores a frutos secos y equilibramos sus sabores con la aromática vainilla de los barriles de bourbon. Y, al igual que con todos nuestros whiskeys, Jameson Irish Whiskey se destila tres veces para crear un licor más suave, perfecto para cualquier ocasión.',NULL,6,NULL,'on','2020-08-12 08:08:43','0000-00-00 00:00:00','0000-00-00 00:00:00'),(16,'002012555677','JOHNNIE WALKER RED LABEL WHISKY',6,1450,'producto-1595437537431.jpeg','producto-1595437537434.jpeg',750,'La mezcla es en parte arte y en parte ciencia. Es una habilidad de la Familia Walker desarrollada a lo largo de muchas generaciones. Etiqueta roja, con su combinación de whiskies claros de la oscura costa este de Escocia y whiskies de la punta de la costa oeste, creó una mezcla con una extraordinaria profundidad de sabor. El sabor viaja en toda su paladar para ofrecer una experiencia que ni siquiera otros whiskies no ordinarios pueden igualar.',14,13,'Blended Scotch Whisky',2019,'Escocia',40.0,'JOHNNIE WALKER RED LABEL es el whisky escocés de mayor venta en el mundo. Es famoso por su sabor acentuado, lleno de carácter, equilibrado brillo incluso cuando se mezcla. Es un sabor que la familia Walker nunca se ha comprometido a cambiar. La familia Walker utilizó su conocimiento enciclopédico de malta de Escocia para crear una mezcla con un atractivo universal. ¿El resultado? Etiqueta roja se convirtió en el whisky favorito del mundo, una posición que sigue ocupando hoy en día. Desarrollado ',NULL,6,NULL,NULL,'2020-08-12 08:13:53','0000-00-00 00:00:00','0000-00-00 00:00:00'),(17,'001234855911','CHIVAS REGAL 12 AÑOS WHISKY',6,2300,'producto-1595437843001.jpeg','producto-1595437843009.jpeg',750,'Infusión aromática de frutas, flores, miel y levemente ahumado. Balanceado y cremoso, suave, miel, manzanas maduras y avellanas.',15,13,'Blended Scotch Whisky',2008,'Speyside, Escocia.',40.0,'Destilado (doble destilación). Materia prima base: Cebada Malteada más otros Cereales.',NULL,12,NULL,NULL,'2020-08-12 08:19:08','0000-00-00 00:00:00','0000-00-00 00:00:00'),(18,'001234888621','ESTRELLA DAMM CERVEZA LATA',7,200,'producto-1595438093679.jpeg','producto-1595438093682.jpeg',500,'Cerveza lager de sabor y carácter universal, ideal para tomar en cualquier momento del día. De cuidada elaboración y gran calidad, fruto de la selección de sus materias primas. Destaca su cremosa espuma aromatizada por el lúpulo y su refrescante sabor.',16,12,'Rubia, Lager',2020,'España',5.4,NULL,NULL,24,NULL,NULL,'2020-08-12 08:22:23','0000-00-00 00:00:00','0000-00-00 00:00:00'),(19,'001234888441','SCHOFFERHOFER CERVEZA',7,270,'producto-1595438387378.jpeg','producto-1595438387380.jpeg',500,'Cuerpo moderadamente ligero y cremoso, carbonatación media y buena estructura. Paladar frutado y toque acido del trigo, maltosa, amargor discreto.',17,14,'Rubia, Premium Beer',2020,'Alemania',5.0,'Cerveza de fermentación alta.',NULL,0,NULL,NULL,'2020-08-12 08:27:37','0000-00-00 00:00:00','0000-00-00 00:00:00'),(20,'001234888112','ANTARES KÖLSCH',7,120,'producto-1595438899334.jpeg','producto-1595438899337.jpeg',500,'Existen muchas cervezas doradas y refrescantes. Pero frutadas y con destellos finales de lúpulo, sólo hay un estilo: la Kölsch. En Antares rescatamos la antigua receta de la cerveza favorita de los bebedores en Colonia, Alemania, y la honramos desde 1998. En nuestra cocina, su legado sigue intacto.',18,11,'Rubia | Kölsch',2020,'Provincia de Buenos Aires, Argentina.',5.0,'Variedades de Malta: Pilsen. O.G.: 1.045 IBU: 18.',NULL,12,NULL,NULL,'2020-08-12 08:33:08','0000-00-00 00:00:00','0000-00-00 00:00:00'),(22,'00230004506789','FINCA LA LINDA EXTRA BRUT',4,580,'producto-1597696061079.jpeg','producto-1597696061099.jpeg',750,'Finca La Linda Extra Brut presenta un sofisticado aroma frutal con notas de miel. De color dorado con tintes verdosos y elegante estilo propio, es una intensa celebración de los sentidos.',5,15,'50% Chardonnay | 50% de Semillón',0,'Finca \"La España\", Carrodilla, Finca \"El Paraiso\", Maipú. Provincia de Mendoza, Argentina.',0.0,'','',6,'on',NULL,'2020-08-17 20:28:35','2020-08-17 21:08:41',NULL),(23,'0029008947299','EMILIA EXTRA BRUT 187',4,120,'producto-1597699544216.jpeg','producto-1597699544242.jpeg',187,'De color amarillo luminoso, se presenta con pequeñas burbujas que conforman una corona en la parte superior de la copa. En nariz se percibe intensamente aromático, recordando a flores blancas como el jazmin o la flor de naranjo combinados con notas frutales como la pera, el durazno blanco y el damasco. En boca, su refrescante pero delicada acidez, ameniza excelentemente los paladares más exigentes.',9,15,'100% Moscatel Blanco',0,'Provincia de Mendoza, Argentina',0.0,'Preparación del vino base: Suave prensado de las uvas con estricto control de temperatura, para mantener los frescos aromas varietales.\r\n\r\nFermentación en frío, 16 a 18 grados, durante 21 días. Interrupción de la fermentación con reducción de la temperatura, para preservar los azúcares naturales de las uvas.\r\nToma de espuma: Assemblage de vinos base y ubicación en tanques de acero inoxidable. Adición de levaduras seleccionadas. \r\nToma de espuma a 15-18 grados, durante 30 días.','',12,NULL,NULL,'2020-08-17 21:27:43','2020-08-17 21:27:43',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rankings`
--

DROP TABLE IF EXISTS `rankings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rankings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `ranking` tinyint(4) NOT NULL,
  `review` varchar(1000) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rankings`
--

LOCK TABLES `rankings` WRITE;
/*!40000 ALTER TABLE `rankings` DISABLE KEYS */;
/*!40000 ALTER TABLE `rankings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipmentoptions`
--

DROP TABLE IF EXISTS `shipmentoptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipmentoptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipmentoptions`
--

LOCK TABLES `shipmentoptions` WRITE;
/*!40000 ALTER TABLE `shipmentoptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipmentoptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `alias` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` tinyint(4) NOT NULL DEFAULT '0',
  `avatar` varchar(50) NOT NULL DEFAULT 'usuario.png',
  `lastConection` date DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_alias` (`alias`),
  UNIQUE KEY `unique_email` (`email`),
  UNIQUE KEY `unique_password` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan','Usuario','Juan01','usuario@winehouse.com.ar','usuario01',0,'avatar01.jpg',NULL,'2020-08-13 19:28:16','2020-08-17 14:46:09','0000-00-00 00:00:00'),(2,'Pedro02','Vendedor','Pedro','vendedor@winehouse.com.ar','vendedor02',1,'avatar02.jpg',NULL,'2020-08-13 19:29:27','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'Pablo','Administrador','Pablo03','administrador@winehouse.com.ar','administrador03',9,'avatar03.jpg',NULL,'2020-08-13 19:30:38','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'Jose','Argento','Pepe','pepe@hotmail.com','$2b$10$JzAj8j3m8hgauTyla6zLD.a9RMuuEjrDXYu/iO8wxhjeJeQ/6/HQi',0,'usuario-1595539794160.jpg',NULL,'2020-08-13 19:31:46','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'Carlos','Garcia','Cacho','cacho@hotmail.com','$2b$10$CCSA5WwHvqkG76EVKeeTMeES/hvp9.qM.ev.OO.WQn8y5Di7iGxqu',1,'usuario-1595539929394.jpg',NULL,'2020-08-13 19:32:41','0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'Leandro','Caorsi','Lea','leacaorsi@hotmail.com','$2a$10$.CaBBBcbLo1uLuBbijV3x.AUsIneYdCI/S0e9SqvUSZP.l7scMy72',9,'usuario-1596849315210.jpg',NULL,'2020-08-13 22:40:11','0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,'Ezequiel','Benedetti','Eze','hebenedetti@gmail.com','$2a$10$yVGvxl80sdgEBt/qdxx9q.v3BWPAR579v6LLoDOPjIEjgXGQER4j2',9,'usuario-1596330204806.jpg',NULL,'2020-08-13 22:41:23','0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'Martin','Luzuriaga','mmmmmm','luzuriagamartin@gmail.com','$2a$10$pETabY1AlFDERTqJ0sxYCOI0c2jpnGV/o5iuN4cfEN/I8ULOWBYzi',9,'usuario-1596510992764.jpg',NULL,'2020-08-13 22:42:55','2020-08-17 14:47:17','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `varietals`
--

DROP TABLE IF EXISTS `varietals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `varietals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varietals`
--

LOCK TABLES `varietals` WRITE;
/*!40000 ALTER TABLE `varietals` DISABLE KEYS */;
INSERT INTO `varietals` VALUES (1,'Blend'),(10,'Blended'),(8,'Bourbon'),(3,'Cabernet Sauvignon'),(4,'Chardonnay'),(15,'Extra Brut'),(9,'Irish Wiskey'),(11,'Kolsch'),(12,'Lager'),(2,'Malbec'),(7,'Pinot Noir'),(6,'Sauvignon Blanc'),(13,'Scotch'),(5,'Torrontés'),(14,'Wheat Beer');
/*!40000 ALTER TABLE `varietals` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-22 23:22:44
