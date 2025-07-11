  /**
   * Prince Godswill *
  *@param This project, 'HOUXER', is been sponsored by the HEXAX SOFTWARES FOUNDATION.
  *@param Visit 'www.houxer.com/guide' for for more information on the houxer project , documentation and houxer's development process roadmap.
  *@param This is a web JIT development version of Houxer
  *@param We at the core team of Houxer project are determined on developing and improving Houxer.js features and perfomance issues, we only need your support to help and encourage us on maintaing this template engine.
  *@param Thanks for choosing Houxer
  */
const Houxer=(function(global){
  "use strict"
  const log=console.log;
  const version = "0.1.3";
  const get_version=()=>'houxer-'+version;//houxer at it's earliest version
  const isArray=Array.isArray;
  const toString=Object.prototype.toString;
  const _toStringCall=txt=>toString.call(txt);
  const isDate=date=>_toStringCall(date) === '[object Date]';
  const isSet=val=>_toStringCall(val) === '[object Set]';

const isMap=map=>_toStringCall(map) === '[object Map]';
  const isWeakMap=map=>_toStringCall(map) === '[object WeakMap]';
  const isWeakSet=setup=>_toStringCall(setup) === '[object WeakSet]';
  const toStringType=value=>_toStringCall(value).slice(8, -1).toLowerCase();
  const isString=str=>getType(str) === 'string';
  const isNull=arg=>arg==null;
  const isUndefined=arg=>_toStringCall(arg) === '[object Undefined]';
  const isObject=obj=>getType(obj) === 'object';
  const isPObject=obj=>_toStringCall(obj) === '[object Object]';
  const isPrimitive=val=>_validateType(val, [ String, Number, Symbol, Boolean, Date ]) || isNull(val);
  const hasOwn=Object.hasOwn;
  const assign=Object.assign;
  const entries=Object.entries;
  const keys=Object.keys;
  const values=Object.values;
  const preventX=Object.preventExtensions;
  // function define(object, propKey, value){
  //   return Object.defineProperty(object, propKey, { enumerable, configurable, value });
  // }
  const define=Object.defineProperty;
  const isS=Object.is;
  const hasProp=(obj, prop)=> prop  in obj;
  function _mapValue(obj, arg){
    return isString(obj) ? new Set(obj.split(',')).has(arg) : _validateType(arg, [Set, Tuple, Map ]) ? obj.has(arg) : isPObject(obj) ? hasProp(obj, arg) : isArray(obj) ? obj.includes(arg) :  false;
  }
  const E_Obj=Object.freeze({});
  const variableDeclarationRegex=/([\s\S]+[^=]*)[ ]*=[ ]*([\s\S]+)/m;
  const invalidIdentifierCharRegex=/[='"!@#%^&*()+\-\[\]{};:\\|,.<\/? ]/;
  const invalidAccessorCharRegex=/[='"!@#%^&*(){};:\\|,<? ]/;
  const isValidAccessor=variable => isString(variable) && variable.at(0).match(/[\w$]/) && !variable.match(invalidAccessorCharRegex);
  const isValidIdentifier=variable => isString(variable) && variable.at(0).match(/[\w$]/) && !variable.match(invalidIdentifierCharRegex);
  const constBlockContext="if_Block,for_Block,slots_Block,children_Block";
  const isValidCtxType=type=>_mapValue(constBlockContext, type);
  const isFunction=func=>getType(func) === 'function';
  const isPFunction=func=>isFunction(func) && !isClass(func);
  const isNumber=num=>getType(num) === 'number';
  const isBoolean=bool=>getType(bool) === 'boolean';
  const bool=Boolean;
  const defProps=Object.defineProperties;
  const isSymbol=sym=>_toStringCall(sym) === '[object Symbol]';
  const isChar=char=>isString(char) || isSymbol(char);
  const isPromise=prom=> _toStringCall(prom) === '[object Promise]' && isFunction(prom.then) && isFunction(prom.catch);
  const nullObj=()=> Object.create(null);
  const isTrue=compute=>compute === true;
  const isFalse=compute=>compute === false;
  const $warner=`<< Houxer Exception >>.....>>>>>>>`;
  const characters=/\!\"\#\%\&\'\(\)\*\+\,\.\/\;\<\=\>\@\[\\\]\^\`\{\|\}\~ /;
  function $Debug(msg, self, dictateW=false, txt=''){
    let shouldlog=true;
    if(isHouxerBuild(self)) shouldlog=self[$$$core].settings.debug && !self[$$$operands].initialized;
    if(shouldlog ) {
      if(dictateW) console.warn(`${$warner}\n\nEncountered a problem ${txt} \n\n at  at  \n <${self && isHouxerBuild(self) ? self[$$$ownProperties].name : 'UnknownWidget' }> widget`);//houxer warming debugger
      console.error(`${$warner}\n\n${msg}`);//houxer warming debugger
      // $warn(msg.stack ? msg.stack : msg, self)
    }
  }
  function $warn(msg, self){
    let shouldlog=true
    if(isHouxerBuild(self)) shouldlog=self[$$$core].settings.debug;
    if(shouldlog) console.warn(`${$warner}\n\n${msg}`);//houxer warming debugger
  }
  const isIterator=iterator=>iterator && !isArray(iterator) && isPFunction(iterator[Symbol.iterator]);
  const isIterable=iterable=>(_validateType(iterable, [Object,Array,Set,Map,Tuple]) || isIterator(iterable)) && !isString(iterable);
  const enumerable =true, configurable =true, writable = true ;
  const isEmptyStr=str=>str === "";
  const $Error=(msg,self)=>{
    let shouldlog=true
    if(self) shouldlog=self[$$$compiler].config.debug
    if(isTrue(shouldlog)) console.error(`${$warner}\n\n ${msg}`);//houxer warming debugger
  }
  const blockTagRegex=/^(::[\w$]+)/;
  const isBlockTag=tagName=>blockTagRegex.test(tagName);
  const hasHyphen_bind=key=>/^\-\-[\w\-|[\]]+/.test(key);
  const hasAt_bind=key=>/^@[\w\-|[\]]+/.test(key);
  const has$$_bind=key=>/^\$\$[\w\-|[\]]+/.test(key);
  const hasDir_bind=key=>/^dir\-\-[\w\-|[\]]+/.test(key)
  const hasSpread_bind=( key , useAccessor=false )=> ( useAccessor ? /^\.\.\.[\w$.]+/ : /^\.\.\.[\w$]+/ ).test(key);
  const exists=value=> value || isNumber(value) ? true : false ;
  const hasAsterisks_bind=key=>/^\*[\w\-|[\]]+/.test(key)
  const widgetOptionType={ 
    build:Function, 
    model:Function, 
    widgets:Object, 
    preBuild:Function, 
    postBuild:Function, 
    preMount:Function, 
    postMount:Function, 
    preUpdate:Function, 
    postUpdate:Function, 
    postDestroy:Function, 
    preDestroy:Function, 
    handlers:Object, 
    params:[Array, Object], 
    buildConfig:Object, 
    styleSheet:String, 
    directives:Object, 
    template:String, 
    name:String, 
    observers:Object, 
    templateSrc:String, 
    styleSheetSrc:String, 
    filters:Object, 
    blocks:Object,
    signals:Array, 
    publish:Function, 
    transform:[Array, Object], 
    slots:Array, 
    markdownSrc:String, 
    markdown:String,
    fallthrough:Function,
    computedTokens:Object,
    mixins:Array,
    onTracked:Function,
    onEffect:Function,
    onCatch:Function,
    onSlotRender:Function,
    onSlotEffect:Function,
    render:Function
  }
  function HouxerDOMParser(){
    
    return {}
  }
  const { } = HouxerDOMParser()
  const validWidgetOptions=keys(widgetOptionType).join(',');//valid widget options---
  const plainFunctionOptions="model,preBuild,postBuild,preMount,postMount,preUpdate,postUpdate,postDestroy,preDestroy,publish,fallthrough,onEffect,onTracked,onCatch,build,onSlotEffect,onSlotRender";
  const nonAFuncMethod=fnName=> _mapValue(plainFunctionOptions, fnName);
  const calledOnceFNOptions="model,preBuild,postBuild,preMount,postMount,onTracked,build,onSlotRender"
  const isCalledOnceOpt=opt=>_mapValue(calledOnceFNOptions, opt)
  const nodeJSOnlyOption="markdownSrc,styleSheetSrc,templateSrc";
  const isNodeJSOnlyOption=opt=>_mapValue(nodeJSOnlyOption, opt);
  const primaryKeyOptions="build,styleSheetSrc,styleSheet,templateSrc,template,name,markdownSrc,markdown,fallthrough";
  const isPrimaryKeyOption=opt=>_mapValue(opt, primaryKeyOptions);
  const isArgument=arg=>_toStringCall(arg) === "[object Arguments]";
  function len(obj){
    if(!obj) return -1;
    return _validateType(obj, [ String , Array ] ) || isArgument(obj) ? obj.length : isToken(obj) ? len(unwrap(obj)) : _validateType(obj, [ Set, Map, Tuple ]) ? obj.size : isObject(obj) ? keys(obj).length : isNumber(obj) ? obj : -1 ;
  }
  const isValidWidgetOption=opts=>_mapValue(validWidgetOptions, opts);//checks if an option is a vslid Houxer widget option
  const HTML_TAGS="html,head,style,title,body,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,main,nav,section,blockquote,dd,div,dl,dt,figcaption,figure,li,menu,ol,p,pre,ul,a,abbr,b,bdi,bdo,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,audio,map,video,iframe,object,picture,portal,svg,math,canvas,noscript,script,del,ins,caption,col,colgroup,table,tbody,td,tfoot,th,thead,tr,datalist,fieldset,form,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,summary,button,base,link,meta,hr,br,wbr,area,img,track,embed,source,input,template,slot" ;//All html valid tags supported by the Houxer framework
  const IS_HTML_TAG=txt=>_mapValue(HTML_TAGS, txt);
  const WEB_COMPONENTS="template,slot";//Web components tags , also supported by the Houxer framework
  const HTML_FORM_ELEMENTS="select,textarea,input,form,progress,meter,option";
  const Is_Form_Element=element=>IS_ELEMENT_NODE(element) && _mapValue(HTML_FORM_ELEMENTS, element.localName);
  const IS_WEB_COMPONENT=txt=>_mapValue(WEB_COMPONENTS, txt);
  const HTML_VOID_TAGS="base,link,meta,hr,br,wbr,area,img,track,embed,source,input";//HTML void tags, also supported by the Houxer framework
  const IS_HTML_VOID_TAG=txt=>_mapValue(HTML_VOID_TAGS, txt);
  const HTML_DEPRECATED_TAGS="acronym,noembed,applet,noframes,bgsound,param,big,blink,plaintext,center,rb,content,rtc,dir,shadow,font,spacer,frame,strike,frameset,image,tt,keygen,xmp,marquee,nobr,menuitem";//HTML obselete and deprecated element. 
  //The above tags are no more been supported by the houxer framework
  const IS_HTML_DEPRECATED_TAG= txt => _mapValue(HTML_DEPRECATED_TAGS, txt);
  const HTMLIDLAttributes="accesskey,contenteditable,dir,draggable,enterkeyhint,hidden,inert,innerText,inputmode,popover,lang,noModule,nonce,outerText,spellcheck,style,tabindex,title,translate,className,value,innerHTML,outerHTML";
  const isHTMLIDLAttributes=txt=>_mapValue(HTMLIDLAttributes, txt)
  const isHTMLBooleanAttributes=txt=>_mapValue(HTMLBooleanAttributes, txt)
  const HTMLBooleanAttributes="disabled,hidden,draggable,checked,selected,defer,ismap,reversed,readonly,autoplay,disableremoteplayback,muted,loop";
  const DomParserTags="html,head,link,meta,body,style,script,noscript,template"
  const isINDOMElements=tag=>_mapValue(DomParserTags, tag);
  const SVG_TAGS="animate,animateMotion,animateTransform,circle,clipPath,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,stopsvg,switch,symbol,text,textPath,tspan,use,view";
  const SVG_DEPRECATED_TAGS="altGlyph,altGlyphDef,altGlyphItem,cursor,font,font-face,font-face-format,font-face-name,font-face-src,font-face-uri,glyph,glyphToken,hkern,missing-glyph,tref,vkern";
  const IS_SVG_TAG=tag=>_mapValue(SVG_TAGS, tag);
  const IS_SVG_DEPRRCATED_TAG=tag=>_mapValue(SVG_DEPRECATED_TAGS, tag);
  const MATHML_TAGS = "malignmark,menclose,annotation,annotation-xml,maction,merror,maligngroup,mfenced,mn,mo,mmultiscripts,mfrac,semantics,none,mlongdiv,mlabeledtr,mfraction,mtr,mglyph,mi,mover,munder,munderover,mpadded,mphantom,mspace,mroot,mprescripts,msline,mrow,ms,mscarries,mscarry,msgroup,msqrt,mstack,mtd,mtext,mtable,mstyle,msub,msubsup,msrow,msup";
  const IS_MATHML_TAG=tag=>_mapValue(MATHML_TAGS, tag);
  const IS_VALID_TAGNAME=(txt)=>{
    if(IS_HTML_TAG(txt)||IS_WEB_COMPONENT(txt)||IS_HTML_VOID_TAG(txt) || IS_SVG_TAG(txt) || IS_MATHML_TAG(txt)) return true;
    if(IS_HTML_DEPRECATED_TAG(txt) || IS_SVG_DEPRRCATED_TAG(txt)){
      $Debug(`"${txt}" is an html/svg deprecated tag, and should not be used in new projects\n\nhouxer    does not offer the compilation of obselete elements`);
    }
    return false;
  }
  const dataStringTypes="string,function,object,array,boolean,number,symbol,set,map,bigint,set,map,weakmap,weakset,date,weakref,promise,proxy,tuple";//Valid javascript datatypes
  const isValidDataStringType=obj=>_mapValue(dataTypes, obj);//checks if a string value is a dataTypes return text
  const DataFunctionMap=[String, Function, Object, Array, Symbol, Number, Boolean]
  const XtructDataCallableTypes=[Set,Map,WeakMap,WeakSet, Date,WeakRef,Promise,RegExp,Proxy,BigInt,ArrayBuffer,Tuple];
  const isBuiltinType=type=>_mapValue(DataFunctionMap, type) || _mapValue(XtructDataCallableTypes, type);
  function isDomSpecialConstructor(value){
    const domSpecialConstructors=[ Element];
    if(new Set(domSpecialConstructors).has(value)) return true
    return isNativeElement(value) || value instanceof Element;
  }
  const Data_Flags="NodeList,PATCH_FLAGS,PATCH-TYPE-TUPLE"
  const hasUpperCase=str=>str.match(/[A-Z]/);
  const hasLowerCase=str=>str.match(/[a-z]/);
  const hasDigit=dig=>dig.match(/[0-9]/);
  const NodeTypeMap={ 
    ELEMENT_NODE:1, 
    ATTRIBUTE_NODE:2, 
    TEXT_NODE:3, 
    CDATA_SECTION_NODE:4, 
    ENTITY_REFERENCE_NODE:5,
    ENTITY_NODE:6, 
    PROCESSING_INSTRUCTION_NODE:7,
    COMMENT_NODE:8, 
    DOCUMENT_NODE:9, 
    DOCUMENT_TYPE_NODE:10,
    DOCUMENT_FRAGMENT_NODE:11,
    NOTATION_NODE:12 
  }
  if( typeof self === "undefined" ){
    HTMLElement, SVGElement, Element = class {}
  }
  class houxerCustomNativeElement extends HTMLElement{
    constructor(){
      super();
    }
  }
  const isNativeElement=(vnode)=> (vnode instanceof HTMLElement || vnode instanceof SVGElement);
  const IS_TEXT_NODE=node=>node && node.nodeType === NodeTypeMap.TEXT_NODE;
  const IS_ATTRIBUTE_NODE=node=>node && node.nodeType === NodeTypeMap.ATTRIBUTE_NODE;
  const IS_ELEMENT_NODE=node=>node && isNativeElement(node) && node.nodeType === NodeTypeMap.ELEMENT_NODE;
  const IS_ENTITY_NODE=node=>node && node.nodeType === NodeTypeMap.ENTITY_NODE;
  const IS_DOCUMENT_TYPE_NODE=node=>node && node.nodeType === NodeTypeMap.DOCUMENT_TYPE_NODE;
  const IS_DOCUMENT_NODE=node=>node && node.nodeType === NodeTypeMap.DOCUMENT_NODE;
  const IS_NOTATION_NODE=node=>node && node.nodeType === NodeTypeMap.NOTATION_NODE;
  const IS_DOCUMENT_FRAGMENT_NODE=node=>node && node.nodeType === NodeTypeMap.DOCUMENT_FRAGMENT_NODE;
  const IS_CDATA_SECTION_NODE=node=>node && isNativeElement(node) && node.nodeType === NodeTypeMap.CDATA_SECTION_NODE;
  const IS_PROCESSING_INSTRUCTION_NODE=node=>node && node.nodeType === NodeTypeMap.PROCESSING_INSTRUCTION_NODE;
  const IS_ENTITY_REFERENCE_NODE=node=>node && node.nodeType === NodeTypeMap.ENTITY_REFERENCE_NODE;
  const IS_COMMENT_NODE=node=>node && node.nodeType === NodeTypeMap.COMMENT_NODE;
  const TypeMethods={isString, isFunction, isObject, isArray, isBoolean, isNumber, isDate, isSymbol, isSet, isMap, isTuple }
  const isCustomElement=node=>  node instanceof  HTMLElement && isNativeElement(node);
  const spreadFragmentKey=Symbol()
  class spreadRenderFragment{
    constructor(VnodeClasses){
      this[spreadFragmentKey]=VnodeClasses;
    }
  }
  const isSpreadFragment=vnode=> vnode instanceof spreadRenderFragment;
  const lazyKey=Symbol()
  const lazyCacheKey=Symbol()
  const lazyPatchFlagKey=Symbol()
  class lazyRender{
    constructor(render){
      this[lazyKey]=render;
      this[lazyPatchFlagKey]=0
      this[lazyCacheKey]=undefined
    }
  }
  const isLazyRender=render=>render instanceof lazyRender;
  function lazyUnwrap(render){
    if(isToken(render)) render = unwrap(render);
    if(isLazyRender(render)) {
      if(isUndefined(render[lazyCacheKey]) || render[lazyPatchFlagKey]){
        const renderValue=render[lazyKey]();
        render[lazyCacheKey]=renderValue;
        return renderValue;
      }else return render[lazyCacheKey];
    }else return render ;
  }
  function isChildrenNode(val){
    return isPrimitive(val) || isArray(val) || isHouxerVNode(val) || isHouxerBuild(val) || isCustomElement(val)  || isSlotInstance(val) || isRenderVNodeClass(val) || isSpreadFragment(val) || isLazyRender(val);
  }
  function isChildrenObjInstances(val){
    if(!isChildrenObj(val)) return false;
    return isHouxerVNode(val) || isHouxerBuild(val) || isCustomElement(val)  || isSlotInstance(val) || isRenderVNodeClass(val) || isSpreadFragment(val) || isLazyRender(val);
  }
  function isChildrenObj(val){
    return isChildrenNode(val) && !( isPrimitive(val) || isArray(val))
  }
  const isBaseWidget=widget=> isPObject(widget) && widget instanceof Widget;
  const isProxy=value=>_validateType(value, Proxy);
  const validHouxerWidget=(w)=>(isObject(w) || isPFunction(w) || isClass(w)) && !isProxy(w) && !isStream(w);
  const isHoistedVNode=vnode=>isHouxerVNode(vnode) && isTrue(vnode.VNodeManager.patchFlags.isHoisted);
  const isStaticVnode=vnode=>isHouxerVNode(vnode) && !isHoistedVNode(vnode);
  function lazy(callback){
    if(!isPFunction(callback)){
      $Debug(`lazy method expects a plain function as its formal argument`);
      return ""
    }
    return new lazyRender(callback);
  }
  function parseScript(script, args){
    return new Function(`"use strict"; return (${script})`)(args);
  }//helps compile string values to javascript statement
  function passableBlock(block, warn){
    try{
      parseScript(block);
      return true;
    }catch(err){
      if(isTrue(warn)){
        $Debug(`Statement not passage in Mustache/binding context\n\nContext expects a single expression\n"${block}"`);
        $Debug(err);
      }
      return false
    }
  }
  const isInDomNode=element=> isNativeElement(element) && element.getRootNode() === document;
  const GLOBAL_EVENTS="abort,animationcancel,animationend,animationiteration,animationstart,auxclick,blur,error,focus,canplay,canplaythrough,cancel,change,click,close,contextmenu,dblclick,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,durationchange,emptied,ended,formdata,gotpointercapture,input,invalid,keydown,keypress,load,keyup,loadeddata,loadedmetadata,loadend,loadstart,lostpointercapture,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,mousewheel,wheel,pause,play,playing,pointerdown,pointermove,pointerup,pointercancel,pointerover,pointerout,pointerleave,pointerenter,pointerlockchange,pointerlockerror,progress,ratechange,reset,resize,scroll,securitypolicyviolation,seeked,seeking,select,selectstart,selectionchange,slotchange,stalled,submit,suspend,timeupdate,touchcancel,touchend,touchstart,touchmove,transitioncancel,transitionrun,transitioned,transitionstart,waiting,volumechange,autocompleteerror,autocomplete,hover";//Html event names managed by houxer on elements
  const IS_VALID_EVENT_HANDLER=eventName=>_mapValue(GLOBAL_EVENTS, eventName);
  const isClass = val=> isFunction(val) && val.toString().startsWith('class');
  const directivesHooksMap="created,mounted,updated,init,destroyed";
  function isInstanceOf(val, construct){
    if(isFunction(construct) && isXtruct(construct)) return val instanceof construct;
    return false;
  }
  function instance_Has_Widget(self, name ){
    return _mapValue(BUILT_IN_WIDGETS, name) || _mapValue(self[$$$register]?.widgets || {}, name ) ;
  }
  const normalize_Widget=(self, name)=>_mapValue(BUILT_IN_WIDGETS, name) ? BUILT_IN_WIDGETS[name] : _mapValue(self[$$$register].widgets, name) ? self[$$$register].widgets[name]: null;
  const isSlotInstance=val=> val instanceof slotInstanceMap;
  const requestMethods="POST,GET,PATCH,HEAD,DELETE,PUT,CONNECT,OPTIONS,TRACE";
  const isRequestMethod=method=>_mapValue(requestMethods, method);
  const isHouxerVNode=vnode=>vnode instanceof HouxerVNode;
  const isHouxerBuild=widget=>widget instanceof _Houxer_Build;
  const isHouxerTextVNode=vnode=>vnode instanceof HouxerTextVNode;
  const isHouxerElementVNode=vnode=> vnode instanceof HouxerElementVNode;
  const isHouxerFragmentVnode=vnode => vnode instanceof HouxerFragmentVNode;
  const isWidgetResolver=data=>_validateType(data, _WidgetResolver);
  const isDirectiveResolver=data=>_validateType(data, _DirectiveResolver);
  const readonlyModelProps="$element,$params,$attrs,$signals,$slots,$parent,$root";
  const proxySkipped="$element,$signals,$parent,$root,_observe,_useAgent,_deferTick,_write,_effectHook,[[[_Reactive__Token_]]]";
  const validTokenConfigOptions="onTrack,onEffect,isComputed,isReadonly"
  const isProxySkipped=prop=>_mapValue(proxySkipped, prop);
  function createObj(name, props){
    if(len(arguments) === 1 && isPObject(name)) props=name;
    if(props && !isPObject(props)) props=null;
    let objXtruct=Function('name',`
     return name ? class ${name}{} : Object ;
    `)
    objXtruct=objXtruct(name);
    objXtruct= new objXtruct();
    if(props) assign(objXtruct, props);
    return objXtruct;
  }
  const canRender=value=>isPrimitive(value) && !isNull(value);
  function compileToRenderable(value){
    if(canRender(value)) return String(value);
    else if(_validateType(value, [Array, Date, Function])) return value.toString();
    else if(!isNull(value) && !isPObject(value)) return JSON.stringify(value);
    return "";
  }
  const arrowFNRegex=/^(\(([\w$,\[\]\{\} ]*)\)|[\w$]+)[ ]*=>[ ]*[{]?\s*/;
  const functionFNRegex=/^(async[ ]+)?(function)?([*]?([ ]*)[\w$]*)?\(([\w$]*)?\)[ ]*\{\s*/m;
  const isAFunction=(fn)=> isPFunction(fn) && arrowFNRegex.test(fn.toString());
  const isFNString=str => isString(str) && isTrue(arrowFNRegex.test(str) || functionFNRegex.test(str));
  const boundFNRegex=/^bound [\w$]*$/;
  const isBFunction=func=>isPFunction(func) && !isAFunction(func) && boundFNRegex.test(func.name);
  const objectDestructureRegex=/^{(.*?)}$/;
  const arrayDestructureRegex=/^\[(.*?)\]$/;
  const isDestructureSyntax=syntax=>objectDestructureRegex.test(syntax) || arrayDestructureRegex.test(syntax) ;
  class fallthrough{
    constructor(fn){
      this.callback=fn;
    }
  }
  class Model{};
  class Params{};
  class Attrs{};
  class Slots{};
  class Signals{};
  class ReactiveEffectObject{};
  const isModelInstance=model=>model instanceof Model;
  const isParamsInstance=param=>param instanceof Params;
  const isAttrsInstance=param=>param instanceof Attrs;
  const isSlotsInstance=param=>param instanceof Slots;
  const isSignalsInstance=param=>param instanceof Signals;
  const isREffObj=param=>param instanceof ReactiveEffectObject;
  const isClassBasedBuild=build=>isHouxerBuild(build) && build[$$$ownProperties].widgetType === 'class-based';
  const isFunctionBasedBuild=build=>isHouxerBuild(build) && build[$$$ownProperties].widgetType === 'function-based';
  const isObjectBasedBuild=build=>isHouxerBuild(build) && build[$$$ownProperties].widgetType === 'object-based';
  const isFallThrough = fall => fall instanceof fallthrough;
  const $$tupleStore=Symbol()
  const $$tupleUnique=Symbol()
  const $$tupleIsFrozen=Symbol()
  const $$dexTransformKey=Symbol();
  const genericKeyProp=Symbol();
  const $$$$dir__ref$$$$=Symbol('[[[$$$$dir__ref$$$$]]]');
  const dir$$__render=Symbol("[[[$$@@dir$$__render]]]");
  const $$$fallthrough=Symbol("[[[$$@fallthrough]]]");
  const $$slotName=Symbol('[[[~~slotName~~]]]');
  const $$$Events=Symbol('[[[@@Events]]]');
  const $$$operands=Symbol();//for the operands property of a widget instance
  const $$$ownProperties=Symbol();
  const $$$compiler=Symbol();
  const $$$core=Symbol();
  const $$$register=Symbol();
  const $$$StreamProxyKey=Symbol();//used in marking an stream object
  const activeFlagInstanceKey= Symbol();
  const scopedDirKey=Symbol();//for the scoped directive
  const lifeCiycleBinding=Symbol();
  const $$$customDirs=Symbol();
  const $$renderClass=Symbol();
  const rawObjKey=Symbol()
  const $$$ModelUpdateKey = Symbol();//resolving a midel directive consumption on widget fallthrough
  const $$BuiltinWidgetKey=Symbol();
  const $buildWidgetNormalizerKey=Symbol();
  const factoryHXSelfInstance=Symbol();
  const $factoryTokenKey=Symbol();
  const isFRKey=(key)=> $factoryTokenKey === key && isS($factoryTokenKey, key);
  const isBuiltinWidgetBuild=self=> isHouxerBuild(self) && hasOwn(self[$$$ownProperties], 'builtin_widget');
  const isBuiltinWidgetAndType=( self, type ) => isBuiltinWidgetBuild(self) && self[$$$ownProperties].builtin_widget === type ;
  const isBuiltinPortalWidget=self=> isBuiltinWidgetAndType(self, 'hx:portal')
  const isBuiltinMotionWidget=self=>isBuiltinWidgetAndType(self, 'hx:motion')
  const isBuiltinMemoWidget=self=>isBuiltinWidgetAndType(self, 'hx:memo')
  const isBuiltinFragmentWidget=self=>isBuiltinWidgetAndType(self, 'hx:fragment')
  const isBuiltinSelfWidget=self=>isBuiltinWidgetAndType(self, 'hx:self')
  const isBuiltinBuildWidget=self=>isBuiltinWidgetAndType(self, 'hx:build')
  const isBuiltinSuspenseWidget=self=>isBuiltinWidgetAndType(self, 'hx:suspense')
  const isBuiltinWidget =widget=> hasOwn(widget, $$BuiltinWidgetKey);
  const builtinValidWidget=(widget, type)=> isBuiltinWidget(widget) && widget[$$BuiltinWidgetKey] === type ;
  const $buildHx_VNodeKey=Symbol()//saving the $buildHx_VNodeKey key while passing widget to houxer build.
  const widgetSpecialAttrProps = new Set([ $$$$dir__ref$$$$ , dir$$__render, $$$fallthrough , $$slotName, $$$Events, $$$ModelUpdateKey ]);
  const isSelfRecursiveWidget=build=> isHouxerBuild(build) && build[$$$ownProperties].isSelfRecursive === (true);
  const isSpecProp = prop => widgetSpecialAttrProps.has(prop);
  const isBuiltinBlocks=block=>_mapValue("if,else,else:if,for,const", block);
  function createRenderFN(self, fn){
    if(!isPFunction(fn)){
      $Debug(`parameter 2 of "createRenderFN" macro expects a plain Function`);
      return pass
    }
    let callback=Function('self', 'fn',`
      return function renderClass(instance, updated, forceFragment){
        return fn(self);
      }
    `)
    callback = callback(self, fn);
    callback[$$renderClass]=true;
    return callback;
  }
  const isRenderClass=render=>isPFunction(render) && render.name === "renderClass" && render[$$renderClass];
  const $passKey=Symbol()
  function pass(){}
  pass[$passKey]=true;
  function isContextMethodString ( self , hx__VNode , str ){ 
    return ((isValidIdentifier(str) || object_Has_Path(self.__public_model__, str)) || isTrue(hx__VNode && object_Has_Path(hx__VNode.LabContext||{}, str) || isFNString(str)));
  }
  const isIfKey=key=>/^\$\$if[\w|$]*$/.test(key);
  const isElseIfKey=key=>/^\$\$else-if[\w$|]*$/.test(key);
  const isElseKey=key=>/^\$\$else[\w$|]*$/.test(key);
  const isForKey=key=>/^\$\$for[\w_$|]*$/.test(key);
  function read(fn){
    return unToken(isFunction(fn) ? fn() : fn );
  }
  function isElementType(element, type){
    if(type === 'text') return IS_TEXT_NODE(element);
    return isNativeElement(element) && IS_ELEMENT_NODE(element) && element.localName === type;
  }
  const create_Houxer_Element_Flags_=()=>createObj('__Houxer_VNode_', {
    _vnode_key:undefined,
    hx__VNode:undefined,
  });
  const rawObjectStoreMap=new WeakMap()
  function markRaw(obj){
    if(isChildrenObj){
      $Debug(`Cannot mark a renderable Houxer instance as a raw data`);
      return obj;
    }
    if(!_validateType(obj, [Object, Array]) || isRaw(obj)) return obj;
    obj[rawObjKey]=true;
    return obj
  }
  function isRaw(obj){
    return _validateType(obj, [Object, Array]) && ( isObject(obj) ? hasOwn(obj, rawObjKey ) : isTrue(obj[rawObjKey]));
  }
  function getCharcodes(value){
    const record=[];
    let index=0
    for( let char of value){
      record.push(char.codePointAt(0))
      index++
    }
    return record;
  }
  function campareStrings(value, data){
    const valCP=getCharcodes(value)
    const datCP=getCharcodes(data)
    return deepEqualityCheck(valCP, datCP)
  }
  function memMove(value, deep){
    return _makeCloneVerson(...arguments)
  }
  const isCollection=item=>_validateType(item, [Array, Set, Tuple, Arguments ]);
  const isInvalidInjectorOpt=opt=>_mapValue("build,preBuild", opt);
  const isAllowedComposersOpt=opt=>_mapValue("postBuild,preMount,postMount,preUpdate,postUpdate,preDestroy,postDestroy,defineConfig,useSignals,useSlots,makePublish,useTransform,useFallthrough,useParams,onEffect,onTracked,onCatch,onSlotRender,onSlotEffect", opt);
  const adaptableComposers={
    params:useParams,
    postBuild,
    preMount,
    postMount,
    preUpdate,
    postUpdate,
    preDestroy,
    postDestroy,
    onEffect,
    onCatch,
    onTracked,
    onSlotEffect,
    onSlotRender,
    buildConfig:defineConfig,
    signals:useSignals,
    slots:useSlots,
    publish:makePublish,
    transform:useTransform,
    fallthrough:useFallthrough,
  }
  const isAllowedAdapterOpts=opt=>_mapValue( keys(adaptableComposers).join(','), opt);
  const isNonDuplicateFunc=opt=>_mapValue("params,fallthrough,publish", opt)
  const isAdapterOpt=opt=>_mapValue("params,preBuild", opt)
  function _useOptionsAdapter(instance={}){
    const response=validateCollectionArgs(arguments, {
      name:'useOptions',
      required:[true],
      count:1,
      validators:[ Object ]
    })
    if(!response) return [ pass, pass ]
    const self=getCurrentRunningEffect({
      name:'useOptions'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useOptions",
      validators:[Object],
      count:1
    } ))) return {};
    for(const [ key, value ] of entries(instance)){
      if(!isValidWidgetOption(key)) {
        self[$$$operands]._OPTIONS[key]=value
      }else if(isAllowedAdapterOpts(key)){
        adaptableComposers[key](value);
      }else if(isInvalidInjectorOpt(key)){
        $Debug(`invalid option "${key}" passed to options Adapter: not a valid  adapter.\n\nuse the options API instead`, self);
      }else{
        self[$$$core].opts[key]=value;
      }
    }
    return self
  }
  function useOptions(obj){
    return _useOptionsAdapter(...arguments);
  }
  function _mergeProps_(...props_list){
    const validators=[];
    props_list.forEach(()=> validators.push(Object));
    if(!validateCollectionArgs(props_list, {
      validators,
      name:'mergeProps',
      min:1
    })) return  E_Obj;
    const originProps ={};
    for(let [ index, attrs ] of props_list.entries()){
      transformGeneticPropsMerge(originProps, attrs);
    }
    return originProps;
  }
  function transformGeneticPropsMerge(origin, attrs){
    for(const [ key, item ] of entries(attrs)){
      if(hasOwn(origin, key)){ //check if key exists inorih  object
        if(isOnListener(key)) {
          const value =  (!isArray(origin[key]) ? [origin[key]] : origin[key] );
          const itemData = ( !isArray( item ) ? [ item ] : item ) ;
          origin[ key ] = [ ...value, ...itemData ];
        }else if(key === 'class'){
          const patchRecord= new Tuple();
          mapClassTypeTransform(origin[key], patchRecord);
          origin[key]=mapClassTypeTransform(item, patchRecord);
        }else if(key === 'style'){
          origin[key]={
            ...compileStyleProps(null, origin[key], {}, null),
            ...compileStyleProps(null, item, {}, null)
          }
        }
      }else{ 
        if(key === 'class') origin[key]=mapClassTypeTransform(item, new Tuple());
        else if(key === 'style') origin[key] = compileStyleProps(null, item, {}, null);
        else origin[key]=item;
      }
    }
    return origin;
  }
  function mergeProps(...props){
    return _mergeProps_(...props);
  }
  function _combineCallbacksCalls_(...handlers){
    function __merged_Methods_Calls(...args){
      for(const [ key, method ] of handlers.entries()){
        method.call(this, ...args);
      }
    }
    return function (...args){
      return __merged_Methods_Calls.call(this, ...args);
    }
  }
  function mergeMethods(...args){
    return  _combineCallbacksCalls_(...args);
  }
  const argumentsValidator={
    name:"",
    max:Infinity,//maximum arguments in number
    validators:[],//arguments type validators by array indexes
    self:undefined,//widget instance.
    min:0,//minimum arguments validatoe
    required:[],//required truthy values by array indexes,
    count:undefined
  }
  function validateCollectionArgs(args, config=argumentsValidator){
    args = [ ...args ]
    if(!isS(argumentsValidator, config)) config={ 
      ...config, 
      ...argumentsValidator
    };
    else return true;
    const { name, max, validators, self, required, min, count }=config;
    /* a string 'name', number max, array validator, houxer se;f instance and indexes of required arguments */
    if(isNumber(max) && len(args) > max) {
      $Debug(max === 0 ? `${name} Adapter does not accept any Argument` : `Parameter arguments received at ${name} macro exceds validator arguments maximum count\n\n"${name}()" expects only maximum of ${max} arguments`, self);
      return false;
    }
    if( min && len(args) < min ) {
      $Debug(`"${name}" function expects atleastt ${min} minimum of arguments\n\n${len(args)} received`, self);
      return false;
    }
    if(!isUndefined(count) && !len(args) === count){
      $Debug(`"${name}" method expects only ${count} number of arguments\n${len(args)} passed`, self);
      return false;
    }
    if(len(required)){
      for(let [ index, check ] of required.entries()){
        if((!len(args) >= Number(index) && isUndefined(args[index]))){
          $Debug(`Argument at index ${index} of ${name} expects a required positional parameter\n\nparameter not provided or is undefined :: use "null" instead if you tend to skip or not provide an argument value `, self);
          return false;
        }
      }
    }
    if(isArray(validators) && len(validators) && len(args)){
      for(let [ key, item ] of args.entries()){
        if(!key > len(validators)) break;
        const validator = validators[key] || Any ;
        let response=_validateType(item, validator )
        if(isFalse(response)) {
          $Debug(`unexpected argument value type received at ${key} index of the "${name}" adapter\n\nInvalid input type`, self);
          return false;
        }
      }
    }
    return true
  }
  const objectPropsValidator={
    name:"",
    self:undefined,//widget instance scope
    props:{},
  }
  const validatorProps={//internal validators default
    type:undefined,
    required:false,
    default:undefined,
  }
  function validatePropsInput( value, config){
    if(!isS(config, objectPropsValidator)) config = {
      ...config,
      ...objectPropsValidator
    }
    let { name, props, self,  } = config ;
    if(!isObject(config)){
      $Debug(`configuration parameter at argument 2 of validatorProps expects a plain javascript object`);
      return
    }else if(!isPObject(value) || hasOwn(value, 'props') && !isPObject(value.props)){
      $Debug(`unexpected value received at "${name}, validation for ${isPObject(value) ? '{}.prop' : '{}'}" adapter\n\nInvalid input type :: expects a plain Object`, self);
      return false;
    }
    const propsSet = {};
    for(let [ param, ind ] of entries(config.props) ){
      if(!isPObject(param)){
        $Debug(`Properties validator expects a plain object\n
        For the "${ind}" prop validation`);
        return false;
      }
      if(!isS(param, validatorProps) ) param = {
        ...param,
        ...validatorProps
      }
      if(!runObjectifiedParamsValidation(null, propsSet, [ value, param, ind ], 'prop')) return false;
      else if(!paramsValidationCircle(null, propsSet, [value, param, ind ],'prop')) return false;
    }
    return true;
  }
  function _validateCollection(collection, config){
    const response=validateCollectionArgs(arguments, {
      validators:[ [ Array, Set, Tuple, Arguments ], Object ],
      count:2,
      required:[true, true ],
      name:'validateCollection'
    })
    if(!response) return false;
    return validateCollectionArgs(collection, config )
  }
  function validateCollection( collection, config ){
    return _validateCollection(...arguments)
  }
  function validateProps(value, config){
    return validatePropsInput(...arguments )
  }
  function vb(self){
    if(!isHouxerBuild(self)) return ;
    return {
      operands:self[$$$operands],
      ownProperties:self[$$$ownProperties],
      compiler:self[$$$compiler],
      core:self[$$$core],
      register:self[$$$register]
    }
  }
  function deferTokenComputedGetter(computed__Token, effective, watchers){
    if(computed__Token[refInternalEffectKey].updateFlags){
      computed__Token[refInternalEffectKey].updateFlags=0;
      const getCookie = computed__Token[refInternalEffectKey].computed.call(computed__Token[refInternalEffectKey].ModelInstance) ;
      computed__Token[refInternalEffectKey].cache=getCookie;
      return getCookie;
    }
    return computed__Token[refInternalEffectKey].ModelInstance ? computed__Token[refInternalEffectKey].cache : effective[watchers.accessor] ;
  }
  function hydrateEffectSubs(watchers){
    if(isHouxerBuild(watchers.self)) watchers.watchGetters=watchers.self[$$$operands].onEffectWatch;
    else watchers.watchGetters=false;
    return watchers.watchGetters;
  }
  function deepTranformMacro(watchers){
    function _transform(value, config){
      const res=validateCollectionArgs(arguments, {
        min:1,
        max:2,
        validators:[Any, Object],
        name:'deepTranform'
      })
      if(!res) return value;
      return _createReactiveProxyCollectons(value,  watchers, config?.isShallow || false, config || {});
    }
    return function deepTranform(value, config){
      return _transform(...arguments);
    }
  }
  function fineTuneFactoryTokenCompile(effective, watchers, config){
    const  callback =  config[$factoryTokenKey];
    delete config[$factoryTokenKey];
    function track(){
      return watchers.effectTrack();
    }
    function effect(){
      return  watchers.effectTrigger();
    }
    config = callback(track, effect, deepTranformMacro(watchers));
    const factoryObject=watchers.factoryObject;
    watchers.config=config;
    if(config.accessor){
      delete effective[watchers.accessor]
      watchers.accessor=config.accessor;
      effective[watchers.accessor]=undefined;
      delete config.accessor;
    }
    if(hasOwn(config, 'get')) {
      if(!isFunction(config.get)){
        $Debug(`"get" property descriptor at "factoryToken" is of an invalid data type\ntype of 'Function' expected`);
        return E_Obj;
      }
      factoryObject.get=config.get;
      delete config.get;
    }
    if(hasOwn(config, 'set')) {
      if(!isFunction(config.set)){
        $Debug(`"set" property descriptor at "factoryToken" is of an invalid data type\ntype of 'Function' expected`);
        return E_Obj;
      }
      factoryObject.set=config.set;
      delete config.set;
    }
    return config;
  }
  function refLifeCircleHooksConfig(watchers, config){
    if(config.onTracked) watchers.onTrackedHook=()=>{
      if(watchers.trackZoom) return;
      watchers.trackZoom=true;
      deferTick(config.onTracked.bind(this)).then(()=> watchers.trackZoom=false);
    };
    if(config.onEffect) watchers.onEffectHook=()=>{
      if(watchers.effectZoom) return;
      watchers.effectZoom=true;
      deferTick(config.onEffect.bind(this)).then(()=> watchers.effectZoom=false);
    }
  }
  function Token_X_ReactiveEffectObject(){
    return assign( new ReactiveEffectObject(), { 
      observers : new Tuple(),
      mutated : 0,
      effectFlush:new Tuple(),
      subscribers:new Tuple(),
      getHandler:pass,
      self:undefined,
      superObs:undefined,
      onTrackedHook:pass,
      onEffectHook:pass,
      accessor:'data',
      effectTrack:pass,
      effectTrigger:pass,
      factoryObject:{},
      trackZoom:false,
      effectZoom:false
    } );
  }
  function factoryGetter(accessor, isFactoryToken, d_o){
    if(isFactoryToken) return ()=> this[accessor()];
    else return d_o.getter;//accessing getter from dirty_object
  }
  function defineTokenRuntime_Carriers(effective, watchers, metrics){
    const { isFactoryToken, isComputed, isReadonly, isShallow, accessor, config } = metrics ;
    const returnValue=()=>{
      if(isComputed) return deferTokenComputedGetter(this, effective, watchers);
      return unwrap(effective);
    }
    const descriptor = {};
    const dirty_object={};
    watchers.effectTrack=function(){
      hydrateEffectSubs(watchers)
      if(watchers.watchGetters) watchers.subscribers.add(factoryGetter.call(this, accessor, isFactoryToken, dirty_object));
      watchers.mutated;
      watchers.onTrackedHook();
    }.bind(this);
    watchers.effectTrigger=function (){
      watchers.mutated=1;
      watchers.onEffectHook();
    }
    if(isFactoryToken){
      if(hasOwn(watchers.factoryObject, 'get')) descriptor.get=watchers.factoryObject.get;
      if(hasOwn(watchers.factoryObject, 'set')) descriptor.set=watchers.factoryObject.set;
    }else{
      descriptor.get= function(){
        function getter(){
          return  isComputed ? returnValue() : effective[accessor()]  ;
        }
        dirty_object.getter=getter;
        watchers.effectTrack()
        return getter();
      }
      descriptor.set=function(value, prop){
        if(isReadonly && !isReadonlyBypasser(value)){
          $Debug(`Cannot reassign/mutate a "readonly" ref value\n\n___MUTATION FAILED___\n........".${prop}" property assignment \n\nFailed writing to a readonly \n.........>>>bypassKey verification failure`);
          return false;
        }
        value=unwrap(isReadonly ? value[bypassSymbol] : value) ;
        value = _createReactiveProxyCollectons(value, watchers, isShallow, config );
        watchers.effectTrigger();
        effective[accessor()]=value;
        return true;
      }
    }
    return descriptor;
  }
  function _Houxer_Token__Constructor(effective, config ){
    const watchers= Token_X_ReactiveEffectObject()
    const accessor=()=>watchers.accessor;
    config =( isPObject(config) ? config :  {}) ;
    const isFactoryToken=hasOwn(config, $factoryTokenKey);
    if(isFactoryToken) config = fineTuneFactoryTokenCompile.call(this, effective, watchers, config);
    if(isS(config, E_Obj)) return;
    const { isReadonly=false, isComputed=false, isShallow=false } = config;
    refLifeCircleHooksConfig.call(this, watchers,  config );
    effective[accessor()]=_createReactiveProxyCollectons( effective[accessor()], watchers, isShallow, config);
    this[refInternalEffectKey]=watchers;
    const descriptors = defineTokenRuntime_Carriers.call(this, effective, watchers, { 
      isFactoryToken, 
      isComputed, 
      isReadonly, 
      isShallow, 
      accessor, 
      config
    });
    delete watchers.factoryObject;
    define(this, accessor() , descriptors );
    watchers.cache=undefined;
    watchers["[[[computed__Token]]]"]=false
    watchers.updateFlags=0;
    watchers.computed=pass
    watchers.ModelInstance=null;
    watchers.isStateToken=false;
    watchers.watchGetters=false;
    define(this, refIsShallowKey, { 
      value:isShallow, 
      enumerable 
    })
    define(this, '[[[_data_key]]]',{ 
      value:_generateUUID(7, 'alphaNum').toUpperCase(),
      enumerable
    });
    define(this, refGenreId, { 
      value: `[[[_${ isReadonly ? "Readonly" : "Reactive" }__Token_]]]`,
      enumerable
    });
  }
  class _Houxer_Token__ {
    constructor(effective, config={} ){
      _Houxer_Token__Constructor.call(this, ...arguments );
    }
    effectTrigger(fn, self){
      return _effectTriggerHook.call(this, ...arguments);
    }
    isSameToken(ref){
      return isToken(ref) && this["[[[_data_key]]]"] ===  ref["[[[_data_key]]]"];
    }
    create(valueX, config){
      return token(...arguments);
    }
  }
  function _effectTriggerHook(fn, self){
    if(this[refGenreId] === '[[[_Readonly__Token_]]]' && isFalse(this[refIsShallowKey])) return ;
    const watchers = this[refInternalEffectKey];
    let mutated=watchers.mutated;
    watchers.getHandler= fn.getHandler || pass;
    define(watchers , 'mutated', {
      get(){
        watchers.getHandler(watchers.subscribers);
        cleanupSubscribers(watchers.subscribers);
        return mutated;
      },
      set(valueX){
        mutated=valueX;
        fn(this[refInternalEffectKey]);
        return true;
      }
    });
    if(hasOwn(fn, 'init')) fn.init(watchers);
    return true //call the effectTrigger callback with a function parameter
  }
  class _Reactive__Token_ extends _Houxer_Token__{
    constructor(token, config){
      super(...arguments)
    }
  }
  class _Readonly__Token_ extends _Houxer_Token__{
    constructor(token, config){
      super(...arguments)
    }
  }
  class Token extends _Houxer_Token__{
    constructor(token, config){
      super(...CustomTokenizerArgs(token, config));
    }
  }
  const CustomTokenizerArgs=(token, config)=>[ {
    data:token
  }, config];
  function _createReactiveProxyCollectons(iterable, watcher, isShallow, config ) {
    if(isDomSpecialConstructor(iterable) || !isIterable(iterable) ) return iterable;
    if(!isStream(iterable) && !isToken(iterable)){ 
      iterable = _createStream(iterable, config, watcher );
    }
    function mounter(effObj){
      watcher.mutated=1;
    }
    mounter.init=function(effObj){
      effObj.self=EffectReactiveMaster(watcher)
    }
    mounter.getter=function (subscribers){
      subscribeEffect(watcher, subscribers);
      watcher.mutated;
    }
    _mountReactiveWatcher(iterable, mounter);
    return iterable;
  }
  function __Houxer__Tokenizer__Machine___( target , config={} ) {
    if(!isToken(target)) {
      if(isComputedMacro(target)){
        $Debug(`Unaccepted computed ref cache passed to a Token\nWill not compile...`);
        return target;
        // target = hydrateComputedTokenTransform(self, target, true);
      }
      target = preventX( new _Reactive__Token_( {
        data:target
      }, config ));
    }
    const self = getCurrentRunningEffect({
      silently:true
    });
    if(isHouxerBuild(self)){
      _mountReactiveWatcher(target, self, true);
    }
    return target;
  }
  function token(target, config){
    return __Houxer__Tokenizer__Machine___(...arguments);
  }
  function _factoryToken(callback){
    const response=validateCollectionArgs(arguments, {
      count:1,
      validators:[Function],
      name:"factoryToken"
    })
    if(!response) return;
    const target = new Token({ 
      data:undefined
    }, {
      [$factoryTokenKey]:callback//key used to recognise a custom ref by houxer
    });
    const self = getCurrentRunningEffect({
      silently:true
    });
    if(isHouxerBuild(self)){
      _mountReactiveWatcher(target, self, true);
    }
    return target;
  }
  function factoryToken(callback){
    return _factoryToken(...arguments);
  }
  function traceBack(){
    const date = new Date();
    return createObj('TraceBack', {
      h:date.getHours(),
      m:date.getMinutes(),
      s:date.getSeconds(),
      ms:date.getMilliseconds()
    });
  }
  function effectObject(value){
    
  }
  class Exception extends Error{
    constructor(msg, ...args){
      super(...args)
    }
  }
  const isException = ctruct => ctruct instanceof Exception;
  function raise(){
    
  }
  function isTuple(tp){
    return tp instanceof Tuple;
  }
  const arrSet=setData=>isSet( setData ) ? [...setData] : isTuple(setData) ? setData.list() : setData ;
  function setValueIndex(setData , value){
    if(!isSet(setData) && !len(setData) && !setData.has(value)) return NaN;
    let index=0
    for(let data of setData.values()){
      if(data === value) return index;
      index++;
    }
  }
  const arrayMM="push,pop,shift,unshift,splice,sort,reverse,write,copyWithin,fill";
  const setMM="add,delete,clear,write";
  const mapMM="set,delete,clear,write";
  const tupleMM=setMM+",shift,unshift,splice,pop,extend,replace,prepend";
  const objectMM="define,write,delete";
  function getMutationArgs(data){
    return isArray(data) ? arrayMM : isSet(data) ? setMM : isMap(data) ? mapMM : isTuple(data) ? tupleMM : isPObject(data) ? objectMM : "write";
  }
  function getAgentMutators(data, prop, model){
    const value=data;
    data=unwrap(data);
    let mutateArgs= getMutationArgs(data);
    const mutation_object=createObj('mutatations');
    for(let name of mutateArgs.split(',').values()){
      function mutate(arg){
        let rv=undefined;
        if( _validateType(data, [Set, Tuple,Array, Map])) {
          rv=data[name](arg);
        }else if(isPObject(data)){
          if('define' === name) rv=define(data, ...arguments );
          else if('delete' === name ) {
            delete data[arg];
            rv = true;
          }
        }
        let assV=rv;
        if((model || !isPrimitive(value) ) && prop  && name === 'write'){ 
          assV=set_Object_Value(isModelInstance(model) ? model : !isPrimitive(value) ? value : E_Obj , prop, len(arguments) ? arg : data  );
        }
        return assV ;
      }
      mutate = Function('fn', `
        return function ${name === 'delete' ? 'del' : name }(value){
          return fn(...arguments);
        }
      `)(mutate);
      define( mutation_object, name, {
        value : mutate,
        enumerable
      });
    }
    return mutation_object;
  }
  function _useAgent_(data, ModelInstance){
    const dataRead = ()=> data
    const response = validateCollectionArgs(arguments, {
      min:1,
      max:2,
      validators:[ Any, [Model]],
      name : 'useAgent'
    });
    if(!response) return [ dataRead , pass];
    if(isHouxerBuild(this) && !isChar(data)){
      $Debug(`data path at positional argument 1 expects a string/symbol value of an existing model path\n\n.>..._useAgent`);
      return [ dataRead, pass ];
    }else if(isModelInstance(ModelInstance) && !isChar(data)){
      $Debug(`data property at positional argument 1 of "useAgent" expects a string/symbol value\n\nMust be a model valid path`);
      return [dataRead, pass];
    }
    const self= isHouxerBuild(this) ? this : isModelInstance(ModelInstance) ? {
      __public_model__ : ModelInstance
    } : null;
    ModelInstance= self ? self.__public_model__ : null;
    if(self && !isHouxerBuild(self)) delete self.__public_model__;
    let prop=isModelInstance(ModelInstance) ? data : isToken(data) ? data[refInternalEffectKey].accessor : "";
    if( isModelInstance(ModelInstance) && !object_Has_Path(ModelInstance, prop)){
      $Debug(`"${prop}" property is not a valid model property`, );
      return[dataRead, pass];
    }
    data = isModelInstance(ModelInstance) && exists(prop) ? _$runModelBind( ModelInstance , prop ||  "" ) : data;
    const mutateArgs= getAgentMutators(data, prop , ModelInstance);
    let defineCount = 0;
    const unwrappedGetter= ()=> read(data)
    function mutate(mutation){
      if(isPFunction(mutation) && defineCount < 1){
        defineCount++;
        define(mutateArgs, 'data', {
          get(){
            return unwrappedGetter();
          }
        })
      }
      if(isPFunction(mutation) ){
        try{
          mutation(mutateArgs)
        }catch(err){
          $Debug(`Encountered an error during the call of the writer callback\n\n${err}`);
          return false;
        }
      }else if(!isPFunction(mutation)){
        set_Object_Value( isModelInstance(ModelInstance) ? ModelInstance : !isPrimitive(data) ? data : E_Obj , prop, mutation  );
        return true;
      }
    }
    function reader(){
      return unwrappedGetter();
    }
    function writer(...args){
      return mutate(...args);
    }
    return [ reader, writer ] ;
  }
  function useAgent(data, ModelInstance){
    return _useAgent_(...arguments);
  }
  function WRITE(props){
    const response=validateCollectionArgs(arguments, {
      name:'_write',
      count:1,
      validators:[Object]
    })
    if(!response) return false
    for (const [prop, value] of entries(props)){
      if(!object_Has_Path(this.__public_model__, prop)){
        $Debug(`"${prop}" not found in model instance\n\n..............at......"_write"`, this, true);
        return false
      }
      const [ propValue, mutate ] = this.__public_model__._useAgent(prop);
      mutate(( { write } )=> write(value));
    }
    return true;
  }
  function getIterator(obj){
    return _validateType(obj, [Set, Map, Array, Tuple ]) ? obj.entries() : isPObject(obj) ? entries(obj) : isIterator(obj) ? obj : [].entries() ;
  }
  function iterate(config, callback){
    if(!validateCollectionArgs(arguments, {
      name:'iterate',
      count:2,
      validators:[Object, Function]
    })) return;
    const { value, type } = config;
    const useOF=type && type.trim() === 'of';
    if(!isIterable(value) && !isNumber(value)) return false;
    let index=0;
    if(isNumber(value)){
      for(let i=0;i<value;i++) {
        callback(i, index);
        index++;
      }
    }else{
      if(useOF){
        for(let [key, item] of getIterator(value)) {
          callback(item, key, index);
          index++;
        }
      }else{
        for(let item in value) {
          callback(item, index);
          index++;
        }
      }
    }
    return true;
  }
  const refGenreId=Symbol("[[[GenreIDType]]]");
  const refInternalEffectKey=Symbol();
  const refIsShallowKey=Symbol();
  function readonlyToken(value, config={}){
    const response=validateCollectionArgs(arguments, {
      name:'readonlyToken',
      required:[true],
      min:1,
      max:2,
      validators:[ Any, Object ]
    });
    if(!response) return;
    const metrics = config.metrics || []
    if(hasOwn(config, 'metrics')) delete config.metrics
    if(isReactiveToken(value)) return toReadonlyToken(value);
    else if(isReadonlyToken(value)) return value;
    let [ mutate=false, key ]=metrics;
    config.isReadonly=true;
    return preventX(new _Readonly__Token_({
      data:value
    }, config ))
  }
  function isToken(value){
    return value instanceof _Houxer_Token__;
  }
  function unwrap(value){
    if(isLazyRender(value)) value=lazyUnwrap(value);
    if(!isToken(value)) return value;
    return value[ value[refInternalEffectKey].accessor ];
  }
  function unToken(ref){
    return unwrap(ref);
  }
  function fromToken(ref){
    return unwrap(ref);
  }
  function _toToken(object, path, config){
    const res=validateCollectionArgs(arguments, {
      min:2,
      max:3,
      validators:[[Object, Array], [String, Symbol], Object],
      name:'toToken',
      required:[true, true ]
    })
    if(!res) return E_Obj;
    return token(object[path], config);
  }
  function toToken(object, path){
    return _toToken(...arguments);
  }
  function isReactiveToken(value){
    return isToken(value) && value[refGenreId] === "[[[_Reactive__Token_]]]";
  }
  function isReadonlyToken(value){
    return isToken(value) && "[[[_Readonly__Token_]]]" === value[refGenreId];
  }
  function isShallowToken(value){
    return isToken(value) && isTrue(value[refIsShallowKey]);
  }
  function isShallowReactiveToken(value){
    return isReactiveToken(value) && isReadonlyToken(value);
  }
  function isShallowReadonlyToken(value){
    return isReadonlyToken(value) && isShallowToken(value)
  }
  function isComputedToken(value){
    return isReadonlyToken(value) && isTrue(value[refInternalEffectKey]['[[[computed__Token]]]'])
  }
  function fromReadonlyToken(ref, config){
    if(!isToken(ref)) return token(ref, config);
    if(isReadonlyToken(ref)) return token(unwrap(ref), config);
    return ref;
  }
  function toReadonlyToken(ref, config={}){
    if(!isReadonlyToken(ref)) return readonlyToken(unToken(ref), config );
    return ref;
  }
  function isStateToken(ref){
    return isToken(ref) && isTrue(ref[refInternalEffectKey].isStateToken)
  }
  function cleanupSubscribers(subs){
    if(!len(subs)) return;
    if(_validateType(subs, [ Set, Tuple ])) subs.clear();
    else if(isArray(subs)) subs.splice(0, subs.length);
  }
  function _mountTokenEffect(token, self, force=false ){
    if(!isToken(token)){
      $Debug(`Effect value  is not a token/stream value`);
      return false;
    }
    if(isHouxerBuild(self) && (!isStateToken(token) || force)){
      function refMount(_){
        self.__public_model__._pushEffect();
        if(!isStateToken(token)) token[refInternalEffectKey].isStateToken=true;
      }
      refMount.init=function(eff){
        eff.self=self;
      }
      refMount.getHandler=function(subscribers){
        generateDependencySubscriptions(self, subscribers);
      }
      token.effectTrigger(refMount)
      return true;
    }else if(isFunction(self)){
      token.effectTrigger(self);
      return true;
    }
    return false;
  }
  function _mountProxyStream(obj, self, so){
    if(!isStream(obj)) return false;
    const streamMap=obj[$$$StreamProxyKey];
    const effObj=streamMap.get(obj);
    if(!isHouxerBuild(self) && isFunction(self)){
      const getter=isFunction(self.getter) ? self.getter : pass
      effObj.mountWatcher(self, getter );
      return true;
    }else if(!isFunction(self) && !isHouxerBuild(self)) return false;
    const dependency=self[$$$operands].dependency
    effObj.self=self;
    function effectMount(){
      self.__public_model__._pushEffect();
    }
    effectMount.init=function(eff){
      eff.self=self;
      eff.isStateStream = true;
    }
    effObj.mountWatcher(effectMount , (subscribers)=>{
      trackDependency(self, dependency);
      generateDependencySubscriptions(self, subscribers);
    });
    return true;
  }
  function _mountReactiveWatcher(value, self, force){
    if(isToken(value)) return _mountTokenEffect(...arguments);
    else if(isStream(value)) return _mountProxyStream(...arguments);
    return false;
  }
  function mountEffect(value, self, force){
    return _mountReactiveWatcher(...arguments)
  }
  function _transformMountToken(token, force=true){
    const res=validateCollectionArgs(arguments, {
      min:1,
      max:2,
      validators:[_Houxer_Token__, Boolean],
      name:'mountToken'
    });
    if(!res) return false
    const self=getCurrentRunningEffect({
      name:'mountToken'
    });
    if(!isHouxerBuild(self)) return false;
    return _mountTokenEffect(token, self, force)
  }
  function mountToken(token, force){
    return _transformMountToken(...arguments);
  }
  function _transformMountStream(obj){
    const res=validateCollectionArgs(arguments, {
      count:1,
      validators:[[Object,Array,Set,Tuple,Map]],
      name:'mountStream'
    });
    if(!res) return false
    else if(!isStream(obj)){
      $Debug(`object pased to the mountStream function is not a stream value `);
      return false;
    }
    const self=getCurrentRunningEffect({
      name:'mountStream'
    });
    if(!isHouxerBuild(self)) return false;
    return _mountProxyStream(obj, self);
  }
  function mountStream(obj){
    return _transformMountStream(...arguments)
  }
  class readonlyBypasser {
    constructor(value=undefined){
      this[bypassSymbol]=value;
    }
  }
  function _isProxyStream(stream){
    const res=validateCollectionArgs(arguments, {
      count:1,
      name:'isStream'
    })
    if(!stream || !res && !_validateType(stream, [Object, Set, Tuple, Map, Array])) return false;
    const ReactiveMap=stream[$$$StreamProxyKey];
    return hasOwn(stream, $$$StreamProxyKey) && isWeakMap(ReactiveMap) && isREffObj(ReactiveMap.get(stream));
  }
  function isStream(value){
    return _isProxyStream(...arguments);
  }
  function _isShallowStream_(stream){
    return isStream(stream) && stream[$$$StreamProxyKey].get(stream).isShallow;
  }
  function isShallowStream(stream){
    return _isShallowStream_(...arguments);
  }
  function isReadonlyStream(stream){
    return isStream(stream) && stream[$$$StreamProxyKey].get(stream).isReadonly;
  }
  function isShallowReadonlyStream(stream){
    return isShallowStream(stream) && isReadonlyStream(stream);
  }
  function isStateStream(stream){
    return isStream(stream) && stream[$$$StreamProxyKey].get(stream).isStateStream;
  }
  function genericStreamTransform(stream, config, types){
    if(isPrimitive(stream)){
      $Debug(`Value Exception\nFailed to convert a primutive Value to a streamable object\n\nExpects a plain object or collection`);
      return ;
    }else {
      types = new Tuple(...types);
      if(types.contains('readonly', 'shallow') && isShallowReadonlyStream(stream)) return stream;
      else if(types.has('readonly') && isReadonlyStream(stream)) return stream;
      else if(types.has('shallow') && isShallowStream(stream)) return stream;
    }
    if(isStream(stream)) {
      stream = stream[$$$StreamProxyKey].get(stream).origin
    }
    return _createStream(stream, {
      isReadonly : types.has('readonly'),
      isShallow : types.has('shallow'),
      ...( !isPObject(config) ? {} : config  )
    });
  }
  function _toReadonlyStream(stream, config){
    return genericStreamTransform(stream, config, ["readonly"]);
  }
  function toReadonlyStream(stream, config){
    return _toReadonlyStream(...arguments)
  }
  function _toShallowStream(stream, config){
    return genericStreamTransform(stream, config, ["shallow"]);
  }
  function toShallowStream(stream, config){
    return _toShallowStream(...arguments);
  }
  function _toShallowReadonlyStream(stream, config){
    return dynamicStreamTransform(stream, config, ['readonly', 'shallow']);
  }
  function toShallowReadonlyStream(stream, config){
    return _toShallowReadonlyStream(...arguments);
  }
  const isReadonlyBypasser = bypasser=>bypasser instanceof readonlyBypasser;
  const bypassSymbol=Symbol("Readonly_Bypass_Symbol");
  const isBypassSymbol=sym=>sym === bypassSymbol;
  function defineReadonlyGetter(parent, prop, value, metrics=[], ){ 
    let [ isShallow=false, isComputed=false ]=metrics;
    value=isReadonlyToken(value) ? value : isToken(value) ? toReadonlyToken(value, { 
      isComputed
    }) : readonlyToken(value, {
      isComputed
    });
    define(parent, prop, { value , enumerable });
  }
  function useReadonlyBypasser(parent, key, value){
    return set_Object_Value(parent, key, new readonlyBypasser(value) );
  }
  function objFreeze(obj, deep=false){
    if(!_validateType(obj, [Object, Array, Tuple])) return obj;
    if(isTuple(obj)) return obj.freeze();
    if(isTrue(deep)){
      for (let [key, value] of getIterator(obj)){
        obj[key]=objFreeze(value, true);
      }
    }
    return isTuple(obj) ? obj : Object.freeze(obj);
  }
  function effectDependencyTracking(self, fn , args=[]){
    args=!isArray(args) ? [args] : args;
    self[$$$operands].onEffectWatch = true;
    const value = fn(...args);
    self[$$$operands].onEffectWatch=false;
    const subscribers=[ ...arrSet(self[$$$core].effectSubscribers) ];
    self[$$$core].effectSubscribers.clear();
    return [ subscribers, value ];
  }
  function _trackEffectDeps(fn, ...args ){
    if(validateCollectionArgs(arguments, {
      count : 1,
      validators:[Function],
      name:'trackEffectDeps'
    })) return [];
    const self = getCurrentRunningEffect({
      name:'trackEffectDeps'
    });
    if(!isHouxerBuild(self)) return [];
    return effectDependencyTracking(self, fn, args );
  }
  function trackEffectDeps(fn){
    return _trackEffectDeps(...arguments)
  }
  const effectHookValueKey=Symbol();
  function _runGlobalEffectHook(fn, config){
    const response=validateCollectionArgs(arguments, {
      name:'effectFlush',
      required:[true, false ],
      min:1,
      max:2,
      validators:[ Function, Object ]
    })
    if(!response) return pass;
    const self=getCurrentRunningEffect({
      name:'effectHook'
    });
    if(!self ){
      $Debug(`You cal use the "this._effectHook()" within a widget public model instance`);
      return pass;
    }
    return EffectAdapterHook.call(self, ...arguments);
  }
  function effectHook(fn, config){
    return _runGlobalEffectHook(...arguments);
  }
  function EffectAdapterHook(fn, config={}){
    if(!isPFunction(fn)){
      $Debug(`"EffectAdapterHook" at parameter 1 argument expects a plain function`, this, true);
      return ;
    }else if(len(arguments) > 1 && !isPObject(config)){
      $Debug(`config parameter 2 argument of EffectAdapterHook expects a plain objectj`);
      return;
    }
    config.initial=false;
    const [ subscribers, returnValue ]=effectDependencyTracking(this, function(){
      return fn();
    } );
    const stoper=this.__public_model__._observe(subscribers, fn, config);
    return function stopEffect(callback){
      if(len(arguments) ) {
        if(isPFunction(callback)){
          callback[effectHookValueKey]=returnValue;
          stoper(callback);
        }
      }else stoper();
    }
  }
  class Type{
    constructor(type, validator){
      this.type=type;
      this.validator=validator;
    }
  }
  class AnyType extends Type{
    constructor(){
      super([], (value)=> true);
    }
  }
  class NoneType extends Type{
    constructor(){
      super([], (value)=> isNull(value) || isEmptyStr(value));
    }
  }
  const isBaseType=type=>type instanceof Type;
  const Any=new AnyType();
  const None=new NoneType();
  const isAnyType=data=>_validateType(data, AnyType);
  const isNoneType=data=>_validateType(data, NoneType);
  class ClassFunctionType extends Type {
    constructor(){
      super([Function], (value)=> isClass(value));
    }
  }
  const Class = new ClassFunctionType();
  class ArgumentType extends Type{
    constructor(){
      super([], (value)=> isArgument(value));
    }
  }
  const Arguments = new ArgumentType();
  class CollectionType extends Type{
    constructor(){
      super([Array, Set, Arguments, Tuple], (value)=> isCollection(value));
    }
  }
  function getType(value){
    return isArray(value) ? 'array' : isDate(value) ? 'date' : isSet(value) ? 'set' : isMap(value) ? 'map' : isTuple(value) ? 'tuple' : value instanceof AnyType ? 'any' : value instanceof NoneType ? 'none' : isToken(value) ? '_'+isReactiveToken(value) ? 'Reactive' : 'Readonly' +'__Token_' :typeof value;
  }
  function customTypeReader(type){
    //for readinh names of  custom dataTypes;
  }
  function isFrozenWarn(isFrozen, action, type){
    if(isFrozen){
      $Debug(`cannot perfom ${action} on ${type}\n\ninstance may have been frozen or sealed from future possible mutations`);
      return false;
    }
    return true;
  }
  class TupleSizeOverride{
    value = 0;
    constructor(value){
      this.value=Number(value);
    }
  }
  const isTSO=asset=>asset instanceof TupleSizeOverride;
  function setTupleSize(value){
    return new TupleSizeOverride(value);
  }
  function TupleConstructorManager(args){
    this[$$tupleStore]=[];
    this[$$tupleUnique]=new Set();
    let size=0;
    define(this, 'size', {
      get(){
        return size;
      },
      set(NS){
        if(!isTSO(NS)){
          $Debug(`Mutation Exception\nCannot mutate the size property of a Tuple.\n`);
          return false;
        }
        size=NS.value;
        return true;
      }
    })
    this[$$tupleIsFrozen]=false;
    let index=0;
    for(const item of args.values()){
      if(!this[$$tupleUnique].has(item)){
        this[$$tupleUnique].add(item);
        this[$$tupleStore].push(item)
        instanciate_tuple_indexes(this);
        index++
      }
    }
    this.size=setTupleSize(Number(len(this[$$tupleStore])));
  }
  function instanciate_tuple_indexes(tuple){
    let ind=0;
    const newList=tuple.list();
    let oldListKeys=keys(tuple);
    for (let key of oldListKeys.values()){
      key=Number(key);
      if(!key === ind ) {
        tuple[key]=ind;
      }
      if(ind > len(newList)-1) delete tuple[ind];
      ind ++;
    }
    ind = 0;
    oldListKeys=keys(tuple);
    for( const [ key, value ] of newList.entries()){
      if(key > len(oldListKeys)-1 || !isS(value, tuple[key])){
        if(key > len(oldListKeys)-1 ){
          
        } else pass
        tuple[key]=value;
      } 
    }
  }
  function Tuple(...args){
    TupleConstructorManager.call(this, args );
  }
  function Tuple_filter(fn){
    return [ ...this[$$tupleStore].filter(...arguments) ];
  }
  Tuple.prototype.filter=function filter(fn){
    return Tuple_filter(...arguments);
  }
  Tuple.prototype.find=function find(fn){
    return this[$$tupleStore].find(...arguments)
  }
  Tuple.prototype.shift=function shift(){
    if(isFalse(isFrozenWarn(this[$$tupleIsFrozen], 'shift()', 'tuple'))) return false
    const firstValue=this[$$tupleStore][0];
    if(this.size > 0){
      this[$$tupleStore].shift();
      this[$$tupleUnique].delete(firstValue);
      this.size=setTupleSize(this.size-1);
      instanciate_tuple_indexes(this);
    }
    return firstValue;
  }
  Tuple.prototype.freeze=function freeze(deep=false){
    this[$$tupleStore]=objFreeze(this[$$tupleStore], deep);
    this[$$tupleIsFrozen]=true;
    return this;
  }
  Tuple.prototype.values=function values(){
    return this[$$tupleStore].values();
  }
  Tuple.prototype.keys=function keys(){
    return this[$$tupleStore].keys()
  }
  Tuple.prototype.entries=function entries(){
    return this[$$tupleStore].entries()
  }
  Tuple.prototype.has=function has(value){
    return this[$$tupleUnique].has(value)
  }
  Tuple.prototype.indexOf=function indexOf(value){
    return len(arguments) && this[$$tupleUnique].has(value) ? this[$$tupleStore].indexOf(value) : -1 ;
  }
  Tuple.prototype.add=function add(value){
    if(isFalse(isFrozenWarn(this[$$tupleIsFrozen], 'add()', 'tuple'))) return false
    if(len(arguments) && !this.has(value)){
      this[$$tupleUnique].add(value);
      this[$$tupleStore].push(value);
      this.size=setTupleSize(this.size+1);
      instanciate_tuple_indexes(this);
      return true;
    }
    return false;
  }
  Tuple.prototype.delete=function Tuple_delete(value){
    if(isFalse(isFrozenWarn(this[$$tupleIsFrozen], 'delete()', 'tuple'))) return false
    if(this.has(value)) {
      const index=this.indexOf(value);
      if(index <= 0) {
        this[$$tupleStore].splice(index, 1);
      }
      this[$$tupleUnique].delete(value);
      this.size=setTupleSize(this.size-1);
      instanciate_tuple_indexes(this);
      return index
    }
    return null;
  }
  Tuple.prototype.replace=function replace(oldV, newV){
    if(isFalse(isFrozenWarn(this[$$tupleIsFrozen], 'replace()', 'tuple'))) return false
    if(!this.has(oldV) && this.has(newV)) return false;
    const index=this.indexOf(oldV);
    this[$$tupleStore].splice(index, 1 , newV);
    this[$$tupleUnique].delete(oldV);
    this[$$tupleUnique].add(newV);
    instanciate_tuple_indexes(this);
    return true;
  }
  Tuple.prototype.prepend=function prepend(value){
    if(isFalse(isFrozenWarn(this[$$tupleIsFrozen], 'prepend()', 'tuple'))) return false
    if(!this.has(value)) {
      this[$$tupleStore].unshift(value)
      this[$$tupleUnique].add(value);
      this.size=setTupleSize(this.size+1);
      instanciate_tuple_indexes(this);
      return true
    }
    return false
  }
  Tuple.prototype.splice=function splice(index, count, ...newV){
    if(isFalse(isFrozenWarn(this[$$tupleIsFrozen], 'splice()', 'tuple'))) return false;
    if(!len(arguments)) return true;
    index = index || 0;
    count = count ||  this.size
    newV= len(newV) ? newV : [];
    for(let i=0;i<count;i++){
      const oldV=this[$$tupleStore][index+i];
      const newValue=newV.shift();
      this[$$tupleUnique].delete(oldV)
      if(index+i < len(newValue) && !this.has(newValue)) {
        this[$$tupleStore].splice(index+i, 1, newValue);
        this[$$tupleUnique].add(newValue)
      }else this[$$tupleStore].splice(index+i, 1)
    }
    if(len(newV)){
      for(let item of newV.values()){
        if(!this.has(item)){
          this.add(item);
        }
      }
    }
    this.size=setTupleSize(len(this[$$tupleStore]));
    instanciate_tuple_indexes(this);
    return true;
  }
  Tuple.prototype.clear=function clear(){
    if(isFalse(isFrozenWarn(this[$$tupleIsFrozen], 'clear()', 'tuple'))) return false
    this[$$tupleStore].splice(0, this[$$tupleStore].length);
    this[$$tupleUnique].clear();
    this.size=setTupleSize(0);
    instanciate_tuple_indexes(this);
    return true;
  }
  Tuple.prototype.pop=function pop(){
    if(isFalse(isFrozenWarn(this[$$tupleIsFrozen], 'pop()', 'tuple'))) return false
    const lastIndex=this[$$tupleStore][this.size-1];
    if(this.size-1 < 0  && !this.has(lastIndex) ) return;
    this[$$tupleUnique].delete(lastIndex);
    this[$$tupleStore].pop();
    this.size=setTupleSize(this.size-1);
    instanciate_tuple_indexes(this);
    return lastIndex;
  }
  Tuple.prototype.at=function at(index){
    if(index < 0 && index > this.size){
      $Debug(`index exceded Tuple limit.........\n"at()"`);
      return null
    }
    return this[$$tupleStore][Number(index)];
  }
  Tuple.prototype.list=function list(){
    return [ ...this[$$tupleStore] ] ;
  }
  Tuple.prototype.extend=function extend(collection){
    const res=validateCollectionArgs(arguments, {
      count:1,
      validators:[[Array, Tuple, Set]],
      name:'Tuple.extent()'
    })
    if(!res) return false;
    for(let [index, value] of getIterator(collection)){
      this.add(value);
    }
    instanciate_tuple_indexes(this);
    return true;
  }
  Tuple.prototype.contains = function contains(...args){
    if(!len(args)) return true;
    for (let [ index, item ] of args.values()){
      if(isFalse(this.has(item))) return false;
    }
    return true;
  }
  const effectTuple= new Tuple();
  var previousRunningEffectBuild = undefined ;
  var currentRunningEffectBuild = undefined ;
  var ancestorRunningEffect = undefined ;
  function installCurrentRunningEffect(self){
    effectTuple.add(self);
    if(isHouxerBuild(currentRunningEffectBuild)){
      previousRunningEffectBuild = currentRunningEffectBuild;
    }
    currentRunningEffectBuild = self;
  }
  function reinstatePreviousRunningEffect(){
    if(previousRunningEffectBuild) {
      currentRunningEffectBuild = previousRunningEffectBuild;
    }else currentRunningEffectBuild = undefined;
  }
  function getCurrentRunningEffect(binding){
    const self=currentRunningEffectBuild;
    const { name, silently } = binding;
    if(!isHouxerBuild(self)){
      if(!silently) $Debug(`"${name}()" Adapter method cannot be called outside of a build option widget or function widget body.\n\n"${name}()" may ve ben called in an asynchronous thread from the origin or outside of the build option method/function based widget`);
      return false;
    }
    return self;
  }
  function _createAgent(value, config){
    const response=validateCollectionArgs(arguments, {
      name:'createAgent',
      required:[true, false ],
      min:1,
      max:2,
      validators:[ Any, Object ]
    })
    if(!response) return pass
    const self=getCurrentRunningEffect({
      name:'createAgent'
    })
    if(!self) return [ pass, pass ];
    const parameters = exists(config) ? [ value, config ] : [ value ] ;
    const state = !isToken(value) && !isPrimitive(value) ? stream(...parameters) : token(...parameters);
    return _useAgent_(state);
  }
  function createAgent(value, config){
    return _createAgent(...arguments);
  }
  function deferWatch(getter){
    if(!isPFunction(getter)){
      $Debug(`deferWatch expects a getter function`);
      return 
    }
  }
  function pushEffect(){
    if(len(arguments)){
      $warn(`_pushEffect expects no formal arguments`, this )
    }
    this[$$$operands].dependency.notify();
    return this.__public_model__._deferTick();
  }
  function isSameNodeType(node1, node2){
    if(!node1 instanceof Element && !node2 instanceof Element) return false;
    else if(!node1.nodeType === node2.nodeType) return false;
    else if(!node1.localName === node2.localName) return false;
    return true
  }
  function isEQNode(node1, node2){
    if(!isSameNodeType(node1, node2)) return false;
    else if(!node1.outerHTML === node2.outerHTML) return false;
    else if(!len(node1.attributes) === len(node2.attributes)) return false;
    else if (len(node1.attributes) === len(node2.attributes)){
      const node2Attrs=node2.attributes;
      for(let [key, attr ] of entries(node1.attributes)){
        const { name , value } = attr;
        const { name:node2N, value:node2V } = node2Attrs[key];
        if(!name === node2N && !value === node2V) return false;
      }
    }
    return true;
  }
  function cloneVElement(vnode){
    if(!isHouxerVNode(vnode)){
      $Debug(`cloneVElement() macro expects a houxer virtual node as it's first argument`);
      return;
    }
    return vnode.compiler_options.Node()
  }
  function getFunctionBoundTarget(fn){
    
  }
  function _makeCloneVerson(value, deep=false){
    let cValue
    if(isHouxerVNode(value)) return cloneVElement(value)
    else if(isToken(value)) pass
    else if(isPrimitive(value) ) return value;
    else if(_validateType(value, [Array, Set, Tuple])){
      cValue= isArray(value) ? [] : isSet(value) ? new Set() : isTuple(value) ? new Tuple() : isObject(value) ? new value.__proto__.constructor() : undefined;
      let index = 0 ;
      for(let [ prop, item] of getIterator(value)){
        item =  _makeCloneVerson(item, deep) ;
        if(_validateType(value, [Set, Tuple])) cValue.add(item);
        else if(isArray(value)) cValue[index]=(item);
        index ++
      }
      return cValue;
    }else if(isFunction(value)){
      if(isClass(value)){
        cValue = Function('Base', `return class ${value.name || '' } extends Base{
          constructor(...args){
            super(...args);
          }
        }`)(value);
      }else {
        cValue=Function('callback','thisArg', `return function ${value.name || '' }(...args){
           return callback.call(this, ...args);
          }${ isBFunction(value) ? '.bind(thisArg)' : '' }`)(value, {});
      }
    }else if(isPObject(value)){
      cValue = deep ? structuredClone(value) : assign({}, value);
    }
    return cValue;
  }
  function deepEqualityCheck(val1, val2){
    val1=unwrap(val1)
    val2=unwrap(val2)
    if(_validateType(val1, None) && _validateType(val2, None)){
      if(isEmptyStr(val1) && isEmptyStr(val2)) return true;
      else if(isUndefined(val1) && isUndefined(val2)) return true;
      else if(val1 === null && val2 === null) return true;
      else return false;
    }
    if(!getType(val1) === getType(val2)) return false;
    if(isPrimitive(val1) && isPrimitive(val2)) return val1 === val2;
    if(isCollection(val1) || isArgument(val1) ){
      if(!len(val1) === len(val2)) return false;
      val2=_validateType(val2, [Set, Tuple]) ? arrSet(val2) : val2;
      for(const [ key, value] of val1.entries()){
        if(isFalse(deepEqualityCheck(value, val2[key]))) return false;
      }
      return true;
    }else if(isMap(val1)){
      if(!len(val1) === len(val2)) return false;
      let index=0;
      for(const [ key, value] of val1.entries()){
        const val2Key=val2.keys().next();
        if(isFalse(deepEqualityCheck(key, val2Key))) return false;
        const value2=val2.values().next();
        if(isFalse(deepEqualityCheck(val2, value2))) return false;
        index++;
      }
      return true;
    }else if(isObject(val1)){
      if(!len(val1) === len(val2)) return false;
      let index=0;
      for(const [ key, value] of entries(val1)){
        if(isFalse(key === keys(val2)[index])) return false;
        if(isFalse(deepEqualityCheck(value, val2[key]))) return false;
        index++;
      }
      return true
    }
    return JSON.stringify(val1) === JSON.stringify(val2);
  }
  function _$compiler_engine_hydrator(){
    global=createObj('Houxer');
    if(typeof self !== "undefined") window.Houxer=global;
  }
  const exceptions=createObj('Exceptions',{
    SE:(self)=>$Debug(``, self, isHouxerBuild(self))
  });
  const ConfigValidator={
    debug:Boolean, 
    forwardSlot:Boolean, 
    forwardAttrs:Boolean, 
    delimiters:Array, 
    scopedStyleSheet:Boolean, 
    isAsync:Boolean,
    isCustomElement:Boolean,
    useSSRCompiler:Boolean
  }
  class FrameworkCompilerOptions{
    debug=true
    forwardSlot=true
    forwardAttrs=true
    delimiters=['{{','}}']
    scopedStyleSheet=true
    isAsync=false
    isCustomElement=false
    useSSRCompiler=false
  }
  const isGlobalConfig=config=>config instanceof FrameworkCompilerOptions;
  const Compiler_Config_Options= new FrameworkCompilerOptions()
  class HouxerCompilerSetup{
    debug(debug){
      if(isFalse(mapSettingCheck(this, 'debug', debug))) return this;
      Compiler_Config_Options.debug=debug
    }
    forwardAttrs(forwardAttrs){
      if(isFalse(mapSettingCheck(this, 'forwardAttrs', forwardAttrs))) return this;
      Compiler_Config_Options.forwardAttrs=forwardAttrs
    }
    forwardSlot(forwardSlot){
      if(isFalse(mapSettingCheck(this, 'forwardSlot', forwardSlot))) return this;
      Compiler_Config_Options.forwardSlot=forwardSlot
    }
    delimiters(delimiters){
      if(isFalse(mapSettingCheck(this, 'delimiters', delimiters))) return this;
      Compiler_Config_Options.delimiters=delimiters
    }
    scopedStyleSheet(scopedStyleSheet){
      if(isFalse(mapSettingCheck(this, 'scopedStyleSheet', scopedStyleSheet))) return this;
      Compiler_Config_Options.scopedStyleSheet=scopedStyleSheet
    }
    isAsync(isAsync){
      if(isFalse(mapSettingCheck(this, 'isAsync', isAsync))) return this;
      Compiler_Config_Options.isAsync=isAsync
    }
    isCustomElement(isCustomElement){
      if(isFalse(mapSettingCheck(this, 'isCustomElement', isCustomElement))) return this;
      Compiler_Config_Options.isCustomElement=isCustomElement;
    }
    useSSRCompiler(useSSRCompiler){
      if(isFalse(mapSettingCheck(this, 'useSSRCompiler', useSSRCompiler ))) return this;
      Compiler_Config_Options.useSSRCompiler=useSSRCompiler
    }
  }
  function isXtruct(func) {
    try {
      new func();
      return true;
    } catch (error) {
      return false;
    }
  }
  function _validateType(val, type){
    if(isFunction(type) ){
      if(new Set(DataFunctionMap).has(type)){
        return getType(val) === getType(type()) && !isNull(val)
      }else if(new Set(XtructDataCallableTypes).has(type)){
        let res=false;
         try {
           res=getType(val) === getType(new type()) && !isNull(val);
         }catch(err){
           return res;
         }
         return res;
      }else if(isDomSpecialConstructor(type) || isClass(type) || isXtruct(type) ) {
        let res=false;
        try {
          res=val instanceof type;
        }catch(err){
          return res;
        }
        return res;
      }
    }else if(isArray(type)){
      let res=false;
      for(let typeF of type.values()){
        if(!isFunction(typeF) && !isBaseType(typeF) && !isNull(typeF) && !isEmptyStr(typeF)){
          $Debug(`type check value is not a function or class constructor type\n\n found "${typeF}"`); 
          return false;
        }
        res=_validateType(val, typeF);
        if(isTrue(res)) {
          return res;
          break;
        }
      }
      return res;
    }else if(isBaseType(type)){
      if(type instanceof AnyType) return !_validateType(val , None );
      else if(type instanceof NoneType) return _validateType(val, [undefined, null, ""]);
      let res;
      if(type.validator) res=type.validator(val);
      if(!isTrue(res) && type.type ) res=_validateType(val, type.type);
      return res;
    }else if(new Set([undefined, null, "" ]).has(type)) return isString(val) ? isEmptyStr(val) : isNull(val);
    return false;
  }
  function Signal(name, callback, options){
    this.name=name;
    this.receiverForm=new Set()
    this.depend=callback
  }
  Signal.prototype.fire=function fire(...params){
    this.depend( ...params)
  }
  const isSignal=val=>_validateType(val, Signal);
  function createTextElement(text, self, hx__VNode, isRerender){
    return _createTextElement(self, text, hx__VNode, isRerender);
  }
  function _createTextElement(self, text, hx__VNode, isRerender){
    if(!isPrimitive(text)){
      $Debug(`cannot create a TEXT_NODE element from a none primitive value.......\n\n"${text}" value`, self);
      text = "";
    }
    text=String(text);
    let hasSkip;
    let node;
    let is_hyperscript=hx__VNode.is_hyperscript;
    if(hx__VNode)  define(hx__VNode, '_vnode_key',{
      value:_generateUUID(7),
      enumerable
    })
    node=document.createTextNode(text);
    if(hasSpecialCharacters(node?.textContent)  && !is_hyperscript) {
      let [subscribers, textContent] = effectDependencyTracking(self, function(){
        return resolveAccessor(self, text, hx__VNode);
      })
      hx__VNode.VN_Tree=textContent;
      node.textContent=textContent
      hx__VNode.PATCH_FLAGS.add('ELEMENT_CHILDREN');
      hx__VNode.render_tracked=exists(len(subscribers));
      hx__VNode.VNodeManager.patchFlags.isHoisted=true
    }
    hx__VNode.is_text_node=true
    return node ;
  }
  function VirtualizePropTick(hx__VNode, org, resolved, [ unevaluated, evaluated ], Deps ){
    let initialDependencies = [];
    if(hasOwn(hx__VNode.VNodeManager.patchFlags.PropFlags, org)){ 
      const PropFlags=hx__VNode.VNodeManager.patchFlags.PropFlags[org]
      if(len(PropFlags.dependencies) ) Deps=Deps.concat(PropFlags.dependencies);
      return false;
    }
    for( const dep of Deps.values() ){
      initialDependencies.push(dep());
    }
    hx__VNode.VNodeManager.patchFlags.PropFlags[org]={
      resolvedPropName : () => resolved,
      accessor : () => unevaluated ,
      evaluatedValue : () => evaluated,
      dependencies : () => Deps,
      initialDependencies
    }
    return true;
  }
  const DEPENDENCY_FLAGS={
    [16]:'CLASS',
    [32]:'STYLE',
    [48]:'ATTRS',
    [64]:'EVENTS',
    [80]:'PROPS',
    [96]:'TEXT',
    [112]:'SLOTS',
    [128]:'CHILDREN'
  }
  const flagNames="CLASS,STYLE,ATTRS,EVENTS,PROPS,TEXT,SLOTS,CHILDREN".split(",");
  class vNodeClass{
    constructor(type, props, children, configOptions={}){
      this.type=type
      this.props=isPObject(props) ? props : {} ;
      if(hasOwn(this.props, 'key')){
        this.key=this.props.key;
      }
      children = lazyUnwrap(children)
      this.children= exists(children) && !isArray(children) ? [ children ] : exists(children) ? children : null;
      let { subs, ctx, is_hyperscript, key, config, self, flags=[] } = configOptions;
      this.ctx=ctx;
      for(let fl of flags.values()){
        this.subscriptions[DEPENDENCY_FLAGS[fl]]=DEPENDENCY_FLAGS[fl].toString(2);
      }
    }
    type=null
    hx_hash_=null
    $element=null
    props={}
    PropFlags=null
    compiler=null
    prototype_=null
    children=null
    key=null
    config=null
    ctx=null
    _is_VNodeClass=true
    filesFilter={
      $Events:null,
      $Model_Event:null,
      $Notifiers:null
    }
    _value=null
    rawChildren=null
    rawProps=null
    children=null
    subscriptions={}
    dependencies=[]
    hx__VNode=null
    is_hyperscript=false
    GeneticProvider=null
  }
  const isRenderVNodeClass=vnode=>vnode instanceof vNodeClass;
  class HouxerVNode{
    constructor(){
      if (isNativeElement(this.$element)) define(this.$element, 'houxerVNode',{
        value:this, 
        enumerable, 
        configurable
      });
    }
    base_element=undefined
    get_parent_element(){
      return this.$element.parentElement.houxerVNode
    }
    render_tracked=false
    $element=undefined
    slot_name=undefined
    widget_instance=undefined
    updated_hook=pass
    destroyed_hook=pass
    _vnode_key=undefined
    patch_tracks=new Set()
    conditional_record={ src:undefined, res:false, passed:false}
    compiler_options=createObj('compiler_options', { fallthrough:createObj('fallthrough')});
    VNodeManager=createObj('VNodeManager', { 
      updateFlags:{ 
        active:false
      },
      GeneticProvider:undefined,
      Attribute_Collection:undefined,
      vNodeClass:undefined,
      factoryCompiler:pass,
      LifeCycleHooks:{
        init_hook:new Tuple(),
        created_hook:new Tuple(),
        mounted_hook:new Tuple(),
        updated_hook:new Tuple(),
        destroyed_hook:new Tuple()
      },
      patchFlags:{
        isHoisted:false,
        subscriptions:[],
        PropFlags:{},
        shapeProps:{}
      },
      dexTransform:{
        sourcesArray:[],
        syntaxArray:[]
      }
    })
    VN_Tree=[]
    hx_hash_=undefined
    children_nodes_list=[]
    is_hyperscript=false
    called_render=false
    is_element_node=false
    is_mount_root=false
    mount_root_tooken=undefined
    is_text_node=false
    IS_RENDERLESS=false
    LabContext=undefined
    mounted=false
    isWidgetWrapper=false
    NodeList=new Tuple()
    PATCH_FLAGS=new Set()
  }
  function isTagMatch(open, close){//match syntax for a $$for opening and closing tags
    let res=false;
    const tags=[['[',']'],['{','}'],['(',')'],['<','>']];
    for(const items of tags.values()){
      if(items.includes(open) || items.includes(close)){
        if(open === items[0] && close === items[1] || open === items[1] && close === items[0]) {
          return true;
        }
      }
    }
    return res;
  }
  function tagMachErr(self, metrics){
    let [ op, cl, p1 ] = metrics;
    if(!isTagMatch(op, cl) ) {
      $Debug(`Unmaching tags for "for" directive loop data keys mapping\n opening tag does not match a closing tag\n\n found ${p1} Unmaching`, self, true);
      return false;
    }
  }
  const keyValueRegex=/((\(|\<)(.*?)?(\)|\>))[ ]+([of|in]+)[ ]+([.\w\$\[\]\(\) \S]+)/;
  const DestructuredRegex=/((\{|\[)(.*?[ ]*)*?(\}|\]))[ ]+([of|in]+)[ ]+([\w.\$\[\]\(\) \S]+)/;
  const valueRegex=/([\w\$]+)[ ]+([of|in]+)[ ]+([\w.\-\[\]\$\(\) \S]+)/;
  const iterableRegex=/^([.\w\$\[\]\(\) \S]+)$/
  const interRegex=/[ ]*(\{|\[)(.*?)(\}|\])[ ]*/;
  function get_Loop_Data(self, str, isBlock=false){
    const Loop_Data={}
    if(keyValueRegex.test(str)){
      str=str.replace(keyValueRegex,(match, p1, op, value, cl, type, obj)=>{
        if(isFalse(tagMachErr(self, [ op, cl, p1]))) return ;
        let item , index , key ;
        if(interRegex.test(value)){
          let destrV=value.replace(interRegex, (match, opn, vvv, cls )=>{
            if(isFalse(tagMachErr(self, [ opn, cls, vvv]))) return ''
            item = match
            return ''
          })
          let [ em, keyX, indexX ] = destrV.split(' ').join('').split(',');
          key=keyX;
          index=indexX;
        }else{
          let [ itemX, keyX, indexX ] = value.split(' ').join('').split(',');
          key=keyX;
          item=itemX;
          index=indexX;
        }
        if( value ) Loop_Data.value=item;
        if( key ) Loop_Data.key=key;
        if( index ) Loop_Data.index=index;
        define(Loop_Data, 'type', {value:type});
        define(Loop_Data, 'obj',{value:obj});
        return match;
      })
    }else if(DestructuredRegex.test(str)){
      str=str.replace(DestructuredRegex, (match, structs,  op, items, cl, type, value)=>{
        if(!isTagMatch(op, cl) ) {
          $Debug(`Unmaching tags for "for" ${isBlock ? 'block' : 'directive'} loop data keys mapping\n opening tag does not match a closing tag\n\n found at${match}`, self, true);
          return;
        }
        Loop_Data.obj=value;
        Loop_Data.type=type;
        Loop_Data.value=structs;
        return match;
      })
    }else if(valueRegex.test(str)){
      str=str.replace(valueRegex,(match, value, type, obj)=>{
        Loop_Data.value=value;
        Loop_Data.type=type;
        Loop_Data.obj=obj;
        return match;
      })
    }else if(str.match(iterableRegex)){
      str=str.replace(iterableRegex,(match, value)=>{
        Loop_Data.obj=value;
      })
    }else{
      $Debug(`Usupported Loop format in 'for' ${isBlock ? 'block' : 'directive'}\n\n"${str}" loop syntax is invalid or is not recognised`, self, true);
      return;
    }
    return Loop_Data
  }
  function For_Loop(self, attr, hx__VNode, isBlock=false){
    const data=get_Loop_Data(self, attr, isBlock);
    if(!data) return ;
    let dataObject;
    try{
      dataObject=_$runModelBind(self, data.obj, hx__VNode);
      dataObject=unwrap(dataObject);
    }catch(error){
      $Debug(`Trouble accessing '${data.obj}' object for for loop\n\nnot found on instance or is undefined\n\n${error}`, self, true);
      return;
    }
    if(!isIterable(dataObject) && !isNumber(dataObject)){
      $Debug(`Undefined scope for for, \n\n${data.obj} not iterable`, self, true);
      return ;
    }
    const Valid_LoopType="of,in";
    if(data.type && !_mapValue(Valid_LoopType, data.type)){
      $Debug(`Iteration issue\n\n"${data.type}" is not an iterator\n "of" or "in" only supported by Houxer`, self, true);
      return;
    }
    return { 
      obj:dataObject, 
      keyName:data.key, 
      valToken:data.value, 
      loopType:data.type, 
      token:data.obj, 
      index:data.index 
    }
  }
  function NormalizeDirGarbage(props){
    let has_conditional=false;
    let has_loop=false
    let dataRecord={};
    let index=0
    for(const [key, val] of entries(props)){
      if(isIfKey(key)){
        has_conditional=true;
        dataRecord = {
          ifIndex:index,
          hasIf:true,
          getIf:val,
          ifKey:key
        }
      }else if(isElseKey(key)){
        has_conditional=true;
        dataRecord = {
          elseIndex:index,
          hasElse:true,
          getElse:val,
          elseKey:key
        }
      }else if(isElseIfKey(key)) {
        has_conditional=true;
        dataRecord = {
          elseIfIndex:index,
          getElseIf:val,
          hasElseIf:true,
          elseIfKey:key
        }
      }else if(isForKey(key)) {
        has_loop=true;
        dataRecord = {
          forIndex:index,
          hasFor:true,
          getFor:val,
          forKey:key
        }
      }
      index++
    }
    dataRecord.hasIFWithFor=isTrue(has_conditional && has_loop);
    return dataRecord;
  }
  class renderlessVNode {
    type='conditional'
    source=''
    value=undefined
    compiler_options=undefined
    hx__VNode=undefined
    $element=undefined
    siblings=undefined
    constructor(value, compiler_options, source, hx__VNode, siblings){
      this.$element=_createFragment();
      this.value=value;
      this.compiler_options=assign(this.compiler_options||{},compiler_options);
      this.source=source;
      this.hx__VNode=hx__VNode;
      this.siblings=siblings;
      if(hx__VNode) this.hx__VNode.IS_RENDERLESS=true
    }
  }
  const isRenderlessVNode=vnode=> vnode instanceof renderlessVNode || isTrue(isHouxerVNode(vnode) && isTrue(vnode.IS_RENDERLESS));
  function _$Conditional_Dir_Resolver(self, vnode, hx__VNode, siblings, recordPatch){
    const [ hasIf, hasElseIf , hasElse ] = recordPatch[3];
    const GIC=new _$Directive_$Conditional$_Renderer(self, vnode, hx__VNode, siblings, recordPatch);
    if(hasIf) return GIC.Panel_If_Block();
    else if(hasElseIf) return GIC.Panel_elseif_Block();
    else if(hasElse) return GIC.Panel_else_Block();
  }
  const isConditionalVnode=(vnode, cond)=> isHouxerVNode(vnode) ? vnode.conditional_record.src === cond : false;
  class _$Directive_$Conditional$_Renderer{
    options=undefined
    constructor(self, vnode, hx__VNode, siblings, recordPatch){
      let { type, props, children, key } = vnode;
      const [ hasEx , propValue , srcKey ]=recordPatch
      this.propValue=propValue;
      this.srcKey=srcKey
      this.self=self
      this.props=props;
      this.vnode=vnode;
      this.hx__VNode=hx__VNode;
      this.siblings=siblings;
      this.parameters=()=>[vnode, self, false, this.hx__VNode.LabContext]
      hx__VNode.compiler_options.parameters=this.parameters;
      // this.modifiers=modifiers
    };
    Panel_If_Block(){
      const { self, propValue, hx__VNode, parameters, vnode, srcKey } = this ;
      let data=_$runModelBind(self, propValue, hx__VNode);
      delete vnode.props[srcKey];
      if(data) {
        const node = _createVirtualElement(...parameters()/*...args, false, hx__VNode.LabContext*/, null, null, null, hx__VNode);
        hx__VNode.conditional_record.src='if';
        hx__VNode.conditional_record.res=true;
        hx__VNode.conditional_record.passed=true;
        hx__VNode.NodeList.add(node);
        return node.$element;
      }else return $IfElseDirRenderLess.call(this, data, 'if').$element;
    } 
    Panel_elseif_Block(isElse=false){
      const block=isElse ? 'else' : 'else-if' ;
      const { self, propValue, hx__VNode, siblings, vnode, srcKey, parameters } = this
      let data=_$runModelBind(self, propValue, hx__VNode);
      const previous=siblings[len(siblings)-1];
      if(previous) hx__VNode.conditional_record.passed=previous.conditional_record.passed;
      delete vnode.props[srcKey];
      if(!len(siblings) || !previous || (!isConditionalVnode(previous, 'if') && !isConditionalVnode(previous, 'else-if'))){
        $Debug(`"The ${block}" conditional rendering directive block expects a preceding "if" or "else-if" directive element\n\nMay return unexpected result\ndid you mean "if" directive instead?\n at>>>>>>>>""`, self, true);
        const node = _createVirtualElement(...args, false, hx__VNode.LabContext, null, null, null, hx__VNode);
        return node.$element;
      }else if(isFalse(previous.conditional_record.passed) && isRenderlessVNode(previous) && isFalse(previous.conditional_record.res)){
        if(isElse || data){
          const node = _createVirtualElement(...parameters()/*...args, false, hx__VNode.LabContext*/, null, null, null, hx__VNode);
          hx__VNode.conditional_record.src=block;
          hx__VNode.conditional_record.res=true;
          if(!isElse) hx__VNode.conditional_record.passed=true
          hx__VNode.NodeList.add(node);
          return node.$element;
        }else return $IfElseDirRenderLess.call(this, data, block, previous ).$element;
      }else return $IfElseDirRenderLess.call(this, data, block, previous).$element;
    }
    Panel_else_Block(){
      return this.Panel_elseif_Block(true);
    }
  }
  function $IfElseDirRenderLess( data, block, previous){
    const { args, hx__VNode } = this;
    const renderless= new renderlessVNode(data, vnode, block, hx__VNode);
    hx__VNode.conditional_record.src=block;
    hx__VNode.IS_RENDERLESS=true;
    hx__VNode.conditional_record.res=false;
    hx__VNode.conditional_record.passed=previous ? previous.conditional_record.passed : false ;
    hx__VNode.NodeList.add(renderless);
    return renderless;
  }
  function has_Intersect_Prop(obj1, obj2 ){
    let res=false;
    for(const [key, value] of entries(obj1)){
      if(isArray(obj1)) res=_mapValue(obj2, value);
      else if(isPObject(obj1)) res=_mapValue(obj2, key);
      if(isTrue(res)) break;
    }
    return res;
  }
  function destructWarn(ref, object, self){
    if(ref && objectDestructureRegex.test(ref) && !isObject(object)){
      $Debug(`Invalid object destructuring from a none object value\n\nillegal destructuring found at "${object}" on $$*** directive definition\nTarget value is not an object`, self, true);
      return false;
    }else if(ref && arrayDestructureRegex.test(ref) && !isArray(object)){
      $Debug(`Invalid array destructuring from a none array value\n\nillegal destructuring found at "${object}" on $$*** directive definition\nTarget value is not an array iterable`, self, true);
      return false;
    }
    return true;
  }
  function generateDestructurePrefix(self){
    
  }
  function defineDestructuringContextProps(self, hx__VNode, ctx, items, value, metrics ){
    let { objDex , link, item, key , garbageProps  } = metrics;
    if(objDex && link ? link.includes('=') : !objDex ? item.includes('=') : false){
      let assign=(objDex ? link : item).split(' ').join('').split('=');
      let [ keyX, valX ]=assign;
      valX = self && hx__VNode ? _$runModelBind(self, valX, hx__VNode, true ) : null;
      const realV=value[ !objDex && isArray(value) ? key : item ];
      ctx[keyX]=!realV ? valX : realV;
      garbageProps.add(keyX);
    }else if(objDex && !link && item.startsWith('...') ){
      if(!len(items) === key+1){
        $Debug(`rest property destructuring can only be used as the last value on destructure mapping`, self, true);
        return;
      }
      item=item.slice(3);
    }else {
      ctx[ link || item ] = value[ isArray( value ) ? key : item ] ;
      if(objDex) garbageProps.add( item )
    }
  }
  function _destructure_wizard_compiler( self , value , valToken , ctx , hx__VNode) {
    const itemsToken = valToken.match( objectDestructureRegex ) || valToken.match( arrayDestructureRegex ) ;//runs des'
    const isobj = !isArray( value ) ;
    const objDex=objectDestructureRegex.test(valToken);//check if this is an object destructure
    let items = itemsToken[ 1 ].split( ',' )// ;
    if( len( items ) ) {
      let key = 0 ;//loops through items
      const garbageProps = new Tuple() ;
      items.forEach( ( item ) => {
        item = isobj ? item.trim().split( ':' ) /*if thisis an obj, get alias by colon*/: item.trim() ;
        if( isobj &&  len( item ) > 2 ) {
          $Debug( `Problem with destructuring reassignment alias\n\nExceded parameter length expectation\n..............${ item.join( ':' ) }` , self , true ) ;
          return ;
        }
        const link = isobj ? item[ 1 ] : null ;
        item = isobj ? item[ 0 ] : item ;
        if(hasSpread_bind(item)){
          if(!key+1 === len(items)){
            $Debug(`"${item}" spread parameter element must come last in the destructured elements definition`);
            return;
          }
          const restProps=objDex ? {} : [];
          for(let [ name, val] of entries(value)){
            if(!garbageProps.has(name)) {
              if(objDex) restProps[name] = val;
              else restProps.push(val)
            }
          }
          ctx[item.slice(3)]=restProps;
        }else if( isTrue( isArray( value ) &&  key + 1 > len( value ) ) || isTrue( isObject( value ) && !hasProp( value , item ) ) ) {
          if( isArray( value) ) {
            $Debug( `${ item } array destructure key exceeds array length` , self , true );
            return;
          }else {
            $Debug( `destructure object value has no such key as "${ item }"\n\nInvalid key destructure at at..."${ valToken }"`, self , true ) ;
            return;
          }
        }else{
          defineDestructuringContextProps(self, hx__VNode, ctx, items, value, { objDex, link, item, key, garbageProps } );
        }
        key ++;
      } );
    }
  }
  function _$Directive_$For_Loop$_Renderer(self, args, hx__VNode, siblings, renderPatch){
    const [ check, propValue , srcKey ] = renderPatch;
    let wrapper;
    let { obj, keyName, valToken, loopType, ref, index }=For_Loop(self, propValue, hx__VNode) || {};
      delete args.props[srcKey];
    if(loopType && loopType === 'in' && valToken && !isNumber(obj) && isObject(obj)){
      $warn(`((Warning))\n\nWe do not recommend the use of key value paires in 'for...in' loops while iterating over a plain object, \n\nsince the value of the value reference will remain "undefined"\nPreferable over a non plain object`, self);
      $warn(`Many JavaScript style guides and linters recommend against the use of 'for...in', because it iterates over the entire prototype chain which is rarely what one wants, and may be a confusion with the more widely-used "for...of" loop\n\nIt's included in Houxer's support for completeness.`, self);
    }
    const NodeList=[];
    const options={
      orgType:getType(obj),
      ref, src:obj,
      args:{ type:args.type, props:assign({}, args.props), children:args.children, is_hyperscript:false, hx__VNode, alias:{valToken, keyName}} 
    }
    let league;
    if(isNumber(obj)){
      let count=0
      for(let i=0 ; i < obj ; i++){
        count++
        let ctx= {}
        if(isFalse(destructWarn(valToken, obj, self))) return;
        if(valToken) ctx[valToken]=i+1;
        if(keyName) ctx[keyName]=valToken ? i : i+1;
        if(index) ctx[index]=count
        league=renderForConditional(self,  args, ctx, NodeList, i, i+1, options, hx__VNode )
      }
    }else if(loopType &&  _mapValue("of,in", loopType) && isIterable(obj)){
      let count=0;
      valToken=valToken ? valToken.trim() : null;
      keyName=keyName ? keyName.trim() : null ;
      index=index ? index.trim() : null ;
      for(const [ky, vl] of getIterator(obj)){
        count++;
        const ctx={}
        mapCTXFallProps(self, {valToken, keyName, index }, {ky, vl, count }, ctx);
        league=renderForConditional(self, args, ctx, NodeList, count, vl, options, hx__VNode, {  count, value:vl })
      }
    }
    wrapper= new HouxerFragmentVNode(self, NodeList, hx__VNode)
    if(wrapper){
      wrapper.isWidgetWrapper=true;
      wrapper.compiler_options=assign(wrapper.compiler_options,options);
    }
    if(league){
      for ( let [ key, val ] of entries(league)){
        if(!key === 'IS_RENDERLESS') hx__VNode.conditional_record[key]=val;
        hx__VNode.IS_RENDERLESS=val;
      }
    }else if(!len(NodeList)){
      wrapper=new HouxerFragmentVNode([], self);
      wrapper.isWidgetWrapper=true;
      wrapper.compiler_options=assign(wrapper.compiler_options,options);
    }
    hx__VNode.NodeList.add(wrapper)
    return wrapper?.$element
  }
  function mapCTXFallProps(self, Loop_Data, it_Data, ctx){
    let dexTransform={
      sourcesArray:[],
      syntaxArray:[]
    };
    const { valToken, keyName , index} = Loop_Data
    const { ky, vl, count } = it_Data 
    if(isFalse(destructWarn(valToken, vl, self))) return wrapper;
      if(valToken && isDestructureSyntax(valToken) ){ 
      dexTransform.sourcesArray.push(vl);
      dexTransform.syntaxArray.push(valToken)
      if(hasOwn(ctx, $$dexTransformKey)){
        ctx[$$dexTransformKey].sourcesArray=ctx[$$dexTransformKey].sourcesArray.concat(dexTransform.sourcesArray)
        ctx[$$dexTransformKey].syntaxArray=ctx[$$dexTransformKey].syntaxArray.concat(dexTransform.syntaxArray);
      }else ctx[$$dexTransformKey]=dexTransform;
    }else{
      if(valToken) ctx[valToken]=vl;
    }
    if(keyName) ctx[keyName]=valToken ? ky : vl;
    if(index) ctx[index]=count;
  }
  function renderForConditional(self, args, ctx, NodeList, count, vl, options, hx__VNode, co){
    if(hx__VNode.LabContext) ctx=assign(hx__VNode.LabContext, ctx, NodeList);
    const props=assign({}, args.props);
    const Node=()=>_createVirtualElement(args, self, false, ctx,  NodeList, null, null, hx__VNode);
    const loopNode=Node();
    loopNode.compiler_options=assign(loopNode.compiler_options, assign(co ||  { props, ctx, Node, index:count, value:vl}, options));
    options.Node=Node;
    if(loopNode) NodeList.push(loopNode);
    if(isConditionalVnode(loopNode, 'if') || isConditionalVnode(loopNode, 'else-if')){
       return { 
        src:loopNode.conditional_record.src,
        res:loopNode.conditional_record.res,
        passed:loopNode.conditional_record.passed,
        IS_RENDERLESS:loopNode.IS_RENDERLESS
      }
    }
  }
  function keyIndex(obj, key){
    return isObject(obj) ? keys(obj).indexOf(key) : _validateType(obj, [Array, Set, Number]) ? Number(key) : isMap(obj) ? obj.keys().indexOf(key) : NaN;
  }
  function VNodeManager(self, vnode, element, hx__VNode, siblings, saveGarbageContent, isRerender){
    const { type, props, children }=vnode;
    const { hasIFWithFor , ifIndex , elseIndex, elseIfIndex, forIndex}=saveGarbageContent
    const {getIf, hasIf, hasElse, getElse, hasElseIf, getElseIf, hasFor, getFor } = saveGarbageContent;
    const { ifKey, elseKey, elseIfKey, forKey } = saveGarbageContent;
    const getValue=hasIf ? getIf : hasElse ? getElse : hasElseIf ? getElseIf : hasFor ? getFor : null ;
    const getEx=hasIf || hasElse || hasElseIf;
    const getKey= hasIf ? ifKey : hasElse ? elseKey : hasElseIf ? elseIfKey : hasFor ? forKey : null ;
    const conditionalArgs= [getEx, getValue, getKey, [ hasIf, hasElseIf, hasElse ]]
    if(hasIFWithFor && hasIf ? ifIndex : hasElse ? elseIndex : hasElseIf ? elseIfIndex : -1 < forIndex) return _$Conditional_Dir_Resolver(self, vnode, hx__VNode, siblings, conditionalArgs );
    else if(hasFor) return _$Directive_$For_Loop$_Renderer(self, vnode, hx__VNode, siblings,  [getEx, getFor, forKey ] );
    else if( getEx ) return _$Conditional_Dir_Resolver(self, vnode, hx__VNode, siblings, conditionalArgs );
    else return createHouxerElement(vnode, self,hx__VNode, null, isRerender );
  }
  function callSetHooks(self, hooks, element, bindObj={}, hx__VNode, Name="" ){
    function Callback(){
      for(let hook of hooks.values()){
        if(isPass(hook)) continue
        try{
          const { value, modifiers } = hook[lifeCiycleBinding] || {}
          hook.call(self.__public_model__, element && isNativeElement(element) ? hx__VNode.$element : self, value, modifiers);
        }catch(err){
          // $warn(err.stack)
          $Debug("Unresolved problem during the call of the "+Name.slice(0, -5) +" hook of custom "+hook.dirName||""+" directive\n",  self, true);
          $Debug(err, self);
          return element;
        }
      }
      return element;
    }
    return Callback();
  }
  function HouxerElementLifeCircleHooks(self, element, hx__VNode){
    const args=(hookN)=> [ self, hx__VNode.VNodeManager.LifeCycleHooks[hookN], element, self.__public_model__, hx__VNode, hookN ];
    hx__VNode.$element=element;
    if(self && !isFalse(self[$$$operands].initialized)) return element
    if(len(hx__VNode.VNodeManager.LifeCycleHooks.created_hook)){
      callSetHooks( ...args('created_hook') );
    }
    if(len(hx__VNode.VNodeManager.LifeCycleHooks.mounted_hook)){
      self[$$$compiler].whenMountedHooks.add(function(){
        whenMounted(self, element, ()=>{
          callSetHooks( ...args('mounted_hook') );
        })
      })
    }
    if(len(hx__VNode.VNodeManager.LifeCycleHooks.updated_hook)) $assignToHookFN( ...args('updated_hook') );
    if(len(hx__VNode.VNodeManager.LifeCycleHooks.destroyed_hook)) $assignToHookFN( ...args('destroyed_hook') );
    return  element;
  }
  function $assignToHookFN(self, hookSet, element, model, hx__VNode, hookN){
    hx__VNode[hookN]=function hook(){
      callSetHooks(self, hookSet, element, self.__public_model__, hx__VNode, hookN);
    }
  }
  function resolveElementToken(self, ref, element, hx__VNode){
    try{
      set_Object_Value(self.__public_model__, ref, element);
    }catch(err){
      $Debug(`Uresolved problem when resolve element ref directive\n\n${err}`, self, true);
      return
    }
  }
  function _createVirtualElement(vnode, self, is_hyperscript, ctx, siblings, ssc, isRerender=false, hx__VNode){
    return new HouxerElementVNode(...arguments);
  }
  function translateVElementNormalizer(virtualElement, self){
    
  }
  function smartDextCtxMerging(context, ssc){
    if(context && hasOwn(context, $$dexTransformKey) && hasOwn(ssc, $$dexTransformKey)){
      const sourcesArray=new Set(context[$$dexTransformKey].sourcesArray.concat(ssc[$$dexTransformKey].sourcesArray));
      const syntaxArray=new Set(context[$$dexTransformKey].syntaxArray.concat(ssc[$$dexTransformKey].syntaxArray));
      context[$$dexTransformKey].sourcesArray=arrSet(sourcesArray);
      context[$$dexTransformKey].syntaxArray=arrSet(syntaxArray);
      for(let [key, value] of entries(ssc)){
        if(!$$dexTransformKey === key){
          context[key]=value
        }
      }
    }else if(context && ssc){
      if(hasOwn(ssc, $$dexTransformKey)){
        context[$$dexTransformKey]=ssc[$$dexTransformKey];
        delete ssc[$$dexTransformKey]
      }
      context = assign(context, ssc);
    }else if(ssc) context=ssc
    return context;
  }
  class HouxerElementVNode extends HouxerVNode{
    constructor(vnode, self, is_hyperscript=false, ctx, siblings, ssc, isRerender=false, hx__VNode){
      super();
      let { type, props, children, key } = vnode;
      if(is_hyperscript){
        this.is_hyperscript=true;
        this.called_render=true;
      }
      if(ctx) this.LabContext=ctx;
      if(ssc) {
        this.LabContext=smartDextCtxMerging(this.LabContext, ssc);
      };
      if(validHouxerWidget(type) || isWidgetResolver(type)){
        this.VNodeManager.rawChildren=()=> vnode.rawChildren;
      }
      const frameDirectives="$$for,$$if,$$else-if,$$else";
      let element;
      bufferDirSetups(self, props, this);
      const saveGarbageContent = NormalizeDirGarbage(props||{});
      const { hasIf, hasElseIf, hasElse, hasFor } = saveGarbageContent;
      if(!is_hyperscript && isTrue( hasFor || hasIf || hasElse || hasElseIf ) ) element=VNodeManager(self, vnode, null, this, siblings, saveGarbageContent, isRerender);
      else element=createHouxerElement(vnode, self, this, siblings, isRerender);
      element=isNativeElement(element) ? HouxerElementLifeCircleHooks(self, element, this) : element;
      this.$element=element;
      if(self && (isNull(self[$$$core].posixVNode) || isElementType(this.$element, 'slot')) && IS_ELEMENT_NODE(this.$element)) {
        self[$$$core].posixVNode=this.$element;
      }
      if(hasProp( isHouxerWidgetVNode(this) ?  this.widget_instance[$$$ownProperties] : this.compiler_options, 'dir--ref')) resolveElementToken(self, isHouxerWidgetVNode(this) ? this.widget_instance[$$$ownProperties]['dir--ref']  : this.compiler_options['dir--ref'], isHouxerWidgetVNode(this) ? this.widget_instance : this.$element, this );
      NormalizeVN_TreeProvider(hx__VNode, this, {
        type,
        props
      });
    }
  }
  class HouxerFragmentVNode extends HouxerVNode{
    constructor(self, vnodes=[], hx__VNode){
      super();
      vnodes=!isArray(vnodes) ? [vnodes] : vnodes;
      if(!len(vnodes)) vnodes.push(new HouxerTextVNode(self, String(""), this));
      let index=0;
      for(let node of vnodes.values()){
        if(isPrimitive(node)){
          if(!exists(node)) node="";
          node=new HouxerTextVNode(self, String(node), this) ;
        }else if(isPFunction(node)) node=node(self);
        if(isHouxerVNode(node)){
          this.NodeList.add(node)
          if(!(isHouxerWidgetVNode(node) && isBuiltinPortalWidget(node.widget_instance))){
            const element =isCustomElement(node) ? node : ( node.$element );
            if(isHouxerFragmentVnode(node)) element=node.children_nodes_list;
            else this.children_nodes_list.push(element);
          }
          if(!isHouxerTextVNode(node) && !isHouxerFragmentVnode(node)){
            NormalizeVN_TreeProvider(hx__VNode, node)
          }
        }
        if(index === 0) this.posixStart=node;
        if(index === len(vnodes)-1) this.posixEnd=node
        index ++;
      }
      this.$element=this.remerge();
      NormalizeVN_TreeProvider(hx__VNode, this);
    }
    forEach(callback){
      for(let [ index, element ] of this.children_nodes_list.entries()){
        callback(index, element);
      }
    }
    remerge(fragment=null){
      fragment=IS_DOCUMENT_FRAGMENT_NODE(fragment) ? fragment : _createFragment(self);
      this.forEach((index, element)=>{
        if(isArray(element)) this.remerge(fragment);
        else fragment.append(element);
      })
      return fragment;
    }
    remove(doc){
      this.forEach((element, index)=>{
        if(isArray(element)){
          element.forEach((el)=>el.remove())
        }else element.remove();
      })
      return true;
    }
  }
  class HouxerTextVNode extends HouxerVNode{
    constructor(self, text,  hx__VNode, fall, isRerender){
      super();
      this.is_hyperscript= hx__VNode?.is_hyperscript ;
      if(hx__VNode?.LabContext && !this.is_hyperscript) this.LabContext=hx__VNode.LabContext
      else if(!this.hx__VNode?.LabContext && !this.is_hyperscript && fall ) this.LabContext=fall
      this.$element=_createTextElement(self, text, this, isRerender);
      if(this.render_tracked && isHouxerVNode(hx__VNode)) {
        hx__VNode.render_tracked=this.render_tracked
        hx__VNode.VNodeManager.patchFlags.isHoisted=true;
      }else if(this.render_tracked && isHouxerBuild(self)){
        self[$$$compiler].hoistedNodelist.add(this);
      }
      NormalizeVN_TreeProvider(hx__VNode, this);
    }
  }
  function NormalizeVN_TreeProvider(hx__VNode, client_VNode, vnode){
    if(!isHouxerVNode(hx__VNode)) return;
    if(isHouxerTextVNode( client_VNode ) || isHouxerFragmentVnode(client_VNode)) hx__VNode.VN_Tree.push(client_VNode.VN_Tree);
    else if(isHouxerElementVNode(client_VNode) || isHouxerWidgetVNode(client_VNode)){
      const { type, props } = vnode || {};
      hx__VNode.VN_Tree.push({
        type,
        props,
        children:client_VNode.VN_Tree,
        key:null
      })
    }
  }
  class slotInstanceMap{
    slots=new Object();
    constructor(opts){
      for(let [name, value] of entries(opts)){
        define(this.slots, name, { 
          value, 
          enumerable, 
          configurable
        });
      }
    }
  }
  function bufferDirSetups(self, props, hx__VNode){
    if(!props || !props[dir$$__render] || !len(props[dir$$__render])) return;
    for(let dir of props[dir$$__render].values()){
      if(isChar(dir.name) && !isHouxerDirective(dir.name)){
        if(!hasProp(self[$$$register].directives, dir.name) || !self[$$$register].directives[dir.name]){
          $Debug(`"${dir.name} is not a registered directive\n`, self, true);
          return;
        }else if(!_validateType(self[$$$register].directives[dir.name], [Function, Object])){
          $Debug(`directive resolved at "dir.name" is not a valid directive data value`,self, true);
          return;
        }
        dirMap(self, dir, self[$$$register].directives[dir.name], hx__VNode );
        props[dir$$__render].delete(dir);
      }else if(!isChar(dir.name)) {
        dirMap(self, dir, dir.name, hx__VNode);
        props[dir$$__render].delete(dir);
      }
    }
  }
  function dirMap(self, resolver, dir, hx__VNode){
    if(isPObject(dir)){
      for(let [name, hook] of entries(dir)){
        if(_mapValue(directivesHooksMap, name)){
          if(!isPFunction(hook)){
            $Debug(`"${name} directive hook received at batch is not a function`, self, true);
            return;
          }
          hook.value=resolver.value;
          hook.modifiers=resolver.modifiers
          hx__VNode[name+'_hook'].add(hook);
        }
      }
    }else if(isPFunction(dir)){
      dir.value=resolver.value;
      dir.modifiers=resolver.modifiers
      hx__VNode.created_hook.add(dir);
    }
  }
  function renderSlots(options){
    if(!isPObject(options)){//renderimg of slots contents in hyperscript
      $Debug(`expects an Object as a positional argument  to "renderSlots" method`, self, true);
      return;
    }
    return new slotInstanceMap(options);
  }
  function renderFor(iterable, render){
    if(!isIterable(iterable) && !isNumber(iterable)){
      $Debug(`Undefined scope for "renderFor" macro, \n\n${iterable} value not iterable`);
      return "";
    }
    const NodeList=[];
    iterable=isPFunction(iterable) ? iterable() : iterable;
    if(isIterable(iterable)){
      let index=0;
      for(let [key, value] of getIterator(iterable)){
        index++
        const vnode=render(value, key, index);
        NodeList.push(vnode);
      }
    }else if(isNumber(iterable)){
      let index=0;
      for(let i=0; i<iterable;i++){
        index++;
        const vnode=render(i, i+1, index);
        NodeList.push(vnode);
      }
    }
    return new spreadRenderFragment(NodeList)
  }
  function createRenderlessVNode(self, ...compiler_options){
    let [type, props, children, instance, hx__VNode ]=compiler_options;
    // hx__VNode.widget_instance=true;
    return _createFragment()
  }
  const isHouxerWidgetVNode=vnode=>isHouxerVNode(vnode) && vnode.is_mount_root && isHouxerBuild(vnode.widget_instance) ;
  const maybeHouxerWidgetVNode=vnode=>isHouxerVNode(vnode) && vnode.is_mount_root && isHouxerBuild(vnode.widget_instance) || validHouxerWidget(vnode?.VNodeManager?.GeneticProvider);
  function dirExistenceCheck(attrs, dir){
    const escaped=hasSpecialCharacters(dir) ? escapeRegExp(dir) : dir
    const rawDirRegex=new RegExp(`^${escaped}[\\w|$:\\-]*$`);
    let RawMap={ hasDir:false  };
    for(let [key, val] of entries(attrs)){
      if(rawDirRegex.test(key)){
        const getKey=directive_sep(key).shift().split('|').shift().split(':').shift();
        if(getKey === dir){
          RawMap={ 
            hasDir:true, 
            getDir:val , 
            getKey:key
          };
        } 
        break;
      }
    }
    return RawMap;
  }
  function prefixRenderBuidProperties(self, props, index, hx__VNode){
    const [ key, value ] = props ;
    if(isHouxerVNode(hx__VNode)) hx__VNode.VNodeManager.patchFlags.shapeProps[index]={
      key,
      value
    }
  }
  function _resolveCustomNativeElement(self, nativeArgs, hx__VNode){
    let { type, attributes, children }=nativeArgs;
    const body=createHouxerElement({ 
      type:'body'
    });
    let attrsStr="";
    for(const [key, attr]  of entries(attributes||{})){
      attrsStr=`${attrsStr} ${key}="${attr}"`;
    }
    if( children){
      children=  children;
      if(!isString(children)) body.append(isHouxerVNode(children)  ? children.$element  : isHouxerWidgetVNode(children) ? children.build.$element : children);
      else body.innerHTML=children;
      children=body.innerHTML;
    }
    const html=`<${type} ${attrsStr.trim()}>${children||''}</${type}>`;
    const customEl=new DOMParser().parseFromString(html,'text/html').body.childNodes[0];
    if(isCustomElement(customEl) || isNativeElement(customEl)) return customEl;
  }
  function createHouxerElement(vnode, hx__VNode, siblings, isRerender, IS_RENDERLESS ){
    return _createHouxerElement( ...arguments );
  }
  function _createHouxerElement(virtualNode, self, hx__VNode, siblings, isRerender){
    let { props, children, type } = virtualNode;
    if(props && len(props) && hx__VNode){
      if(!isRerender){ 
        let propsIndex = 0;
        for(const [ key , value ] of entries(props)){
          prefixRenderBuidProperties(self, [key , value ], propsIndex, hx__VNode );
          propsIndex++
        }
      }
    }
    if(isString(type) && IS_VALID_TAGNAME(type)) return _createNativeElement(...arguments);
    else return _createWidgetElement(...arguments, self && isTrue(self[$$$operands]?.initialized) );
  }
  function generateElementFlag(element, hx__VNode){
    const _Houxer_Element_VNodeFlag = create_Houxer_Element_Flags_();
    assign(_Houxer_Element_VNodeFlag, {
      hx__VNode,
      _vnode_key:hx__VNode?._vnode_key || 0
    })
    define(element, '_Houxer_Element_Flag', {
      value : _Houxer_Element_VNodeFlag,
      enumerable
    });
  }
  function _createNativeElement(virtualNode, self, hx__VNode, siblings, isRerender){
    let { type, props, children, key } = virtualNode;
    const argsCount=len(arguments);
    let element;
    const is_hyperscript=hx__VNode?.is_hyperscript || false;
    if(hx__VNode)  hx__VNode._vnode_key=_generateUUID(7)+"<::>"+(len(siblings));
    if(isString(type)){
      if(IS_VALID_TAGNAME(type)){
        element=document.createElement(type);
        if(hx__VNode) {
          hx__VNode.is_element_node=true;
          if(isHouxerBuild(self)) {
            hx__VNode.hx_hash_=self[$$$ownProperties].hx_hash_
            if(self[$$$ownProperties].hx_hash_) element.setAttribute("data-hx_hash_", self[$$$ownProperties].hx_hash_);
          }
        }
      }else return _resolveCustomNativeElement(self, { 
        type, 
        attributes:props, 
        children
      }, hx__VNode);
    }
    element.PATCH_FLAGS=new Set();
    if(children && !IS_HTML_VOID_TAG(type)) {
      if( hasOwn(virtualNode.filesFilter ,'dir--raw')){ 
        const item= _$runModelBind(self, virtualNode.filesFilter['dir--raw'], hx__VNode, true);
        if(item){
          element.innerHTML=_escapeDecoder(virtualNode.rawChildren);
        }
      } else {
        if(is_hyperscript){
          element= _initiateChildNodes(self, children, hx__VNode, element );
        }else{
          let childNodes=_HouxerTemplateParser(children, self, true, hx__VNode, null, isRerender);
          childNodes = !isArray(childNodes) && [ childNodes ];
          for(let [key, els] of childNodes.entries()){
            if(!els) continue
            hx__VNode.NodeList.add(els);
            element.append(els.$element)
          }
        }
      }
    }
    if(props) {
      element=ElementPropsCompiler(props, element, self, hx__VNode);
    }
    const { hasDir:hasModel } = dirExistenceCheck(props||{}, '$$model');
    generateElementFlag(element, hx__VNode)
    return element;
  }
  function createNativeElement(virtualNode,  hx__VNode, siblings, isRerender, IS_RENDERLESS  ){
    return _createNativeElement( ...arguments );
  }
  function _createWidgetElement(virtualNode, self, hx__VNode, siblings, isRerender, IS_RENDERLESS){
    let { type, props, children } = virtualNode;
    const is_hyperscript=hx__VNode?.is_hyperscript;
    if(hx__VNode)  hx__VNode._vnode_key=_generateUUID(7)+"::"+len(siblings)-1;
    if(isString(type) && !is_hyperscript){
      const slotRender=function(instance, VNode, fall, isRerender=false){
        const config={
          contextScope:'slots_Block',
          slots_Block:true,
          props:{
        
          },
          ctx:{}
        }
        return isString(children) ? _HouxerTemplateParser(children, instance, true, VNode, fall, isRerender, config ) : isPFunction(children)  ? children(instance, VNode, fall, isRerender) : children;
      }
      const widget=ResolveWidget(self, hx__VNode, virtualNode, slotRender, IS_RENDERLESS)//reso;ving a widget data object
      if(IS_RENDERLESS || isRenderlessVNode(widget)) return createRenderlessVNode(self, ...arguments)
      hx__VNode.is_mount_root=true;
      hx__VNode.hx_hash_=self[$$$ownProperties].hx_hash_;
      hx__VNode.widget_instance=widget;
      if(widget[$$$ownProperties]?.slot_name) hx__VNode.slot_name=widget[$$$ownProperties].slot_name;
      return widget && isHouxerBuild(widget) ? widget.build?.$element : '';
    }else if((validHouxerWidget(type) || isWidgetResolver(type)) && is_hyperscript){
      let PAASED_CLEANUP=false;
      if(isWidgetResolver(type)){
        if (instance_Has_Widget(self, type.name) ){
          let widget=normalize_Widget(self, type.name);
          if(isSelfRecursiveWidget(self) && builtinValidWidget(widget, 'hx:self') || IS_RENDERLESS){
            return createRenderlessVNode(self);
          }
        }else{
          $Debug(`traverse macro was unable to find a widget with the provided name "${type.name}"\n\n are you sure this is a builtIn/globaly/localy registered widget`, self, true);
          return;
        }
      }
      if(isSelfRecursiveWidget(self) && builtinValidWidget(type, 'hx:self') || IS_RENDERLESS){
        return createRenderlessVNode(self);
      }
      const widget =$compilerEngine(self, type, virtualNode, hx__VNode);
      if(hx__VNode) {
        hx__VNode.is_mount_root=true;
        hx__VNode.widget_instance=widget;
      }
      if( widget[$$$ownProperties].slot_name) hx__VNode.slot_name=widget[$$$ownProperties].slot_name;
      return widget && isHouxerBuild(widget) ? widget.build.$element : _createTextElement(self, '', hx__VNode, isRerender);
    }
  }
  function createWidgetElement(virtualNode, metrics ){
    const { hx__VNode, siblings, isRerender, IS_RENDERLESS } = metrics; 
    return _createWidgetElement(virtualNode, config.hx__VNode, siblings, isRerender, IS_RENDERLESS );
  }
  function formatExpression(objKey, keys, expression){
    keys=new Set(keys)
    const keysRegex=/[\w@$.]+/g
    return expression.replace(keysRegex, (match, p2)=>{
      const matches=match.match(/[\w@#$]+/)
      if(keys.has(matches[0])) match = `${objKey}.${match}`;
      return match;
    });
  }
//A replacement for the with  js expression
  function _EvalWith( data , expression , autoReturn=false) {
    expression=formatExpression('obj', keys(data), expression)
    const run = Function( 'obj',...keys( data ) , `"use strict"; ${ autoReturn ? 'return' : '' } ${ expression }` );
    return run( data );
  }
  function hasSpecialCharacters(value) {// Define the regular expression for special characters
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/m.test(value);  // Test if the value contains any special characters
  }
  const unsupportedDelimiters="<,>";
  function includesUnsupported(delimiters){
    let response=false;
    for(const deli of delimiters.values()){
      unsupportedDelimiters.split(',').forEach((v)=>{
        response=deli.includes(v);
        if(isTrue(response)) return response;
      })
    }
    return response;
  }
  function escapeRegExp(string) { 
    return string.replace(/[.!@#%_\,<>:;'"\-=*+?^${}()|[\]\\]/g, '\\$&'); 
  }
  const entities = {
    '!':`&excl;`,
    '@':`&commat;`,
    '#':`&num;`,
    '$':`&dollar;`,
    '%':`&percnt;`,
    '^':`&Hat;`,
    '&':`&amp;`,
    '*':`&ast;`,
    '(':`&lpar;`,
    ')':`&rpar;`,
    '_':`&lowbar;`,
    '+':`&plus;`,
    '-':`&minus;`,
    '=':`&equals;`,
    '[':`&lsqb;`,
    ']':`&rsqb;`,
    '\\':`&bsol;`,
    '{':`&lcub;`,
    '}':`&rcub;`,
    ';':`&semi;`,
    ':':`&colon;`,
    '"':`&quot;`,
    "'":`&apos;`,
    '|':`&vert;`,
    ',':`&comma;`,
    '<':`&lt;`,
    '.':`&period;`,
    '>':`&gt;`,
    '/':`&sol;`,
    '?':`&quest;`
  }
  function _escapeDecoder(str, useReverse=false){
    // for(const char of keys(entities)){
    //   let entity = entities[char]
      
    //   const regex = new RegExp(`/${isTrue( useReverse ) ? entity : char }/g`, isTrue(useReverse) ? char : entity );
    //   if(!regex.test(str)) continue;
    //   str=str.replace(regex)
    // }
    str=str/*.replace(/&/g, '&amp;')*/.replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')     
      // .replace(/\[/g, '&lsqb;')     
      .replace(/"/g, '&quot;')     
      .replace(/\\/g, '&#39;'); 
    return str;
  }
  function _escapeReverseDecoder(str){
    str=str.replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      //.replace(/&amp;/g, '&')
      .replace(/&#39;/g, '\\')
    return str;
  }
  const isSafeString=text=>/\[\[\[\%\%safe\-\-(.*?)\-\-\%\%\]\]\]/.test(text);
  function markSafeString(text){
    return `[[[%%safe--${text}--%%]]]`;
  }
  function RenderableContextManeger(self, text, hasSafeString ){
    text=compileToRenderable(unwrap(text));
    return hasSafeString ? _escapeDecoder(text) : text ;
  }
  function validateDelimiterConstruct(self, delimiters){
    if(!isArray(delimiters)){
      $Debug(`expects an arrah of character strings encoding\n\n.....delimiters config setup`, self, isHouxerBuild(self));
      return false;
    }
    let [ open, close ] = delimiters ;
    if( open && close ){
      if( !hasSpecialCharacters( open ) || !hasSpecialCharacters( close ) ) {
        $Debug(`mustache customization error::\n\n delimeters must match value of special characters\n\ne.g !, @, #, $, %, ^, &, *, (, ),  [, ], {, }, ;, :, ?`,  self, isHouxerBuild(self) ); 
        return false;
      }else if(includesUnsupported([ open, close ])) {
        $Debug(`Invalid  delimiter value :: \n\n"${open} or ${close} is an unsupported delimiter constructs"\n cannot be used as a string mustache delimeter since this are javascript multiline string interpolation technic\n\n Delimeter Configuration failed`, self, isHouxerBuild(self));
        return false;
      }
    }
    return true
  }
  function resolveAccessor(self, str, hx__VNode){
    let [ open, close ] = self[$$$core].settings.delimiters ;
    open=hasSpecialCharacters(open) ? escapeRegExp(open) : open ;
    close=hasSpecialCharacters(close) ? escapeRegExp(close) : close ;
    const pattern=new RegExp(`${open}([${open}]?.*?[${close}]*)${close}`, 'mg');
    let link;
    if(str.match(pattern)) {
      str=str.replace(pattern, (match, text)=>{
        text=_escapeReverseDecoder(text.trim());
        link=text;
        const prefix=text.split('>>');
        let filters=len(prefix) > 1 ? prefix.shift() : null;
        
        let hasSafeString=false;
        if(filters ) {
          const setFilters=new Set( ( filters.startsWith('%') ? filters.slice(1) : filters ).split(" ").join("").split('.') );
          if(setFilters.has('safe')){
            hasSafeString=true;
            setFilters.delete('safe')
            filters=arrSet(setFilters).join('.');
          }
          const parameters=retrieveFiltersParams(self, prefix, hx__VNode);
          text=$Filter_HelpersService(self, parameters, filters, hx__VNode).shift();
        }else{
          text=_$runModelBind(self, prefix.shift().trim(), hx__VNode);
        }
        return RenderableContextManeger(self, text, hasSafeString);
      })
    }
    return str;
  }
  function retrieveFiltersParams(self, params, hx__VNode){
    const parameters=[];
    params.forEach((text)=>{
      const value=_$runModelBind(self, text.trim(), hx__VNode);
      parameters.push(value);
    })
    return parameters;
  }
  function checkForModeLAndContextAvailability(model, context, ref, returnToken){
    if(!hasOwn(model, ref) && !hasOwn(context, ref) && !returnToken) {
      throw new Error('Accessor Error')
      return;
    }else if (returnToken) return ref;
  }
  function _$runModelBind(self, ref, hx__VNode, returnToken=false){
    let value;
    const model= isHouxerBuild(self) ? self.__public_model__ : isModelInstance(self) ? self : Object.create(null);
    const context=isHouxerVNode(hx__VNode) ? hx__VNode?.LabContext || {} : isPObject(hx__VNode) ? hx__VNode : {};
    try{
      value=_Evaluate_THIS( model, ref, self, context) ;
      if(isNull(value) && !hasSpecialCharacters(ref)){
        return checkForModeLAndContextAvailability(model, context, ref, returnToken);
      }
    } catch(err){
        if(!returnToken){
          $Debug(`Accessor Error::\n\n"${ref}" property value was accessed during render, but not initialized on model or is undefined\n\nat at\n ..."${ref}" property \n\n${err}`, self, true);
          return;
        }else return ref
    }
    return value 
  }
  function _useBind__(ref, config){
    const response=validateCollectionArgs(arguments, {
      name:'useBind',
      required:[true, false ],
      min:1,
      max:2,
      validators:[ String, Object ]
    })
    if(!response) return null
    const self=getCurrentRunningEffect({
      name:'useBind'
    });
    if(!self) return null;
    
  }
  function useBind(ref, config){
    return _useBind__(ref, config);
  }
  const hasFilterInstance=(self, name)=>_mapValue(BUILT_IN_FILTERS, name) || _mapValue(self[$$$register].filters, name);
  const normalize_Filter=(self, name)=>hasOwn(BUILT_IN_FILTERS, name) ? BUILT_IN_FILTERS[name] : self[$$$register].filters[name] || pass;
  const BUILT_IN_FILTERS={
    upper(args, modifiers){
      let [ value ]=args;
      return isString(value) ? String(value).toUpperCase() : value;
    },
    title(args, modifiers){
      let value=args[0]
      if(!isString(value)) return value;
      const splitted=String(value).split(' ');
      for(let [ind, val] of entries(splitted)){
        splitted[Number(ind)]=val.charAt(0).toUpperCase()+val.slice(1)
      }
      return splitted.join(' ');
    },
    lower(args,  modifiers){
      return String(args[0]).toLowerCase();
    },
    shorten(){
      
    }
  }
  function $Filter_HelpersService(self, value, filters,hx__VNode){
    if(filters.trim() || isEmptyStr(filters.trim())) return value 
    const modifiers=filters.split('|');
    filters=modifiers.shift().trim().split('.');
    if(!len(filters)) return  value;
    let index=0;
    for(const filter of filters.values()){
      index++;
      let name=filter.trim() ||  null;
      if(name && index === 1 && !isEmptyStr(name) && !name.startsWith('%')){
        $Debug(`Failed Filter helper call\n\n filter names are recognised by prepending a single "percentage(%)" character to the initiale filter name in the chain`,self, true);
        return;
      }
      name=index === 1 ? name.slice(1) : name;
      if( name && !hasFilterInstance(self, name)) {
        $Debug(`Unrecognized  filter name "${name}"\n\n if this is a custom filter, make sure it's registered through the local filter option or global prototype 'filter' method`,  self, true);
        return;
      }
      const filterInstance=normalize_Filter(self, name);
      if(!_validateType(filterInstance, [Function, Object])){
        $Debug(`${name} filter receives an Invalid type definition\n\nExpects a filter function or an object type exposing a filter method which acts as the filter function itself`, self, true);
        return;
      }else if(isPObject(filterInstance)){
        if(!hasProp(filterInstance, 'filter')){
          $Debug(`"${name}" filter instance object does not expose a "filter" method which acts as the filter function`, self, true);
          return;
        }else if(!isPFunction(filterInstance.filter)){
          $Debug(`"${name}".filter instance filter property value is not a method/callable  \n\n Expects a function type which acts as the filter function`, self, true);
          return;
        }
      }
      const filterCallback=isPObject(filterInstance) ? filterInstance.filter : filterInstance;
      try{
        value=filterCallback(value, modifiers, hx__VNode);
        value = [ value ]
      }catch(error){
        $Debug(`Encountered an error when running the filter callback ${name}`, self, true);
        $Debug(error, self);
        return;
      }
    }
    return value
  }
  function _Compiler_Call(self, str, vnode, hx__VNode){
    const pattern=/__\$ref\((.*?)\)__/g;
    let link;
    if(str.match(pattern)) {
      str=str.replace(pattern, (match, text)=>{
        text=text.trim();
        link=text;
        try{
          let name=text;
          text=_$runModelBind(self, text, hx__VNode);
        } catch(err){
          $Debug(`accessor Error\n\n "${text}" property was accessed on build, but not defined on build model\n\n ${err}`, self, true);
          ;return ;
        }
        return text;
      })
    }
    return str;
  }
  const HouxerDirectives="if,else,else-if,html,text,for,raw,ref,slot,model,hx,bind,on,scoped,fall,animation,transition,clone,cloak";
  const widgetPassableDirectives="html,text,scoped,if,else,else-if,for,ref,slot,bind,on,clone"
  const autoBindedDirectives="model,for,ref,bind,on,clone"
  const NodeBasedDirectives="html,text,raw,model,scoped,ref,if,else,else-if,slot,bind,on,clone";
  const buildUsableDirectives="html,text,ref,slot,on,scoped,model,clone";
  const isHyperscriptDirective=dir=>_mapValue(buildUsableDirectives, dir);
  const cond_Directives="if,else-if,else";
  const isHouxerDirective=dir=>_mapValue(HouxerDirectives, dir);
  const isNodeBaseDirective=dir=>_mapValue(NodeBasedDirectives, dir);
  const validIdentifierRegex=/([...]*[\w\d]+)/g;
  function trackExistentDextructureNamespace(self, syntaxes){
    const register= new Tuple();
    const newSyntaxRecord=[]
    let rIndex=0;
    for(let [index, syntax] of syntaxes.toReversed().entries()){
      let setup=syntax;
      syntax=syntax.replace(validIdentifierRegex, (match, valId)=>{
        valId=hasSpread_bind(valId) ? valId.slice(3) : valId;
        if(register.has(valId)){
          setup=setup.replace(new RegExp(`${valId}`), (m, v)=> v)
        }else register.add(valId)
      })
      newSyntaxRecord.unshift(setup)
      rIndex++
    }
    return newSyntaxRecord;
  }
  function _Evaluate_THIS(obj, str, self, optional){
  // Use a regular expression to match statements or multiple expressions
    const statementRegex = /^(?:let|var|const|if|for|while|do|switch|else|else-if|await|break|case|yield|with|catch|continue|debugget|void|try|import|throw|finally|exports|do|delete|return|throw|delete|;).*$/;
    /*=|\+\+|\+=|--|-=|\*|\*=|\.\.|\/\/|\/\*|\*\*|\[=|==\+|\/=|%=\*\*=|&&=|\|\|=|<=|>=|\\|*/
    if (statementRegex.test(str) && !passableBlock(str)) {
      throw new Error(`Invalid expression: \n\n"${str}" Your binding seems to contain an unallowed expression a a statement\n Only single expressions are allowed.`, self, true);
    }// Use a regular expression to remove comments from the expression by using string .replace regex method
    const commentRegex = /\/\/.*$|\/\*[^]*?\*\//g;//comment matching regular expression
    const expressionWithoutComments = str.replace(commentRegex, '');// Use a regular expression to match any remaining unsupported constructs and statement keywords
    // const unsupportedRegex = /(?:\.\.|\/\/|\/\*|\*\*|\[=|==\+|-\+|\+=|\-=|\*=|\/=|%=\*\*=|&&=|\|\|=|<=|>=|\breturn\b|\bthrow\b|\bfunction\b|\bnew\b|\btypeof\b|\bdelete\b|\binstanceof\b|\bvoid\b|\bnull\b|\bundefined\b|\bconst\b|\blet\b|\bvar\bclass\b)/;
    const unsupportedRegex = /(?:\.\.|\breturn\b|\bthrow\b|\bdelete\b|\bvoid\b|\bconst\b|\blet\b|\bvar\b)/;
    if (unsupportedRegex.test(expressionWithoutComments)) {
      throw new Error(`Invalid expression: \n\nUnsupported constructs are not allowed.\n\n"${expressionWithoutComments}"`, self, true);
    }
    let dexTransform;
    if(optional && isPObject(optional) && hasOwn(optional, $$dexTransformKey)){
      dexTransform=optional[$$dexTransformKey];
      let syntaxArray=dexTransform.syntaxArray;
      syntaxArray = trackExistentDextructureNamespace(self, syntaxArray)
      dexTransform.traverse=()=>transformDestructureContext(syntaxArray, dexTransform.sourcesArray, str, [obj, optional]);
    }
    const getValue = new Function('obj','$$$ctx','dexTransform', `
      with(obj){
        with($$$ctx){
          return dexTransform ? dexTransform.traverse()  : ${str.trim() || "undefined" };
        }
      }
    `);
    let value;
    try{
      value = getValue.call(obj, obj, isPObject(optional) ? optional : {}, dexTransform);
    }catch(error){
      // throw new  Error(error);
    }
      return value;
  }
  function transformDestructureContext(props, sources, vv, metrics=[]){
    const traverse =Function('obj', '$$$ctx',`
      with(obj){
        with($$$ctx){
          return function trasform(${props.join(",")}){
            return ${vv}
          }
        }
      }
    `)
    const [obj={}, $$$ctx={}]=metrics;
    return traverse.call(obj, obj, $$$ctx )(...sources);
  }
  function withFallThrough(fn){
    return new fallthrough(fn);
  }
  function _DynamicAttrNameResolver(self, attr, hx__VNode, isRerender, patchFlags, metrics){
    let iniAttr=attr;
    attr= fall_AttrName(attr) ;
    const pattern=/\[(.*?)\]/g;
    if(pattern.test(attr)){
      const matches=attr.match(pattern);
      let name=''
      let subscribers;
      [ subscribers, attr ] = effectDependencyTracking(self, function(){
        return matches[0].replace(pattern, (match, text)=>unwrap(_$runModelBind(self.__public_model__, text, hx__VNode, true)));
      });
      if(len(subscribers) && !isRerender){
        
      }else if(isRerender){
        
      }
    }
    if(!isString(attr)){
      $Debug(`Unexpected value at "${iniAttr}" as dynamically evaluated prop name binding is not a valId prop string`);
      return iniAttr;
    }
    return iniAttr.replace(pattern, function (match, space){
      return attr;
    });
  }
  const DebugFlags={
    slots:"compilation of slot element",
    template:"template compile process",
    hook:name=>"during the call of "+name.toUpperCase()+" hook",
    build:"during the call of the build function",
    register:(name)=>"the registration of a "+name,
    forloop:"during mapping of the for directive",
    ifElse:name=>"during the consitional rendering of the "+name+" directive",
  }
  function get_Object_Value(obj, path, check=false){
    const processor=Function('obj','check',`
      let value;
      try{
        value= obj.${path}
      }catch(err){
        if(check) throw new Error(err)
        return
      }
      return value;
    `)
    return processor(obj, check);
  }
  const accessorsRegex=/[.[\]]/;
  const dynamicAccessorsRegex=/(\[(.*?)\])/g;
  function object_Has_Path(obj, str, getRes) {
    let res=false;
    let value=obj
    if ((!isEmptyStr(str) ? accessorsRegex.test(str) : false)) {
      const navigation = str.split('.');
      for (const key of navigation) {
        if(dynamicAccessorsRegex.test(key)){
          let shouldBreak=false;
          let access=[];
          let match=key.replace(dynamicAccessorsRegex, (match, p1, internal)=>{
            internal=Number(internal)
            if(!isNaN(internal)) access.push(internal)
            return "";
          })
          if((shouldBreak && !res) || !value ) return false;
          if(!isEmptyStr(match)) value = value[match];
          if(len(access)) {
            for(let [index, keys ] of access.entries()){
              if( !_validateType(value, [ Object , Array, Function]) && isTrue(isArray(value) && isNaN(Number(keys))) && Number(keys)+1 > len(value)) return false
              value=value[keys];
            }
          }
        }else if (!hasOwn(value||{}, key)) return false;
        else {
          value = value[key];
          res=true;
        }
      }
    } else {
      if (hasOwn(obj, str)) value=value[str];
      else return false;
      return true;
    }
    return res;
  }
  function set_Object_Value(obj, path, value, check=false){
    const processor=Function('obj','value','check','metrics',`
      try{
        const [ isToken, get_Object_Value, debug ] = metrics;
        const initVal=get_Object_Value(obj, "${path}" );
        if(isToken(initVal)) obj.${path}[initVal[refInternalEffectKey].accessor]=value;
        else obj.${path}=value;
      }catch(err){
        if(check) $Debug(err)
        return err
      }
      return obj;
    `)
    return processor(obj, value, check, [isToken, get_Object_Value, $Debug]);
  }
  function get_Prop_Path(obj, prop) {
    const stack = [{ 
      object: obj, 
      path: '' 
    }];
    while (len(stack) > 0) {
      const { object, path } = stack.pop();
      for (const [key, value] of getIterator(object)) {
        const currentPath = path ? `${path}${ isPObject(object) ? '.' : '[' }${key}${isArray(object) ? ']' : ''}` : key;
        prop = isNumber(key) ? ( isNaN(Number(prop) ) ? prop : Number(prop ) ): prop ;
        if (key === prop) return currentPath;
        if (_validateType(value, [Object, Array ])) stack.push({ 
          object: value, 
          path: currentPath 
        });
      }
    }
    return null;
  }
  function _toCamelCase(str) {
    return str.replace(/-+([a-zA-Z])/g, (match, letter) => letter.toUpperCase());
  }
  function _ToPascalCase(str){
    const camelCase=_toCamelCase(str);
    return camelCase.at(0).toUpperCase()+camelCase.slice(1);
  }
  function _to_kebab_case(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  function mapClassTypeTransform(item, transpiled){
    if(isPObject(item)){
      entries(item).forEach(([key, value])=>{
        value=unwrap(value)
        if(value || isString(value)) {
          for(let val of values(key.split(' '))){
            transpiled.add(val);
          }
        }
      })
    }else if(isCollection(item) || isArgument(item)){
      for(let value of item.values()){
        mapClassTypeTransform(value, transpiled);
      }
    }else if(isString(item)){
      for(let val of values(item.split(' '))){
        transpiled.add(val);
      }
    }
    return transpiled.list();
  }
  function resolveDiffing(class1, class2){
    if(deepEqualityCheck(class1, class2)) return [];
    for(let [key, index] of getIterator(class1)){
      
    }
  }
  function parse_Class_Binding(self, item, element, isRerender, patch, hx__VNode){
    const is_hyperscript=hx__VNode.is_hyperscript;
    item=unwrap(item);
    if(isRerender && (!is_hyperscript && patch?.evaluatedValue ? deepEqualityCheck( patch.evaluatedValue(), item) : !patch.evaluatedValue ? true : is_hyperscript) ) return;
    const transform=mapClassTypeTransform(item, new Tuple());
    const initValTranspile=isRerender ? mapClassTypeTransform(patch.evaluatedValue(), new Tuple() ) : null ;
    if(isRerender){
      for(let [index, cls] of initValTranspile.entries()){
        cls = unwrap(cls)
        if(!transform.includes(cls) && element.classList.contains(cls)) {
          toggleClassNames(element, cls, true);
        }
      }
      patch.observer.mutated=true
      hx__VNode.VNodeManager.patchFlags.PropFlags[patch.key].evaluatedValue=() =>transform.join(' ')
    }
    for(let [index, cls] of transform.entries()){
      cls=unwrap(cls)
      if(!element.classList.contains(cls)) {
        toggleClassNames(element, cls);
      }
    }
  }
  function toggleClassNames(element, classes, remove=false){
    const toggler=isTrue(remove) ? 'remove' : 'add';
    classes.split(' ').forEach((cls)=>{
      if(cls)  element.classList[toggler](cls);
    })
  }
  function compileStyleProps(self, item, styleProps, element){
    if(isPObject(item)){
      entries(item).forEach(([key, style])=>{
        if(!isString(unwrap(style))){ 
          $Debug(`Unrecognized stype property value \n\nat at\n "${key}" style property\n\n${element?.outerHTML || "" }`, self); 
        return;
        }
         styleProps[_toCamelCase(key)]=style;
      })
    }else if(isArray(item)){
      for(const value of item.values()){
        compileStyleProps(self, value, styleProps, element)
      }
    }else if(isString(item)){
      let splited=item.trim().split(';');
      for(let styling of splited.values() ){
        if(styling && styling.includes(':')){
          const spread=styling.split(':');
          styleProps[spread[0]]=spread[1];
        }
      }
    }
    return styleProps;
  }
  function parse_Style_Binding(self, item, element, isRerender, patch, hx__VNode){
    const styleProps=compileStyleProps(self, item, {}, element);
    const is_hyperscript=hx__VNode.is_hyperscript
    const prevStyles={};
    if(isRerender && !is_hyperscript) {
      compileStyleProps(self, patch.evaluatedValue(), prevStyles);
      for(const [ prop, style] of entries(prevStyles)){
        if(!hasOwn(styleProps, prop) || !unwrap(style) === unwrap(styleProps[prop]) || !element.style[prop] === unwrap(style)) {
          element.style[prop]=""
          patch.observer.mutated=true
        }
      }
    }
    for(let [ prop, style ] of entries(styleProps)){
      style=unwrap(style)
      if(isTrue(isRerender && (!hasOwn(prevStyles, prop) || !style === prevStyles[prop])) || !isRerender) {
        element.style[prop]=style;
      }
    }
    if(isRerender && !is_hyperscript) {
      patch.observer.mutated=true
      hx__VNode.VNodeManager.patchFlags.PropFlags[patch.key].evaluatedValue=() => item;
    }
  }
  function fall_AttrName(key, attr){
    const Key_Binding={ 
      '*':1, 
      '@':1, 
      '...':3, 
      "$$" : 2
    };
    if( !isString(key) && !key.trim() && hasSpecialCharacters(attr)) return key ;
    for(const [ky, sl] of entries(Key_Binding)){
      if(key.startsWith(ky)){
        if(has$$_bind(key)){ 
          key=key.split(':')
          key.shift();
          return key.join(':')
        }
        return key.slice(sl);
      }
    }
    return key;
  }
  function isOnListener(key){
    return exists(key) && isString(key) && /^on[A-Z]+\w+$/.test(key);
  }
  function directive_sep(key){
    return key.includes(':') ? key.split(':') : [key]
  }
  function elementObserverWatch(element, callback, config={}){
    const observer= new MutationObserver(callback);
    const obsConfig= {
      attributes: true,
      childList: true, 
      subtree: true 
    }
    observer.observe(element, {
      ...config,
      ...obsConfig
    });
  }
  function element_Attribute_Manager(props, element, self, hx__VNode, metrics, patchFlags){
    let { key, is_hyperscript, attr, isRerender, illegal, patch } = metrics ;
    let hasBind=false;
    if(illegal(key)){
      $Debug(`Illegal binding not allowed in build function mode\n\n"${key}" property has a disallowed binding directive property`);
      return element;
    }
    let $orgKey=key;
    if(!is_hyperscript){
      key=_DynamicAttrNameResolver(self, key, hx__VNode, isRerender, patchFlags, metrics);
      if(hasAsterisks_bind(key)) {
        key='$$bind:'+key.slice(1);
        hasBind=true
      }else if(hasAt_bind(key)) key='$$on:'+key.slice(1)
    }
    if(has$$_bind(key)){
      let modifiers=key.includes('|') ? key.split('|') : [];
      key=len(modifiers) ? modifiers.shift() : key;
      modifiers = new Set(modifiers);
      if(isHouxerDirective(directive_sep(key)[0].slice(2)) &&  !is_hyperscript) {
        element=_Resolve_Builtin_Directives(self, key, attr, element, hx__VNode, modifiers, patchFlags, { 
          [activeFlagInstanceKey]:$orgKey,
          is_hyperscript,
          isRerender,
          patch,
        } );
      }else if(!is_hyperscript) {
        element=_Resolve_Custom_Directives(self, key, attr, element, hx__VNode, modifiers);
      }
    }else if(isHTMLBooleanAttributes(key)) {
      BooleanAttributesManager(element, key, attr, { isRerender, is_hyperscript }, patch, hx__VNode);
    }else if(isHTMLIDLAttributes(key)){
      IDLPropsTransform(self, { key, attr}, element, isRerender, patch, hx__VNode )
    }else if(key === 'class') {
      parse_Class_Binding(self, attr, element, isRerender, patch, hx__VNode);
    }else if(hasSpread_bind(key, true ) && !is_hyperscript){ 
      return Attribute_Spread(self, key, element,  hx__VNode, { isRerender, is_hyperscript }, patch );
    }else if(isOnListener(key)) {
      attr=unwrap(attr)
      if(!isPFunction(attr)){
        $Debug(`on<EventName> listener expects a function value\n\nFound "${attr}" of "${getType(attr)}" type`, self, !isNull(self));
      }else{
        const options=attr.options || {};
        const events=_to_kebab_case(key).split('-');
        events.shift();
        $$dir_ON(self, attr, element, hx__VNode, events, []);
      }
    }else if(is_hyperscript && key === dir$$__render){
      justifyHyperscriptDirectiveBuffer(self, unwrap(attr()),  element, hx__VNode, isRerender, patch);
      delete props[key];
    }else{
      try{ 
        element.setAttribute(key, compileToRenderable(unwrap(attr)));
      }catch(err){
        $Debug(`Attribute Error::\n\n...unable to set node attribute "${key}\n\n ${err}`, self, true, `When setting the attribute "${key}" on "${element.outerHTML}"`, self, !is_hyperscript );
        return element;
      }
    }
    return element
  }
  function IDLPropsTransform(self, props, element, isRerender, patch, hx__VNode ){
    const { key, attr } = props;
    const is_hyperscript=hx__VNode.is_hyperscript
    if(key === 'style') return parse_Style_Binding(self, attr, element, isRerender, patch, hx__VNode);
    if(!isRerender || !is_hyperscript ? !deepEqualityCheck(patch?.evaluatedValue(), attr) : true) element[key]=attr ;
    if(isRerender && !is_hyperscript ? !deepEqualityCheck(patch?.evaluatedValue(), attr) : false ){
      patch.observer.mutated=true;
      hx__VNode.VNodeManager.patchFlags.PropFlags[patch.key].evaluatedValue=() => attr;
    }
  }
  function ElementPropsCompiler(props, element, self, hx__VNode, isRerender=false, patch){
    if(!isPObject(props)) return element;
    const is_hyperscript= self ? self[$$$core].map.is_hyperscript : hx__VNode ? hx__VNode.is_hyperscript : true;
    const illegal=prop=>is_hyperscript && isTrue(hasAsterisks_bind(prop) || has$$_bind(prop) || hasAt_bind(prop))
    const patchFlags={ 
      isHoisted:false, 
      subscriptions:[] ,
    }
    let propsIndex=0
    entries(unwrap(props)).forEach(function([key, attr ]){
      element=element_Attribute_Manager(props, element, self, hx__VNode, { key, attr, isRerender, is_hyperscript, illegal, patch }, patchFlags ) ;
      propsIndex++
    })
    if(!patch) return element;
    if(len(patchFlags.subscriptions) && !isRerender) {
      patchFlags.subscriptions.forEach((sub)=>{
        hx__VNode.VNodeManager.patchFlags.subscriptions.push(sub)
      })
    }
    if(isFalse(hx__VNode.VNodeManager.patchFlags.isHoisted) && !isRerender) hx__VNode.VNodeManager.patchFlags.isHoisted=patchFlags.isHoisted;
     return element;
  }
  function specialPropsPrefix(self, props, element, hx__VNode){
    
  }
  function justifyHyperscriptDirectiveBuffer(self, directives, element, hx__VNode, isRerender, patch){
    for(const buff of directives.values()){
      let { name, value, modifiers }=buff;
      if(isHyperscriptDirective(name)) callHDir(self, buff, element, hx__VNode );
    }
  }
  function callHDir(self, direct, element, hx__VNode, metrics){
    let { modifiers, name }= direct;
    modifiers = new Set(modifiers)
    if(isHouxerDirective(name) && !isHyperscriptDirective(name)){
      $Debug(`can't trigger a directive batch on the "${name}" directive`, self, true);
      return;
    }else if(!isHyperscriptDirective(name)){
      if(!hasProp(self[$$$register].directives||{})){
        $Debug(`unresolve directive name passed to batch\n\n"${name}" is not defined\nMake sure this is registered globally/localy through this widget instance thread`, self, true, "during resolving of the 'batch' object");
        return;
      }else pass
    }else if('html' === name || 'text' === name) $$dir_HTML(self, direct.value, element, hx__VNode, 'text' === name, modifiers);
    else if('slot' === name) $$dir_SLOT(self, direct.value, element, hx__VNode, modifiers);
    else if('on' === name) $$dir_ON(self, direct.value, element, hx__VNode, modifiers);
    else if('scoped' === name) $$dir_SCOPED(self, direct.value, element, hx__VNode, modifiers);
    else if('ref' === name) $$dir_REF(self, direct.value, element, hx__VNode, modifiers);
    else if('model' === name) $$dir_MODEL(self, direct.value, element, hx__VNode, modifiers, metrics);
    else if(name === 'transition') $$dir_TRANSITION(self, attr, element, hx__VNode, key, modifiers)
    else if(name === 'animation') $dir_ANIMATION(self, attr, element, hx__VNode, key, modifiers)
    else if(name === 'clone') $$dir_CLONE(self, attr, element, hx__VNode, key, modifiers)
    // else if('fall' === name) $$dir_FALL(self, direct.value, element, hx__VNode,modifiers );
  }
  function BooleanAttributesManager(vnode, key, attr, metrics, patch, hx__VNode){
    const $orgKey=metrics[activeFlagInstanceKey];
    const { is_hyperscript, isRerender}=metrics;
    let prevQuery;
    let contact;
    if(isRerender){
      prevQuery=unwrap(patch.evaluatedValue());
      contact=attr
    }
    attr=unwrap(attr)
    if(exists(attr) || isString(attr)) {
      if (isHTMLIDLAttributes(key)) {
        vnode[key]=attr;
      }else {
        vnode.setAttribute(key, attr||'');
      }
    }else if(!exists(attr) && !isString(attr) && isRerender && (exists(prevQuery) && !isString(prevQuery))){
      if(isHTMLIDLAttributes(key) && hasOwn(vnode, key)) {
        vnode[key]="";
      }else {
        vnode.removeAttribute(key);
      }
    }
    if(isRerender && !deepEqualityCheck(prevQuery, attr)){
      hx__VNode.VNodeManager.patchFlags.PropFlags[patch.key].evaluatedValue=() => contact;
      patch.observer.mutated=true
    }
  }
  function Attribute_Spread(self, data, vnode, hx__VNode, metrics, patch){
    const { is_hyperscript, isRerender } = metrics;
    const $orgKey=metrics[activeFlagInstanceKey];
    let prevValue;
    if(isRerender){
      prevValue=patch.evaluatedValue();
    }
    let value;
    let subscribers;
    [ subscribers, value ]= effectDependencyTracking(self, function(){
      return isString(data) ? _$runModelBind(self, data.slice(3).trim(), hx__VNode) : data;
    })
    if(!isPObject(unwrap(value))){
      $Debug(`spread syntax on hx__VNode can only accept binded values of an object`, self, true);
      return vnode;
    }
    if(isRerender && !deepEqualityCheck(value, prevValue)){
      for(const [key, val] of entries(value)){
        if(!hasOwn(prevValue, key) || !deepEqualityCheck(val, prevValue[key])){
          if(shouldUpdateProp(key)) ElementPropsCompiler({ [ key ] : val }, vnode, self, hx__VNode);
        }
      }
      hx__VNode.VNodeManager.patchFlags.PropFlags[patch.key].evaluatedValue=() => value;
      patch.observer.mutated=true
    }else{
      vnode = ElementPropsCompiler({ ['$$bind']:value }, vnode, self,  hx__VNode, isRerender, patch  );
      if(len(subscribers) && !is_hyperscript){
        VirtualizePropTick(hx__VNode, $orgKey, "", [ data.slice(3), value], subscribers );
      }
    }
    return vnode;
  }
  function generateCustomDirBinding(self, hx__VNode){
    return createObj('Binding', {
      self,
      vnode:hx__VNode.VNodeManager.vNodeClass,
      args:undefined,
      prevValue:undefined
    });
  }
  function _With_Custom_Directives(self, data, vnode, hx__VNode, modifiers){
    let { key, attr } = data || {};
    attr =bindKeyAsValue(key, attr);
    let value=_$runModelBind(self, attr, hx__VNode, true)
    let has_modifiers=len(modifiers) ? true : false;
    let Name=directive_sep(key)[0].slice(2);
    if( !hasOwn(self[$$$register].directives, Name )){
      $Debug(
        `((Undefined Directives Tokenerence))\n\n "${key}" directive is not a registered houxer directive on this widget\n\nat...........at>>>.\n ${vnode.outerHTML}`
      , self, true, "during directive resolving"  );
      return vnode;
    }
    const directive= self[$$$register].directives[Name];
    const CustomDir ={ 
      init:pass, 
      destroyed:pass,
      created:pass, 
      updated :pass,  
      mounted :pass
    };
    generateCustomDirBinding(self, hx__VNode)
    if(isPFunction(directive)) CustomDir.mounted=directive;
    else if(isPObject(directive) ){
      if( !has_Intersect_Prop(directivesHooksMap.split(','), keys(directive))) {
        $Debug(`((Directive Error))\n\ndirective object does not define any of widget Directive hook.\n  "created/mounted/updated/init/destroyed" method`, self, true); 
        return vnode;
      }else{
        for(const [ name, hook] of  entries(directive)){
          if(new Set(directivesHooksMap.split(',')).has(name)){
            if(!isPFunction(directive[name])){
              $Debug(`((Custom direction))\n\ncustom Directive "${Name}" ${name}  hook is not a function`,self, true);
              return vnode;
            }else {
              const Obj_Modifier={};
              if(len(modifiers)){
                for(const val of modifiers.values()){
                  Obj_Modifier[val]=val;
                }
              }
              hook[lifeCiycleBinding]={
                modifiers:Obj_Modifier,
                dirName:Name,
                value
              }
              CustomDir[name]=hook;
            }
          }
        }
      }
    }
    if(!isNativeElement(vnode) && validHouxerWidget(vnode.type)){
      define(vnode, $$$customDirs,{ value:{
        init_hook:new Tuple(), 
        created_hook:new Tuple(),
        mounted_hook:new Tuple(),
        updated_hook:new Tuple(),
        destroyed_hook:new Tuple()
      }, enumerable, configurable });
    }
    for(let hook of directivesHooksMap.split(',').values()){
      if(CustomDir[hook] && !isPass(CustomDir[hook])) {
        if(isNativeElement(vnode)){
          if(hook === 'init') continue;
          hx__VNode.VNodeManager.LifeCycleHooks[hook+'_hook'].add(CustomDir[hook]);
        }else if(validHouxerWidget(vnode.type)) vnode[$$$customDirs][hook+'_hook'].add(CustomDir[hook]);
      }
    }
    return vnode;
  }
  function isPass(func){
    return isPFunction(func) && func.name === 'pass' && hasOwn(func, $passKey);
  }
  function _Resolve_Custom_Directives(self, key, attr, vnode, hx__VNode, modifiers){
    return _With_Custom_Directives(self, { key, attr}, vnode, hx__VNode, modifiers);
  }
  function _Run_With_Modifiers(vnode, modifiers, func, events, runImmediately=true){
    if(!isFunction(func)){
      $Debug(`"${key}" event Callback must be passed as  a function \n \n${func } is not a valid event callback  method`, self, true);
      return;
    }
    modifiers=isArray(modifiers) ? new Set(modifiers) : modifiers;
    const options=createObj('options');
    if(modifiers.has('once')) options.once=true;
    if(modifiers.has('passive')) options.passive=true;
    if(modifiers.has('nonpassive')) options.passive=false;
    if(modifiers.has('capture')) options.capture=true;
    if(modifiers.has('noncapture')) options.capture=false;
    function __With_Modifiers(event){
      if(modifiers.has('prevent')) event.preventDefault()
      if(modifiers.has('stop')) event.stopPropagation()
      if(modifiers.has('trusted')) func=event.isTrusted ? func : pass
      if(modifiers.has('self')){
        if(!vnode.isEqualNode(event.target)) return;
      }
      func(event)
    }
    if(!runImmediately)  return [ __With_Modifiers, options]
    if(!(IS_ELEMENT_NODE(vnode) && len(events))) return;
    for (let eventName of events.values()) vnode.addEventListener(eventName, __With_Modifiers, options);
  }
  function _useModifiersAdapter(Callback, modifiers){
    if(!isFunction(Callback)){
      $Debug(`Callback argument passed  to useModifiers is not a function`);return pass
    }else if( modifiers && !isArray(modifiers)){
      $Debug(`Having a problem during the call of the "useModifiers" method.\n\nPositional argument, :"Modifiers" must be of type "Array" with string values. `);
      modifiers=[];
    }
    const Data=_Run_With_Modifiers(null, modifiers, Callback, [], false);
    const [ func, options ]=Data;
    if(len(options)) func.options=options;
    return func;
  }
  function useModifiers(callback, modifiers){
    return _useModifiersAdapter(...arguments);
  }
  function bind_directive_receiver(self, props, vnode, hx__VNode, modifiers, patchFlags, metrics){
    const $orgKey=metrics[activeFlagInstanceKey];
    const { isRerender, patch, is_hyperscript } = metrics
    let { item, key }=props;
    item=isOnListener(key) && !is_hyperscript && isString( item) && isContextMethodString(self, hx__VNode, item) ? item : isOnListener(key) && !is_hyperscript ? `()=>{ ${ item } }` : item ;
    let trasform; 
    let subscribers;
    [ subscribers , trasform] = effectDependencyTracking(self, function(){
      return isChar(item) ? _$runModelBind(self, item, hx__VNode ) : item ;
    })
    if( len(subscribers) && !is_hyperscript && !isRerender ) {
      patchFlags.isHoisted=(true);
      subscribers.forEach((sub)=>{
        patchFlags.subscriptions.push(sub);
      })
      VirtualizePropTick(hx__VNode, $orgKey, key, [ item, trasform ], subscribers)
    }
    trasform=unwrap(trasform);
    if(!key){
      if (!isPObject(trasform)) $Debug(`"$$bind" Directive attributes binding expects an object value when not chained to any attribute/property argument`, self, true);
      else return ElementPropsCompiler(trasform, vnode, self, hx__VNode, isRerender, metrics.patch);
    }else return ElementPropsCompiler({ 
      [key]:trasform 
    }, vnode, self, hx__VNode, isRerender, patch );
    return vnode;
  }
  function bindKeyAsValue(keys, value){
    if(isEmptyStr(value) ||  !value){
      const sep=directive_sep(keys)
      const lastAttr=len(sep) ? sep.pop() : value;
      return has$$_bind(lastAttr) ? lastAttr.slice(2) : lastAttr
    }else return value;
  }
  function $$dir_HTML(self, value, vnode, hx__VNode, text, modifiers, metrics={} ){
    const $orgKey=metrics[activeFlagInstanceKey];
    const is_hyperscript=hx__VNode.is_hyperscript;
    const item=value;
    let subscribers;
    const runBinding= ()=> _$runModelBind(self, value, hx__VNode, !modifiers.has('bind'))
    if(!is_hyperscript) {
      [ subscribers, value ] = effectDependencyTracking(self, function(){
        return runBinding()
      } )
    }else value= runBinding();
    value=unwrap(value)
    const innerProp=isTrue(text) ? 'innerText' : 'innerHTML';
    if( isPrimitive(value)) {
      if(!isNativeElement(vnode) && value)  self.__public_model__.$attrs[innerProp]=value;
      else if(value) vnode[innerProp]=value;
    }
    if(!is_hyperscript && len(subscribers) && !metrics.isRerender){
      VirtualizePropTick(hx__VNode, $orgKey, innerProp, [ item, value], subscribers );
    }
  }
  function $$dir_SLOT(self, item, vnode, hx__VNode, modifiers){
    try{
      get_Object_Value(self.__public_model__, item, true);
    }catch(err){
      $Debug(err);
    }
    const iswt=!isNativeElement(vnode)
    let value=_$runModelBind(self, item, hx__VNode, !modifiers.has('bind'));
    value=unwrap(value)
    if(!isString(value)){
      $Debug(`value Error::\n\n slot name undefined or is not a string\n\n Error resolving slot  directive name reference on "${iswt  ?  self[$$$ownProperties].name : vnode.localName}"`, self, true);
      return;
    }
    if(!iswt) hx__VNode.slot_name=value;
    else vnode.props[$$slotName]=value;
  }
  function $$dir_BIND(self, prop, el, hx__VNode, modifiers , patchFlags , metrics){
    let { key, item }=prop;
    if(isNativeElement(el)){
      key=directive_sep(key);
      key.shift();
      key= len(key) > 1 ? key.join(':') : key[0];
      return bind_directive_receiver(self,{ key, item }, el, hx__VNode, modifiers, patchFlags, metrics )
    }else widgetBindingReceiver(self, key, item, el, hx__VNode, modifiers, patchFlags, metrics)
  }
  function $$dir_ON(self, attr, node, hx__VNode, key, modifiers){
    const isWidget=!isNativeElement(node);
    if(isString(attr)){
      try{
        attr=attr.split(' ').join('').trim();
        const funcToken=attr;
        attr=_$runModelBind(self, isContextMethodString(self, hx__VNode, attr) ? attr : `()=>{${attr}}`, hx__VNode);
        attr=object_Has_Path(self.__public_model__, funcToken) && isPFunction(attr) ? attr.bind(self.__public_model__) : attr;
      }catch(err){
        $Debug(`${err}`, self, true);
        return node;
      }
      attr=unwrap(attr)
      if(!isPFunction(attr)){
        $Debug(`"${name}" event must be wrapped as or in a function \n\non.....on...\n  "${isWidget ?  '' : node.localName}" \n`, self, true);
        return node;
      }
    }
    let opts;
    const events=isArray(key) ? key : has$$_bind(key) ? key.slice(5).split('.') : key.split('.');
    if(len(modifiers)) {
      if(isWidget){
        const [ attr, opts ] = _Run_With_Modifiers( null, modifiers, isFunction(attr) ? attr : pass, events, false);
      }else _Run_With_Modifiers(node, modifiers, isFunction(attr) ? attr : pass, events);
    } else {
      if(isWidget){
        if(len(events)){
          if(!node.props[$$$Events]) node.props[$$$Events]={};
          for( let [ ind, ev ] of events.entries()){
            define(node.props[$$$Events], ev,{ value: new houxerSignal(ev, attr , opts) , enumerable, configurable});
          }
        }
      }else if(len(events)){
        let index=0
        for(let event of events.values()) {
          if(!IS_VALID_EVENT_HANDLER(event)){
            $Debug(`"${event}" is not a valid event name`, self, true);
          }else node.addEventListener(event, isFunction(attr) ? attr : pass);
        }
      }
    }
    return node;
  }
  function $$dir_CLONE(self, item, vnode, hx__VNode, key, modifiers, metrics){
    const is_hyperscript=hx__VNode.is_hyperscript;
    if(!object_Has_Path(self.__public_model__, item)){
      $Debug(`value "${item}" property value was accessed during render, but not initialized on model or is undefined\n\nat at\n ..."${name} directive on ${isWidget ? '$$clone' : vnode.localName} `,self, true);
      return;
    }
    let ref;
    let subscribers;
    try{
      if(!is_hyperscript){
        [ subscribers, ref ] = effectDependencyTracking(self, function(){
          return get_Object_Value(self.__public_model__, item, modifiers.has('bind'));
        })
      }
      if(ref && !isNull(ref)) ref = get_Object_Value(self.__public_model__, item, modifiers.has('bind'));
    }catch(err){
      $Debug(`There is a problem with accesding the path "${item}" property which was accessed during render, but seems not initialized on model or is undefined\n\nat at\n ..."${name} directive on ${isWidget ? '$$ref' : vnode.localName} `, self, true);
      $Debug(err)
      return;
    }
    let propPath=item;
    if(isToken(ref)){
      if(isReadonlyToken(ref)){
        $Debug(`Path provided to the $$clone directive path "${item}" resolves to a readonly ref value\n\nFailed to mutate a readonly ref......at ......."${name}"`, self, true);
        return;
      }else propPath= item+ref[refInternalEffectKey].accessor;
    }
    // self.__public_model__._deferTick(()=>{
      
    // log(vnode.outerHTML, (hx__VNode.compiler_options.Node()))
    // self[$$$operands].initialized=false;
    // const NewNode=hx__VNode.compiler_options.Node();
    // self[$$$operands].initialized=true;
    // set_Object_Value(self.__public_model__, propPath, NewNode, true);
    // })
  }
  function $$dir_ANIMATION(self, value, node, hx__VNode, key, modifiers, metrics={}){
    const $orgKey=metrics[activeFlagInstanceKey];
    const is_hyperscript=hx__VNode.is_hyperscript;
    const item=value;
    let subscribers;
    const runBinding= ()=> _$runModelBind(self, value, hx__VNode, !modifiers.has('bind'))
    if(!is_hyperscript) {
      [ subscribers, value ] = effectDependencyTracking(self, function(){
        return runBinding()
      } )
    }else value= runBinding();
    value=unwrap(value)
    animateElementVnode(self, node, {
      hx__VNode,
      modifiers,
      item : value,
    });
  }
  function $$dir_TRANSITION(self, value, node, hx__VNode, key, modifiers, metrics={}){
    const $orgKey=metrics[activeFlagInstanceKey];
    const is_hyperscript=hx__VNode.is_hyperscript;
    const item=value;
    let subscribers;
    const runBinding= ()=> _$runModelBind(self, value, hx__VNode, !modifiers.has('bind'))
    if(!is_hyperscript) {
      [ subscribers, value ] = effectDependencyTracking(self, function(){
        return runBinding()
      } )
    }else value= runBinding();
    value=unwrap(value)
    transitElementVnode(self, node, {
      hx__VNode,
      modifiers,
      item : value,
    });
  }
  function $$dir_REF(self, item, node, hx__VNode, modifiers, metrics){
    const $orgKey=metrics[activeFlagInstanceKey];
    const isWidget=!isNativeElement(node);
    const is_hyperscript=hx__VNode.is_hyperscript;
    if(!object_Has_Path(self.__public_model__, item)){
      $Debug(`value "${item}" property value was accessed during render, but not initialized on model or is undefined\n\nat at\n ..."${name} directive on ${isWidget ? '$$ref' : vnode.localName} `,self, true);
      return;
    }
    let ref;
    let subscribers;
    try{
      if(!is_hyperscript){
        [ subscribers, ref ] = effectDependencyTracking(self, function(){
          return get_Object_Value(self.__public_model__, item, modifiers.has('bind'));
        })
      }else ref = get_Object_Value(self.__public_model__, item, modifiers.has('bind'));
    }catch(err){
      $Debug(`There is a problem with accessing the path "${item}" property which was accessed during render, but seems not initialized on model or is undefined\n\nat at\n ..."${name} directive on ${isWidget ? '$$ref' : vnode.localName} `, self, true);
      $Debug(err)
      return;
    }
    let propPath=item;
    if(isToken(ref)){
      if(isReadonlyToken(ref)){
        $Debug(`Path provided to the $$ref directive path "${item}" resolves to a readonly vale`, self, true);
        return;
      }else propPath= item+ref[refInternalEffectKey].accessor;
    }
    if(node && isWidget) {
      node.props[$$$$dir__ref$$$$]=propPath;
    }else if(node) hx__VNode.compiler_options['dir--ref']=propPath;
    if(!is_hyperscript && len(subscribers) && !metrics.isRerender){
      VirtualizePropTick(hx__VNode, $orgKey, $$$$dir__ref$$$$, [propPath, isWidget ? hx__VNode.widget_instance : node], subscribers);
    }
  }
  function $$dir_SCOPED(self, item, node, hx__VNode, modifiers, metrics){
    const $orgKey=metrics[activeFlagInstanceKey];
    const isStyleEl=isNativeElement(node) && node.localName === 'style';
    if(!isStyleEl) {
      $Debug(`"$$scoped" directive is only scoped to document <style> elements only`, self, true);
      return node;
    }
    let subscribers;
    let value;
    const runBinding= ()=>_$runModelBind(self, item, hx__VNode, !modifiers.has('bind'));
    if(!is_hyperscript){
      [ subscribers, value] = effectDependencyTracking(self, function(){
        return runBinding();
      })
    }else value=runBinding();
    const unwraped=unwrap(value);
    if(isFalse(unwraped) || isNull(unwraped)) return node;
    node.innerHTML=_styleSheet_hydration(self, node.innerHTML);
    if(!is_hyperscript && len(subscribers) && !metrics.isRerender){
      VirtualizePropTick(hx__VNode, $orgKey, scopedDirKey , [ item, value], subscribers );
    }
    return node;
  }
  function $$dir_FALL(self, item, node, hx__VNode, modifiers){
    const isWidget=!isNativeElement(node) && validHouxerWidget(node);
    const is_hyperscript=hx__VNode.is_hyperscript
    if(!isWidget) {
      $Debug(`"$$fall" directive is only scoped to widget instances vnode only\n\n found on "${isNativeElement(node) ? node.outerHTML+" element" : ""}"`, self, true);
      return node;
    }else if(!item || !isString(is_hyperscript ? unwrap(item) : item )) {
      $Debug(`Unrecognized reference prop passed to the "$$fall" directive`, self, true);
      return ;
    }
    node.props[$$$fallthrough]=createObj('fallthrough', { prop:item});
    return node;
  }
  function $$dir_MODEL(self, item, node, hx__VNode, modifiers, metrics){
    let initVal='';
    try{
      initVal=get_Object_Value(self.__public_model__, item, true);
    }catch(err){
      $Debug(`undefined reference for directive "$$model"\n\n "${item}" is not defined on widget model instance\n\n${err}`, self, true);
      return
    }
    function compileStraightModelBinding(element, failSilently=false){
      if(!Is_Form_Element(element) ){
        $Debug(`Compilation Error::\n\n cannot bind a data model to  a none form element\n\n`, self, true);
        if(failSilently) $warn("widget root element is not a form element", self);
        return;
      }
      element.value=compileToRenderable(unwrap(initVal));
      const eventName=get_Model_Event(element);
      if(eventName){
        element.addEventListener(eventName, function(){
          try{
            set_Object_Value(self.__public_model__, item , element.value );
            hx__VNode.render_tracked=true;
          }catch(err){
            $Debug(`${err}`, self, true);
          }
        });
      }
      hx__VNode.patch_tracks.add({
        'model:Value':item,
        initialValue:unwrap(initVal),
        "parent:instance":self
      });
      if(failSilently){
        self.__public_model__._observe(item, (newV, oldV)=>{
          if(!deepEqualityCheck(newV, oldV)){
            element.value=unwrap(newV);
          }
        })
      }
    }
    if(!isNativeElement(node) && validHouxerWidget(node)){
      if(!node.props) node.props=createObj('props');
      if(!hasOwn(node.props, $$$ModelUpdateKey)) node.props[$$$ModelUpdateKey]={};
      node.props[$$$ModelUpdateKey]['resourceModel:IPAddress:Binding']=new houxerSignal("resourceModel:IPAddress:Binding", compileStraightModelBinding, {});
    }else{
      compileStraightModelBinding(node)
    }
  }
  function _Resolve_Builtin_Directives(self, key, attr, vnode, hx__VNode, modifiers, patchFlags, metrics){
    let item =bindKeyAsValue(key, attr);
    let name=directive_sep(key )[0].slice(2);
    const callArgs=()=>[self, item, vnode, hx__VNode, modifiers];
    if(name === 'bind') vnode=$$dir_BIND(self, {key, item}, vnode, hx__VNode, modifiers, patchFlags, metrics );
    else if(name === 'html' || name === 'text') $$dir_HTML(self, item, vnode, hx__VNode, name === 'text', modifiers, metrics);
    else if(name === 'ref') $$dir_REF(self,  item, vnode, hx__VNode, modifiers, metrics);
    else if(name === 'slot') $$dir_SLOT(self, item, vnode, hx__VNode, modifiers);
    else  if(name === 'scoped') vnode=$$dir_SCOPED(self, item, vnode, hx__VNode, modifiers, metrics);
    else  if(name === 'fall') vnode=$$dir_FALL(self, item, vnode, hx__VNode, modifiers, metrics);
    else if(name === 'model') $$dir_MODEL(self, item, vnode, hx__VNode, modifiers, metrics);
    else if(name === 'on') vnode=$$dir_ON(self, attr, vnode, hx__VNode, key, modifiers);
    else if(name === 'transition') $$dir_TRANSITION(self, attr, vnode, hx__VNode, key, modifiers)
    else if(name === 'animation') $$dir_ANIMATION(self, attr, vnode, hx__VNode, key, modifiers)
    else if(name === 'clone') $$dir_CLONE(self, attr, vnode, hx__VNode, key, modifiers)
    return vnode;
  }
  function animateElementVnode(self, vnode, binding){
    const { item, hx__VNode, modifiers } = binding;

  }
  function transitElementVnode(self, vnode, binding){
    const { item, hx__VNode, modifiers } = binding;
  
  }
  function get_Model_Event(vnode ){
    const tag=vnode.localName;
    const type=vnode.type;
    if(IS_ELEMENT_NODE(vnode) && Is_Form_Element(vnode)){
      if(tag === 'input') return _mapValue(['file'], type) ? 'change' : _mapValue(['button','submit','reset'], type) ? 'click' : _mapValue(['image','hidden'], type ) ? 'change' : 'input';
      return tag === 'form' ? 'submit' : tag === 'select' ? 'change' : tag === 'textarea' ? 'input' : 'input';
    }
  }
  function _compileToStaticTemplateScaffold(self, render, recursive=false){
    render=isString(render) ? _HouxerTemplateParser(render, null ) : render;
    let response;
    render = !isArray(render) ? [ render ] : render
    const NodeList=[];
    for(let build of render.values()){
      if(isPObject(build)) build=defineVNode(build)
      NodeList.push(build)
    }
    return len(NodeList) && len(NodeList) > 1 ? new spreadRenderFragment(NodeList) : len(NodeList) ? NodeList.pop() : "" ;
  }
  function scaffold(render){
    render=isPFunction(render) ? render() : render;
    if(!_validateType(render, [String, Object, Array, None])  && !isPrimitive(render)){
      $Debug(`Illegal value type passed to scaffold `);
      return;
    }else if(isPrimitive(render) && !isNull(render)) render=String(render);
    return _compileToStaticTemplateScaffold(this, render);
  }
  function hyperscriptElArgumentsValidator(args){
    const [ type , propsOrChildren , childrenOrProps ] = args ;
    if(  len( args ) > 3 ) {
      $Debug( `h render function cannot receive more than three arguments\n\n"...........${ len( args ) }" received" `  )
      return false ;
    }else if( !_validateType( type , [ String , Object , Function , HTMLElement ] )  ) {
      $Debug( `parameter 1 at h macro expexts a native Element name or a widget options instance data `) ;
      return false ;
    }else if( isPObject( propsOrChildren ) && !isChildrenObj(propsOrChildren) && isPObject( childrenOrProps ) && !isChildrenObj(childrenOrProps) ) {
      $Debug( `Unintended plain object parsed at parameter 2 and 3 of h render macro\n\nplain objects are considered as props and cannot be duplicated`) ;
      return false ;
    }else if( ( exists( propsOrChildren ) && isChildrenNode( propsOrChildren ) )  && ( exists( childrenOrProps ) && isChildrenNode( childrenOrProps ) ) ) {
      $Debug( `arguments 2 and arguments 3 of h render receives duplicated identical Vnodes instance \n\nRenderable Vnodes cannot be duplicated` );
      return false ;
    }
    return true ;
  }
  function propsAndChildrenGetter( type , propsOrChildren , childrenOrProps ) {
    if(!hyperscriptElArgumentsValidator( [ ...arguments ] ))  return [ ] ;
    let props ;
    const lab = new Set() ;
    if( isFallThrough( propsOrChildren ) ) pass ;
    else if( isPObject( propsOrChildren ) && !isChildrenNode( propsOrChildren ) ) { 
      props = propsOrChildren ;
      lab.add( 'propsOrChildren' ) ;
    }else if( isPObject( childrenOrProps ) && !isChildrenNode( childrenOrProps ) ) { 
      props = childrenOrProps ;
      lab.add( 'childrenOrProps' ) ;
    }
    if( !lab.has( 'propsOrChildren' ) && isChildrenNode( propsOrChildren ) ) childrenOrProps = propsOrChildren ;
    lab.clear();
    return [ type , props , childrenOrProps ] ;
  }
  function h( typeValue , propsOrChildren , childrenOrProps ) {
    const [ type , props , children ] = propsAndChildrenGetter( ...arguments ) ;
    return defineVNode( {
      type ,
      props , 
      children 
    } ) ;
  }
  class BaseWidget {
    constructor(options){
      if(!options) {
        let model=new Model();
        this.model=model;
        define( this, 'model', { 
          get(){
            return model
          },
          set(modelX){
            if(!isPObject(modelX)){
              $Debug(`Unexpected assignment to the model instance object\n\nassignment expects a plain object`);
              return false;
            }
            model=modelX;
            return true;
          }
        })
      }else if(isPObject(options)) {
        for(const [key, value] of entries(options)){
          this[key]=value;
        }
      }else if(isPFunction(options)){
        this.build=options;
        if(opts && isPObject(opts)) {
          if(hasProp(opts, 'build')) delete opts.build;
          assign(this, opts);
        }
      }else if(isClass(options)){
        options=new options();
        if(!isBaseWidget(options)){
          $Debug('class widget not an instance of the "Widget" base Widget');
        }else{
          for(let [key, value ] of entries(options)){
            this[key]=value;
          }
        }
      }
    }
    define(widget){
      return defineWidget(...arguments);
    }
  }
  class Widget extends BaseWidget{
    constructor(...args){
      super(...args);
    }
  }
  class Build extends Widget {
    constructor(){ 
      super()
      this[$$BuiltinWidgetKey]='hx:build'
    }
    name='Build'
    params={ 
      self:{
        type:[Object, Function, String], 
        required:true
      }
    }
  }
  class Fragment extends Widget {
    constructor(){ 
      super();
      this[$$BuiltinWidgetKey]='hx:fragment'
    }
    name='Fragment'
    buildConfig={
      debug:false
    }
  }
  class Self extends Widget {
    constructor(){ 
      super()
      this[$$BuiltinWidgetKey]='hx:self'
    }
    name='Self'
  }
  class Motion extends Widget {
    constructor(){
      super()
      this[$$BuiltinWidgetKey]='hx:motion'
    }
    name='Motion'
    
  }
  class Suspense extends Widget{
    constructor(){
      super()
      this[$$BuiltinWidgetKey]='hx:suspense'
    }
    name='Suspense'
  }
  class Memo extends Widget {
    constructor(){
      super();
      this[$$BuiltinWidgetKey]='hx:memo'
    }
    name='Memo'
  }
  class Portal extends Widget {
    constructor(){
      super()
      this[$$BuiltinWidgetKey]='hx:portal'
    }
    name="Portal"
    params={
      target:{
        type:[String, Element ],
        required:true
      },
      disabled:{
        type:Boolean,
        default:false
      }
    }
  }
  class Provider extends Widget{
    constructor(){
      super()
      this[$$BuiltinWidgetKey]='hx:provider'
    }
    name="Provider"
  }
  const BUILT_IN_WIDGETS={ 
    'hx:fragment':Fragment, 
    'hx:build':Build, 
    'hx:self':Self, 
    'hx:motion':Motion, 
    'hx:memo':Memo, 
    'hx:portal':Portal,
    'hx:suspense':Suspense,
    'hx:provider':Provider
  }
  function appendSygnals(){
    for(let [ name, widget ] of entries(BUILT_IN_WIDGETS)){
      widget[$$BuiltinWidgetKey]=name;
    }
  }
  appendSygnals();
  function animate(){
    
  }
  function transite(){
    
  }
  const garbageKey=Symbol();
  function _transformTheParamsInjectorHook(params){
    const self=getCurrentRunningEffect({
      name:'useParams'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useParams",
      validators:[Array, Object],
      count:1
    } ))) return self.__public_model__.$params;
    paramsManager(self, {
      props:self[$$$core]?.opts?.props || {},
      params
    }, true);
    return self.__public_model__.$params
  }
  function useParams(params){
    return _transformTheParamsInjectorHook(...arguments)
  }
  function _composersSlotsMappingHook(slots){
    const self=getCurrentRunningEffect({
      name:'useSlots'
    })
    if( !self && (!validateCollectionArgs(arguments, { 
      name: "useSlots",
      count:1,
      validators:[Array]
    }))) {
      defineFallbackSlotsToken(self, {
        slots:[]
      }, self[$$$core].slots);
      return self[$$$core].slots;
    }
    for(const [index, sl ] of slots.entries()){
      if(!isString(sl)) {
        $Debug(`useSlots() adapter macro array value expects a String value\n\nat array index ..........${index}`, self, true);
        continue;
      }
    }
    defineFallbackSlotsToken(self, { 
      slots 
    }, [], self[$$$core].slots );
    return self[$$$core].slots;
  }
  function useSlots(slots){
    return _composersSlotsMappingHook(...arguments);
  }
  function _defineSignalsEvents(signals){
    const self=getCurrentRunningEffect({
      name:'useSignals'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useSignals",
      count:1,
      validators:[Array]
    }))) return self.__public_model__.$signals;
    $construct_With_Signals(self, { 
      signals 
    }, true);
    for(const [key, value] of entries((self[$$$core].opts.props||{})[$$$Events]||{})){
      const transformKey=_toCamelCase(`on-${key}`);
      if(hasOwn(self.__public_model__.$attrs, transformKey) && hasOwn(self.__public_model__.$signals, key)){
        delete self.__public_model__.$attrs[transformKey];
      }
    }
    return self.__public_model__.$signals
  }
  function useSignals(signals){
    return _defineSignalsEvents(...arguments)
  }
  function _compilerOptionsConfigHook(config){
    const self=getCurrentRunningEffect({
      name:'defineConfig'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"defineConfig",
      count:1,
      validators:[Object]
    }))) return
    setConfig(self, { 
      buildConfig: config 
    });
    return void 0
  }
  function defineConfig(config){
    return _compilerOptionsConfigHook(...arguments);
  }
  function makePublish(publish){
    const self=getCurrentRunningEffect({
      name:"makePublish"
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"makePublish",
      validators:[Object],
      count:1
    } ))) return false;
    mapPublicationsTraverse(self, { 
      publish(){
        return publish;
      }
    })
    return true;
  }
  function useTransform(transform){
    const self=getCurrentRunningEffect({
      name:'useTransform'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useTransform",
      validators:[[Array, Object]],
      count:1
    } ))) return false;
    return transformPublicationPrefix(self, { 
      transform 
    });
    return true
  }
  function useFallthrough(fallthrough){
    const self=getCurrentRunningEffect({
      name:'useFallthrough'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useFallthrough",
      validators:[Function],
      count:1
    } ))) return false;
    if(!hasOwn(self[$$$core].opts, "fallthrough")){
      self[$$$core].opts.fallthrough=function fallthrough(){
        return fallthrough.call(this);
      }
    }
    return true;
  }
  function runLifeCircleHooksAdapter(args, name){
    const self=getCurrentRunningEffect({ name });
    const response = validateCollectionArgs(args, {
      count:1,
      name,
      validators:[Function],
      required:[true]
    })
    if(!self && !response ) return false;
    self[$$$compiler][garbageKey][name].add([ ...args ][0]);
    return true;
  }
  function onSlotEffect(){
    
  }
  function onSlotRender(){
    
  }
  function postBuild(callback){
    return runLifeCircleHooksAdapter(arguments, 'postBuild');
  }
  function preMount(callback){
    return runLifeCircleHooksAdapter(arguments, 'preMount');
  }
  function postMount(callback){
    return runLifeCircleHooksAdapter(arguments, 'postMount');
  }
  function preUpdate(callback){
    return runLifeCircleHooksAdapter(arguments, 'preUpdate');
  }
  function onEffect(callback){
    return runLifeCircleHooksAdapter(arguments, 'onEffect');
  }
  function onCatch(callback){
    return runLifeCircleHooksAdapter(arguments, 'onCatch');
  }
  function onTracked(callback){
    return runLifeCircleHooksAdapter(arguments, 'onTracked');
  }
  function postUpdate(callback){
    return runLifeCircleHooksAdapter(arguments, 'postUpdate');
  }
  function preDestroy(callback){
    return runLifeCircleHooksAdapter(arguments, 'preDestroy');
  }
  function postDestroy(callback){
    return runLifeCircleHooksAdapter(arguments, 'postDestroy');
  }
  const resolvableMacros="postDestroy,preDestroy,postMount,preMount,preUpdate,postUpdate,postBuild,useAdapter,onEffect,onTracked,onCatch,onSlotRender,onSlotEffect"
  function useAdapter(widget){
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useAdapter",
      validators:[[Object,Function]],
      count:1
    } ))) return pass;
    return Function('adapter', `
      return function ${widget.name || ""}(propsOrChildren, childrenOrProps){
        return adapter(...arguments)
      }
    `)((propsOrChildren, childrenOrProps)=>{
      return h(widget, propsOrChildren, childrenOrProps);
    });
  }
  async function _use(callback){
    const response = validateCollectionArgs(arguments, {
      count:1,
      name:'use',
      validators:[Function],
      required:[true]
    });
    if(!response) return E_Obj;
    installCurrentRunningEffect(this);
    let program;
    deferTick(()=>{
      program = callback();
    }).then(()=> reinstatePreviousRunningEffect());
    return await program;
  }
  async function use(callback){
    return await _use.call(this, ...arguments);
  }
  function useStyleSheet(styles, config){
    
  }
  function directiveKeyInfo(self, key , dirName){
    
  }
  function genericModelPropTransform(self, key, value, code , mygetters, useModel=false){
    if(isComputedMacro(value)){
      if(!useModel){
        $Debug(`The computed macro is not allowed in the model option\n\nOnly allowed to be used within the body of the Build method option, in a function based widget or within the <script build> SFW (Single File Widget) build system scope\n\nUse the "computedTokens" option instead if you are using the options API`, self, true);
        return;
      }
    }else if(isReadonlyToken(value)){
      define(self[code], key, mygetters ? mygetters : {
        get(){
          if(isTrue(useModel) && isShallowReadonlyToken(value) && !isStateToken(value)){
            _mountTokenEffect(ref, self)
          }
          return value;
        },
        set(valueX){
          $Debug(`cannot reassign/mutate a "readonly" ReactiveEffect property\n\n.........on property "${key}"`) ;
          return false;
        }
      })
    }else if(isToken(value) || isStream(value)){
      const statefull=isToken(value) ? isStateToken(value) : isStateStream(value);
      if( useModel && !statefull){
        _mountReactiveWatcher(value, self, true);
      }
      define(self[code], key, { 
        value, 
        enumerable
      } );
    }else self[code][key]=value;
  }
  function modelManager(self, opts){
    if(isNull(opts.model)) return;
    const modelData=isBaseWidget(opts) ? opts.model : new Model() ;
    if(hasOwn(opts, 'model') && isPFunction(opts.model)) {
      try{
        opts.model.call(modelData, self.__public_model__.$params, self.__public_model__.$attrs) ;
      }catch(err){
        $Debug(`There is an error when running the model method option\n\n${err}`, self, true);
      }
    }
    self.__public_model__=assign( self.__public_model__, modelData );
  }
  function widgetsSetup(opts, self, vnode){
    if(!isNull(opts.widgets)){
      const validNameRegex=/^[_A-Z0-9\-]+/;
      const FirstCharRegex=/^[a-zA-Z_]+/;
      entries(opts.widgets).forEach(([key, widget])=>{
        if(!FirstCharRegex.test(key.at(0)) && !validNameRegex.test(key)){
          $Debug(`Widget registration failed,\nImproper widget namecasing found at "${key}"\n\nwidget names must atleast start with an uppercase letter or a multi-word string seperated by a hyphen or an underscore and not start with hyphen or a number`, self, true);
          return;
        }
        define(self[$$$register].widgets, key, {
          value:widget,
          enumerable
        });
      })
    }
  }
  const $$isHandler=Symbol()
  function methodsManager(opts, self, vnode){
    if(!opts.handlers) return;
    entries(opts.handlers).forEach(([ind, method])=>{
      if(!isPFunction(method)){
          $Debug(`widget method option's values must be a method or a function\n\n type of "${getType(method)}" found`, self, true);
          return;
      }
      method[$$isHandler]=true;
      define(self[$$$register].handlers, ind, {
        value:method, 
        enumerable, 
        configurable
      })
    });
  }
  function inDomPropsFallback(self, props, params, garbage){
    const paramsKeys=isArray(params) ? params.values() : isObject(params) ? keys(params) : [];
    let index=0;
    paramsKeys.forEach((key)=>{
      index++;
      if(hasUpperCase(key)){
        const transpiled=_to_kebab_case(key);
        if(_mapValue(props, transpiled) && !_mapValue(paramsKeys, transpiled)){
          if(isPObject(params)) {
            define(garbage, transpiled, { value:params[key], enumerable, configurable});
            delete props[transpiled];
          }
        }
      }
    })
  }
  function paramsKeysDefer(self, paramsSet, essenceTags, ){
    const [ props, ind , param ] = essenceTags;
    if(!_mapValue(props || {}, ind)){
      define(paramsSet,ind,{value:undefined, enumerable, configurable, writable});
      return false;
    }else if(props ){
      const value=props[ind];
      if(_validateType(value, param)){
        define(paramsSet,ind,{value, enumerable, configurable, writable});
      }else{
        define(paramsSet,ind,{value:undefined, enumerable, configurable, writable});
        $Debug(`params validation error\n\nproperty validation for widget default value failed, property "${ind}" is of an invalid type\n\n typeof "${param.name}" required`, self, true);
        return false;
      }
    }
  }
  function arrayParamsResolver(self, paramsSet, metrics ){
    const [ props, param ] = metrics ;
    if(props && _mapValue(props, param)){
      const value=!props[param] && !isBoolean(props[param]) ? '' : props[param];
      paramsSet[param]=value;
    }else paramsSet[param]=undefined; 
  }
  function runObjectifiedParamsValidation(self, paramsSet, objMetrics, PN){
    const [ props, param, ind ] = objMetrics;
    let response = true;
    if(isTrue(param.required) && hasProp(param, 'default')){
      $Debug(`validation error  .......\n\nthe required validator should not be truthy alongside a default value\nat at\n\n"${ind}" ${PN}`, self, true);
      response = false;
    }else if(hasProp(param, 'required') && !isBoolean(param.required)){
      $Debug(`The "required" validation options receives an unresolvable value \nat at \n"${ind}" ${PN}\n requires a boolean value`, self, true);
      response = false;
    }else if(!hasProp(param, 'type')){
      $Debug(`The type validator property is  required\n  Mising at "${ind}" param`, self, true);
      response = false;
    }else if(!_validateType(param.type,[Function, Array]) ){
      $Debug(`unexpected value passed as the type validator option\n expects a function or an Array of type function`, self, true);
      response = false;
    }else if(hasProp(param,'validator') && !isPFunction(param.validator)){
      $Debug(`The "validator option must be a  function\n\nat ${ind} ${PN}`, self, true);
      response = false;
    }else if(isTrue(param.required) && !_mapValue(props || {}, ind)){
      $Debug(`Params validation error........\n\nThe ${PN+ ' of the '+'"'+self[$$$ownProperties].name+'"'+' widget' } params is required and seems not to  be provided "\nrequired ${PN} is missing\n\nat at\n  ....."${ind}"  param`, self, true);
      paramsSet[ind]=undefined;
      response = false;
    }
    return response;
  }
  function defaultParamBuffering(self, paramsSet, deferable){
    const [ props, param, ind ] = deferable ;
    if(hasOwn(param, 'default')){
      const defaultValue=()=> isFunction(param.default) ? ( !isAFunction(param.default) ? param.default.call(self.__public_model__) : param.default() ) : param.default;
      if(!hasOwn(props || {}, ind)){
        if(!_validateType(defaultValue(), param.type)){
          paramsSet[ind]=undefined;
          $Debug(`Params validation error .....\n\nproperty validation for widget default value failed, property "${ind}" is of an invalid type\n\n${ isArray(param.type) ? "Matches no type in the validation list" :  'typeof '+ param.type.name+" required"}`, self, true); 
          return false;
        }else paramsSet[ind]=defaultValue() ;
      }
    }
    return true;
  }
  function paramsValidationCircle(self, paramsSet, deferable, pn){
    const [ props, param, ind] = deferable;
    const value=props ? props[ind] :  undefined;
    if(hasOwn(props, ind) && _validateType(value, param.type)){
      if(hasOwn(param, 'validator')){
        let valRes=param.validator(value)
        if(!isBoolean(valRes)){
          $Debug(`${pn} validator option method must return a Boolean value of true/false`, self, true);
          return false;
        }
        if(isFalse(valRes)){
          $Debug(`Validation for ${pn} ${ind} returned false`, self, true);
          return false ;
        }
      }
      paramsSet[ind]=value
    }else if(hasOwn(props, ind) && !_validateType(value, param.type)){
      paramsSet[ind]=undefined;
      $Debug(`${pn} validation error .....\n\nproperty validation for ${ self ? 'widget' : 'object'} ${pn} value failed, property "${ind}" is of an invalid type\n\n${ isArray(param.type) ? "Matches no type in the required validation list" :  'typeof '+param.type.name+" required" }`, self,  true);
      return false;
    }
    return true;
  }
  function resolveParamsPossibility(self, outlinedMetrics, vnode){
    let [ props, opts, params ] = outlinedMetrics;
    if(isFunctionBasedBuild(self)){
      entries(props).forEach(([ind, attr])=>{
        self.__public_model__.$attrs[ind]=attr;
      });
      return ;
    }
    let paramsSet;
    let rv;
    if(params && len(params)){
      paramsSet=self.__public_model__.$params;
      entries(params).forEach(([ind, param])=>{
        if(has$$_bind(ind)){
          $Debug(`Params validation error "${ind}" passed to widget as a houxer directive binding
            \n\n
            The "$$" may not be appended or used on a params identifier key name`, 
            self, true);
          return false;
        }
        if(!validationCoreManager(self, params, paramsSet, {
          ind,
          props,
          param
        })) return paramsSet;
      })
    }
    return paramsSet;
  }
  function validationCoreManager(self, params, paramsSet, metrics){
    const { ind , props, param } = metrics;
    if(_validateType(param, [Function, Array]) ){
      if(isFalse(paramsKeysDefer(self, paramsSet, [ props, ind, param ]))) return false;//Defer type, runs validation for tyoes in Array and JavaScript prototype Methods tyoes
    }else if(isArray(params) && isChar(param)) arrayParamsResolver(self, paramsSet, [props, param])//array and string based validation
    if(isPObject(param)){
      if(!runObjectifiedParamsValidation(self, paramsSet, [ props, param, ind ], 'params')) return false;//params in object type
      if(!defaultParamBuffering(self, paramsSet, [  props, param, ind ])) return false;//validating defaut values
      if(!paramsValidationCircle(self, paramsSet, [props, param, ind ], "params")) return false;
    }
    return true;
  }
  function paramsManager(self, opts, in_build=false, vnode){
    if(in_build) vnode=opts;
    const params= opts.params ;
    const props=assign( {}, vnode.props||{} );
    const garbage={};
    inDomPropsFallback(self, props, params, garbage);
    if(!in_build) defineGetter(self.__public_model__, '$params', new Params())
    if(params && !_validateType(params, [ Object, Array ])){
      $Debug(`Param option type validation failed, \n\n unexpected data type ${getType(params)}`, self,  true);
      return;
    }
    const paramsSet=resolveParamsPossibility(self, [ props, opts, params], vnode);
    if(isFalse(paramsSet)) return;
    GarbagePropsPrefix(self, paramsSet, garbage, props);
    entries(props||{}).forEach(([ind, value])=>{
      if(!hasOwn(paramsSet||{}, ind) && !ind === $$$Events) {
        self.__public_model__.$attrs[ind]=value;
      }else if(hasOwn(paramsSet, ind) && hasOwn(self.__public_model__.$attrs, ind)) delete self.__public_model__.$attrs[ind];
    });
    if(paramsSet && len(paramsSet)){
      for(const [key, value ] of entries(paramsSet)){
        defineReadonlyGetter(paramsSet, key, value , [ true, false ] );
      }
    }
  }
  function GarbagePropsPrefix(self, paramsSet, garbage, props){
  
  }
  function _hydrate_props(opts, self, vnode, metrics){
    vnode=isPFunction(vnode) ? vnode(self) : vnode;
    if(!isHouxerVNode(vnode)) return vnode
    if( isNativeElement(vnode.$element) && IS_ELEMENT_NODE(vnode.$element) && isTrue(self[$$$core].settings.forwardAttrs)){
      ElementPropsCompiler( self.__public_model__.$attrs, vnode.$element, self, vnode);
      if(hasOwn(self.__public_model__.$signals, 'resourceModel:IPAddress:Binding')){
        self.__public_model__.$signals["resourceModel:IPAddress:Binding"].fire(vnode.$element, true);
      }
    }
    return vnode;
  }
  const houxerProps="props,children";
  const isHouxerProp=prop=>_mapValue(houxerProps, prop);
  const initBuildInstaceKey=Symbol("<<<!@---initBuild---@>>>");
  const widgetTypeKey=Symbol("[[[widget-typing-system]]]");
  function sanitizedOptions(self, options, vnode){
    const argcount=len(options);
    if(hasOwn(vnode, initBuildInstaceKey)){
      self[$$$ownProperties].isInitialBuild = vnode[initBuildInstaceKey] ;
      delete vnode[initBuildInstaceKey];
    }
    if(hasOwn(vnode, widgetTypeKey)){
      self[$$$ownProperties].widgetType=vnode[widgetTypeKey];
      delete vnode[widgetTypeKey];
    }
    if(isBuiltinWidget(options)){
      self[$$$ownProperties].builtin_widget=options[$$BuiltinWidgetKey];
    }
    const Provider=validHouxerWidget(vnode.type) ? vnode.type : vnode.GeneticProvider;
    if(Provider[factoryHXSelfInstance]){
      self[$$$ownProperties].isSelfRecursive=(true)
      delete Provider[factoryHXSelfInstance];
    }
    for(const [ key, opt] of entries(options)){
      if(isHouxerProp(key)) pass;
      else if(isValidWidgetOption(key) && !isNodeJSOnlyOption(key) && !_validateType(opt, widgetOptionType[key])){
        if(isClassBasedBuild(self) && key === 'model' && !isPObject(opt) || !isClassBasedBuild(self) ){
          $Debug(`${key} option is of an invalid type, \n\n "${key}" option cannot be a ${getType(opt)} type`, self, true);
          return;
        }
      }else if(nonAFuncMethod(key)){
        if(!isAFunction(opt)) {
          if(isClass(opt)){
            $Debug(`class function cannot be used as an option\n\n.........at___"${key}"`, self, true);
            return ;
          }
        }else{
          $Debug(`${key} option expects a method or a "function()" declaration\n\nfound an arrow function`, self, true);
          return;
        }
      }else if(isNodeJSOnlyOption(key)) {
        $Debug(`"${key}" option is a nodejs only option, and cannot be used in houxer inbrowser compiler`, self, true);
      }else if(!isValidWidgetOption(key)) self[$$$operands]._OPTIONS[key]=opt
    }
  }
  function _hydrateHashToSelector(selector, $Data_Hash){
    const trimmed = selector.trim();
    let modified=trimmed;
    const _Manage_Hash_Class=function(sel, sep){
      const splited=sel.split(sep);
      let fir=splited.shift();
      fir=`${fir}${$Data_Hash}`;
      splited.unshift(fir);
      return splited.join(sep);
    }
    const $make_Tape=function(sep){
      const split=trimmed.split(sep);
      for (let [key, sel] of entries(split)){
        sel=sel.trim();
        sel=_hydrateHashToSelector(sel, $Data_Hash)
        split[key]=sel;
      }
      return split.join(` ${sep} `)
    }
    if(trimmed.startsWith('@g ')) return trimmed.slice(2);
    if(trimmed.includes(',')) return $make_Tape(',');
    if(trimmed.includes('+')) return _Manage_Hash_Class(trimmed, '+')
    if(trimmed.includes('~')) return _Manage_Hash_Class(trimmed, '~')
    if(trimmed.includes('>')) return _Manage_Hash_Class(trimmed, '>')
    if(!trimmed.startsWith('@') && !trimmed.startsWith('body') && !trimmed.includes(':')  ) return trimmed ? `${trimmed}${$Data_Hash}` : trimmed;
    else if(trimmed.includes('::')) return _Manage_Hash_Class(trimmed, '::');
    else if(trimmed.includes(':') && !trimmed.startsWith('@') && !trimmed.startsWith(':')) return _Manage_Hash_Class(trimmed, ':')
    return modified;
  };
  const selectorPattern = /([^\r\n{]+)\s*{/g;
  function _styleSheet_hydration(self, styles){
    return styles.replace(selectorPattern, (match, text)=>{
      return _hydrateHashToSelector(text, `[data-hx_hash_=${self[$$$ownProperties].hx_hash_}]`)+'{';
    });
  }
  function _preCompile_StyleSheet(opts, self, vnode){
    if(IS_TEXT_NODE(vnode?.$element)) return vnode;
    const scopedConfig=self[$$$core].settings.scopedStyleSheet;
    const CssStylesheet=opts.styleSheet ? opts.styleSheet : null;
    if(CssStylesheet){
      const styleEl=createHouxerElement({ 
        type:'style'
      }, { 
        type:'text/css'
      }, null);
      const ModifiedCssStylesheet=isTrue(scopedConfig) ? _styleSheet_hydration(self, CssStylesheet) : CssStylesheet ;
      styleEl.textContent=ModifiedCssStylesheet;
      if(vnode  && !IS_TEXT_NODE(vnode.$element)) vnode.$element.append(styleEl);
    }
    return vnode;
  }
  function assignSlot(self, slot, content, name, assynedSlots, renderedSlotsList, tillMount){
    if(content && isHouxerVNode(content) && !hasOwn(renderedSlotsList, name)){
      whenMounted(self, slot, ()=>{
        slot.replaceWith(content.$element||"");
      })
      assynedSlots.add(name);
      renderedSlotsList[name]=content
    }
  }
  function resolveSlotsFilter(self, vnode){
    let slotElementsList=vnode?.$element && isFunction(vnode.$element.querySelectorAll) ? vnode.$element?.querySelectorAll('slot') : [];
    if( IS_ELEMENT_NODE(vnode.$element) && vnode.$element.localName === 'slot'){
      slotElementsList=[ vnode.$element , ...slotElementsList ];
    }
    if(!len(slotElementsList)) return [];
    const hash=self[$$$ownProperties].hx_hash_;
    const scopedList=[];
    for(const el of slotElementsList.values()){
      if(exists(el.dataset.hx_hash_) && el.dataset.hx_hash_ === hash) scopedList.push(el)
    }
    return scopedList;
  }
  function _$slotHydrationRenderer(self, opts, vnode_build){
    const slots=self[$$$core].slots;
    if(!len(slots) || !vnode_build || !isHouxerVNode(vnode_build) || isHouxerTextVNode(vnode_build)) return vnode_build ;
    const renderedSlotsList={}
    const slot_elements=resolveSlotsFilter( self, vnode_build ) ;
    const assynedSlots=new Tuple()
    for(const slot_el of slot_elements.values()){
      const slotN=slot_el.getAttribute('name') || 'default';
      if(hasOwn(slots, slotN) && !assynedSlots.has(slotN)) {
        assignSlot(self, slot_el, slots[slotN](self), slotN, assynedSlots, renderedSlotsList);
      }
    }
    if(!len(slot_elements) && isNativeElement(vnode_build?.$element) && IS_ELEMENT_NODE(vnode_build.$element) && isEmptyStr(vnode_build.$element.innerHTML.trim()) && !vnode_build?.$element?.localName === 'slot'){
      const forwardSlot=self[$$$core].settings.forwardSlot;
      if(isTrue(forwardSlot)) {
        const slotContent=hasOwn(slots, 'default') ? slots.default(self) : null;
        if(slotContent) vnode_build.$element.append(slotContent.$element);
        assynedSlots.add('default');
        renderedSlotsList['default']=slotContent
      }
    }
    if(!len(renderedSlotsList)) return vnode_build 
    for(const [name, content] of entries(renderedSlotsList) ){
      self[$$$core].slotsFactory.renderedSlotsList[name]=content;
    }
    return vnode_build;
  }
  function injectCustomDirective(self, options, vnode){//custom directives installer
    if(hasProp(options,'directives')){
      for(let [key, value] of entries(options.directives)){
        if(!_validateType(value, [ Object, Function])){
          $Debug(`a directive requires an object of directive hooks or a function to act as a "mounted" hook `, self, true); 
          return;
        }
        define(self[$$$register].directives, has$$_bind(key) ? key.slice(2) : key, {
          value, 
          enumerable, 
          configurable,
          writable
        });
      }
    }
  }
  const configOptionsSettings = keys(ConfigValidator).join(',') ;
  function mapSettingCheck(self, key, setting){
    self=!isHouxerBuild(self) ? null : self
    if(!_mapValue(configOptionsSettings, key)){
      $Debug(`unrecognised settings option found in buildConfig defineConfig  at   at\n"${key} name property`,self, isHouxerBuild(self));
      return false;
    }else if(!_validateType(setting, ConfigValidator[key])){
      $Debug(`${key} config option of buildConfig receives an invalid type\n\nExpects a/an "${ConfigValidator[key].name.toLowerCase()}" type`, self, isHouxerBuild(self));
      return false;
    }
    if(key === 'delimiters'){
      let rv=validateDelimiterConstruct(self, setting);
      if(isFalse(rv)) return false
    };
    return true;
  }
  function setConfig( self, opts ){
    if(!opts.buildConfig || !len(opts.buildConfig)) return false;
    entries(opts.buildConfig).forEach(([key, setting])=>{
      let rv= mapSettingCheck(self, key, setting);
      if(isFalse(rv)) return false;
      define(self[$$$core].settings, key,{
        value:setting, 
        enumerable,
        configurable
      });
    })
    return true
  }
  const globalProps="filters,widgets,directives,handlers,publish,blocks,mixins";
  const exceptionsOptions="children,props";
  const flushOptions="post,sync"
  class _OBS{
    flushType='post'
    constructor(self, propOrGetter, oldValue, callback, options, depps){
      this.propOrGetter=propOrGetter;
      this.oldValue=oldValue;
      this.callback=callback;
      this.self=self
      this.options=options;
      this.depps=depps
      if(isTrue(options.initial)) {
        depps.value = this.callback.call(self.__public_model__, ...this.wrapValueArgs(self));
      }
      if(hasOwn(options, 'flushType')){
        const flushType=options.flushType
        if(!isString(flushType) && !_mapValue(flushOptions, flushType)){
          $Debug(`unrecognised flushType options received\n\nvakue "${flushType}" is not a vailid flushType`, self, true);
        }else this.flushType=flushType
      }
    }
    getNewV(self){
      return getObsCurrentValue(self, this.propOrGetter ) ;
    }
    shouldTrigger(self){
      return !deepEqualityCheck(this.oldValue, this.getNewV(self));
    }
    trigger(self){
      if(this.shouldTrigger(self)){
        this.depps.value=this.callback.call(self.__public_model__, ...this.wrapValueArgs(self));
        this.oldValue=this.getNewV(self);
      }
    }
    wrapValueArgs(self){
      if(isArray(this.oldValue)){
        const list=[]
        const newValue=this.getNewV(self)
        for (const [key, valueX] of this.oldValue.entries()){
          const content=[newValue[key], valueX ]
          list.push(content)
        }
        return list
      }else{
        return [ this.getNewV(self), this.oldValue , function stopEffect(){
          this.stopEffect(self, this);
        } ]
      }
    }
    stopEffect( self, obs){
      self[$$$operands]._OBSERVERS.delete(obs);
    }
  }
  function Observer_Track(self, opts){
    entries(opts.observers||{}).forEach(([name, method])=>{
      EffectObserver.call(self.__public_model__, name, method);
    })
  }
  async function _EffectDependencyNotifier(self){
    self[$$$operands]._OBSERVERS.values().forEach((obs)=>{
      obs.trigger(self);
    })
  }
  function RuntimeUtilitiesProvide( self , opts, vnode ) {
    defineGetter( self.__public_model__ , "_observe" , EffectObserver.bind( self ) ) ;
    defineGetter( self.__public_model__ , "_deferTick" , deferTick.bind( self ) ) ;
    defineGetter( self.__public_model__ , "_useAgent" , useAgent.bind( self ) ) ;
    defineGetter( self.__public_model__ , "_write", WRITE.bind( self ) ) ;
    defineGetter( self.__public_model__ , "_effectHook" , EffectAdapterHook.bind( self ) ) ;
    defineGetter( self.__public_model__ , "_pushEffect" , pushEffect.bind( self ) ) ;
  }
  function __useModelAdapter__( props ) {
    if(!validateCollectionArgs(arguments, {
      min:0,
      max:1,
      validators:[Object],
      required:[false],
      name:"useModel"
    })){
      return undefined
    }
    let self = isHouxerBuild(this) ? this : getCurrentRunningEffect({
      name:"useModel",
      silently:isModelInstance(this)
    });
    if(!self){
      if(isModelInstance(this)){
        for(let [ key, value ] of entries(props)){
          this[key] = value;
        }
      }
      return undefined;
    }
    if( props && !isPObject( props ) ) {
      $Debug( `argument at position 1 of the "useModel" utils macro expects a plain object` , self , true ) ;
      return ;
    } else if( !props || !len(props) ) return self.__public_model__ ;
    for( let [ key , value ] of entries( props ) ) {
      if( !object_Has_Path( self.__public_model__ , key ) && (!isProxySkipped( key ) && key !== '$params')) genericModelPropTransform( self , key , value , '__public_model__' , null , true ) ;
      else if(object_Has_Path( self.__public_model__ , key ) && !isProxySkipped( key ) && ! key === "$params") self.__public_model__._write( { [ key ] : value } ) ;
    }
    return self.__public_model__ ;
  }
  function useModel(props){
    return __useModelAdapter__.call(this, props)
  }
  function checkObserversValidations(self, propOrGetter, callback){
    const errArgs=()=>[ self, true, 'During the call of the "effect" macro'];
    if(!_validateType(propOrGetter, [Function, String, Array, Tuple, Set])){
      $Debug(`proplem setting Observer for tracked Dependency value "${propOrGetter}"\n\n invalid type`, ...errArgs());
      return false
    }else if(!isPFunction(callback)){
      $Debug(`observer callback expects a plain function method`);
      return false
    } else if(isString(propOrGetter) && !object_Has_Path(self.__public_model__, propOrGetter)){
      $Debug(`undefined property "${propOrGetter}" accessed in effect  macro`, ...errArgs());
      return false
    }
    return true
  }
  function getObsCurrentValue(self, propOrGetter){
    const list=[]
     let response;
    if(_validateType(propOrGetter, [Function, String])){
      response=isFunction(propOrGetter) ? propOrGetter() : get_Object_Value(self.__public_model__, propOrGetter);
    }else{
      propOrGetter=!isArray(propOrGetter) ? arrSet(propOrGetter) : propOrGetter;
      propOrGetter.forEach((value)=>{
        response=isPFunction(value) ? value() : get_Object_Value(self.__public_model__, value);
        list.push(unwrap(response));
      })
    }
    return !_validateType(propOrGetter, [Function, String]) ? list : unwrap(response);
  }
  function _observeAdapter_(propOrGetter, callback, options){
    const self=getCurrentRunningEffect({
      name:'observe'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"observe",
      validators:[[Function, Array, String], Function, Object],
      min:2,
      max:2,
      required:[true, true]
    } ))) {
      if(!self) $Debug(`You can't use the "_observe()" adapter within a widget public model instance`);
      return
    }
    return EffectObserver.call(self, ...arguments );
  }
  function observe(propOrGetter, callback, options){
    return _observeAdapter_(propOrGetter, callback, options);
  }
  function EffectObserver(propOrGetter, callback, options){
    if(len(arguments) === 3 && !isPObject(options)){
      $Debug(`parameter 3 arguments of effect observer expects a plain object`);
      return 
    }
    let rv=checkObserversValidations(this, propOrGetter, callback);
    if(isFalse(rv)) return;
    if(isArray(propOrGetter)){
      propOrGetter.forEach((value)=>{
        rv=checkObserversValidations(this, value, callback);
        if(isFalse(rv)) return
      })
    }
    const effectDeps={
      value:undefined
    }
    const observer=new _OBS(this, propOrGetter, getObsCurrentValue(this, propOrGetter), callback, options || {}, effectDeps)
    this[$$$operands]._OBSERVERS.add(observer);
    const self=this
    return function stopEffect(callback){
      if(!self[$$$operands]._OBSERVERS.has(observer)){
        $Debug(`effect observer has already been stopped`, self, true);
        return false;
      }
      observer.stopEffect(self, observer);
      if(isPFunction(callback) ) {
        let returnValue=undefined
        if(hasOwn(callback, effectHookValueKey)) returnValue=callback[effectHookValueKey];
        else returnValue = effectDeps.value;
        callback.call(self.__public_model__, returnValue);
        return true;
      }else if(len(arguments) && !isPFunction(callback)) {
        $Debug(`callback at effect stopper expects a plain function`, self, true);
        return false;
      }
    }
  }
  function map_Events_Fall(self, options, vnode){
    defineGetter(self.__public_model__, '$attrs', new Attrs());
    if(!vnode.props || !vnode.props[$$$Events]) return;
    for(let [ name, value ] of entries(vnode.props[$$$Events])){
      value=value.callback;
      define(self.__public_model__.$attrs, _toCamelCase("on-"+name), { 
        value , 
        enumerable, 
        configurable 
      });
    }
    // delete vnode.props[$$$Events];
  }
  function $construct_With_Signals(self, options, in_build=false, vnode){
    if(in_build) vnode = options
    if(vnode.props && hasOwn(vnode.props, $$$ModelUpdateKey)){
      if(len(vnode.props[$$$ModelUpdateKey])){
        if(!options.signals) options.signals=[];
        if(!hasOwn(vnode.props, $$$Events)) vnode.props[$$$Events] = {}
        for(const [eventName, signal] of entries(vnode.props[$$$ModelUpdateKey])){
          self.__public_model__.$signals[eventName]=new Signal(eventName, signal?.callback || pass, signal?.options);
        }
      }
    }
    const $$events=((in_build ? self[$$$core].opts : vnode)?.props||{})[$$$Events]
    if(!len(options.signals) && !$$events ) return;
    const signals=new Set(options.signals);
    for(const  [ key, event] of entries( $$events || {})){
      if(!hasOwn((vnode?.props||{})[$$$ModelUpdateKey] || {}, key) && signals.has(key)){
        self.__public_model__.$signals[key]=new Signal(key, event?.callback || pass, event?.options);
      }
    }
    for(const signal of (options.signals || []).values()){
      if('resourceModel:IPAddress:Binding' === signal){
        $warn(`"resourceModel:IPAddress:Binding" defined signal is a houxer built in signal name`, self);
        continue;
      }
      if(!hasOwn(self.__public_model__.$signals, signal)){
        self.__public_model__.$signals[signal]=new Signal(signal, pass )
      }
    };
  }
  function resolveCustomFiltersOrBlocks(self, options, optName, vnode){
    if(!hasOwn(options, optName) || !len(options[optName])) return;
    const sName=optName.slice(0, -1)
    for(const [name, filter] of entries(options[optName])){
      if(optName === 'blocks' ? isBuiltinBlocks(name) : _mapValue(BUILT_IN_FILTERS, name)){
        $Debug(`registration failure\nFailed to register the custom ${sName} with the name "${name}\n\n Which collides with a BUILT_IN_${sName.toUpperCase()} name\nregistration FAILED___`,self, true);
        continue;
      }else if(!_validateType(filter, [ Function, Object] )) {
        $Debug(`${sName.at(0).toUpperCase()+sName.slice(1)} must be a function or an object exposing a "${sName}" method option \n\nat        at\n "${name}" ${sName} registration`, self, true);
        continue;
      }
      if(isObject(filter) && (!hasOwn(filter, sName) || !isPFunction(filter[sName]))){
        $Debug(`"${name}" ${sName} object must expose a ${sName} method\n\nregistration FAILED___`, self, true);
        continue
      }
      self[$$$register][optName][name]=filter
    }
  }
  function __Ensure_Renderer(self, options, vnode){
    widgetsSetup(options, self, vnode);
    methodsManager(options, self, vnode);
    resolveCustomFiltersOrBlocks(self, options, 'filters', vnode);
    resolveCustomFiltersOrBlocks(self, options, 'blocks', vnode);
    RuntimeUtilitiesProvide(self, options, vnode);
    injectCustomDirective(self, options, vnode);
    __Generate_Widget_Hash(self);
    return options;
  }
  const alphaNum ='A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,I,i,J,j,K,k,L,l,M,m,N,n,O,o,P,p,Q,q,R,r,S,s,T,t,U,u,V,v,W,w,X,x,Y,y,Z,z,0,1,2,3,4,5,6,7,8,9,$';
  const alpha ='A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,I,i,J,j,K,k,L,l,M,m,N,n,O,o,P,p,Q,q,R,r,S,s,T,t,U,u,V,v,W,w,X,x,Y,y,Z,z'
  const num='0,1,2,3,4,5,6,7,8,9';
  const numRegex=/\d/;
  const alphaNumRegex=/\w/;
  const alphaRegex=/\b/;
  function _generateUUID(length, type) {
    const isAlpha=type === 'alpha';
    const isNum=type === 'num';
    let letters=(isAlpha ? alpha : isNum ? num : alphaNum).split(',');
    let id = '';
    let stack=[];
    for(let i = 0; i < len(letters); i=i){
      const randomIndex = Math.floor(Math.random() * len(letters));
      stack.push(letters[randomIndex]);
      letters.splice(randomIndex, 1);
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * len(stack));
      id += stack[randomIndex];
    }
    return isNum ? Number(id) : id;
  }
  function __Generate_Widget_Hash(self){
    let id=_generateUUID(10).toUpperCase();
    define(self[$$$ownProperties], 'hx_hash_', {value:`_hx_${id}`, configurable, enumerable});
  }
  function _Data_Hydrations(self, options){
    const vnode=self[$$$core].virtualNode;
    if(hasProp(options, 'buildConfig')) setConfig(self, options);
    paramsManager(self, options, false, vnode);
    modelManager(self, options);
    self.__public_model__=Setup_State_Effect(self, self.__public_model__, true);
    entries(self[$$$register].handlers).forEach(([key, handler])=>{
      define(self.__public_model__, key, { 
        value:handler.bind(self.__public_model__),
        enumerable
      });
    })
    computedTokensCompile(self, options)
    transformPublicationPrefix(self, options);
    Observer_Track(self, options);
  }
  class Observer{
    constructor(getter, callback, self){
      this.getter = getter;
      this.callback = callback;
      this.self=self;
      this.value = this.get();
    }
    update() {
      const oldValue = this.value;
      this.value = this.getter();
      if (this.self[$$$operands].PATCH_FLAG && this.self[$$$operands].onRenderTracked && !this.self[$$$operands].garbageWatch){
        deferEventCircleThread(this.self, ()=>{
          deferTick(()=>this.callback(this.value, oldValue));
        })
      }
    }
    get() {
      this.self[$$$core].activeObserver = this;
      const value = this.getter();
      this.self[$$$core].activeObserver = null;
      return value;
    }
  }
  class Dependency {
    constructor(self) {
      this.self=self;
      this.subscribers = new Set();
    }
    depend() {
      if (this.self[$$$core].activeObserver) {
        this.subscribers.add(this.self[$$$core].activeObserver);
      }
    }
    notify() {
      this.self[$$$operands].PATCH_FLAG++
      this.subscribers.forEach((observer) => observer.update());
    }
  }
  function trackDependency(self, dependency) {
    if (self[$$$core].activeObserver) dependency.depend();//call the depend
  }
  function pausePlayEffectScope(self, action){
    if(action === 'pause'){
      self[$$$operands].PATCH_FLAG=0
    }else if(action === 'play'){
      
    }
  }
  function defineProxyScopeProps(obj, config, master){
    const ReactiveEffect=assign(new ReactiveEffectObject(), {
      data_cache:undefined,//for cavged rendrr chsrges
      effectTrigger:pass,//tge pass argument callbact, to be cslled on stream
      effectFlush:new Tuple(),//tuple of effect callbact
      mountWatcher:pass,//to avtivste the effect
      subscribers:new Tuple(),//list of subscritions
      getHandler:pass,//gettrr handlrr, helos in subscrubing to getters
      self:undefined,//widget build instance
      watchGetters:false,
      trackZoom:false,
      effectZoom:false,
      origin:obj,
      onEffectHook:hasOwn(config, 'onEffect') ? config.onEffect : pass,
      onTrackedHook:hasOwn(config, 'onTracked') ? config.onTracked : pass,
      isReadonly:false,
      isShallow:false,
      thisArg:{},
      isStateStream:false
    })
    let value=0;
    define(ReactiveEffect, 'effect_sync', {
      get(){
        ReactiveEffect.getHandler(ReactiveEffect.subscribers.list())
        cleanupSubscribers(ReactiveEffect.subscribers);
        adaptiveStreamHook(ReactiveEffect, master, 'track');
        return value;
      },
      set(valueX){
        value=valueX
        ReactiveEffect.effectTrigger(ReactiveEffect);
        value=0;
        adaptiveStreamHook(ReactiveEffect, master, 'effect');
        return true
      }
    })
    return ReactiveEffect;
  }
  function adaptiveStreamHook(ReactiveEffect, master, type){
    const zoom = `${type}Zoom`;
      const rootEffect = master && isREffObj(master) ? master : ReactiveEffect;
    if(isFalse(rootEffect[zoom])){
      rootEffect[zoom]=true;
      deferTick(()=>{
        rootEffect[`on${type === 'track' ? 'Tracked' : 'Effect' }Hook`]();
      }).then(()=> {
        rootEffect[zoom]=false;
      });
    }
  }
  function subscribeEffect(effObj, sub, master){
    if(!isHouxerBuild(effObj.self) && !(effObj.self || {} )[$$$operands]?.onEffectWatch) pass;
    else if(isHouxerBuild(effObj.self) && (effObj.self || {} )[$$$operands]?.onEffectWatch){ 
      effObj.self[$$$core].effectSubscribers.extend(sub);;
    }else if(isREffObj(master)) {
      if(master.watchGetters) master.subscribers.extend(sub);
    }else {
      effObj.subscribers.extend(sub);
    }
  }
  const EffectReactiveMaster=(master)=>{
    return isREffObj(master) ? master.self : undefined ;
  }
  function proxyEffectDeepConversion(obj, ReactiveEffect, deep, config, master){
    for(let [key , value] of getIterator(obj)){
      if(isToken(value)){
        function refMount(_){
          ReactiveEffect.effect_sync++
        }
        refMount.init=function(eff){
          eff.self=EffectReactiveMaster(master);
        }
        refMount.getHandler=function(subscribers){
          subscribeEffect(ReactiveEffect, subscribers);
          ReactiveEffect.effect_sync;
        }
        _mountTokenEffect(value, refMount);
      }else if(_isProxyStream(value) || isTrue(_validateType(value, [Object, Array, Tuple, Set, Map]) && !isProxySkipped(key) && !(isPFunction(value) && value[$$isHandler]) && !isToken(value) && !isRaw(value))){ 
        if(!_isProxyStream(value)) value=_createStream(value, config, master );
        function effectMount(){
          ReactiveEffect.effect_sync++;
        }
        effectMount.init=function(eff){
          eff.self=EffectReactiveMaster(master);
        }
        _mountProxyStream(value, effectMount, true)
        // ReactiveEffect.mountWatcher( effectMount, function(subscribers){
        //   subscribeEffect(ReactiveEffect, subscribers);
        //   ReactiveEffect.effect_sync;
        // });
        obj[key]=value;
      }
    }
  }
  function streamMutationTransform(args, object, effObj, name, config, master, oldValue){
    const { isReadonly = false , isShallow = false } = config;
    args = [ ...args ]
    const [ target, prop, valueX, receiver ] = args ;
    const desc = {
      ...valueX
    }
    let value = desc.value;
    if(prop === $$$StreamProxyKey) {
      Reflect[name](...args);
      return true;
    }
    if(isReadonly && (name === 'deleteProperty' || !isReadonlyBypasser(value)) ){
      $Debug(`Cannot reassign/mutate a "readonly" stream prop\n\n___MUTATION FAILED___\n........"{}.${prop}" property assignment/mutation \n\n{##} object props are readonly \n.........>>>bypassKey verification failure`);
      return false;
    }else if(isReadonly && (!name === 'deleteProperty' || isReadonlyBypasser(value))){
      value =  value[bypassSymbol]
    }
    if( !isPrimitive(value) && !isShallow && !isToken(value) && !isStream(value) ){
      value = _createStream(value, {
        ...config 
      }, master ) ;
      valueX.value = value;
    }
    function mounter(){
      effObj.effect_sync++
    }
    mounter.getter=function getter(subscribers){
      subscribeEffect(effObj, subscribers)
      effObj.effect_sync;
    }
    _mountReactiveWatcher(valueX, mounter, true);
    Reflect[name](...args);
    effObj.effect_sync++;
    return true;
  }
  function collectionStreamEffectNotifier(effObj, ...args){
    effObj.effect_sync++;
  }
  function createCollectionStream(obj, ReactiveEffect ){
    if(isCollection(obj)){
      function effectNotifier(){
        return collectionStreamEffectNotifier.call(this, ReactiveEffect, ...[ ...arguments ]);
      }
      if(isMap(obj)) obj = _createMapStream(obj, effectNotifier);
      else if(isSet(obj)) obj = _createSetStream(obj, effectNotifier);
      else if(isTuple(obj)) obj= _createTupleStream(obj, effectNotifier);
      else if(isArray(obj)) obj = _createArrayStream(obj, effectNotifier);
    }
    return obj;
  }
  function _createStream(obj, config, master ){
    if(isStream(obj) || isToken(obj) || isDomSpecialConstructor(obj)) return obj
    const response=validateCollectionArgs(arguments, {
      max:3,
      min:1,
      validators:[[Object, Array, Tuple, Set, Map], Object ],
      name:'stream'
    });
    if(!response) return E_Obj;
    config = isPObject(config) ? config : {};
    const { isShallow=false, isReadonly=false } = config;
    const streamMap=new WeakMap();
    const useDeep= !isShallow && isFalse(isShallow);
    const ReactiveEffect = defineProxyScopeProps(obj, config, master );
    ReactiveEffect.isShallow=isShallow;
    ReactiveEffect.isReadonly=isReadonly;
    obj = createCollectionStream(obj, ReactiveEffect);
    if(isTrue(useDeep)) proxyEffectDeepConversion(obj, ReactiveEffect, useDeep, config, master);
    obj = transformProxyStream(obj, ReactiveEffect, config, master);
    define(obj, $$$StreamProxyKey, { 
      value : streamMap,
      enumerable,
      writable
    });
    ReactiveEffect.mountWatcher=function mountWatcher(callback, getHandler){
      ReactiveEffect.effectTrigger=callback;
      if(isFunction(getHandler)) ReactiveEffect.getHandler=getHandler;
      if(hasOwn(callback, 'init')) callback.init(ReactiveEffect);
    }
    streamMap.set(obj, ReactiveEffect);
    const self = getCurrentRunningEffect({
      silently:true
    });
    if(isHouxerBuild(self)) _mountReactiveWatcher(obj, self, true);
    return obj;
  }
  function transformProxyStream(obj, ReactiveEffect, config, master){
    if(_validateType(obj, [Object, Array, Tuple ])) return new Proxy(obj, {
      get(target, prop){
        const getter=()=> Reflect.get(...arguments);
        hydrateEffectSubs(ReactiveEffect)
        if(ReactiveEffect.watchGetters) subscribeEffect( ReactiveEffect, [ getter ]);
        let effect_sync=ReactiveEffect.effect_sync;
        return getter();
      },
      set(target, prop, value, receiver){
        return streamMutationTransform(arguments, obj, ReactiveEffect, 'set', config, master);
      },
      defineProperty(target, prop, value, receiver){
        return streamMutationTransform(arguments, obj, ReactiveEffect, 'defineProperty', config, master);
      },
      deleteProperty(target, prop, value, receiver){
        return streamMutationTransform(arguments, obj, ReactiveEffect, 'deleteProperty', config, master);
      },
      // apply(target, thisArg, args ){
      //   return Reflect.apply(...arguments);
      // }
    });
    else return obj;
  }
  function streamReactiveHook(X, args, name, callback){
    const res = X.prototype[name].call(this, ...args);
    callback.call(this,...args);
    return res;
  }
  function _createTupleStream(tuple, callback){
    class TupleStream extends Tuple{
      constructor(){
        super(...arguments);
      }
      add(){
        return streamReactiveHook.call(this, Tuple, arguments, 'add', callback);
      }
      pop(){
        return streamReactiveHook.call(this, Tuple, arguments, 'pop', callback);
      }
      shift(){
        return streamReactiveHook.call(this, Tuple, arguments, 'shift', callback);
      }
      unshift(){
        return streamReactiveHook.call(this, Tuple, arguments, 'unshift', callback);
      }
      splice(){
        return streamReactiveHook.call(this, Tuple, arguments, 'splice', callback);
      }
      extend(){
        return streamReactiveHook.call(this, Tuple, arguments, 'extend', callback);
      }
      delete(){
        return streamReactiveHook.call(this, Tuple, arguments, 'delete', callback);
      }
      clear(){
        return streamReactiveHook.call(this, Tuple, arguments, 'clear', callback);
      }
      prepend(){
        return streamReactiveHook.call(this, Tuple, arguments, 'prepend', callback);
      }
      replace(){
        return streamReactiveHook.call(this, Tuple, arguments, 'replace', callback);
      }
    }
    return new TupleStream(...tuple.list());
  }
  function _createArrayStream(array, callback){
    class ArrayStream extends Array{
      constructor(){
        super(...arguments);
      }
      push(){
        return streamReactiveHook.call(this, Array, arguments, 'push', callback);
      }
      pop(){
        return streamReactiveHook.call(this, Array, arguments, 'pop', callback);
      }
      shift(){
        return streamReactiveHook.call(this, Array, arguments, 'shift', callback);
      }
      unshift(){
        return streamReactiveHook.call(this, Array, arguments, 'unshift', callback);
      }
      splice(){
        return streamReactiveHook.call(this, Array, arguments, 'splice', callback);
      }
      sort(){
        return streamReactiveHook.call(this, Array, arguments, 'sort' , callback);
      }
      reverse(){
        return streamReactiveHook.call(this, Array, arguments, 'reverse', callback);
      }
      copyWithin(){
        return streamReactiveHook.call(this, Array, arguments, 'copyWithin', callback);
      }
      fill(){
        return streamReactiveHook.call(this, Array, arguments, 'fill', callback);
      }
    }
    return new ArrayStream(...array)
  }
  function _createSetStream(setArg, callback){
    class SetStream extends Set{
      constructor(){
        super(...arguments)
      }
      add(){
        return streamReactiveHook.call(this, Set, arguments, 'add', callback);
      }
      delete(){
        return streamReactiveHook.call(this, Set, arguments, 'delete', callback);
      }
      clear(){
        return streamReactiveHook.call(this, Array, arguments, 'clear', callback);
      }
    }
    return new SetStream(...setArg)
  }
  function _createMapStream(map, callback){
    class MapStream extends Map{
      constructor(){
        super(...arguments);
      }
      set(){
        return streamReactiveHook.call(this, Map, arguments, 'set', callback);
      }
      clear(){
        return streamReactiveHook.call(this, Map, arguments, 'clear', callback);
      }
      delete(){
        return streamReactiveHook.call(this, Map, arguments, 'delete', callback);
      }
    }
    return new MapStream(...map)
  }
  function stream(obj, config){
    return _createStream(...arguments)
  }
  function shallowStream(obj, config){
    return stream(obj, {
      isShallow:true,
      ...( isObject(config) ? config :  {})
    })
  }
  function readonlyStream(obj, config){
    return stream(obj, {
      isReadonly:true, 
      ...( isPObject(config) ? config : {} )
    })
  }
  function shallowReadonlyStream(obj, config){
    return readonlyStream(obj, {
      isShallow:true,
      ...( isObject(config) ? config :  {})
    } );
  }
  function Setup_State_Effect(self, obj ){
    const dependency = new  Dependency(self);
    self[$$$operands].dependency=dependency;
    for(let [key , value] of entries(self.__public_model__.$params)){
      _mountTokenEffect(value, self, true);
    }
    obj=_createStream(obj, {} );
    _mountProxyStream(obj, self)
    return obj;
  }
  function generateDependencySubscriptions(self, subscribers){
    if(!self[$$$operands].onEffectWatch) return;
    subscribers = !isCollection(subscribers) ? [ subscribers ] : arrSet(subscribers);
    self[$$$core].effectSubscribers.extend(subscribers);
    return true;
  }
  function defineGetter(obj, prop, value, desc={}){
    const { enumerable=false, writable=false, debug=false }=desc;
    const descriptor={
      get (){
        return value
      },
    }
    if(writable || debug ){
      descriptor.set=function(valueX){
        if(writable){
          value=valueX
        }
        if(debug){
          $Debug(`"${prop}" prop cannot be assigned`)
        }
      }
    }
    if(isTrue(enumerable)) descriptor.enumerable=enumerable
    return define(obj, prop, descriptor)
  }
  function createCordinationProperties(self, vnode){
    self.__public_model__=new Model();
    let opts=vnode;
    if(isRenderVNodeClass(vnode)){
      opts=vnode.widget_instance || (validHouxerWidget(vnode.type) ? vnode.type : {});
      if(!vnode.widget_instance && validHouxerWidget(vnode.type)) opts=defineWidget(vnode.type);
    }
    // opts= defineWidget(validHouxerWidget( vnode.type) ? vnode.type : validHouxerWidget(vnode) ? vnode : {} );
    defineGetter(self, $$$ownProperties, createObj('OwnProperties',{ 
      name:opts?.name || 'UnknownWidget', 
      slot_name:hasProp(opts, 'props')  ? opts.props[$$slotName] : undefined , 
      isInitialBuild:false ,
      widgetType:undefined,
      hx__VNode:undefined,
      isSelfRecursive:false
    }), {} )
    if(exists(opts.props) && hasOwn(opts.props, $$slotName)) delete opts.props[$$slotName];
    const registra=()=>{
      return createObj( 'Register', { 
        directives:createObj('directives'), 
        filters:createObj('filters'), 
        widgets:createObj('widgets'), 
        handlers:createObj('handlers'), 
        agents:createObj('agents'), 
        blocks:createObj('blocks'),
        mixins:new Tuple(),
        properties:createObj('properties')
      }) 
    }
    defineGetter(self, $$$register, registra() );
    defineGetter(self, $$$operands, createObj('Operands',{ 
      _OBSERVERS:new Set(), 
      _LIFECIRCLEHOOKS:createObj('_LIFECIRCLEHOOKS'), 
      _OPTIONS:createObj('_OPTIONS'),  
      garbageWatch:false, 
      initialized:false , 
      PATCH_FLAG:0, 
      onRenderTracked:false,
      onEffectWatch:false, 
      modelMethods:createObj('modelMethods')
    }));
    defineGetter(self, $$$core ,createObj('core',{
      GeneticProvider:opts,
      virtualNode:vnode,
      utils:createObj('Utils'), 
      posixVNode:undefined,
      settings:createObj('settings', Compiler_Config_Options), 
      slots: new Slots(), 
      rootNodesList:[],
      map:createObj('map',{ 
        is_hyperscript:false 
      } ), 
      activeObserver:null, 
      effectSubscribers:new Tuple(),
      slotsFactory:createObj('slotsFactory', {
        renderedSlotsList:createObj('renderedSlotsList'),
      })
    }));
    defineGetter(self[$$$core], '$globals', createObj('$globals',{
      register:createObj('Register', registra() ),
      setupOptions:createObj('setupOptions'), 
       published:createObj('Published'), 
      legalOptions:createObj('legalOptions'), 
      controller:new Set(),
    }) );
    defineGetter(self, $$$compiler, createObj('compiler', {
      templateProcessor:pass,
      slotsTransformRender,
      slotRendererNotified:false,
      whenMountedHooks:new Tuple(),
      hoistedNodelist:new Tuple(),
      composedSlots:createObj('composedSlots'),
      compilerFlags:{},
      rawChildren:()=> undefined,
      VN_Tree:[]
    }));
    defineGetter(self.__public_model__, '$signals', new Signals());
    getHouxerBuildInstance(self, opts);
    return [ opts, vnode ];
  }
  function maintainCompilerFlag_flag(self, effect){
    let flag=0;
    define(self[$$$compiler].compilerFlags, 'flags', {
      get(){
        return flag
      },
      set(newFlag){
        flag = newFlag;
        effect(self, flag)
        flag=0
        return true;
      }
    })
  }
  function triggerSlotsElementsEffect(self, renderedSlotsList, rawChildren){
    const observer = { 
      mutated:false, 
      willMutate:false, 
      updated_hooks:new Tuple(),
      effectFlush:new Tuple(),
      active:false
    } ;
    const data_set=slotsGeneticProvider(self, self[$$$core].opts, self[$$$core].virtualNode, true, true, rawChildren);
    const slotsCore=_induceSlotContents(self, self[$$$core].opts, data_set, createObj("renderedSlotsList"));
    let index=0;
    for(const [key, node] of entries(renderedSlotsList)){
      if(!hasOwn(slotsCore, key)) {
        inDOMElementNodesRemover(self, node)
        delete renderedSlotsList[key]
        continue
      }
      let vnode=slotsCore[key](data_set[1], true) ;
      Render_Effect_Reactive_Transform(data_set[1], node, vnode, observer);
      self.__public_model__._deferTick( function( resolve, reject ){
        if(len(observer.effectFlush)) {
          callSetHooks(self, observer.effectFlush  );
        }
      }).then(function(){
        if( observer.mutated && len(observer.updated_hooks ) && len(observer.effectFlush)) {
          callSetHooks( self , observer.updated_hooks, null, self.__public_model__ ) ;
          observer.updated_hooks.clear();
        }
      }) ;
      index++
    }
  }
  function slotsTransformRender(self, observer, rawChildren){
    const notified=self[$$$compiler].slotRendererNotified;
    if(isTrue(notified)) return;
    self[$$$compiler].slotRendererNotified=(true);
    const renderedSlotsList=self[$$$core].slotsFactory.renderedSlotsList
    if(!len(renderedSlotsList)) return;
    self.__public_model__._deferTick(function(){
      triggerSlotsElementsEffect(self, renderedSlotsList, rawChildren);
    }).then(()=>{
      self[$$$compiler].slotRendererNotified= (false);
    })
  }
  function slotDebuger(self){
    return (slotName, slotContent)=>{
      $Debug(`
      Problem when mapping slot element,\n\nMore than one vnode slot name seems to be pointing to the  same slot\nat at "${slotName}" slot Directive  of "${slotContent.$element.outerHTML} \nmaybe you should wrap them within a single template wrapper`, self, true, "During the induction of slots contents");
      $warn(`Note: unnamed contents will be automatically mapped  as "default" slot\nWon't conflict with other default contents`, self );
      return false;
    }
  }
  function smartSlotMapping(self, slotContent, slotName, defaultSlotsRecord, slotsCore, patchFlags){
    if(!slotName === 'default' && !hasOwn(slotsCore, slotName) ){
      slotsCore[slotName]=function slotRender() {
        return  new HouxerFragmentVNode(patchFlags || self, isArray(slotContent) ? slotContent : [ slotContent ] )
      }
    }else if(slotName === 'default'){
      defaultSlotsRecord.push(slotContent)
    }else{
      slotDebuger(self)(slotName, slotContent);
      return;
    }
  }
  function _induceSlotContents(self, options, setData , renderedSlotsList){
    let [ children, patchFlags, Flaghx__VNode ] = setData;
    const defaultSlotsRecord=[];
    const slotsCore=renderedSlotsList ? renderedSlotsList : self[$$$core].slots;
    if(!len(children) ) {
      defineFallbackSlotsToken(self, options, defaultSlotsRecord, slotsCore);
      return renderedSlotsList;
    }
    const hx__VNode=options.children?.hx__VNode;
    const is_hyperscript= options.build ? true : false;
    if(exists(children) && len(children) === 1 && isLazyRender(children[0])){
      const evaluatedValue=children[0][lazyKey]()
      if(isArray(evaluatedValue)) children=evaluatedValue;
    }
    for(let slotContent of (children || [])?.values() ){
      slotContent=lazyUnwrap(slotContent)
      if(isPrimitive(slotContent) && exists(slotContent)){
        slotContent=new HouxerTextVNode(patchFlags, String(slotContent), hx__VNode);
        defaultSlotsRecord.push(slotContent);
      }else if(isHouxerVNode(slotContent) || isRenderVNodeClass(slotContent)){
        if(isRenderVNodeClass(slotContent)) slotContent =createInitialRenderBuild(patchFlags, !isArray(slotContent) ? [ slotContent ] : slotContent , hx__VNode);
        const slotName=slotContent.slot_name || 'default';
        if(IS_ELEMENT_NODE(slotContent.$element) && slotContent.$element.localName === 'template'){
          slotContent=new HouxerFragmentVNode(patchFlags, slotContent.NodeList);
        }
        smartSlotMapping(self, slotContent, slotName, defaultSlotsRecord, slotsCore, patchFlags);
      }else if(isSlotInstance(slotContent) && len(slotContent.slots)){
        for(let [name, slot] of entries(slotContent.slots)){
          slot = lazyUnwrap(isPFunction(slot) ? slot(patchFlags) : slot );
          if(!isChildrenNode(slot)){
            $Debug(`Unexpected "${getType(slot)}" data type passed to renderSlots  instance\n at   ... ^ "${name}" slot"\n\nexpecting a houxer valid  DOM instance value`,self, true);
            return;
          }
          slot=createInitialRenderBuild(patchFlags, !isArray(slot) && !isLazyRender(slot) ? [ slot ] : slot , hx__VNode);
          if(IS_ELEMENT_NODE(slot.$element) && slot.$element.localName === 'template'){
            slot=new HouxerFragmentVNode(patchFlags, slotContent.NodeList);
          }
          smartSlotMapping(self, slot, name, defaultSlotsRecord, slotsCore, patchFlags);
        }
      }
    }
    if(len(defaultSlotsRecord)){
      slotsCore.default=function slotRender() {
        return _getNodeListResponse(defaultSlotsRecord, patchFlags)
      }
    }
    if(is_hyperscript ) defineFallbackSlotsToken(self, options, defaultSlotsRecord, slotsCore);
    return renderedSlotsList
  }
  function defineFallbackSlotsToken(self, options, defaultSlotsRecord, slotsCore){
    function factory(name){
      return function slotRender(def){
        if(len(arguments) && def && !isChildrenNode(def) || (isAFunction(def) && !isChildrenNode(def()))){
          $Debug(`Render functions default slot content requires to be a render function also`, self, true);
           return null;
        }else if(def && isChildrenNode(def)) {
          def=isPFunction(def) ? def(self) : def;
          return defineVNode({
            type:"slot", 
            props:{ 
              name 
            },
            children:def 
          })
        }
        return defineVNode({
          type:"slot", 
          props:{ 
            name 
          }
        });
      }
    }
    const o_slots=new Tuple(...(options.slots && len(options.slots) ? options.slots : [ "default" ]) );
    if(!o_slots.has("default")) o_slots.add("default");
    for(const sn of o_slots.values()){
      if(!hasOwn(self[$$$compiler].composedSlots, sn)){
        self[$$$compiler].composedSlots[sn]=factory(sn);;
      }
    }
  }
  function _$instanciateModelProps(self){
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    if(isBuiltinWidgetBuild(self)) maintainCompilerFlag_flag(self, (instance)=>{
      self.__public_model__._pushEffect();
    })
  }
  function $ensureLifeCircleHooks(self, options, vnode){
    const hooks="preBuild,postBuild,postMount,preMount,postUpdate,preUpdate,preDestroy,postDestroy,onTracked,onEffect,onCatch,onSlotEffect,onSlotRender";
    const dirHKAlibi={ 
      init_hook:'preBuild',
      mounted_hook:'postMount',
      created_hook:'postBuild',
      updated_hook:'postUpdate',
      destroyed_hook:'postDestroy'
    }
    let customDirHk={}
    if(vnode[$$$customDirs]){
      entries(vnode[$$$customDirs]).forEach(([key, dirhk])=>{
        if(len(dirhk)){
          customDirHk[dirHKAlibi[key]]=function(){
            callSetHooks(self, dirhk, null, self.__public_model__);
          }
        }
      })
      delete vnode[$$$customDirs];
    }
    hooks.split(',').forEach((hookN)=>{
      if(options[hookN] || len(customDirHk)){
        if( len( customDirHk) &&  hasOwn(customDirHk, hookN)){
          let thisHook=customDirHk[hookN];
          const user_defined_callback=vnode[hookN] || pass;
          options[hookN]=function(utils){
            if(isPFunction(thisHook)) thisHook();
            if(user_defined_callback) user_defined_callback.call(self.__public_model__, utils)
          }
        }
        self[$$$operands]._LIFECIRCLEHOOKS[hookN]=options[hookN]||pass;
      }else self[$$$operands]._LIFECIRCLEHOOKS[hookN]=pass;
    })
    if(isFalse(self[$$$operands].initialized)) callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.preBuild,'preBuild');
  }
  function callbackHookWithCatch(self, hook, name){//this function calls a lifecircle hook with a catch debugger
    if(isPass(hook)) return
    try{
      hook.call(self.__public_model__);
    }catch(err){
      $Debug(`${name} hook \n\n`,self, true, `during the call of the "${name}" LifeCycle hook` );
      $Debug(err)
    }
  }
  function RuntimeTokenDir(self, options, vnode){
    const hasToken=vnode.props && hasProp(vnode.props, $$$$dir__ref$$$$);
    if(!hasToken) return;
    self[$$$ownProperties]['dir--ref']=vnode.props[$$$$dir__ref$$$$];
    delete vnode.props[$$$$dir__ref$$$$];
  }
  const ppK=Symbol();
  function slotsGeneticProvider(self, options, vnode, isRerender=false, inSlot, rawChildren){
    if(!vnode.children) return;
    const hx__VNode= vnode.children?.hx__VNode;
    const patchFlags = inSlot ? vnode[ppK] : vnode.children?.patchFlags;
    const is_hyperscript = patchFlags ? patchFlags[$$$core].map.is_hyperscript : false;
    let childrenRender= inSlot && !hasOwn(vnode.children, 'NodeList') ? vnode?.children : vnode.children?.NodeList;
    if(is_hyperscript) childrenRender = rawChildren;
    if(!inSlot && !isRerender) vnode[ppK]=patchFlags
    const fallthrough=self[$$$core].fallthrough ;
    let children=isPFunction(childrenRender) ? childrenRender(patchFlags, hx__VNode, fallthrough, isRerender) : childrenRender ;
    if( isFunction( children ) ) {
      children.$$patchFlags$$ = patchFlags;
      children = children( patchFlags ) ;
    }else if(isArray(children)){
      const childrenArr= new Set();
      children.values().forEach((child)=>{
        if( isPFunction( child ) ) {
          child.$$patchFlags$$ = patchFlags;
          child = child( patchFlags ) ;
        }
        childrenArr.add(child);
      })
      children= arrSet(childrenArr);
    }
    children = children && !isArray( children ) ? [ children ] : exists(children) ? children : [] ;
    return [ children, patchFlags, hx__VNode ] ;
  }
  function $fallThroughEngine(self, options, vnode){
    if(!options.fallthrough) return;
    let data;
    let subscribers;
    try{
      [ subscribers , data ] = effectDependencyTracking(self , function(){
        return options.fallthrough.call(self.__public_model__);
      })
    }catch(err){
      $Debug(`Encountered an error when trying to run the fallthrough option method`, self, true);
      $Debug(err, self);
      return;
    }
    if(isNull(data)){
      $Debug(`The fallthrough option returns a nullish value \n\nReturning null is an invalid semantic `, self, true);
      return;
    }
    if(subscribers && len(subscribers)) self.__public_model__._observe(subscribers, function(){
      self[$$$core].map.$$$fallthrough=options.fallthrough.call(self.__public_model__) ;
      runtimeSlotsFallThrough(self, options, {}, self[$$$core].virtualNode )
      self[$$$compiler].slotsTransformRender(self);
    });
    self[$$$core].map.$$$fallthrough=data;
  }
  function runtimeSlotsFallThrough(self, options, patch, vnode ){
    if(!vnode.props && !hasProp(vnode.props||{}, $$$fallthrough ) ) return;
    if(!patch) $fallThroughEngine(self, options, vnode);
    const value=self[$$$core].map?.$$$fallthrough;
    if(hasOwn(vnode, genericKeyProp) && hasOwn(self[$$$core].map, '$$$fallthrough') ){
      const genre=vnode[genericKeyProp];
      genre.propsTraverse(options, genre.hx__VNode, value, patch)//calls the consume_Widget_Props method in houxer build 
    }
    const fallthrough=vnode.props[$$$fallthrough];
    const prop=fallthrough?.prop;
    if(!hasOwn(self[$$$core].map, '$$$fallthrough')) return;
    const hx__VNode= vnode?.children?.hx__VNode;
    const patchFlags = vnode?.children?.patchFlags;
    if(isFalse(destructWarn(prop, value, self))) return;
    if(isDestructureSyntax(prop)){
      const fallThroughProps = createObj('fallthrough');
      fallThroughProps[$$dexTransformKey]=hx__VNode.VNodeManager.dexTransform
      self[$$$core].fallthrough=fallThroughProps;
      fallThroughProps[$$dexTransformKey].sourcesArray.push(value)
      fallThroughProps[$$dexTransformKey].syntaxArray.push(prop)
    }else self[$$$core].fallthrough=createObj('fallthrough', {[prop]:value});
  }
  function defineLateGlobalProps(self, build){
    if(isHouxerVNode(build)) useModel.call(self, { $element:build.$element});
  }
  function isInitialBuild(self){
    return isHouxerBuild(self) && isTrue(self[$$$ownProperties].isInitialBuild)
  }
  function mapPublicationsTraverse(self, opts){
    if(!hasOwn(opts, 'publish')) return;
    const [ subscribers, value ]=effectDependencyTracking(self, ()=>{
      return opts.publish.call(self.__public_model__)
    });
    if(!isPObject(value)) {
      $Debug(`Publish method option expects a plain object as a return value`, self, true);
      return;
    }
    const globalBoard= isInitialBuild(self) ? self[$$$core].$globals.published : self[$$$core]._root[$$$core].$globals.published;
    for(const [key, valueX] of entries(value)){
      define(globalBoard, key, { 
        value: valueX, 
        enumerable 
      })
    }
  }
  function transformPublicationPrefix(self, opts){
    if(!hasOwn(opts, 'transform')) return;
    const globalBoard= isInitialBuild(self) ? self[$$$core]?.$globals.published : (self[$$$core]._root||{})[$$$core]?.$globals.published;
    for(let [ key, valueX] of getIterator(opts.transform)){
      let keyName = isArray(opts.transform) ? valueX : key ;
      if( !_validateType(keyName, [String, Symbol])){
        $Debug(`Arrays value of Transform option expects a string / Symbol values of published property names\n\n........"${keyName}"`, self, true);
        return
      }
      let defaultValue;
      if(!hasOwn(globalBoard, keyName)){
        if(isPObject(valueX) && hasProp(valueX, 'default')){
          if(!isPFunction(valueX.default)) defaultValue=valueX.default
          else{
            defaultValue = !isAFunction(valueX.default) ? valueX.default.call(self.__public_model__) : valueX.default()
          }
        }else{ 
          $Debug(`No published props with the provided transform key "${keyName}"\n\nUnrecognized transform property`, self, true);
          return;
        }
      }
      let transformed= get_Object_Value( globalBoard , keyName );
      if(isPObject(valueX) && hasOwn(valueX, 'transform')){
        if(!isPFunction(valueX.transform)){
          $Debug(`transform option of "${key}" transform property expects a function`, self, true);
          return 
        }
        transformed = !isAFunction(valueX.transform) ? valueX.transform.call(self.__public_model__, transformed ) : valueX.transform(transformed);
      }
      if(!hasOwn(globalBoard, keyName) && !exists(transformed) && hasProp(valueX, 'default') && exists(defaultValue)) transformed=defaultValue ;
      if(isReactiveToken(transformed) || isShallowReadonlyToken(transformed)){
        _mountTokenEffect(transformed, self, true);
      }
      let aliasKey=keyName;
      if(isPObject(valueX)){
        if(!hasOwn(valueX, 'alias')){
          $Debug(`transform prop "${keyName}" object expects an "alias" property`, self, true);
          return;
        }else if(!_validateType(valueX.alias, [ String, Symbol])){
          $Debug(`"${keyName}" transform alias property expects a String or a Symbol`, self, true);
          return;
        }else if(!exists(valueX.alias)){
          $Debug(`alias property of "${keyName}" transform property is an empty string or undefined prop naming`, self, true);
          return
        }else if(_validateType(valueX, [String, Symbol])){
          valueX={ alias:valueX };
        }
        aliasKey = valueX.alias;
      }
      if(object_Has_Path(self.__public_model__, aliasKey)){
        $Debug(`"${aliasKey}" property of transform conflicts with an existing model property\n\nTry configuring an alias property instead\n\n............at "${keyName}"`, self, true);
        return;
      }
      define( self.__public_model__ , aliasKey , { 
        value : transformed  ,
        enumerable , 
        configurable 
      } ) ;
    }
    return true;
  }
  function traverseMixins_Inheritance(self, options){
    if(!hasOwn(options, 'mixins') && !len(options.mixins)) return;
    for(const [ index, mx ] of entries(options.mixins)){
      if(isPFunction(mx) ){
        
      }
    }
  }
  function getHouxerBuildInstance(self, options){
    if(!hasOwn(options, 'hx__VNode') && !isHouxerVNode(options['hx__VNode'])) return;
    self[$$$ownProperties].hx__VNode=options['hx__VNode'];
  }
  function _Houxer_Build( options ) {
    const [ opts, vnode ] = createCordinationProperties( this , options ) ; //create properties;
    sanitizedOptions( this , opts, vnode ) ;//sanitize received options
    $ensureLifeCircleHooks( this , opts, vnode ) ;
    setConfig(this, opts, vnode ); 
    $construct_With_Signals(this, opts, false, vnode);
    map_Events_Fall(this , opts, vnode);
    __Ensure_Renderer(this, opts, vnode);
    this[$$$compiler].templateProcessor = function (self, build, rerender ){
      if(!rerender) build=_$slotHydrationRenderer(self, opts, build);
      build =  _hydrate_props(opts, self, build);
      build=_preCompile_StyleSheet(opts, self, build);
      RuntimeTokenDir(self, opts, vnode);
      defineLateGlobalProps(self, build);
      return build;
    }
    resolveBuildLab(this, opts, vnode);
    resolve_Proto_Call(this, opts, vnode);
  }
  function resolveBuildLab(self, options){
    self[$$$core].build=options.build || options.template || options.markdown 
    self[$$$core].opts=options;
  }
  function isRender(build){
    return isPFunction(build) && build.name === 'render';
  }
  function $$houxerPower(){
    
  }
  function getComposersContext(self, ){
    const adapters=createObj("Adapters", {
      signals:self.__public_model__.$signals,
      attrs:self.__public_model__.$attrs,
      slots:self[$$$compiler].composedSlots,
      use:use.bind(self)
    });
    for(const [key, macro] of entries(assign( adapters, self[$$$core].utils))){
      define(adapters, key, { 
        value:macro, 
        enumerable 
      })
    }
    return adapters;
  }
  function trackTemplateSource(self, selector, fall, hx__VNode, ssc){
    fall = fall || {};
    if(ssc) fall= smartDextCtxMerging(fall, ssc);
    let render = pass;
    const core_build=self[$$$core].build;
    inDomCaveatRemodeling(self);
    if(isString(core_build)){
      render = (instance, update)=> _HouxerTemplateParser(self[$$$core].build, instance, false, hx__VNode, fall);
      self[$$$core].render=render;
    }else if(isNull(core_build) && selector){
      self[$$$core].build=_GenerateRoot(selector, self)?.innerHTML || ''
      render = (instance, update)=> _HouxerTemplateParser( self[$$$core].build, instance, false, hx__VNode, fall);
      self[$$$core].render=render;
    }
    self[$$$core].map.is_hyperscript=false
    return render
  }
  function createGarbageCollector(self){
    self[$$$compiler][garbageKey]={
      postBuild:new Tuple(),
      postUpdate:new Tuple(),
      postMount:new Tuple(),
      postDestroy:new Tuple(),
      preDestroy:new Tuple(),
      preUpdate:new Tuple(),
      preMount:new Tuple(),
      onEffect:new Tuple(),
      onTracked:new Tuple(),
      onCatch:new Tuple()
    }
  }
  function mapGarbargeHooks(self){
    for(const [name, tuple] of entries(self[$$$compiler][garbageKey])){
      if(!len(tuple)) continue;
      function hook(){
        tuple.list().forEach(function(fn){
          callbackHookWithCatch(self, fn, name );
        })
      }
      const joinder=self[$$$operands]._LIFECIRCLEHOOKS[name];
      if(isPass(joinder)) self[$$$operands]._LIFECIRCLEHOOKS[name]=hook;
      else {
        self[$$$operands]._LIFECIRCLEHOOKS[name]=function(){
          hook();
          callbackHookWithCatch(self, joinder, name );
        }
      }
    }
    delete self[$$$compiler][garbageKey];
  }
  function traverseBuildWidgetTemplate(self){
    const normalizer=self[$$$core].virtualNode[$buildWidgetNormalizerKey];
    const instance = isBuiltinBuildWidget(self) ? self.__public_model__.$params.self.data : normalizer.BUILD_NORMALIZER[$$$core].GeneticProvider;
    const factory_render=normalizer(instance, self);
    self[$$$core].build=factory_render;
    if(hasOwn(factory_render, 'template')) {
      self[$$$core].opts.template=factory_render.template;
      delete factory_render.template;
    }
    delete self[$$$core].virtualNode[$buildWidgetNormalizerKey];
    self[$$$compiler].parentContext=factory_render.parentContext;
    if(factory_render.parentContext?.hx__VNode){
      factory_render.parentContext.hx__VNode.LabContext=factory_render.parentContext.props;
    }
    const parentContext = factory_render.parentContext;
    if(isBuiltinSelfWidget(self)){
      self[$$$core].virtualNode.GeneticProvider[factoryHXSelfInstance]=true;
      parentContext.instance[factoryHXSelfInstance]=true
      delete normalizer.BUILD_NORMALIZER;
    }
    delete factory_render.parentContext;
    return parentContext;
  }
  function transformBuiltinTradeOFF(self){
    const normalizer=self[$$$core].virtualNode[$buildWidgetNormalizerKey];
    const { template, is_hyperscript } = normalizer;
    let build = template;
    if(is_hyperscript){
      build = function build(params, ctx ){
        return ()=> normalizer.template;
      }
    }
    const context = assign({}, normalizer);
    delete context.template;
    delete self[$$$core].virtualNode[$buildWidgetNormalizerKey];
    self[$$$compiler].parentContext=context;
    self[$$$core].build=is_hyperscript ? build : normalizer.template;
    return [ context, normalizer ];
  }
  function handleBuildGenerator(self, selector){
    let context;
    let normalizer;
    if(isBuiltinBuildWidget(self) || isBuiltinSelfWidget(self)) {
      context = traverseBuildWidgetTemplate(self);
    }else if(isBuiltinWidgetBuild(self)) [ context, normalizer ] = transformBuiltinTradeOFF(self);
    let render;
    if(isFunction(self[$$$core].build)){
      let responseRender;
      let renderer;
      createGarbageCollector(self);
      try{
        if(!isBuiltinWidgetBuild(self)) widgetSlotsManager(self, self[$$$core].opts, self[$$$core].virtualNode);
        installCurrentRunningEffect(self);
        renderer = self[$$$core].build.call(undefined, self.__public_model__.$params, getComposersContext(self), $$houxerPower );
        reinstatePreviousRunningEffect();
        responseRender=renderer;
        
        if(isAFunction(self[$$$core].build) && !isPFunction(renderer) ) responseRender=()=>renderer;
      }catch(err){
        $Debug(`Error during the call of the build function`,self, true, DebugFlags.build);
        if(isXtruct(self[$$$core].build)){
          $Debug(`build options method seems to be a constructor function`, self);
        }else $Debug(err, self);
        return ;
      }
      mapGarbargeHooks(self);
      if(isModelInstance(renderer) && (!isFunctionBasedBuild(self) || isInitialBuild(self))) {
        const options = self[$$$core].opts;
        self[$$$core].build=hasOwn(options, "template") ? options.template : null ;
        const templateRender= trackTemplateSource(self, selector, null, context?.hx__VNode, context?.props || undefined )(context?.self || self );
        if(isBuiltinBuildWidget(self) || isBuiltinSelfWidget(self)) { 
          const tagName=`hx:${isBuiltinBuildWidget(self) ? 'build' : 'self' }`;
          self[$$$core].build=`<${tagName} $$bind="${keys(context?.props || {})[0] || '{}'}">${self[$$$core].build}</${tagName}>`;
        }
        return templateRender
      }
      if(!isPFunction(responseRender) && !isAFunction(self[$$$core].build) ){
        $Debug(`Error during the call of ${ !isFunctionBasedBuild(self) ? 'the build function' : 'functional widget' } context
          \nfailed to return a render function when returning the build method::\nCross-Check your returned renderable Data as This may lead to
          Unexpected results during DOM nodes Compilation`, self, true, DebugFlags.build);
        return false;
      }else if(!isChildrenNode(responseRender())){
        $Debug(`value not a valid Houxer-DOM instance`, self, true);
        return false;
      }
      self[$$$core].map.is_hyperscript=true;
      self[$$$core].render= function factoryRender(instance, update=false){
        let response=lazyUnwrap(responseRender());
        return !isArray(response) ? [ response ] : response ;
      };
    }else {
      if(!isBuiltinWidgetBuild(self)) widgetSlotsManager(self, self[$$$core].opts, self[$$$core].virtualNode);
      render=trackTemplateSource(self, selector, context?.hx__VNode, context?.props );
    }
    return self[$$$core].render(context?.self || self);
  }
  function inDomCaveatRemodeling(self){
    for(const [ name, item] of entries(self[$$$register].widgets)){
      if(hasUpperCase(name)) self[$$$register].widgets[_to_kebab_case(name)]=item;
    }
    for(const [ name, item] of entries(self[$$$register].directives)){
      if(hasUpperCase(name)) self[$$$register].directives[_to_kebab_case(name)]=item;
    }
  }
  function resolve_Proto_Call(self, opts){
    new Promise((resolve, reject)=>{
      
    }).then((data)=>{
      if(!self[$$$operands].hasMountProto){
      }
      return self;
    })
    return self;
  }
  function _GenerateRoot(nodeSelector, self){
    if(isNull(nodeSelector)){
      $Debug(`No node model or selector value passed for deployment`, self, true);
      return;
    }
    let domRoot;
    if(isString(nodeSelector)){
      domRoot=document.querySelector(nodeSelector);
      if(!isNativeElement(domRoot)){
        $Debug(`Error generating element, target not a valid native element instance`, self, true);
        return;
      }
    }else if(isNativeElement(nodeSelector) || nodeSelector.isHouxer_Fragment || nodeSelector === document){
      domRoot=nodeSelector;
    }
    return domRoot
  }
  function getGlobalRegistery(self){
    return self[$$$core].$globals ;
  }
  function mergeRegisteries(self){
    entries(self[$$$core].$globals.register).forEach(([name, value])=>{
      for(let [key, content] of entries(value)){
        if(!hasProp(self[$$$register][name], key)){
          self[$$$register][name][key]=content
        }
      }
    });
    assign(self.__public_model__, self[$$$register].properties);
  }
  function validateRegistryProvider(self){
    const registeredOpts=getGlobalRegistery(self).legalOptions;
    const _opts=self[$$$operands]._OPTIONS;
    for(let [ key, opt] of entries(_opts)){
      if(!_mapValue(registeredOpts, key)){
        $Debug(`Unrecognised option found\n\n"${key}" option is not a valid widget option or not registered,
        \n\nYou can register this option by passing an "optionRegistry" object prop to "build.controller({})" method as an object argument method`, self, true);
        return;
      }else if(!_validateType(opt, registeredOpts[key])){
        $Debug(`The provided "${key}" option validation failed on the required type\n\n
        Type of "${getType(opt)}"" found`,self, true );
        return;
      }
      
    }
  }
  function createPortalEntryDisplay(self){
    if(!isBuiltinPortalWidget(self)) return;
    const target=unToken(self.__public_model__.$params.target);
    const portalElement=target ? _GenerateRoot(target) : undefined;
    if(!portalElement){
      $Debug(`Unable to generate portal element\n\nTarget not existing in the current document model layer`, self, true);
      return;
    }else if(!IS_ELEMENT_NODE(portalElement) && !IS_DOCUMENT_FRAGMENT_NODE(portalElement) && !IS_DOCUMENT_NODE(portalElement)){
      $Debug(`Mount target for Portal widget is not a valid element node`, self, true);
      return;
    }
    return portalElement
  }
  function widgetSlotsManager(self, options, vnode){
    runtimeSlotsFallThrough( self , options, null, vnode ) ;
    const setData = slotsGeneticProvider( self , options, vnode );
    _induceSlotContents( self , options , setData || [] ) ;
    for(const [key, content] of entries(self[$$$core].slots)){
      self[$$$compiler].composedSlots[key]=function slotRender(){
        return defineVNode({
          type:'slot', 
          props:{ 
            name: key 
          }
        });
      }
    }
  }
  function prefixManagement( self ) {
    const options = self[$$$core].opts ;
    mapPublicationsTraverse(self, options) ;
    validateRegistryProvider( self ) ;
    mergeRegisteries( self ) ;
    _$instanciateModelProps( self ) ;
  }
  const isGettersObject=computed=>isPObject(computed) && ( isPFunction(computed.get) && ( !hasOwn(computed, 'set') ? false : isPFunction(computed.set) ) );
  class computedTokenCache {
    computedTokenData = pass
    constructor( callback, config ) {
      this.computedTokenData=callback;
      this.computedTokenData.config = config || {};
    }
    transformer(prop){
      return {
        computedTokens:{
          [prop]:this.computedTokenData
        }
      }
    }
  }
  const isComputedMacro=value=> value instanceof computedTokenCache;
  function _computed_(callback, config){
    const res=validateCollectionArgs(arguments, {
      min:1,
      max:2,
      name:'computed',
      validators:[[Function, Object], Object ]
    })
    if(!res && !isPFunction(callback) && !isGettersObject(callback)){
      $Debug(`computedToken macro at Parameter 1 expects a getter function or a descriptor object of a "get" and an optional "set" property methods`, self, true);
      return;
    }
    const self=getCurrentRunningEffect({
      name:'computedToken',
    })
    if(!isHouxerBuild(self)) return new computedTokenCache(callback, config || {});
    const computed=hydrateComputedTokenTransform(self, callback, true, config || {});
     _mountTokenEffect(computed, self);
    return computed;
  }
  function computedToken(callback, config){
    return _computed_.call(this, ...arguments);
  }
  function composedTokenHydration(self, computed, config){
    const [ subscribers, value ] = effectDependencyTracking(self, ()=>{
      return ( isPFunction(computed) ? computed : computed.get).call(self.__public_model__);
    } );
    if(isPFunction(computed)) return [ readonlyToken(value, {
      isComputed:true ,
      ...( config || {} )
    }), subscribers ];
    return [ factoryToken(function(track, effect, deepTranform){
      const descriptor={
        get(){
          track();
          return computed.get.call(self.__public_model__, ...arguments);
        },
        isComputed:true,
        ...( config || {} )
      }
      if(hasOwn(computed, 'set') && isPFunction(computed.set)){ 
        descriptor.set=function(){
          effect();
          return computed.set.call(self.__public_model__, ...arguments);
        }
        if(descriptor.isReadonly) delete descriptor.isReadonly;
      }else descriptor.isReadonly=true;
      return descriptor;
    }), subscribers ];
  }
  function hydrateComputedTokenTransform(self, computed, composed, config){
    if(composed && !isPFunction(computed) && !isGettersObject(computed)){
      $Debug(`computedToken macro at Parameter 1 expects a getter function or a descriptor object of a "get" and an optional "set" property methods`, self, true);
      computed = pass;
    }
    const [ computedTokenData, subscribers ] =composedTokenHydration(self, computed, config);
    computedTokenData[refInternalEffectKey][ '[[[computed__Token]]]' ] = true;
    computedTokenData[refInternalEffectKey].computed=( isPFunction(computed) ? computed : computed.get ).bind(self.__public_model__)  ;
    if( len( subscribers ) ) {
      self.__public_model__._observe( subscribers , () => {
        if( isComputedToken( computedTokenData ) ) {
          computedTokenData[refInternalEffectKey].updateFlags ++;
          if( !computedTokenData[refInternalEffectKey].ModelInstance ){ 
            computedTokenData[refInternalEffectKey].ModelInstance = self.__public_model__;
          }
        }
      } )
    }
    return computedTokenData;
  }
  function computedTokensCompile(self, opts){
    if(!opts.computedTokens || !len(opts.computedTokens)) return
    for(let [key, computed] of entries(opts.computedTokens)){
      if(!isPFunction(computed) && !isGettersObject(computed)){
        $Debug(`computedTokens option  at "${key}" property expects a getter function method option or a descriptor object of a "get" and an optional "set" property methods`, self, true);
        return;
      }
      const computedTokenData = hydrateComputedTokenTransform(self, computed);
      if(self) define(self.__public_model__, key, {
        get(){
          return computedTokenData;
        }
      })
    }
  }
  function callUpdatedHook(self, obs, ){
    for( let fn of obs.updated_hooks.values()){
      fn();
    }
    obs.updated_hooks.clear();
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.postUpdate, 'postUpdate');
  }
  function mount(nodeSelector){
    let domRoot=_GenerateRoot(nodeSelector, this);
    if(!bool(domRoot.isHouxer_Fragment)) define(domRoot, 'NodeList',{
      value:new Tuple(), 
      configurable, 
      writable
    });
    if(!domRoot.PATCH_FLAGS) define(domRoot, 'PATCH_FLAGS',{
      value:new Set(),
      configurable, 
      writable
    });
    const fakePortal = activateWatchObserverPlugin(this, nodeSelector);
    if(isBuiltinPortalWidget(this)) domRoot = fakePortal;
    if(IS_ELEMENT_NODE(domRoot) && isInitialBuild(this) ) domRoot.innerHTML='';
    if(isInitialBuild(this) && !IS_ELEMENT_NODE(domRoot)){
      $Debug('Initial entry Point mount root expects an element node', this, true);
      return this
    }
    if((isInitialBuild(this) || isBuiltinPortalWidget(this)) && isTrue(domRoot.IS_HOUX_MOUNTROOT)){
      this[$$$operands].initialized=false;
        $Debug(`A Houxer widget has already been mounted on this element, cannot mount more than one Widget on a single root element`, this, true, `When trying to mount this ${ isBuiltinPortalWidget(this) ? "portal content" : "initialBuild" } to the target DOM`);
      this[$$$operands].initialized=true;
      return this;
    }
    adapterDOMMountingProduction(this, domRoot)
    return this;
  }
  function activateWatchObserverPlugin(self, nodeSelector){
    _Data_Hydrations(self, self[$$$core].opts)
    prefixManagement(self);
    let initialBuild=handleBuildGenerator(self, nodeSelector);
    defineGetter(self, 'build', Render_Template(self, initialBuild) );
    _Reactive_Adapter_Plugin( self.__public_model__ ,async function adapter(newV, oldV, ref){
      _EffectDependencyNotifier(self);
      _ReconciliationTransformTrigger(self, { newV, oldV, ref },  nodeSelector );
    }, self, true);
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.onTracked, 'onTracked');
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.postBuild, 'postBuild');
    deferTick(()=>self[$$$operands].onRenderTracked=true);
    self[$$$operands].initialized = true ;
    return createPortalEntryDisplay(self);
  }
  function adapterDOMMountingProduction(self, domRoot){
    const MoutRootToken={
      IS_HOUX_MOUNTROOT:true,
      __mountRootToken:'hx__'+_generateUUID(5),
    }
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.preMount, 'preMount');
    domRoot = activateBuildMount(self, domRoot, MoutRootToken);
    whenMounted(self, self.build, ()=>{
      for(const fn of self[$$$compiler].whenMountedHooks.values()){
        callbackHookWithCatch(self, fn, '')
      }
      callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.postMount, 'postMount');
    });
    self[$$$operands].hasMountProto=true;
  }
  function activateBuildMount(self, domRoot, MoutRootToken){
    if(isInDomNode(domRoot) && IS_ELEMENT_NODE(domRoot) ) {
      domRoot.innerHTML='';
      if( (isInitialBuild(self) || isBuiltinPortalWidget(self) ) && !(maybeHouxerWidgetVNode(self.build) && isBuiltinPortalWidget(self.build?.widget_instance))){
        domRoot.append(self.build?.$element || '');
      }
      if(isInitialBuild(self)) {
        self.property('$root', self.build);
        domRoot.IS_HOUX_MOUNTROOT=true
      }
    }else domRoot=self.build?.$element;
    if(domRoot?.isHouxer_Fragment && !domRoot?.trigger_Effect_Run ) define(domRoot, 'trigger_Effect_Run', {
      value: Widget_Effect_Trigger.bind(self)
    });
    return domRoot
  }
  function _getElementsByAttrName(source, attrName){
    source = _GenerateRoot(source);
    const NodeList = new Tuple();
    if(!source) return NodeList;
    const selected = source.querySelectorAll('*');
    for(const [ index, el ] of selected.entries()){
      if(el.hasAttribute(attrName)){
        NodeList.add(el);
      }
    }
    return NodeList;
  }
  function getElementsByAttrName( source, attrName){
    return _getElementsByAttrName(...arguments);
  }
  function createCloakDirectiveHydrator(){
    const NodeList=getElementsByAttrName('cloak', document);
    for(let [ind, el] of NodeList.entries()){
      toggleCloakDirective(el, 'on');
    }
  }
  // createCloakDirectiveHydrator()
  function toggleCloakDirective(element, action){
    if(action === 'on'){
      
    }else if(action === 'off'){
      
    }
  }
  function widget(name, widget){
    if(!isString(name) || !validHouxerWidget(widget)){
      $Debug(`unrecognised global widget registration for "${name}" widget`, this, true);
      return this;
    }
    if(len(new Set(arguments)) === 2){
     define(this[$$$core].$globals.register.widgets, name, {
       value:widget,
       enumerable, 
       configurable
     });
    }
    return this;
  }
  function install(plugin, options){
    if(!_validateType(plugin, [ Object, Function ])){ 
      $Debug(`plugin installation Error::\n\n install argument must be an object value with  an exposed plugin installation method or a function which acts as the plugin method itself`, this, true);
      return this;
    }else if(isPObject(plugin) && !isPFunction(plugin.plugin)){
      $Debug(`plugin installation Error::\n\n plugin object did not expose a plugin installation method`, this, true);
      return this;
    }
    let usePlugin=isPObject(plugin) ? plugin.plugin : plugin;
    if(isPObject(usePlugin) ) plugin.plugin(this, options);
    else usePlugin(this, options);
    return this;
  }
  function handler(name, handler){
    if(!isChar(name) && !isFunction(handler)){
      $Debug(`unrecognised global handler registration for ${handler}`, this, true);
      return this;
    }
    if(len(arguments) === 2){
      this[$$$core].$globals.register.handlers[name]=handler;
    }
    
    return this
  }
  function directive(name, directive){
    if(!isChar(name) && !_validateType(directive, [ Function, Object ])){
      $Debug(`unrecognised global directives registration for ${directive}`, this, true);
      return this;
    }
    if(len(arguments) === 2){
      this[$$$core].$globals.register.directives[name]=directive;
    }
    return this;
  }
  function mixin(mixin){
    if(!isClass(mixin) && !_validateType(mixin, [Object])){
      $Debug(`unrecognised global mixin registration for\n ${compileToRenderable(mixin)}`, this, true);
      return this;
    }else if(!len(arguments) === 1){
      $Debug(`.mixin() expects not more than one formal argument`, this);
      return this;
    }
    this[$$$core].$globals.register.mixins.add(mixin);
    return this ;
  }
  function filter(name, filter){
    if(!isChar(name) && !isFunction(filter)){
      $Debug(`unrecognised global filter helper registration for ${filter}`, this, true);
      return this;
    }
    if(len(arguments) === 2){
      this[$$$core].$globals.register.filters[name]=filter;
    }
    return this ;
  }
  function block(name, block){
    if(!isChar(name) && !isFunction(block)){
      $Debug(`unrecognised global block helper registration for ${block}`, this, true);
      return this;
    }
    if(len(arguments) === 2){
      this[$$$core].$globals.register.blocks[name]=block;
    }
    return this ;
  }
  
  function property(name, value){
     if(!isChar(name)){
      $Debug(`unrecognised global property registration for ${value}`, this, true);
      return this;
    }
    if(len(arguments) === 2){
      this[$$$core].$globals.register.properties[name]=value;
    }
    return this
  }
  function _Build_destroy(){
    if(len(arguments)){
      $Debug(`.destroy() method of initBuild accepts no formal parameters`, this);
    }else if(!this[$$$operands].hasMountProto){
      $Debug(`instance of widget not yet mounted\n\nwidget unmounting failure`);
      return false
    }
    try{
      inDOMElementNodesRemover(this, this.build);/*
      delete this[$$$operands];
      delete this[$$$core];
      delete this[$$$compiler];
      delete this[$$$ownProperties];
      delete this.__public_model__;
      delete this.build;*/
      // Object.setProtypeOf(this, null)
    }catch(err){
      $Debug(`widget instance destroy failed`, this, true);
      $Debug(err);
      return false;
    }
    return freeze(this);
  }
  function destroy(){
    return _Build_destroy.call(this, ...arguments);
  }
  function createConfig_Constraint(name, ...args){
    const [ argument ] = args;
    if(isFalse(mapSettingCheck(this, name, argument ))) return this;
    this[$$$core].settings[name]=argument;
    return this;
  }
  function configDelimiters(delimiters){
    return createConfig_Constraint.call(this, "delimiters", ...arguments);
  }
  function configDebug(debug){
    return createConfig_Constraint.call(this, "debug", ...arguments);
  }
  function configForwardAttrs(forwardAttrs){
    return createConfig_Constraint.call(this, "forwardAttrs", ...arguments);
  }
  function configIsAsync(isAsync){
    return createConfig_Constraint.call(this, "isAsync", ...arguments);
  }
  function configForwardSlot(forwardSlot){
    return createConfig_Constraint.call(this, "forwardSlot", ...arguments);
  }
  function configIsCustomElement(isCustomElement){
    return createConfig_Constraint.call(this, "isCustomElement", ...arguments);
  }
  function configUseSSRCompiler(useSSRCompiler){
    return createConfig_Constraint.call(this, "useSSRCompiler", ...arguments);
  }
  function configScopedStyleSheet(scopedStyleSheet){
    return createConfig_Constraint.call(this, "scopedStyleSheet", ...arguments);
  }
  function optionsHookTransform(hookName, callback ){
    
  }
  function _controller_Adapter(options){
    if(!isPObject(options)){
      $Debug(`argument at position 1 expects a plain object\n\nType unaccepted`, this, true);
      return;
    }
    this[$$$core].$globals.controller.add(options);
    optionsRegistery(this, options);
    let { setupOptions , pluginAdapter } = options;
    if(hasOwn(options, 'pluginAdapter') && !isPFunction(pluginAdapter)) {
      $Debug(`pluginAdapter option of .controller() method expects a function/method type`, this, true);
      return this;
    }
    if(!exists(pluginAdapter) && !isPFunction(pluginAdapter)) pluginAdapter = pass
    pluginAdapter( this , optionsHookTransform );
    return this
  }
  function controller(options){
    return _controller_Adapter.call(this, ...arguments);
  }
  function configOptions(buildConfig={}){
    setConfig(this, { buildConfig });
    return this
  }
  function optionsRegistery(self, options){
    if(!hasProp(options, 'optionsRegistery')) return;
    else if(!isPObject(options.optionsRegistery)){
      $Debug(`The "optionsRegistery" property argument of controller expects a plain object\n\nType Unexpected`, self, true);
      return;
    }
    const registered=options.optionsRegistery;
    const globals=getGlobalRegistery(self);
    entries(options.optionsRegistery).forEach(([key, validator])=>{
      if(_mapValue(globals.legalOptions, key)){
        $Debug(`${key} custom optionsRegistery already exists in the registery record`, self, true);
        return;
      }
      define(globals.legalOptions, key, {
        value: validator, 
        enumerable
      });
    })
  }
  function mountedWarning(self, name){
    if(isTrue(self[$$$operands].hasMountProto)){
      if(!self[$$$core].map.mountWarn) {
        $Debug(`This "mount" method has been called and calling of methods after the widget is mounted is prohibited\n\n call to the ('.${name}') method is considered an invalid houxer syntax`, self, true);
        self[$$$core].map.mountWarn=true;
      }
      return false;
    }
    return true;
  }
  function publish(prop, value){
    if(!_validateType(prop, [ String, Symbol ])){
      $Debug(`Parameter 1 on .publish() expects a string or a Symbol `, this, true);
      return this;
    }
    const globalBoard= isInitialBuild(this) ? this[$$$core].$globals.published : this[$$$core]._root[$$$core].$globals.published;
    define(globalBoard, prop, { 
      value: value, 
      enumerable 
    });
    return this;
  }
  function hydrate(){
    
    return this
  }
  function buildMethods(){
    return { 
      mount,
      widget, 
      mixin,
      install, 
      handler, 
      directive,
      property,
      filter,
      block,
      configDelimiters,
      configIsAsync,
      configIsCustomElement,
      configForwardSlot, 
      configScopedStyleSheet,
      configUseSSRCompiler, 
      controller,
      configForwardAttrs,
      hydrate,
      configOptions,
      destroy,
      publish
    };
  }
  for(let [ key, fn ] of entries( buildMethods() )){
    fn=new Proxy(fn, {
      apply(target, self, args){
        const res = key === 'destroy' ? true :  mountedWarning(self, key ) ;
        if(isTrue(res)) Reflect.apply(...arguments);
        return self;
      }
    })
    _Houxer_Build.prototype[key]=fn;
  }
  function openTaskPrefix(self){
    self[$$$core].depsQueue.vibrate();
  }
  async function deferEventCircleThread(self, fn, persist=false){
    if(isHouxerBuild(self)){
      if(isFalse(self[$$$operands].garbageWatch)){
        self[$$$operands].garbageWatch=true;
        queueMicrotask(()=>{
        fn.call(self.__public_model__);
          queueMicrotask(()=>{
            self[$$$operands].garbageWatch=false;
          });
        })
      }
      if(persist){
        new Promise((resolve, reject)=>{
          resolve(isFalse(self[$$$operands].garbageWatch))
        }).then(()=>{
          queueMicrotask(fn);
        })
      }
    }else queueMicrotask(fn);
  }
  function whenMounted(self, build, callback){
    return new Promise((resolve, reject)=>{
      resolve(isHouxerVNode(build) ? build.$element.getRootNode() : build.getRootNode() === document)
    }).then((res)=>{
      callback();
    }).catch((err)=>{
      $Debug(`${err}`, self, true);
    })
  }
  function createInitialRenderBuild(self, vnodes, update=false){
    const NodeList=new Tuple();
    for(let [index, node ] of vnodes.entries()){
      node = lazyUnwrap(node)
      if(!isChildrenNode(node)){
        $Debug(`unrecognised element/value passed to render`, self, true);
        continue;
      }else if(isPrimitive(node) && exists(node)){
        if(!exists(String(node).trim())) continue;
        node=new HouxerTextVNode(self, String(node) );
        NodeList.add(node);
      }else if(isRenderVNodeClass(node)){
        node=renderVNodeClassElement(self, node, update);
        NodeList.add(node);
      }else if(isHouxerVNode(node)) NodeList.add(node);
      else if(isCustomElement(node)) NodeList.add(node);
      else if(isSpreadFragment(node)){
        for(let child of node[spreadFragmentKey].values()){
          if(!isChildrenNode(child)){
            $Debug(`unrecognised element passed to render`, self, true);
            continue;
          }
          child=lazyUnwrap(child);
          child =renderVNodeClassElement(self, child, update)
          NodeList.add(child);
        }
      }
    }
    return _getNodeListResponse(NodeList, self)
  }
  function posixVNodeTransform(self, build){
    if(!self[$$$core].posixVNode || isElementType(self[$$$core].posixVNode, 'slot')){
      const newPosixVnode = new HouxerTextVNode(self, "");
      if(isElementType(self[$$$core].posixVNode, 'slot')){
        if(IS_DOCUMENT_FRAGMENT_NODE(build.$element) || (IS_ELEMENT_NODE(build.$element) && !isElementType(build.$element, 'slot'))){
          build.$element.append(newPosixVnode.$element)
        }else if(isElementType(build.$element, 'slot')){
          build=new HouxerFragmentVNode(self, [ newPosixVnode, build])
        }else build = newPosixVnode;
      }
      self[$$$core].posixVNode=newPosixVnode;
    }
    return build
  }
  function Render_Template( self , initBuild , update = false ) {
    const instance =isBuiltinWidgetBuild(self) && self[$$$compiler].parentContext ? self[$$$compiler].parentContext.self : self;
    initBuild = isFunction(initBuild) ? initBuild( instance , update ) : initBuild  ;
    if(isArray(initBuild)) initBuild= createInitialRenderBuild(instance, initBuild, update)
    initBuild = posixVNodeTransform(self, initBuild)
    if(!initBuild || !initBuild.$element ){
      initBuild=self[$$$core].posixVNode;
    }
    initBuild = self[$$$compiler].templateProcessor( instance , initBuild, update ) ;
    return initBuild ;
  }
  function _deferTick( fn ) {
    const response = validateCollectionArgs(arguments, {
      count:1,
      validators:[Function],
      name:"deferTick"
    });
    if(!response) return E_Obj;
    const self= this && isHouxerBuild( this ) ? this : null
    if( len( arguments ) && !isPFunction( fn ) ) {
      $Debug( `positional argument 1 on "deferTick" is not a function\n\n callback argument 1 requires a function type` , self , !isNull( self ) ) ;
      fn = pass ;
    }
    return new Promise( ( resolve , reject ) => {
      resolve( deferEventCircleThread( self , isFunction(fn) ? fn : pass , isHouxerBuild( self ) ) ) ;
    } ) ;
  }
  function deferTick( fn ){
    return _deferTick( ...arguments );
  }
  function _Reactive_Adapter_Plugin(data, callback, self, deep=false){
    const observers=[];
    const observe=(getter, callback)=>{
      const observer = new Observer( getter, callback, self);
      observers.push(observer);
      observer.update();
    }
    if(self[$$$operands].PATCH_FLAG ){
      observe(()=>data[$$$StreamProxyKey], (newV, oldV)=>{
        try{
          callback(newV, oldV, $$$StreamProxyKey);
          self[$$$operands].PATCH_FLAG=0
        }catch(err){
          $Debug(`Encountered a Problem during DOM rendering stream trigger\n\n`, self, true);
          $warn(err, self);
        }
      })
    }
  }
  const isReadonlyProp=key=>_mapValue(readonlyModelProp, key);
  function preUpdateHookFlush(self){
    
  }
  function triggerHydration(self, observer){
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.onEffect, 'onEffect');
    const is_hyperscript=self[$$$core].map.is_hyperscript
    if(isHouxerVNode(self.build)) {
      let buildTemplate = isBuiltinWidgetBuild(self) && isTrue(is_hyperscript) ? self[$$$compiler].rawChildren : self[$$$core].render;
      if(isBuiltinWidgetBuild(self) && is_hyperscript && isFunction(buildTemplate)){ 
        buildTemplate = buildTemplate();
      }
      Render_Effect_Reactive_Transform( self , self.build , Render_Template( self , buildTemplate , true ) , observer ) ;
      self.__public_model__._deferTick(function() {
        if(len(observer.effectFlush)){
          callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.preUpdate, 'preUpdate');
          callSetHooks(self, observer.effectFlush );
        }
      } ).then(function(){
        if( observer.mutated && len(observer.effectFlush) ){
          callUpdatedHook( self , observer ) ;
          observer.updated_hooks.clear();
        }
      }) ;
    }
  }
  function _ReconciliationTransformTrigger(self, reacteData, selector){
    const { newV:newValue, oldV:oldValue, ref:reference  }= reacteData;
    const observer={ 
      mutated:false, 
      updated_hooks:new Tuple(), 
      active:false , 
      willMutate:false,
      effectFlush:new Tuple()
    };
    triggerHydration(self, observer);
  }
  const HouxerUpdateSkippDirectives="if,else,else-if,for,raw,slot,model,hx,on,scoped,fall,animation,transition,clone";
  const HouxerUpdateDirs="html,text,bind,ref"
  function shouldUpdateProp(prop){
    if((has$$_bind(prop) && !(prop.startsWith("$$html") || prop.startsWith("$$text") )  ) || hasAt_bind(prop) || hasAsterisks_bind(prop) || isOnListener(prop)) return false;
    return true;
  }
  function callDepsGetters(depsArray){
    if(!len(depsArray)) return [];
    const valueDeps=[];
    depsArray.entries().forEach(([index, getter])=>{
      if(isPFunction(getter)) valueDeps[index]= getter();
    });
    return valueDeps;
  }
  function validityPropsHydration(self, element, vnode, observer, is_hyperscript){
    const PropFlags=vnode.VNodeManager.patchFlags.PropFlags;
    let index=0;
    for(const [ key, item ] of entries(PropFlags)){
      if(!(shouldUpdateProp(key) )) continue;
      let { dependencies, accessor, evaluatedValue, initialDependencies, resolvedPropName } = item;
      const response=AttributeEqualityDiffing(self, vnode, {
        value:evaluatedValue(),
        key:resolvedPropName(),
        index
      } , {
        is_hyperscript,
        observer,
        value:accessor(),
        key
      })
      index++
      if(!response) continue;
      ElementPropsCompiler( { 
        [key]:accessor()
      }, element, self, vnode, true, {
        evaluatedValue,
        observer,
        accessor,
        key
      })
    }
  }
  function AttributeEqualityDiffing(self, hx__VNode, shapeProps, metrics){
    const { index, key, value, observer, is_hyperscript } = metrics;
    const initialValue=is_hyperscript ? shapeProps[index] : shapeProps;
    const valueX=initialValue.value;
    const keyX=initialValue.key;
    if(!key === keyX && is_hyperscript){
      shapeProps[index].key=key;
      shapeProps[index].value=value;
      ElementPropsCompiler({
        [keyX]:null 
      }, hx__VNode.$element, self, hx__VNode, true, {
        observer
      })
      ElementPropsCompiler({
        [key]:value
      }, hx__VNode.$element, self, hx__VNode);
      return false
    }
    return !deepEqualityCheck(value, valueX)
  }
  function AttributeAndPropsReactiveManager(self, virtualElement,virtualBuild, metrics){
    let [ is_hyperscript, observer ] = metrics
    if(!IS_ELEMENT_NODE(virtualElement.$element)) return;
    let props;
    if(is_hyperscript && isPFunction(virtualBuild.compiler_options.props)) props=assign({}, virtualBuild.compiler_options.props())
    else props=assign({}, isFunction(virtualElement.compiler_options.props) ? virtualElement.compiler_options.props() : virtualElement.compiler_options.args ? virtualElement.compiler_options.args.props : {});
    const element=virtualElement.$element;
    if(!is_hyperscript && len(virtualElement.VNodeManager.patchFlags.PropFlags)){
      validityPropsHydration(self, element, virtualElement, observer, is_hyperscript);
      if(observer.mutated) linkUpdateHook(self, virtualElement, observer);
    }else if(is_hyperscript){
      let index = 0;
      const shapeProps = virtualElement.VNodeManager.patchFlags.shapeProps;
      for(let [key, prop] of entries(props)){
        if( shouldUpdateProp( key ) && AttributeEqualityDiffing(self, virtualElement, shapeProps, { 
          index, 
          key, 
          value:prop,
          observer,
          is_hyperscript
        })){
          shapeProps[index].value=prop;
          ElementPropsCompiler( { [key]:prop }, element, self, virtualElement.compiler_options.hx__VNode||virtualElement, true, {
            observer
          });
          linkUpdateHook(self, virtualElement, observer);
            observer.mutated=true;
        }
        index++
      }
    }
    if(Is_Form_Element(element) && len(virtualElement.patch_tracks)){
      const patch=arrSet(virtualElement.patch_tracks)[0]
      const prop=patch['model:Value'];
      const initVal=patch.initialValue;
      const currentValue=get_Object_Value(self.__public_model__, prop);
      if(!deepEqualityCheck(initVal, unwrap(currentValue))){
        observer.effectFlush.add(function(){
          element.value=unwrap(currentValue)
          observer.active=false
          linkUpdateHook(self, virtualElement, observer);
        })
      }
    }
  }
  const isConditionalHx_Vnode=node=>isConditionalVnode(node, 'if') || isConditionalVnode(node, 'else-if') || isConditionalVnode(node, 'else') ;
  function virtualBuildFilterExchange(self, node, vnode, parent, observer){
    self[$$$operands].initialized=false;
    const NewNode=vnode.compiler_options.Node();
    self[$$$operands].initialized=true;
    const getPosixVNode=node.VNodeManager.posixVNode
    inDOMElementNodesRemover(self, node);
    getPosixVNode.$element.after(NewNode.$element);
    parent.NodeList.replace(node, NewNode);
  }
  function heuristicsVNodeEqualityDiffing(node, vnode){
    if((maybeHouxerWidgetVNode(node) && !maybeHouxerWidgetVNode(vnode) ) || ( !maybeHouxerWidgetVNode(node) && maybeHouxerWidgetVNode(vnode))) return false;
    else if(!isSameNodeType(node.$element, vnode.$element) && (!IS_DOCUMENT_FRAGMENT_NODE(node.$element) && !IS_DOCUMENT_FRAGMENT_NODE(vnode.$element))) return false;
    else if(maybeHouxerWidgetVNode(node) && maybeHouxerWidgetVNode(vnode)){
      const nodeWidget=node.VNodeManager.GeneticProvider;
      const vnodeWidget=vnode.VNodeManager.GeneticProvider;
      return isS(nodeWidget, vnodeWidget) && (isObject(nodeWidget) ? deepEqualityCheck(nodeWidget, vnodeWidget) :  nodeWidget === vnodeWidget );
    }
    return true;
  }
  function Render_Effect_Reactive_Transform(self, virtualElement, virtualBuild, observer, parent){
    const is_hyperscript=isHouxerBuild(self) ? self[$$$core].map.is_hyperscript : false ;
    if(!isHouxerVNode(virtualElement) && !isHouxerVNode(virtualBuild)) return;
    else if(!heuristicsVNodeEqualityDiffing(virtualElement, virtualBuild)) {
      virtualBuildFilterExchange(self, virtualElement, virtualBuild, parent, observer );
      return 
    }else if(!isHouxerFragmentVnode(virtualElement)){
      effectCleanupFlush(self, virtualElement, virtualBuild, null, observer, true );
    }
    if(len(virtualElement?.NodeList) || len(virtualBuild?.NodeList)){
      const NodeListElementsCollection= virtualBuild?.NodeList || new Tuple()
      for( const [ ind, node] of virtualElement.NodeList.entries()){
        const virtualNode= NodeListElementsCollection.at(ind)
        effectCleanupFlush(self, node, virtualNode, virtualElement, observer);
      }
    }
    AttributeAndPropsReactiveManager(self, virtualElement, virtualBuild, [is_hyperscript, observer] );
  }
  function effectCleanupFlush(self, node, virtualNode, virtualElement, observer, ignore){
    if(isHouxerVNode(node)){
      if(!virtualNode && len(virtualElement?.NodeList > len(virtualNode?.NodeList))) pass;//vhecking if indom is greater than memo
      else if(isHouxerTextVNode(node) ) RerenderingTextsContents(self, node, virtualNode, observer, virtualElement);
      else if(isConditionalHx_Vnode(node) || isRenderlessVNode(node)) cond_Directive_Rerenderer(self, node, virtualElement, virtualNode, observer);
      else if(maybeHouxerWidgetVNode(node)) Widget_Effect_Trigger(self, node, virtualElement, observer, virtualNode);
      else if(isTrue(node.isWidgetWrapper)) LoopWrapperRehydration(self, node, virtualElement, virtualNode, observer);
      else if(!ignore) Render_Effect_Reactive_Transform( self, node, virtualNode, observer );
    }else if(isCustomElement(node)){
        
    }
  }
  function Widget_Effect_Trigger(self, node, virtualElement, observer, virtualNode){
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const props=assign({}, isFunction(node.compiler_options?.props) ? node.compiler_options.props() : node.compiler_options.args ? node.compiler_options.args.props : {} );
    const PropFlags = node.VNodeManager.patchFlags.PropFlags;
    const attrsObject={ 
      props:{} 
    }
    if(!node.is_hyperscript){
      for(const [key, flags] of entries(PropFlags)){
        const { accessor, initialDependencies, resolvedPropName, evaluatedValue, dependencies } = flags ;
        consume_Widget_Props(self, attrsObject, {
          props:{
            [key] : accessor()
          }
        }, virtualElement?.LabContext ? virtualElement : node, true, {
          observer,
          evaluatedValue,
          accessor,
          key
        })
      }
    }else{
      const shapeProps=virtualElement.VNodeManager.patchFlags.shapeProps;
    }
    const instance=node.widget_instance;
    for(const [ key, val ] of entries(attrsObject.props)){
      if(object_Has_Path(instance.__public_model__.$params, key) && !deepEqualityCheck(unwrap(get_Object_Value(instance.__public_model__.$params, key)), unwrap(val)) && shouldUpdateProp(key) ) {
        observer.effectFlush.add(function(){
          useReadonlyBypasser(instance.__public_model__.$params, key, unwrap(val) );
          observer.mutated=true
          observer.active=false
        })
      }
    }
    if(isBuiltinWidgetBuild(instance)) {
      instance[$$$compiler].rawChildren=virtualNode.VNodeManager.rawChildren;
      instance[$$$compiler].compilerFlags.flags++;//call internal streamr of 'instance' widget.
    }
    instance[$$$compiler].slotsTransformRender(instance, observer, virtualNode.VNodeManager.rawChildren);
  }
  function RerenderingTextsContents(self, node, vnode, observer, parent){
    const value=node.compiler_options.value;
    const virtualElement= vnode;
    if(!node?.$element.textContent === virtualElement?.$element.textContent) {
      observer.effectFlush.add(function(){
        node.$element.textContent=virtualElement?.$element.textContent;
        if(parent) linkUpdateHook(self, parent, observer);
        observer.mutated=true
        observer.active=false
      })
    }
  }
  function findElementNode(vnode, last){
    let hasElementNode=false ,  elementNode=undefined;
    if(isRenderlessVNode(vnode) ) return [false, undefined];
    if(IS_ELEMENT_NODE(vnode.$element) || IS_TEXT_NODE(vnode.$element)) {
      elementNode=vnode.$element
      hasElementNode=true
       return [ true, elementNode ] ;
    }else if(IS_DOCUMENT_FRAGMENT_NODE(vnode.$element)){
      let list=[];
      for(let node of vnode?.NodeList?.values() || []){
        let  [ has, elem ]=findElementNode(node, last);
        if(isTrue(has) && IS_ELEMENT_NODE(elem) || IS_TEXT_NODE(elem)) {
          hasElementNode=true;
          elementNode=elem;
          list.push(elementNode)
          if(!last) break;
        }
      }
      if(last) elementNode=list.pop();
    }
    return [ hasElementNode ,  elementNode ] ;
  }
  function backTrackForElementNode(parent, ind, last){
    let has=false, element=null;
    let getPrevNode=parent.NodeList.at(ind);
    let [ hasEl, node]=findElementNode(getPrevNode, last);
    if(isFalse(hasEl) && Number(ind) > 0) {
      [has, element] = backTrackForElementNode(parent, ind-1, last);
    }else{
      has=hasEl;
      element=node;
    }
    return [ has, has ? element : null ];
  }
  function inDOMElementNodesRemover(self, vnode){
    const getEl=elem=>isHouxerVNode(elem) ? elem.$element : isNativeElement(elem) || IS_DOCUMENT_FRAGMENT_NODE(elem) ? elem : isHouxerBuild(elem) ? elem.build.$element : null;
    const replace=isArray(vnode);
    vnode = replace ? vnode[0] : vnode;
    const element = getEl(vnode);
    let replacer=replace ? vnode[1] : null;
    replacer = isHouxerBuild(replacer) ? replacer.build : replacer ;
    const replacerEl=replacer ? getEl(replacer) : null;
    if(maybeHouxerWidgetVNode(vnode)) {
      vnode.widget_instance.destroy()
    }else if( isHouxerVNode(vnode) && IS_DOCUMENT_FRAGMENT_NODE(element)){
      let index=0;
      let done=false
      for(let node of vnode.NodeList.values()){
        inDOMElementNodesRemover(self, node);
        index++;
        vnode.NodeList.delete(node);
      }
    }else if(isNativeElement(element) || IS_TEXT_NODE(element)){
      if(replace && ( IS_ELEMENT_NODE(element) || IS_TEXT_NODE(element))){
        element.replaceWith(replacerEl);
        if(isHouxerVNode(vnode)) vnode.$element=replacerEl;
      }else if(!replace) element.remove();
    }else{
      $Debug(`Unexpected inDom Node removal Input system`, self);
    }
  }
  function findAndObserveProcessor(vnode, ind, NewNode){
    let [ hasEl, element ]=backTrackForElementNode(vnode, ind-1, true);
    if(hasEl){
      element.after(NewNode.$element)
      vnode.NodeList.splice(ind, 1, NewNode);
    }
  }
  function cond_Directive_Rerenderer(self, node, vnode, virtualBuild, observer){
    if(isRenderlessVNode(node) && !isRenderlessVNode(virtualBuild)){//add a newly created node and make it render
      observer.effectFlush.add(function(){
        self[$$$operands].initialized=false;
        const NewNode=virtualBuild.compiler_options.Node();
        NewNode.conditional_record=virtualBuild.conditional_record;
        self[$$$operands].initialized=true;
        const ind=vnode.NodeList.indexOf(node);
        findAndObserveProcessor(vnode, ind, NewNode)
        observer.mutated=true
        observer.active=false
      })
    }else if(isRenderlessVNode(virtualBuild) && !isRenderlessVNode(node)){//remove the old a make it re
      observer.effectFlush.add(function(){
        inDOMElementNodesRemover(self, node);
        node.IS_RENDERLESS=virtualBuild.IS_RENDERLESS;
        node.conditional_record=virtualBuild.conditional_record;
        observer.mutated=true
        observer.active=false;
      })
    }
  }
  function LoopWrapperRehydration( self, node, vnode, virtualBuild, observer){
    const  { orgType, ref, src }=node.compiler_options;;
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const value=!is_hyperscript ? (object_Has_Path(self.__public_model__, ref) ? get_Object_Value(self.__public_model__, ref) : parseScript(ref) ): null;
    const added=new Tuple();
    const garbage=new Tuple();
    let index=0;
    for(const [ind, atom] of node.NodeList.entries()){
      index++;
      if(index > len(virtualBuild.NodeList)) garbage.add(atom);
    }
    if(len(virtualBuild.NodeList) > len(node.NodeList)){
      for(let i=0;i<len(virtualBuild.NodeList)-len(node.NodeList); i++){
        added.add(virtualBuild.NodeList.at(len(node.NodeList)));
      }
    }
    if(len(added)){
      let key =0
      for(let atom of added.values()){
        key++
        let addedNode;
        if(is_hyperscript) addedNode=atom;
        else{
          let { type, props, children,is_hyperscript, hx__VNode, alias  }=node.compiler_options.args;
          let { valToken, keyName }=alias;
          let  ctx={}
          if(valToken) ctx[valToken]=atom;
          if(keyName) ctx[keyName]=key;
          if(hx__VNode.LabContext) ctx=assign(hx__VNode.LabContext, ctx);
          self[$$$operands].initialized=false;
          addedNode=node.compiler_options.Node();
          self[$$$operands].initialized=true;
          addedNode.LabContext=ctx;
          addedNode.compiler_options.index=len(src)+key;
        }
        observer.effectFlush.add(function(){
          findAndObserveProcessor(node, len(node.NodeList), addedNode);
        })
      }
    }
    if(len(garbage)){
      for(let atom of garbage.values()){
        observer.effectFlush.add(function(){
          inDOMElementNodesRemover(self, atom);
          node.NodeList.delete(atom);
        })
      }
    }
    Render_Effect_Reactive_Transform(self, node, virtualBuild, observer);
    node.compiler_options.src=value;
  }
  function _fromKey(obj, key){
    return isPObject(obj) ? values(obj)[key] : isSet(obj) ? arrSet(obj)[key] : isMap(obj) ? obj[obj.keys()[key]] :  isArray(obj) ? obj[key] : isNumber(key) ? Number(key) : null;
  }
  function linkUpdateHook(self, vnode, observer){
    if(!isPass(vnode.updated_hook)){
      observer.updated_hooks.add(vnode.updated_hook);
    }
  }
  const recordFieldTypes="auto,number,boolean,password,string,date,date-time,email,file,image,ref,ip-address,json,slug,time,url,uuid,mtm,oto,fk,option,choice,regex,decimal,typed-option";
  const isFormFieldType=type=>_mapValue(recordFieldTypes, type);
  const FieldProps = {
    required:Boolean,
    options:[Array, Object, Tuple, Set],
    default:Any,
    unique:Boolean,
    writable:Boolean,
    validator:Function,
    primaryKey:Boolean,
    maxSize:Number,
    disabled:Boolean,
    label:String,
  }
  function processValidationTransform(type, record){
    
  }
  class AdminDatasaseTable{
    constructor(){
      
    }
    registerForm(record){
      
    }
  }
  class FormField {
    constructor(type, validators){
      if(!isString(type) && !isFormField(type)){
        $Debug(`Parameter 1 at FormField instance expects a string value of a value FormField type`);
        return;
      }
      processValidationTransform(type, this)
    }
  }
  const isFormField= field=>field instanceof FormField;
  function validatorsIsValid(validators, type){
    if(!isPObject(validators)){
      $Debug(`properties passed to field must be an object `);
      return false
    }
  }
  function genericFormFieldsGenerator(type, xtruct){
    const FieldKlass=new Function('FormField', 'xtructcall', `
      class ${type} extends FormField{
        constructor(){
          super(...arguments)
          xtructcall(...arguments);
        }
      }
      const is${type}=(value)=> value instanceof ${type};
      return [ ${type}, is${type} ];
    `)
    return FieldKlass(FormField, isPFunction(xtruct) ? xtruct : pass );
  }
  const fieldKlassNames="AutoField,NumberField,BooleanField,StringField,DateField,DateTimeField,EmailField,FileField,ImageField,TokenField,IPAddressField,JSONField,SlugField,TimeField,OptionField,MTMField,OTOField,FKField,RegexField,ChoiceField,DecimalField,UUIDField,URLField,TypedOptionField,PasswordField"
  function createSystemFields(){
    const fields=createObj('Field')
    for(let [index, name] of fieldKlassNames.split(',').entries()){
      const [ klass, isKlass ] = genericFormFieldsGenerator(name, pass);
      const nmz=_to_kebab_case(name.slice(0,-5));
      function createFormField(validators){
        if(!validatorsIsValid(validators, nmz)) return
        return new klass(nmz, validators)
      }
      fields[name]=new Function('createFormField', `
        return function ${name}(validators){
          return createFormField(validators)
        }
      `)(createFormField);
    }
    return fields;
  }
  const fields = createSystemFields();
  class BaseForm {
    self=undefined;
    FormFields={}
    constructor(name="Form", tableKeys=[]){
      if(!_validateType(name, String) && !_validateType(tableKeys, [ Array, Object ])){
        $Debug(`"name" and "tableKeys" arguments of FormFields are nit valid dataTypes`);
        return;
      }
      const xtruct=parseScript(`class ${name}{}`);
      for(let [ key, value ] of getIterator(tableKeys)){
        if(isArray(tableKeys) && !isString(value)){
          $Debug(`"tableKeys" array values expects strings`);
          return;
        }
        this.FormFields[isObject(tableKeys) ? key : value ] = isPObject(tableKeys) ? value : Any ;
      } 
      this.self=xtruct
    }
    create(fields){
      const name = this.self.name
      let fieldAlias={}
      let fieldKeys=keys(this.FormFields)
      if(!isPObject(fields)){
        for(let [ind, value] of getIterator([...arguments])){
          if(ind+1 > len(fieldKeys)){
            $Debug(`arguments passed to create exceded the Form fields length`);
            return
          }
          fieldAlias[fieldKeys[ind]]=value
        }
        fields=fieldAlias;
      }
      const record=new this.self()
      for(let [key, value] of entries(fields)){
        if(!hasOwn(this.FormFields, key)){
          $Debug(`"${name}" Form have no such field as "${key}"\n\n........during create\n`);
          return 
        }
        if(!isFormField(this.FormFields[key]) && !_validateType(value, this.FormFields[key])){
          $Debug(`invalid dataTypes received at "${key}" field \n\n........at "${name}" Form\n\ntype validation failed`);
          return;
        }
        record[key]=value
      }
      return record
    }
    createField(){
      
    }
    deleteField(){
      
    }
    clearForm(){
      
    }
    extendForm(){
      
    }
  }
  class Form extends BaseForm{
    constructor(name, tableKeys){
      super(...arguments);
    }
  }
  function getFieldType(field){
    if(!isFormField(field)){
      $Debug(`isFieldTypeOf  argument 1 not a form Input field`);
      return false
    }
    return field
  }
  function isFieldTypeOf(field, type){
    if(!isFormField(field)){
      $Debug(`isFieldTypeOf  argument 1 not a form Input field`);
      return false
    }else if(!isString(type) && !isFormFieldType(_to_kebab_case(type))){
      $Debug(`Input at argument 2 of isFieldTypeOf macro is not a valid houxer form field type`);
      return false;
    }
    return getFieldType(field) === _to_kebab_case(type)
  }
  function createFormModel(){
    return preventX(new Form(...arguments))
  }
  function createFormAdmin(){
    return preventX(new AdminDatasaseTable(...arguments))
  }
  function _initiateChildNodes(self, children,  hx__VNode, element){
    const is_hyperscript=hx__VNode?.is_hyperscript;
    children=isPFunction(children) ? children(self, hx__VNode) : children;
    if(isChildrenNode(children)){
      children = lazyUnwrap(children)
      if(isPrimitive(children)){
        const node=new HouxerTextVNode(self, String(!exists(children) ? "" : children), hx__VNode);
        node.compiler_options=assign(node.compiler_options,{ type:'text', value:()=>String(children), hx__VNode });
        if(isTrue(node.render_tracked)) hx__VNode.render_tracked=true;
        if(len(node.PATCH_FLAGS)) hx__VNode.PATCH_FLAGS.add('ELEMENT_CHILDREN');
        element.append(node.$element);
        if(hx__VNode) hx__VNode.NodeList.add(node);
      }else if(isArray(children)){
        for(const child of children.values()){
          element=_initiateChildNodes(self, child, hx__VNode,  element)
        }
      }else if(isHouxerVNode(children) ){
        hx__VNode.NodeList.add(children);
        if(maybeHouxerWidgetVNode(children) && isBuiltinPortalWidget(children.widget_instance)) pass;
        else element.append(children.$element);
      }else if(isCustomElement(children)){
        element.append(children);
        hx__VNode.NodeList.add(children);
      }else if(isRenderVNodeClass(children)){
        const vnode=renderVNodeClassElement(self, children);
        element.append(vnode.$element);
        hx__VNode.NodeList.add(vnode);
      }else if(isSpreadFragment(children)){
        for(const child of children[spreadFragmentKey].values()){
          child = lazyUnwrap(child)
          element=_initiateChildNodes(self, child, hx__VNode,  element)
        }
      }
    }
    return element;
  }
  function widgetBindingReceiver(self, key, param, virtualNode, hx__VNode, modifiers, patchFlags, metrics){
    const { isRerender, observer, is_hyperscript, ind, patch } = metrics;
    const $orgKey=ind
    let trasform;
    let [ subscribers , item ] = effectDependencyTracking(self, function(){
      return _$runModelBind(self, param, hx__VNode);
    });
    if( len(subscribers) && !is_hyperscript && !isRerender ) {
      patchFlags.isHoisted=(true);
      subscribers.forEach((sub)=>{
        patchFlags.subscriptions.push(sub);
      })
      VirtualizePropTick(hx__VNode, $orgKey, key, [ param, item ], subscribers)
    }
     item=unwrap(item);
    if( !key && !isPObject(item)){
      $Debug(`Trying  to bind directly to instance\n\nstatus :: >>> failed\n\n((reason)) : Binding value not a valid plain object`, self, true);
      return;
    }else if(!key && isPObject(item)){
      consume_Widget_Props(self, virtualNode, {
        props:item
      }, hx__VNode, isRerender, metrics);
    }else if(key){
      consume_Widget_Props(self, virtualNode, {
        props:{ 
          [key]:item
        }
      }, hx__VNode, isRerender, metrics)
    }
  }
  class houxerSignal{
    constructor(signal, func, options){
      this.signal=signal
      this.callback=func
      this.options=options
    }
    signal=undefined
    callback=undefined
    options=undefined
  }
  function Widget_Directive_Handler(self, virtualNode, props, hx__VNode, modifiers, patchFlags,metrics){
    const { props:valProps, ind, isRerender, patch } = metrics
    let name=keys(props)[0];
    let key=directive_sep(name);
    let param=props[name] || "";
    param=bindKeyAsValue(name, param);
    name=directive_sep(name)[0].slice(2);
    key.shift();
    key= len(key) > 1 ? key.join(':') : key[0];
    if(name === 'bind') $$dir_BIND(self, { key, item:param }, virtualNode, hx__VNode, modifiers, patchFlags, metrics);
    else if(name === 'on') $$dir_ON(self, param, virtualNode, hx__VNode, key, modifiers);
    else if(name === 'slot') $$dir_SLOT(self, param, virtualNode, hx__VNode, modifiers);
    else if(name === 'ref') $$dir_REF(self, param, virtualNode, hx__VNode, modifiers, [valProps, ind]);
    else if( name === 'model') $$dir_MODEL(self, param, virtualNode, hx__VNode, modifiers, metrics );
    else if( name === 'html' || name === 'text') $$dir_HTML(self, param, virtualNode, hx__VNode, name=== 'text', modifiers);
    else if( name === 'raw') pass;
    else if(name === 'fall') $$dir_FALL(self, param, virtualNode, hx__VNode, modifiers);
    else if(name === 'transition') $$dir_TRANSITION(self, attr, virtualNode, hx__VNode, key, modifiers)
    else if(name === 'animation') $$dir_ANIMATION(self, attr, virtualNode, hx__VNode, key, modifiers)
    else if(name === 'clone') $$dir_CLONE(self, attr, virtualNode, hx__VNode, key, modifiers)
    else if(isHouxerDirective(name)) pass;
  }
  function dynamicPropRemover(obj, propName){
    for(let [key, value ] of entries(obj)){
      if(!key.includes(propName)) continue;
      let keyCache;
      if(key.startsWith('$$bind')) keyCache=key.slice(6);
      keyCache=fall_AttrName(key);
      if(key.includes("|")) keyCache=keyCache.split('|').shift();
      if(propName === keyCache){
        delete obj[key];
        break;
      }
    }
    return obj;
  }
  function _Houxer_token_GENERATOR_(config, FN, frkey){
    if(!isFRKey(frkey) && !validateCollectionArgs(arguments,  {
      validators:[Object, Function, Symbol],
      max:3,
      min:1,
      name:'tokenGENERATOR'
    })) return  undefined;
    if(!isFRKey(frkey)) config = assign({
      size:10,
      type:'alpha'
    }, config );
    let uuid=_generateUUID(config.size, config.type);
    if(isFalse(FN(uuid))) uuid=_Houxer_token_GENERATOR_(config,  FN, $factoryTokenKey);
    return uuid;
  }
  function tokenGENERATOR(config, Test_Callback){
    return _Houxer_token_GENERATOR_( config, Test_Callback );
  }
  function builtinBuildWidgetGenerator(self, virtualNode, rawChildren, widget){
    const model=self.__public_model__;
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    function instanceNormalizer(instance, build, vnode){
      if(isString(instance) ){
        if(!IS_VALID_TAGNAME(instance)){
          if(instance_Has_Widget(self, instance)){
            instance = normalize_Widget(self, instance)
          }else{
            $Debug(`Unresolved tag name received at build builtin widget\n\n"${instance}" is not a valid registered or builtin widget name `, self, true);
            return undefined;
          }
        }
      }
      if(!validHouxerWidget(instance)){
        $Debug(`Instance value received at build builtin widget is not a valid houxer widget Instance`, self, true);
        return undefined;
      }
      let FactoryRenderName;
      if( validHouxerWidget(instance)) {
        FactoryRenderName = tokenGENERATOR({}, function(uuid){
          return !new Set(keys(self[$$$register].widgets)).has(uuid);
        });
        self[$$$register].widgets[FactoryRenderName]=instance;
      }
      function factoryRender(params, context ){
        if(is_hyperscript) return ()=> defineVNode({
          type:instance, 
          props:builtinValidWidget(widget, 'hx:build') ? dynamicPropRemover( virtualNode.props, 'self') : virtualNode.props, 
          children:virtualNode.children
        });
        return useModel();
      }
      if(!is_hyperscript) {
        const hx__VNode=build[$$$ownProperties].hx__VNode;
        const accessor=tokenGENERATOR({}, function(uuid){
          return !hasOwn(self.__public_model__, uuid);
        });
        const tagname = validHouxerWidget(instance) ? FactoryRenderName : instance.trim() ;
        factoryRender.template=`
        <${tagname} $$bind="${accessor}" >
          ${rawChildren}
        </${tagname}>
        `;
        factoryRender.parentContext={
          self,
          hx__VNode:build[$$$ownProperties].hx__VNode,
          is_hyperscript,
          props:{
            [accessor]:virtualNode.props
          },
          instance
        }
      }
      return factoryRender;
    }
    instanceNormalizer.BUILD_NORMALIZER=self;
    virtualNode[$buildWidgetNormalizerKey]=instanceNormalizer;
  }
  function looseEffectTraverseBuild(self, virtualNode, rawChildren, Binding){
    const normalizer=createObj("Normalizer",{
      template:rawChildren,
      ...Binding
    });
    virtualNode[$buildWidgetNormalizerKey]=normalizer
  }
  function installTransformersArgumentations(self, child){
    const root= isTrue(self[$$$ownProperties].isInitialBuild) ? self : self[$$$core]._root;
    defineGetter(child[$$$core], '_root', root ) ;
    defineGetter(child[$$$core], '_parent', self ) ;
    for(let [ prop, content] of entries(root[$$$core].$globals.register)){
      child[$$$core].$globals.register[prop] = assign(child[$$$core].$globals.register[prop], content);
    }
  } 
  function resolveInstanceWidgetNormalizer(self, vNode){
    const tagname=isBlockTag(vNode.type) ? vNode.type.slice(2).trim() : vNode.type;
    if(!isBlockTag(vNode.type) && !instance_Has_Widget( self , tagname )){
      $Debug(`Template Compilation Error::\n\nUnresolved tagname "${tagname}"\n\n   ...if this is a houxer widget, make sure its registered through the "widgets" option or defined through the CustomElementsInstance.define() method if it's a customElement `, self, true);
      return false;
    }else if(isBlockTag(vNode.type)){
      if(isBuiltinBlocks(tagname)) return true;
      if(!instance_Has_Block(self, tagname)){
        $Debug(`((Block Resolver Error))\n\n"${tagname}" block is not a registered block element`, self, true);
        return false;
      }else vNode.GeneticProvider=normalize_Block(self, tagname)
      return true
    }
    const widget=normalize_Widget(self, tagname);
    if(!validHouxerWidget(widget)){
      $Debug(`>>>> "${tagname}\n\nCannot compile value as a Houxer widget\nMaybe an invalid houxer widget value`, self, true);
      return false;
    }
    vNode.GeneticProvider=widget;
  }
  function ResolveWidget(self, hx__VNode, vNode, slotRender, IS_RENDERLESS){
    const widget=vNode.GeneticProvider;
    if(isSelfRecursiveWidget(self) && builtinValidWidget(widget, 'hx:self') || IS_RENDERLESS){
      return createRenderlessVNode(self);
    }
    if(vNode.props) {
      consume_Widget_Props(self, vNode, vNode, hx__VNode);
    }
    widget[genericKeyProp]={
      parentFlag:self,
      hx__VNode,
      propsTraverse( widget, hx__VNode , fallthrough, patch){
        if(vNode.props){
          let { hasDir , getKey, getDir }=dirExistenceCheck(vNode.props, '$$fall');
          if(isTrue(hasDir) && isTrue( isDestructureSyntax(getDir)) && widget.fallthrough){
            if(isFalse(destructWarn(getDir, fallthrough, self))) return;
            if(!patch) hx__VNode.VNodeManager.dexTransform.syntaxArray.push(getDir);
            if(patch) hx__VNode.VNodeManager.dexTransform.sourcesArray.splice( 0, 1 , fallthrough )
            else hx__VNode.VNodeManager.dexTransform.sourcesArray.push(fallthrough);
          }
        }
      }
    }
    return $compilerEngine(self, widget, vNode, hx__VNode,);//$compilerEngine the widget flags, passed the widget to _Houxer_Build, sets global widgets from  its parents if any, installs all GLOBAL_WIDGETS_AND_PLUGINS, mounts the widget to a fragment and return the build'
  }
  function $compilerEngine ( self , widget , virtualNode , hx__VNode ) {
    let { rawChildren } =virtualNode
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    widget = defineWidget( widget )
    virtualNode[widgetTypeKey]=widget[widgetTypeKey];
    virtualNode.widget_instance=widget;
    if(is_hyperscript && isSelfRecursiveWidget(self) && builtinValidWidget(widget, 'hx:self')){
      return new renderlessVNode();
    }
    set_Widget_Flag( self , virtualNode , hx__VNode ) ;//setting the widget flag
    if(builtinValidWidget(widget, 'hx:build') || builtinValidWidget(widget, 'hx:self')){
      widget = builtinBuildWidgetGenerator(self, virtualNode, rawChildren, widget);
    }else if(isBuiltinWidget(widget)){
      looseEffectTraverseBuild( self, virtualNode, rawChildren, {
        is_hyperscript,
        hx__VNode,
        self
      })
    }
    if(isHouxerVNode(hx__VNode)) virtualNode[$buildHx_VNodeKey]=hx__VNode ;
    if(!hx__VNode.VNodeManager.Attribute_Collection){
      hx__VNode.VNodeManager.Attribute_Collection=virtualNode.props;
    }
    const child = new _Houxer_Build( virtualNode ) ;
    if( self ) {
      controllerHydration( self , child ) ;
      child.install( controllerGlobalPlugin , { self } ) ;//build the widget and other installations
    }
    return child.mount( _createFragment() ) ;//mounts the build to a houxer fragment
  }
  function controllerHydration( self , build ) {
    const globals=getGlobalRegistery(self)
    if( !len( globals.controller ) ) return build ;
    for( let genre of globals.controller.values() ) {
      build.controller( genre ) ;
    }
    installTransformersArgumentations(self, build )
    // build.property('$parent', self.build)
    return build;
  }
  function controllerGlobalPlugin ( build , options ) {
    for ( const [ key , value ] of entries( getGlobalRegistery(options.self).register ) ) {
      for ( const [ name, data ] of getIterator( value ) ) {
        if(key === 'widgets') build.widget( name , data ) ;//in the root, uses the build.widget prototype to define global widgets
        else if(key === 'mixins') build.mixin( data ) ;//in the root, uses the build.widget prototype to define global properties
        else if(key === 'filters') build.filter( name , data ) ;//in the root, uses the build.widget prototype to define global properties
        else if(key  === 'blocks') build.block( name , data ) ;//in the root, uses the build.widget prototype to define global properties
        else if(key === 'directives') build.directive( name , data );//in the root, uses the build.widget prototype to define global directive
        else if(key === 'handlers')  build.handler( name , data ) ;//in the root8, uses the build.widget prototype to define global handlers
        else if(key  === 'published') build.publish( name , data ) ;//in the root8, uses the build.widget prototype to define global published
        else if(key  === 'properties' ) build.property( name , data ) ;//in the root8, uses the buil/d.widget prototype to define global propertiess
      }
    }
  }
  function set_Widget_Flag(self, virtualNode, hx__VNode){
    if(!virtualNode.children) return;
    try{
      virtualNode.children={ 
        NodeList:val.children, 
        patchFlags:self, 
        hx__VNode 
      };
    }catch(err) {
      pass
    }
  }
  function consume_Widget_Props(self, virtualNode, value , hx__VNode, isRerender=false, patch){
    const patchFlags={ 
      isHoisted:false, 
      subscriptions:[],
    }
    const is_hyperscript=hx__VNode.is_hyperscript;
    entries(value.props).forEach(([ind, param])=>{
      let name=_DynamicAttrNameResolver(self, ind, hx__VNode, isRerender, patchFlags, patch);
      if(hasAsterisks_bind(name)) name='$$bind:'+name.slice(1);
      else if(hasAt_bind(name)) name='$$on:'+name.slice(1);
      if(has$$_bind(name)){
        let modifiers = name.split('|');
        name=modifiers.shift();
        modifiers = new Set(modifiers);
        if( isHouxerDirective(directive_sep(name)[0].slice(2))){ 
          Widget_Directive_Handler(self, virtualNode, {
            [name]:param
          }, hx__VNode, modifiers, patchFlags, { 
            props:value.props, 
            ind,
            isRerender,
            patch,
            is_hyperscript
          });
        }else {
          _With_Custom_Directives(self,{
            key:name,
            attr:param
          }, virtualNode, hx__VNode, modifiers, isRerender, patch);
        }
      }else if( hasSpread_bind(ind, true )) Manage_Widget_Spread(self, virtualNode, name, hx__VNode, isRerender, { 
        patch, 
        patchFlags, 
        is_hyperscript 
      })
      else {
        if(isRerender && !is_hyperscript){
          const newQuery=patch.patch?.evaluatedValue();
          if(!deepEqualityCheck(newQuery, param)){
            virtualNode.props[name]=param;
            const PropFlags=hx__VNode.VNodeManager.patchFlags.PropFlags;
            if(hasOwn(PropFlags, ind)){
              PropFlags[ind].evaluatedValue=() => param ;
            }
          }
        }else {
          virtualNode.props[name]=param;
        }
      }
    });
    if(!patch) return virtualNode.props;
    if(len(patchFlags.subscriptions) && !isRerender) {
      patchFlags.subscriptions.forEach((sub)=>{
        hx__VNode.VNodeManager.patchFlags.subscriptions.push(sub)
      });
    }
    if(isFalse(hx__VNode.VNodeManager.patchFlags.isHoisted) && !isRerender) hx__VNode.VNodeManager.patchFlags.isHoisted=patchFlags.isHoisted;
    return virtualNode.props;
  }
  function Manage_Widget_Spread(self, virtualNode, props, hx__VNode, isRerender, metrics){
    const { patch, patchFlags, is_hyperscript } = metrics
    let object;
    let subscribers;
    [ subscribers, object ]=effectDependencyTracking(self, function(){
      return isString(props) ? _$runModelBind(self, props.slice(3), hx__VNode) : props;
    })
    object=unwrap(object)
    if(!is_hyperscript && !isRerender && len(subscribers)){
      patchFlags.isHoisted=true;
      patchFlags.subscriptions=patchFlags.subscriptions.concat(subscribers)
      VirtualizePropTick(hx__VNode, props, props.slice(3), [ props, object, ], subscribers );
    }
    if(!isPObject(object)){
      $Debug(`spread syntax on widget consumer can only accept binded values of an object`, self, true);
      return
    }
    if(is_hyperscript && isRerender){
      const prevObj=patch.evaluatedValue()
      if(!deepEqualityCheck(prevObj, object)){
        hx__VNode.VNodeManager.patchFlags.PropFlags.evaluatedValue= () => object;
        consume_Widget_Props(self, virtualNode, {
          props:object
        }, hx__VNode, true, patch)
      }
    }else consume_Widget_Props(self, virtualNode, { 
      props:object 
    }, hx__VNode);
  }
  function _createFragment(){
    const fragment=new DocumentFragment();
    define(fragment, 'isHouxer_Fragment',{
      value:true
    });
    define(fragment, 'NodeList',{
      value:[], 
      configurable,
      writable
    });
    define(fragment, 'PATCH_FLAGS',{
      value:new Set(), 
      configurable,
      writable
    });
    return fragment;
  }
  const devInfo="You're running the development version of houxer "+get_version().slice(7)+", make sure you switched to the minified build version with the (*.min.js) file extension when deploying to production";//development information
  class _Resolver{
    name=undefined
  }
  class _WidgetResolver extends _Resolver{
    constructor(name){
      super()
      this.name=name || undefined;
    }
  }
  class _DirectiveResolver extends _Resolver{
    constructor(name, value, modifiers){
      super();
      this.name=name || undefined;
      this.value=value;
      this.modifiers=modifiers
    }
  }
  function __traverseRESOLVER(name){//dynamically resolving widget name
    if(!isChar(name)){
      $Debug(`"traverse" resolving positional argument name must be a string type matching a local/globaly registered widget data`);
      return;
    }
    return new _WidgetResolver(name);
  }
  function traverse(name){
    return __traverseRESOLVER(...arguments);
  }
  function _directive_batch__(name, value, modifiers){//dynamically resolving and controlling of directives and arguments
    if(!_validateType(name, [String, Function, Object])){
      $Debug(`"batch" resolving positional argument name must be a string  resolving to matching a local/globaly registered directive reference or a "Function/Object" type `);
      return;
    }else if(modifiers && !isArray(modifiers)){
      $Debug(`argument 3 passed to batch expects an array of modifiers strings`);
    }
    return new _DirectiveResolver(name||"", value, modifiers);
  }
  function batch(name, value, modifiers){
    return _directive_batch__(...arguments);
  }
  function _withDirectives(props, dirs){
    const response = validateCollectionArgs(arguments, {
      validators:[Object, Array],
      name: "withDirectives"
    })
    if(!response && !len(dirs) ) return isPObject(props) ? props : {} ;
    dirs = dirs || [];
    if(len(dirs)){
      const dirSet=new Set();
      for(const directive of dirs.values()){
        if(!isDirectiveResolver(directive)){
          $Debug(`in hyperscript use of directives failed\n\nuse the "batch"  macro for resolving of directives when building with in hyperscript mode`);
        }else dirSet.add(directive);
      }
      if(len(dirSet)){
        define(props, dir$$__render, {
          value:dirSet, 
          enumerable, 
          configurable
        });
      }
    }
    return props;
  }
  function withDirectives(props, directives ){
    return _withDirectives(...arguments )
  }
  const QuoteRegex=/(['"`])/;
  function __HTMLAttrsParser__(attrs){
    attrs=(attrs || "").trim()
    if(!attrs) return {};
    const props={
      ['__hx:keys__']:[]
    };
    let openPropName=[];
    let openPropQuote=null;
    let propValue=[];
    let isPropValue=false
    let isPropName=true;
    let prev=null;
    let next=null;
    let namingSpace=false;
    function finisher(){
      let value = propValue.join("");
      let key = openPropName.join("").trim();
      if(!len(propValue)) value = null;
      if(hasOwn(props, key)) props['__hx:keys__'].push([key, value ]);
      else props[key]=value;
      openPropName=[];
      openPropQuote=null;
      isPropValue=false;
      isPropName=true;
      propValue=[];
      namingSpace=false;
    }
    for(let [index, str ] of entries(attrs)){
      index=Number(index);
      next=attrs[index+1];
      const closure=()=> prev=str;
      if(isPropName){
        if(namingSpace && (/\S/.test(str) || next+1 == null || index+1 > len(attrs) )){
          if(!/=/.test(str) || next == null || index+1 > len(attrs)) {
            finisher();
            if(!/[=]/.test(str) || /\S/.test(str) ){
              openPropName.push(str);
            }
            closure();
            continue;
          }else {
            namingSpace=false
          }
        }
        if(/=/.test(str) && !namingSpace){
          isPropName=false;
          isPropValue=true;
        }else if( len(openPropName) < 1 && /\s/.test(str)){ 
          closure();
          continue;
        }
        if(len(openPropName) && /\s/.test(str) ){
          namingSpace=true;
        }else if(isPropName && ( next == null || index+1 > len(attrs)) ){ 
          openPropName.push(str);
          finisher();
          closure();
          continue;
        }else if(!namingSpace && isPropName) openPropName.push(str);
        
      }else if(isPropValue){
        if((/\s/.test(str) && len(propValue) < 1)) {
          closure();
          continue;
        }
        if(len(propValue) < 1 && QuoteRegex.test(str)){ 
          openPropQuote=str;
          closure();
          continue;
        }
        if((openPropQuote && QuoteRegex.test(str) && str=== openPropQuote) || (!openPropQuote && (/(\s$)/.test(str) || /(\s$)/.test(next) || ( index+1 === len(attrs) || next == null) ))){
          if( (/(\s$)/.test(next) || index+1 === len(attrs) || next == null) && !(openPropQuote && QuoteRegex.test(str) && str=== openPropQuote) ) propValue.push(str);
          finisher();
          closure()
          continue
        }else propValue.push(str);
      }else if(len(openPropName)) finisher();
      closure();
    }
    if(len(openPropName)) finisher();
    if(!len(props['__hx:keys__'])) delete props['__hx:keys__'];
    return props;
  }
  function HTMLAttrsParser(attrs){
    return __HTMLAttrsParser__(attrs);
  }
  const isUncompiledChildrenTags=(txt)=> new Set("script,style,title,textarea".split(',')).has(txt);
  class comment{
    constructor(value){
      if(value && isString(value)){
        this.content=value;
      }
    }
    content="";
  }
  class text{
    constructor(value){
      if(value && isString(value)){
        this.content=value;
        this.rawChildren=value;
      }
    }
    content=""
    rawContent=""
    scriptsDeps=[]
  }
  const isHtmlComment=(value) => value instanceof comment;
  const isHtmlText=(value) => value instanceof comment;
  const generateBlockTagRegex=function (delimiters){
    let [ open, close ] = !delimiters ? [ "{{", "}}"] : delimiters;
    open = hasSpecialCharacters(open) ? _escapeDecoder(open) : open;
    close = hasSpecialCharacters(close) ? _escapeDecoder(close) : close;
    return new RegExp(`(${open}(\\/)?::([\\w\\-$:]+)(.*?)(\\/)?${close})`,'mg');
  }
  const emptyTagRegex=/\<[\/]?[ ]*\>/;
  const isEmptyTag=(tag)=>emptyTagRegex.test(tag);
  const isOpenEmptyTag=(tag)=>/(\<[ ]*\>)/.test(tag);
  const isCloseEmptyTag=tag=>/(\<\/[ ]*\>)/.test(tag);
  const openingTagsRegex = /(\<[ ]*\>|\<\/[ ]*\>)|(<(\/)?([\w\-\$!:\#\@.]+)(\s+[^>]*?(?:(?:[\w]+[_!@#$'"%^&*()+\-\[\]{};:\\|,.<\/?~`]*)|(?:'[^']*')|(?:"[^"]*")))*\s*(\/)?>)|([\w \s!@#$'"%^&*()+\-\[\]{};:\\|,.\/?`~]+)/mg;
  const openingTagRegex=/<([\w\-\$!:\#\@.]+)(\s+[^>]*?(?:(?:[\w]+[_!@#$'"%^&*()+\-\[\]{};:\\|,.<\/?`~]*)|(?:'[^']*')|(?:"[^"]*")))*\s*(\/)?>/m;
  const isOpeningTag = (source)=> openingTagRegex.test(source);
  const closingTagRegex= /<[\/]([\w$.:\-\@]+)[ ]*>/;
  const isClosingTag=(source)=> closingTagRegex.test(source);
  const isText=(text)=> !openingTagRegex.test(text) && /([\w \s!@#$'"%^&*()+\-\[\]{};:\\|,.\/?`~]+)/m.test(text);
  const openingTagAttrRegex=/^<[\w\-\$!\@:.]+([\s\S]*[^\/>])?\s*(\/)?>\s*$/m;
  const isOpeningCommentTag=(tag)=> /<!-->/.test(tag);
  const isClosingCommentTag=(tag)=> /<\/-->/.test(tag);
  const commentRegex=/((<!--)|(-->))/g;
  function compelToResolveTagname(self, vNode){
    if((isHouxerBuild(self) && isString(vNode.type) && !IS_VALID_TAGNAME(vNode.type))){;
      resolveInstanceWidgetNormalizer(self, vNode);
    }
  }
  function finishTagLoader(tagName, child_src, NodeList, metrics, self, config){
    let { trim, loaderList, trackNodes, deep } = metrics;
    let activeObj=loaderList[0][1];
    activeObj.rawChildren=child_src;
    if(isUncompiledChildrenTags(tagName)) activeObj.children=child_src;
    else if(child_src.trim() && deep){
      activeObj.children=__HTMLParser__(child_src, [], {
        trim,
        props:activeObj.props,
        rawChildren:child_src,
        ...config
      }, self);
    }
    compelToResolveTagname(self, activeObj);
    NodeList.push(activeObj);
    return [ [], "", [] ];
  }
  function normalize_Props_State(vnode, self){
    const props=vnode.props;
    
    return props;
  }
  function openingTagHydrate(tagMatch, NodeList, loaderList, trackNodes, child_src, isComment, metrics){
    const { config, self } = metrics;
    const is_hyperscript=config.is_hyperscript;
    let [ match, tagName ] =isOpeningTag(tagMatch) ? tagMatch.match(openingTagRegex) : [];
    let vnode= new vNodeClass(tagName);
    if(isOpeningCommentTag(tagMatch)){
      vnode= new comment();
      if(isComment){
        child_src=child_src+tagMatch;
      }else{
        isComment=true;
        loaderList.push(['comment', vnode]);
      }
    }else if(isComment){
      child_src=child_src+tagMatch;
    }
    if(isComment) return [ true, child_src, true ];
    const [ attrsMatch, attrs, selfClosed ] = tagMatch.match(openingTagAttrRegex) ;
    vnode.props=__HTMLAttrsParser__(attrs, config, self);
    if(!is_hyperscript && isHouxerBuild(self)) vnode.props=normalize_Props_State(vnode, self);
    if(hasOwn(vnode.props, 'key')){
      vnode.key=vnode.props.key;
      delete vnode.props.key;
    }
    if(attrs && /::([\w\-$]+)/.test(tagName)){
      if(!hasOwn(vnode.props, 'exp')  || len(vnode.props) > 1 ) vnode.props={
        exp:attrs
      }
    }
    if(len(vnode.props) < 1) vnode.props = null;
    const isSelfClosed= selfClosed && selfClosed.trim() == "/";
    if( (IS_HTML_VOID_TAG(tagName) || isSelfClosed) && !len(loaderList)){
      vnode.children=null;
      vnode.rawChildren=null
      compelToResolveTagname(self, vnode);
      NodeList.push(vnode);
      return [ false, child_src, false ];
    }
    if(len(loaderList)) {
      child_src=child_src+tagMatch;
      trackNodes.push(tagName);
      return [ false, child_src, false ];
    }
    loaderList.push([tagName, vnode]);
    return [ true, child_src, false ];
  }
  function __HTMLParser__(source, NodeList=[], config={}, self){
    if(!isString(source) && !source.trim()) return !isArray(NodeList) ? [] : NodeList;
    source=source.replace(generateBlockTagRegex(isHouxerBuild(self) ? self[$$$core].settings.delimiters : undefined), (match, timing, ClosingTag, name, value, selfClosed)=>{
      return `<${ClosingTag ? "/" : "" }::${name} ${ !ClosingTag ? "exp="+'"'+value+'"' : "" } ${selfClosed ? "/" : ""}>`;
    }).replace(commentRegex, (match, path, r)=>{
      return /<!--/.test(match) ? "<!-->" : /-->/.test(match) ? "</-->" : match ;
    });
    let tag_matches=source.match(openingTagsRegex);
    let { trim=false, props=null, rawChildren="", isComment=false, deep=true }=config;
    let loaderList=[];
    let child_src="";
    let trackNodes=[];
    let skipComment=false;
    NodeList = NodeList || [];
    for(let [ index, tagMatch ] of tag_matches.entries()){
      if(trim && !(len(loaderList) && isUncompiledChildrenTags(loaderList[0][0]) )){ 
        tagMatch = tagMatch.trim();
        if(tagMatch == "") continue;
      }else if(!trim && !(len(loaderList) && isUncompiledChildrenTags(loaderList[0][0]) )) tagMatch=tagMatch.trim();
      if(emptyTagRegex.test(tagMatch)){
        // tagMatch=tagMatch.replace(emptyTagRegex, (match, )=>{
        //   return
        // }
      }
      if(isOpenEmptyTag(tagMatch)) tagMatch = "<hx:fragment>";
      else if(isCloseEmptyTag(tagMatch)) tagMatch = "</hx:fragment>";
      if(isOpeningCommentTag(tagMatch) || isOpeningTag(tagMatch) ) {
        if(isOpeningCommentTag(tagMatch) && len(loaderList)) {
          child_src=child_src+tagMatch.slice(0, -1);
          skipComment=true;
          continue
        }
        const response=openingTagHydrate(tagMatch, NodeList, loaderList, trackNodes, child_src, isComment,{
          config,
          self
        });
        child_src = response[1];
        isComment=response[2];
        if(!response[0]) continue;
      }else if(isClosingCommentTag(tagMatch) || isClosingTag(tagMatch) ){
        if(isClosingCommentTag(tagMatch) ){
          if(skipComment){
            child_src=child_src+tagMatch.slice(2);
            skipComment=false;
            continue;
          }
          if(isComment){
            const comment=loaderList[0][1];
            if(isHtmlComment(comment)) comment.content=child_src;
            child_src="";
            loaderList=[];
            isComment=false;
            NodeList.push(comment);
          }
          continue;
        }else if(isComment){
          child_src=child_src+tagMatch;
          continue;
        }
        let [ match, tagName ]=tagMatch.match(closingTagRegex);
        let lastLoader=trackNodes[len(trackNodes)-1];
        if(len(loaderList)){
          if(len(trackNodes) && new Set(trackNodes).has(tagName) ){
            child_src=child_src+tagMatch;
            let mIndex=trackNodes.findLastIndex((f)=> f== tagName)
            if(mIndex > 0) trackNodes.splice(mIndex, 1);
            continue;
          }else if(tagName == loaderList[0][0]){
            [ loaderList, child_src, trackNodes ] = finishTagLoader(tagName, child_src, NodeList, {
              trim,
              loaderList,
              trackNodes,
              deep
            }, self, config)
          }else child_src=child_src+tagMatch;
        }
      }else if(isText(tagMatch)){
        if(len(loaderList)) child_src=child_src+tagMatch;
        else NodeList.push(tagMatch);
      }
    }
    if(len(loaderList)){
      if(isComment){
        const comment=loaderList[0][1];
        if(isHtmlComment(comment)) comment.content=child_src;
        child_src="";
        loaderList=[];
        isComment=false;
        trackNodes=[];
      }else {
        finishTagLoader(loaderList[0][0], child_src, NodeList, {
        trim,
        loaderList,
        trackNodes,
        deep
      }, self, config)
      }
    }
    return NodeList;
  }
  function HTMLParser(html, NodeList, config, self ){
    return __HTMLParser__(...arguments);
  }
  function negotiateRawDirective(self, node){
    if(!node.props) return;
   const { hasDir, getDir, getKey } = dirExistenceCheck(node.props, "$$raw");
    if(isTrue(hasDir) && isHouxerBuild(self) )  {
      node.filesFilter['dir--raw']=getDir;
    }
  }
  function connectAncestorsProps(self, Vnode, hx__VNode, NodeList){
    if(!isHouxerVNode(Vnode) && isHouxerVNode(hx__VNode)) return;
    if(Vnode.render_tracked && hx__VNode){
      hx__VNode.render_tracked=true
      hx__VNode.VNodeManager.patchFlags.isHoisted=true
    }
  }
  function specializedTemplateProductionProcessor(self, attributes, node, metrics, isRerender=false, config ){
    let [ hx__VNode, NodeList , tagName, fall ]=metrics;
    let Vnode;
    if(config.if_Block && !config.props?.status) return
    if(self){
      negotiateRawDirective(self, node);
      if(IS_VALID_TAGNAME(tagName)) config={
        contextScope:"children_Block",
        children_Block:true,
        props:{
          subscriptions:[]
        },
        ctx:{}
      }
      const children=function render(self, hx__VNode){
        return IS_VALID_TAGNAME(tagName) ? _HouxerTemplateParser(node.rawChildren, self, true, hx__VNode, fall, isRerender, config ) : node.rawChildren;
      }
      let props=()=>len(attributes) ? attributes : null;
      const Node=()=> _createVirtualElement(node, self, false, hx__VNode?.LabContext, arrSet(NodeList), fall, isRerender, hx__VNode );
      Vnode=Node();
      Vnode.compiler_options=assign(Vnode.compiler_options, {
        props, children, type:tagName, hx__VNode, Node
      });
      connectAncestorsProps(self, Vnode, hx__VNode, NodeList)
    }else{
      let children=null;
      if(node.children){
        children= isUncompiledChildrenTags(tagName) ? node.children : _HouxerTemplateParser(node.rawChildren, null, true);
      }
      Vnode={
        type:tagName, 
        props:len(attributes) ? attributes : null,
        children
      }
    }
    NodeList.add(Vnode)
  }
  const validAttrNameRegex= /[\w\$]+/;
  function transcript_to_VNodeClass(){
    
  }
  function templateElementNodeCompiler(self, vNode, hx__VNode, config, isRerender, NodeList, fall, ign=false ){
    let { type:tagName, props, children, rawChildren, key } = vNode;
    let attributes=props;
    let context=smartDextCtxMerging(hx__VNode?.LabContext||{}, fall||{});
    if(config) mountConstBlockTransform(self, context, config, hx__VNode);
    if(config && config.contextScope === 'children_Block'){
    }
    vNode.hx__VNode=hx__VNode;
    vNode.ctx=context;
    const args=()=> [ hx__VNode, NodeList, tagName, context ];
    if(isBlockTag(tagName)) {
      if(!isHouxerBuild(self)) {
        $Debug(`block tags Cannot be used in build/static templates mode`, self, true);
      }else blockElementsPreProcessors(self, vNode, isRerender, args(), config );
    }else specializedTemplateProductionProcessor(self, attributes, vNode, args(), isRerender, config);
  }
  function templateTextNodeCompiler(self, node, hx__VNode, config, isRerender, NodeList, fall){
    if(node){
      let LabContext;
      if(len(config.ctx)){
        fall=smartDextCtxMerging(fall||{}, config.ctx||{})
      }
      if(fall) {
        LabContext=smartDextCtxMerging(hx__VNode?.LabContext || {} , fall );
        if(hx__VNode) {
          hx__VNode.LabContext=LabContext
          LabContext=null
        }
      }
      const value=node;
      node=self ? new HouxerTextVNode(self, value,  hx__VNode, LabContext ) : value;
      
      if(isHouxerTextVNode(node)) node.compiler_options=assign(node.compiler_options,{ 
        type:'text', 
        value, 
        hx__VNode 
      });
      NodeList.add(node);
    }
  }
  function generateTemplateClasses(self, parser, hx__VNode, config, isRerender, NodeList, fall ){
    for (let [ index, node ] of parser.entries()){
      if(node ){
        if(isString(node)){
          templateTextNodeCompiler(self, node, hx__VNode, config, isRerender, NodeList, fall);
        }else if(isHtmlComment(node)){/*Ignore comment nodes*/pass;
        }else if(isRenderVNodeClass(node)){
          templateElementNodeCompiler(self, node, hx__VNode, config, isRerender, NodeList, fall )
        }
      }
    }
  }
  function _HouxerTemplateParser(html, self, parent, hx__VNode, fall, isRerender=false, config={} ){
    if(!html && !_validateType(html, (String, Array, Object))) return null;
    const parser= isString(html) ? __HTMLParser__(html, [], {
      trim:true,
      is_hyperscript:isHouxerBuild(self) && config.is_hyperscript
    }, self) : isObject(html) ? [ html ] : isArray(html) ? html : [] ;
    const NodeList=new Tuple();
    generateTemplateClasses(self, parser, hx__VNode, config, isRerender, NodeList, fall );
    if(self) return _getNodeListResponse(NodeList.list(), parent);
    else return len(NodeList) > 1 ? NodeList.list() : len(NodeList) === 1 ? NodeList.shift() : null ;
  }
  function mountConstBlockTransform(self, context, config, hx__VNode){
    if(!isValidCtxType(config.contextScope) && !config.ctx && !len(config.ctx)) return;
    if(config.ctx && hasOwn(config.ctx||{}, $$dexTransformKey)){
      smartDextCtxMerging(context, config.ctx);
    }else if(config.ctx && len(config.ctx) && !hasOwn(context, keys(config?.ctx||{})[0] )){
      const key=keys(config.ctx)[0];
      if(key) {
        context[key]=config.ctx[key];
      }
    }
    return context;
  }
  function controlBuiltInBlocks(self, node, blockN, isRerender, metrics, config){
    const [ hx__VNode, NodeList, tagName, context, fall ] = metrics ;
    const args=()=>[ self, node, blockN, isRerender, metrics ]
    const children=node.children
    const exp=node.props.exp
    let template=[]
    let subscribers=[];
    let data;
    const ctx=[children, exp ]
    if(blockN === 'if') template = blockIFPreprocessor(...args(), ctx);
    else if(blockN === 'else' || blockN === "else:if") blockElseIfPreprocessor(self, node, config, blockN);
    else if(blockN === 'for') template = blockForProcessor(...args(), ctx);
    else if(blockN === 'const') blockConstPreprocessor(...args(), ctx, config);
    return !isArray(template) ? (_validateType(template, [Set, Tuple]) ? [...arrSet(template)] : [template] ) : template ;
  }
  function blockConstPreprocessor(self, node, blockN, isRerender, metrics , [children, exp], config){
    const [ hx__VNode, NodeList, tagName, context, fall ] = metrics ;
    if(!isValidCtxType(config.contextScope)){
      $Debug(`"::const" block expects to be a direct sibling  within a widget slot, a ::for/::if block or an element scope\n\ncannot be used on a top level scope`, self, true);
      return [] ;
    }else if(!variableDeclarationRegex.test(exp)){
      $Debug(`"${exp}" statement is not recognised or not a valid statement or expression`, self);
      return []
    }
    let [ match, variable, expression ] = exp.match(variableDeclarationRegex);
    variable=variable.trim();
    if(!isDestructureSyntax(variable) && !isValidIdentifier(variable)){
      $Debug(`"${variable}" is an invalid identifier`, self);
      return []
    }
    const data = _$runModelBind(self, expression.trim(), hx__VNode || context );
    if(isDestructureSyntax(variable)){
      if(isFalse(destructWarn(variable, data, self))){
        return []
      }
      config.ctx[$$dexTransformKey]={
        sourcesArray:[data],
        syntaxArray:[variable]
      }
    }else if(!hasOwn(context, variable)){
      define(config.ctx, variable, { 
        value:data, 
        enumerable 
      });
    }
  }
  function blockForProcessor(self, node, blockN, isRerender, metrics , [children, exp]){
    const [ hx__VNode, NodeList, tagName, context, fall ] = metrics ;
    let Loop_Data=For_Loop(self, exp, hx__VNode, true);
    let template = []
    if(!isIterable(Loop_Data.obj) && !isNumber(Loop_Data.obj)){
      $Debug(`${getType(Loop_Data.obj)} value passed to the if block is not an iterable object`, self, true);
      return template;
    }
    function factoryRender(option, config){
      return _HouxerTemplateParser(children, self, true, hx__VNode, option, isRerender, config);
    }
    iterate({
      value:unwrap(Loop_Data.obj),
      type:Loop_Data.loopType
      }, (value, key, index)=>{
      const options=assign(fall||{}, {});
      const config={
        contextScope:'for_Block',
        for_Block:true,
        props:{
        
        },
        ctx:{}
      }
      mapCTXFallProps(self, {
        valToken:Loop_Data.valToken?.trim(),
        keyName:Loop_Data.keyName?.trim(),
        index:Loop_Data.index?.trim()
      }, { 
        ky:key,
        vl:value,
        count:index
      }, options );
      const source=factoryRender(options, config);
      if(isCollection(source)){
        for(let [ ind, vnode] of getIterator(source)){
          template.push(vnode);
        }
      }else template.push(source);
      
    });
    return template;
  }
  function blockIFPreprocessor(self, node, blockN, isRerender, metrics, [rawChildren, exp]){
    const [ hx__VNode, NodeList, tagName, context, fall ] = metrics ;
    const children=node.children;
    const [ subscribers, data ]=effectDependencyTracking(self, ()=>{
      return _$runModelBind(self, exists(exp.trim()) ? exp : "undefined", hx__VNode);
    })
    let template = []
    const condition = unwrap(data) ? true : false;
    const config={
      contextScope:"if_Block",
      if_Block:true,
      props:{
        status:condition,
        prevBlock:"::if",
        activeBlock:"::if",
        shouldContinue:!condition
      },
      ctx:{},
      keywordLists:[]
    }
    for(const [index, vNode] of children.entries()){
      const res=conditionalBlockCompile(self, vNode, metrics, config, NodeList, vNode.props?.exp);
      if(!res) break;
    }
  }
  function conditionalBlockCompile(self, vNode, metrics, config, NodeList, exp){
    const [ hx__VNode, tagName, context, fall ] = metrics ;
    const isRerender=false
    const blockN=!isString(vNode) ? ( isBlockTag(vNode.type) ? vNode.type.slice(2) : vNode.type) : vNode;
    if(isString(vNode)){
      if(!config.props.status) return true;
      const node=new HouxerTextVNode(self, vNode);
      NodeList.add(node);
      return true;
    }else if( blockN === 'else:if'){
      if(!conditionTagOrderCheck(self, config, 'else:if')) return false;
      if(!config.props.shouldContinue) return false;
      const [ subscribers, data ]=effectDependencyTracking(self, ()=>{
        return _$runModelBind(self, exists(exp.trim()) ? exp : "undefined", hx__VNode);
      })
      const condition=unwrap(data) ? true : false;
      config.props.status=condition;
      config.props.shouldContinue=!condition;
      return true;
    }else if(blockN === "else" ) {
      if(!conditionTagOrderCheck(self, config, 'else')) return false;
      if(!config.props.shouldContinue) return false;
      config.props.status=true;
      config.props.shouldContinue=false;
      return true;
    }
    if(!config.props.status) return true;
    const vNodes=_HouxerTemplateParser(vNode, self, true, hx__VNode, fall, isRerender, config);
    iterate({
      value:vNodes,
      type:"of"
    }, (node)=> {
      NodeList.add(node);
    });
    return true;
  }
  function conditionTagOrderCheck(self, config, tag){
    const prev=config.keywordLists[len(config.keywordLists)-1];
    if(prev === 'else' && (tag === 'else' || tag === 'else:if')){
      $Debug(`An "${prev}" block already existing\n\nUnresolved Error:: cannot precced an "${tag}" block`, self, true);
      return false;
    }
    config.keywordLists.push(tag);
    return true;
  }
  function blockElseIfPreprocessor(self, node, config, blockN){
    $Debug(`The "${blockN}" block cannot be used outside of the "::if" template block scope`, self, true);
    return;
  }
  function instance_Has_Block(self, name ){
    name = name.startsWith("::") ? name.slice(2) : name;
    return _mapValue(self[$$$register]?.blocks || {}, name ) ;
  }
  const normalize_Block=(self, name)=>{
    name = name.startsWith("::") ? name.slice(2) : name;
    return _mapValue(self[$$$register].blocks, name) ? self[$$$register].blocks[name]: null;
  }
  function blockElementsPreProcessors(self, vNode, isRerender, metrics, config){
    let children = vNode.children;
    const [ hx__VNode, NodeList, tagName, context, fall ] = metrics ;
    const blockN=tagName.slice(2).trim();
    let renderedNodes=[];
    // log(blockN, vNode, children)
    if(isBuiltinBlocks(blockN)) {
      renderedNodes = controlBuiltInBlocks(self, vNode, blockN, isRerender, metrics, config)
    }else if(instance_Has_Block(self, blockN)){
      renderedNodes=customBlocksTraverse(self, vNode, blockN, isRerender, metrics);
    }else{
      $Debug(`((Block Resolver Error))\n\n"${blockN}" block is not a registered block element`, self, true);
    }
    for(const [ index, vnode ] of (!isArray(renderedNodes) ? (_validateType(renderedNodes, [Set, Tuple]) ? [...arrSet(renderedNodes)] : [renderedNodes] ) : renderedNodes).entries()){
      if(vnode) NodeList.add(vnode);
    }
  }
  function customBlocksTraverse(self, node, blockN, isRerender, metrics){
    let [ hx__VNode, NodeList, tagName, context, fall ] = metrics ;
    const children=node.rawChildren;
    const [ subscribers, data ]=effectDependencyTracking(self, ()=>{
      return _$runModelBind(self, node.props.exp, hx__VNode);
    });
    function factoryRender(ctx={}){
      if(!isPObject(ctx)){
        $Debug(`context data passed to factoryRender expects a plain object`, self);
      }
      fall=smartDextCtxMerging(fall||{}, ctx);
      return _HouxerTemplateParser(children, self, true, hx__VNode, fall, isRerender);
    }
    const template = factoryRender()
    const block=normalize_Block(self, blockN );
    const blockCalllback=isObject(block) ? block.block : block
    const response=blockCalllback.call(self.__public_model__, !template ? [] : !isArray(template) ? (_validateType(template, [Set, Tuple]) ? [...arrSet(template)] : [template] ) : template, data, factoryRender )
    return !response ? [] : !isArray(response) ? (_validateType(response, [Set, Tuple]) ? [...arrSet(response)] : [response] ) : response
  }
  function _getNodeListResponse(NodeList, parent=false){
    NodeList=isSet(NodeList) ? arrSet(NodeList) : isTuple(NodeList) ? NodeList.list() : NodeList;
    if(isTrue(parent) && len(NodeList)) {
      const response = len(NodeList) > 1 ? NodeList : NodeList[0];
      return isString(response) ? new HouxerTextVNode(parent, response) : response ;
    }else if(len(NodeList)) return len(NodeList) > 1 ?  new HouxerFragmentVNode(parent, NodeList) : ( isPrimitive(NodeList[0]) ? new  HouxerTextVNode(parent, isNull(NodeList[0]) ? "" :  NodeList[0]) : NodeList[0] ) ;
    else return null ;
  }
  function html( strings, ...values){
    const html = strings.reduce(( acc, str, i) => {
      const value = !isNull( values[i]) ? values[i] : '';
      return acc + str + value;
    }, ''); 
    if(!isString(html)){
      $Debug(`html parser helper expects strings values`);  return null;
    }
    return HTMLParser( html, [], {
      trim:true
    }, null);
  };
  function importStyleSheet(path){
    let el=createHouxerElement({
      type:'link',
      props:{
        rel:'stylesheet',
        href:path
      }
    })
  }
  function markdown(mkd){
    if(!isString(mkd)){
      $Debug(`markdown helper expects strings values`);
      return null
    }
  }
  function createCustomElement(options){
    return _createCustomElement(...arguments)
  }
  function _createCustomElement(opts){
    this.is_Custom_Node=true;
    const response=validateCollectionArgs(arguments, {
      count:1,
      validators:[[Function,Object]],
      name:"createCustomElement"
    })
    if(!response) return
    opts=defineWidget(opts);
    const isMNEOwnOptions=opt=>_mapValue("plugin,onConnected,onDisconnected,onAdopted,onAttrChanged",opt);
    entries(opts).forEach(([key, value])=>{
      if(!isMNEOwnOptions(key) && !isValidWidgetOption(key)){
        $Debug(`invalid option value....\n\n "${key}" is not a recognised createCustomElement option `);
        return;
      }
    });
    const LifeCycleHooksList="onConnected,onDisconnected, onAdopted,onAttrChanged,plugin";
    let Hooks={};
    entries(opts).forEach(([ind, value])=>{
      if(_mapValue(LifeCycleHooksList, ind)){
        if(!isFunction(value)){
          $Debug(`LifeCycle callback error\n\n"${ind}" is a callback function, received an invalid type`);
          return;
        }
        if('onConnected' === ind) define(Hooks, 'connectedCallback',{value, configurable});
        if('onDisconnected' === ind) define(Hooks, 'disConnectedCallback',{value, configurable});
        if('onAdopted' === ind) define(Hooks, 'adoptedCallback',{value, configurable});
        if('onAttrChanged' === ind) define(Hooks, 'attributeChangedCallback',{value, configurable});
      } 
    })
    houxerCustomNativeElement.prototype.disConnectedCallback=Hooks.disConnectedCallback || pass;
    houxerCustomNativeElement.prototype.adoptedCallback=Hooks.adoptedCallback || pass;
      houxerCustomNativeElement.prototype.attributeChangedCallback=Hooks.attributeChangedCallback || pass;
    houxerCustomNativeElement.prototype.connectedCallback=connectedCallback;
    function connectedCallback(){
      const props=new Object();
      if(len(entries(this.attributes))){
        for( const [key, attr ] of entries(this.attributes)) {
          const { name, value } = attr;
          props[name]=value
        }
      }
      const shadow=this.attachShadow({ mode: 'open'});
      const template=defineVNode({
        type:opts,
        props
      })
      // this.replaceWith(template)
      shadow.appendChild(template);
      const user_defined_callback=Hooks.connectedCallback || pass
      user_defined_callback.call(this, ...arguments);
    }
    function render(){
      return houxerCustomNativeElement;
    }
    render.define=function define(name, inherit){
      if(!isString(name) || isEmptyStr(name) || IS_VALID_TAGNAME(name)){
        $Debug('Name positional argument passed to define is not a string or a valid name value\n\n or may have conflicted with native html/svg tags');
        return;
      }
      if(inherit && !isString(inherit) && !IS_HTML_TAG(inherit)){
        $Debug(`problem with the inherit value, \n\n may not be a string value or a valid HTML tagName`);
        $Debug(`CustomElement registration failed`);
        return;
      }
      customElements.define(name, houxerCustomNativeElement, inherit ? { extends:inherit} : {})
    }
    return render;
  }
  createCustomElement=createCustomElement.bind({});
  const validStoreOptions="model,actions";
  const isValidStoreOption=opt=>_mapValue(validStoreOptions, opt);
  class effectStorePlugin{
    constructor(data){
      
    }
    plugin=function plugin(build, options){
      const store=createObj('Store')
      build.property('$store', store);
    }
  }
  function openEffectStore(data){
    return new effectStorePlugin(data);
  }
  class Anchor extends Widget{
    constructor(){
      super()
      this[$$BuiltinWidgetKey]='hx:acchor'
    }
    params={
      to:{
        type:String,
        default:'/'
      }
    }
    handlers={
      clickHandler(){
        
      }
    }
    build(params, { slots }){
      return ()=>defineVNode({type:'a', 
        props:{ 
          onClick:useModifiers( this.clickHandler, [ 'prevent' ]),
        }, 
        children: slots.default()
      });
    }
  }
  class Display extends Widget {
    constructor(){
      super()
      this[$$BuiltinWidgetKey]='hx:nav-view'
    }
    build(params, { slots }){
      
      return ()=> slots.default()
    }
  }
  function mergerPathsToRouter(router){
    
  }
  class buildRouterPlugin{
    constructor(routes){
      mergerPathsToRouter(this)
    }
    plugin=function plugin(build, options){
      build.widget('hx:anchor', Anchor)
      const router=createObj('Router')
      useModel.call(build, { 
        $router:router
      } )
    }
    extend(routes){
      mergerPathsToRouter(this);
      return this;
    }
    
  }
  const validRouterOptions="as,widget,path";
  const isRouteOpt=key=>_mapValue(validRouterOptions, key);
  class URLRouterPath{
    constructor(path, widget, as){
      this.path=path
      this.widget=widget
      this.as=as
    }
    routify(){
      
    }
  }
  const isURLRouterPath=route=>route instanceof URLRouterPath
  function _path(path, widget, alias){
    if(!isString(path)){
      $Debug(`parameter 1 received at path is not a string valid path`)
    }else if(!path.includes('/')){
      $Debug(`"${path}" is invalid\n\nMissing "/" decorator`)
    }else if(!validHouxerWidget(widget) && !isPromise(widget)){
      $Debug(`parameter 2 of path macro expects a valid Houxer Widget or an asynchronous Promise instance`)
    }else if(alias && !isString(alias)){
      $Debug(`parameter 3 "alias" alias expects a string value`);
    }
    return new URLRouterPath(...arguments);
  }
  function path(path, widget, alias){
    return _path(...arguments);
  }
  async function asyncPath(path, widget, alias){
    return await path(...arguments)
  }
  function _buildRouter(routes){
    if(!isArray(routes)){
      $Debug(`"buildRouter" at parameter 1, routes expects an array value of routes object maps`);
      return ;
    }
    for (const [ ind,  path] of routes.entries()){
      if(!isURLRouterPath(path)){
        $Debug(`Path arguments values  must be passed to the "Houxer.path" routing macro\n\nAt the route index ${ind+1}`);
        return ;
      }
      
    }
    return new buildRouterPlugin(routes)
  }
  function buildRouter(routes){
    return _buildRouter(...arguments)
  }
  function setAsyncSettings(opts){
    if(opts.buildConfig && isPObject(opts.buildConfig)) opts.buildConfig.isAsync=true;
    else if(!opts.buildConfig || !isPObject(opts.buildConfig)) opts.buildConfig={ 
      isAsync:true 
    };
    return opts;
  }
  async function _asyncWidget(opts){
    opts=await defineWidget(opts);
    opts=await setAsyncSettings(opts);
    return await opts;
  }
  function asyncWidget(opts){
    return _asyncWidget(...arguments)
  }
  function defineWidget(opts, config ){
    return _defineWidget(...arguments)
  }
  function _defineWidget(opts, options){
    if(!validHouxerWidget(opts)){
      $Debug(`Value Error\n\n invalid value for the defineWidget macro\n/... at /././. at`);
      return;
    }else if(len(arguments) > 2){
      $Debug(`Parameter Error\n\nmax-2 argument required\n ${len(arguments)} given`);
      return;
    }else if(isPObject(opts) || isFunction(opts)){
      const type=isClass(opts) ? 'class-based' : isPFunction(opts) ? 'function-based' : 'object-based' ;
      let widget= new Object();
      if(isPFunction(opts)) {
        widget.build=opts;
      }else if(isPObject(opts)){
        for( const [ key, value ] of entries(opts)){
          if(!hasProp(widget, key)) widget[key]=value;
        }
      }else if(isClass(opts)) widget=new opts();
      if(options) {
        for( const [ key, value ] of entries(options)){
          if(!hasProp(widget, key ) && !isHouxerProp(key)) widget[key]=value;
        }
      }
      if(!hasOwn(widget, widgetTypeKey)) widget[widgetTypeKey]=type;
      return widget;
    }
  }
  function initialBuildTransform(options, propsOrChildren, childrenOrProps ){
    if(!validHouxerWidget(options)){
      $Debug(`initBuild Error\n\nCannot compile value as a Houxer widget\nMaybe an invalid houxer widget value`);
      return  ;
    }else if(isBuiltinWidget(options)){
      const name = _ToPascalCase(options[$$BuiltinWidgetKey].slice(3))
      $Debug(`The built-in ${name} widget cannot be used in an initBuild widget`);
      return ;
    }
    const widget = createVNodeClass(...propsAndChildrenGetter( ...arguments ));
    widget[initBuildInstaceKey]=true;
    return widget;
  }
  function _initBuild(options, props, children){
    const widget = initialBuildTransform(...arguments);
    if(!isRenderVNodeClass(widget)) return undefined;
    return new _Houxer_Build( widget );
  }
  function initBuild(options, propsOrChildren, childrenOrProps){
    return _initBuild(...arguments);
  }
  function createSSRStreamHack(vnodePlate, ssrConfig){
    const [ options, props = {} , children = [] ] = [ ...vnodePlate ];
    return vnodePlate;
  }
  function initSSRBuild(options, props, children){
    createSSRStreamHack( arguments, {
      type:'stream',
      render:None
    })
    return initBuild( ...arguments )
  }
  function boilerPlate(){
    
  }
  function defineElementOptionsValidator(options){
    const optionsName="type,props,children";
    if(!isPObject(options)){ 
      $Debug(`defineVNode Error\n expects an 'object' at......\n\nparameter 1`);
      return false;
    }else if(len(options) > 3){
      $Debug(`Options Error\n\n defineVNode does not accept more than 3 options props arguments`);
      return false
    }else if(!options.type && !_validateType(options.type, [String, Object, Function , _WidgetResolver ] )){
      $Debug(`Unexpected value passed to type in defineVNode\n\n"${getType(options.type)}" is an invalid type value to type option`);
      $Debug(`NOTE : The "type" option is required`);
      return false;
    }
    for(let [ name, opt ] of entries(options)){
      if(!_mapValue(optionsName, name)) {
        $Debug(`${name} is not a valid defineVNode options value`);
        return false;
      }else if(name === 'props' && opt && !isPObject(opt)){
        $Debug(`Element props property expects an object value\n\nUnexpected "${getType(opt)}" value`);
        return false;
      }else if(name  === 'children' && exists(opt) && !isChildrenNode(opt)){
        $Debug(`Element children property expects a valid houxer child node instance value\n\nUnexpected "${getType(opt)}" value`);
        return false;
      }
    }
    return true;
  }
  function createVNodeClass(type, props, children){
    return new vNodeClass(...arguments);
  }
  function renderVNodeClassElement ( self, vnodeClass ) {
    const { type, props, children } = vnodeClass;
    const Node = ( instance, hx__VNode ) => _createVirtualElement( vnodeClass , instance , true, null, null, null, null, hx__VNode ) ;
    const vnode = Node( self ) ;
    vnode.compiler_options = assign( vnode.compiler_options , { 
      props : () => props , 
      children : () => children , 
      type ,
      Node 
    } ) ;
    return vnode ;
  }
  function _defineVNode_ELEMENT(options){
    if(isFalse(defineElementOptionsValidator(options))) return undefined;
    let { type , props , children } = options ;
    const vNode= createVNodeClass( type, props, children ) ;
    vNode.is_hyperscript=true;
    if(validHouxerWidget(type)) vNode.GeneticProvider=type;
    return vNode;
  }
  function defineVNode(options){
    return _defineVNode_ELEMENT(options);
  }
  function TranslateWidgetPropsAndChildren(type, props, children){
    if(validHouxerWidget(type)){
      children =  !isNull(children) && !isArray( children ) && !isLazyRender(children) ? [ children ] : children ;
    }
    
  }
  const elements = createObj('Elements');
  function transform_Elements_build(){
    generate_native_elements_(HTML_TAGS.split(','));
    generate_native_elements_(SVG_TAGS.split(','));
    // generate_native_elements_(HTML_DEPRECATED_TAGS.split(','));
    // generate_native_elements_(SVG_DEPRECATED_TAGS.split(','));
    generate_native_elements_(MATHML_TAGS.split(','));
    for(const [ name, widget ] of entries(BUILT_IN_WIDGETS)){
      map_registration(name, function(propsOrChildren, childrenOrProps){
        return h(widget, propsOrChildren, childrenOrProps)
      });
    }
  }
  function generate_native_elements_(el_arr){
    for(const name of el_arr.values()){
      map_registration(name, function(propsOrChildren, childrenOrProps){
        return h(name.trim(), propsOrChildren, childrenOrProps)
      });
    }
  }
  function map_registration(name, value){
    name=IS_VALID_TAGNAME(name) && name.includes('-') ? _toCamelCase(name) : name.startsWith('hx:') ? _ToPascalCase(name.slice(3)) :name;
    value = Function('element', `
      return function _${ name.trim() }(propsOrChildren, childrenOrProps){
       return element(...arguments)
      }
    `)(value);
    define(elements, name, {
      value ,
      enumerable
    });
  }
  function perfomSpeedDiffing(start, end, diffing){
    
  }
  function _perfomanceTracker(callback){
    const startTime=traceBack();
    callback();
    const endTime=traceBack();
    return perfomSpeedDiffing(startTime, endTime, createObj('Performance', {
      h:0,
      m:0,
      s:0,
      ms:0
    }));
  }
  function Req__init__(urlOrOptions, methodOrOptions, options={}){
    let url;
    if(isPObject(urlOrOpts)){
      method=urlOrOpts.method||'GET'
      url=urlOrOpts.url
      delete urlOrOpts.method
      delete urlOrOpts.url
      options=urlOrOpts
    }else if(isString(urlOrOpts)){
      url=urlOrOpts
      if(isPObject(method)){
        method='GET'
        options=method
      }else if(isString(method)) method=method||'GET'
      else method='GET'
    }
    method=method.toUpperCase();
    return new Promise((resolve, reject)=>{
      const xhr=new XMLHttpRequest()
      xhr.open(method,url,options.async||true)
      if(hasOwn(options,'timeout')) xhr.timeout=options.timeout
      if(hasOwn(options,'headers')  && isPObject(options.headers)){
        for(const [header, value] of entries(options.headers)){
          xhr.setRequestHeader(header, value)
        }
      }
      resolveHooks(xhr, options)
      xhr.send()
      resolve(xhr.response)
    })
  }
  class _HouxerHttpRequestModule{
    post=function post(url,options){
      return new Req__init__(url,'POST',options)
    }
    get=function get(url, options){
      return new Req__init__(url,'GET',options)
    }
    delete =function del(url, options) {
      return new Req__init__(url,'DELETE',options)
    }
    head=function head(url, options){
      return new Req__init__(url,'HEAD',options)
    }
    patch=function patch(url, options){
      return new Req__init__(url,'PATCH',options)
    }
    put=function put(url, options){
      return new Req__init__(url,'PUT',options)
    }
    options=function options(url, options){
      return new Req__init__(url,'OPTIONS',options)
    }
    trace=function trace(url, options){
      return new Req__init__(url,'TRACE',options)
    }
    connect=function connect(url, options){
      return new Req__init__(url,'CONNECT',options)
    }
    request=function request(urlOrOptions, methodOrOptions, options){
      return new Req__init__(...arguments)
    }
  }
  function Request(urlOrOpts, methodOrOptions, options){
    return new Req__init__(...arguments)
  }
  assign(Request, new _HouxerHttpRequestModule());
  function resolveHooks(xhr, opts){
  
  }
  transform_Elements_build();
  _$compiler_engine_hydrator();

  global.createFormAdmin = createFormAdmin ;
  global.isToken = isToken ;
  global.scaffold = scaffold ;
  global.defineVNode = defineVNode ;
  global.get_version = get_version ;//dev
  global.h = h ;
  global.shallowStream = shallowStream ;
  global.None = None ;
  global.useBind = useBind ;
  global.useStyleSheet = useStyleSheet ;
  global.renderSlots = renderSlots ;
  global._escapeReverseDecoder = _escapeReverseDecoder ;
  global.HouxerCompilerSetup = HouxerCompilerSetup ;
  global.isReactiveToken = isReactiveToken ;
  global.trackEffectDeps = trackEffectDeps ;
  global._mapValue = _mapValue ;
  global.initBuild = initBuild ;
  global.useModifiers = useModifiers ;
  global._$runModelBind = _$runModelBind ;
  global.Memo = Memo ;
  global.postUpdate = postUpdate ;
  global.Suspense = Suspense ;
  global.initSSRBuild = initSSRBuild ;
  global.log = log ;//dev
  global.readonlyStream = readonlyStream ;
  global.preMount = preMount ;
  global.Portal = Portal ;
  global.postDestroy = postDestroy ;
  global.Anchor = Anchor ;
  global.Display = Display ;
  global.renderFor = renderFor ;
  global.Build = Build ;
  global.Self = Self ;
  global.asyncWidget = asyncWidget ;
  global.preUpdate = preUpdate ;
  global.shallowReadonlyStream = shallowReadonlyStream ;
  global.isShallowToken = isShallowToken ;
  global.Motion = Motion ;
  global.HTMLParser = HTMLParser ;
  global.Provider = Provider ;
  global.postMount = postMount ;
  global.postBuild = postBuild ;
  global.useTransform = useTransform ;
  global.unToken = unToken ;
  global.onSlotRender = onSlotRender;
  global.onSlotEffect = onSlotEffect;
  global.makePublish = makePublish ;
  global.defineConfig = defineConfig ;
  global.useStyleSheet = useStyleSheet ;
  global.useFallthrough = useFallthrough ;
  global.useSlots = useSlots ;
  global.useParams = useParams ;
  global.useAdapter = useAdapter ;
  global.useModel = useModel ;
  global._createVirtualElement = _createVirtualElement ;
  global.isReadonlyToken = isReadonlyToken ;
  global.preDestroy = preDestroy ;
  global.markdown = markdown ;
  global._validateType = _validateType ;
  global.FormField = FormField ;
  global.Any = Any ;
  global.mergeProps = mergeProps ;
  global.fields = fields ;
  global._getNodeListResponse = _getNodeListResponse ;
  global.deferTick = deferTick ;
  global._generateUUID = _generateUUID ;
  global.boilerPlate = boilerPlate ;
  global.Type = Type ;
  global.defineWidget = defineWidget ;
  global.isShallowStream = isShallowStream ;
  global.onCatch = onCatch ;
  global.createFormModel = createFormModel ;
  global.onEffect = onEffect ;
  global.onTracked = onTracked ;
  global.html = html ;
  global.getElementsByAttrName = getElementsByAttrName ;
  global.deferWatch = deferWatch ;
  global.readonlyToken = readonlyToken ;
  global._escapeDecoder = _escapeDecoder ;
  global.path = path ;
  global.withDirectives = withDirectives ;
  global.traverse = traverse ;
  global.observe = observe ;
  global.effectHook = effectHook ;
  global.batch = batch ;
  global.createHouxerElement = createHouxerElement ;
  global.memMove = memMove ;
  global.useOptions = useOptions ;
  global.useSignals = useSignals ;
  global.Widget = Widget ;
  global.len = len ;
  global.markRaw = markRaw ;
  global.isRaw = isRaw ;
  global.asyncPath = asyncPath ;
  global.validateProps = validateProps ;
  global.toReadonlyToken = toReadonlyToken ;
  global.fromReadonlyToken = fromReadonlyToken ;
  global.validateCollection = validateCollection ;
  global.isStream = isStream ;
  global.useReadonlyBypasser = useReadonlyBypasser ;
  global._HouxerTemplateParser = _HouxerTemplateParser ;
  global._EvalWith = _EvalWith ;
  global.stream = stream ;
  global.token = token ;
  global.createNativeElement = createNativeElement ;
  global.Request = Request ;
  global.computedToken = computedToken ;
  global.read = read ;
  global.factoryToken = factoryToken ;
  global.Form = Form ;
  global.isNativeElement = isNativeElement ;
  global.createWidgetElement = createWidgetElement ;
  global.fromToken = fromToken ;
  global.isFieldTypeOf = isFieldTypeOf ;
  global.tokenGENERATOR = tokenGENERATOR ;
  global.elements = elements ;
  global.getFieldType = getFieldType ;
  global.mountEffect = mountEffect ;
  global.toToken = toToken ;
  global._to_kebab_case = _to_kebab_case ;
  global.Token = Token ;
  global._ToPascalCase = _ToPascalCase ;
  global.openEffectStore = openEffectStore ;
  global._toCamelCase = _toCamelCase ;
  global.createTextElement = createTextElement ;
  global.buildRouter = buildRouter ;
  global.effectObject = effectObject ;
  global.cloneVElement = cloneVElement ;
  global.createCustomElement = createCustomElement ;
  global._createFragment = _createFragment ; //dev
  global.$Debug = $Debug ; //dev
  global.Fragment = Fragment ;
  global.createAgent = createAgent ;
  global.Exception = Exception ;
  global.isShallowReactiveToken = isShallowReactiveToken ;
  global.Tuple = Tuple ;
  global._GenerateRoot = _GenerateRoot ;
  global.mountStream = mountStream ;
  global.traceBack = traceBack ;
  global.withFallThrough = withFallThrough ;
  global.lazy = lazy ;
  global.version = version ;
  global.mountToken = mountToken ;
  global.raise = raise ;
  global.deepEqualityCheck = deepEqualityCheck ;
  global.isShallowReadonlyToken = isShallowReadonlyToken ;
  global.isShallowReadonlyStream = isShallowReadonlyStream ;
  global.toReadonlyStream = toReadonlyStream ;
  global.toShallowStream = toShallowStream ;
  global.toShallowReadonlyStream = toShallowReadonlyStream ;
  global.HTMLAttrsParser = HTMLAttrsParser ;
  global.animate = animate ;
  global.isReadonlyStream = isReadonlyStream ;
  global.isStateStream = isStateStream ;
  global.isComputedToken = isComputedToken ;
  global.useAgent = useAgent ;
  console.info( devInfo ) ; //dev
  return global ;
} )( ( { } ) ) ;
