goog.provide('monogram.graph.GraphDataItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.graph.GraphDataItem = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, monogram.graph.GraphDataItem.DEFAULT, options);
  this.element = element;

  this.data_id          = this.element.attr('data-id');
  this.data_color       = '#' + this.element.attr('data-color');
  this.data_type        = this.element.attr('data-type');                             // main or sub
  this.data_main        = this.element.attr('data-main');                             // id of main



  this.score_array = [
  ];


  // main difference is that the score array will contain just the scores of the notes of the t
  // the graph is drawn differently anyway
  this.graph_point_array = [];
  

  // this.data_html = $.trim(this.element.html());
  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(monogram.graph.GraphDataItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
monogram.graph.GraphDataItem.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
monogram.graph.GraphDataItem.EVENT_01 = '';



/**
 * CLASSNAME Event Constant
 * @const
 * @type {Array}
 */
monogram.graph.GraphDataItem.FLAVOR_NAME_ARRAY = [
  'floral': 'Floral',
  'creamy': 'Creamy',
  'marine': 'Marine',
  'mineral': 'Mineral',
  'citrus': 'Citrus',
  'fruity': 'Fruity',
  'sweet': 'Sweet',
  'wood': 'Wood',
  'herbaceous': 'Herbaceous'
];

/**
 * CLASSNAME Event Constant
 * @const
 * @type {Array}
 */
monogram.graph.GraphDataItem.SUBFLAVOR_NAME_ARRAY = [
  'floral--cherry-blossom':'Cherry Blossom',
  'floral--dried-flowers':'Dried Flowers',
  'floral--hyacinth':'Hyacinth',
  'floral--jasmine':'Jasmine',
  'floral--lavender':'Lavender',
  'floral--lily':'Lily',
  'floral--orange-blossom':'Orange Blossom',
  'floral--orchid':'Orchid',
  'floral--rose':'Rose',
  'floral--saffron':'Saffron',
  'creamy--vanilla':'Vanilla',
  'creamy--white-chocolate':'White Chocolate',
  'marine--dried-kelp':'Dried Kelp',
  'marine--iodine':'Iodine',
  'marine--mineral':'Mineral',
  'marine--seaweed':'Seaweed',
  'mineral--earth':'Earth',
  'mineral--mushroom':'Mushroom',
  'citrus--bergamot':'Bergamot',
  'citrus--grapefruit':'Grapefruit',
  'citrus--lemon':'Lemon',
  'citrus--orange':'Orange',
  'fruity--cherry':'Cherry',
  'fruity--lychee':'Lychee',
  'fruity--orange':'Orange',
  'fruity--promegranate':'Promegranate',
  'sweet--biscuit':'Biscuit',
  'sweet--bread':'Bread',
  'sweet--butterscotch':'Butterscotch',
  'sweet--chestnut':'Chestnut',
  'sweet--honey':'Honey',
  'sweet--molasses':'Molasses',
  'sweet--rosehip':'Rosehip',
  'sweet--vanilla':'Vanilla',
  'wood--new-wood-cedar':'New Wood Cedar',
  'wood--oak':'Oak',
  'wood--pine':'Pine',
  'wood--smoke':'Smoke',
  'herbaceous--bamboo':'Bamboo',
  'herbaceous--cut-grass':'Cut Grass',
  'herbaceous--eucalyptus':'Eucalyptus',
  'herbaceous--green-stem':'Green Stem',
  'herbaceous--peppermint':'Peppermint',
  'herbaceous--shiso':'Shiso',
  'herbaceous--peppery':'Peppery'
];


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.graph.GraphDataItem.prototype.private_method_01 = function() {};
monogram.graph.GraphDataItem.prototype.private_method_02 = function() {};
monogram.graph.GraphDataItem.prototype.private_method_03 = function() {};
monogram.graph.GraphDataItem.prototype.private_method_04 = function() {};
monogram.graph.GraphDataItem.prototype.private_method_05 = function() {};
monogram.graph.GraphDataItem.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.graph.GraphDataItem.prototype.sample_method_calls = function() {
  monogram.graph.GraphDataItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.graph.GraphDataItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


monogram.graph.GraphDataItem.prototype.public_method_01 = function() {};
monogram.graph.GraphDataItem.prototype.public_method_02 = function() {};
monogram.graph.GraphDataItem.prototype.public_method_03 = function() {};
monogram.graph.GraphDataItem.prototype.public_method_04 = function() {};
monogram.graph.GraphDataItem.prototype.public_method_05 = function() {};
monogram.graph.GraphDataItem.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.GraphDataItem.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.GraphDataItem.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.GraphDataItem.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.GraphDataItem.prototype.on_event_handler_04 = function(event) {
};

