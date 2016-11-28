<?php
class Manic_Savelayering_Block_Adminhtml_Savelayering extends Mage_Adminhtml_Block_Widget_Grid_Container
{
    public function __construct()
    {
        $this->_blockGroup = 'savelayering';
        $this->_controller = 'adminhtml_savelayering';
        $this->_headerText = Mage::helper('savelayering')->__('Saved Layering');
 
        parent::__construct();
        $this->_removeButton('add');
    }
}