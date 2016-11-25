<?php
class Manic_Savelayering_Block_Customer extends Mage_Core_Block_Template
{
    public function __construct()
    {
        parent::__construct();
		$customer = Mage::getSingleton('customer/session')->getCustomer();    
    	$cid = $customer->getId();
        $collection = Mage::getModel('savelayering/savelayering')->getCollection()->addFieldToFilter('cust_id', $cid);
        $this->setCollection($collection);
    }
 
    protected function _prepareLayout()
    {
        parent::_prepareLayout();
 
        $pager = $this->getLayout()->createBlock('page/html_pager', 'savelayering.pager');
        $pager->setAvailableLimit(array(5=>5,10=>10,20=>20,'all'=>'all'));
        $pager->setCollection($this->getCollection());
        $this->setChild('pager', $pager);
        $this->getCollection()->load();
        return $this;
    }
 
    public function getPagerHtml()
    {
        return $this->getChildHtml('pager');
    }
}