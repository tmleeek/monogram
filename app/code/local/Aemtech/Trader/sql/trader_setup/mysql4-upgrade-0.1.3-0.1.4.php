<?php
    $installer = $this;
    $installer->startSetup();
    $installer->addAttribute("order", "traderselfcollect", array("type"=>"int","default" => '0'));
    $installer->addAttribute("quote", "traderselfcollect", array("type"=>"int","default" => '0'));
    $installer->endSetup();

