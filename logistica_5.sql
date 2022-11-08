-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2022 a las 17:58:49
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `logistica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camioneros`
--

CREATE TABLE `camioneros` (
  `id_camionero` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `apellido` text NOT NULL,
  `telef` int(10) NOT NULL,
  `direc` text NOT NULL,
  `cod_ciudad` int(11) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `fecha_nac` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `camioneros`
--

INSERT INTO `camioneros` (`id_camionero`, `dni`, `apellido`, `telef`, `direc`, `cod_ciudad`, `fecha_ingreso`, `fecha_nac`) VALUES
(13, 38986547, 'González', 2147483647, 'rioja 215', 15, '2022-10-05', '1992-06-16'),
(14, 38451298, 'Gómez', 2147483647, 'Mitre 284', 15, '2022-09-27', '1982-03-02'),
(15, 37884546, 'Pérez', 2147483647, 'Nación 485', 15, '2022-09-01', '1978-02-04'),
(16, 36454874, 'Maldonado', 2147483647, 'San Martin 303', 15, '2022-06-15', '1975-07-14'),
(17, 39563142, 'Rodriguez', 2147483647, 'Av. Falcon 141', 15, '2022-08-28', '1981-05-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camiones`
--

CREATE TABLE `camiones` (
  `id_camion` int(11) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `marca` text NOT NULL,
  `disponibilidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `camiones`
--

INSERT INTO `camiones` (`id_camion`, `capacidad`, `marca`, `disponibilidad`) VALUES
(13, 200, 'Ford', 1),
(14, 215, 'Chevrolet', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `cod_ciudad` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `cod_prov` int(11) NOT NULL,
  `cod_postal` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`cod_ciudad`, `nombre`, `cod_prov`, `cod_postal`) VALUES
(15, 'San Nicolás de los Arroyos', 11, '2900'),
(16, 'Villa Constitución', 12, 'S2919'),
(17, 'Ramallo', 11, 'B2914');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinatario`
--

CREATE TABLE `destinatario` (
  `id_destinatario` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `cel` int(10) NOT NULL,
  `dni` int(11) NOT NULL,
  `direccion` text NOT NULL,
  `ciudad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `destinatario`
--

INSERT INTO `destinatario` (`id_destinatario`, `nombre`, `apellido`, `cel`, `dni`, `direccion`, `ciudad`) VALUES
(29, 'Esteban', 'Deatriz', 2147483647, 45045380, 'Pavón 632', 15),
(30, 'Lucas', 'Fernandez', 2147483647, 45376700, 'Nacion 101', 15),
(31, 'Juan', 'Asselborn', 2147483647, 40213200, 'Falcon 610', 15),
(32, 'Federico', 'Ortiz', 2147483647, 45469300, 'Rioja 176', 15),
(33, 'Genaro', 'Fink', 2147483647, 45689000, 'Jujuy 488', 15),
(34, 'Damian', 'Brest', 2147483647, 44956900, 'España 447', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_paquete`
--

CREATE TABLE `detalle_paquete` (
  `cod_paque` int(11) NOT NULL,
  `descrip` text NOT NULL,
  `tipo_producto` int(11) NOT NULL,
  `peso` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalle_paquete`
--

INSERT INTO `detalle_paquete` (`cod_paque`, `descrip`, `tipo_producto`, `peso`) VALUES
(30, 'Monitor 24\"', 2, 1),
(31, 'Botines', 1, 1),
(32, 'Bicicleta Fija', 1, 15),
(33, 'Celular', 2, 1),
(34, 'Aspiradora', 1, 2),
(35, 'Parlante', 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hs_trabajada`
--

CREATE TABLE `hs_trabajada` (
  `id` int(11) NOT NULL,
  `mes_año` date NOT NULL,
  `cantidad` int(11) NOT NULL,
  `conductor` int(11) NOT NULL,
  `monto_hora` float NOT NULL,
  `sueldo` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hs_trabajada`
--

INSERT INTO `hs_trabajada` (`id`, `mes_año`, `cantidad`, `conductor`, `monto_hora`, `sueldo`) VALUES
(13, '2022-11-09', 160, 14, 210, 33600),
(15, '2022-11-09', 160, 15, 200, 32000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquete`
--

CREATE TABLE `paquete` (
  `id_paquete` int(11) NOT NULL,
  `cod_paquete` int(11) NOT NULL,
  `dir_destino` text NOT NULL,
  `destinatario` int(11) NOT NULL,
  `prioridad` int(11) NOT NULL,
  `situacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paquete`
--

INSERT INTO `paquete` (`id_paquete`, `cod_paquete`, `dir_destino`, `destinatario`, `prioridad`, `situacion`) VALUES
(31, 30, 'Pavón 632', 29, 2, 2),
(32, 31, 'Nacion 101', 30, 1, 1),
(33, 32, 'Falcon 610', 31, 3, 3),
(34, 33, 'Rioja 176', 32, 2, 4),
(35, 34, 'Jujuy 488', 33, 1, 5),
(36, 35, 'España 447', 34, 2, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prioridad`
--

CREATE TABLE `prioridad` (
  `id_priori` int(11) NOT NULL,
  `priori` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prioridad`
--

INSERT INTO `prioridad` (`id_priori`, `priori`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `cod_prov` int(11) NOT NULL,
  `nombre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`cod_prov`, `nombre`) VALUES
(11, 'Buenos Aires'),
(12, 'Santa Fe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `remito`
--

CREATE TABLE `remito` (
  `id_envio` int(11) NOT NULL,
  `id_paquete` int(11) NOT NULL,
  `id_camionero` int(11) NOT NULL,
  `id_camion` int(11) NOT NULL,
  `id_dest` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `fecha_emision` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `remito`
--

INSERT INTO `remito` (`id_envio`, `id_paquete`, `id_camionero`, `id_camion`, `id_dest`, `fecha`, `fecha_emision`) VALUES
(43, 31, 13, 13, 29, '2022-11-03', '2022-10-26'),
(44, 36, 16, 14, 34, '2022-10-27', '2022-10-26'),
(45, 33, 15, 13, 31, '2022-11-03', '2022-10-26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `situacion`
--

CREATE TABLE `situacion` (
  `id` int(11) NOT NULL,
  `situacion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `situacion`
--

INSERT INTO `situacion` (`id`, `situacion`) VALUES
(1, 'en preparacion'),
(2, 'en camino'),
(3, 'entregado'),
(4, 'en deposito'),
(5, 'perdido'),
(6, 'cancelados');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `camioneros`
--
ALTER TABLE `camioneros`
  ADD PRIMARY KEY (`id_camionero`),
  ADD KEY `cod_ciudad` (`cod_ciudad`);

--
-- Indices de la tabla `camiones`
--
ALTER TABLE `camiones`
  ADD PRIMARY KEY (`id_camion`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`cod_ciudad`),
  ADD KEY `cod_prov` (`cod_prov`);

--
-- Indices de la tabla `destinatario`
--
ALTER TABLE `destinatario`
  ADD PRIMARY KEY (`id_destinatario`),
  ADD KEY `codigo_postal` (`ciudad`);

--
-- Indices de la tabla `detalle_paquete`
--
ALTER TABLE `detalle_paquete`
  ADD PRIMARY KEY (`cod_paque`);

--
-- Indices de la tabla `hs_trabajada`
--
ALTER TABLE `hs_trabajada`
  ADD PRIMARY KEY (`id`),
  ADD KEY `conductor` (`conductor`);

--
-- Indices de la tabla `paquete`
--
ALTER TABLE `paquete`
  ADD PRIMARY KEY (`id_paquete`),
  ADD KEY `cod_paquete` (`cod_paquete`),
  ADD KEY `prioridad` (`prioridad`),
  ADD KEY `situacion` (`situacion`),
  ADD KEY `destinatario` (`destinatario`);

--
-- Indices de la tabla `prioridad`
--
ALTER TABLE `prioridad`
  ADD PRIMARY KEY (`id_priori`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`cod_prov`);

--
-- Indices de la tabla `remito`
--
ALTER TABLE `remito`
  ADD PRIMARY KEY (`id_envio`),
  ADD KEY `id_camionero` (`id_camionero`),
  ADD KEY `id_camion` (`id_camion`),
  ADD KEY `id_dest` (`id_dest`),
  ADD KEY `id_paquete` (`id_paquete`);

--
-- Indices de la tabla `situacion`
--
ALTER TABLE `situacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `camioneros`
--
ALTER TABLE `camioneros`
  MODIFY `id_camionero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `camiones`
--
ALTER TABLE `camiones`
  MODIFY `id_camion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `cod_ciudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `destinatario`
--
ALTER TABLE `destinatario`
  MODIFY `id_destinatario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `detalle_paquete`
--
ALTER TABLE `detalle_paquete`
  MODIFY `cod_paque` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `hs_trabajada`
--
ALTER TABLE `hs_trabajada`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `paquete`
--
ALTER TABLE `paquete`
  MODIFY `id_paquete` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `prioridad`
--
ALTER TABLE `prioridad`
  MODIFY `id_priori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `cod_prov` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `remito`
--
ALTER TABLE `remito`
  MODIFY `id_envio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `situacion`
--
ALTER TABLE `situacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `camioneros`
--
ALTER TABLE `camioneros`
  ADD CONSTRAINT `camioneros_ibfk_2` FOREIGN KEY (`cod_ciudad`) REFERENCES `ciudad` (`cod_ciudad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`cod_prov`) REFERENCES `provincias` (`cod_prov`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `destinatario`
--
ALTER TABLE `destinatario`
  ADD CONSTRAINT `destinatario_ibfk_1` FOREIGN KEY (`ciudad`) REFERENCES `ciudad` (`cod_ciudad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `hs_trabajada`
--
ALTER TABLE `hs_trabajada`
  ADD CONSTRAINT `hs_trabajada_ibfk_1` FOREIGN KEY (`conductor`) REFERENCES `camioneros` (`id_camionero`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `paquete`
--
ALTER TABLE `paquete`
  ADD CONSTRAINT `paquete_ibfk_1` FOREIGN KEY (`cod_paquete`) REFERENCES `detalle_paquete` (`cod_paque`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `paquete_ibfk_2` FOREIGN KEY (`prioridad`) REFERENCES `prioridad` (`id_priori`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `paquete_ibfk_3` FOREIGN KEY (`situacion`) REFERENCES `situacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `paquete_ibfk_4` FOREIGN KEY (`destinatario`) REFERENCES `destinatario` (`id_destinatario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `remito`
--
ALTER TABLE `remito`
  ADD CONSTRAINT `remito_ibfk_1` FOREIGN KEY (`id_paquete`) REFERENCES `paquete` (`id_paquete`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `remito_ibfk_2` FOREIGN KEY (`id_camion`) REFERENCES `camiones` (`id_camion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `remito_ibfk_5` FOREIGN KEY (`id_dest`) REFERENCES `paquete` (`destinatario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `remito_ibfk_6` FOREIGN KEY (`id_camionero`) REFERENCES `camioneros` (`id_camionero`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
