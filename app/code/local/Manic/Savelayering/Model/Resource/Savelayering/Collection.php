<?php
 
class Manic_Savelayering_Model_Resource_Savelayering_Collection extends Mage_Core_Model_Resource_Db_Collection_Abstract
{
    protected function _construct()
    {		
		$this->_init('savelayering/savelayering');
    }
}