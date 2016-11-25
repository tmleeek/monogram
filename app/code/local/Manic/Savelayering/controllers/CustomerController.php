<?php

class Manic_Savelayering_CustomerController extends Mage_Core_Controller_Front_Action {

	/**
     * Checking if user is logged in or not
     * If not logged in then redirect to customer login
     */
    public function preDispatch()
    {
        parent::preDispatch();
 
        if (!Mage::getSingleton('customer/session')->authenticate($this)) 
		{
            $this->setFlag('', 'no-dispatch', true);
            
			// adding message in customer login page
			Mage::getSingleton('core/session')
                ->addSuccess(Mage::helper('savelayering')->__('Please sign in or create a new account'));
        }
    }            
                
    /**
     * View SAVED LAYERING
    */
    public function viewAction()
    {                    
		$this->loadLayout();        
			   $this->getLayout()->getBlock('head')->setTitle($this->__('SAVED LAYERING'));        
		$this->renderLayout();
    }

}
