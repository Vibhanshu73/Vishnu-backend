-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2023 at 09:22 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogger`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(15) NOT NULL,
  `status` enum('1','0') NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `fname`, `lname`, `email`, `phone`, `status`, `created`) VALUES
(1, 'Vibhanshu', 'Bhoyar', 'vibhanshu@gmail.com', 997085578, '1', '2023-09-08'),
(2, 'Vishnu', 'Vishnu', 'vishnu@gmail.com', 997085578, '1', '2023-09-10');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(255) NOT NULL,
  `cat_desc` text NOT NULL,
  `status` enum('1','0') NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `cat_name`, `cat_desc`, `status`, `created`) VALUES
(1, 'Sport', 'Sport', '1', '2023-09-08'),
(2, 'Entertenment', 'Entertenment', '1', '2023-09-08'),
(3, 'Business', 'Business', '1', '2023-09-08'),
(4, 'Ploitics', 'Ploitics', '1', '2023-09-11'),
(5, 'technology', 'technology', '1', '2023-09-11'),
(6, 'Education', 'Education', '1', '2023-09-11'),
(9, 'Cricket', 'Cricket', '1', '2023-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `status` enum('1','0') NOT NULL,
  `created` date NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` enum('1','0') NOT NULL,
  `created` date NOT NULL,
  `cat_id` int(11) NOT NULL,
  `auth_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `status`, `created`, `cat_id`, `auth_id`) VALUES
(1, 'Disney’s battle with Charter could pose an existential threat to the cable bundle', 'It’s a carriage fight that could lead to the dismantling — or revolution — of the cable television bundle.\r\n\r\nThe brawl between Disney and Charter Communications, which has erupted into view at the most inopportune time for sports fans as the US Open plays out and the NFL season gets underway, has laid bare the strained relations between distributors and content providers that has simmered beneath the surface for years.\r\n\r\nThe showdown resulted in ABC, ESPN, and other major Disney-owned channels being yanked off the air for Charter’s 15 million Spectrum subscribers over Labor Day weekend, angering viewers and raising existential questions for the traditional cable business as it quickly became clear this is not the usual carriage battle.', '1', '2023-09-07', 2, 1),
(2, 'Cristiano Ronaldo says his long-standing ‘rivalry’ with Lionel Messi is over', 'Cristiano Ronaldo or Lionel Messi? It’s the debate that has kept soccer fans entertained for over a decade. While some are content to appreciate both players, others sit very firmly on one side or the other of the debate.\r\n\r\nBut according to Ronaldo himself, the “rivalry” between the pair has disappeared since they swapped European clubs for pastures new – Ronaldo moving to Al-Nassr in Saudi Arabia and Messi to Inter Miami in the US.\r\n\r\n“I don’t see things that way, the rivalry is gone. It was good, the fans liked it. Those who like Cristiano Ronaldo don’t have to hate Messi. They’re both very good, they changed football history,” the 38-year-old Ronaldo told reporters while preparing to play in European Championship qualifiers with Portugal.', '1', '2023-09-06', 1, 1),
(3, 'Google launches watermarks for AI-generated', '\r\nIn an effort to help prevent the spread of misinformation, Google on Tuesday unveiled an invisible, permanent watermark on images that will identify them as computer-generated.\r\n\r\nThe technology, called SynthID, embeds the watermark directly into images created by Imagen, one of Google’s latest text-to-image generators. The AI-generated label remains regardless of modifications like added filters or altered.\r\n\r\nThe SynthID tool can also scan incoming images and identify the likelihood they were made by Imagen by scanning for the watermark with three levels of certainty: detected, not detected.', '1', '2023-09-12', 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` int(15) NOT NULL,
  `address` text NOT NULL,
  `status` enum('0','1') NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`, `phone`, `address`, `status`, `created`) VALUES
(1, 'Vishnu', 'Vishnu', 'Vishnu@gmail.com', 'e64b78fc3bc91bcbc7dc232ba8ec59e0', 2147483647, '73,aosdkf, kdfjls, slkdfjlsk, skdjfl', '1', '2023-09-13'),
(2, 'Pankaj', 'Tripathi', 'pankaj', 'e64b78fc3bc91bcbc7dc232ba8ec59e0', 997085574, 'Plot no:.8,swagat nagar, newnarsala road, nagpur-440038', '1', '2023-09-13'),
(3, 'Vibhanshu', 'Bhoyar', 'vibhanshu@gmail.com', 'e64b78fc3bc91bcbc7dc232ba8ec59e0', 1234123412, '34,sdfslkjf,flksdjflskd,lksdfjl', '1', '2023-09-12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`),
  ADD KEY `auth_id` (`auth_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `postId` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `authId` FOREIGN KEY (`auth_id`) REFERENCES `authors` (`id`),
  ADD CONSTRAINT `categoryId` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
