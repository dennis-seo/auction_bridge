import {
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toString1pkumu07cwy4m as toString,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  println2shhhgwwt4c61 as println,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  isSuspendFunction153vlp5l2npj9 as isSuspendFunction,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  toString30pk9tzaqopn as toString_0,
  getKClass1s3j9wy1cofik as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType1lgox3mzhchp5 as createKType,
  Unitkvevlwgzwiuc as Unit,
  toList3jhuyej2anx2q as toList,
  sortedWith2csnbbb21k0lg as sortedWith,
  joinToString1cxrrlmo0chqs as joinToString,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  Comparator2b3maoeh98xtg as Comparator,
  hashCodeq5arwsb9dgti as hashCode,
  compareValues1n2ayl87ihzfk as compareValues,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  get6d5x931vk0s as get,
  fold36i9psb7d5v48 as fold,
  minusKeyyqanvso9aovh as minusKey,
  plusolev77jfy5r9 as plus,
  Element2gr7ezmxqaln7 as Element,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Job13y4jkazwjho0 as Job,
  GlobalScope_instance1sfulufhd2ijt as GlobalScope_instance,
  Dispatchers_getInstanceitgtkvqfcnx3 as Dispatchers_getInstance,
  launch1c91vkjzdi9sd as launch,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
} from './kotlinx-coroutines-core.mjs';
import { atomic$boolean$1iggki4z65a2h as atomic$boolean$1 } from './kotlinx-atomicfu.mjs';
import {
  ReadChannelContentz1amb4hnpqp4 as ReadChannelContent,
  charset1dribv3ku48b1 as charset,
  Url2829xxbhyjpua as Url,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  HttpHeaders_getInstanceelogg8fjd54u as HttpHeaders_getInstance,
  contentType317fn4f991q9a as contentType,
  ProtocolUpgradexnnpt2xliy8g as ProtocolUpgrade,
  NoContent1bdx48poqrifq as NoContent,
  ContentWrapper3n9gdymgnbto9 as ContentWrapper,
  WriteChannelContent1d7f40hsfcaxg as WriteChannelContent,
  ByteArrayContent2n0wb43y6ugs1 as ByteArrayContent,
} from './ktor-ktor-http.mjs';
import {
  PipelineContext34fsb0mycu471 as PipelineContext,
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  AttributeKey3aq8ytwgx54f7 as AttributeKey,
  copyToBoth3ldmovxh3mg5n as copyToBoth,
} from './ktor-ktor-utils.mjs';
import {
  Phases_getInstance18vqybk3y2ism as Phases_getInstance,
  HttpResponse1532ob1hsse1y as HttpResponse,
  Phases_getInstance2gb8yk5kt1qdy as Phases_getInstance_0,
  HttpResponseContainer3r9yzy4mwwvc9 as HttpResponseContainer,
  Phases_getInstance3cv4l5wlctlnh as Phases_getInstance_1,
  get_ResponseObserver25kfqwxoddjca as get_ResponseObserver,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  HttpClientCall2j6myj8ctykar as HttpClientCall,
  createClientPluginjwpvufjows5r as createClientPlugin,
} from './ktor-ktor-client-ktor-client-core.mjs';
import {
  Charsets_getInstanceqs70pvl4noow as Charsets_getInstance,
  ByteChannel3cxdguezl3lu7 as ByteChannel,
  readRemaining1x8kk1vq7p6gm as readRemaining,
  readText27783kyxjxi1g as readText,
  writer1eia5its2a1fh as writer,
  WriterScope3b0bo1enaee6b as WriterScope,
  writeFully3gv1ab611t04k as writeFully,
} from './ktor-ktor-io.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForCoroutine($logResponseExceptionCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($logResponseBodyCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($closeResponseLogCOROUTINE$, CoroutineImpl);
initMetadataForClass(HttpClientCallLogger, 'HttpClientCallLogger', VOID, VOID, VOID, [1, 0]);
initMetadataForClass(LogLevel, 'LogLevel', VOID, Enum);
initMetadataForClass(LoggedContent, 'LoggedContent', VOID, ReadChannelContent);
initMetadataForCompanion(Companion);
initMetadataForClass(SimpleLogger, 'SimpleLogger', SimpleLogger);
initMetadataForClass(LoggingConfig, 'LoggingConfig', LoggingConfig);
initMetadataForClass(Context, 'Context', VOID, VOID, VOID, [1]);
initMetadataForLambda(SendHook$install$slambda, CoroutineImpl, VOID, [2]);
initMetadataForObject(SendHook, 'SendHook');
initMetadataForClass(Context_0, 'Context', VOID, VOID, VOID, [0]);
initMetadataForLambda(ResponseHook$install$slambda, CoroutineImpl, VOID, [2]);
initMetadataForObject(ResponseHook, 'ResponseHook');
initMetadataForClass(Context_1, 'Context', VOID, VOID, VOID, [0]);
initMetadataForLambda(ReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
initMetadataForObject(ReceiveHook, 'ReceiveHook');
initMetadataForLambda(Logging$lambda$slambda, CoroutineImpl, VOID, [2]);
initMetadataForLambda(Logging$lambda$slambda_1, CoroutineImpl, VOID, [2]);
initMetadataForLambda(Logging$lambda$slambda_3, CoroutineImpl, VOID, [2]);
initMetadataForLambda(Logging$lambda$slambda_5, CoroutineImpl, VOID, [1]);
initMetadataForLambda(Logging$lambda$logRequestBody$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForCoroutine($logResponseBodyCOROUTINE$_0, CoroutineImpl);
initMetadataForLambda(toReadChannel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($observeCOROUTINE$, CoroutineImpl);
initMetadataForObject(MDCContextKey, 'MDCContextKey');
initMetadataForObject(MDCContextElement, 'MDCContextElement', VOID, VOID, [Element]);
//endregion
function $logResponseExceptionCOROUTINE$(_this__u8e3s4, message, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.x4w_1 = _this__u8e3s4;
  this.y4w_1 = message;
}
protoOf($logResponseExceptionCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = this.x4w_1.c4x_1.wp(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var this_0 = this.y4w_1;
          this.x4w_1.z4w_1.g4x(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())));
          return Unit_instance;
        case 2:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 2) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
function $logResponseBodyCOROUTINE$(_this__u8e3s4, message, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.p4x_1 = _this__u8e3s4;
  this.q4x_1 = message;
}
protoOf($logResponseBodyCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = this.p4x_1.d4x_1.wp(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.p4x_1.b4x_1.b8(this.q4x_1);
          return Unit_instance;
        case 2:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 2) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
function $closeResponseLogCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.z4x_1 = _this__u8e3s4;
}
protoOf($closeResponseLogCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          if (!this.z4x_1.f4x_1.atomicfu$compareAndSet(false, true))
            return Unit_instance;
          this.u8_1 = 1;
          suspendResult = this.z4x_1.c4x_1.wp(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var message = toString(trim(this.z4x_1.b4x_1));
          if (charSequenceLength(message) > 0) {
            this.z4x_1.z4w_1.g4x(message);
          }

          return Unit_instance;
        case 2:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 2) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
function HttpClientCallLogger(logger) {
  this.z4w_1 = logger;
  this.a4x_1 = StringBuilder_init_$Create$();
  this.b4x_1 = StringBuilder_init_$Create$();
  this.c4x_1 = Job();
  this.d4x_1 = Job();
  this.e4x_1 = atomic$boolean$1(false);
  this.f4x_1 = atomic$boolean$1(false);
}
protoOf(HttpClientCallLogger).a4y = function (message) {
  var tmp0 = this.a4x_1;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.appendLine' call
  var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
  // Inline function 'kotlin.text.appendLine' call
  tmp0.b8(value).c8(_Char___init__impl__6a9atx(10));
};
protoOf(HttpClientCallLogger).b4y = function (message) {
  var tmp0 = this.b4x_1;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.appendLine' call
  var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
  // Inline function 'kotlin.text.appendLine' call
  tmp0.b8(value).c8(_Char___init__impl__6a9atx(10));
  this.d4x_1.mw();
};
protoOf(HttpClientCallLogger).c4y = function (message, $completion) {
  var tmp = new $logResponseExceptionCOROUTINE$(this, message, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(HttpClientCallLogger).d4y = function (message, $completion) {
  var tmp = new $logResponseBodyCOROUTINE$(this, message, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(HttpClientCallLogger).e4y = function () {
  if (!this.e4x_1.atomicfu$compareAndSet(false, true))
    return Unit_instance;
  try {
    var message = toString(trim(this.a4x_1));
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(message) > 0) {
      this.z4w_1.g4x(message);
    }
  }finally {
    this.c4x_1.mw();
  }
};
protoOf(HttpClientCallLogger).f4y = function ($completion) {
  var tmp = new $closeResponseLogCOROUTINE$(this, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
var LogLevel_ALL_instance;
var LogLevel_HEADERS_instance;
var LogLevel_BODY_instance;
var LogLevel_INFO_instance;
var LogLevel_NONE_instance;
var LogLevel_entriesInitialized;
function LogLevel_initEntries() {
  if (LogLevel_entriesInitialized)
    return Unit_instance;
  LogLevel_entriesInitialized = true;
  LogLevel_ALL_instance = new LogLevel('ALL', 0, true, true, true);
  LogLevel_HEADERS_instance = new LogLevel('HEADERS', 1, true, true, false);
  LogLevel_BODY_instance = new LogLevel('BODY', 2, true, false, true);
  LogLevel_INFO_instance = new LogLevel('INFO', 3, true, false, false);
  LogLevel_NONE_instance = new LogLevel('NONE', 4, false, false, false);
}
function LogLevel(name, ordinal, info, headers, body) {
  Enum.call(this, name, ordinal);
  this.i4y_1 = info;
  this.j4y_1 = headers;
  this.k4y_1 = body;
}
function LogLevel_HEADERS_getInstance() {
  LogLevel_initEntries();
  return LogLevel_HEADERS_instance;
}
function LogLevel_INFO_getInstance() {
  LogLevel_initEntries();
  return LogLevel_INFO_instance;
}
function LogLevel_NONE_getInstance() {
  LogLevel_initEntries();
  return LogLevel_NONE_instance;
}
function LoggedContent(originalContent, channel) {
  ReadChannelContent.call(this);
  this.m4y_1 = originalContent;
  this.n4y_1 = channel;
  this.o4y_1 = this.m4y_1.r3h();
  this.p4y_1 = this.m4y_1.t3h();
  this.q4y_1 = this.m4y_1.s3h();
  this.r4y_1 = this.m4y_1.j3c();
}
protoOf(LoggedContent).r3h = function () {
  return this.o4y_1;
};
protoOf(LoggedContent).t3h = function () {
  return this.p4y_1;
};
protoOf(LoggedContent).s3h = function () {
  return this.q4y_1;
};
protoOf(LoggedContent).j3c = function () {
  return this.r4y_1;
};
protoOf(LoggedContent).x3h = function () {
  return this.n4y_1;
};
function Companion() {
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function get_SIMPLE(_this__u8e3s4) {
  return new SimpleLogger();
}
function SimpleLogger() {
}
protoOf(SimpleLogger).g4x = function (message) {
  println('HttpClient: ' + message);
};
function get_ClientCallLogger() {
  _init_properties_Logging_kt__66pui5();
  return ClientCallLogger;
}
var ClientCallLogger;
function get_DisableLogging() {
  _init_properties_Logging_kt__66pui5();
  return DisableLogging;
}
var DisableLogging;
function get_Logging() {
  _init_properties_Logging_kt__66pui5();
  return Logging;
}
var Logging;
function LoggingConfig() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.s4y_1 = ArrayList_init_$Create$();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_0.t4y_1 = ArrayList_init_$Create$();
  this.u4y_1 = null;
  this.v4y_1 = LogLevel_HEADERS_getInstance();
}
protoOf(LoggingConfig).w4y = function () {
  var tmp0_elvis_lhs = this.u4y_1;
  return tmp0_elvis_lhs == null ? get_DEFAULT(Companion_instance) : tmp0_elvis_lhs;
};
function Context(context) {
  this.x4y_1 = context;
}
protoOf(Context).y4y = function (content, $completion) {
  return this.x4y_1.n34(content, $completion);
};
function SendHook$install$slambda($handler, resultContinuation) {
  this.h4z_1 = $handler;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SendHook$install$slambda).y3m = function ($this$intercept, it, $completion) {
  var tmp = this.z3m($this$intercept, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(SendHook$install$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.y3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
};
protoOf(SendHook$install$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = this.h4z_1(new Context(this.i4z_1), this.i4z_1.j35_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 2) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(SendHook$install$slambda).z3m = function ($this$intercept, it, completion) {
  var i = new SendHook$install$slambda(this.h4z_1, completion);
  i.i4z_1 = $this$intercept;
  i.j4z_1 = it;
  return i;
};
function SendHook$install$slambda_0($handler, resultContinuation) {
  var i = new SendHook$install$slambda($handler, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.y3m($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function SendHook() {
}
protoOf(SendHook).k4z = function (client, handler) {
  var tmp = Phases_getInstance().p3o_1;
  client.g3m_1.n35(tmp, SendHook$install$slambda_0(handler, null));
};
protoOf(SendHook).v3v = function (client, handler) {
  return this.k4z(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
};
var SendHook_instance;
function SendHook_getInstance() {
  return SendHook_instance;
}
function Context_0(context) {
  this.l4z_1 = context;
}
protoOf(Context_0).m4z = function ($completion) {
  return this.l4z_1.o34($completion);
};
function ResponseHook$install$slambda($handler, resultContinuation) {
  this.v4z_1 = $handler;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ResponseHook$install$slambda).i3w = function ($this$intercept, it, $completion) {
  var tmp = this.j3w($this$intercept, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ResponseHook$install$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.i3w(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
};
protoOf(ResponseHook$install$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = this.v4z_1(new Context_0(this.w4z_1), this.w4z_1.m34(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 2) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(ResponseHook$install$slambda).j3w = function ($this$intercept, it, completion) {
  var i = new ResponseHook$install$slambda(this.v4z_1, completion);
  i.w4z_1 = $this$intercept;
  i.x4z_1 = it;
  return i;
};
function ResponseHook$install$slambda_0($handler, resultContinuation) {
  var i = new ResponseHook$install$slambda($handler, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.i3w($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function ResponseHook() {
}
protoOf(ResponseHook).y4z = function (client, handler) {
  var tmp = Phases_getInstance_0().m3w_1;
  client.h3m_1.n35(tmp, ResponseHook$install$slambda_0(handler, null));
};
protoOf(ResponseHook).v3v = function (client, handler) {
  return this.y4z(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
};
var ResponseHook_instance;
function ResponseHook_getInstance() {
  return ResponseHook_instance;
}
function Context_1(context) {
  this.z4z_1 = context;
}
protoOf(Context_1).a50 = function ($completion) {
  return this.z4z_1.o34($completion);
};
function ReceiveHook$install$slambda($handler, resultContinuation) {
  this.j50_1 = $handler;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ReceiveHook$install$slambda).t3n = function ($this$intercept, it, $completion) {
  var tmp = this.u3n($this$intercept, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ReceiveHook$install$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.t3n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
};
protoOf(ReceiveHook$install$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = this.j50_1(new Context_1(this.k50_1), this.k50_1.j35_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 2) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(ReceiveHook$install$slambda).u3n = function ($this$intercept, it, completion) {
  var i = new ReceiveHook$install$slambda(this.j50_1, completion);
  i.k50_1 = $this$intercept;
  i.l50_1 = it;
  return i;
};
function ReceiveHook$install$slambda_0($handler, resultContinuation) {
  var i = new ReceiveHook$install$slambda($handler, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.t3n($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function ReceiveHook() {
}
protoOf(ReceiveHook).m50 = function (client, handler) {
  var tmp = Phases_getInstance_1().d3p_1;
  client.f3m_1.n35(tmp, ReceiveHook$install$slambda_0(handler, null));
};
protoOf(ReceiveHook).v3v = function (client, handler) {
  return this.m50(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
};
var ReceiveHook_instance;
function ReceiveHook_getInstance() {
  return ReceiveHook_instance;
}
function LoggingConfig$_init_$ref_f1nb0k() {
  var l = function () {
    return new LoggingConfig();
  };
  l.callableName = '<init>';
  return l;
}
function Logging$lambda($this$createClientPlugin) {
  _init_properties_Logging_kt__66pui5();
  var logger = $this$createClientPlugin.q3w_1.w4y();
  var level = $this$createClientPlugin.q3w_1.v4y_1;
  var filters = $this$createClientPlugin.q3w_1.s4y_1;
  var sanitizedHeaders = $this$createClientPlugin.q3w_1.t4y_1;
  var tmp = SendHook_instance;
  $this$createClientPlugin.t3w(tmp, Logging$lambda$slambda_0(filters, logger, level, sanitizedHeaders, null));
  var tmp_0 = ResponseHook_instance;
  $this$createClientPlugin.t3w(tmp_0, Logging$lambda$slambda_2(level, sanitizedHeaders, null));
  var tmp_1 = ReceiveHook_instance;
  $this$createClientPlugin.t3w(tmp_1, Logging$lambda$slambda_4(level, null));
  if (!level.k4y_1)
    return Unit_instance;
  var observer = Logging$lambda$slambda_6(level, null);
  var tmp_2 = get_ResponseObserver();
  var tmp_3 = get_ResponseObserver();
  tmp_2.l3p(tmp_3.k3p(Logging$lambda$lambda(observer)), $this$createClientPlugin.p3w_1);
  return Unit_instance;
}
function invoke$shouldBeLogged(filters, request) {
  var tmp;
  if (filters.p()) {
    tmp = true;
  } else {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(filters, Collection)) {
        tmp_0 = filters.p();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = filters.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element(request)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function invoke$logRequestBody(content, logger, $completion) {
  var requestLog = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = 'BODY Content-Type: ' + toString_0(content.r3h());
  // Inline function 'kotlin.text.appendLine' call
  requestLog.b8(value).c8(_Char___init__impl__6a9atx(10));
  var tmp0_safe_receiver = content.r3h();
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().j2c_1 : tmp1_elvis_lhs;
  var channel = new ByteChannel();
  var tmp = GlobalScope_instance;
  var tmp_0 = Dispatchers_getInstance().c10_1.yh(MDCContext());
  launch(tmp, tmp_0, VOID, Logging$lambda$logRequestBody$slambda_0(channel, charset_0, requestLog, logger, null));
  return observe(content, channel, $completion);
}
function invoke$logRequestException(level, logger, context, cause) {
  if (level.i4y_1) {
    logger.g4x('REQUEST ' + Url(context.f3o_1).toString() + ' failed with exception: ' + cause.toString());
  }
}
function invoke$logRequest(logger, level, sanitizedHeaders, request, $completion) {
  var tmp = request.i3o_1;
  var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
  var callLogger = new HttpClientCallLogger(logger);
  request.k3o_1.e2y(get_ClientCallLogger(), callLogger);
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  if (level.i4y_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value = 'REQUEST: ' + Url(request.f3o_1).toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(value).c8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'METHOD: ' + request.g3o_1.toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(value_0).c8(_Char___init__impl__6a9atx(10));
  }
  if (level.j4y_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = 'COMMON HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(value_1).c8(_Char___init__impl__6a9atx(10));
    logHeaders(this_0, request.h3o_1.e32(), sanitizedHeaders);
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = 'CONTENT HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(value_2).c8(_Char___init__impl__6a9atx(10));
    var tmp$ret$9;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = sanitizedHeaders.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element.o50_1(HttpHeaders_getInstance().v38_1)) {
          tmp$ret$9 = element;
          break $l$block;
        }
      }
      tmp$ret$9 = null;
    }
    var tmp0_safe_receiver = tmp$ret$9;
    var contentLengthPlaceholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n50_1;
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = sanitizedHeaders.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        if (element_0.o50_1(HttpHeaders_getInstance().y38_1)) {
          tmp$ret$11 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$11 = null;
    }
    var tmp1_safe_receiver = tmp$ret$11;
    var contentTypePlaceholder = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n50_1;
    var tmp2_safe_receiver = content.t3h();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = HttpHeaders_getInstance().v38_1;
      logHeader(this_0, tmp_0, contentLengthPlaceholder == null ? tmp2_safe_receiver.toString() : contentLengthPlaceholder);
    }
    var tmp3_safe_receiver = content.r3h();
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_1 = HttpHeaders_getInstance().y38_1;
      logHeader(this_0, tmp_1, contentTypePlaceholder == null ? tmp3_safe_receiver.toString() : contentTypePlaceholder);
    }
    logHeaders(this_0, content.j3c().e32(), sanitizedHeaders);
  }
  var message = this_0.toString();
  // Inline function 'kotlin.text.isNotEmpty' call
  if (charSequenceLength(message) > 0) {
    callLogger.a4y(message);
  }
  var tmp_2;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(message) === 0) {
    tmp_2 = true;
  } else {
    tmp_2 = !level.k4y_1;
  }
  if (tmp_2) {
    callLogger.e4y();
    return null;
  }
  return invoke$logRequestBody(content, callLogger, $completion);
}
function invoke$logResponseException(level, log, request, cause) {
  if (!level.i4y_1)
    return Unit_instance;
  log.b8('RESPONSE ' + request.r3q().toString() + ' failed with exception: ' + cause.toString());
}
function Logging$lambda$slambda($filters, $logger, $level, $sanitizedHeaders, resultContinuation) {
  this.x50_1 = $filters;
  this.y50_1 = $logger;
  this.z50_1 = $level;
  this.a51_1 = $sanitizedHeaders;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$slambda).h51 = function ($this$on, request, $completion) {
  var tmp = this.i51($this$on, request, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof Context ? p1 : THROW_CCE();
  return this.h51(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 8;
          if (!invoke$shouldBeLogged(this.x50_1, this.c51_1)) {
            this.c51_1.k3o_1.e2y(get_DisableLogging(), Unit_instance);
            return Unit_instance;
          }

          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = invoke$logRequest(this.y50_1, this.z50_1, this.a51_1, this.c51_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.d51_1 = suspendResult;
          this.v8_1 = 8;
          this.u8_1 = 3;
          continue $sm;
        case 2:
          this.v8_1 = 8;
          var tmp_0 = this.x8_1;
          if (tmp_0 instanceof Error) {
            this.e51_1 = this.x8_1;
            var tmp_1 = this;
            tmp_1.d51_1 = null;
            this.u8_1 = 3;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 3:
          this.v8_1 = 8;
          this.f51_1 = this.d51_1;
          this.g51_1 = Unit_instance;
          this.u8_1 = 4;
          continue $sm;
        case 4:
          this.v8_1 = 7;
          this.v8_1 = 6;
          this.u8_1 = 5;
          var tmp0_elvis_lhs = this.f51_1;
          suspendResult = this.b51_1.y4y(tmp0_elvis_lhs == null ? this.c51_1.i3o_1 : tmp0_elvis_lhs, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.g51_1 = suspendResult;
          this.v8_1 = 8;
          this.u8_1 = 9;
          continue $sm;
        case 6:
          this.v8_1 = 7;
          var tmp_2 = this.x8_1;
          if (tmp_2 instanceof Error) {
            var cause = this.x8_1;
            var tmp_3 = this;
            invoke$logRequestException(this.z50_1, this.y50_1, this.c51_1, cause);
            throw cause;
          } else {
            throw this.x8_1;
          }

        case 7:
          this.v8_1 = 8;
          var t = this.x8_1;
          throw t;
        case 8:
          throw this.x8_1;
        case 9:
          this.g51_1;
          this.v8_1 = 8;
          return Unit_instance;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 8) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$lambda$slambda).i51 = function ($this$on, request, completion) {
  var i = new Logging$lambda$slambda(this.x50_1, this.y50_1, this.z50_1, this.a51_1, completion);
  i.b51_1 = $this$on;
  i.c51_1 = request;
  return i;
};
function Logging$lambda$slambda_0($filters, $logger, $level, $sanitizedHeaders, resultContinuation) {
  var i = new Logging$lambda$slambda($filters, $logger, $level, $sanitizedHeaders, resultContinuation);
  var l = function ($this$on, request, $completion) {
    return i.h51($this$on, request, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$lambda$slambda_1($level, $sanitizedHeaders, resultContinuation) {
  this.r51_1 = $level;
  this.s51_1 = $sanitizedHeaders;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$slambda_1).c52 = function ($this$on, response, $completion) {
  var tmp = this.d52($this$on, response, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$slambda_1).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof Context_0 ? p1 : THROW_CCE();
  return this.c52(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$slambda_1).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 10;
          if (this.r51_1.equals(LogLevel_NONE_getInstance()) || this.u51_1.n3r().u3p().d2y(get_DisableLogging()))
            return Unit_instance;
          this.v51_1 = this.u51_1.n3r().u3p().b2y(get_ClientCallLogger());
          this.w51_1 = StringBuilder_init_$Create$();
          this.x51_1 = false;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          this.v8_1 = 4;
          this.v8_1 = 3;
          logResponseHeader(this.w51_1, this.u51_1.n3r().f3n(), this.r51_1, this.s51_1);
          this.u8_1 = 2;
          suspendResult = this.t51_1.m4z(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.y51_1 = suspendResult;
          this.v8_1 = 10;
          this.u8_1 = 7;
          continue $sm;
        case 3:
          this.v8_1 = 4;
          var tmp_0 = this.x8_1;
          if (tmp_0 instanceof Error) {
            this.z51_1 = this.x8_1;
            var tmp_1 = this;
            invoke$logResponseException(this.r51_1, this.w51_1, this.u51_1.n3r().o3q(), this.z51_1);
            this.x51_1 = true;
            throw this.z51_1;
          } else {
            throw this.x8_1;
          }

        case 4:
          this.v8_1 = 10;
          this.a52_1 = this.x8_1;
          this.v51_1.b4y(this.w51_1.toString());
          if (this.x51_1 || !this.r51_1.k4y_1) {
            this.u8_1 = 5;
            suspendResult = this.v51_1.f4y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.u8_1 = 6;
            continue $sm;
          }

        case 5:
          this.u8_1 = 6;
          continue $sm;
        case 6:
          throw this.a52_1;
        case 7:
          this.b52_1 = this.y51_1;
          this.v8_1 = 10;
          this.v51_1.b4y(this.w51_1.toString());
          if (this.x51_1 || !this.r51_1.k4y_1) {
            this.u8_1 = 8;
            suspendResult = this.v51_1.f4y(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.u8_1 = 9;
            continue $sm;
          }

        case 8:
          this.u8_1 = 9;
          continue $sm;
        case 9:
          return Unit_instance;
        case 10:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 10) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$lambda$slambda_1).d52 = function ($this$on, response, completion) {
  var i = new Logging$lambda$slambda_1(this.r51_1, this.s51_1, completion);
  i.t51_1 = $this$on;
  i.u51_1 = response;
  return i;
};
function Logging$lambda$slambda_2($level, $sanitizedHeaders, resultContinuation) {
  var i = new Logging$lambda$slambda_1($level, $sanitizedHeaders, resultContinuation);
  var l = function ($this$on, response, $completion) {
    return i.c52($this$on, response, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$lambda$slambda_3($level, resultContinuation) {
  this.m52_1 = $level;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$slambda_3).t52 = function ($this$on, call, $completion) {
  var tmp = this.u52($this$on, call, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$slambda_3).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof Context_1 ? p1 : THROW_CCE();
  return this.t52(tmp, p2 instanceof HttpClientCall ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$slambda_3).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 6;
          if (this.m52_1.equals(LogLevel_NONE_getInstance()) || this.o52_1.u3p().d2y(get_DisableLogging())) {
            return Unit_instance;
          }

          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = this.n52_1.a50(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.p52_1 = suspendResult;
          this.v8_1 = 6;
          this.u8_1 = 5;
          continue $sm;
        case 2:
          this.v8_1 = 6;
          var tmp_0 = this.x8_1;
          if (tmp_0 instanceof Error) {
            this.q52_1 = this.x8_1;
            this.r52_1 = StringBuilder_init_$Create$();
            this.s52_1 = this.o52_1.u3p().b2y(get_ClientCallLogger());
            invoke$logResponseException(this.m52_1, this.r52_1, this.o52_1.o3q(), this.q52_1);
            this.u8_1 = 3;
            suspendResult = this.s52_1.c4y(this.r52_1.toString(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 3:
          this.u8_1 = 4;
          suspendResult = this.s52_1.f4y(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 4:
          var tmp_1 = this;
          throw this.q52_1;
        case 5:
          this.v8_1 = 6;
          return Unit_instance;
        case 6:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 6) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$lambda$slambda_3).u52 = function ($this$on, call, completion) {
  var i = new Logging$lambda$slambda_3(this.m52_1, completion);
  i.n52_1 = $this$on;
  i.o52_1 = call;
  return i;
};
function Logging$lambda$slambda_4($level, resultContinuation) {
  var i = new Logging$lambda$slambda_3($level, resultContinuation);
  var l = function ($this$on, call, $completion) {
    return i.t52($this$on, call, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$lambda$slambda_5($level, resultContinuation) {
  this.d53_1 = $level;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$slambda_5).o3y = function (it, $completion) {
  var tmp = this.q3x(it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$slambda_5).k9 = function (p1, $completion) {
  return this.o3y(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$slambda_5).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 10;
          if (this.d53_1.equals(LogLevel_NONE_getInstance()) || this.e53_1.n3r().u3p().d2y(get_DisableLogging())) {
            return Unit_instance;
          }

          this.f53_1 = this.e53_1.n3r().u3p().b2y(get_ClientCallLogger());
          this.g53_1 = StringBuilder_init_$Create$();
          this.u8_1 = 1;
          continue $sm;
        case 1:
          this.v8_1 = 4;
          this.v8_1 = 3;
          this.u8_1 = 2;
          suspendResult = logResponseBody(this.g53_1, contentType(this.e53_1), this.e53_1.p3q(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.h53_1 = suspendResult;
          this.v8_1 = 10;
          this.u8_1 = 7;
          continue $sm;
        case 3:
          this.v8_1 = 4;
          var tmp_0 = this.x8_1;
          if (tmp_0 instanceof Error) {
            this.i53_1 = this.x8_1;
            var tmp_1 = this;
            tmp_1.h53_1 = Unit_instance;
            this.v8_1 = 10;
            this.u8_1 = 7;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 4:
          this.v8_1 = 10;
          this.j53_1 = this.x8_1;
          this.u8_1 = 5;
          var this_0 = this.g53_1.toString();
          suspendResult = this.f53_1.d4y(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.u8_1 = 6;
          suspendResult = this.f53_1.f4y(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 6:
          throw this.j53_1;
        case 7:
          this.v8_1 = 10;
          this.u8_1 = 8;
          var this_1 = this.g53_1.toString();
          suspendResult = this.f53_1.d4y(toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE())), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 8:
          this.u8_1 = 9;
          suspendResult = this.f53_1.f4y(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 9:
          return Unit_instance;
        case 10:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 10) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$lambda$slambda_5).q3x = function (it, completion) {
  var i = new Logging$lambda$slambda_5(this.d53_1, completion);
  i.e53_1 = it;
  return i;
};
function Logging$lambda$slambda_6($level, resultContinuation) {
  var i = new Logging$lambda$slambda_5($level, resultContinuation);
  var l = function (it, $completion) {
    return i.o3y(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function Logging$lambda$lambda($observer) {
  return function ($this$prepare) {
    $this$prepare.d4h($observer);
    return Unit_instance;
  };
}
function Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation) {
  this.s53_1 = $channel;
  this.t53_1 = $charset;
  this.u53_1 = $requestLog;
  this.v53_1 = $logger;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$logRequestBody$slambda).g1i = function ($this$launch, $completion) {
  var tmp = this.h1i($this$launch, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$logRequestBody$slambda).k9 = function (p1, $completion) {
  return this.g1i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$logRequestBody$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 7;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          this.v8_1 = 6;
          var tmp_0 = this;
          tmp_0.y53_1 = this.s53_1;
          var tmp_1 = this;
          tmp_1.z53_1 = this.t53_1;
          this.a54_1 = this.y53_1;
          this.b54_1 = this.z53_1;
          this.v8_1 = 3;
          this.u8_1 = 2;
          suspendResult = readRemaining(this.a54_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var ARGUMENT = suspendResult;
          this.c54_1 = readText(ARGUMENT, this.b54_1);
          this.v8_1 = 6;
          this.u8_1 = 4;
          continue $sm;
        case 3:
          this.v8_1 = 6;
          var tmp_2 = this.x8_1;
          if (tmp_2 instanceof Error) {
            var cause = this.x8_1;
            var tmp_3 = this;
            tmp_3.c54_1 = null;
            this.u8_1 = 4;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 4:
          this.v8_1 = 6;
          var tmp0_elvis_lhs = this.c54_1;
          var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
          var tmp0 = this.u53_1;
          var value = 'BODY START';
          tmp0.b8(value).c8(_Char___init__impl__6a9atx(10));
          this.u53_1.b8(text).c8(_Char___init__impl__6a9atx(10));
          this.x53_1 = this.u53_1.b8('BODY END');
          this.v8_1 = 7;
          this.u8_1 = 5;
          continue $sm;
        case 5:
          this.x53_1;
          this.v8_1 = 7;
          this.v53_1.a4y(this.u53_1.toString());
          this.v53_1.e4y();
          return Unit_instance;
        case 6:
          this.v8_1 = 7;
          var t = this.x8_1;
          this.v53_1.a4y(this.u53_1.toString());
          this.v53_1.e4y();
          throw t;
        case 7:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 7) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$lambda$logRequestBody$slambda).h1i = function ($this$launch, completion) {
  var i = new Logging$lambda$logRequestBody$slambda(this.s53_1, this.t53_1, this.u53_1, this.v53_1, completion);
  i.w53_1 = $this$launch;
  return i;
};
function Logging$lambda$logRequestBody$slambda_0($channel, $charset, $requestLog, $logger, resultContinuation) {
  var i = new Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.g1i($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
var properties_initialized_Logging_kt_588vu7;
function _init_properties_Logging_kt__66pui5() {
  if (!properties_initialized_Logging_kt_588vu7) {
    properties_initialized_Logging_kt_588vu7 = true;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'CallLogger';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp = getKClass(HttpClientCallLogger);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_0;
    try {
      tmp_0 = createKType(getKClass(HttpClientCallLogger), arrayOf([]), false);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$0 = tmp_0;
    var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
    ClientCallLogger = new AttributeKey(name, tmp$ret$1);
    // Inline function 'io.ktor.util.AttributeKey' call
    var name_0 = 'DisableLogging';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_2 = getKClass(Unit);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_3;
    try {
      tmp_3 = createKType(getKClass(Unit), arrayOf([]), false);
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var _unused_var__etf5q3_0 = $p;
        tmp_4 = null;
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    var tmp$ret$0_0 = tmp_3;
    var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$0_0);
    DisableLogging = new AttributeKey(name_0, tmp$ret$1_0);
    var tmp_5 = LoggingConfig$_init_$ref_f1nb0k();
    Logging = createClientPlugin('Logging', tmp_5, Logging$lambda);
  }
}
function logHeaders(_this__u8e3s4, headers, sanitizedHeaders) {
  // Inline function 'kotlin.collections.sortedBy' call
  var this_0 = toList(headers);
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp = logHeaders$lambda;
  var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
  var sortedHeaders = sortedWith(this_0, tmp$ret$0);
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = sortedHeaders.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    // Inline function 'kotlin.collections.component1' call
    var key = element.s();
    // Inline function 'kotlin.collections.component2' call
    var values = element.t();
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = sanitizedHeaders.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        if (element_0.o50_1(key)) {
          tmp$ret$5 = element_0;
          break $l$block;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp0_safe_receiver = tmp$ret$5;
    var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n50_1;
    logHeader(_this__u8e3s4, key, placeholder == null ? joinToString(values, '; ') : placeholder);
  }
}
function logHeader(_this__u8e3s4, key, value) {
  // Inline function 'kotlin.text.appendLine' call
  var value_0 = '-> ' + key + ': ' + value;
  // Inline function 'kotlin.text.appendLine' call
  _this__u8e3s4.f(value_0).c8(_Char___init__impl__6a9atx(10));
}
function logResponseHeader(log, response, level, sanitizedHeaders) {
  // Inline function 'kotlin.with' call
  if (level.i4y_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value = 'RESPONSE: ' + response.s3h().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.b8(value).c8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'METHOD: ' + response.n3r().o3q().k3r().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.b8(value_0).c8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = 'FROM: ' + response.n3r().o3q().r3q().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.b8(value_1).c8(_Char___init__impl__6a9atx(10));
  }
  if (level.j4y_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = 'COMMON HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    log.b8(value_2).c8(_Char___init__impl__6a9atx(10));
    logHeaders(log, response.j3c().e32(), sanitizedHeaders);
  }
}
function logResponseBody(log, contentType, content, $completion) {
  var tmp = new $logResponseBodyCOROUTINE$_0(log, contentType, content, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function sam$kotlin_Comparator$0(function_0) {
  this.x54_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0).de = function (a, b) {
  return this.x54_1(a, b);
};
protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
  return this.de(a, b);
};
protoOf(sam$kotlin_Comparator$0).j3 = function () {
  return this.x54_1;
};
protoOf(sam$kotlin_Comparator$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.j3(), other.j3());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlin_Comparator$0).hashCode = function () {
  return hashCode(this.j3());
};
function logHeaders$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.s();
  var tmp$ret$1 = b.s();
  return compareValues(tmp, tmp$ret$1);
}
function $logResponseBodyCOROUTINE$_0(log, contentType, content, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.l54_1 = log;
  this.m54_1 = contentType;
  this.n54_1 = content;
}
protoOf($logResponseBodyCOROUTINE$_0).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          var tmp_0 = this;
          tmp_0.o54_1 = this.l54_1;
          this.p54_1 = this.o54_1;
          var tmp_1 = this;
          tmp_1.q54_1 = this.p54_1;
          this.r54_1 = this.q54_1;
          var tmp0 = this.r54_1;
          var value = 'BODY Content-Type: ' + toString_0(this.m54_1);
          tmp0.b8(value).c8(_Char___init__impl__6a9atx(10));
          var tmp0_0 = this.r54_1;
          var value_0 = 'BODY START';
          tmp0_0.b8(value_0).c8(_Char___init__impl__6a9atx(10));
          var tmp_2 = this;
          tmp_2.s54_1 = this.n54_1;
          var tmp_3 = this;
          var tmp0_safe_receiver = this.m54_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
          tmp_3.t54_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().j2c_1 : tmp1_elvis_lhs;
          this.u54_1 = this.s54_1;
          this.v54_1 = this.t54_1;
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = readRemaining(this.u54_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.w54_1 = readText(ARGUMENT, this.v54_1);
          this.v8_1 = 3;
          this.u8_1 = 4;
          continue $sm;
        case 2:
          this.v8_1 = 3;
          var tmp_4 = this.x8_1;
          if (tmp_4 instanceof Error) {
            var cause = this.x8_1;
            var tmp_5 = this;
            tmp_5.w54_1 = null;
            this.u8_1 = 4;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 3:
          throw this.x8_1;
        case 4:
          this.v8_1 = 3;
          var tmp2_elvis_lhs = this.w54_1;
          var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
          this.r54_1.b8(message).c8(_Char___init__impl__6a9atx(10));
          this.r54_1.b8('BODY END');
          return Unit_instance;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 3) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
function observe(_this__u8e3s4, log, $completion) {
  var tmp = new $observeCOROUTINE$(_this__u8e3s4, log, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function toReadChannel(_this__u8e3s4) {
  var tmp = GlobalScope_instance;
  var tmp_0 = Dispatchers_getInstance().c10_1;
  return writer(tmp, tmp_0, VOID, toReadChannel$slambda_0(_this__u8e3s4, null)).x2a_1;
}
function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
  this.u55_1 = $this_toReadChannel;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(toReadChannel$slambda).p3s = function ($this$writer, $completion) {
  var tmp = this.q3s($this$writer, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(toReadChannel$slambda).k9 = function (p1, $completion) {
  return this.p3s(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
};
protoOf(toReadChannel$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = this.u55_1.z3h(this.v55_1.z2a_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 2) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
protoOf(toReadChannel$slambda).q3s = function ($this$writer, completion) {
  var i = new toReadChannel$slambda(this.u55_1, completion);
  i.v55_1 = $this$writer;
  return i;
};
function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
  var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
  var l = function ($this$writer, $completion) {
    return i.p3s($this$writer, $completion);
  };
  l.$arity = 1;
  return l;
}
function $observeCOROUTINE$(_this__u8e3s4, log, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.g55_1 = _this__u8e3s4;
  this.h55_1 = log;
}
protoOf($observeCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 6;
          this.i55_1 = this.g55_1;
          var tmp_0 = this.i55_1;
          if (tmp_0 instanceof ByteArrayContent) {
            this.u8_1 = 3;
            suspendResult = writeFully(this.h55_1, this.g55_1.u3h(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            var tmp_1 = this.i55_1;
            if (tmp_1 instanceof ReadChannelContent) {
              var tmp_2 = this;
              var responseChannel = new ByteChannel();
              var content = this.g55_1.x3h();
              copyToBoth(content, this.h55_1, responseChannel);
              tmp_2.j55_1 = new LoggedContent(this.g55_1, responseChannel);
              this.u8_1 = 5;
              continue $sm;
            } else {
              var tmp_3 = this.i55_1;
              if (tmp_3 instanceof WriteChannelContent) {
                var tmp_4 = this;
                var responseChannel_0 = new ByteChannel();
                var content_0 = toReadChannel(this.g55_1);
                copyToBoth(content_0, this.h55_1, responseChannel_0);
                tmp_4.j55_1 = new LoggedContent(this.g55_1, responseChannel_0);
                this.u8_1 = 5;
                continue $sm;
              } else {
                var tmp_5 = this.i55_1;
                if (tmp_5 instanceof ContentWrapper) {
                  this.k55_1 = this.g55_1;
                  this.u8_1 = 2;
                  suspendResult = observe(this.g55_1.d3i(), this.h55_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_6;
                  var tmp_7 = this.i55_1;
                  if (tmp_7 instanceof NoContent) {
                    tmp_6 = true;
                  } else {
                    var tmp_8 = this.i55_1;
                    tmp_6 = tmp_8 instanceof ProtocolUpgrade;
                  }
                  if (tmp_6) {
                    this.u8_1 = 1;
                    suspendResult = this.h55_1.w26(this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    var tmp_9 = this;
                    noWhenBranchMatchedException();
                  }
                }
              }
            }
          }

          break;
        case 1:
          this.j55_1 = this.g55_1;
          this.u8_1 = 5;
          continue $sm;
        case 2:
          this.l55_1 = suspendResult;
          this.j55_1 = this.k55_1.e3i(this.l55_1);
          this.u8_1 = 5;
          continue $sm;
        case 3:
          this.u8_1 = 4;
          suspendResult = this.h55_1.w26(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 4:
          this.j55_1 = this.g55_1;
          this.u8_1 = 5;
          continue $sm;
        case 5:
          return this.j55_1;
        case 6:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 6) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
function MDCContext() {
  return MDCContextElement_instance;
}
function MDCContextKey() {
}
var MDCContextKey_instance;
function MDCContextKey_getInstance() {
  return MDCContextKey_instance;
}
function MDCContextElement() {
}
protoOf(MDCContextElement).s = function () {
  return MDCContextKey_instance;
};
protoOf(MDCContextElement).toString = function () {
  return 'MDCContext';
};
var MDCContextElement_instance;
function MDCContextElement_getInstance() {
  return MDCContextElement_instance;
}
function get_DEFAULT(_this__u8e3s4) {
  return get_SIMPLE(_this__u8e3s4);
}
//region block: post-declaration
protoOf(MDCContextElement).h9 = get;
protoOf(MDCContextElement).xh = fold;
protoOf(MDCContextElement).wh = minusKey;
protoOf(MDCContextElement).yh = plus;
//endregion
//region block: init
Companion_instance = new Companion();
SendHook_instance = new SendHook();
ResponseHook_instance = new ResponseHook();
ReceiveHook_instance = new ReceiveHook();
MDCContextKey_instance = new MDCContextKey();
MDCContextElement_instance = new MDCContextElement();
//endregion
//region block: exports
export {
  LogLevel_INFO_getInstance as LogLevel_INFO_getInstance20kbczllw8bs9,
  get_Logging as get_Logging1ff3305q4akdl,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-logging.mjs.map
