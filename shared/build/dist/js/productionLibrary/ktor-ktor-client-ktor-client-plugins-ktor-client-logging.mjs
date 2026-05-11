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
  this.f4w_1 = _this__u8e3s4;
  this.g4w_1 = message;
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
          suspendResult = this.f4w_1.k4w_1.ep(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var this_0 = this.g4w_1;
          this.f4w_1.h4w_1.o4w(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())));
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
  this.x4w_1 = _this__u8e3s4;
  this.y4w_1 = message;
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
          suspendResult = this.x4w_1.l4w_1.ep(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.x4w_1.j4w_1.b8(this.y4w_1);
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
  this.h4x_1 = _this__u8e3s4;
}
protoOf($closeResponseLogCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          if (!this.h4x_1.n4w_1.atomicfu$compareAndSet(false, true))
            return Unit_instance;
          this.u8_1 = 1;
          suspendResult = this.h4x_1.k4w_1.ep(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var message = toString(trim(this.h4x_1.j4w_1));
          if (charSequenceLength(message) > 0) {
            this.h4x_1.h4w_1.o4w(message);
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
  this.h4w_1 = logger;
  this.i4w_1 = StringBuilder_init_$Create$();
  this.j4w_1 = StringBuilder_init_$Create$();
  this.k4w_1 = Job();
  this.l4w_1 = Job();
  this.m4w_1 = atomic$boolean$1(false);
  this.n4w_1 = atomic$boolean$1(false);
}
protoOf(HttpClientCallLogger).i4x = function (message) {
  var tmp0 = this.i4w_1;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.appendLine' call
  var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
  // Inline function 'kotlin.text.appendLine' call
  tmp0.b8(value).c8(_Char___init__impl__6a9atx(10));
};
protoOf(HttpClientCallLogger).j4x = function (message) {
  var tmp0 = this.j4w_1;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.appendLine' call
  var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
  // Inline function 'kotlin.text.appendLine' call
  tmp0.b8(value).c8(_Char___init__impl__6a9atx(10));
  this.l4w_1.uv();
};
protoOf(HttpClientCallLogger).k4x = function (message, $completion) {
  var tmp = new $logResponseExceptionCOROUTINE$(this, message, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(HttpClientCallLogger).l4x = function (message, $completion) {
  var tmp = new $logResponseBodyCOROUTINE$(this, message, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(HttpClientCallLogger).m4x = function () {
  if (!this.m4w_1.atomicfu$compareAndSet(false, true))
    return Unit_instance;
  try {
    var message = toString(trim(this.i4w_1));
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(message) > 0) {
      this.h4w_1.o4w(message);
    }
  }finally {
    this.k4w_1.uv();
  }
};
protoOf(HttpClientCallLogger).n4x = function ($completion) {
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
  this.q4x_1 = info;
  this.r4x_1 = headers;
  this.s4x_1 = body;
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
  this.u4x_1 = originalContent;
  this.v4x_1 = channel;
  this.w4x_1 = this.u4x_1.z3g();
  this.x4x_1 = this.u4x_1.b3h();
  this.y4x_1 = this.u4x_1.a3h();
  this.z4x_1 = this.u4x_1.r3b();
}
protoOf(LoggedContent).z3g = function () {
  return this.w4x_1;
};
protoOf(LoggedContent).b3h = function () {
  return this.x4x_1;
};
protoOf(LoggedContent).a3h = function () {
  return this.y4x_1;
};
protoOf(LoggedContent).r3b = function () {
  return this.z4x_1;
};
protoOf(LoggedContent).f3h = function () {
  return this.v4x_1;
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
protoOf(SimpleLogger).o4w = function (message) {
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
  tmp.a4y_1 = ArrayList_init_$Create$();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_0.b4y_1 = ArrayList_init_$Create$();
  this.c4y_1 = null;
  this.d4y_1 = LogLevel_HEADERS_getInstance();
}
protoOf(LoggingConfig).e4y = function () {
  var tmp0_elvis_lhs = this.c4y_1;
  return tmp0_elvis_lhs == null ? get_DEFAULT(Companion_instance) : tmp0_elvis_lhs;
};
function Context(context) {
  this.f4y_1 = context;
}
protoOf(Context).g4y = function (content, $completion) {
  return this.f4y_1.v33(content, $completion);
};
function SendHook$install$slambda($handler, resultContinuation) {
  this.p4y_1 = $handler;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SendHook$install$slambda).g3m = function ($this$intercept, it, $completion) {
  var tmp = this.h3m($this$intercept, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(SendHook$install$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.g3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
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
          suspendResult = this.p4y_1(new Context(this.q4y_1), this.q4y_1.r34_1, this);
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
protoOf(SendHook$install$slambda).h3m = function ($this$intercept, it, completion) {
  var i = new SendHook$install$slambda(this.p4y_1, completion);
  i.q4y_1 = $this$intercept;
  i.r4y_1 = it;
  return i;
};
function SendHook$install$slambda_0($handler, resultContinuation) {
  var i = new SendHook$install$slambda($handler, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.g3m($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function SendHook() {
}
protoOf(SendHook).s4y = function (client, handler) {
  var tmp = Phases_getInstance().x3n_1;
  client.o3l_1.v34(tmp, SendHook$install$slambda_0(handler, null));
};
protoOf(SendHook).d3v = function (client, handler) {
  return this.s4y(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
};
var SendHook_instance;
function SendHook_getInstance() {
  return SendHook_instance;
}
function Context_0(context) {
  this.t4y_1 = context;
}
protoOf(Context_0).u4y = function ($completion) {
  return this.t4y_1.w33($completion);
};
function ResponseHook$install$slambda($handler, resultContinuation) {
  this.d4z_1 = $handler;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ResponseHook$install$slambda).q3v = function ($this$intercept, it, $completion) {
  var tmp = this.r3v($this$intercept, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ResponseHook$install$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.q3v(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
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
          suspendResult = this.d4z_1(new Context_0(this.e4z_1), this.e4z_1.u33(), this);
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
protoOf(ResponseHook$install$slambda).r3v = function ($this$intercept, it, completion) {
  var i = new ResponseHook$install$slambda(this.d4z_1, completion);
  i.e4z_1 = $this$intercept;
  i.f4z_1 = it;
  return i;
};
function ResponseHook$install$slambda_0($handler, resultContinuation) {
  var i = new ResponseHook$install$slambda($handler, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.q3v($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function ResponseHook() {
}
protoOf(ResponseHook).g4z = function (client, handler) {
  var tmp = Phases_getInstance_0().u3v_1;
  client.p3l_1.v34(tmp, ResponseHook$install$slambda_0(handler, null));
};
protoOf(ResponseHook).d3v = function (client, handler) {
  return this.g4z(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
};
var ResponseHook_instance;
function ResponseHook_getInstance() {
  return ResponseHook_instance;
}
function Context_1(context) {
  this.h4z_1 = context;
}
protoOf(Context_1).i4z = function ($completion) {
  return this.h4z_1.w33($completion);
};
function ReceiveHook$install$slambda($handler, resultContinuation) {
  this.r4z_1 = $handler;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ReceiveHook$install$slambda).b3n = function ($this$intercept, it, $completion) {
  var tmp = this.c3n($this$intercept, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ReceiveHook$install$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.b3n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
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
          suspendResult = this.r4z_1(new Context_1(this.s4z_1), this.s4z_1.r34_1, this);
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
protoOf(ReceiveHook$install$slambda).c3n = function ($this$intercept, it, completion) {
  var i = new ReceiveHook$install$slambda(this.r4z_1, completion);
  i.s4z_1 = $this$intercept;
  i.t4z_1 = it;
  return i;
};
function ReceiveHook$install$slambda_0($handler, resultContinuation) {
  var i = new ReceiveHook$install$slambda($handler, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.b3n($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function ReceiveHook() {
}
protoOf(ReceiveHook).u4z = function (client, handler) {
  var tmp = Phases_getInstance_1().l3o_1;
  client.n3l_1.v34(tmp, ReceiveHook$install$slambda_0(handler, null));
};
protoOf(ReceiveHook).d3v = function (client, handler) {
  return this.u4z(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
  var logger = $this$createClientPlugin.y3v_1.e4y();
  var level = $this$createClientPlugin.y3v_1.d4y_1;
  var filters = $this$createClientPlugin.y3v_1.a4y_1;
  var sanitizedHeaders = $this$createClientPlugin.y3v_1.b4y_1;
  var tmp = SendHook_instance;
  $this$createClientPlugin.b3w(tmp, Logging$lambda$slambda_0(filters, logger, level, sanitizedHeaders, null));
  var tmp_0 = ResponseHook_instance;
  $this$createClientPlugin.b3w(tmp_0, Logging$lambda$slambda_2(level, sanitizedHeaders, null));
  var tmp_1 = ReceiveHook_instance;
  $this$createClientPlugin.b3w(tmp_1, Logging$lambda$slambda_4(level, null));
  if (!level.s4x_1)
    return Unit_instance;
  var observer = Logging$lambda$slambda_6(level, null);
  var tmp_2 = get_ResponseObserver();
  var tmp_3 = get_ResponseObserver();
  tmp_2.t3o(tmp_3.s3o(Logging$lambda$lambda(observer)), $this$createClientPlugin.x3v_1);
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
  var value = 'BODY Content-Type: ' + toString_0(content.z3g());
  // Inline function 'kotlin.text.appendLine' call
  requestLog.b8(value).c8(_Char___init__impl__6a9atx(10));
  var tmp0_safe_receiver = content.z3g();
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().r2b_1 : tmp1_elvis_lhs;
  var channel = new ByteChannel();
  var tmp = GlobalScope_instance;
  var tmp_0 = Dispatchers_getInstance().kz_1.vh(MDCContext());
  launch(tmp, tmp_0, VOID, Logging$lambda$logRequestBody$slambda_0(channel, charset_0, requestLog, logger, null));
  return observe(content, channel, $completion);
}
function invoke$logRequestException(level, logger, context, cause) {
  if (level.q4x_1) {
    logger.o4w('REQUEST ' + Url(context.n3n_1).toString() + ' failed with exception: ' + cause.toString());
  }
}
function invoke$logRequest(logger, level, sanitizedHeaders, request, $completion) {
  var tmp = request.q3n_1;
  var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
  var callLogger = new HttpClientCallLogger(logger);
  request.s3n_1.m2x(get_ClientCallLogger(), callLogger);
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  if (level.q4x_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value = 'REQUEST: ' + Url(request.n3n_1).toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(value).c8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'METHOD: ' + request.o3n_1.toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(value_0).c8(_Char___init__impl__6a9atx(10));
  }
  if (level.r4x_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = 'COMMON HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(value_1).c8(_Char___init__impl__6a9atx(10));
    logHeaders(this_0, request.p3n_1.m31(), sanitizedHeaders);
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
        if (element.w4z_1(HttpHeaders_getInstance().d38_1)) {
          tmp$ret$9 = element;
          break $l$block;
        }
      }
      tmp$ret$9 = null;
    }
    var tmp0_safe_receiver = tmp$ret$9;
    var contentLengthPlaceholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v4z_1;
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = sanitizedHeaders.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        if (element_0.w4z_1(HttpHeaders_getInstance().g38_1)) {
          tmp$ret$11 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$11 = null;
    }
    var tmp1_safe_receiver = tmp$ret$11;
    var contentTypePlaceholder = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4z_1;
    var tmp2_safe_receiver = content.b3h();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = HttpHeaders_getInstance().d38_1;
      logHeader(this_0, tmp_0, contentLengthPlaceholder == null ? tmp2_safe_receiver.toString() : contentLengthPlaceholder);
    }
    var tmp3_safe_receiver = content.z3g();
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_1 = HttpHeaders_getInstance().g38_1;
      logHeader(this_0, tmp_1, contentTypePlaceholder == null ? tmp3_safe_receiver.toString() : contentTypePlaceholder);
    }
    logHeaders(this_0, content.r3b().m31(), sanitizedHeaders);
  }
  var message = this_0.toString();
  // Inline function 'kotlin.text.isNotEmpty' call
  if (charSequenceLength(message) > 0) {
    callLogger.i4x(message);
  }
  var tmp_2;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(message) === 0) {
    tmp_2 = true;
  } else {
    tmp_2 = !level.s4x_1;
  }
  if (tmp_2) {
    callLogger.m4x();
    return null;
  }
  return invoke$logRequestBody(content, callLogger, $completion);
}
function invoke$logResponseException(level, log, request, cause) {
  if (!level.q4x_1)
    return Unit_instance;
  log.b8('RESPONSE ' + request.z3p().toString() + ' failed with exception: ' + cause.toString());
}
function Logging$lambda$slambda($filters, $logger, $level, $sanitizedHeaders, resultContinuation) {
  this.f50_1 = $filters;
  this.g50_1 = $logger;
  this.h50_1 = $level;
  this.i50_1 = $sanitizedHeaders;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$slambda).p50 = function ($this$on, request, $completion) {
  var tmp = this.q50($this$on, request, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof Context ? p1 : THROW_CCE();
  return this.p50(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 8;
          if (!invoke$shouldBeLogged(this.f50_1, this.k50_1)) {
            this.k50_1.s3n_1.m2x(get_DisableLogging(), Unit_instance);
            return Unit_instance;
          }

          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = invoke$logRequest(this.g50_1, this.h50_1, this.i50_1, this.k50_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.l50_1 = suspendResult;
          this.v8_1 = 8;
          this.u8_1 = 3;
          continue $sm;
        case 2:
          this.v8_1 = 8;
          var tmp_0 = this.x8_1;
          if (tmp_0 instanceof Error) {
            this.m50_1 = this.x8_1;
            var tmp_1 = this;
            tmp_1.l50_1 = null;
            this.u8_1 = 3;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 3:
          this.v8_1 = 8;
          this.n50_1 = this.l50_1;
          this.o50_1 = Unit_instance;
          this.u8_1 = 4;
          continue $sm;
        case 4:
          this.v8_1 = 7;
          this.v8_1 = 6;
          this.u8_1 = 5;
          var tmp0_elvis_lhs = this.n50_1;
          suspendResult = this.j50_1.g4y(tmp0_elvis_lhs == null ? this.k50_1.q3n_1 : tmp0_elvis_lhs, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.o50_1 = suspendResult;
          this.v8_1 = 8;
          this.u8_1 = 9;
          continue $sm;
        case 6:
          this.v8_1 = 7;
          var tmp_2 = this.x8_1;
          if (tmp_2 instanceof Error) {
            var cause = this.x8_1;
            var tmp_3 = this;
            invoke$logRequestException(this.h50_1, this.g50_1, this.k50_1, cause);
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
          this.o50_1;
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
protoOf(Logging$lambda$slambda).q50 = function ($this$on, request, completion) {
  var i = new Logging$lambda$slambda(this.f50_1, this.g50_1, this.h50_1, this.i50_1, completion);
  i.j50_1 = $this$on;
  i.k50_1 = request;
  return i;
};
function Logging$lambda$slambda_0($filters, $logger, $level, $sanitizedHeaders, resultContinuation) {
  var i = new Logging$lambda$slambda($filters, $logger, $level, $sanitizedHeaders, resultContinuation);
  var l = function ($this$on, request, $completion) {
    return i.p50($this$on, request, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$lambda$slambda_1($level, $sanitizedHeaders, resultContinuation) {
  this.z50_1 = $level;
  this.a51_1 = $sanitizedHeaders;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$slambda_1).k51 = function ($this$on, response, $completion) {
  var tmp = this.l51($this$on, response, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$slambda_1).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof Context_0 ? p1 : THROW_CCE();
  return this.k51(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$slambda_1).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 10;
          if (this.z50_1.equals(LogLevel_NONE_getInstance()) || this.c51_1.v3q().c3p().l2x(get_DisableLogging()))
            return Unit_instance;
          this.d51_1 = this.c51_1.v3q().c3p().j2x(get_ClientCallLogger());
          this.e51_1 = StringBuilder_init_$Create$();
          this.f51_1 = false;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          this.v8_1 = 4;
          this.v8_1 = 3;
          logResponseHeader(this.e51_1, this.c51_1.v3q().n3m(), this.z50_1, this.a51_1);
          this.u8_1 = 2;
          suspendResult = this.b51_1.u4y(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.g51_1 = suspendResult;
          this.v8_1 = 10;
          this.u8_1 = 7;
          continue $sm;
        case 3:
          this.v8_1 = 4;
          var tmp_0 = this.x8_1;
          if (tmp_0 instanceof Error) {
            this.h51_1 = this.x8_1;
            var tmp_1 = this;
            invoke$logResponseException(this.z50_1, this.e51_1, this.c51_1.v3q().w3p(), this.h51_1);
            this.f51_1 = true;
            throw this.h51_1;
          } else {
            throw this.x8_1;
          }

        case 4:
          this.v8_1 = 10;
          this.i51_1 = this.x8_1;
          this.d51_1.j4x(this.e51_1.toString());
          if (this.f51_1 || !this.z50_1.s4x_1) {
            this.u8_1 = 5;
            suspendResult = this.d51_1.n4x(this);
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
          throw this.i51_1;
        case 7:
          this.j51_1 = this.g51_1;
          this.v8_1 = 10;
          this.d51_1.j4x(this.e51_1.toString());
          if (this.f51_1 || !this.z50_1.s4x_1) {
            this.u8_1 = 8;
            suspendResult = this.d51_1.n4x(this);
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
protoOf(Logging$lambda$slambda_1).l51 = function ($this$on, response, completion) {
  var i = new Logging$lambda$slambda_1(this.z50_1, this.a51_1, completion);
  i.b51_1 = $this$on;
  i.c51_1 = response;
  return i;
};
function Logging$lambda$slambda_2($level, $sanitizedHeaders, resultContinuation) {
  var i = new Logging$lambda$slambda_1($level, $sanitizedHeaders, resultContinuation);
  var l = function ($this$on, response, $completion) {
    return i.k51($this$on, response, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$lambda$slambda_3($level, resultContinuation) {
  this.u51_1 = $level;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$slambda_3).b52 = function ($this$on, call, $completion) {
  var tmp = this.c52($this$on, call, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$slambda_3).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof Context_1 ? p1 : THROW_CCE();
  return this.b52(tmp, p2 instanceof HttpClientCall ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$slambda_3).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 6;
          if (this.u51_1.equals(LogLevel_NONE_getInstance()) || this.w51_1.c3p().l2x(get_DisableLogging())) {
            return Unit_instance;
          }

          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = this.v51_1.i4z(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.x51_1 = suspendResult;
          this.v8_1 = 6;
          this.u8_1 = 5;
          continue $sm;
        case 2:
          this.v8_1 = 6;
          var tmp_0 = this.x8_1;
          if (tmp_0 instanceof Error) {
            this.y51_1 = this.x8_1;
            this.z51_1 = StringBuilder_init_$Create$();
            this.a52_1 = this.w51_1.c3p().j2x(get_ClientCallLogger());
            invoke$logResponseException(this.u51_1, this.z51_1, this.w51_1.w3p(), this.y51_1);
            this.u8_1 = 3;
            suspendResult = this.a52_1.k4x(this.z51_1.toString(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 3:
          this.u8_1 = 4;
          suspendResult = this.a52_1.n4x(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 4:
          var tmp_1 = this;
          throw this.y51_1;
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
protoOf(Logging$lambda$slambda_3).c52 = function ($this$on, call, completion) {
  var i = new Logging$lambda$slambda_3(this.u51_1, completion);
  i.v51_1 = $this$on;
  i.w51_1 = call;
  return i;
};
function Logging$lambda$slambda_4($level, resultContinuation) {
  var i = new Logging$lambda$slambda_3($level, resultContinuation);
  var l = function ($this$on, call, $completion) {
    return i.b52($this$on, call, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$lambda$slambda_5($level, resultContinuation) {
  this.l52_1 = $level;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$slambda_5).w3x = function (it, $completion) {
  var tmp = this.y3w(it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$slambda_5).k9 = function (p1, $completion) {
  return this.w3x(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
};
protoOf(Logging$lambda$slambda_5).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 10;
          if (this.l52_1.equals(LogLevel_NONE_getInstance()) || this.m52_1.v3q().c3p().l2x(get_DisableLogging())) {
            return Unit_instance;
          }

          this.n52_1 = this.m52_1.v3q().c3p().j2x(get_ClientCallLogger());
          this.o52_1 = StringBuilder_init_$Create$();
          this.u8_1 = 1;
          continue $sm;
        case 1:
          this.v8_1 = 4;
          this.v8_1 = 3;
          this.u8_1 = 2;
          suspendResult = logResponseBody(this.o52_1, contentType(this.m52_1), this.m52_1.x3p(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.p52_1 = suspendResult;
          this.v8_1 = 10;
          this.u8_1 = 7;
          continue $sm;
        case 3:
          this.v8_1 = 4;
          var tmp_0 = this.x8_1;
          if (tmp_0 instanceof Error) {
            this.q52_1 = this.x8_1;
            var tmp_1 = this;
            tmp_1.p52_1 = Unit_instance;
            this.v8_1 = 10;
            this.u8_1 = 7;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 4:
          this.v8_1 = 10;
          this.r52_1 = this.x8_1;
          this.u8_1 = 5;
          var this_0 = this.o52_1.toString();
          suspendResult = this.n52_1.l4x(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.u8_1 = 6;
          suspendResult = this.n52_1.n4x(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 6:
          throw this.r52_1;
        case 7:
          this.v8_1 = 10;
          this.u8_1 = 8;
          var this_1 = this.o52_1.toString();
          suspendResult = this.n52_1.l4x(toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE())), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 8:
          this.u8_1 = 9;
          suspendResult = this.n52_1.n4x(this);
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
protoOf(Logging$lambda$slambda_5).y3w = function (it, completion) {
  var i = new Logging$lambda$slambda_5(this.l52_1, completion);
  i.m52_1 = it;
  return i;
};
function Logging$lambda$slambda_6($level, resultContinuation) {
  var i = new Logging$lambda$slambda_5($level, resultContinuation);
  var l = function (it, $completion) {
    return i.w3x(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function Logging$lambda$lambda($observer) {
  return function ($this$prepare) {
    $this$prepare.l4g($observer);
    return Unit_instance;
  };
}
function Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation) {
  this.a53_1 = $channel;
  this.b53_1 = $charset;
  this.c53_1 = $requestLog;
  this.d53_1 = $logger;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$lambda$logRequestBody$slambda).o1h = function ($this$launch, $completion) {
  var tmp = this.p1h($this$launch, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(Logging$lambda$logRequestBody$slambda).k9 = function (p1, $completion) {
  return this.o1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
          tmp_0.g53_1 = this.a53_1;
          var tmp_1 = this;
          tmp_1.h53_1 = this.b53_1;
          this.i53_1 = this.g53_1;
          this.j53_1 = this.h53_1;
          this.v8_1 = 3;
          this.u8_1 = 2;
          suspendResult = readRemaining(this.i53_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var ARGUMENT = suspendResult;
          this.k53_1 = readText(ARGUMENT, this.j53_1);
          this.v8_1 = 6;
          this.u8_1 = 4;
          continue $sm;
        case 3:
          this.v8_1 = 6;
          var tmp_2 = this.x8_1;
          if (tmp_2 instanceof Error) {
            var cause = this.x8_1;
            var tmp_3 = this;
            tmp_3.k53_1 = null;
            this.u8_1 = 4;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 4:
          this.v8_1 = 6;
          var tmp0_elvis_lhs = this.k53_1;
          var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
          var tmp0 = this.c53_1;
          var value = 'BODY START';
          tmp0.b8(value).c8(_Char___init__impl__6a9atx(10));
          this.c53_1.b8(text).c8(_Char___init__impl__6a9atx(10));
          this.f53_1 = this.c53_1.b8('BODY END');
          this.v8_1 = 7;
          this.u8_1 = 5;
          continue $sm;
        case 5:
          this.f53_1;
          this.v8_1 = 7;
          this.d53_1.i4x(this.c53_1.toString());
          this.d53_1.m4x();
          return Unit_instance;
        case 6:
          this.v8_1 = 7;
          var t = this.x8_1;
          this.d53_1.i4x(this.c53_1.toString());
          this.d53_1.m4x();
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
protoOf(Logging$lambda$logRequestBody$slambda).p1h = function ($this$launch, completion) {
  var i = new Logging$lambda$logRequestBody$slambda(this.a53_1, this.b53_1, this.c53_1, this.d53_1, completion);
  i.e53_1 = $this$launch;
  return i;
};
function Logging$lambda$logRequestBody$slambda_0($channel, $charset, $requestLog, $logger, resultContinuation) {
  var i = new Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.o1h($this$launch, $completion);
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
        if (element_0.w4z_1(key)) {
          tmp$ret$5 = element_0;
          break $l$block;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp0_safe_receiver = tmp$ret$5;
    var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v4z_1;
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
  if (level.q4x_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value = 'RESPONSE: ' + response.a3h().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.b8(value).c8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'METHOD: ' + response.v3q().w3p().s3q().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.b8(value_0).c8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = 'FROM: ' + response.v3q().w3p().z3p().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.b8(value_1).c8(_Char___init__impl__6a9atx(10));
  }
  if (level.r4x_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = 'COMMON HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    log.b8(value_2).c8(_Char___init__impl__6a9atx(10));
    logHeaders(log, response.r3b().m31(), sanitizedHeaders);
  }
}
function logResponseBody(log, contentType, content, $completion) {
  var tmp = new $logResponseBodyCOROUTINE$_0(log, contentType, content, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function sam$kotlin_Comparator$0(function_0) {
  this.f54_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0).de = function (a, b) {
  return this.f54_1(a, b);
};
protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
  return this.de(a, b);
};
protoOf(sam$kotlin_Comparator$0).j3 = function () {
  return this.f54_1;
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
  this.t53_1 = log;
  this.u53_1 = contentType;
  this.v53_1 = content;
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
          tmp_0.w53_1 = this.t53_1;
          this.x53_1 = this.w53_1;
          var tmp_1 = this;
          tmp_1.y53_1 = this.x53_1;
          this.z53_1 = this.y53_1;
          var tmp0 = this.z53_1;
          var value = 'BODY Content-Type: ' + toString_0(this.u53_1);
          tmp0.b8(value).c8(_Char___init__impl__6a9atx(10));
          var tmp0_0 = this.z53_1;
          var value_0 = 'BODY START';
          tmp0_0.b8(value_0).c8(_Char___init__impl__6a9atx(10));
          var tmp_2 = this;
          tmp_2.a54_1 = this.v53_1;
          var tmp_3 = this;
          var tmp0_safe_receiver = this.u53_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
          tmp_3.b54_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().r2b_1 : tmp1_elvis_lhs;
          this.c54_1 = this.a54_1;
          this.d54_1 = this.b54_1;
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = readRemaining(this.c54_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.e54_1 = readText(ARGUMENT, this.d54_1);
          this.v8_1 = 3;
          this.u8_1 = 4;
          continue $sm;
        case 2:
          this.v8_1 = 3;
          var tmp_4 = this.x8_1;
          if (tmp_4 instanceof Error) {
            var cause = this.x8_1;
            var tmp_5 = this;
            tmp_5.e54_1 = null;
            this.u8_1 = 4;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 3:
          throw this.x8_1;
        case 4:
          this.v8_1 = 3;
          var tmp2_elvis_lhs = this.e54_1;
          var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
          this.z53_1.b8(message).c8(_Char___init__impl__6a9atx(10));
          this.z53_1.b8('BODY END');
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
  var tmp_0 = Dispatchers_getInstance().kz_1;
  return writer(tmp, tmp_0, VOID, toReadChannel$slambda_0(_this__u8e3s4, null)).f2a_1;
}
function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
  this.c55_1 = $this_toReadChannel;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(toReadChannel$slambda).x3r = function ($this$writer, $completion) {
  var tmp = this.y3r($this$writer, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(toReadChannel$slambda).k9 = function (p1, $completion) {
  return this.x3r(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
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
          suspendResult = this.c55_1.h3h(this.d55_1.h2a_1, this);
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
protoOf(toReadChannel$slambda).y3r = function ($this$writer, completion) {
  var i = new toReadChannel$slambda(this.c55_1, completion);
  i.d55_1 = $this$writer;
  return i;
};
function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
  var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
  var l = function ($this$writer, $completion) {
    return i.x3r($this$writer, $completion);
  };
  l.$arity = 1;
  return l;
}
function $observeCOROUTINE$(_this__u8e3s4, log, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.o54_1 = _this__u8e3s4;
  this.p54_1 = log;
}
protoOf($observeCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 6;
          this.q54_1 = this.o54_1;
          var tmp_0 = this.q54_1;
          if (tmp_0 instanceof ByteArrayContent) {
            this.u8_1 = 3;
            suspendResult = writeFully(this.p54_1, this.o54_1.c3h(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            var tmp_1 = this.q54_1;
            if (tmp_1 instanceof ReadChannelContent) {
              var tmp_2 = this;
              var responseChannel = new ByteChannel();
              var content = this.o54_1.f3h();
              copyToBoth(content, this.p54_1, responseChannel);
              tmp_2.r54_1 = new LoggedContent(this.o54_1, responseChannel);
              this.u8_1 = 5;
              continue $sm;
            } else {
              var tmp_3 = this.q54_1;
              if (tmp_3 instanceof WriteChannelContent) {
                var tmp_4 = this;
                var responseChannel_0 = new ByteChannel();
                var content_0 = toReadChannel(this.o54_1);
                copyToBoth(content_0, this.p54_1, responseChannel_0);
                tmp_4.r54_1 = new LoggedContent(this.o54_1, responseChannel_0);
                this.u8_1 = 5;
                continue $sm;
              } else {
                var tmp_5 = this.q54_1;
                if (tmp_5 instanceof ContentWrapper) {
                  this.s54_1 = this.o54_1;
                  this.u8_1 = 2;
                  suspendResult = observe(this.o54_1.l3h(), this.p54_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_6;
                  var tmp_7 = this.q54_1;
                  if (tmp_7 instanceof NoContent) {
                    tmp_6 = true;
                  } else {
                    var tmp_8 = this.q54_1;
                    tmp_6 = tmp_8 instanceof ProtocolUpgrade;
                  }
                  if (tmp_6) {
                    this.u8_1 = 1;
                    suspendResult = this.p54_1.e26(this);
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
          this.r54_1 = this.o54_1;
          this.u8_1 = 5;
          continue $sm;
        case 2:
          this.t54_1 = suspendResult;
          this.r54_1 = this.s54_1.m3h(this.t54_1);
          this.u8_1 = 5;
          continue $sm;
        case 3:
          this.u8_1 = 4;
          suspendResult = this.p54_1.e26(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 4:
          this.r54_1 = this.o54_1;
          this.u8_1 = 5;
          continue $sm;
        case 5:
          return this.r54_1;
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
protoOf(MDCContextElement).uh = fold;
protoOf(MDCContextElement).th = minusKey;
protoOf(MDCContextElement).vh = plus;
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
