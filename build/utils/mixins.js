Object.defineProperty(exports,"__esModule",{value:true});exports.padding=padding;exports.











margin=margin;exports.











flex=flex;function padding(){for(var _len=arguments.length,paddings=Array(_len),_key=0;_key<_len;_key++){paddings[_key]=arguments[_key];}if(paddings.length==1)return{paddingLeft:paddings[0],paddingRight:paddings[0],paddingBottom:paddings[0],paddingTop:paddings[0]};else if(paddings.length==2)return{paddingLeft:paddings[1],paddingRight:paddings[1],paddingTop:paddings[0],paddingBottom:paddings[0]};else{var style={};['paddingTop','paddingRight','paddingBottom','paddingLeft'].forEach(function(a,i){return style[a]=paddings[i];});return style;};}function margin(){for(var _len2=arguments.length,margins=Array(_len2),_key2=0;_key2<_len2;_key2++){margins[_key2]=arguments[_key2];}if(margins.length==1)return{marginLeft:margins[0],marginRight:margins[0],marginBottom:margins[0],marginTop:margins[0]};else if(margins.length==2)return{marginLeft:margins[1],marginRight:margins[1],marginTop:margins[0],marginBottom:margins[0]};else{var style={};['marginTop','marginRight','marginBottom','marginLeft'].forEach(function(a,i){return style[a]=margins[i];});return style;};}function flex(){var direction=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var alignItems=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var justifyContent=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;
var style={};
if(justifyContent)style.justifyContent=justifyContent;
if(direction)style.flexDirection=direction;
if(alignItems)style.alignItems=alignItems;
return style;
}