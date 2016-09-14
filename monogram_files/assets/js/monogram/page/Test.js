goog.provide('monogram.page.Test');
goog.require('monogram.page.Default');



goog.require('monogram.graph.Data');

goog.require('monograph.graph.DataLoader');
goog.require('monograph.graph.SingleGraph');

goog.require('monograph.graph.CombinationDataLoader');
goog.require('monogram.graph.CombinationGraph')




/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {monogram.page.Default}
 */
monogram.page.Test = function(options, element) {
  monogram.page.Default.call(this, options, element);
  this.options = $.extend(this.options, monogram.page.Test.DEFAULT, options);


  this.graph_section = null;
  this.mobile_graph_section = null;



};
goog.inherits(monogram.page.Test, monogram.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
monogram.page.Test.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
monogram.page.Test.prototype.init = function() {

  monogram.page.Test.superClass_.init.call(this);



  

  if ($('#sample-single-graph').length != 0) {
    this.create_single_graph();
  }

    
  if ($('#sample-combination-graph').length != 0) {
    this.create_combination_graph();
  }
  


  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//



monogram.page.Test.prototype.create_single_graph = function(){




  /**
   * @type {monograph.graph.SingleGraph}
   */
  this.single_graph = new monograph.graph.SingleGraph({}, $('#sample-single-graph'));


  this.data_loader = new monograph.graph.DataLoader({}, $('#monograph-graph-data'));

  
  goog.events.listen(this.data_loader, monograph.graph.DataLoader.ON_GRAPH_DATA_LOAD_COMPLETE, function(event){


    console.log('monograph.graph.DataLoader.ON_GRAPH_DATA_LOAD_COMPLETE');

    var graph_id = this.single_graph.data_id;

    /**
     * @type {monogram.graph.Data}
     */
    var graph_data = this.data_loader.get_data_by_id(graph_id);

    if (graph_data != null) {
      this.single_graph.set_data(graph_data);
    }

    

  }.bind(this));  

};


monogram.page.Test.prototype.create_combination_graph = function() {

  /**
   * @type {monogram.graph.CombinationGraph}
   */
  this.combination_graph = new monogram.graph.CombinationGraph({}, $('#sample-combination-graph'));


  this.combination_data_loader = new monograph.graph.CombinationDataLoader({}, $('#monograph-combined-graph-data'));

  
  goog.events.listen(this.combination_data_loader, monograph.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE, function(event){

    console.log('monograph.graph.CombinationDataLoader.ON_COMBINED_GRAPH_DATA_LOAD_COMPLETE');

    // this.combination_graph.set_data
    
    /**
     * @type {monogram.graph.Data}
     */
    var graph_data_01 = this.combination_data_loader.get_data_by_id('earl-grey-neroli');

    /**
     * @type {monogram.graph.Data}
     */
    var graph_data_02 = this.combination_data_loader.get_data_by_id('shiso-mint');
    
    this.combination_graph.set_data_01(graph_data_01);
    this.combination_graph.set_data_02(graph_data_02);


  }.bind(this));  
  
}


//    __  __  ___  ____ ___ _     _____
//   |  \/  |/ _ \| __ )_ _| |   | ____|
//   | |\/| | | | |  _ \| || |   |  _|
//   | |  | | |_| | |_) | || |___| |___
//   |_|  |_|\___/|____/___|_____|_____|
//



//     _____     _______ ____  ____  ___ ____  _____
//    / _ \ \   / / ____|  _ \|  _ \|_ _|  _ \| ____|
//   | | | \ \ / /|  _| | |_) | |_) || || | | |  _|
//   | |_| |\ V / | |___|  _ <|  _ < | || |_| | |___
//    \___/  \_/  |_____|_| \_\_| \_\___|____/|_____|
//




/**
 * @override
 * @inheritDoc
 */
monogram.page.Test.prototype.update_page_layout = function() {

  monogram.page.Test.superClass_.update_page_layout.call(this);



};


/**
 * @override
 * @inheritDoc
 */
monogram.page.Test.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  monogram.page.Test.superClass_.scroll_to_target.call(this, str_param);

  /*
  // Mice venue landing - on hash change
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){

    // console.log('str_param: ' + str_param);
    if (str_param == "indoor-venue") {
      this.mice_landing_mobile_indoor_open();

    } else if (str_param == "outdoor-venue") {
      this.mice_landing_mobile_outdoor_open();

    } else if (str_param == "ballrooms-venue") {
      this.mice_landing_mobile_ballrooms_open();
    }

  }
  */

};
/**
 * @override
 * @inheritDoc
 */
monogram.page.Test.prototype.on_scroll_to_no_target = function(){

  // Mice venue landing
  /*
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){
    // console.log('go home!!');
    this.mice_landing_mobile_both_close();
  }
  */

};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//



//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('monogram.page.Test', monogram.page.Test);