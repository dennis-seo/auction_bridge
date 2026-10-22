import {
  Exceptiondt2hlxn7j7vw as Exception,
  VOID3gxj6tk5isa35 as VOID,
  Exception_init_$Init$393utbttlf2x4 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Charsets_getInstanceqs70pvl4noow as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
import {
  HttpHeaders_getInstanceelogg8fjd54u as HttpHeaders_getInstance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
  NullBody_instance2i6w0hfghwfg0 as NullBody_instance,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull3jjcu7fygcopr as firstOrNull,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException', VOID, Exception);
initMetadataForClass(JsonConvertException, 'JsonConvertException', VOID, ContentConvertException);
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.x3j(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.x3j.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForLambda(deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($deserializeCOROUTINE$, CoroutineImpl);
//endregion
function ContentConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  Exception_init_$Init$(message, cause, this);
  captureStack(this, ContentConvertException);
}
function JsonConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  ContentConvertException.call(this, message, cause);
  captureStack(this, JsonConvertException);
}
function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  var tmp = new $deserializeCOROUTINE$(_this__u8e3s4, body, typeInfo, charset, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().j2c_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function Configuration() {
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().j2c_1 : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.pd(HttpHeaders_getInstance().h38_1)).j();
  while (_iterator__ex2g4s.k()) {
    var charset = _iterator__ex2g4s.l().wg();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.z3j_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).c19 = function (value, $completion) {
  return this.z3j_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).j3 = function () {
  return this.z3j_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
  return hashCode(this.j3());
};
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  this.i3k_1 = $$this$unsafeFlow;
  this.j3k_1 = $charset;
  this.k3k_1 = $typeInfo;
  this.l3k_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$o$collect$slambda).u3k = function (value, $completion) {
  var tmp = this.v3k(value, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(deserialize$o$collect$slambda).k9 = function (p1, $completion) {
  return this.u3k((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$o$collect$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          var tmp_0 = this;
          tmp_0.n3k_1 = this.i3k_1;
          var tmp_1 = this;
          tmp_1.o3k_1 = this.m3k_1;
          this.p3k_1 = this.n3k_1;
          this.q3k_1 = this.o3k_1;
          var tmp_2 = this;
          tmp_2.r3k_1 = this.q3k_1;
          this.s3k_1 = this.r3k_1;
          this.u8_1 = 1;
          suspendResult = this.s3k_1.w3k(this.j3k_1, this.k3k_1, this.l3k_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.t3k_1 = suspendResult;
          this.u8_1 = 2;
          suspendResult = this.p3k_1.c19(this.t3k_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          return Unit_instance;
        case 3:
          throw this.x8_1;
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
protoOf(deserialize$o$collect$slambda).v3k = function (value, completion) {
  var i = new deserialize$o$collect$slambda(this.i3k_1, this.j3k_1, this.k3k_1, this.l3k_1, completion);
  i.m3k_1 = value;
  return i;
};
function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
  var l = function (value, $completion) {
    return i.u3k(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.f3l_1 = _this__u8e3s4;
  this.g3l_1 = collector;
}
protoOf($collectCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          var tmp_0 = this;
          tmp_0.h3l_1 = this.g3l_1;
          this.i3l_1 = this.h3l_1;
          this.u8_1 = 1;
          var tmp_1 = deserialize$o$collect$slambda_0(this.i3l_1, this.f3l_1.k3l_1, this.f3l_1.l3l_1, this.f3l_1.m3l_1, null);
          suspendResult = this.f3l_1.j3l_1.o18(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
function deserialize$$inlined$map$1($this, $charset, $typeInfo, $body) {
  this.j3l_1 = $this;
  this.k3l_1 = $charset;
  this.l3l_1 = $typeInfo;
  this.m3l_1 = $body;
}
protoOf(deserialize$$inlined$map$1).d19 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$(this, collector, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(deserialize$$inlined$map$1).o18 = function (collector, $completion) {
  return this.d19(collector, $completion);
};
function deserialize$slambda($body, resultContinuation) {
  this.v3l_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$slambda).x3l = function (it, $completion) {
  var tmp = this.v3k(it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(deserialize$slambda).k9 = function (p1, $completion) {
  return this.x3l((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      if (tmp === 0) {
        this.v8_1 = 1;
        return !(this.w3l_1 == null) || this.v3l_1.t26();
      } else if (tmp === 1) {
        throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(deserialize$slambda).v3k = function (it, completion) {
  var i = new deserialize$slambda(this.v3l_1, completion);
  i.w3l_1 = it;
  return i;
};
function deserialize$slambda_0($body, resultContinuation) {
  var i = new deserialize$slambda($body, resultContinuation);
  var l = function (it, $completion) {
    return i.x3l(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $deserializeCOROUTINE$(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.t3j_1 = _this__u8e3s4;
  this.u3j_1 = body;
  this.v3j_1 = typeInfo;
  this.w3j_1 = charset;
}
protoOf($deserializeCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          var this_0 = asFlow(this.t3j_1);
          var tmp_0 = new deserialize$$inlined$map$1(this_0, this.w3j_1, this.v3j_1, this.u3j_1);
          suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.u3j_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_1;
          if (!(result == null)) {
            tmp_1 = result;
          } else {
            if (!this.u3j_1.t26()) {
              tmp_1 = this.u3j_1;
            } else {
              var tmp0_safe_receiver = this.v3j_1.c36_1;
              if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jb()) === true) {
                tmp_1 = NullBody_instance;
              } else {
                throw new ContentConvertException('No suitable converter found for ' + this.v3j_1.toString());
              }
            }
          }

          return tmp_1;
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
//region block: exports
export {
  deserialize as deserialize3kqe4vxpbxz1,
  register$default as register$default3vdkjcc7m2cj0,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization.mjs.map
