<?php

class Manic_Savelayering_Adminhtml_IndexController extends Mage_Adminhtml_Controller_Action {

    public function indexAction()
    {
        $this->_title($this->__('Saved Layering'))->_title($this->__('Saved Layering'));
        $this->loadLayout();
        $this->_setActiveMenu('savelayering/savelayering');
        $this->_addContent($this->getLayout()->createBlock('aemtech_savelayering/adminhtml_savelayering_savelayering'));
        $this->renderLayout();
    }
 
    public function gridAction()
    {
        $this->loadLayout();
        $this->getResponse()->setBody(
            $this->getLayout()->createBlock('aemtech_savelayering/adminhtml_savelayering_savelayering_grid')->toHtml()
        );
    }
 
    public function exportInchooCsvAction()
    {
        $fileName = 'orders_inchoo.csv';
        $grid = $this->getLayout()->createBlock('aemtech_savelayering/adminhtml_savelayering_savelayering_grid');
        $this->_prepareDownloadResponse($fileName, $grid->getCsvFile());
    }
 
    public function exportInchooExcelAction()
    {
        $fileName = 'orders_inchoo.xml';
        $grid = $this->getLayout()->createBlock('aemtech_savelayering/adminhtml_savelayering_savelayering_grid');
        $this->_prepareDownloadResponse($fileName, $grid->getExcelFile($fileName));
    }

}
