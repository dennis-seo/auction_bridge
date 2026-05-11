import {
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  isInterface3d6p8outrmvmk as isInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException_init_$Create$3ewkh27kzt8z8 as IllegalArgumentException_init_$Create$,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_instance3alxothmy382k as StringCompanionObject_instance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3bxttkj3v1mea as ArrayList_init_$Create$_0,
  HashSet_init_$Create$3vvk876hypkbb as HashSet_init_$Create$,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  KSerializerzf77vz1967fq as KSerializer,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
  TextContent1rb6ftlpvl1d2 as TextContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull3jjcu7fygcopr as firstOrNull_0,
} from './kotlinx-coroutines-core.mjs';
import {
  readRemaining1x8kk1vq7p6gm as readRemaining,
  discard3ugntd47xyll6 as discard,
  readText27783kyxjxi1g as readText,
} from './ktor-ktor-io.mjs';
import { readByteArray1ri21h2rciakw as readByteArray } from './kotlinx-io-kotlinx-io-core.mjs';
import { JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException } from './ktor-ktor-shared-ktor-serialization.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$_0, CoroutineImpl);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(KotlinxSerializationConverter$serialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter$deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($serializeCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($deserializeCOROUTINE$, CoroutineImpl);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = get_providers();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.j();
  while (_iterator__ex2g4s.k()) {
    var element = _iterator__ex2g4s.l();
    var tmp0_safe_receiver = element.e55(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.e(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.g3j(contentType, new KotlinxSerializationConverter(format));
}
function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  this.n55_1 = $$this$unsafeFlow;
  this.o55_1 = $contentType;
  this.p55_1 = $charset;
  this.q55_1 = $typeInfo;
  this.r55_1 = $value;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).c3k = function (value, $completion) {
  var tmp = this.d3k(value, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).k9 = function (p1, $completion) {
  return this.c3k((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          var tmp_0 = this;
          tmp_0.t55_1 = this.n55_1;
          var tmp_1 = this;
          tmp_1.u55_1 = this.s55_1;
          this.v55_1 = this.t55_1;
          this.w55_1 = this.u55_1;
          var tmp_2 = this;
          tmp_2.x55_1 = this.w55_1;
          this.y55_1 = this.x55_1;
          this.u8_1 = 1;
          suspendResult = this.y55_1.w4v(this.o55_1, this.p55_1, this.q55_1, this.r55_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.z55_1 = suspendResult;
          this.u8_1 = 2;
          suspendResult = this.v55_1.k18(this.z55_1, this);
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
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).d3k = function (value, completion) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda(this.n55_1, this.o55_1, this.p55_1, this.q55_1, this.r55_1, completion);
  i.s55_1 = value;
  return i;
};
function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
  var l = function (value, $completion) {
    return i.c3k(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.i56_1 = _this__u8e3s4;
  this.j56_1 = collector;
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
          tmp_0.k56_1 = this.j56_1;
          this.l56_1 = this.k56_1;
          this.u8_1 = 1;
          var tmp_1 = KotlinxSerializationConverter$serialize$o$collect$slambda_0(this.l56_1, this.i56_1.n56_1, this.i56_1.o56_1, this.i56_1.p56_1, this.i56_1.q56_1, null);
          suspendResult = this.i56_1.m56_1.w17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  this.z56_1 = $$this$unsafeFlow;
  this.a57_1 = $charset;
  this.b57_1 = $typeInfo;
  this.c57_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).c3k = function (value, $completion) {
  var tmp = this.d3k(value, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).k9 = function (p1, $completion) {
  return this.c3k((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          var tmp_0 = this;
          tmp_0.e57_1 = this.z56_1;
          var tmp_1 = this;
          tmp_1.f57_1 = this.d57_1;
          this.g57_1 = this.e57_1;
          this.h57_1 = this.f57_1;
          var tmp_2 = this;
          tmp_2.i57_1 = this.h57_1;
          this.j57_1 = this.i57_1;
          this.u8_1 = 1;
          suspendResult = this.j57_1.e3k(this.a57_1, this.b57_1, this.c57_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.k57_1 = suspendResult;
          this.u8_1 = 2;
          suspendResult = this.g57_1.k18(this.k57_1, this);
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
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).d3k = function (value, completion) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.z56_1, this.a57_1, this.b57_1, this.c57_1, completion);
  i.d57_1 = value;
  return i;
};
function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
  var l = function (value, $completion) {
    return i.c3k(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$_0(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.t57_1 = _this__u8e3s4;
  this.u57_1 = collector;
}
protoOf($collectCOROUTINE$_0).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          var tmp_0 = this;
          tmp_0.v57_1 = this.u57_1;
          this.w57_1 = this.v57_1;
          this.u8_1 = 1;
          var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.w57_1, this.t57_1.y57_1, this.t57_1.z57_1, this.t57_1.a58_1, null);
          suspendResult = this.t57_1.x57_1.w17(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.x2d(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.z2d(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new ByteArrayContent(content_0, contentType);
    } else {
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  return tmp;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.b58_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).k18 = function (value, $completion) {
  return this.b58_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).j3 = function () {
  return this.b58_1;
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
function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
  this.c58_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).k18 = function (value, $completion) {
  return this.c58_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).j3 = function () {
  return this.c58_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
  return hashCode(this.j3());
};
function KotlinxSerializationConverter$serialize$$inlined$map$1($this, $contentType, $charset, $typeInfo, $value) {
  this.m56_1 = $this;
  this.n56_1 = $contentType;
  this.o56_1 = $charset;
  this.p56_1 = $typeInfo;
  this.q56_1 = $value;
}
protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).l18 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$(this, collector, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).w17 = function (collector, $completion) {
  return this.l18(collector, $completion);
};
function KotlinxSerializationConverter$serialize$slambda(resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serialize$slambda).m58 = function (it, $completion) {
  var tmp = this.n58(it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(KotlinxSerializationConverter$serialize$slambda).k9 = function (p1, $completion) {
  return this.m58((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serialize$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      if (tmp === 0) {
        this.v8_1 = 1;
        return !(this.l58_1 == null);
      } else if (tmp === 1) {
        throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$serialize$slambda).n58 = function (it, completion) {
  var i = new KotlinxSerializationConverter$serialize$slambda(completion);
  i.l58_1 = it;
  return i;
};
function KotlinxSerializationConverter$serialize$slambda_0(resultContinuation) {
  var i = new KotlinxSerializationConverter$serialize$slambda(resultContinuation);
  var l = function (it, $completion) {
    return i.m58(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function KotlinxSerializationConverter$deserialize$$inlined$map$1($this, $charset, $typeInfo, $content) {
  this.x57_1 = $this;
  this.y57_1 = $charset;
  this.z57_1 = $typeInfo;
  this.a58_1 = $content;
}
protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).l18 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$_0(this, collector, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).w17 = function (collector, $completion) {
  return this.l18(collector, $completion);
};
function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
  this.w58_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$slambda).f3l = function (it, $completion) {
  var tmp = this.d3k(it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).k9 = function (p1, $completion) {
  return this.f3l((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      if (tmp === 0) {
        this.v8_1 = 1;
        return !(this.x58_1 == null) || this.w58_1.b26();
      } else if (tmp === 1) {
        throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).d3k = function (it, completion) {
  var i = new KotlinxSerializationConverter$deserialize$slambda(this.w58_1, completion);
  i.x58_1 = it;
  return i;
};
function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
  var l = function (it, $completion) {
    return i.f3l(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $serializeCOROUTINE$(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.g59_1 = _this__u8e3s4;
  this.h59_1 = contentType;
  this.i59_1 = charset;
  this.j59_1 = typeInfo;
  this.k59_1 = value;
}
protoOf($serializeCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          var this_0 = asFlow(this.g59_1.m59_1);
          var tmp_0 = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, this.h59_1, this.i59_1, this.j59_1, this.k59_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$serialize$slambda_0(null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var fromExtension = suspendResult;
          if (!(fromExtension == null))
            return fromExtension;
          var tmp_1;
          try {
            tmp_1 = serializerForTypeInfo(this.g59_1.l59_1.w2g(), this.j59_1);
          } catch ($p) {
            var tmp_2;
            if ($p instanceof SerializationException) {
              var cause = $p;
              tmp_2 = guessSerializer(this.k59_1, this.g59_1.l59_1.w2g());
            } else {
              throw $p;
            }
            tmp_1 = tmp_2;
          }

          var serializer = tmp_1;
          return serializeContent(this.g59_1, serializer, this.g59_1.l59_1, this.k59_1, this.h59_1, this.i59_1);
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
function $deserializeCOROUTINE$(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.v59_1 = _this__u8e3s4;
  this.w59_1 = charset;
  this.x59_1 = typeInfo;
  this.y59_1 = content;
}
protoOf($deserializeCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 4;
          this.u8_1 = 1;
          var this_0 = asFlow(this.v59_1.m59_1);
          var tmp_0 = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, this.w59_1, this.x59_1, this.y59_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.y59_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.z59_1 = suspendResult;
          var tmp_1;
          if (!this.v59_1.m59_1.p()) {
            tmp_1 = !(this.z59_1 == null) || this.y59_1.b26();
          } else {
            tmp_1 = false;
          }

          if (tmp_1)
            return this.z59_1;
          this.a5a_1 = serializerForTypeInfo(this.v59_1.l59_1.w2g(), this.x59_1);
          this.u8_1 = 2;
          suspendResult = readRemaining(this.y59_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var contentPacket = suspendResult;
          this.v8_1 = 3;
          var tmp0_subject = this.v59_1.l59_1;
          var tmp_2;
          if (isInterface(tmp0_subject, StringFormat)) {
            tmp_2 = this.v59_1.l59_1.y2d(this.a5a_1, readText(contentPacket, this.w59_1));
          } else {
            if (isInterface(tmp0_subject, BinaryFormat)) {
              tmp_2 = this.v59_1.l59_1.a2e(this.a5a_1, readByteArray(contentPacket));
            } else {
              discard(contentPacket);
              var message = 'Unsupported format ' + toString(this.v59_1.l59_1);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }

          return tmp_2;
        case 3:
          this.v8_1 = 4;
          var tmp_3 = this.x8_1;
          if (tmp_3 instanceof Error) {
            var cause = this.x8_1;
            throw new JsonConvertException('Illegal input: ' + cause.message, cause);
          } else {
            throw this.x8_1;
          }

        case 4:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 4) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
function KotlinxSerializationConverter(format) {
  this.l59_1 = format;
  this.m59_1 = extensions(this.l59_1);
  var tmp;
  var tmp_0 = this.l59_1;
  if (isInterface(tmp_0, BinaryFormat)) {
    tmp = true;
  } else {
    var tmp_1 = this.l59_1;
    tmp = isInterface(tmp_1, StringFormat);
  }
  // Inline function 'kotlin.require' call
  if (!tmp) {
    var message = 'Only binary and string formats are supported, ' + toString(this.l59_1) + ' is not supported.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
}
protoOf(KotlinxSerializationConverter).b5a = function (contentType, charset, typeInfo, value, $completion) {
  var tmp = new $serializeCOROUTINE$(this, contentType, charset, typeInfo, value, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(KotlinxSerializationConverter).w4v = function (contentType, charset, typeInfo, value, $completion) {
  return this.b5a(contentType, charset, typeInfo, value, $completion);
};
protoOf(KotlinxSerializationConverter).e3k = function (charset, typeInfo, content, $completion) {
  var tmp = new $deserializeCOROUTINE$(this, charset, typeInfo, content, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.k35_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (tmp0_safe_receiver.ib().p()) {
      tmp_0 = null;
    } else {
      tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
    }
    tmp = tmp_0;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_1;
  if (tmp1_elvis_lhs == null) {
    var tmp2_safe_receiver = module_0.d2e(typeInfo.j35_1);
    tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.j35_1), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_instance));
  } else {
    if (!(value == null) ? isInterface(value, KtList) : false) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (!(value == null) ? isArray(value) : false) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
      } else {
        if (!(value == null) ? isInterface(value, KtSet) : false) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (!(value == null) ? isInterface(value, KtMap) : false) {
            var keySerializer = elementSerializer(value.f2(), module_0);
            var valueSerializer = elementSerializer(value.g2(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.d2e(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.k35_1;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jb()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.j();
  while (_iterator__ex2g4s.k()) {
    var item = _iterator__ex2g4s.l();
    var tmp$ret$0 = guessSerializer(item, module_0);
    destination.e(tmp$ret$0);
  }
  // Inline function 'kotlin.collections.distinctBy' call
  var set = HashSet_init_$Create$();
  var list = ArrayList_init_$Create$();
  var _iterator__ex2g4s_0 = destination.j();
  while (_iterator__ex2g4s_0.k()) {
    var e = _iterator__ex2g4s_0.l();
    var key = e.u2c().v2d();
    if (set.e(key)) {
      list.e(e);
    }
  }
  var serializers = list;
  if (serializers.m() > 1) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
    var _iterator__ex2g4s_1 = serializers.j();
    while (_iterator__ex2g4s_1.k()) {
      var item_0 = _iterator__ex2g4s_1.l();
      var tmp$ret$5 = item_0.u2c().v2d();
      destination_0.e(tmp$ret$5);
    }
    // Inline function 'kotlin.error' call
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
  if (selected.u2c().h2e()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$8;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.p();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$8 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s_2 = _this__u8e3s4.j();
    while (_iterator__ex2g4s_2.k()) {
      var element = _iterator__ex2g4s_2.l();
      if (element == null) {
        tmp$ret$8 = true;
        break $l$block_0;
      }
    }
    tmp$ret$8 = false;
  }
  if (tmp$ret$8) {
    return get_nullable(selected);
  }
  return selected;
}
function get_providers() {
  return emptyList();
}
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.mjs.map
