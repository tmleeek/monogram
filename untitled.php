<!-- ONE COLUMN SECTION -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
      <td align="center" style="padding: 70px 15px 70px 15px;" class="section-padding">
          <table border="0" cellpadding="0" cellspacing="0" width="600" class="responsive-table">
              <tr>
                  <td>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          
                          <tr>
                              <td align="center" style="font-family: 'BrandonGrotesqueWeb-Bold',Arial Black,Gadget,sans-serif;font-style: normal;font-weight: 400;font-size: 25px;line-height: 35px;letter-spacing: .1em; color: #efeeed;text-transform: uppercase;" class="padding-copy">
                                  Thank you for your order from {{var store.getFrontendName()}}
                              </td>
                          </tr>
                          
                          <tr>
                              <td align="center" style="padding: 0px 20px 0 20px;">
                                  <!-- COPY -->
                                  <p align="center" style="padding: 20px 45px 0 45px; padding: 20px 45px 0 45px; font-size: 12px;line-height: 21px; font-family: Domine,'Times New Roman',Times,serif;font-style: normal; font-weight: 400; color: #efeeed;" class="padding-copy">You can check the status of your order by <a style="color: #efeeed; text-decoration: none;" href="{{store url="customer/account/"}}">logging into your account</a>.</p>
                                  <h1 style="font-size: 18px;font-family: 'BrandonGrotesqueWeb-Bold','Arial Black',Gadget,sans-serif;font-style: normal;font-weight: 400; color: #efeeed; text-align:center; border: 1px solid #fff; color: #fff;padding:13px;margin: 0 auto;margin-top:30px;margin-bottom:30px;max-width: 330px;text-transform: uppercase;">Your invoice # is: {{var invoice.increment_id}}</h1>
                                  <p align="center" style="padding: 20px 45px 0 45px; padding: 20px 45px 0 45px; font-size: 12px;line-height: 21px; font-family: Domine,'Times New Roman',Times,serif;font-style: normal; font-weight: 400; color: #efeeed;" class="padding-copy">Don’t forget to leave a rating a review of the product or recommend us to your friends <br> to earn more rebates.</p>
                              </td>
                          </tr>
                          <tr>
                              <td align="center">
                                  {{layout area="frontend" handle="sales_email_order_invoice_items" invoice=$invoice order=$order}}
                                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                      <tr>
                                          <td class="address-details" style="padding-bottom: 30px;">
                                              <h3 style="font-family: 'BrandonGrotesqueWeb-Bold','Arial Black',Gadget,sans-serif;font-style: normal;font-weight: 400;font-size: 11px;line-height: 32px;letter-spacing: .08em;text-transform: uppercase; color: #efeeed; margin:0px;">Bill to:</h3>
                                              <p style="font-size: 12px;line-height: 21px; font-family: Domine,'Times New Roman',Times,serif;font-style: normal; font-weight: 400; color: #efeeed;"><span class="no-link">{{var order.billing_address.format('html')}}</span></p>
                                          </td>
                                          {{depend order.getIsNotVirtual()}}
                                          <td class="address-details" style="padding-bottom: 30px;">
                                              <h3 style="font-family: 'BrandonGrotesqueWeb-Bold','Arial Black',Gadget,sans-serif;font-style: normal;font-weight: 400;font-size: 11px;line-height: 32px;letter-spacing: .08em;text-transform: uppercase; color: #efeeed; margin:0px;">Ship to:</h3>
                                              <p style="font-size: 12px;line-height: 21px; font-family: Domine,'Times New Roman',Times,serif;font-style: normal; font-weight: 400; color: #efeeed;"><span class="no-link">{{var order.shipping_address.format('html')}}</span></p>
                                          </td>
                                          {{/depend}}
                                      </tr>
                                  
                                      <tr>
                                          {{depend order.getIsNotVirtual()}}
                                          <td class="address-details">
                                              <h3 style="font-family: 'BrandonGrotesqueWeb-Bold','Arial Black',Gadget,sans-serif;font-style: normal;font-weight: 400;font-size: 11px;line-height: 32px;letter-spacing: .08em;text-transform: uppercase; color: #efeeed; margin:0px;">Shipping method:</h3>
                                              <p style="font-size: 12px;line-height: 21px; font-family: Domine,'Times New Roman',Times,serif;font-style: normal; font-weight: 400; color: #efeeed;">{{var order.shipping_description}}</p>
                                          </td>
                                          {{/depend}}
                                          <td class="address-details">
                                              <h3 style="font-family: 'BrandonGrotesqueWeb-Bold','Arial Black',Gadget,sans-serif;font-style: normal;font-weight: 400;font-size: 11px;line-height: 32px;letter-spacing: .08em;text-transform: uppercase; color: #efeeed; margin:0px;">Payment method:</h3>
                                              <span style="font-size: 12px;line-height: 21px; font-family: Domine,'Times New Roman',Times,serif;font-style: normal; font-weight: 400; color: #efeeed;">{{var order.getPayment().getMethodInstance().getTitle()}}</span>
                                          </td>
                                      </tr>                                                 
                                  </table>                              
                              </td>
                          </tr>
                          
                      </table>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
</table>


