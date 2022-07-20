-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2022 at 12:39 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pj`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id_article` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `briefly` varchar(255) NOT NULL,
  `time_created` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id_article`, `title`, `briefly`, `time_created`, `photo`) VALUES
('782y4895thfdoh032-4093q0edopif3-wrepfjmsdsd', 'Người phụ nữ cưu mang hơn 1.000 chó mèo', 'TP HCMNgoài việc bán hủ tiếu, gần 6 năm qua, ngày nào chị Như Quyên cũng tất bật chăm sóc hơn 1.000 chó mèo được mua từ các lò mổ, bị bỏ rơi ngoài đường... ', '27/06/2022 20:10', 'https://i1-vnexpress.vnecdn.net/2022/06/07/284883659168884503148492758554-1925-5054-1654615144.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=5BlgV3cv46DYtd0_MFvaVg'),
('dq57y4qu9342uejorjoi3r4w32', 'Loạt thú cưng nổi tiếng thích làm lố', 'Những biểu cảm của chúng như ọe khi ngửi thấy mùi lạ hay ngất xỉu khi bị cắt móng tay sẽ khiến bạn thấy thêm yêu cuộc đời hơn. ', '02/07/2022 11:12', 'https://i1-vnexpress.vnecdn.net/2022/04/06/Chomeoanchay-1649247609-9015-1649247910.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=Vmbnhh6wAfPVeT7gldflFA'),
('dsfdgfhgjhkoui675697uyjghfg', 'Sau nửa năm vẫn bị phạt vì để chó vệ sinh bậy', 'TÂY BAN NHA - Một phụ nữ nhận được biên lai tiền phạt 570 USD từ thị trấn mà cô đến thăm sáu tháng trước, vì không dọn phân khi chó của cô đi bậy ở vỉa hè. ', '04/07/2022 15:36', 'https://i1-vnexpress.vnecdn.net/2022/02/11/4110-jpeg-1644563185-5372-1644563369.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=BV4U8sVXb9IEaNLKMXesPg'),
('dsfgdhfjgkhlkjhgfd86uthgbwq324wr', 'Chi 50 triệu đồng tìm chó lạc', 'TP HCM - Hơn 10 ngày qua, Cẩm Nhung đã đi khắp nơi tìm chú chó cưng tên Rin mất tích từ đêm 29/11, và thông báo sẽ hậu tạ 50 triệu đồng cho ai tìm được.', '05/07/2022 13:24', 'https://i1-giadinh.vnecdn.net/2021/12/13/a4-1639369744-6626-1639370239.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=fAhGiS7R06HKW1FdbjyiCA'),
('fsk4893ueojfdflsjsiotaeirjdfsdsds', 'Người Việt tăng tìm mua chó mèo', 'Đại dịch, giãn cách khiến nhiều người quan tâm đến thú cưng hơn, trong đó Việt Nam, Philippines dẫn đầu thị trường tìm mua thú cưng tại Đông Nam Á.', '06/07/2022 22:38', 'https://i1-kinhdoanh.vnecdn.net/2021/11/18/254294636-1102209983851013-752-4238-3453-1637207353.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=LS23iyOmIInV_bwsMbeSCg'),
('sfdghfgjhklkjutyrt676879o8ukjghf', 'Chó mèo có thể ăn chay không ?', 'Chó có thể ăn thuần chay với sự trợ giúp của các chuyên gia, trong khi mèo là động vật ăn thịt bắt buộc.', '01/07/2022 07:45', 'https://i1-vnexpress.vnecdn.net/2021/10/21/page-1634788368-4431-1634788405.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=cjxS2zwnN0oEbtqJHpGTeQ');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_user` varchar(255) NOT NULL,
  `id_product` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_user`, `id_product`) VALUES
('33c0d3ed-a855-4d6c-8d94-9b7d36240484', 'uirefkfju238uwjedioswed'),
('deb823b5-ed06-4dd1-8e06-974207bd5f61', 'fjsoejiofjtieujfdlkg'),
('deb823b5-ed06-4dd1-8e06-974207bd5f61', 'gjaedjfiouaeoiruojsiofjieew');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `cost` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `photo`, `title`, `cost`) VALUES
('fjsoejiofjtieujfdlkg', 'https://noithatthucung.com/wp-content/uploads/2020/09/petto-6-300x300.jpg', 'Nhà mèo treo tường', 11000000),
('gjaedjfiouaeoiruojsiofjieew', 'https://noithatthucung.com/wp-content/uploads/2019/12/nh%C3%A0-anpha-cho-m%C3%A8o-ch009-300x300.png', 'Nhà alpha cho mèo', 1100000),
('hfdkweriesgfnkadklsewio', 'https://noithatthucung.com/wp-content/uploads/2019/12/dsc00874-300x300.png', 'Nhà gỗ ngoài trời cho chó', 20000000),
('iowafjgjlkjfeiojoi4d2', 'https://noithatthucung.com/wp-content/uploads/2019/12/il_794xn.1365074625_25t6-300x300.png', 'Khay ăn cho mèo', 200000),
('jfioutiojflkds928490wurjfi', 'https://noithatthucung.com/wp-content/uploads/2020/09/petto-6-300x300.jpg', 'Nhà mèo treo tường mới', 8000000),
('jfwedjskljskrakjao4w', 'https://noithatthucung.com/wp-content/uploads/2020/07/nha-cay-cho-meo-2-300x300.jpg', 'Nhà cây cho mèo', 7000000),
('jfzdkjdkfjawoirjxjclkfdwaeas', 'https://noithatthucung.com/wp-content/uploads/2019/12/img_20190630_092756-300x300.png', 'Tủ quần áo cho mèo', 700000),
('uirefkfju238uwjedioswed', 'https://noithatthucung.com/wp-content/uploads/2021/06/CW001_-1-300x300.jpg', 'Bánh Xe Mèo Chạy Bộ Catwheel CW001', 4500000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `name`, `phone_number`, `email`, `address`, `account`, `password`) VALUES
('33c0d3ed-a855-4d6c-8d94-9b7d36240484', 'Phúc Trương', '123456789', 'speedforce@gmail.com', 'Ha noi', 'phuctruong', '123456'),
('deb823b5-ed06-4dd1-8e06-974207bd5f61', 'Pham Giang', '123456789', 'datistpham@gmail.com', 'Ha noi', 'giangvippro', 'giangvippro');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_user`,`id_product`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
