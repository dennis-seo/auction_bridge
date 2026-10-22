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
  this.k5m_1 = new ScopeRegistry(this);
  this.l5m_1 = new InstanceRegistry(this);
  this.m5m_1 = new PropertyRegistry(this);
  this.n5m_1 = new ExtensionManager(this);
  this.o5m_1 = new EmptyLogger();
}
protoOf(Koin).p5m = function (modules, allowOverride, createEagerInstances) {
  var flattedModules = flatten(modules);
  this.l5m_1.t5m(flattedModules, allowOverride);
  this.k5m_1.y5m(flattedModules);
  if (createEagerInstances) {
    this.z5m();
  }
};
protoOf(Koin).z5m = function () {
  this.o5m_1.b5n('Create eager instances ...');
  // Inline function 'kotlin.time.measureTime' call
  // Inline function 'kotlin.time.measureTime' call
  var mark = Monotonic_instance.qe();
  this.l5m_1.c5n();
  var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
  this.o5m_1.b5n('Created eager instances in ' + get_inMs(duration) + ' ms');
};
function loadModules($this, modules) {
  $this.d5n_1.p5m(modules, $this.e5n_1, false);
}
function Companion() {
}
protoOf(Companion).f5n = function () {
  var app = new KoinApplication();
  return app;
};
var Companion_instance;
function Companion_getInstance_0() {
  return Companion_instance;
}
function KoinApplication() {
  this.d5n_1 = new Koin();
  this.e5n_1 = true;
}
protoOf(KoinApplication).g5n = function (modules) {
  var tmp0 = this.d5n_1.o5m_1;
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  var lvl = Level_INFO_getInstance();
  if (tmp0.a5n_1.m2(lvl) <= 0) {
    // Inline function 'kotlin.time.measureTime' call
    // Inline function 'kotlin.time.measureTime' call
    var mark = Monotonic_instance.qe();
    loadModules(this, modules);
    var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
    var count = this.d5n_1.l5m_1.h5n();
    this.d5n_1.o5m_1.i5n(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + get_inMs(duration) + ' ms');
  } else {
    loadModules(this, modules);
  }
  return this;
};
function startKoin(appDeclaration) {
  return KoinPlatformTools_instance.j5n().k5n(appDeclaration);
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
  this.l5n_1 = scopeQualifier;
  this.m5n_1 = primaryType;
  this.n5n_1 = qualifier;
  this.o5n_1 = definition;
  this.p5n_1 = kind;
  this.q5n_1 = secondaryTypes;
  this.r5n_1 = new Callbacks();
  this.s5n_1 = false;
}
protoOf(BeanDefinition).toString = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.c8(_Char___init__impl__6a9atx(91));
  this_0.a8(this.p5n_1);
  this_0.b8(": '");
  this_0.b8(getFullName(this.m5n_1));
  this_0.c8(_Char___init__impl__6a9atx(39));
  if (!(this.n5n_1 == null)) {
    this_0.b8(',qualifier:');
    this_0.a8(this.n5n_1);
  }
  if (!equals(this.l5n_1, Companion_getInstance_2().u5n_1)) {
    this_0.b8(',scope:');
    this_0.a8(this.l5n_1);
  }
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!this.q5n_1.p()) {
    this_0.b8(',binds:');
    var tmp = this.q5n_1;
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
  if (!this.m5n_1.equals(other.m5n_1))
    return false;
  if (!equals(this.n5n_1, other.n5n_1))
    return false;
  if (!equals(this.l5n_1, other.l5n_1))
    return false;
  return true;
};
protoOf(BeanDefinition).hashCode = function () {
  var tmp0_safe_receiver = this.n5n_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  result = imul(31, result) + this.m5n_1.hashCode() | 0;
  result = imul(31, result) + hashCode(this.l5n_1) | 0;
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
  this.v5n_1 = onClose;
}
protoOf(Callbacks).toString = function () {
  return 'Callbacks(onClose=' + toString(this.v5n_1) + ')';
};
protoOf(Callbacks).hashCode = function () {
  return this.v5n_1 == null ? 0 : hashCode(this.v5n_1);
};
protoOf(Callbacks).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Callbacks))
    return false;
  var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
  if (!equals(this.v5n_1, tmp0_other_with_cast.v5n_1))
    return false;
  return true;
};
function KoinDefinition(module_0, factory) {
  this.w5n_1 = module_0;
  this.x5n_1 = factory;
}
protoOf(KoinDefinition).toString = function () {
  return 'KoinDefinition(module=' + toString_0(this.w5n_1) + ', factory=' + toString_0(this.x5n_1) + ')';
};
protoOf(KoinDefinition).hashCode = function () {
  var result = this.w5n_1.hashCode();
  result = imul(result, 31) + hashCode(this.x5n_1) | 0;
  return result;
};
protoOf(KoinDefinition).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof KoinDefinition))
    return false;
  var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
  if (!this.w5n_1.equals(tmp0_other_with_cast.w5n_1))
    return false;
  if (!equals(this.x5n_1, tmp0_other_with_cast.x5n_1))
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
  this.y5n_1 = _koin;
  var tmp = this;
  // Inline function 'kotlin.collections.hashMapOf' call
  tmp.z5n_1 = HashMap_init_$Create$();
}
function FactoryInstanceFactory(beanDefinition) {
  InstanceFactory.call(this, beanDefinition);
}
protoOf(FactoryInstanceFactory).b5o = function (context) {
  return this.d5o(context);
};
function Companion_0() {
  this.e5o_1 = '\n\t';
}
var Companion_instance_0;
function Companion_getInstance_1() {
  return Companion_instance_0;
}
function InstanceFactory(beanDefinition) {
  this.c5o_1 = beanDefinition;
}
protoOf(InstanceFactory).d5o = function (context) {
  context.f5o_1.b5n("| (+) '" + this.c5o_1.toString() + "'");
  try {
    var tmp0_elvis_lhs = context.j5o_1;
    var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
    return this.c5o_1.o5n_1(context.g5o_1, parameters);
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var stack = KoinPlatformTools_instance.l5o(e);
      context.f5o_1.m5o("* Instance creation error : could not create instance for '" + this.c5o_1.toString() + "': " + stack);
      throw new InstanceCreationException("Could not create instance for '" + this.c5o_1.toString() + "'", e);
    } else {
      throw $p;
    }
  }
};
function ResolutionContext(logger, scope, clazz, qualifier, parameters) {
  qualifier = qualifier === VOID ? null : qualifier;
  parameters = parameters === VOID ? null : parameters;
  this.f5o_1 = logger;
  this.g5o_1 = scope;
  this.h5o_1 = clazz;
  this.i5o_1 = qualifier;
  this.j5o_1 = parameters;
  this.k5o_1 = "t:'" + getFullName(this.h5o_1) + "' - q:'" + toString(this.i5o_1) + "'";
}
function NoClass() {
}
function getValue($this) {
  var tmp0_elvis_lhs = $this.o5o_1;
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
    if (!this$0.p5o($context)) {
      this$0.o5o_1 = this$0.d5o($context);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function SingleInstanceFactory(beanDefinition) {
  InstanceFactory.call(this, beanDefinition);
  this.o5o_1 = null;
}
protoOf(SingleInstanceFactory).p5o = function (context) {
  return !(this.o5o_1 == null);
};
protoOf(SingleInstanceFactory).d5o = function (context) {
  var tmp;
  if (this.o5o_1 == null) {
    tmp = protoOf(InstanceFactory).d5o.call(this, context);
  } else {
    tmp = getValue(this);
  }
  return tmp;
};
protoOf(SingleInstanceFactory).b5o = function (context) {
  var tmp = KoinPlatformTools_instance;
  tmp.q5o(this, SingleInstanceFactory$get$lambda(this, context));
  return getValue(this);
};
function EmptyLogger() {
  Logger.call(this, Level_NONE_getInstance());
}
protoOf(EmptyLogger).i5n = function (level, msg) {
};
function Logger(level) {
  level = level === VOID ? Level_INFO_getInstance() : level;
  this.a5n_1 = level;
}
protoOf(Logger).b5n = function (msg) {
  this.t5o(Level_DEBUG_getInstance(), msg);
};
protoOf(Logger).s5o = function (msg) {
  this.t5o(Level_WARNING_getInstance(), msg);
};
protoOf(Logger).m5o = function (msg) {
  this.t5o(Level_ERROR_getInstance(), msg);
};
protoOf(Logger).t5o = function (lvl, msg) {
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  if (this.a5n_1.m2(lvl) <= 0) {
    this.i5n(lvl, msg);
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
  this.u5o_1 = _createdAtStart;
  this.v5o_1 = generateId(KoinPlatformTools_instance);
  this.w5o_1 = LinkedHashSet_init_$Create$();
  this.x5o_1 = LinkedHashMap_init_$Create$();
  this.y5o_1 = LinkedHashSet_init_$Create$();
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.z5o_1 = ArrayList_init_$Create$();
}
protoOf(Module).a5p = function (instanceFactory) {
  var def = instanceFactory.c5o_1;
  var tmp0 = def.m5n_1;
  var tmp2 = def.n5n_1;
  // Inline function 'org.koin.core.definition.indexKey' call
  var scopeQualifier = def.l5n_1;
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
  this.b5p(mapping, instanceFactory);
};
protoOf(Module).c5p = function (instanceFactory) {
  var def = instanceFactory.c5o_1;
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = def.q5n_1.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    var tmp2 = def.n5n_1;
    // Inline function 'org.koin.core.definition.indexKey' call
    var scopeQualifier = def.l5n_1;
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
    this.b5p(mapping, instanceFactory);
  }
};
protoOf(Module).d5p = function (instanceFactory) {
  this.w5o_1.e(instanceFactory);
};
protoOf(Module).b5p = function (mapping, factory) {
  // Inline function 'kotlin.collections.set' call
  this.x5o_1.h2(mapping, factory);
};
protoOf(Module).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Module))
    return false;
  return this.v5o_1 === other.v5o_1;
};
protoOf(Module).hashCode = function () {
  return getStringHashCode(this.v5o_1);
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
    var current = stack.cg();
    if (!flatten.e(current)) {
      continue $l$loop_0;
    }
    var _iterator__ex2g4s = current.z5o_1.j();
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
  throw new DefinitionOverrideException('Already existing definition for ' + factory.c5o_1.toString() + ' at ' + mapping);
}
function onOptions(_this__u8e3s4, options) {
  options = options === VOID ? null : options;
  if (!(options == null)) {
    // Inline function 'org.koin.core.module.dsl.withOptions' call
    var def = _this__u8e3s4.x5n_1.c5o_1;
    var primary = def.n5n_1;
    // Inline function 'kotlin.also' call
    options(def);
    if (!equals(def.n5n_1, primary)) {
      _this__u8e3s4.w5n_1.a5p(_this__u8e3s4.x5n_1);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!def.q5n_1.p()) {
      _this__u8e3s4.w5n_1.c5p(_this__u8e3s4.x5n_1);
    }
    var tmp;
    if (def.s5n_1) {
      var tmp_0 = _this__u8e3s4.x5n_1;
      tmp = tmp_0 instanceof SingleInstanceFactory;
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.w5n_1.d5p(_this__u8e3s4.x5n_1);
    }
  }
  return _this__u8e3s4;
}
function getFirstValue($this, clazz) {
  var tmp0 = $this.e5p_1;
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
  var this_0 = $this.e5p_1.o($this.g5p_1);
  var tmp;
  if (clazz.ta(this_0)) {
    tmp = this_0;
  } else {
    tmp = null;
  }
  var tmp_0 = tmp;
  var currentValue = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : null;
  if (!(currentValue == null)) {
    $this.h5p();
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
  this.e5p_1 = _values;
  this.f5p_1 = useIndexedValues;
  this.g5p_1 = 0;
}
protoOf(ParametersHolder).i5p = function (i, clazz) {
  var tmp;
  if (i < this.e5p_1.m()) {
    var tmp_0 = this.e5p_1.o(i);
    tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  } else {
    throw new NoParameterFoundException("Can't get injected parameter #" + i + ' from ' + this.toString() + " for type '" + getFullName(clazz) + "'");
  }
  return tmp;
};
protoOf(ParametersHolder).j5p = function (clazz) {
  var tmp;
  if (this.e5p_1.p()) {
    tmp = null;
  } else {
    var tmp_0;
    switch (this.f5p_1) {
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
protoOf(ParametersHolder).h5p = function () {
  if (this.g5p_1 < get_lastIndex(this.e5p_1)) {
    this.g5p_1 = this.g5p_1 + 1 | 0;
  }
};
protoOf(ParametersHolder).toString = function () {
  return 'DefinitionParameters' + toString_0(toList(this.e5p_1));
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
  this.k5p_1 = value;
}
protoOf(StringQualifier).t = function () {
  return this.k5p_1;
};
protoOf(StringQualifier).toString = function () {
  return this.k5p_1;
};
protoOf(StringQualifier).hashCode = function () {
  return getStringHashCode(this.k5p_1);
};
protoOf(StringQualifier).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof StringQualifier))
    return false;
  var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
  if (!(this.k5p_1 === tmp0_other_with_cast.k5p_1))
    return false;
  return true;
};
function addAllEagerInstances($this, module_0) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = module_0.w5o_1.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    var tmp0 = $this.s5m_1;
    // Inline function 'kotlin.collections.set' call
    var key = element.c5o_1.hashCode();
    tmp0.h2(key, element);
  }
}
function loadModule($this, module_0, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = module_0.x5o_1.r().j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    // Inline function 'kotlin.collections.component1' call
    var mapping = element.s();
    // Inline function 'kotlin.collections.component2' call
    var factory = element.t();
    $this.l5p(allowOverride, mapping, factory);
  }
}
function createEagerInstances($this, instances) {
  var defaultContext = new ResolutionContext($this.q5m_1.o5m_1, $this.q5m_1.k5m_1.x5m_1, getKClass(NoClass));
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = instances.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    element.b5o(defaultContext);
  }
}
function InstanceRegistry(_koin) {
  this.q5m_1 = _koin;
  this.r5m_1 = KoinPlatformTools_instance.m5p();
  this.s5m_1 = KoinPlatformTools_instance.m5p();
}
protoOf(InstanceRegistry).t5m = function (modules, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = modules.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    loadModule(this, element, allowOverride);
    addAllEagerInstances(this, element);
  }
};
protoOf(InstanceRegistry).c5n = function () {
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = this.s5m_1.g2();
  var tmp$ret$0 = copyToArray(this_0);
  var instances = arrayListOf(tmp$ret$0.slice());
  this.s5m_1.y1();
  createEagerInstances(this, instances);
};
protoOf(InstanceRegistry).n5p = function (allowOverride, mapping, factory, logWarning) {
  if (this.r5m_1.e2(mapping) == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    if (!allowOverride) {
      overrideError(factory, mapping);
    } else if (logWarning) {
      this.q5m_1.o5m_1.s5o("(+) override index '" + mapping + "' -> '" + factory.c5o_1.toString() + "'");
    }
  }
  this.q5m_1.o5m_1.b5n("(+) index '" + mapping + "' -> '" + factory.c5o_1.toString() + "'");
  // Inline function 'kotlin.collections.set' call
  this.r5m_1.h2(mapping, factory);
};
protoOf(InstanceRegistry).l5p = function (allowOverride, mapping, factory, logWarning, $super) {
  logWarning = logWarning === VOID ? true : logWarning;
  var tmp;
  if ($super === VOID) {
    this.n5p(allowOverride, mapping, factory, logWarning);
    tmp = Unit_instance;
  } else {
    tmp = $super.n5p.call(this, allowOverride, mapping, factory, logWarning);
  }
  return tmp;
};
protoOf(InstanceRegistry).o5p = function (clazz, qualifier, scopeQualifier) {
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
  return this.r5m_1.e2(indexKey);
};
protoOf(InstanceRegistry).p5p = function (qualifier, clazz, scopeQualifier, instanceContext) {
  var tmp0_safe_receiver = this.o5p(clazz, qualifier, scopeQualifier);
  var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b5o(instanceContext);
  return (tmp == null ? true : !(tmp == null)) ? tmp : null;
};
protoOf(InstanceRegistry).h5n = function () {
  return this.r5m_1.m();
};
function PropertyRegistry(_koin) {
  this.q5p_1 = _koin;
  this.r5p_1 = KoinPlatformTools_instance.m5p();
}
function loadModule_0($this, module_0) {
  $this.v5m_1.n(module_0.y5o_1);
}
function Companion_1() {
  Companion_instance_1 = this;
  this.t5n_1 = '_root_';
  this.u5n_1 = _q('_root_');
}
var Companion_instance_1;
function Companion_getInstance_2() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function ScopeRegistry(_koin) {
  Companion_getInstance_2();
  this.u5m_1 = _koin;
  this.v5m_1 = KoinPlatformTools_instance.s5p();
  this.w5m_1 = KoinPlatformTools_instance.m5p();
  this.x5m_1 = new Scope(Companion_getInstance_2().u5n_1, '_root_', true, this.u5m_1);
  this.v5m_1.e(this.x5m_1.t5p_1);
  var tmp0 = this.w5m_1;
  var tmp2 = this.x5m_1.u5p_1;
  // Inline function 'kotlin.collections.set' call
  var value = this.x5m_1;
  tmp0.h2(tmp2, value);
}
protoOf(ScopeRegistry).y5m = function (modules) {
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
  var tmp0 = $this.w5p_1.o5m_1;
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  var lvl = Level_DEBUG_getInstance();
  if (!(tmp0.a5n_1.m2(lvl) <= 0)) {
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
  var scopeId = $this.v5p_1 ? '' : " - scope:'" + $this.u5p_1 + "'";
  $this.w5p_1.o5m_1.i5n(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + scopeId + '...');
  // Inline function 'kotlin.time.measureTimedValue' call
  // Inline function 'kotlin.time.measureTimedValue' call
  var mark = Monotonic_instance.qe();
  var result = resolveInstance($this, qualifier, clazz, parameters);
  var result_0 = new TimedValue(result, ValueTimeMark__elapsedNow_impl_eonqvs(mark));
  // Inline function 'org.koin.core.scope.Scope.logInstanceDuration' call
  var duration = result_0.ml_1;
  $this.w5p_1.o5m_1.i5n(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + get_inMs(duration) + ' ms');
  return result_0.ll_1;
}
function resolveInstance($this, qualifier, clazz, parameters) {
  // Inline function 'org.koin.core.scope.Scope.checkScopeIsOpen' call
  if ($this.b5q_1) {
    throw new ClosedScopeException("Scope '" + $this.u5p_1 + "' is closed");
  }
  var instanceContext = new ResolutionContext($this.w5p_1.o5m_1, $this, clazz, qualifier, parameters);
  return stackParametersCall($this, parameters, instanceContext);
}
function stackParametersCall($this, parameters, instanceContext) {
  if (parameters == null) {
    return resolveFromContext($this, instanceContext);
  }
  var tmp0 = $this.w5p_1.o5m_1;
  // Inline function 'org.koin.core.logger.Logger.log' call
  var lvl = Level_DEBUG_getInstance();
  // Inline function 'org.koin.core.logger.Logger.isAt' call
  if (tmp0.a5n_1.m2(lvl) <= 0) {
    var tmp$ret$1 = '| >> parameters ' + toString(parameters);
    tmp0.i5n(lvl, tmp$ret$1);
  }
  var stack = onParameterOnStack($this, parameters);
  try {
    return resolveFromContext($this, instanceContext);
  }finally {
    $this.w5p_1.o5m_1.b5n('| << parameters');
    clearParameterStack($this, stack);
  }
}
function onParameterOnStack($this, parameters) {
  var stack = getOrCreateParameterStack($this);
  stack.yf(parameters);
  return stack;
}
function clearParameterStack($this, stack) {
  stack.bg();
  if (stack.p()) {
    var tmp0_safe_receiver = $this.a5q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b4();
    }
    $this.a5q_1 = null;
  }
}
function getOrCreateParameterStack($this) {
  var tmp0_safe_receiver = $this.a5q_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lx();
  var tmp;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.let' call
    var it = ArrayDeque_init_$Create$_0();
    $this.a5q_1 = new ThreadLocalRef();
    var tmp0_safe_receiver_0 = $this.a5q_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.a5m(it);
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
  if (instanceContext.j5o_1 == null) {
    tmp = null;
  } else {
    $this.w5p_1.o5m_1.b5n('|- ? ' + instanceContext.k5o_1 + ' look in injected parameters');
    tmp = instanceContext.j5o_1.j5p(instanceContext.h5o_1);
  }
  var tmp0_elvis_lhs = tmp;
  var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? resolveFromRegistry($this, instanceContext) : tmp0_elvis_lhs;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'org.koin.core.scope.Scope.resolveFromStackedParameters' call
    var tmp0_safe_receiver = $this.a5q_1;
    var current = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lx();
    var tmp_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (current == null || current.p()) {
      tmp_1 = null;
    } else {
      $this.w5p_1.o5m_1.b5n('|- ? ' + instanceContext.k5o_1 + ' look in stack parameters');
      var parameters = current.xf();
      tmp_1 = parameters == null ? null : parameters.j5p(instanceContext.h5o_1);
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
      if ($this.v5p_1) {
        tmp$ret$3 = null;
        break $l$block;
      }
      $this.w5p_1.o5m_1.b5n('|- ? ' + instanceContext.k5o_1 + ' look at scope source');
      var tmp_3;
      if (instanceContext.h5o_1.ta($this.y5p_1) && instanceContext.i5o_1 == null) {
        var tmp_4 = $this.y5p_1;
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
    $this.w5p_1.o5m_1.b5n('|- << parameters');
    var tmp0_safe_receiver_0 = instanceContext.i5o_1;
    var tmp_6;
    if (tmp0_safe_receiver_0 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_6 = " and qualifier '" + toString_0(tmp0_safe_receiver_0) + "'";
    }
    var tmp1_elvis_lhs_0 = tmp_6;
    var qualifierString = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
    throw new NoDefinitionFoundException("No definition found for type '" + getFullName(instanceContext.h5o_1) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
  } else {
    tmp_5 = tmp4_elvis_lhs;
  }
  return tmp_5;
}
function resolveFromRegistry($this, ctx) {
  return $this.w5p_1.l5m_1.p5p(ctx.i5o_1, ctx.h5o_1, $this.t5p_1, ctx);
}
function resolveFromParentScopes($this, ctx) {
  $this.w5p_1.o5m_1.b5n('|- ? ' + ctx.k5o_1 + ' look in other scopes');
  return findInOtherScope($this, ctx);
}
function findInOtherScope($this, ctx) {
  var tmp0 = $this.x5p_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var result = element.c5q(ctx);
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
  this.t5p_1 = scopeQualifier;
  this.u5p_1 = id;
  this.v5p_1 = isRoot;
  this.w5p_1 = _koin;
  this.x5p_1 = LinkedHashSet_init_$Create$();
  this.y5p_1 = null;
  this.z5p_1 = LinkedHashSet_init_$Create$();
  this.a5q_1 = null;
  this.b5q_1 = false;
}
protoOf(Scope).c5q = function (ctx) {
  var tmp;
  try {
    tmp = get(this, ctx.h5o_1, ctx.i5o_1, ctx.j5o_1);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof ClosedScopeException) {
      var e = $p;
      this.w5p_1.o5m_1.b5n('* Scope closed - no instance found for ' + getFullName(ctx.h5o_1) + ' on scope ' + this.toString());
      tmp_0 = null;
    } else {
      if ($p instanceof NoDefinitionFoundException) {
        var e_0 = $p;
        this.w5p_1.o5m_1.b5n("* No instance found for type '" + getFullName(ctx.h5o_1) + "' on scope '" + this.toString() + "'");
        tmp_0 = null;
      } else {
        throw $p;
      }
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(Scope).d5q = function (clazz, qualifier, parameters) {
  return resolveWithOptionalLogging(this, clazz, qualifier, parameters == null ? null : parameters());
};
protoOf(Scope).toString = function () {
  return "['" + this.u5p_1 + "']";
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
  var name = KoinPlatformTools_instance.e5q(_this__u8e3s4);
  // Inline function 'kotlin.collections.set' call
  get_classNames().h2(_this__u8e3s4, name);
  return name;
}
var properties_initialized_KClassExt_kt_dizwhw;
function _init_properties_KClassExt_kt__5ro5b2() {
  if (!properties_initialized_KClassExt_kt_dizwhw) {
    properties_initialized_KClassExt_kt_dizwhw = true;
    classNames = KoinPlatformTools_instance.m5p();
  }
}
function getKClassDefaultName(_this__u8e3s4, kClass) {
  return 'KClass@' + kClass.hashCode();
}
function generateId(_this__u8e3s4) {
  return Companion_getInstance().fm().toString();
}
function register($this, koinApplication) {
  if (!($this.f5q_1 == null)) {
    throw new KoinApplicationAlreadyStartedException('A Koin Application has already been started');
  }
  $this.f5q_1 = koinApplication.d5n_1;
}
function GlobalContext() {
  this.f5q_1 = null;
}
protoOf(GlobalContext).lx = function () {
  var tmp0_elvis_lhs = this.f5q_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    var message = 'KoinApplication has not been started';
    throw IllegalStateException_init_$Create$(toString_0(message));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(GlobalContext).g5q = function () {
  return this.f5q_1;
};
protoOf(GlobalContext).k5n = function (appDeclaration) {
  var koinApplication = Companion_instance.f5n();
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
protoOf(KoinPlatformTools).l5o = function (e) {
  return e.toString() + toString_0(split(Exception_init_$Create$().toString(), ['\n']));
};
protoOf(KoinPlatformTools).e5q = function (kClass) {
  var tmp0_elvis_lhs = kClass.sa();
  return tmp0_elvis_lhs == null ? getKClassDefaultName(this, kClass) : tmp0_elvis_lhs;
};
protoOf(KoinPlatformTools).j5n = function () {
  return GlobalContext_instance;
};
protoOf(KoinPlatformTools).q5o = function (lock, block) {
  return block();
};
protoOf(KoinPlatformTools).m5p = function () {
  return ConcurrentMutableMap_init_$Create$();
};
protoOf(KoinPlatformTools).s5p = function () {
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
