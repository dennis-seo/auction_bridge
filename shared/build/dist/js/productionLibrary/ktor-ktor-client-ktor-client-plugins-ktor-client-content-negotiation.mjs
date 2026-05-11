import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  plus1ogy4liedzq5j as plus,
  toMutableSetjdpdbr9jsqq8 as toMutableSet,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  Exceptiondt2hlxn7j7vw as Exception,
  Exception_init_$Init$33ewqhqmjrfx6 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  isInterface3d6p8outrmvmk as isInterface,
  toString1pkumu07cwy4m as toString,
  Collection1k04j3hzsbod0 as Collection,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  Unitkvevlwgzwiuc as Unit,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  joinToString1cxrrlmo0chqs as joinToString,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3bxttkj3v1mea as ArrayList_init_$Create$_0,
  PrimitiveClasses_getInstance2v63zn04dtq03 as PrimitiveClasses_getInstance,
  getKClass1s3j9wy1cofik as getKClass,
  setOf45ia9pnfhe90 as setOf,
  startsWith26w8qjqapeeq6 as startsWith,
  endsWith3cq61xxngobwh as endsWith,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashSet_init_$Create$3o6z3oewjhki9 as LinkedHashSet_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Application_getInstanceq87g3bor693u as Application_getInstance,
  contentType317fn4f991q9a as contentType,
  HttpHeaders_getInstanceelogg8fjd54u as HttpHeaders_getInstance,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  contentType2zzm38yxo3syt as contentType_0,
  charset1dribv3ku48b1 as charset,
  NullBody_instance2i6w0hfghwfg0 as NullBody_instance,
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
} from './ktor-ktor-http.mjs';
import {
  register$default3vdkjcc7m2cj0 as register$default,
  Configuration20xgygxdzhlk5 as Configuration,
  suitableCharset1jgdcpdzbzgzn as suitableCharset,
  deserialize3kqe4vxpbxz1 as deserialize,
} from './ktor-ktor-shared-ktor-serialization.mjs';
import {
  Charsets_getInstanceqs70pvl4noow as Charsets_getInstance,
  ByteReadChannel2wzou76jce72d as ByteReadChannel,
} from './ktor-ktor-io.mjs';
import {
  TransformRequestBodyContext3ll40opqaho0d as TransformRequestBodyContext,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  TransformResponseBodyContext1axf7xx6ifwbj as TransformResponseBodyContext,
  HttpResponse1532ob1hsse1y as HttpResponse,
  get_request3dwcif5y0fvf1 as get_request,
  accept2gi3b7wj4jds9 as accept,
  EmptyContent_getInstance116ybdh9l8hek as EmptyContent_getInstance,
  createClientPluginjwpvufjows5r as createClientPlugin,
} from './ktor-ktor-client-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
} from './ktor-ktor-utils.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1);
initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig, VOID, [Configuration]);
initMetadataForClass(ContentConverterException, 'ContentConverterException', VOID, Exception);
initMetadataForLambda(ContentNegotiation$lambda$slambda, CoroutineImpl, VOID, [4]);
initMetadataForLambda(ContentNegotiation$lambda$slambda_1, CoroutineImpl, VOID, [4]);
initMetadataForCoroutine($invoke$convertRequestCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($invoke$convertResponseCOROUTINE$, CoroutineImpl);
initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher');
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
function get_ContentNegotiation() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ContentNegotiation;
}
var ContentNegotiation;
function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
  this.t4s_1 = converter;
  this.u4s_1 = contentTypeToSend;
  this.v4s_1 = contentTypeMatcher;
}
function defaultMatcher($this, pattern) {
  return new ContentNegotiationConfig$defaultMatcher$1(pattern);
}
function ContentNegotiationConfig$defaultMatcher$1($pattern) {
  this.w4s_1 = $pattern;
}
protoOf(ContentNegotiationConfig$defaultMatcher$1).x4s = function (contentType) {
  return contentType.i37(this.w4s_1);
};
function ContentNegotiationConfig() {
  this.y4s_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.z4s_1 = ArrayList_init_$Create$();
}
protoOf(ContentNegotiationConfig).f3j = function (contentType, converter, configuration) {
  var matcher = contentType.equals(Application_getInstance().a36_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
  this.a4t(contentType, converter, matcher, configuration);
};
protoOf(ContentNegotiationConfig).a4t = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
  // Inline function 'kotlin.apply' call
  configuration(converter);
  var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
  this.z4s_1.e(registration);
};
function ContentConverterException(message) {
  Exception_init_$Init$(message, this);
  captureStack(this, ContentConverterException);
}
function ContentNegotiationConfig$_init_$ref_1ne3ob() {
  var l = function () {
    return new ContentNegotiationConfig();
  };
  l.callableName = '<init>';
  return l;
}
function ContentNegotiation$lambda($this$createClientPlugin) {
  _init_properties_ContentNegotiation_kt__o183go();
  var registrations = $this$createClientPlugin.y3v_1.z4s_1;
  var ignoredTypes = $this$createClientPlugin.y3v_1.y4s_1;
  $this$createClientPlugin.y4b(ContentNegotiation$lambda$slambda_0(registrations, ignoredTypes, $this$createClientPlugin, null));
  $this$createClientPlugin.j46(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
  return Unit_instance;
}
function invoke$convertRequest(registrations, ignoredTypes, $this_createClientPlugin, request, body, $completion) {
  var tmp = new $invoke$convertRequestCOROUTINE$(registrations, ignoredTypes, $this_createClientPlugin, request, body, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
  charset = charset === VOID ? Charsets_getInstance().r2b_1 : charset;
  var tmp = new $invoke$convertResponseCOROUTINE$(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function ContentNegotiation$lambda$slambda($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation) {
  this.w4u_1 = $registrations;
  this.x4u_1 = $ignoredTypes;
  this.y4u_1 = $this_createClientPlugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$lambda$slambda).d4v = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
  var tmp = this.e4v($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ContentNegotiation$lambda$slambda).o47 = function (p1, p2, p3, p4, $completion) {
  var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
  var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
  var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
  return this.d4v(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$lambda$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = invoke$convertRequest(this.w4u_1, this.x4u_1, this.y4u_1, this.a4v_1, this.b4v_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return suspendResult;
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
protoOf(ContentNegotiation$lambda$slambda).e4v = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
  var i = new ContentNegotiation$lambda$slambda(this.w4u_1, this.x4u_1, this.y4u_1, completion);
  i.z4u_1 = $this$transformRequestBody;
  i.a4v_1 = request;
  i.b4v_1 = body;
  i.c4v_1 = _unused_var__etf5q3;
  return i;
};
function ContentNegotiation$lambda$slambda_0($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation) {
  var i = new ContentNegotiation$lambda$slambda($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation);
  var l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    return i.d4v($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  };
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
  this.n4v_1 = $ignoredTypes;
  this.o4v_1 = $registrations;
  this.p4v_1 = $this_createClientPlugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$lambda$slambda_1).m47 = function ($this$transformResponseBody, response, body, info, $completion) {
  var tmp = this.n47($this$transformResponseBody, response, body, info, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ContentNegotiation$lambda$slambda_1).o47 = function (p1, p2, p3, p4, $completion) {
  var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
  var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
  var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
  return this.m47(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$lambda$slambda_1).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          var tmp_0 = this;
          var tmp0_elvis_lhs = contentType(this.r4v_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }

          tmp_0.u4v_1 = tmp_1;
          this.v4v_1 = suitableCharset(get_request(this.r4v_1).r3b());
          this.u8_1 = 1;
          suspendResult = invoke$convertResponse(this.n4v_1, this.o4v_1, this.p4v_1, get_request(this.r4v_1).z3p(), this.t4v_1, this.s4v_1, this.u4v_1, this.v4v_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return suspendResult;
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
protoOf(ContentNegotiation$lambda$slambda_1).n47 = function ($this$transformResponseBody, response, body, info, completion) {
  var i = new ContentNegotiation$lambda$slambda_1(this.n4v_1, this.o4v_1, this.p4v_1, completion);
  i.q4v_1 = $this$transformResponseBody;
  i.r4v_1 = response;
  i.s4v_1 = body;
  i.t4v_1 = info;
  return i;
};
function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
  var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
  var l = function ($this$transformResponseBody, response, body, info, $completion) {
    return i.m47($this$transformResponseBody, response, body, info, $completion);
  };
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$convertRequest$lambda(it) {
  _init_properties_ContentNegotiation_kt__o183go();
  return toString(it.t4s_1);
}
function $invoke$convertRequestCOROUTINE$(registrations, ignoredTypes, $this_createClientPlugin, request, body, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.j4t_1 = registrations;
  this.k4t_1 = ignoredTypes;
  this.l4t_1 = $this_createClientPlugin;
  this.m4t_1 = request;
  this.n4t_1 = body;
}
protoOf($invoke$convertRequestCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 7;
          var _iterator__ex2g4s = this.j4t_1.j();
          while (_iterator__ex2g4s.k()) {
            var element = _iterator__ex2g4s.l();
            l$ret$1: do {
              get_LOGGER().n35('Adding Accept=' + element.u4s_1.e37_1 + ' header for ' + this.m4t_1.n3n_1.toString());
              if (this.m4t_1.p3n_1.s31(HttpHeaders_getInstance().o37_1, element.u4s_1.toString())) {
                break l$ret$1;
              }
              accept(this.m4t_1, element.u4s_1);
            }
             while (false);
          }

          var tmp_0;
          var tmp_1 = this.n4t_1;
          if (tmp_1 instanceof OutgoingContent) {
            tmp_0 = true;
          } else {
            var tmp0 = this.k4t_1;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp_2;
              if (isInterface(tmp0, Collection)) {
                tmp_2 = tmp0.p();
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                tmp$ret$2 = false;
                break l$ret$3;
              }
              var _iterator__ex2g4s_0 = tmp0.j();
              while (_iterator__ex2g4s_0.k()) {
                var element_0 = _iterator__ex2g4s_0.l();
                if (element_0.ta(this.n4t_1)) {
                  tmp$ret$2 = true;
                  break l$ret$3;
                }
              }
              tmp$ret$2 = false;
            }
             while (false);
            tmp_0 = tmp$ret$2;
          }

          if (tmp_0) {
            get_LOGGER().n35('Body type ' + toString(getKClassFromExpression(this.n4t_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.m4t_1.n3n_1.toString() + '.'));
            return null;
          }

          var tmp_3 = this;
          var tmp0_elvis_lhs = contentType_0(this.m4t_1);
          var tmp_4;
          if (tmp0_elvis_lhs == null) {
            this.l4t_1;
            get_LOGGER().n35("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.m4t_1.n3n_1.toString() + '.');
            return null;
          } else {
            tmp_4 = tmp0_elvis_lhs;
          }

          tmp_3.o4t_1 = tmp_4;
          var tmp_5 = this.n4t_1;
          if (tmp_5 instanceof Unit) {
            get_LOGGER().n35('Sending empty body for ' + this.m4t_1.n3n_1.toString());
            this.m4t_1.p3n_1.x31(HttpHeaders_getInstance().g38_1);
            return EmptyContent_getInstance();
          }

          var tmp_6 = this;
          var tmp0_0 = this.j4t_1;
          var destination = ArrayList_init_$Create$();
          var _iterator__ex2g4s_1 = tmp0_0.j();
          while (_iterator__ex2g4s_1.k()) {
            var element_1 = _iterator__ex2g4s_1.l();
            if (element_1.v4s_1.x4s(this.o4t_1)) {
              destination.e(element_1);
            }
          }

          var tmp_7;
          if (!destination.p()) {
            tmp_7 = destination;
          } else {
            tmp_7 = null;
          }

          var tmp1_elvis_lhs = tmp_7;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            this.l4t_1;
            get_LOGGER().n35('None of the registered converters match request Content-Type=' + this.o4t_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.m4t_1.n3n_1.toString() + '.'));
            return null;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }

          tmp_6.p4t_1 = tmp_8;
          if (this.m4t_1.v4d() == null) {
            get_LOGGER().n35('Request has unknown body type. Skipping ContentNegotiation for ' + this.m4t_1.n3n_1.toString() + '.');
            return null;
          }

          this.m4t_1.p3n_1.x31(HttpHeaders_getInstance().g38_1);
          var tmp_9 = this;
          tmp_9.q4t_1 = this.p4t_1;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          this.s4t_1 = this.q4t_1;
          this.t4t_1 = this.s4t_1.j();
          this.u8_1 = 2;
          continue $sm;
        case 2:
          if (!this.t4t_1.k()) {
            this.u8_1 = 5;
            continue $sm;
          }

          this.u4t_1 = this.t4t_1.l();
          var tmp_10 = this;
          tmp_10.v4t_1 = this.u4t_1;
          this.w4t_1 = this.v4t_1;
          this.u8_1 = 3;
          var tmp0_elvis_lhs_0 = charset(this.o4t_1);
          var tmp_11 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().r2b_1 : tmp0_elvis_lhs_0;
          var tmp_12 = ensureNotNull(this.m4t_1.v4d());
          var this_0 = this.n4t_1;
          var tmp_13;
          if (!equals(this_0, NullBody_instance)) {
            tmp_13 = this_0;
          } else {
            tmp_13 = null;
          }

          suspendResult = this.w4t_1.t4s_1.w4v(this.o4t_1, tmp_11, tmp_12, tmp_13, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          var result = suspendResult;
          if (!(result == null)) {
            get_LOGGER().n35('Converted request body using ' + toString(this.w4t_1.t4s_1) + ' for ' + this.m4t_1.n3n_1.toString());
          }

          var result_0 = result;
          if (!(result_0 == null)) {
            this.r4t_1 = result_0;
            this.u8_1 = 6;
            continue $sm;
          } else {
            this.u8_1 = 4;
            continue $sm;
          }

        case 4:
          this.u8_1 = 2;
          continue $sm;
        case 5:
          this.r4t_1 = null;
          if (false) {
            this.u8_1 = 1;
            continue $sm;
          }

          this.u8_1 = 6;
          continue $sm;
        case 6:
          var tmp2_elvis_lhs = this.r4t_1;
          var tmp_14;
          if (tmp2_elvis_lhs == null) {
            var tmp_15 = "Can't convert " + toString(this.n4t_1) + ' with contentType ' + this.o4t_1.toString() + ' using converters ';
            throw new ContentConverterException(tmp_15 + joinToString(this.p4t_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
          } else {
            tmp_14 = tmp2_elvis_lhs;
          }

          var serializedContent = tmp_14;
          return serializedContent;
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
function $invoke$convertResponseCOROUTINE$(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.f4u_1 = ignoredTypes;
  this.g4u_1 = registrations;
  this.h4u_1 = $this_createClientPlugin;
  this.i4u_1 = requestUrl;
  this.j4u_1 = info;
  this.k4u_1 = body;
  this.l4u_1 = responseContentType;
  this.m4u_1 = charset;
}
protoOf($invoke$convertResponseCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          var tmp_0 = this.k4u_1;
          if (!isInterface(tmp_0, ByteReadChannel)) {
            get_LOGGER().n35('Response body is already transformed. Skipping ContentNegotiation for ' + this.i4u_1.toString() + '.');
            return null;
          }

          if (this.f4u_1.u1(this.j4u_1.j35_1)) {
            get_LOGGER().n35('Response body type ' + toString(this.j4u_1.j35_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.i4u_1.toString() + '.'));
            return null;
          }

          var tmp_1 = this;
          var tmp0 = this.g4u_1;
          var destination = ArrayList_init_$Create$();
          var _iterator__ex2g4s = tmp0.j();
          while (_iterator__ex2g4s.k()) {
            var element = _iterator__ex2g4s.l();
            if (element.v4s_1.x4s(this.l4u_1)) {
              destination.e(element);
            }
          }

          var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
          var _iterator__ex2g4s_0 = destination.j();
          while (_iterator__ex2g4s_0.k()) {
            var item = _iterator__ex2g4s_0.l();
            destination_0.e(item.t4s_1);
          }

          var tmp_2;
          if (!destination_0.p()) {
            tmp_2 = destination_0;
          } else {
            tmp_2 = null;
          }

          var tmp0_elvis_lhs = tmp_2;
          var tmp_3;
          if (tmp0_elvis_lhs == null) {
            this.h4u_1;
            get_LOGGER().n35('None of the registered converters match response with Content-Type=' + this.l4u_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.i4u_1.toString() + '.'));
            return null;
          } else {
            tmp_3 = tmp0_elvis_lhs;
          }

          tmp_1.n4u_1 = tmp_3;
          this.u8_1 = 1;
          suspendResult = deserialize(this.n4u_1, this.k4u_1, this.j4u_1, this.m4u_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          if (!isInterface(result, ByteReadChannel)) {
            get_LOGGER().n35('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.i4u_1.toString() + '.');
          }

          return result;
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
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().cc(), PrimitiveClasses_getInstance().yb(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    var tmp = ContentNegotiationConfig$_init_$ref_1ne3ob();
    ContentNegotiation = createClientPlugin('ContentNegotiation', tmp, ContentNegotiation$lambda);
  }
}
function JsonContentTypeMatcher() {
}
protoOf(JsonContentTypeMatcher).x4s = function (contentType) {
  if (contentType.i37(Application_getInstance().a36_1)) {
    return true;
  }
  var value = contentType.h37().toString();
  return startsWith(value, 'application/', true) && endsWith(value, '+json', true);
};
var JsonContentTypeMatcher_instance;
function JsonContentTypeMatcher_getInstance() {
  return JsonContentTypeMatcher_instance;
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
  if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
  }
}
//region block: post-declaration
protoOf(ContentNegotiationConfig).g3j = register$default;
//endregion
//region block: init
JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
//endregion
//region block: exports
export {
  get_ContentNegotiation as get_ContentNegotiationcp59ye9rorjc,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.mjs.map
