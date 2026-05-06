import {
  Unit_instance1fbcbse1fwigr as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  Monotonic_instance6v32gqtywf7e as Monotonic_instance,
  ValueTimeMark__elapsedNow_impl_eonqvs1dlqois04h852 as ValueTimeMark__elapsedNow_impl_eonqvs,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  emptyList1g2z5xcrvp2zy as emptyList,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  joinTo3lkanfaxbzac2 as joinTo,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  hashCodeq5arwsb9dgti as hashCode,
  Enum3alwj03lh1n41 as Enum,
  toString30pk9tzaqopn as toString,
  toString1pkumu07cwy4m as toString_0,
  Exceptiondt2hlxn7j7vw as Exception,
  Exception_init_$Init$33ewqhqmjrfx6 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  Exception_init_$Init$393utbttlf2x4 as Exception_init_$Init$_0,
  HashMap_init_$Create$2pprpqyxxsq9t as HashMap_init_$Create$,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  LinkedHashSet_init_$Create$3o6z3oewjhki9 as LinkedHashSet_init_$Create$,
  LinkedHashMap_init_$Create$1f9mb1z5f3dxn as LinkedHashMap_init_$Create$,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  asReversed308kw52j6ls1u as asReversed,
  ArrayDeque_init_$Create$r76kkxocwn2b as ArrayDeque_init_$Create$,
  get_lastIndex1yw0x4k50k51w as get_lastIndex,
  toList3jhuyej2anx2q as toList,
  toMutableList3ewlpx8m5ca2q as toMutableList,
  getKClass1s3j9wy1cofik as getKClass,
  copyToArray2j022khrow2yi as copyToArray,
  arrayListOf1fz8nib0ncbow as arrayListOf,
  TimedValuew9j01dao9jci as TimedValue,
  ArrayDeque_init_$Create$2333dl090ltjt as ArrayDeque_init_$Create$_0,
  _Duration___get_inWholeMicroseconds__impl__8oe8vv19aiucvzsj6hp as _Duration___get_inWholeMicroseconds__impl__8oe8vv,
  Companion_getInstance1cdckxf15vkye as Companion_getInstance,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Exception_init_$Create$iibqj7jaauav as Exception_init_$Create$,
  split2bvyvnrlcifjv as split,
} from './kotlin-kotlin-stdlib.mjs';
import { ThreadLocalRef2gwn4e0n07y5w as ThreadLocalRef } from './Stately-stately-concurrency.mjs';
import { ConcurrentMutableMap_init_$Create$2pukvvine294o as ConcurrentMutableMap_init_$Create$ } from './Stately-stately-concurrent-collections.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(Koin, 'Koin', Koin);
initMetadataForCompanion(Companion);
initMetadataForClass(KoinApplication, 'KoinApplication');
initMetadataForClass(BeanDefinition, 'BeanDefinition');
initMetadataForClass(Kind, 'Kind', VOID, Enum);
initMetadataForClass(Callbacks, 'Callbacks', Callbacks);
initMetadataForClass(KoinDefinition, 'KoinDefinition');
initMetadataForClass(ClosedScopeException, 'ClosedScopeException', VOID, Exception);
initMetadataForClass(DefinitionOverrideException, 'DefinitionOverrideException', VOID, Exception);
initMetadataForClass(InstanceCreationException, 'InstanceCreationException', VOID, Exception);
initMetadataForClass(KoinApplicationAlreadyStartedException, 'KoinApplicationAlreadyStartedException', VOID, Exception);
initMetadataForClass(NoDefinitionFoundException, 'NoDefinitionFoundException', VOID, Exception);
initMetadataForClass(NoParameterFoundException, 'NoParameterFoundException', VOID, Exception);
initMetadataForClass(ExtensionManager, 'ExtensionManager');
initMetadataForClass(InstanceFactory, 'InstanceFactory');
initMetadataForClass(FactoryInstanceFactory, 'FactoryInstanceFactory', VOID, InstanceFactory);
initMetadataForCompanion(Companion_0);
initMetadataForClass(ResolutionContext, 'ResolutionContext');
initMetadataForClass(NoClass, 'NoClass', NoClass);
initMetadataForClass(SingleInstanceFactory, 'SingleInstanceFactory', VOID, InstanceFactory);
initMetadataForClass(Logger, 'Logger');
initMetadataForClass(EmptyLogger, 'EmptyLogger', EmptyLogger, Logger);
initMetadataForClass(Level, 'Level', VOID, Enum);
initMetadataForClass(Module, 'Module', Module);
initMetadataForClass(ParametersHolder, 'ParametersHolder', ParametersHolder);
initMetadataForClass(StringQualifier, 'StringQualifier');
initMetadataForClass(InstanceRegistry, 'InstanceRegistry');
initMetadataForClass(PropertyRegistry, 'PropertyRegistry');
initMetadataForCompanion(Companion_1);
initMetadataForClass(ScopeRegistry, 'ScopeRegistry');
initMetadataForClass(Scope, 'Scope');
initMetadataForObject(GlobalContext, 'GlobalContext');
initMetadataForObject(KoinPlatformTools, 'KoinPlatformTools');
//endregion
function Koin() {
  this.d5k_1 = new ScopeRegistry(this);
  this.e5k_1 = new InstanceRegistry(this);
  this.f5k_1 = new PropertyRegistry(this);
  this.g5k_1 = new ExtensionManager(this);
  this.h5k_1 = new EmptyLogger();
}
protoOf(Koin).i5k = function (modules, allowOverride, createEagerInstances) {
  var flattedModules = flatten(modules);
  this.e5k_1.m5k(flattedModules, allowOverride);
  this.d5k_1.r5k(flattedModules);
  if (createEagerInstances) {
    this.s5k();
  }
};
protoOf(Koin).s5k = function () {
  this.h5k_1.u5k('Create eager instances ...');
  // Inline function 'kotlin.time.measureTime' call
  // Inline function 'kotlin.time.measureTime' call
  var mark = Monotonic_instance.je();
  this.e5k_1.v5k();
  var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
  this.h5k_1.u5k('Created eager instances in ' + get_inMs(duration) + ' ms');
};
function loadModules($this, modules) {
  $this.w5k_1.i5k(modules, $this.x5k_1, false);
}
function Companion() {
}
protoOf(Companion).y5k = function () {
  var app = new KoinApplication();
  return app;
};
var Companion_instance;
function Companion_getInstance_0() {
  return Companion_instance;
}
function KoinApplication() {
  this.w5k_1 = new Koin();
  this.x5k_1 = true;
}
protoOf(KoinApplication).z5k = function (modules) {
  var tmp0 = this.w5k_1.h5k_1;
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  var lvl = Level_INFO_getInstance();
  if (tmp0.t5k_1.m2(lvl) <= 0) {
    // Inline function 'kotlin.time.measureTime' call
    // Inline function 'kotlin.time.measureTime' call
    var mark = Monotonic_instance.je();
    loadModules(this, modules);
    var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
    var count = this.w5k_1.e5k_1.a5l();
    this.w5k_1.h5k_1.b5l(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + get_inMs(duration) + ' ms');
  } else {
    loadModules(this, modules);
  }
  return this;
};
function startKoin(appDeclaration) {
  return KoinPlatformTools_instance.c5l().d5l(appDeclaration);
}
function BeanDefinition$toString$lambda(it) {
  return getFullName(it);
}
function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
  qualifier = qualifier === VOID ? null : qualifier;
  var tmp;
  if (secondaryTypes === VOID) {
    // Inline function 'kotlin.collections.listOf' call
    tmp = emptyList();
  } else {
    tmp = secondaryTypes;
  }
  secondaryTypes = tmp;
  this.e5l_1 = scopeQualifier;
  this.f5l_1 = primaryType;
  this.g5l_1 = qualifier;
  this.h5l_1 = definition;
  this.i5l_1 = kind;
  this.j5l_1 = secondaryTypes;
  this.k5l_1 = new Callbacks();
  this.l5l_1 = false;
}
protoOf(BeanDefinition).toString = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.c8(_Char___init__impl__6a9atx(91));
  this_0.a8(this.i5l_1);
  this_0.b8(": '");
  this_0.b8(getFullName(this.f5l_1));
  this_0.c8(_Char___init__impl__6a9atx(39));
  if (!(this.g5l_1 == null)) {
    this_0.b8(',qualifier:');
    this_0.a8(this.g5l_1);
  }
  if (!equals(this.e5l_1, Companion_getInstance_2().n5l_1)) {
    this_0.b8(',scope:');
    this_0.a8(this.e5l_1);
  }
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!this.j5l_1.p()) {
    this_0.b8(',binds:');
    var tmp = this.j5l_1;
    joinTo(tmp, this_0, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
  }
  this_0.c8(_Char___init__impl__6a9atx(93));
  return this_0.toString();
};
protoOf(BeanDefinition).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BeanDefinition))
    THROW_CCE();
  if (!this.f5l_1.equals(other.f5l_1))
    return false;
  if (!equals(this.g5l_1, other.g5l_1))
    return false;
  if (!equals(this.e5l_1, other.e5l_1))
    return false;
  return true;
};
protoOf(BeanDefinition).hashCode = function () {
  var tmp0_safe_receiver = this.g5l_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  result = imul(31, result) + this.f5l_1.hashCode() | 0;
  result = imul(31, result) + hashCode(this.e5l_1) | 0;
  return result;
};
var Kind_Singleton_instance;
var Kind_Factory_instance;
var Kind_Scoped_instance;
var Kind_entriesInitialized;
function Kind_initEntries() {
  if (Kind_entriesInitialized)
    return Unit_instance;
  Kind_entriesInitialized = true;
  Kind_Singleton_instance = new Kind('Singleton', 0);
  Kind_Factory_instance = new Kind('Factory', 1);
  Kind_Scoped_instance = new Kind('Scoped', 2);
}
function Kind(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Kind_Singleton_getInstance() {
  Kind_initEntries();
  return Kind_Singleton_instance;
}
function Kind_Factory_getInstance() {
  Kind_initEntries();
  return Kind_Factory_instance;
}
function Callbacks(onClose) {
  onClose = onClose === VOID ? null : onClose;
  this.o5l_1 = onClose;
}
protoOf(Callbacks).toString = function () {
  return 'Callbacks(onClose=' + toString(this.o5l_1) + ')';
};
protoOf(Callbacks).hashCode = function () {
  return this.o5l_1 == null ? 0 : hashCode(this.o5l_1);
};
protoOf(Callbacks).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Callbacks))
    return false;
  var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
  if (!equals(this.o5l_1, tmp0_other_with_cast.o5l_1))
    return false;
  return true;
};
function KoinDefinition(module_0, factory) {
  this.p5l_1 = module_0;
  this.q5l_1 = factory;
}
protoOf(KoinDefinition).toString = function () {
  return 'KoinDefinition(module=' + toString_0(this.p5l_1) + ', factory=' + toString_0(this.q5l_1) + ')';
};
protoOf(KoinDefinition).hashCode = function () {
  var result = this.p5l_1.hashCode();
  result = imul(result, 31) + hashCode(this.q5l_1) | 0;
  return result;
};
protoOf(KoinDefinition).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof KoinDefinition))
    return false;
  var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
  if (!this.p5l_1.equals(tmp0_other_with_cast.p5l_1))
    return false;
  if (!equals(this.q5l_1, tmp0_other_with_cast.q5l_1))
    return false;
  return true;
};
function ClosedScopeException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, ClosedScopeException);
}
function DefinitionOverrideException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, DefinitionOverrideException);
}
function InstanceCreationException(msg, parent) {
  Exception_init_$Init$_0(msg, parent, this);
  captureStack(this, InstanceCreationException);
}
function KoinApplicationAlreadyStartedException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, KoinApplicationAlreadyStartedException);
}
function NoDefinitionFoundException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, NoDefinitionFoundException);
}
function NoParameterFoundException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, NoParameterFoundException);
}
function ExtensionManager(_koin) {
  this.r5l_1 = _koin;
  var tmp = this;
  // Inline function 'kotlin.collections.hashMapOf' call
  tmp.s5l_1 = HashMap_init_$Create$();
}
function FactoryInstanceFactory(beanDefinition) {
  InstanceFactory.call(this, beanDefinition);
}
protoOf(FactoryInstanceFactory).u5l = function (context) {
  return this.w5l(context);
};
function Companion_0() {
  this.x5l_1 = '\n\t';
}
var Companion_instance_0;
function Companion_getInstance_1() {
  return Companion_instance_0;
}
function InstanceFactory(beanDefinition) {
  this.v5l_1 = beanDefinition;
}
protoOf(InstanceFactory).w5l = function (context) {
  context.y5l_1.u5k("| (+) '" + this.v5l_1.toString() + "'");
  try {
    var tmp0_elvis_lhs = context.c5m_1;
    var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
    return this.v5l_1.h5l_1(context.z5l_1, parameters);
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var stack = KoinPlatformTools_instance.e5m(e);
      context.y5l_1.f5m("* Instance creation error : could not create instance for '" + this.v5l_1.toString() + "': " + stack);
      throw new InstanceCreationException("Could not create instance for '" + this.v5l_1.toString() + "'", e);
    } else {
      throw $p;
    }
  }
};
function ResolutionContext(logger, scope, clazz, qualifier, parameters) {
  qualifier = qualifier === VOID ? null : qualifier;
  parameters = parameters === VOID ? null : parameters;
  this.y5l_1 = logger;
  this.z5l_1 = scope;
  this.a5m_1 = clazz;
  this.b5m_1 = qualifier;
  this.c5m_1 = parameters;
  this.d5m_1 = "t:'" + getFullName(this.a5m_1) + "' - q:'" + toString(this.b5m_1) + "'";
}
function NoClass() {
}
function getValue($this) {
  var tmp0_elvis_lhs = $this.h5m_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    var message = "Single instance created couldn't return value";
    throw IllegalStateException_init_$Create$(toString_0(message));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function SingleInstanceFactory$get$lambda(this$0, $context) {
  return function () {
    var tmp;
    if (!this$0.i5m($context)) {
      this$0.h5m_1 = this$0.w5l($context);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function SingleInstanceFactory(beanDefinition) {
  InstanceFactory.call(this, beanDefinition);
  this.h5m_1 = null;
}
protoOf(SingleInstanceFactory).i5m = function (context) {
  return !(this.h5m_1 == null);
};
protoOf(SingleInstanceFactory).w5l = function (context) {
  var tmp;
  if (this.h5m_1 == null) {
    tmp = protoOf(InstanceFactory).w5l.call(this, context);
  } else {
    tmp = getValue(this);
  }
  return tmp;
};
protoOf(SingleInstanceFactory).u5l = function (context) {
  var tmp = KoinPlatformTools_instance;
  tmp.j5m(this, SingleInstanceFactory$get$lambda(this, context));
  return getValue(this);
};
function EmptyLogger() {
  Logger.call(this, Level_NONE_getInstance());
}
protoOf(EmptyLogger).b5l = function (level, msg) {
};
function Logger(level) {
  level = level === VOID ? Level_INFO_getInstance() : level;
  this.t5k_1 = level;
}
protoOf(Logger).u5k = function (msg) {
  this.m5m(Level_DEBUG_getInstance(), msg);
};
protoOf(Logger).l5m = function (msg) {
  this.m5m(Level_WARNING_getInstance(), msg);
};
protoOf(Logger).f5m = function (msg) {
  this.m5m(Level_ERROR_getInstance(), msg);
};
protoOf(Logger).m5m = function (lvl, msg) {
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  if (this.t5k_1.m2(lvl) <= 0) {
    this.b5l(lvl, msg);
  }
};
var Level_DEBUG_instance;
var Level_INFO_instance;
var Level_WARNING_instance;
var Level_ERROR_instance;
var Level_NONE_instance;
var Level_entriesInitialized;
function Level_initEntries() {
  if (Level_entriesInitialized)
    return Unit_instance;
  Level_entriesInitialized = true;
  Level_DEBUG_instance = new Level('DEBUG', 0);
  Level_INFO_instance = new Level('INFO', 1);
  Level_WARNING_instance = new Level('WARNING', 2);
  Level_ERROR_instance = new Level('ERROR', 3);
  Level_NONE_instance = new Level('NONE', 4);
}
function Level(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Level_DEBUG_getInstance() {
  Level_initEntries();
  return Level_DEBUG_instance;
}
function Level_INFO_getInstance() {
  Level_initEntries();
  return Level_INFO_instance;
}
function Level_WARNING_getInstance() {
  Level_initEntries();
  return Level_WARNING_instance;
}
function Level_ERROR_getInstance() {
  Level_initEntries();
  return Level_ERROR_instance;
}
function Level_NONE_getInstance() {
  Level_initEntries();
  return Level_NONE_instance;
}
function Module(_createdAtStart) {
  _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
  this.n5m_1 = _createdAtStart;
  this.o5m_1 = generateId(KoinPlatformTools_instance);
  this.p5m_1 = LinkedHashSet_init_$Create$();
  this.q5m_1 = LinkedHashMap_init_$Create$();
  this.r5m_1 = LinkedHashSet_init_$Create$();
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.s5m_1 = ArrayList_init_$Create$();
}
protoOf(Module).t5m = function (instanceFactory) {
  var def = instanceFactory.v5l_1;
  var tmp0 = def.f5l_1;
  var tmp2 = def.g5l_1;
  // Inline function 'org.koin.core.definition.indexKey' call
  var scopeQualifier = def.e5l_1;
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.b8(getFullName(tmp0));
  this_0.c8(_Char___init__impl__6a9atx(58));
  var tmp1_elvis_lhs = tmp2 == null ? null : tmp2.t();
  this_0.b8(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  this_0.c8(_Char___init__impl__6a9atx(58));
  this_0.a8(scopeQualifier);
  var mapping = this_0.toString();
  this.u5m(mapping, instanceFactory);
};
protoOf(Module).v5m = function (instanceFactory) {
  var def = instanceFactory.v5l_1;
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = def.j5l_1.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    var tmp2 = def.g5l_1;
    // Inline function 'org.koin.core.definition.indexKey' call
    var scopeQualifier = def.e5l_1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.b8(getFullName(element));
    this_0.c8(_Char___init__impl__6a9atx(58));
    var tmp1_elvis_lhs = tmp2 == null ? null : tmp2.t();
    this_0.b8(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    this_0.c8(_Char___init__impl__6a9atx(58));
    this_0.a8(scopeQualifier);
    var mapping = this_0.toString();
    this.u5m(mapping, instanceFactory);
  }
};
protoOf(Module).w5m = function (instanceFactory) {
  this.p5m_1.e(instanceFactory);
};
protoOf(Module).u5m = function (mapping, factory) {
  // Inline function 'kotlin.collections.set' call
  this.q5m_1.h2(mapping, factory);
};
protoOf(Module).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Module))
    return false;
  return this.o5m_1 === other.o5m_1;
};
protoOf(Module).hashCode = function () {
  return getStringHashCode(this.o5m_1);
};
function flatten(modules) {
  // Inline function 'kotlin.collections.linkedSetOf' call
  var flatten = LinkedHashSet_init_$Create$();
  var stack = ArrayDeque_init_$Create$(asReversed(modules));
  $l$loop_0: while (true) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!!stack.p()) {
      break $l$loop_0;
    }
    var current = stack.vf();
    if (!flatten.e(current)) {
      continue $l$loop_0;
    }
    var _iterator__ex2g4s = current.s5m_1.j();
    while (_iterator__ex2g4s.k()) {
      var module_0 = _iterator__ex2g4s.l();
      if (!flatten.u1(module_0)) {
        // Inline function 'kotlin.collections.plusAssign' call
        stack.e(module_0);
      }
    }
  }
  return flatten;
}
function overrideError(factory, mapping) {
  throw new DefinitionOverrideException('Already existing definition for ' + factory.v5l_1.toString() + ' at ' + mapping);
}
function onOptions(_this__u8e3s4, options) {
  options = options === VOID ? null : options;
  if (!(options == null)) {
    // Inline function 'org.koin.core.module.dsl.withOptions' call
    var def = _this__u8e3s4.q5l_1.v5l_1;
    var primary = def.g5l_1;
    // Inline function 'kotlin.also' call
    options(def);
    if (!equals(def.g5l_1, primary)) {
      _this__u8e3s4.p5l_1.t5m(_this__u8e3s4.q5l_1);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!def.j5l_1.p()) {
      _this__u8e3s4.p5l_1.v5m(_this__u8e3s4.q5l_1);
    }
    var tmp;
    if (def.l5l_1) {
      var tmp_0 = _this__u8e3s4.q5l_1;
      tmp = tmp_0 instanceof SingleInstanceFactory;
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.p5l_1.w5m(_this__u8e3s4.q5l_1);
    }
  }
  return _this__u8e3s4;
}
function getFirstValue($this, clazz) {
  var tmp0 = $this.x5m_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (clazz.ta(element)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp = tmp$ret$1;
  return (tmp == null ? true : !(tmp == null)) ? tmp : null;
}
function getIndexedValue($this, clazz) {
  // Inline function 'kotlin.takeIf' call
  var this_0 = $this.x5m_1.o($this.z5m_1);
  var tmp;
  if (clazz.ta(this_0)) {
    tmp = this_0;
  } else {
    tmp = null;
  }
  var tmp_0 = tmp;
  var currentValue = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : null;
  if (!(currentValue == null)) {
    $this.a5n();
  }
  return currentValue;
}
function ParametersHolder(_values, useIndexedValues) {
  var tmp;
  if (_values === VOID) {
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp = ArrayList_init_$Create$();
  } else {
    tmp = _values;
  }
  _values = tmp;
  useIndexedValues = useIndexedValues === VOID ? null : useIndexedValues;
  this.x5m_1 = _values;
  this.y5m_1 = useIndexedValues;
  this.z5m_1 = 0;
}
protoOf(ParametersHolder).b5n = function (i, clazz) {
  var tmp;
  if (i < this.x5m_1.m()) {
    var tmp_0 = this.x5m_1.o(i);
    tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  } else {
    throw new NoParameterFoundException("Can't get injected parameter #" + i + ' from ' + this.toString() + " for type '" + getFullName(clazz) + "'");
  }
  return tmp;
};
protoOf(ParametersHolder).c5n = function (clazz) {
  var tmp;
  if (this.x5m_1.p()) {
    tmp = null;
  } else {
    var tmp_0;
    switch (this.y5m_1) {
      case null:
        var tmp1_elvis_lhs = getIndexedValue(this, clazz);
        tmp_0 = tmp1_elvis_lhs == null ? getFirstValue(this, clazz) : tmp1_elvis_lhs;
        break;
      case true:
        tmp_0 = getIndexedValue(this, clazz);
        break;
      default:
        tmp_0 = getFirstValue(this, clazz);
        break;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(ParametersHolder).a5n = function () {
  if (this.z5m_1 < get_lastIndex(this.x5m_1)) {
    this.z5m_1 = this.z5m_1 + 1 | 0;
  }
};
protoOf(ParametersHolder).toString = function () {
  return 'DefinitionParameters' + toString_0(toList(this.x5m_1));
};
function emptyParametersHolder() {
  return new ParametersHolder();
}
function parametersOf(parameters) {
  return new ParametersHolder(toMutableList(parameters));
}
function _q(name) {
  return new StringQualifier(name);
}
function StringQualifier(value) {
  this.d5n_1 = value;
}
protoOf(StringQualifier).t = function () {
  return this.d5n_1;
};
protoOf(StringQualifier).toString = function () {
  return this.d5n_1;
};
protoOf(StringQualifier).hashCode = function () {
  return getStringHashCode(this.d5n_1);
};
protoOf(StringQualifier).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof StringQualifier))
    return false;
  var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
  if (!(this.d5n_1 === tmp0_other_with_cast.d5n_1))
    return false;
  return true;
};
function addAllEagerInstances($this, module_0) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = module_0.p5m_1.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    var tmp0 = $this.l5k_1;
    // Inline function 'kotlin.collections.set' call
    var key = element.v5l_1.hashCode();
    tmp0.h2(key, element);
  }
}
function loadModule($this, module_0, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = module_0.q5m_1.r().j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    // Inline function 'kotlin.collections.component1' call
    var mapping = element.s();
    // Inline function 'kotlin.collections.component2' call
    var factory = element.t();
    $this.e5n(allowOverride, mapping, factory);
  }
}
function createEagerInstances($this, instances) {
  var defaultContext = new ResolutionContext($this.j5k_1.h5k_1, $this.j5k_1.d5k_1.q5k_1, getKClass(NoClass));
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = instances.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    element.u5l(defaultContext);
  }
}
function InstanceRegistry(_koin) {
  this.j5k_1 = _koin;
  this.k5k_1 = KoinPlatformTools_instance.f5n();
  this.l5k_1 = KoinPlatformTools_instance.f5n();
}
protoOf(InstanceRegistry).m5k = function (modules, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = modules.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    loadModule(this, element, allowOverride);
    addAllEagerInstances(this, element);
  }
};
protoOf(InstanceRegistry).v5k = function () {
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = this.l5k_1.g2();
  var tmp$ret$0 = copyToArray(this_0);
  var instances = arrayListOf(tmp$ret$0.slice());
  this.l5k_1.y1();
  createEagerInstances(this, instances);
};
protoOf(InstanceRegistry).g5n = function (allowOverride, mapping, factory, logWarning) {
  if (this.k5k_1.e2(mapping) == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    if (!allowOverride) {
      overrideError(factory, mapping);
    } else if (logWarning) {
      this.j5k_1.h5k_1.l5m("(+) override index '" + mapping + "' -> '" + factory.v5l_1.toString() + "'");
    }
  }
  this.j5k_1.h5k_1.u5k("(+) index '" + mapping + "' -> '" + factory.v5l_1.toString() + "'");
  // Inline function 'kotlin.collections.set' call
  this.k5k_1.h2(mapping, factory);
};
protoOf(InstanceRegistry).e5n = function (allowOverride, mapping, factory, logWarning, $super) {
  logWarning = logWarning === VOID ? true : logWarning;
  var tmp;
  if ($super === VOID) {
    this.g5n(allowOverride, mapping, factory, logWarning);
    tmp = Unit_instance;
  } else {
    tmp = $super.g5n.call(this, allowOverride, mapping, factory, logWarning);
  }
  return tmp;
};
protoOf(InstanceRegistry).h5n = function (clazz, qualifier, scopeQualifier) {
  // Inline function 'org.koin.core.definition.indexKey' call
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.b8(getFullName(clazz));
  this_0.c8(_Char___init__impl__6a9atx(58));
  var tmp1_elvis_lhs = qualifier == null ? null : qualifier.t();
  this_0.b8(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  this_0.c8(_Char___init__impl__6a9atx(58));
  this_0.a8(scopeQualifier);
  var indexKey = this_0.toString();
  return this.k5k_1.e2(indexKey);
};
protoOf(InstanceRegistry).i5n = function (qualifier, clazz, scopeQualifier, instanceContext) {
  var tmp0_safe_receiver = this.h5n(clazz, qualifier, scopeQualifier);
  var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u5l(instanceContext);
  return (tmp == null ? true : !(tmp == null)) ? tmp : null;
};
protoOf(InstanceRegistry).a5l = function () {
  return this.k5k_1.m();
};
function PropertyRegistry(_koin) {
  this.j5n_1 = _koin;
  this.k5n_1 = KoinPlatformTools_instance.f5n();
}
function loadModule_0($this, module_0) {
  $this.o5k_1.n(module_0.r5m_1);
}
function Companion_1() {
  Companion_instance_1 = this;
  this.m5l_1 = '_root_';
  this.n5l_1 = _q('_root_');
}
var Companion_instance_1;
function Companion_getInstance_2() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function ScopeRegistry(_koin) {
  Companion_getInstance_2();
  this.n5k_1 = _koin;
  this.o5k_1 = KoinPlatformTools_instance.l5n();
  this.p5k_1 = KoinPlatformTools_instance.f5n();
  this.q5k_1 = new Scope(Companion_getInstance_2().n5l_1, '_root_', true, this.n5k_1);
  this.o5k_1.e(this.q5k_1.m5n_1);
  var tmp0 = this.p5k_1;
  var tmp2 = this.q5k_1.n5n_1;
  // Inline function 'kotlin.collections.set' call
  var value = this.q5k_1;
  tmp0.h2(tmp2, value);
}
protoOf(ScopeRegistry).r5k = function (modules) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = modules.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    loadModule_0(this, element);
  }
};
function get($this, clazz, qualifier, parameters) {
  return resolveWithOptionalLogging($this, clazz, qualifier, parameters);
}
function resolveWithOptionalLogging($this, clazz, qualifier, parameters) {
  var tmp0 = $this.p5n_1.h5k_1;
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  var lvl = Level_DEBUG_getInstance();
  if (!(tmp0.t5k_1.m2(lvl) <= 0)) {
    return resolveInstance($this, qualifier, clazz, parameters);
  }
  // Inline function 'org.koin.core.scope.Scope.logInstanceRequest' call
  var tmp;
  if (qualifier == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = " with qualifier '" + toString(qualifier) + "'";
  }
  var tmp1_elvis_lhs = tmp;
  var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  var scopeId = $this.o5n_1 ? '' : " - scope:'" + $this.n5n_1 + "'";
  $this.p5n_1.h5k_1.b5l(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + scopeId + '...');
  // Inline function 'kotlin.time.measureTimedValue' call
  // Inline function 'kotlin.time.measureTimedValue' call
  var mark = Monotonic_instance.je();
  var result = resolveInstance($this, qualifier, clazz, parameters);
  var result_0 = new TimedValue(result, ValueTimeMark__elapsedNow_impl_eonqvs(mark));
  // Inline function 'org.koin.core.scope.Scope.logInstanceDuration' call
  var duration = result_0.qk_1;
  $this.p5n_1.h5k_1.b5l(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + get_inMs(duration) + ' ms');
  return result_0.pk_1;
}
function resolveInstance($this, qualifier, clazz, parameters) {
  // Inline function 'org.koin.core.scope.Scope.checkScopeIsOpen' call
  if ($this.u5n_1) {
    throw new ClosedScopeException("Scope '" + $this.n5n_1 + "' is closed");
  }
  var instanceContext = new ResolutionContext($this.p5n_1.h5k_1, $this, clazz, qualifier, parameters);
  return stackParametersCall($this, parameters, instanceContext);
}
function stackParametersCall($this, parameters, instanceContext) {
  if (parameters == null) {
    return resolveFromContext($this, instanceContext);
  }
  var tmp0 = $this.p5n_1.h5k_1;
  // Inline function 'org.koin.core.logger.Logger.log' call
  var lvl = Level_DEBUG_getInstance();
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  if (tmp0.t5k_1.m2(lvl) <= 0) {
    var tmp$ret$1 = '| >> parameters ' + toString(parameters);
    tmp0.b5l(lvl, tmp$ret$1);
  }
  var stack = onParameterOnStack($this, parameters);
  try {
    return resolveFromContext($this, instanceContext);
  }finally {
    $this.p5n_1.h5k_1.u5k('| << parameters');
    clearParameterStack($this, stack);
  }
}
function onParameterOnStack($this, parameters) {
  var stack = getOrCreateParameterStack($this);
  stack.rf(parameters);
  return stack;
}
function clearParameterStack($this, stack) {
  stack.uf();
  if (stack.p()) {
    var tmp0_safe_receiver = $this.t5n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b4();
    }
    $this.t5n_1 = null;
  }
}
function getOrCreateParameterStack($this) {
  var tmp0_safe_receiver = $this.t5n_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pw();
  var tmp;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.let' call
    var it = ArrayDeque_init_$Create$_0();
    $this.t5n_1 = new ThreadLocalRef();
    var tmp0_safe_receiver_0 = $this.t5n_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.t5j(it);
    }
    tmp = it;
  } else {
    tmp = tmp1_elvis_lhs;
  }
  return tmp;
}
function resolveFromContext($this, instanceContext) {
  // Inline function 'org.koin.core.scope.Scope.resolveFromInjectedParameters' call
  var tmp;
  if (instanceContext.c5m_1 == null) {
    tmp = null;
  } else {
    $this.p5n_1.h5k_1.u5k('|- ? ' + instanceContext.d5m_1 + ' look in injected parameters');
    tmp = instanceContext.c5m_1.c5n(instanceContext.a5m_1);
  }
  var tmp0_elvis_lhs = tmp;
  var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? resolveFromRegistry($this, instanceContext) : tmp0_elvis_lhs;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'org.koin.core.scope.Scope.resolveFromStackedParameters' call
    var tmp0_safe_receiver = $this.t5n_1;
    var current = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pw();
    var tmp_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (current == null || current.p()) {
      tmp_1 = null;
    } else {
      $this.p5n_1.h5k_1.u5k('|- ? ' + instanceContext.d5m_1 + ' look in stack parameters');
      var parameters = current.qf();
      tmp_1 = parameters == null ? null : parameters.c5n(instanceContext.a5m_1);
    }
    tmp_0 = tmp_1;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var tmp2_elvis_lhs = tmp_0;
  var tmp_2;
  if (tmp2_elvis_lhs == null) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'org.koin.core.scope.Scope.resolveFromScopeSource' call
      if ($this.o5n_1) {
        tmp$ret$3 = null;
        break $l$block;
      }
      $this.p5n_1.h5k_1.u5k('|- ? ' + instanceContext.d5m_1 + ' look at scope source');
      var tmp_3;
      if (instanceContext.a5m_1.ta($this.r5n_1) && instanceContext.b5m_1 == null) {
        var tmp_4 = $this.r5n_1;
        tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : null;
      } else {
        tmp_3 = null;
      }
      tmp$ret$3 = tmp_3;
    }
    tmp_2 = tmp$ret$3;
  } else {
    tmp_2 = tmp2_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_2;
  var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? resolveFromParentScopes($this, instanceContext) : tmp3_elvis_lhs;
  var tmp_5;
  if (tmp4_elvis_lhs == null) {
    $this.p5n_1.h5k_1.u5k('|- << parameters');
    var tmp0_safe_receiver_0 = instanceContext.b5m_1;
    var tmp_6;
    if (tmp0_safe_receiver_0 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_6 = " and qualifier '" + toString_0(tmp0_safe_receiver_0) + "'";
    }
    var tmp1_elvis_lhs_0 = tmp_6;
    var qualifierString = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
    throw new NoDefinitionFoundException("No definition found for type '" + getFullName(instanceContext.a5m_1) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
  } else {
    tmp_5 = tmp4_elvis_lhs;
  }
  return tmp_5;
}
function resolveFromRegistry($this, ctx) {
  return $this.p5n_1.e5k_1.i5n(ctx.b5m_1, ctx.a5m_1, $this.m5n_1, ctx);
}
function resolveFromParentScopes($this, ctx) {
  $this.p5n_1.h5k_1.u5k('|- ? ' + ctx.d5m_1 + ' look in other scopes');
  return findInOtherScope($this, ctx);
}
function findInOtherScope($this, ctx) {
  var tmp0 = $this.q5n_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var result = element.v5n(ctx);
      if (!(result == null)) {
        tmp$ret$1 = result;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return tmp$ret$1;
}
function Scope(scopeQualifier, id, isRoot, _koin) {
  isRoot = isRoot === VOID ? false : isRoot;
  this.m5n_1 = scopeQualifier;
  this.n5n_1 = id;
  this.o5n_1 = isRoot;
  this.p5n_1 = _koin;
  this.q5n_1 = LinkedHashSet_init_$Create$();
  this.r5n_1 = null;
  this.s5n_1 = LinkedHashSet_init_$Create$();
  this.t5n_1 = null;
  this.u5n_1 = false;
}
protoOf(Scope).v5n = function (ctx) {
  var tmp;
  try {
    tmp = get(this, ctx.a5m_1, ctx.b5m_1, ctx.c5m_1);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof ClosedScopeException) {
      var e = $p;
      this.p5n_1.h5k_1.u5k('* Scope closed - no instance found for ' + getFullName(ctx.a5m_1) + ' on scope ' + this.toString());
      tmp_0 = null;
    } else {
      if ($p instanceof NoDefinitionFoundException) {
        var e_0 = $p;
        this.p5n_1.h5k_1.u5k("* No instance found for type '" + getFullName(ctx.a5m_1) + "' on scope '" + this.toString() + "'");
        tmp_0 = null;
      } else {
        throw $p;
      }
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(Scope).w5n = function (clazz, qualifier, parameters) {
  return resolveWithOptionalLogging(this, clazz, qualifier, parameters == null ? null : parameters());
};
protoOf(Scope).toString = function () {
  return "['" + this.n5n_1 + "']";
};
function get_inMs(_this__u8e3s4) {
  // Inline function 'kotlin.Long.div' call
  return _Duration___get_inWholeMicroseconds__impl__8oe8vv(_this__u8e3s4).i3() / 1000.0;
}
function module_0(createdAtStart, moduleDeclaration) {
  createdAtStart = createdAtStart === VOID ? false : createdAtStart;
  var module_0 = new Module(createdAtStart);
  moduleDeclaration(module_0);
  return module_0;
}
function get_classNames() {
  _init_properties_KClassExt_kt__5ro5b2();
  return classNames;
}
var classNames;
function getFullName(_this__u8e3s4) {
  _init_properties_KClassExt_kt__5ro5b2();
  var tmp0_elvis_lhs = get_classNames().e2(_this__u8e3s4);
  return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
}
function saveCache(_this__u8e3s4) {
  _init_properties_KClassExt_kt__5ro5b2();
  var name = KoinPlatformTools_instance.x5n(_this__u8e3s4);
  // Inline function 'kotlin.collections.set' call
  get_classNames().h2(_this__u8e3s4, name);
  return name;
}
var properties_initialized_KClassExt_kt_dizwhw;
function _init_properties_KClassExt_kt__5ro5b2() {
  if (!properties_initialized_KClassExt_kt_dizwhw) {
    properties_initialized_KClassExt_kt_dizwhw = true;
    classNames = KoinPlatformTools_instance.f5n();
  }
}
function getKClassDefaultName(_this__u8e3s4, kClass) {
  return 'KClass@' + kClass.hashCode();
}
function generateId(_this__u8e3s4) {
  return Companion_getInstance().jl().toString();
}
function register($this, koinApplication) {
  if (!($this.y5n_1 == null)) {
    throw new KoinApplicationAlreadyStartedException('A Koin Application has already been started');
  }
  $this.y5n_1 = koinApplication.w5k_1;
}
function GlobalContext() {
  this.y5n_1 = null;
}
protoOf(GlobalContext).pw = function () {
  var tmp0_elvis_lhs = this.y5n_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    var message = 'KoinApplication has not been started';
    throw IllegalStateException_init_$Create$(toString_0(message));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(GlobalContext).z5n = function () {
  return this.y5n_1;
};
protoOf(GlobalContext).d5l = function (appDeclaration) {
  var koinApplication = Companion_instance.y5k();
  register(this, koinApplication);
  appDeclaration(koinApplication);
  return koinApplication;
};
var GlobalContext_instance;
function GlobalContext_getInstance() {
  return GlobalContext_instance;
}
function KoinPlatformTools() {
}
protoOf(KoinPlatformTools).e5m = function (e) {
  return e.toString() + toString_0(split(Exception_init_$Create$().toString(), ['\n']));
};
protoOf(KoinPlatformTools).x5n = function (kClass) {
  var tmp0_elvis_lhs = kClass.sa();
  return tmp0_elvis_lhs == null ? getKClassDefaultName(this, kClass) : tmp0_elvis_lhs;
};
protoOf(KoinPlatformTools).c5l = function () {
  return GlobalContext_instance;
};
protoOf(KoinPlatformTools).j5m = function (lock, block) {
  return block();
};
protoOf(KoinPlatformTools).f5n = function () {
  return ConcurrentMutableMap_init_$Create$();
};
protoOf(KoinPlatformTools).l5n = function () {
  // Inline function 'kotlin.collections.mutableSetOf' call
  return LinkedHashSet_init_$Create$();
};
var KoinPlatformTools_instance;
function KoinPlatformTools_getInstance() {
  return KoinPlatformTools_instance;
}
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
GlobalContext_instance = new GlobalContext();
KoinPlatformTools_instance = new KoinPlatformTools();
//endregion
//region block: exports
export {
  Kind_Factory_getInstance as Kind_Factory_getInstancen5wx4z4o0a4j,
  Kind_Singleton_getInstance as Kind_Singleton_getInstancexsk8x1eh18jm,
  GlobalContext_instance as GlobalContext_instance2tuwjv46mw3fi,
  Companion_getInstance_2 as Companion_getInstance13ladrowvkk2x,
  startKoin as startKoin30la02u0gybvw,
  BeanDefinition as BeanDefinitionhif1nxb54kgk,
  KoinDefinition as KoinDefinition2pr0kscd0vkk6,
  FactoryInstanceFactory as FactoryInstanceFactory2tq2q9e5id3pz,
  SingleInstanceFactory as SingleInstanceFactoryp594z6t2b69a,
  onOptions as onOptionsoxrnzuikoevt,
  parametersOf as parametersOf17ucsakfbbg9c,
  module_0 as module39wmcymxxg0fj,
};
//endregion

//# sourceMappingURL=projects-core-koin-core.mjs.map
