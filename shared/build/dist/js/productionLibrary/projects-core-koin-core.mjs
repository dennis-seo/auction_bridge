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
  this.s5l_1 = new ScopeRegistry(this);
  this.t5l_1 = new InstanceRegistry(this);
  this.u5l_1 = new PropertyRegistry(this);
  this.v5l_1 = new ExtensionManager(this);
  this.w5l_1 = new EmptyLogger();
}
protoOf(Koin).x5l = function (modules, allowOverride, createEagerInstances) {
  var flattedModules = flatten(modules);
  this.t5l_1.b5m(flattedModules, allowOverride);
  this.s5l_1.g5m(flattedModules);
  if (createEagerInstances) {
    this.h5m();
  }
};
protoOf(Koin).h5m = function () {
  this.w5l_1.j5m('Create eager instances ...');
  // Inline function 'kotlin.time.measureTime' call
  // Inline function 'kotlin.time.measureTime' call
  var mark = Monotonic_instance.ne();
  this.t5l_1.k5m();
  var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
  this.w5l_1.j5m('Created eager instances in ' + get_inMs(duration) + ' ms');
};
function loadModules($this, modules) {
  $this.l5m_1.x5l(modules, $this.m5m_1, false);
}
function Companion() {
}
protoOf(Companion).n5m = function () {
  var app = new KoinApplication();
  return app;
};
var Companion_instance;
function Companion_getInstance_0() {
  return Companion_instance;
}
function KoinApplication() {
  this.l5m_1 = new Koin();
  this.m5m_1 = true;
}
protoOf(KoinApplication).o5m = function (modules) {
  var tmp0 = this.l5m_1.w5l_1;
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  var lvl = Level_INFO_getInstance();
  if (tmp0.i5m_1.m2(lvl) <= 0) {
    // Inline function 'kotlin.time.measureTime' call
    // Inline function 'kotlin.time.measureTime' call
    var mark = Monotonic_instance.ne();
    loadModules(this, modules);
    var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
    var count = this.l5m_1.t5l_1.p5m();
    this.l5m_1.w5l_1.q5m(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + get_inMs(duration) + ' ms');
  } else {
    loadModules(this, modules);
  }
  return this;
};
function startKoin(appDeclaration) {
  return KoinPlatformTools_instance.r5m().s5m(appDeclaration);
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
  this.t5m_1 = scopeQualifier;
  this.u5m_1 = primaryType;
  this.v5m_1 = qualifier;
  this.w5m_1 = definition;
  this.x5m_1 = kind;
  this.y5m_1 = secondaryTypes;
  this.z5m_1 = new Callbacks();
  this.a5n_1 = false;
}
protoOf(BeanDefinition).toString = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.c8(_Char___init__impl__6a9atx(91));
  this_0.a8(this.x5m_1);
  this_0.b8(": '");
  this_0.b8(getFullName(this.u5m_1));
  this_0.c8(_Char___init__impl__6a9atx(39));
  if (!(this.v5m_1 == null)) {
    this_0.b8(',qualifier:');
    this_0.a8(this.v5m_1);
  }
  if (!equals(this.t5m_1, Companion_getInstance_2().c5n_1)) {
    this_0.b8(',scope:');
    this_0.a8(this.t5m_1);
  }
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!this.y5m_1.p()) {
    this_0.b8(',binds:');
    var tmp = this.y5m_1;
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
  if (!this.u5m_1.equals(other.u5m_1))
    return false;
  if (!equals(this.v5m_1, other.v5m_1))
    return false;
  if (!equals(this.t5m_1, other.t5m_1))
    return false;
  return true;
};
protoOf(BeanDefinition).hashCode = function () {
  var tmp0_safe_receiver = this.v5m_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  result = imul(31, result) + this.u5m_1.hashCode() | 0;
  result = imul(31, result) + hashCode(this.t5m_1) | 0;
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
  this.d5n_1 = onClose;
}
protoOf(Callbacks).toString = function () {
  return 'Callbacks(onClose=' + toString(this.d5n_1) + ')';
};
protoOf(Callbacks).hashCode = function () {
  return this.d5n_1 == null ? 0 : hashCode(this.d5n_1);
};
protoOf(Callbacks).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Callbacks))
    return false;
  var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
  if (!equals(this.d5n_1, tmp0_other_with_cast.d5n_1))
    return false;
  return true;
};
function KoinDefinition(module_0, factory) {
  this.e5n_1 = module_0;
  this.f5n_1 = factory;
}
protoOf(KoinDefinition).toString = function () {
  return 'KoinDefinition(module=' + toString_0(this.e5n_1) + ', factory=' + toString_0(this.f5n_1) + ')';
};
protoOf(KoinDefinition).hashCode = function () {
  var result = this.e5n_1.hashCode();
  result = imul(result, 31) + hashCode(this.f5n_1) | 0;
  return result;
};
protoOf(KoinDefinition).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof KoinDefinition))
    return false;
  var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
  if (!this.e5n_1.equals(tmp0_other_with_cast.e5n_1))
    return false;
  if (!equals(this.f5n_1, tmp0_other_with_cast.f5n_1))
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
  this.g5n_1 = _koin;
  var tmp = this;
  // Inline function 'kotlin.collections.hashMapOf' call
  tmp.h5n_1 = HashMap_init_$Create$();
}
function FactoryInstanceFactory(beanDefinition) {
  InstanceFactory.call(this, beanDefinition);
}
protoOf(FactoryInstanceFactory).j5n = function (context) {
  return this.l5n(context);
};
function Companion_0() {
  this.m5n_1 = '\n\t';
}
var Companion_instance_0;
function Companion_getInstance_1() {
  return Companion_instance_0;
}
function InstanceFactory(beanDefinition) {
  this.k5n_1 = beanDefinition;
}
protoOf(InstanceFactory).l5n = function (context) {
  context.n5n_1.j5m("| (+) '" + this.k5n_1.toString() + "'");
  try {
    var tmp0_elvis_lhs = context.r5n_1;
    var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
    return this.k5n_1.w5m_1(context.o5n_1, parameters);
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var stack = KoinPlatformTools_instance.t5n(e);
      context.n5n_1.u5n("* Instance creation error : could not create instance for '" + this.k5n_1.toString() + "': " + stack);
      throw new InstanceCreationException("Could not create instance for '" + this.k5n_1.toString() + "'", e);
    } else {
      throw $p;
    }
  }
};
function ResolutionContext(logger, scope, clazz, qualifier, parameters) {
  qualifier = qualifier === VOID ? null : qualifier;
  parameters = parameters === VOID ? null : parameters;
  this.n5n_1 = logger;
  this.o5n_1 = scope;
  this.p5n_1 = clazz;
  this.q5n_1 = qualifier;
  this.r5n_1 = parameters;
  this.s5n_1 = "t:'" + getFullName(this.p5n_1) + "' - q:'" + toString(this.q5n_1) + "'";
}
function NoClass() {
}
function getValue($this) {
  var tmp0_elvis_lhs = $this.w5n_1;
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
    if (!this$0.x5n($context)) {
      this$0.w5n_1 = this$0.l5n($context);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function SingleInstanceFactory(beanDefinition) {
  InstanceFactory.call(this, beanDefinition);
  this.w5n_1 = null;
}
protoOf(SingleInstanceFactory).x5n = function (context) {
  return !(this.w5n_1 == null);
};
protoOf(SingleInstanceFactory).l5n = function (context) {
  var tmp;
  if (this.w5n_1 == null) {
    tmp = protoOf(InstanceFactory).l5n.call(this, context);
  } else {
    tmp = getValue(this);
  }
  return tmp;
};
protoOf(SingleInstanceFactory).j5n = function (context) {
  var tmp = KoinPlatformTools_instance;
  tmp.y5n(this, SingleInstanceFactory$get$lambda(this, context));
  return getValue(this);
};
function EmptyLogger() {
  Logger.call(this, Level_NONE_getInstance());
}
protoOf(EmptyLogger).q5m = function (level, msg) {
};
function Logger(level) {
  level = level === VOID ? Level_INFO_getInstance() : level;
  this.i5m_1 = level;
}
protoOf(Logger).j5m = function (msg) {
  this.b5o(Level_DEBUG_getInstance(), msg);
};
protoOf(Logger).a5o = function (msg) {
  this.b5o(Level_WARNING_getInstance(), msg);
};
protoOf(Logger).u5n = function (msg) {
  this.b5o(Level_ERROR_getInstance(), msg);
};
protoOf(Logger).b5o = function (lvl, msg) {
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  if (this.i5m_1.m2(lvl) <= 0) {
    this.q5m(lvl, msg);
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
  this.c5o_1 = _createdAtStart;
  this.d5o_1 = generateId(KoinPlatformTools_instance);
  this.e5o_1 = LinkedHashSet_init_$Create$();
  this.f5o_1 = LinkedHashMap_init_$Create$();
  this.g5o_1 = LinkedHashSet_init_$Create$();
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.h5o_1 = ArrayList_init_$Create$();
}
protoOf(Module).i5o = function (instanceFactory) {
  var def = instanceFactory.k5n_1;
  var tmp0 = def.u5m_1;
  var tmp2 = def.v5m_1;
  // Inline function 'org.koin.core.definition.indexKey' call
  var scopeQualifier = def.t5m_1;
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
  this.j5o(mapping, instanceFactory);
};
protoOf(Module).k5o = function (instanceFactory) {
  var def = instanceFactory.k5n_1;
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = def.y5m_1.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    var tmp2 = def.v5m_1;
    // Inline function 'org.koin.core.definition.indexKey' call
    var scopeQualifier = def.t5m_1;
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
    this.j5o(mapping, instanceFactory);
  }
};
protoOf(Module).l5o = function (instanceFactory) {
  this.e5o_1.e(instanceFactory);
};
protoOf(Module).j5o = function (mapping, factory) {
  // Inline function 'kotlin.collections.set' call
  this.f5o_1.h2(mapping, factory);
};
protoOf(Module).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Module))
    return false;
  return this.d5o_1 === other.d5o_1;
};
protoOf(Module).hashCode = function () {
  return getStringHashCode(this.d5o_1);
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
    var current = stack.zf();
    if (!flatten.e(current)) {
      continue $l$loop_0;
    }
    var _iterator__ex2g4s = current.h5o_1.j();
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
  throw new DefinitionOverrideException('Already existing definition for ' + factory.k5n_1.toString() + ' at ' + mapping);
}
function onOptions(_this__u8e3s4, options) {
  options = options === VOID ? null : options;
  if (!(options == null)) {
    // Inline function 'org.koin.core.module.dsl.withOptions' call
    var def = _this__u8e3s4.f5n_1.k5n_1;
    var primary = def.v5m_1;
    // Inline function 'kotlin.also' call
    options(def);
    if (!equals(def.v5m_1, primary)) {
      _this__u8e3s4.e5n_1.i5o(_this__u8e3s4.f5n_1);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!def.y5m_1.p()) {
      _this__u8e3s4.e5n_1.k5o(_this__u8e3s4.f5n_1);
    }
    var tmp;
    if (def.a5n_1) {
      var tmp_0 = _this__u8e3s4.f5n_1;
      tmp = tmp_0 instanceof SingleInstanceFactory;
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.e5n_1.l5o(_this__u8e3s4.f5n_1);
    }
  }
  return _this__u8e3s4;
}
function getFirstValue($this, clazz) {
  var tmp0 = $this.m5o_1;
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
  var this_0 = $this.m5o_1.o($this.o5o_1);
  var tmp;
  if (clazz.ta(this_0)) {
    tmp = this_0;
  } else {
    tmp = null;
  }
  var tmp_0 = tmp;
  var currentValue = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : null;
  if (!(currentValue == null)) {
    $this.p5o();
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
  this.m5o_1 = _values;
  this.n5o_1 = useIndexedValues;
  this.o5o_1 = 0;
}
protoOf(ParametersHolder).q5o = function (i, clazz) {
  var tmp;
  if (i < this.m5o_1.m()) {
    var tmp_0 = this.m5o_1.o(i);
    tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  } else {
    throw new NoParameterFoundException("Can't get injected parameter #" + i + ' from ' + this.toString() + " for type '" + getFullName(clazz) + "'");
  }
  return tmp;
};
protoOf(ParametersHolder).r5o = function (clazz) {
  var tmp;
  if (this.m5o_1.p()) {
    tmp = null;
  } else {
    var tmp_0;
    switch (this.n5o_1) {
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
protoOf(ParametersHolder).p5o = function () {
  if (this.o5o_1 < get_lastIndex(this.m5o_1)) {
    this.o5o_1 = this.o5o_1 + 1 | 0;
  }
};
protoOf(ParametersHolder).toString = function () {
  return 'DefinitionParameters' + toString_0(toList(this.m5o_1));
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
  this.s5o_1 = value;
}
protoOf(StringQualifier).t = function () {
  return this.s5o_1;
};
protoOf(StringQualifier).toString = function () {
  return this.s5o_1;
};
protoOf(StringQualifier).hashCode = function () {
  return getStringHashCode(this.s5o_1);
};
protoOf(StringQualifier).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof StringQualifier))
    return false;
  var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
  if (!(this.s5o_1 === tmp0_other_with_cast.s5o_1))
    return false;
  return true;
};
function addAllEagerInstances($this, module_0) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = module_0.e5o_1.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    var tmp0 = $this.a5m_1;
    // Inline function 'kotlin.collections.set' call
    var key = element.k5n_1.hashCode();
    tmp0.h2(key, element);
  }
}
function loadModule($this, module_0, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = module_0.f5o_1.r().j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    // Inline function 'kotlin.collections.component1' call
    var mapping = element.s();
    // Inline function 'kotlin.collections.component2' call
    var factory = element.t();
    $this.t5o(allowOverride, mapping, factory);
  }
}
function createEagerInstances($this, instances) {
  var defaultContext = new ResolutionContext($this.y5l_1.w5l_1, $this.y5l_1.s5l_1.f5m_1, getKClass(NoClass));
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = instances.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    element.j5n(defaultContext);
  }
}
function InstanceRegistry(_koin) {
  this.y5l_1 = _koin;
  this.z5l_1 = KoinPlatformTools_instance.u5o();
  this.a5m_1 = KoinPlatformTools_instance.u5o();
}
protoOf(InstanceRegistry).b5m = function (modules, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = modules.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    loadModule(this, element, allowOverride);
    addAllEagerInstances(this, element);
  }
};
protoOf(InstanceRegistry).k5m = function () {
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = this.a5m_1.g2();
  var tmp$ret$0 = copyToArray(this_0);
  var instances = arrayListOf(tmp$ret$0.slice());
  this.a5m_1.y1();
  createEagerInstances(this, instances);
};
protoOf(InstanceRegistry).v5o = function (allowOverride, mapping, factory, logWarning) {
  if (this.z5l_1.e2(mapping) == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    if (!allowOverride) {
      overrideError(factory, mapping);
    } else if (logWarning) {
      this.y5l_1.w5l_1.a5o("(+) override index '" + mapping + "' -> '" + factory.k5n_1.toString() + "'");
    }
  }
  this.y5l_1.w5l_1.j5m("(+) index '" + mapping + "' -> '" + factory.k5n_1.toString() + "'");
  // Inline function 'kotlin.collections.set' call
  this.z5l_1.h2(mapping, factory);
};
protoOf(InstanceRegistry).t5o = function (allowOverride, mapping, factory, logWarning, $super) {
  logWarning = logWarning === VOID ? true : logWarning;
  var tmp;
  if ($super === VOID) {
    this.v5o(allowOverride, mapping, factory, logWarning);
    tmp = Unit_instance;
  } else {
    tmp = $super.v5o.call(this, allowOverride, mapping, factory, logWarning);
  }
  return tmp;
};
protoOf(InstanceRegistry).w5o = function (clazz, qualifier, scopeQualifier) {
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
  return this.z5l_1.e2(indexKey);
};
protoOf(InstanceRegistry).x5o = function (qualifier, clazz, scopeQualifier, instanceContext) {
  var tmp0_safe_receiver = this.w5o(clazz, qualifier, scopeQualifier);
  var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j5n(instanceContext);
  return (tmp == null ? true : !(tmp == null)) ? tmp : null;
};
protoOf(InstanceRegistry).p5m = function () {
  return this.z5l_1.m();
};
function PropertyRegistry(_koin) {
  this.y5o_1 = _koin;
  this.z5o_1 = KoinPlatformTools_instance.u5o();
}
function loadModule_0($this, module_0) {
  $this.d5m_1.n(module_0.g5o_1);
}
function Companion_1() {
  Companion_instance_1 = this;
  this.b5n_1 = '_root_';
  this.c5n_1 = _q('_root_');
}
var Companion_instance_1;
function Companion_getInstance_2() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function ScopeRegistry(_koin) {
  Companion_getInstance_2();
  this.c5m_1 = _koin;
  this.d5m_1 = KoinPlatformTools_instance.a5p();
  this.e5m_1 = KoinPlatformTools_instance.u5o();
  this.f5m_1 = new Scope(Companion_getInstance_2().c5n_1, '_root_', true, this.c5m_1);
  this.d5m_1.e(this.f5m_1.b5p_1);
  var tmp0 = this.e5m_1;
  var tmp2 = this.f5m_1.c5p_1;
  // Inline function 'kotlin.collections.set' call
  var value = this.f5m_1;
  tmp0.h2(tmp2, value);
}
protoOf(ScopeRegistry).g5m = function (modules) {
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
  var tmp0 = $this.e5p_1.w5l_1;
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  var lvl = Level_DEBUG_getInstance();
  if (!(tmp0.i5m_1.m2(lvl) <= 0)) {
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
  var scopeId = $this.d5p_1 ? '' : " - scope:'" + $this.c5p_1 + "'";
  $this.e5p_1.w5l_1.q5m(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + scopeId + '...');
  // Inline function 'kotlin.time.measureTimedValue' call
  // Inline function 'kotlin.time.measureTimedValue' call
  var mark = Monotonic_instance.ne();
  var result = resolveInstance($this, qualifier, clazz, parameters);
  var result_0 = new TimedValue(result, ValueTimeMark__elapsedNow_impl_eonqvs(mark));
  // Inline function 'org.koin.core.scope.Scope.logInstanceDuration' call
  var duration = result_0.uk_1;
  $this.e5p_1.w5l_1.q5m(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + get_inMs(duration) + ' ms');
  return result_0.tk_1;
}
function resolveInstance($this, qualifier, clazz, parameters) {
  // Inline function 'org.koin.core.scope.Scope.checkScopeIsOpen' call
  if ($this.j5p_1) {
    throw new ClosedScopeException("Scope '" + $this.c5p_1 + "' is closed");
  }
  var instanceContext = new ResolutionContext($this.e5p_1.w5l_1, $this, clazz, qualifier, parameters);
  return stackParametersCall($this, parameters, instanceContext);
}
function stackParametersCall($this, parameters, instanceContext) {
  if (parameters == null) {
    return resolveFromContext($this, instanceContext);
  }
  var tmp0 = $this.e5p_1.w5l_1;
  // Inline function 'org.koin.core.logger.Logger.log' call
  var lvl = Level_DEBUG_getInstance();
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  if (tmp0.i5m_1.m2(lvl) <= 0) {
    var tmp$ret$1 = '| >> parameters ' + toString(parameters);
    tmp0.q5m(lvl, tmp$ret$1);
  }
  var stack = onParameterOnStack($this, parameters);
  try {
    return resolveFromContext($this, instanceContext);
  }finally {
    $this.e5p_1.w5l_1.j5m('| << parameters');
    clearParameterStack($this, stack);
  }
}
function onParameterOnStack($this, parameters) {
  var stack = getOrCreateParameterStack($this);
  stack.vf(parameters);
  return stack;
}
function clearParameterStack($this, stack) {
  stack.yf();
  if (stack.p()) {
    var tmp0_safe_receiver = $this.i5p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b4();
    }
    $this.i5p_1 = null;
  }
}
function getOrCreateParameterStack($this) {
  var tmp0_safe_receiver = $this.i5p_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tw();
  var tmp;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.let' call
    var it = ArrayDeque_init_$Create$_0();
    $this.i5p_1 = new ThreadLocalRef();
    var tmp0_safe_receiver_0 = $this.i5p_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.i5l(it);
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
  if (instanceContext.r5n_1 == null) {
    tmp = null;
  } else {
    $this.e5p_1.w5l_1.j5m('|- ? ' + instanceContext.s5n_1 + ' look in injected parameters');
    tmp = instanceContext.r5n_1.r5o(instanceContext.p5n_1);
  }
  var tmp0_elvis_lhs = tmp;
  var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? resolveFromRegistry($this, instanceContext) : tmp0_elvis_lhs;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'org.koin.core.scope.Scope.resolveFromStackedParameters' call
    var tmp0_safe_receiver = $this.i5p_1;
    var current = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tw();
    var tmp_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (current == null || current.p()) {
      tmp_1 = null;
    } else {
      $this.e5p_1.w5l_1.j5m('|- ? ' + instanceContext.s5n_1 + ' look in stack parameters');
      var parameters = current.uf();
      tmp_1 = parameters == null ? null : parameters.r5o(instanceContext.p5n_1);
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
      if ($this.d5p_1) {
        tmp$ret$3 = null;
        break $l$block;
      }
      $this.e5p_1.w5l_1.j5m('|- ? ' + instanceContext.s5n_1 + ' look at scope source');
      var tmp_3;
      if (instanceContext.p5n_1.ta($this.g5p_1) && instanceContext.q5n_1 == null) {
        var tmp_4 = $this.g5p_1;
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
    $this.e5p_1.w5l_1.j5m('|- << parameters');
    var tmp0_safe_receiver_0 = instanceContext.q5n_1;
    var tmp_6;
    if (tmp0_safe_receiver_0 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_6 = " and qualifier '" + toString_0(tmp0_safe_receiver_0) + "'";
    }
    var tmp1_elvis_lhs_0 = tmp_6;
    var qualifierString = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
    throw new NoDefinitionFoundException("No definition found for type '" + getFullName(instanceContext.p5n_1) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
  } else {
    tmp_5 = tmp4_elvis_lhs;
  }
  return tmp_5;
}
function resolveFromRegistry($this, ctx) {
  return $this.e5p_1.t5l_1.x5o(ctx.q5n_1, ctx.p5n_1, $this.b5p_1, ctx);
}
function resolveFromParentScopes($this, ctx) {
  $this.e5p_1.w5l_1.j5m('|- ? ' + ctx.s5n_1 + ' look in other scopes');
  return findInOtherScope($this, ctx);
}
function findInOtherScope($this, ctx) {
  var tmp0 = $this.f5p_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var result = element.k5p(ctx);
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
  this.b5p_1 = scopeQualifier;
  this.c5p_1 = id;
  this.d5p_1 = isRoot;
  this.e5p_1 = _koin;
  this.f5p_1 = LinkedHashSet_init_$Create$();
  this.g5p_1 = null;
  this.h5p_1 = LinkedHashSet_init_$Create$();
  this.i5p_1 = null;
  this.j5p_1 = false;
}
protoOf(Scope).k5p = function (ctx) {
  var tmp;
  try {
    tmp = get(this, ctx.p5n_1, ctx.q5n_1, ctx.r5n_1);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof ClosedScopeException) {
      var e = $p;
      this.e5p_1.w5l_1.j5m('* Scope closed - no instance found for ' + getFullName(ctx.p5n_1) + ' on scope ' + this.toString());
      tmp_0 = null;
    } else {
      if ($p instanceof NoDefinitionFoundException) {
        var e_0 = $p;
        this.e5p_1.w5l_1.j5m("* No instance found for type '" + getFullName(ctx.p5n_1) + "' on scope '" + this.toString() + "'");
        tmp_0 = null;
      } else {
        throw $p;
      }
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(Scope).l5p = function (clazz, qualifier, parameters) {
  return resolveWithOptionalLogging(this, clazz, qualifier, parameters == null ? null : parameters());
};
protoOf(Scope).toString = function () {
  return "['" + this.c5p_1 + "']";
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
  var name = KoinPlatformTools_instance.m5p(_this__u8e3s4);
  // Inline function 'kotlin.collections.set' call
  get_classNames().h2(_this__u8e3s4, name);
  return name;
}
var properties_initialized_KClassExt_kt_dizwhw;
function _init_properties_KClassExt_kt__5ro5b2() {
  if (!properties_initialized_KClassExt_kt_dizwhw) {
    properties_initialized_KClassExt_kt_dizwhw = true;
    classNames = KoinPlatformTools_instance.u5o();
  }
}
function getKClassDefaultName(_this__u8e3s4, kClass) {
  return 'KClass@' + kClass.hashCode();
}
function generateId(_this__u8e3s4) {
  return Companion_getInstance().nl().toString();
}
function register($this, koinApplication) {
  if (!($this.n5p_1 == null)) {
    throw new KoinApplicationAlreadyStartedException('A Koin Application has already been started');
  }
  $this.n5p_1 = koinApplication.l5m_1;
}
function GlobalContext() {
  this.n5p_1 = null;
}
protoOf(GlobalContext).tw = function () {
  var tmp0_elvis_lhs = this.n5p_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    var message = 'KoinApplication has not been started';
    throw IllegalStateException_init_$Create$(toString_0(message));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(GlobalContext).o5p = function () {
  return this.n5p_1;
};
protoOf(GlobalContext).s5m = function (appDeclaration) {
  var koinApplication = Companion_instance.n5m();
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
protoOf(KoinPlatformTools).t5n = function (e) {
  return e.toString() + toString_0(split(Exception_init_$Create$().toString(), ['\n']));
};
protoOf(KoinPlatformTools).m5p = function (kClass) {
  var tmp0_elvis_lhs = kClass.sa();
  return tmp0_elvis_lhs == null ? getKClassDefaultName(this, kClass) : tmp0_elvis_lhs;
};
protoOf(KoinPlatformTools).r5m = function () {
  return GlobalContext_instance;
};
protoOf(KoinPlatformTools).y5n = function (lock, block) {
  return block();
};
protoOf(KoinPlatformTools).u5o = function () {
  return ConcurrentMutableMap_init_$Create$();
};
protoOf(KoinPlatformTools).a5p = function () {
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
