// JS Goes here - ES6 supported
import styles from "./css/main.css";
import "../node_modules/jquery/src/jquery";
import "./js/lazyload.min.js";
import "./js/fancybox.min.js";
var $ = require('../node_modules/jquery/src/jquery.js');

lazyload();
$("img.lazyload").lazyload();

$('[data-fancybox]').fancybox({
	protect: true,
  preload: true,
  infobar:false,
  buttons:["close"],
  arrows:false
});
$.fancybox.defaults.animationEffect = "fade";
