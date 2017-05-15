Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _mixins=require("../utils/mixins");
var _reactNative=require("react-native");

var defaultTheme=_reactNative.StyleSheet.create({
card:{
height:180,
padding:3,
width:300},


dashed:{
borderColor:'rgba(255,255,255, 0.3)',
borderStyle:'dashed',
borderRadius:3,
borderWidth:1},


front:_extends({
borderWidth:1,borderColor:'rgba(0,0,0, 0.1)'},
(0,_mixins.flex)('column',null,'space-between'),{

borderRadius:10,
padding:10,
flex:1}),


back:_extends({
borderWidth:1,borderColor:'rgba(0,0,0, 0.1)'},
(0,_mixins.flex)('column',null,'center'),

(0,_mixins.padding)(10,0),{
borderRadius:10,
flex:1},
_reactNative.Platform.select({
ios:{
shadowColor:"#FFF",
shadowOpacity:0.3,
shadowRadius:3,
shadowOffset:{
height:0,
width:0}}})),





bankLogoContainer:_extends({},
(0,_mixins.flex)('row','center','flex-start'),{
backgroundColor:'transparent'}),


frontLogoImage:{
height:30,width:'60%'},


cardNumber:{
color:'rgba(255, 255, 255, 0.85)',
textShadowOffset:{height:1,width:-1},
textShadowColor:'#000',
textShadowRadius:1,

backgroundColor:'transparent',
textAlign:'center',
fontWeight:'300',
marginTop:15,
fontSize:16},


emptyNumber:_extends({},
(0,_mixins.margin)(20,30,0,30),{
height:25}),


info:_extends({},
(0,_mixins.flex)('row','center','space-between'),
(0,_mixins.padding)(0,15),{
marginTop:25}),


employer:_extends({},
(0,_mixins.flex)('column','flex-start','flex-start')),


employerText:{
color:'rgba(255, 255, 255, 0.8)',
backgroundColor:'transparent',
fontSize:11,

textShadowOffset:{height:1,width:0},
textShadowColor:'#000',
textShadowRadius:1},


frontBrandImage:_extends({},
(0,_mixins.flex)('row','center','flex-end'),{
height:26,width:40}),


cvcContainer:_extends({
backgroundColor:'rgba(0, 0, 0, 0.7)'},
(0,_mixins.flex)('row','center','flex-end'),{
height:30}),


cvcText:_extends({
backgroundColor:'rgba(255, 255, 255, 0.4)'},
(0,_mixins.flex)('row','center','center'),{
textAlign:'center',
color:'#000',
paddingTop:6,
fontSize:15,
width:'25%',
height:30})});exports.default=



defaultTheme;