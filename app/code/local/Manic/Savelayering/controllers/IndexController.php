<?php

class Manic_Savelayering_IndexController extends Mage_Core_Controller_Front_Action {

    public function indexAction() {
       
    }
	
	public function addproductAction() {
        $productids = $this->getRequest()->getParam('productids');
		$products = explode(',',$productids);
        $cart = Mage::getModel('checkout/cart');
        $cart->init();
        /* @var $pModel Mage_Catalog_Model_Product */
        foreach ($products as $product_id) {
            if ($product_id == '') {
                continue;
            }
            $pModel = Mage::getModel('catalog/product')->load($product_id);
            if ($pModel->getTypeId() == Mage_Catalog_Model_Product_Type::TYPE_SIMPLE) {
                try {
                    $cart->addProduct($pModel, array('qty' => '1'));					
                }
                catch (Exception $e) {
                   echo "We are unable to add product in cart. Please try again!";
                }
            }else{
				echo "We are unable to add product in cart. Please try again!";
			}
        }
        $cart->save();
		echo 'Layering products successfully added to cart!';
        
    }
	
	public function ajaxAction() {
	
		if($this->getRequest()->getPost()){
            $data = $this->getRequest()->getPost();
			$cid = $data['cid'];
			$pid = $data['pid'];
			$prodIds = explode('|||',$pid);
			if(count($prodIds)==2){
				$prodIds1 = str_replace('-',' ',$prodIds[0]);
				$prodIds2 = str_replace('-',' ',$prodIds[1]);
				$_product = Mage::getModel('catalog/product')->loadByAttribute('name', $prodIds1);
				$_product2 = Mage::getModel('catalog/product')->loadByAttribute('name', $prodIds2);
				$prodId1 = $_product->getId();
				$prodId2 = $_product2->getId();
			}else{
				echo "We are unable to save tea layering. Please try again!";
			}
			//print_r($prodIds);exit;
			$date = date('Y-m-d H:i:s');
			$data = array('cust_id'=>$cid,'products_id'=>$prodId1.','.$prodId2,'created_time'=>$date,'update_time'=>$date);
			$model = Mage::getModel('savelayering/savelayering')->setData($data);
			try {
				$insertId = $model->save()->getId();
				echo "Tea layering successfully saved";
			}
			catch (Exception $e)
			{
				//echo $e->getMessage();  
				echo "We are unable to save tea layering. Please try again!";
			}			
        }else{
            echo "We are unable to save tea layering. Please try again!";
        }		
    }
}
