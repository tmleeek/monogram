<?php
$installer=$this;
$installer->startSetup();
 
$installer->run("
-- DROP TABLE IF EXISTS {$this->getTable('savelayering')};
CREATE TABLE {$this->getTable('savelayering')} (
  `savelayering_id` int(11) unsigned NOT NULL auto_increment COMMENT 'save layering ID',
  `cust_id` int(11) NOT NULL  COMMENT 'Customer Id' ,
  `products_id` varchar(255) NOT NULL COMMENT 'Product IDs',  
  `created_time` datetime NULL,
  `update_time` datetime NULL,
  PRIMARY KEY (`savelayering_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
    ");
$installer->endSetup();
?>