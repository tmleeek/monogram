<?php
 
class Manic_Savelayering_Model_Resource_Savelayering extends Mage_Core_Model_Resource_Db_Abstract
{
    protected function _construct()
    {       
		$this->_init('savelayering/savelayering', 'savelayering_id');
    }
}