<!-- ONE COLUMN SECTION -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td bgcolor="#ffffff" align="center" style="padding: 0px 15px 70px 15px;" class="section-padding">
            <table border="0" cellpadding="0" cellspacing="0" width="600" class="responsive-table">
                <tr>
                    <td>
                        <!-- HERO IMAGE -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">                            
                            <tr>
                                <td>
                                    <!-- COPY -->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                          <td>
                                              <h2 style="font-family: 'Gotham-Medium', Tahoma, Helvetica, Arial, sans-serif; font-size: 14px; font-style:normal; font-weight:normal; line-height:20px; letter-spacing:0.03em; text-align:center; text-transform:uppercase; color: #252525; padding-top: 40px;">Thank you for your order from {{var store.getFrontendName()}}</h2>
                                              <hr style="width: 30px;height: 8px;border:none;border-bottom: 3px solid #ae4e0e;display: block;margin: 0 auto!important;background:none!important;">                                              
                                              <p style="font-family: 'Gotham-Book', Tahoma, Helvetica, Arial, sans-serif; color: #464646; font-size: 12px; line-height: 19px;text-align:center;">You can check the status of your order by <a style="color: #ae4e0e; text-decoration: none;" href="{{store url="customer/account/"}}">logging into your account</a>.</p>
                                              <br />
                                              <h1 style="font-family:'MinionPro-Medium', Tahoma, Helvetica, Arial, sans-serif; font-size:17px; font-style:normal; font-weight:normal; line-height:26px;letter-spacing:0.1em; text-align:center; border: 1px solid #ae4e0e; color: #ae4e0e;padding:13px;margin: 0 auto;max-width: 330px; text-transform: uppercase;">Your invoice # is: {{var invoice.increment_id}}</h1>
                                              <br />                                              
                                              <p style="font-family: 'Gotham-Book', Tahoma, Helvetica, Arial, sans-serif; color: #464646; font-size: 12px; line-height: 19px;text-align:center;">Don’t forget to leave a rating a review of the product or recommend us to your friends <br> to earn more rewards points.</p>
                                              <br />
                                              <!--  -->
                                          </td>
                                        </tr>
                                        <tr class="order-information">
                                            <td>
                                                {{if comment}}
                                                <table cellspacing="0" cellpadding="0" class="message-container">
                                                    <tr>
                                                        <td>{{var comment}}</td>
                                                    </tr>
                                                </table>
                                                {{/if}}
                                                {{layout area="frontend" handle="sales_email_order_invoice_items" invoice=$invoice order=$order}}
                                                <table cellspacing="0" cellpadding="0" border="0" width="100%">                                                
                                                    <tr>
                                                        <td class="address-details" style="padding-bottom: 30px;">
                                                            <h3 style="font-family:'MinionPro-Regular', Tahoma, Helvetica, Arial, sans-serif; color: #252525; font-size: 13px; line-height: 16px; letter-spacing: 0.1em; text-transform: uppercase; margin:0px;">Bill to:</h3>
                                                            <p style="font-family: 'Gotham-Book', Tahoma, Helvetica, Arial, sans-serif; color: #464646; font-size: 12px; line-height: 19px;"><span class="no-link">{{var order.billing_address.format('html')}}</span></p>
                                                        </td>
                                                        {{depend order.getIsNotVirtual()}}
                                                        <td class="address-details" style="padding-bottom: 30px;">
                                                            <h3 style="font-family:'MinionPro-Regular', Tahoma, Helvetica, Arial, sans-serif; color: #252525; font-size: 13px; line-height: 16px; letter-spacing: 0.1em; text-transform: uppercase; margin:0px;">Ship to:</h3>
                                                            <p style="font-family: 'Gotham-Book', Tahoma, Helvetica, Arial, sans-serif; color: #464646; font-size: 12px; line-height: 19px;"><span class="no-link">{{var order.shipping_address.format('html')}}</span></p>
                                                        </td>
                                                        {{/depend}}
                                                    </tr>
                                                
                                                    <tr>
                                                        {{depend order.getIsNotVirtual()}}
                                                        <td class="address-details">
                                                            <h6 style="font-family:'MinionPro-Regular', Tahoma, Helvetica, Arial, sans-serif; color: #252525; font-size: 13px; line-height: 16px; letter-spacing: 0.1em; text-transform: uppercase; margin:0px;">Shipping method:</h6>
                                                            <p style="font-family: 'Gotham-Book', Tahoma, Helvetica, Arial, sans-serif; color: #464646; font-size: 12px; line-height: 19px;">{{var order.shipping_description}}</p>
                                                        </td>
                                                        {{/depend}}
                                                        <td class="address-details">
                                                            <h6 style="font-family:'MinionPro-Regular', Tahoma, Helvetica, Arial, sans-serif; color: #252525; font-size: 13px; line-height: 16px; letter-spacing: 0.1em; text-transform: uppercase; margin:0px;">Payment method:</h6>
                                                            <span style="font-family: 'Gotham-Book', Tahoma, Helvetica, Arial, sans-serif; color: #464646; font-size: 12px; line-height: 19px;">{{var order.getPayment().getMethodInstance().getTitle()}}</span>
                                                        </td>
                                                    </tr>                                                 
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>                            
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>