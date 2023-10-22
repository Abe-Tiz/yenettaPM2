-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2023 at 09:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `productinventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ID` int(45) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(150) NOT NULL,
  `price` decimal(18,2) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `name`, `description`, `price`, `available`, `quantity`) VALUES
(13, 'computer', 'This computer is best for any one \n', 2000.00, 1, 10),
(14, 'Mobile', 'This mobile is best for any person to use any time', 38.00, 0, 0),
(17, 'Bag', 'egestas purus viverra accumsan in', 1000.00, 0, 0),
(18, 'moble', 'curabitur vitae nunc sed velit', 18000.00, 1, 10),
(19, 'tablet', 'curabitur vitae nunc sed velit', 10000.00, 0, 0),
(20, 'earphone', 'dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt', 120.00, 1, 30),
(23, 'computer', 'this computer is best from other computers', 23000.00, 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(45) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
