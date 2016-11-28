<?php class Manic_Savelayering_Block_Adminhtml_Savelayering_Renderer_Products extends Mage_Adminhtml_Block_Widget_Grid_Column_Renderer_Abstract 
{ 
	public function render(Varien_Object $row) 
	{
		$productIds =  $row->getData($this->getColumn()->getIndex());
		$pids = explode(',',$productIds);
		$_product1 = Mage::getModel('catalog/product')->load($pids[0]);
		$pname1 = $_product1->getName();
		$_product2 = Mage::getModel('catalog/product')->load($pids[1]);
		$pname2 = $_product2->getName();
		return $pname1 .' + '. $pname2;
	} 
}