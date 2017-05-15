Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_jsxFileName="src/CreditCard/index.js";var _reactNativeLinearGradient=require("react-native-linear-gradient");var _reactNativeLinearGradient2=_interopRequireDefault(_reactNativeLinearGradient);
var _reactNativeFlipCard=require("react-native-flip-card");var _reactNativeFlipCard2=_interopRequireDefault(_reactNativeFlipCard);
var _autobindDecorator=require("autobind-decorator");var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _CardInfo=require("../CardInfo");var _CardInfo2=_interopRequireDefault(_CardInfo);
var _styles=require("./styles");var _styles2=_interopRequireDefault(_styles);
var _logos=require("./logos");var _logos2=_interopRequireDefault(_logos);

var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var






CreditCard=(0,_autobindDecorator2.default)(_class=function(_Component){_inherits(CreditCard,_Component);
function CreditCard(){_classCallCheck(this,CreditCard);var _this=_possibleConstructorReturn(this,(CreditCard.__proto__||Object.getPrototypeOf(CreditCard)).call(this));

_this.state={
width:null,
height:null};return _this;

}_createClass(CreditCard,[{key:"onLayout",value:function onLayout(

event){var _event$nativeEvent$la=
event.nativeEvent.layout,width=_event$nativeEvent$la.width,height=_event$nativeEvent$la.height;
this.setState({height:height,width:width});
}},{key:"colorText",value:function colorText(

lightness,opacity){
var color=lightness=="dark"?'255,255,255':'0,0,0';
var shadow=lightness=="dark"?'#000':'#FFF';

return{
color:"rgba("+color+", "+opacity+")",
textShadowColor:shadow};

}},{key:"render",value:function render()

{var

card=this.props.card;

var info=new _CardInfo2.default(card.number);
this.info=info;

var flipcardProps={
style:{borderWidth:0,borderColor:'transparent'},
flipHorizontal:true,
flipVertical:false,
clickable:true,
perspective:0,
friction:6,
flip:false};


var containerProps={
style:[_styles2.default.card],


onLayout:this.onLayout};


var gradient={
front:{
colors:info.bank.style.gradients,
start:{x:0.0,y:1.0},
end:{x:0.76,y:0.47},
style:_styles2.default.front},


back:{
colors:info.bank.style.gradients,
start:{x:0.76,y:0.47},
end:{x:0.0,y:1.0},
style:_styles2.default.back}};



var employerStyle=[
_styles2.default.employerText,
this.colorText(info.bank.style.lightness,0.8)];


var numberCardStyle=[
_styles2.default.cardNumber,
this.colorText(info.bank.style.lightness,0.85)];


var bankLogoBox=!_logos2.default.banks[info.bank.logo.png]?
_react2.default.createElement(_reactNative.View,{style:[
_styles2.default.frontLogoImage,
_styles2.default.dashed],__source:{fileName:_jsxFileName,lineNumber:91}}):


_react2.default.createElement(_reactNative.Image,{
source:{uri:_logos2.default.banks[info.bank.logo.png]},
style:_styles2.default.frontLogoImage,
resizeMode:"contain",__source:{fileName:_jsxFileName,lineNumber:96}});var



numbers=info.numberNice,mask=info.numberMask;
var numberCard=!card.number?
_react2.default.createElement(_reactNative.View,{style:[_styles2.default.dashed,_styles2.default.emptyNumber],__source:{fileName:_jsxFileName,lineNumber:105}}):

_react2.default.createElement(_reactNative.Text,{style:numberCardStyle,__source:{fileName:_jsxFileName,lineNumber:107}},
numbers+mask.substr(numbers.length,18));



var brandLogo=!_logos2.default.brands[info.brand.logo.png]?
_react2.default.createElement(_reactNative.View,{style:[
_styles2.default.frontBrandImage,
_styles2.default.dashed],__source:{fileName:_jsxFileName,lineNumber:113}}):


_react2.default.createElement(_reactNative.Image,{
source:{uri:_logos2.default.brands[info.brand.logo.png]},
style:_styles2.default.frontBrandImage,
resizeMode:"contain",__source:{fileName:_jsxFileName,lineNumber:118}});



return(
_react2.default.createElement(_reactNative.View,_extends({},containerProps,{__source:{fileName:_jsxFileName,lineNumber:126}}),
_react2.default.createElement(_reactNativeFlipCard2.default,_extends({},flipcardProps,{__source:{fileName:_jsxFileName,lineNumber:127}}),
_react2.default.createElement(_reactNativeLinearGradient2.default,_extends({},gradient.front,{__source:{fileName:_jsxFileName,lineNumber:128}}),
_react2.default.createElement(_reactNative.View,{style:_styles2.default.bankLogoContainer,__source:{fileName:_jsxFileName,lineNumber:129}},bankLogoBox),
numberCard,

_react2.default.createElement(_reactNative.View,{style:_styles2.default.info,__source:{fileName:_jsxFileName,lineNumber:132}},
_react2.default.createElement(_reactNative.View,{style:_styles2.default.employer,__source:{fileName:_jsxFileName,lineNumber:133}},
_react2.default.createElement(_reactNative.Text,{style:employerStyle,__source:{fileName:_jsxFileName,lineNumber:134}},card.name),
_react2.default.createElement(_reactNative.Text,{style:employerStyle,__source:{fileName:_jsxFileName,lineNumber:135}},card.expiry)),


brandLogo)),



_react2.default.createElement(_reactNativeLinearGradient2.default,_extends({},gradient.back,{__source:{fileName:_jsxFileName,lineNumber:142}}),
_react2.default.createElement(_reactNative.View,{style:_styles2.default.cvcContainer,__source:{fileName:_jsxFileName,lineNumber:143}},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.cvcText,__source:{fileName:_jsxFileName,lineNumber:144}},card.cvc))))));





}}]);return CreditCard;}(_react.Component))||_class;exports.default=CreditCard;