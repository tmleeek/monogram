<?php
class Manic_Savelayering_Block_Adminhtml_Savelayering_Grid extends Mage_Adminhtml_Block_Widget_Grid
{
    public function __construct()
    {
        parent::__construct();
        $this->setId('savelayering_grid');
        $this->setDefaultSort('savelayering_id');
        $this->setDefaultDir('DESC');
        $this->setSaveParametersInSession(true);
		$this->setPagerVisibility(false);
		$this->setFilterVisibility(false);
    }
 
    protected function _prepareCollection()
    {
		$customer = Mage::registry('current_customer');  
    	$cid = $customer->getId();
        $collection = Mage::getModel('savelayering/savelayering')->getCollection()->addFieldToFilter('cust_id', $cid);
 
        $this->setCollection($collection);
        parent::_prepareCollection();
        return $this;
    }
 
    protected function _prepareColumns()
    {
        $helper = Mage::helper('savelayering'); 
 
        $this->addColumn('created_time', array(
            'header' => $helper->__('Date'),
            'type'   => 'datetime',
            'index'  => 'created_time'
        ));
 
        $this->addColumn('products_id', array(
            'header'       => $helper->__('Layering Products'),
            'index'        => 'products_id',
			'renderer' => 'savelayering/adminhtml_savelayering_renderer_products'
        ));
 
         
        $this->addExportType('*/*/exportSavelayeringCsv', $helper->__('CSV'));
        $this->addExportType('*/*/exportSavelayeringExcel', $helper->__('Excel XML'));
 
        return parent::_prepareColumns();
    }
 
    public function getGridUrl()
    {
        return $this->getUrl('*/*/grid', array('_current'=>true));
    }
}