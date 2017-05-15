Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class;var _banksAndPrefixes=require("./banksAndPrefixes");var _banksAndPrefixes2=_interopRequireDefault(_banksAndPrefixes);
var _autobindDecorator=require("autobind-decorator");var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);

var _properties=require("./properties");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var





banks=_banksAndPrefixes2.default.banks,prefixes=_banksAndPrefixes2.default.prefixes;var





CardInfo=(0,_autobindDecorator2.default)(_class=function(){
function CardInfo(){var numberSource=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,CardInfo);
this.numberSource=numberSource;
this.number=this.getNumber(numberSource);

_lodash2.default.assign(this,_properties.defaultProps,{
options:_extends({},_properties.defaultOptions,

options)});



return this.info();
}_createClass(CardInfo,[{key:"getNumber",value:function getNumber(

numberSource){
var numberSourceString=numberSource+'';
return /^[\d ]*$/.test(numberSourceString)?numberSourceString.replace(/\D/g,''):'';
}},{key:"getBank",value:function getBank(

number){
if(number.length<6)return undefined;
var prefix=number.substr(0,6);
return prefixes[prefix]?banks[prefixes[prefix]]:undefined;
}},{key:"getBrand",value:function getBrand(

number){
var _brands=[];
for(var i=0;i<_properties.brands.length;i++){
if(_properties.brands[i].pattern.test(number)){
_brands.push(_properties.brands[i]);
}
}

if(_brands.length===1){
return _brands[0];
}
}},{key:"getLogo",value:function getLogo(

dirname,basename,extname){
return basename?dirname+(extname?basename+'.'+extname:basename):null;
}},{key:"getBrandLogoBasename",value:function getBrandLogoBasename(

brandAlias,brandLogoPolicy,backgroundLightness,bankLogoStyle){
switch(brandLogoPolicy){
case'auto':return brandAlias+'-'+(bankLogoStyle||'colored');
case'colored':return brandAlias+'-colored';
case'mono':return brandAlias+(backgroundLightness==='light'?'-black':'-white');
case'black':return brandAlias+'-black';
case'white':return brandAlias+'-white';}

}},{key:"getBlocks",value:function getBlocks(

numberGaps,numberLengths){
var numberLength=numberLengths[numberLengths.length-1];
var blocks=[];

for(var i=numberGaps.length-1;i>=0;i--){
var blockLength=numberLength-numberGaps[i];
numberLength-=blockLength;
blocks.push(blockLength);
}

blocks.push(numberLength);
return blocks.reverse();
}},{key:"getMask",value:function getMask(

maskDigitSymbol,maskDelimiterSymbol,numberBlocks){
var mask='';
for(var i=0;i<numberBlocks.length;i++){
mask+=(i?maskDelimiterSymbol:'')+Array(numberBlocks[i]+1).join(maskDigitSymbol);
}
return mask;
}},{key:"getNumberNice",value:function getNumberNice(

number,numberGaps){
var offsets=[0].concat(numberGaps).concat([number.length]);
var components=[];
for(var i=0;offsets[i]<number.length;i++){
var start=offsets[i];
var end=Math.min(offsets[i+1],number.length);
components.push(number.substring(start,end));
}
return components.join(this.options.maskDelimiterSymbol);
}},{key:"registerBank",value:function registerBank()

{var _options=
this.options,banksLogosPath=_options.banksLogosPath,banksLogosPath=_options.banksLogosPath,preferredExt=_options.preferredExt;
var info=this.getBank(this.number);

if(info){
var bank={};
bank.logo={
png:this.getLogo(banksLogosPath,info.logoPng),
svg:this.getLogo(banksLogosPath,info.logoSvg),
style:info.logoStyle};


bank.name={ru:info.name,en:info.nameEn};
bank.country=info.country;
bank.alias=info.alias;
bank.url=info.url;

bank.style={
lightness:info.backgroundLightness,
gradients:info.backgroundColors,
background:info.backgroundColor,
text:info.text};


this.bank=bank;
}
}},{key:"registerBrand",value:function registerBrand()

{
var info=this.getBrand(this.number);var _options2=
this.options,brandLogoPolicy=_options2.brandLogoPolicy,maskDigitSymbol=_options2.maskDigitSymbol,maskDelimiterSymbol=_options2.maskDelimiterSymbol;

if(info){
this.codeLength=info.codeLength;
this.codeLengths=info.lengths;
this.codeName=info.codeName;
this.numberGaps=info.gaps;

var brand={};

brand.alias=info.alias;
brand.name=info.name;

var logoBasename=this.getBrandLogoBasename(brand.alias,brandLogoPolicy,this.bank.style.lightness,this.bank.logo.style);
brand.logo={
basename:logoBasename,
png:this.getLogo(this.options.brandsLogosPath,logoBasename,'png'),
svg:this.getLogo(this.options.brandsLogosPath,logoBasename,'svg')};


this.brand=brand;
}

this.numberBlocks=this.getBlocks(this.numberGaps,this.numberLengths);
this.numberMask=this.getMask(maskDigitSymbol,maskDelimiterSymbol,this.numberBlocks);
this.numberNice=this.getNumberNice(this.number,this.numberGaps);
}},{key:"info",value:function info()

{
this.registerBank();
this.registerBrand();
}}]);return CardInfo;}())||_class;exports.default=CardInfo;