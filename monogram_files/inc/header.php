<!-- 
   ____  _____ ____  _  _______ ___  ____    _   _ _____    _    ____  _____ ____  
  |  _ \| ____/ ___|| |/ /_   _/ _ \|  _ \  | | | | ____|  / \  |  _ \| ____|  _ \ 
  | | | |  _| \___ \| ' /  | || | | | |_) | | |_| |  _|   / _ \ | | | |  _| | |_) |
  | |_| | |___ ___) | . \  | || |_| |  __/  |  _  | |___ / ___ \| |_| | |___|  _ < 
  |____/|_____|____/|_|\_\ |_| \___/|_|     |_| |_|_____/_/   \_\____/|_____|_| \_\
                                           
-->

<header id="desktop-header" class="hidden-sm hidden-xs">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9">
        <div id="desktop-header-right-container">
          <div id="desktop-header-logo-container">
            <a href="index.php">
              <span id="desktop-header-logo"></span>
              <span id="monogram-name"></span>
            </a>
          </div>
          <div id="desktop-header-menu-conainer">
            <ul>
              <li><a href="monogram-experience.php">About</a></li>
              <li><a href="tea-store.php">Shop</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="contact.php">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        
        <div id="desktop-header-cart">
          <ul>
            <li><a href="#" class="text">Currency</a></li>
            <li><a href="#" class="text">Join/Log in</a></li>
            <li><a href="#" class="text">Cart <span>(0)</span></a></li>
            <li><a href="#" class="fa fa-bars"></a></li>
          </ul>
        </div>

        <div class="currency-switcher">
          <div class="currency-form" style="display: none;">
            <label for="select-currency">Your Currency:</label>
            <select id="select-currency" name="currency" title="Your Currency" onchange="setLocation(this.value)">
              <option value="https://www.gryphontea.com/directory/currency/switch/currency/AUD/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/">AUD</option>
                <option value="https://www.gryphontea.com/directory/currency/switch/currency/GBP/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/">GBP</option>
                <option value="https://www.gryphontea.com/directory/currency/switch/currency/CNY/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/">CNY</option>
                <option value="https://www.gryphontea.com/directory/currency/switch/currency/EUR/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/" selected="selected">EUR</option>
                <option value="https://www.gryphontea.com/directory/currency/switch/currency/HKD/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/">HKD</option>
                <option value="https://www.gryphontea.com/directory/currency/switch/currency/JPY/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/">JPY</option>
                <option value="https://www.gryphontea.com/directory/currency/switch/currency/MYR/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/">MYR</option>
                <option value="https://www.gryphontea.com/directory/currency/switch/currency/SGD/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/">SGD</option>
                <option value="https://www.gryphontea.com/directory/currency/switch/currency/USD/uenc/aHR0cDovL3d3dy5ncnlwaG9udGVhLmNvbS8,/">USD</option>
            </select>
          </div>
          <ul class="currency-select all-dropdown" style="display: block;">
              <li><a href="#" id="AUD">AUD - Australian Dollar</a></li>
              <li><a href="#" id="GBP">GBP - British Pound Sterling</a></li>
              <li><a href="#" id="CNY">CNY - Chinese Yuan</a></li>
              <li><a href="#" id="EUR">EUR - Euro</a></li>
              <li><a href="#" id="HKD">HKD - Hong Kong Dollar</a></li>
              <li><a href="#" id="JPY">JPY - Japanese Yen</a></li>
              <li><a href="#" id="MYR">MYR - Malaysian Ringgit</a></li>
              <li><a href="#" id="SGD">SGD - Singapore Dollar</a></li>
              <li><a href="#" id="USD">USD - US Dollar</a></li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</header> <!-- #desktop-header -->



