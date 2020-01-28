CREATE DATABASE `adminTask` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
use adminTask;

CREATE TABLE `adminHistoryTaskList` (
  `id` int(11) NOT NULL,
  `adminTaskId` int(11) DEFAULT NULL,
  `runningNumber` int(11) DEFAULT NULL,
  `project` varchar(255) DEFAULT NULL,
  `usage` varchar(255) DEFAULT NULL,
  `staffId` varchar(255) DEFAULT NULL,
  `staffName` varchar(255) DEFAULT NULL,
  `fromOrganization` varchar(255) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `dueDate` varchar(255) DEFAULT NULL,
  `frequency` varchar(255) DEFAULT NULL,
  `reminderDate` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `operator` varchar(255) DEFAULT NULL,
  `closeDate` varchar(255) DEFAULT NULL,
  `operationRemarks` varchar(255) DEFAULT NULL,
  `taskStatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `adminTaskList` (
  `id` int(11) NOT NULL,
  `project` varchar(255) DEFAULT NULL,
  `usage` varchar(255) DEFAULT NULL,
  `staffId` varchar(255) DEFAULT NULL,
  `staffName` varchar(255) DEFAULT NULL,
  `fromOrganization` varchar(255) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `dueDate` varchar(255) DEFAULT NULL,
  `frequency` varchar(255) DEFAULT NULL,
  `reminderDate` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `taskStatus` varchar(45) DEFAULT 'active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `frequencyList` (
  `id` int(11) NOT NULL,
  `frequency` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `organizationList` (
  `id` int(11) NOT NULL,
  `organization` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `staffList` (
  `id` int(11) NOT NULL,
  `staffName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `usageType` (
  `id` int(11) NOT NULL,
  `usage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
