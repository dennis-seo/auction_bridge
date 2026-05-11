import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  SEALED_getInstance3nsev85ow9059 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  STRING_getInstance2ou4lro9xn2qn as STRING_getInstance,
  ENUM_getInstance22lfbrqor0c0a as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SerializationException_init_$Init$nhp5tm45z5re as SerializationException_init_$Init$,
  SerializationException_init_$Create$1b97dv9p64p50 as SerializationException_init_$Create$,
  CLASS_getInstance14ex35co4jkrb as CLASS_getInstance,
  LIST_getInstancey7k5h8d5cvxt as LIST_getInstance,
  SealedClassSerializeriwipiibk55zc as SealedClassSerializer,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  ENUMlmq49cvwy4ow as ENUM,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  CONTEXTUAL_getInstance1845118lbzky0 as CONTEXTUAL_getInstance,
  MAP_getInstance3s1t6byguxmp9 as MAP_getInstance,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  findPolymorphicSerializer1nm87hvemahcj as findPolymorphicSerializer,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstance26229tfe4t547 as OBJECT_getInstance,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer_0,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$3ewkh27kzt8z8 as IllegalArgumentException_init_$Create$,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  KtMap140uvy3s5zad8 as KtMap,
  KtList3hktaavzmj137 as KtList,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  NumberFormatException_init_$Create$361k2w325ylq7 as NumberFormatException_init_$Create$,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  isInterface3d6p8outrmvmk as isInterface,
  contains2c50nlxg7en7o as contains,
  toDouble1kn912gjoizjp as toDouble,
  StringCompanionObject_instance3alxothmy382k as StringCompanionObject_instance,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance1puqqwzccfvrg as Companion_getInstance,
  _ULong___get_data__impl__fggpzb2qlkrfp9zs48z as _ULong___get_data__impl__fggpzb,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef1ajb9in178r5r as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy,
  toLongw1zpgk99d84b as toLong,
  _UInt___init__impl__l7qpdltd1eeof8nsuj as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl213fqto411a11p0 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k1p6qzv0dh0bvg as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7kivnvhcxkib53 as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc43ude1dscg1q30 as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg2vnfngefiworp as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne2jag2u7194ozm as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee3e5ovvzk9wm4f as UShort__toString_impl_edaoee,
  captureStack1fzi4aczwc4hg as captureStack,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  LinkedHashMap_init_$Create$1f9mb1z5f3dxn as LinkedHashMap_init_$Create$,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  copyOf3rutauicler23 as copyOf_0,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  DeepRecursiveScope1pqaydvh4vdcu as DeepRecursiveScope,
  Unitkvevlwgzwiuc as Unit,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  getKClass1s3j9wy1cofik as getKClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  substringBefore3n7kj60w69hju as substringBefore,
  removeSuffix3d61x5lsuvuho as removeSuffix,
  substringAfter1hku067gwr5ve as substringAfter,
  contains3ue2qo8xhmpf1 as contains_0,
  plus17rl43at52ays as plus,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw13y1a2xkii3dn as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qr2p2xx2i2jvnz8 as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g0245hlms5v6vgvnl as _UShort___get_data__impl__g0245,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  toString3o7ifthqydp6e as toString_1,
  Companion_getInstanceuedpedmz4g65 as Companion_getInstance_0,
  Companion_getInstance1trnkq9cty7vr as Companion_getInstance_1,
  Companion_getInstance2du03jiluw9jj as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  equals2v6cggk171b6e as equals_0,
  toByte4i43936u611k as toByte,
  startsWith26w8qjqapeeq6 as startsWith,
  toShort36kaw0zjdq3ex as toShort,
  single29ec4rh52687r as single,
  Char19o2r8palgjof as Char,
  emptySetcxexqki71qfa as emptySet,
  plus1ogy4liedzq5j as plus_0,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  enumEntries20mr21zbe3az4 as enumEntries,
  last1vo29oleiqj36 as last,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Long2qws0ah9gnpki as Long,
  Char__minus_impl_a2frrh3548ixwefqxih as Char__minus_impl_a2frrh,
  numberToLong1a4cndvg6c52s as numberToLong,
  charArray2ujmm1qusno00 as charArray,
  indexOfwa4w6635jewi as indexOf,
  indexOf1xbs558u7wr52 as indexOf_0,
  substringiqarkczpya5m as substring,
  StringBuilder_init_$Create$2ujvu6cqvzuyn as StringBuilder_init_$Create$_0,
  HashMap_init_$Create$36kepqnl5avn5 as HashMap_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(Json, 'Json', VOID, VOID, [StringFormat]);
initMetadataForObject(Default, 'Default', VOID, Json);
initMetadataForClass(JsonBuilder, 'JsonBuilder');
initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
initMetadataForClass(JsonNames, 'JsonNames');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(PolymorphismValidator, 'PolymorphismValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
//endregion
function Default() {
  Default_instance = this;
  Json.call(this, new JsonConfiguration(), EmptySerializersModule());
}
var Default_instance;
function Default_getInstance() {
  if (Default_instance == null)
    new Default();
  return Default_instance;
}
function Json(configuration, serializersModule) {
  Default_getInstance();
  this.c5a_1 = configuration;
  this.d5a_1 = serializersModule;
  this.e5a_1 = new DescriptorSchemaCache();
}
protoOf(Json).w2g = function () {
  return this.d5a_1;
};
protoOf(Json).x2d = function (serializer, value) {
  var result = new JsonToStringWriter();
  try {
    encodeByWriter(this, result, serializer, value);
    return result.toString();
  }finally {
    result.g5a();
  }
};
protoOf(Json).y2d = function (deserializer, string) {
  var lexer = StringJsonLexer_0(this, string);
  var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.u2c(), null);
  var result = input.g2g(deserializer);
  lexer.t5a();
  return result;
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.m5b();
  return new JsonImpl(conf, builder.l5b_1);
}
function JsonBuilder(json) {
  this.u5a_1 = json.c5a_1.n5b_1;
  this.v5a_1 = json.c5a_1.s5b_1;
  this.w5a_1 = json.c5a_1.o5b_1;
  this.x5a_1 = json.c5a_1.p5b_1;
  this.y5a_1 = json.c5a_1.r5b_1;
  this.z5a_1 = json.c5a_1.t5b_1;
  this.a5b_1 = json.c5a_1.u5b_1;
  this.b5b_1 = json.c5a_1.w5b_1;
  this.c5b_1 = json.c5a_1.d5c_1;
  this.d5b_1 = json.c5a_1.y5b_1;
  this.e5b_1 = json.c5a_1.z5b_1;
  this.f5b_1 = json.c5a_1.a5c_1;
  this.g5b_1 = json.c5a_1.b5c_1;
  this.h5b_1 = json.c5a_1.c5c_1;
  this.i5b_1 = json.c5a_1.x5b_1;
  this.j5b_1 = json.c5a_1.q5b_1;
  this.k5b_1 = json.c5a_1.v5b_1;
  this.l5b_1 = json.w2g();
}
protoOf(JsonBuilder).m5b = function () {
  if (this.k5b_1) {
    // Inline function 'kotlin.require' call
    if (!(this.b5b_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.c5b_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
      var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  if (!this.y5a_1) {
    // Inline function 'kotlin.require' call
    if (!(this.z5a_1 === '    ')) {
      var message_1 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  } else if (!(this.z5a_1 === '    ')) {
    var tmp0 = this.z5a_1;
    var tmp$ret$7;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(tmp0)) {
        var element = charSequenceGet(tmp0, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
          tmp$ret$7 = false;
          break $l$block;
        }
      }
      tmp$ret$7 = true;
    }
    var allWhitespaces = tmp$ret$7;
    // Inline function 'kotlin.require' call
    if (!allWhitespaces) {
      var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.z5a_1;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
  }
  return new JsonConfiguration(this.u5a_1, this.w5a_1, this.x5a_1, this.j5b_1, this.y5a_1, this.v5a_1, this.z5a_1, this.a5b_1, this.k5b_1, this.b5b_1, this.i5b_1, this.d5b_1, this.e5b_1, this.f5b_1, this.g5b_1, this.h5b_1, this.c5b_1);
};
function validateConfiguration($this) {
  if (equals($this.w2g(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new PolymorphismValidator($this.c5a_1.v5b_1, $this.c5a_1.w5b_1);
  $this.w2g().p2w(collector);
}
function JsonImpl(configuration, module_0) {
  Json.call(this, configuration, module_0);
  validateConfiguration(this);
}
function JsonClassDiscriminator(discriminator) {
  this.e5c_1 = discriminator;
}
protoOf(JsonClassDiscriminator).equals = function (other) {
  if (!(other instanceof JsonClassDiscriminator))
    return false;
  var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
  if (!(this.e5c_1 === tmp0_other_with_cast.e5c_1))
    return false;
  return true;
};
protoOf(JsonClassDiscriminator).hashCode = function () {
  return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.e5c_1);
};
protoOf(JsonClassDiscriminator).toString = function () {
  return '@kotlinx.serialization.json.JsonClassDiscriminator(' + 'discriminator=' + this.e5c_1 + ')';
};
function JsonNames() {
}
function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
  encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
  ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
  isLenient = isLenient === VOID ? false : isLenient;
  allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
  prettyPrint = prettyPrint === VOID ? false : prettyPrint;
  explicitNulls = explicitNulls === VOID ? true : explicitNulls;
  prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
  coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
  useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
  classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
  allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
  useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
  namingStrategy = namingStrategy === VOID ? null : namingStrategy;
  decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
  allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
  allowComments = allowComments === VOID ? false : allowComments;
  classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
  this.n5b_1 = encodeDefaults;
  this.o5b_1 = ignoreUnknownKeys;
  this.p5b_1 = isLenient;
  this.q5b_1 = allowStructuredMapKeys;
  this.r5b_1 = prettyPrint;
  this.s5b_1 = explicitNulls;
  this.t5b_1 = prettyPrintIndent;
  this.u5b_1 = coerceInputValues;
  this.v5b_1 = useArrayPolymorphism;
  this.w5b_1 = classDiscriminator;
  this.x5b_1 = allowSpecialFloatingPointValues;
  this.y5b_1 = useAlternativeNames;
  this.z5b_1 = namingStrategy;
  this.a5c_1 = decodeEnumsCaseInsensitive;
  this.b5c_1 = allowTrailingComma;
  this.c5c_1 = allowComments;
  this.d5c_1 = classDiscriminatorMode;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.n5b_1 + ', ignoreUnknownKeys=' + this.o5b_1 + ', isLenient=' + this.p5b_1 + ', ' + ('allowStructuredMapKeys=' + this.q5b_1 + ', prettyPrint=' + this.r5b_1 + ', explicitNulls=' + this.s5b_1 + ', ') + ("prettyPrintIndent='" + this.t5b_1 + "', coerceInputValues=" + this.u5b_1 + ', useArrayPolymorphism=' + this.v5b_1 + ', ') + ("classDiscriminator='" + this.w5b_1 + "', allowSpecialFloatingPointValues=" + this.x5b_1 + ', ') + ('useAlternativeNames=' + this.y5b_1 + ', namingStrategy=' + toString_0(this.z5b_1) + ', decodeEnumsCaseInsensitive=' + this.a5c_1 + ', ') + ('allowTrailingComma=' + this.b5c_1 + ', allowComments=' + this.c5c_1 + ', classDiscriminatorMode=' + this.d5c_1.toString() + ')');
};
var ClassDiscriminatorMode_NONE_instance;
var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
var ClassDiscriminatorMode_POLYMORPHIC_instance;
var ClassDiscriminatorMode_entriesInitialized;
function ClassDiscriminatorMode_initEntries() {
  if (ClassDiscriminatorMode_entriesInitialized)
    return Unit_instance;
  ClassDiscriminatorMode_entriesInitialized = true;
  ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
  ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
  ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
}
function ClassDiscriminatorMode(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function ClassDiscriminatorMode_NONE_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_NONE_instance;
}
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_POLYMORPHIC_instance;
}
function JsonDecoder() {
}
function get_jsonUnquotedLiteralDescriptor() {
  _init_properties_JsonElement_kt__7cbdc2();
  return jsonUnquotedLiteralDescriptor;
}
var jsonUnquotedLiteralDescriptor;
function Companion() {
}
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
function JsonElement() {
}
function Companion_0() {
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
function JsonPrimitive() {
  JsonElement.call(this);
}
protoOf(JsonPrimitive).toString = function () {
  return this.h5c();
};
function Companion_1() {
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function JsonObject$toString$lambda(_destruct__k2r9zo) {
  // Inline function 'kotlin.collections.component1' call
  var k = _destruct__k2r9zo.s();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.t();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  printQuoted(this_0, k);
  this_0.c8(_Char___init__impl__6a9atx(58));
  this_0.a8(v);
  return this_0.toString();
}
function JsonObject(content) {
  JsonElement.call(this);
  this.i5c_1 = content;
}
protoOf(JsonObject).equals = function (other) {
  return equals(this.i5c_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.i5c_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.i5c_1.r();
  return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
};
protoOf(JsonObject).g30 = function (key) {
  return this.i5c_1.c2(key);
};
protoOf(JsonObject).c2 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.g30((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).pd = function (key) {
  return this.i5c_1.e2(key);
};
protoOf(JsonObject).e2 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.pd((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).p = function () {
  return this.i5c_1.p();
};
protoOf(JsonObject).r = function () {
  return this.i5c_1.r();
};
protoOf(JsonObject).f2 = function () {
  return this.i5c_1.f2();
};
protoOf(JsonObject).m = function () {
  return this.i5c_1.m();
};
protoOf(JsonObject).g2 = function () {
  return this.i5c_1.g2();
};
function Companion_2() {
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function JsonArray(content) {
  JsonElement.call(this);
  this.j5c_1 = content;
}
protoOf(JsonArray).equals = function (other) {
  return equals(this.j5c_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.j5c_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.j5c_1, ',', '[', ']');
};
protoOf(JsonArray).k5c = function (element) {
  return this.j5c_1.u1(element);
};
protoOf(JsonArray).u1 = function (element) {
  if (!(element instanceof JsonElement))
    return false;
  return this.k5c(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).l5c = function (elements) {
  return this.j5c_1.v1(elements);
};
protoOf(JsonArray).v1 = function (elements) {
  return this.l5c(elements);
};
protoOf(JsonArray).o = function (index) {
  return this.j5c_1.o(index);
};
protoOf(JsonArray).p = function () {
  return this.j5c_1.p();
};
protoOf(JsonArray).j = function () {
  return this.j5c_1.j();
};
protoOf(JsonArray).w1 = function (index) {
  return this.j5c_1.w1(index);
};
protoOf(JsonArray).x1 = function (fromIndex, toIndex) {
  return this.j5c_1.x1(fromIndex, toIndex);
};
protoOf(JsonArray).m = function () {
  return this.j5c_1.m();
};
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.m5c_1 = 'null';
}
protoOf(JsonNull).h5c = function () {
  return this.m5c_1;
};
protoOf(JsonNull).n5c = function () {
  return JsonNullSerializer_getInstance();
};
protoOf(JsonNull).w2o = function (typeParamsSerializers) {
  return this.n5c();
};
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance == null)
    new JsonNull();
  return JsonNull_instance;
}
function JsonLiteral(body, isString, coerceToInlineType) {
  coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
  JsonPrimitive.call(this);
  this.o5c_1 = isString;
  this.p5c_1 = coerceToInlineType;
  this.q5c_1 = toString(body);
  if (!(this.p5c_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.p5c_1.m2e()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).h5c = function () {
  return this.q5c_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.o5c_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.q5c_1);
    tmp = this_0.toString();
  } else {
    tmp = this.q5c_1;
  }
  return tmp;
};
protoOf(JsonLiteral).equals = function (other) {
  if (this === other)
    return true;
  if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
    return false;
  if (!(other instanceof JsonLiteral))
    THROW_CCE();
  if (!(this.o5c_1 === other.o5c_1))
    return false;
  if (!(this.q5c_1 === other.q5c_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.o5c_1);
  result = imul(31, result) + getStringHashCode(this.q5c_1) | 0;
  return result;
};
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.h5c());
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.h5c())).r5c();
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException_init_$Create$(e.message);
    } else {
      throw $p;
    }
  }
  var result = tmp;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    throw NumberFormatException_init_$Create$(_this__u8e3s4.h5c() + ' is not an Int');
  return result.d1();
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.h5c())).r5c();
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException_init_$Create$(e.message);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.h5c();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.h5c());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.h5c();
  }
  return tmp;
}
function get_jsonPrimitive(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonPrimitive');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.f2d('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.f2d('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.f2d('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.f2d('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.f2d('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().s5c_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().t5c_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().u5c_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().v5c_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().w5c_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.x5c_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).u2c = function () {
  return this.x5c_1;
};
protoOf(JsonElementSerializer).y5c = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.z2h(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.z2h(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.z2h(JsonArraySerializer_getInstance(), value);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
};
protoOf(JsonElementSerializer).v2c = function (encoder, value) {
  return this.y5c(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonElementSerializer).w2c = function (decoder) {
  var input = asJsonDecoder(decoder);
  return input.g5c();
};
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance == null)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function defer(deferred) {
  return new defer$1(deferred);
}
function JsonPrimitiveSerializer() {
  JsonPrimitiveSerializer_instance = this;
  this.s5c_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).u2c = function () {
  return this.s5c_1;
};
protoOf(JsonPrimitiveSerializer).z5c = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.z2h(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.z2h(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).v2c = function (encoder, value) {
  return this.z5c(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
protoOf(JsonPrimitiveSerializer).w2c = function (decoder) {
  var result = asJsonDecoder(decoder).g5c();
  if (!(result instanceof JsonPrimitive))
    throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
  return result;
};
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance == null)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
function JsonNullSerializer() {
  JsonNullSerializer_instance = this;
  this.t5c_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).u2c = function () {
  return this.t5c_1;
};
protoOf(JsonNullSerializer).a5d = function (encoder, value) {
  verify(encoder);
  encoder.c2h();
};
protoOf(JsonNullSerializer).v2c = function (encoder, value) {
  return this.a5d(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
protoOf(JsonNullSerializer).w2c = function (decoder) {
  verify_0(decoder);
  if (decoder.s2f()) {
    throw new JsonDecodingException("Expected 'null' literal");
  }
  decoder.t2f();
  return JsonNull_getInstance();
};
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance == null)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
function JsonLiteralSerializer() {
  JsonLiteralSerializer_instance = this;
  this.u5c_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).u2c = function () {
  return this.u5c_1;
};
protoOf(JsonLiteralSerializer).b5d = function (encoder, value) {
  verify(encoder);
  if (value.o5c_1) {
    return encoder.l2h(value.q5c_1);
  }
  if (!(value.p5c_1 == null)) {
    return encoder.n2h(value.p5c_1).l2h(value.q5c_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.q5c_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.h2h(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.q5c_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).sm_1;
    var tmp_1 = encoder.n2h(serializer_0(Companion_getInstance()).u2c());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.h2h(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.q5c_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.j2h(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.q5c_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.d2h(tmp3_safe_receiver);
  }
  encoder.l2h(value.q5c_1);
};
protoOf(JsonLiteralSerializer).v2c = function (encoder, value) {
  return this.b5d(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
protoOf(JsonLiteralSerializer).w2c = function (decoder) {
  var result = asJsonDecoder(decoder).g5c();
  if (!(result instanceof JsonLiteral))
    throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
  return result;
};
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance == null)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
function JsonObjectDescriptor() {
  JsonObjectDescriptor_instance = this;
  this.c5d_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).u2c();
  this.d5d_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).v2d = function () {
  return this.d5d_1;
};
protoOf(JsonObjectDescriptor).p2e = function (index) {
  return this.c5d_1.p2e(index);
};
protoOf(JsonObjectDescriptor).q2e = function (name) {
  return this.c5d_1.q2e(name);
};
protoOf(JsonObjectDescriptor).r2e = function (index) {
  return this.c5d_1.r2e(index);
};
protoOf(JsonObjectDescriptor).s2e = function (index) {
  return this.c5d_1.s2e(index);
};
protoOf(JsonObjectDescriptor).t2e = function (index) {
  return this.c5d_1.t2e(index);
};
protoOf(JsonObjectDescriptor).l2e = function () {
  return this.c5d_1.l2e();
};
protoOf(JsonObjectDescriptor).h2e = function () {
  return this.c5d_1.h2e();
};
protoOf(JsonObjectDescriptor).m2e = function () {
  return this.c5d_1.m2e();
};
protoOf(JsonObjectDescriptor).n2e = function () {
  return this.c5d_1.n2e();
};
protoOf(JsonObjectDescriptor).o2e = function () {
  return this.c5d_1.o2e();
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.v5c_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).u2c = function () {
  return this.v5c_1;
};
protoOf(JsonObjectSerializer).e5d = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).v2c(encoder, value);
};
protoOf(JsonObjectSerializer).v2c = function (encoder, value) {
  return this.e5d(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
protoOf(JsonObjectSerializer).w2c = function (decoder) {
  verify_0(decoder);
  return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).w2c(decoder));
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonArrayDescriptor() {
  JsonArrayDescriptor_instance = this;
  this.f5d_1 = ListSerializer(JsonElementSerializer_getInstance()).u2c();
  this.g5d_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).v2d = function () {
  return this.g5d_1;
};
protoOf(JsonArrayDescriptor).p2e = function (index) {
  return this.f5d_1.p2e(index);
};
protoOf(JsonArrayDescriptor).q2e = function (name) {
  return this.f5d_1.q2e(name);
};
protoOf(JsonArrayDescriptor).r2e = function (index) {
  return this.f5d_1.r2e(index);
};
protoOf(JsonArrayDescriptor).s2e = function (index) {
  return this.f5d_1.s2e(index);
};
protoOf(JsonArrayDescriptor).t2e = function (index) {
  return this.f5d_1.t2e(index);
};
protoOf(JsonArrayDescriptor).l2e = function () {
  return this.f5d_1.l2e();
};
protoOf(JsonArrayDescriptor).h2e = function () {
  return this.f5d_1.h2e();
};
protoOf(JsonArrayDescriptor).m2e = function () {
  return this.f5d_1.m2e();
};
protoOf(JsonArrayDescriptor).n2e = function () {
  return this.f5d_1.n2e();
};
protoOf(JsonArrayDescriptor).o2e = function () {
  return this.f5d_1.o2e();
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.w5c_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).u2c = function () {
  return this.w5c_1;
};
protoOf(JsonArraySerializer).h5d = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).v2c(encoder, value);
};
protoOf(JsonArraySerializer).v2c = function (encoder, value) {
  return this.h5d(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
protoOf(JsonArraySerializer).w2c = function (decoder) {
  verify_0(decoder);
  return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).w2c(decoder));
};
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance == null)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function asJsonDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function verify_0(decoder) {
  asJsonDecoder(decoder);
}
function asJsonEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function _get_original__l7ku1m($this) {
  var tmp0 = $this.i5d_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.t();
}
function defer$o$_get_original_$ref_3cje7k() {
  return function (p0) {
    return _get_original__l7ku1m(p0);
  };
}
function defer$1($deferred) {
  this.i5d_1 = lazy($deferred);
}
protoOf(defer$1).v2d = function () {
  return _get_original__l7ku1m(this).v2d();
};
protoOf(defer$1).l2e = function () {
  return _get_original__l7ku1m(this).l2e();
};
protoOf(defer$1).n2e = function () {
  return _get_original__l7ku1m(this).n2e();
};
protoOf(defer$1).p2e = function (index) {
  return _get_original__l7ku1m(this).p2e(index);
};
protoOf(defer$1).q2e = function (name) {
  return _get_original__l7ku1m(this).q2e(name);
};
protoOf(defer$1).r2e = function (index) {
  return _get_original__l7ku1m(this).r2e(index);
};
protoOf(defer$1).s2e = function (index) {
  return _get_original__l7ku1m(this).s2e(index);
};
protoOf(defer$1).t2e = function (index) {
  return _get_original__l7ku1m(this).t2e(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.j5d_1 = writer;
  this.k5d_1 = true;
}
protoOf(Composer).l5d = function () {
  this.k5d_1 = true;
};
protoOf(Composer).m5d = function () {
  return Unit_instance;
};
protoOf(Composer).n5d = function () {
  this.k5d_1 = false;
};
protoOf(Composer).o5d = function () {
  this.k5d_1 = false;
};
protoOf(Composer).p5d = function () {
  return Unit_instance;
};
protoOf(Composer).q5d = function (v) {
  return this.j5d_1.r5d(v);
};
protoOf(Composer).s5d = function (v) {
  return this.j5d_1.t5d(v);
};
protoOf(Composer).u5d = function (v) {
  return this.j5d_1.t5d(v.toString());
};
protoOf(Composer).v5d = function (v) {
  return this.j5d_1.t5d(v.toString());
};
protoOf(Composer).w5d = function (v) {
  return this.j5d_1.x5d(toLong(v));
};
protoOf(Composer).y5d = function (v) {
  return this.j5d_1.x5d(toLong(v));
};
protoOf(Composer).z5d = function (v) {
  return this.j5d_1.x5d(toLong(v));
};
protoOf(Composer).a5e = function (v) {
  return this.j5d_1.x5d(v);
};
protoOf(Composer).b5e = function (v) {
  return this.j5d_1.t5d(v.toString());
};
protoOf(Composer).c5e = function (value) {
  return this.j5d_1.d5e(value);
};
function Composer_0(sb, json) {
  return json.c5a_1.r5b_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.g5e_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).z5d = function (v) {
  if (this.g5e_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.c5e(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.s5d(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).a5e = function (v) {
  if (this.g5e_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.c5e(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.s5d(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).w5d = function (v) {
  if (this.g5e_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.c5e(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.s5d(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).y5d = function (v) {
  if (this.g5e_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.c5e(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.s5d(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.j5e_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).c5e = function (value) {
  if (this.j5e_1) {
    protoOf(Composer).c5e.call(this, value);
  } else {
    protoOf(Composer).s5d.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.m5e_1 = json;
  this.n5e_1 = 0;
}
protoOf(ComposerWithPrettyPrint).l5d = function () {
  this.k5d_1 = true;
  this.n5e_1 = this.n5e_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).m5d = function () {
  this.n5e_1 = this.n5e_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).n5d = function () {
  this.k5d_1 = false;
  this.s5d('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.n5e_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.s5d(this.m5e_1.c5a_1.t5b_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).o5d = function () {
  if (this.k5d_1)
    this.k5d_1 = false;
  else {
    this.n5d();
  }
};
protoOf(ComposerWithPrettyPrint).p5d = function () {
  this.q5d(_Char___init__impl__6a9atx(32));
};
function readIfAbsent($this, descriptor, index) {
  $this.p5e_1 = (!descriptor.t2e(index) && descriptor.s2e(index).h2e());
  return $this.p5e_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  var l = function (_this__u8e3s4, p0_0) {
    var tmp0 = p0;
    return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
  };
  l.callableName = 'readIfAbsent';
  return l;
}
function JsonElementMarker(descriptor) {
  var tmp = this;
  tmp.o5e_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
  this.p5e_1 = false;
}
protoOf(JsonElementMarker).q5e = function (index) {
  this.o5e_1.n2m(index);
};
protoOf(JsonElementMarker).r5e = function () {
  return this.o5e_1.o2m();
};
function JsonDecodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonDecodingException);
}
function JsonDecodingException_0(offset, message, input) {
  return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
}
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.s5e('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.p5a_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.t5e('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.v2d() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.l2e().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function InvalidFloatingPointDecoded(value, key, output) {
  return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
}
function UnknownKeyException(key, input) {
  return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.\n" + ('Current input: ' + toString(minify(input))));
}
function JsonException(message) {
  SerializationException_init_$Init$(message, this);
  captureStack(this, JsonException);
}
function JsonDecodingException_1(offset, message) {
  return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
}
function minify(_this__u8e3s4, offset) {
  offset = offset === VOID ? -1 : offset;
  if (charSequenceLength(_this__u8e3s4) < 200)
    return _this__u8e3s4;
  if (offset === -1) {
    var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
    if (start <= 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var endIndex = charSequenceLength(_this__u8e3s4);
    return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
  }
  var start_0 = offset - 30 | 0;
  var end = offset + 30 | 0;
  var prefix = start_0 <= 0 ? '' : '.....';
  var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
  var tmp2 = coerceAtLeast(start_0, 0);
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
  return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
}
function unexpectedFpErrorMessage(value, key, output) {
  return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
}
function InvalidFloatingPointEncoded(value, output) {
  return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
function get_JsonDeserializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonDeserializationNamesKey;
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function getJsonNameIndex(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  if (decodeCaseInsensitive(json, _this__u8e3s4)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.q2e(name);
  if (!(index === -3))
    return index;
  if (!json.c5a_1.y5b_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException_init_$Create$(_this__u8e3s4.v2d() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.p2e(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.l2e(), CLASS_getInstance()) ? json.c5a_1.z5b_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.v5e(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.c5a_1.a5c_1 && equals(descriptor.l2e(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).e2(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.v5e(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap_init_$Create$();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.n2e();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.r2e(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element instanceof JsonNames) {
          destination.e(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w5e_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp1_safe_receiver.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = tmp1_safe_receiver[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp;
          if (useLowercaseEnums) {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = element_0.toLowerCase();
          } else {
            tmp = element_0;
          }
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
        }
      }
      var tmp_0;
      if (useLowercaseEnums) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = _this__u8e3s4.p2e(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.x5e(_this__u8e3s4, i, _this__u8e3s4.p2e(i));
      } else {
        tmp_0 = null;
      }
      var nameToPut = tmp_0;
      if (nameToPut == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_1;
  if (builder.p()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.l2e(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).c2(name)) {
    throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.p2e(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.p2e(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.h2(name, index);
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return function () {
    return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
  };
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return function () {
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.n2e();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.p2e(tmp_2);
      tmp_1[tmp_2] = $strategy.x5e($this_serializationNamesIndices, tmp_2, baseName);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
var properties_initialized_JsonNamesMap_kt_ljpf42;
function _init_properties_JsonNamesMap_kt__cbbp0k() {
  if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
    properties_initialized_JsonNamesMap_kt_ljpf42 = true;
    JsonDeserializationNamesKey = new Key();
    JsonSerializationNamesKey = new Key();
  }
}
function Tombstone() {
}
var Tombstone_instance;
function Tombstone_getInstance() {
  return Tombstone_instance;
}
function resize($this) {
  var newSize = imul($this.a5f_1, 2);
  $this.y5e_1 = copyOf($this.y5e_1, newSize);
  $this.z5e_1 = copyOf_0($this.z5e_1, newSize);
}
function JsonPath() {
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  tmp.y5e_1 = Array(8);
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = new Int32Array(8);
  while (tmp_1 < 8) {
    tmp_2[tmp_1] = -1;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.z5e_1 = tmp_2;
  this.a5f_1 = -1;
}
protoOf(JsonPath).b5f = function (sd) {
  this.a5f_1 = this.a5f_1 + 1 | 0;
  var depth = this.a5f_1;
  if (depth === this.y5e_1.length) {
    resize(this);
  }
  this.y5e_1[depth] = sd;
};
protoOf(JsonPath).c5f = function (index) {
  this.z5e_1[this.a5f_1] = index;
};
protoOf(JsonPath).d5f = function (key) {
  var tmp;
  if (!(this.z5e_1[this.a5f_1] === -2)) {
    this.a5f_1 = this.a5f_1 + 1 | 0;
    tmp = this.a5f_1 === this.y5e_1.length;
  } else {
    tmp = false;
  }
  if (tmp) {
    resize(this);
  }
  this.y5e_1[this.a5f_1] = key;
  this.z5e_1[this.a5f_1] = -2;
};
protoOf(JsonPath).e5f = function () {
  if (this.z5e_1[this.a5f_1] === -2) {
    this.y5e_1[this.a5f_1] = Tombstone_instance;
  }
};
protoOf(JsonPath).f5f = function () {
  var depth = this.a5f_1;
  if (this.z5e_1[depth] === -2) {
    this.z5e_1[depth] = -1;
    this.a5f_1 = this.a5f_1 - 1 | 0;
  }
  if (!(this.a5f_1 === -1)) {
    this.a5f_1 = this.a5f_1 - 1 | 0;
  }
};
protoOf(JsonPath).g5f = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.b8('$');
  // Inline function 'kotlin.repeat' call
  var times = this.a5f_1 + 1 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var element = this.y5e_1[index];
      if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
        if (equals(element.l2e(), LIST_getInstance())) {
          if (!(this.z5e_1[index] === -1)) {
            this_0.b8('[');
            this_0.lc(this.z5e_1[index]);
            this_0.b8(']');
          }
        } else {
          var idx = this.z5e_1[index];
          if (idx >= 0) {
            this_0.b8('.');
            this_0.b8(element.p2e(idx));
          }
        }
      } else {
        if (!(element === Tombstone_instance)) {
          this_0.b8('[');
          this_0.b8("'");
          this_0.a8(element);
          this_0.b8("'");
          this_0.b8(']');
        }
      }
    }
     while (inductionVariable < times);
  return this_0.toString();
};
protoOf(JsonPath).toString = function () {
  return this.g5f();
};
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().m();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
  encoder.z2h(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.q5f_1.u5f(6);
  if ($this.q5f_1.v5f() === 4) {
    $this.q5f_1.t5e('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap_init_$Create$();
  $l$loop: while ($this.q5f_1.w5f()) {
    var key = $this.r5f_1 ? $this.q5f_1.y5f() : $this.q5f_1.x5f();
    $this.q5f_1.u5f(5);
    var element = $this.z5f();
    // Inline function 'kotlin.collections.set' call
    result.h2(key, element);
    lastToken = $this.q5f_1.a5g();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.q5f_1.t5e('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.q5f_1.u5f(7);
  } else if (lastToken === 4) {
    if (!$this.s5f_1) {
      invalidTrailingComma($this.q5f_1);
    }
    $this.q5f_1.u5f(7);
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function readArray($this) {
  var lastToken = $this.q5f_1.a5g();
  if ($this.q5f_1.v5f() === 4) {
    $this.q5f_1.t5e('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList_init_$Create$();
  while ($this.q5f_1.w5f()) {
    var element = $this.z5f();
    result.e(element);
    lastToken = $this.q5f_1.a5g();
    if (!(lastToken === 4)) {
      var tmp0 = $this.q5f_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.p5a_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.t5e(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.q5f_1.u5f(9);
  } else if (lastToken === 4) {
    if (!$this.s5f_1) {
      invalidTrailingComma($this.q5f_1, 'array');
    }
    $this.q5f_1.u5f(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.r5f_1 || !isString) {
    tmp = $this.q5f_1.y5f();
  } else {
    tmp = $this.q5f_1.x5f();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
  this.y5g_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(JsonTreeReader$readDeepRecursive$slambda).d5h = function ($this$DeepRecursiveFunction, it, $completion) {
  var tmp = this.e5h($this$DeepRecursiveFunction, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
  return this.d5h(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          this.b5h_1 = this.y5g_1.q5f_1.v5f();
          if (this.b5h_1 === 1) {
            this.c5h_1 = readValue(this.y5g_1, true);
            this.u8_1 = 2;
            continue $sm;
          } else {
            if (this.b5h_1 === 0) {
              this.c5h_1 = readValue(this.y5g_1, false);
              this.u8_1 = 2;
              continue $sm;
            } else {
              if (this.b5h_1 === 6) {
                this.u8_1 = 1;
                suspendResult = readObject_0(this.y5g_1, this.z5g_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.b5h_1 === 8) {
                  this.c5h_1 = readArray(this.y5g_1);
                  this.u8_1 = 2;
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  this.y5g_1.q5f_1.t5e("Can't begin reading element, unexpected token");
                }
              }
            }
          }

          break;
        case 1:
          this.c5h_1 = suspendResult;
          this.u8_1 = 2;
          continue $sm;
        case 2:
          return this.c5h_1;
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
protoOf(JsonTreeReader$readDeepRecursive$slambda).e5h = function ($this$DeepRecursiveFunction, it, completion) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this.y5g_1, completion);
  i.z5g_1 = $this$DeepRecursiveFunction;
  i.a5h_1 = it;
  return i;
};
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$DeepRecursiveFunction, it, $completion) {
    return i.d5h($this$DeepRecursiveFunction, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.j5g_1 = _this__u8e3s4;
  this.k5g_1 = _this__u8e3s4_0;
}
protoOf($readObjectCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 5;
          var tmp_0 = this;
          tmp_0.l5g_1 = this.j5g_1;
          this.m5g_1 = this.l5g_1;
          this.n5g_1 = this.m5g_1.q5f_1.u5f(6);
          if (this.m5g_1.q5f_1.v5f() === 4) {
            this.m5g_1.q5f_1.t5e('Unexpected leading comma');
          }

          var tmp_1 = this;
          tmp_1.o5g_1 = LinkedHashMap_init_$Create$();
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!this.m5g_1.q5f_1.w5f()) {
            this.u8_1 = 4;
            continue $sm;
          }

          this.p5g_1 = this.m5g_1.r5f_1 ? this.m5g_1.q5f_1.y5f() : this.m5g_1.q5f_1.x5f();
          this.m5g_1.q5f_1.u5f(5);
          this.u8_1 = 2;
          suspendResult = this.k5g_1.vk(Unit_instance, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var element = suspendResult;
          var tmp0 = this.o5g_1;
          var key = this.p5g_1;
          tmp0.h2(key, element);
          this.n5g_1 = this.m5g_1.q5f_1.a5g();
          var tmp0_subject = this.n5g_1;
          if (tmp0_subject === 4) {
            this.u8_1 = 3;
            continue $sm;
          } else {
            if (tmp0_subject === 7) {
              this.u8_1 = 4;
              continue $sm;
            } else {
              this.m5g_1.q5f_1.t5e('Expected end of the object or comma');
            }
          }

          break;
        case 3:
          this.u8_1 = 1;
          continue $sm;
        case 4:
          if (this.n5g_1 === 6) {
            this.m5g_1.q5f_1.u5f(7);
          } else if (this.n5g_1 === 4) {
            if (!this.m5g_1.s5f_1) {
              invalidTrailingComma(this.m5g_1.q5f_1);
            }
            this.m5g_1.q5f_1.u5f(7);
          }

          return new JsonObject(this.o5g_1);
        case 5:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 5) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
function JsonTreeReader(configuration, lexer) {
  this.q5f_1 = lexer;
  this.r5f_1 = configuration.p5b_1;
  this.s5f_1 = configuration.b5c_1;
  this.t5f_1 = 0;
}
protoOf(JsonTreeReader).z5f = function () {
  var token = this.q5f_1.v5f();
  var tmp;
  if (token === 1) {
    tmp = readValue(this, true);
  } else if (token === 0) {
    tmp = readValue(this, false);
  } else if (token === 6) {
    var tmp_0;
    this.t5f_1 = this.t5f_1 + 1 | 0;
    if (this.t5f_1 === 200) {
      tmp_0 = readDeepRecursive(this);
    } else {
      tmp_0 = readObject(this);
    }
    var result = tmp_0;
    this.t5f_1 = this.t5f_1 - 1 | 0;
    tmp = result;
  } else if (token === 8) {
    tmp = readArray(this);
  } else {
    this.q5f_1.t5e('Cannot read Json element because of unexpected ' + tokenDescription(token));
  }
  return tmp;
};
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.o2e().j();
  while (_iterator__ex2g4s.k()) {
    var annotation = _iterator__ex2g4s.l();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.e5c_1;
  }
  return json.c5a_1.w5b_1;
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.u2c()).u1(classDiscriminator)) {
    var baseName = serializer.u2c().v2d();
    var actualName = actualSerializer.u2c().v2d();
    // Inline function 'kotlin.error' call
    var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
    throw IllegalStateException_init_$Create$(toString(message));
  }
}
function checkKind(kind) {
  if (kind instanceof ENUM) {
    // Inline function 'kotlin.error' call
    var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (kind instanceof PrimitiveKind) {
    // Inline function 'kotlin.error' call
    var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  if (kind instanceof PolymorphicKind) {
    // Inline function 'kotlin.error' call
    var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
}
function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
  return validateIfSealed(serializer, actualSerializer, classDiscriminator);
}
function checkKind_0($this, descriptor, actualClass) {
  var kind = descriptor.l2e();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.sa() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.f5h_1)
    return Unit_instance;
  var tmp_0;
  var tmp_1;
  if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = kind instanceof PrimitiveKind;
  }
  if (tmp_1) {
    tmp_0 = true;
  } else {
    tmp_0 = kind instanceof ENUM;
  }
  if (tmp_0) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.sa() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.n2e();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.p2e(i);
      if (name === $this.g5h_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function PolymorphismValidator(useArrayPolymorphism, discriminator) {
  this.f5h_1 = useArrayPolymorphism;
  this.g5h_1 = discriminator;
}
protoOf(PolymorphismValidator).y2w = function (kClass, provider) {
};
protoOf(PolymorphismValidator).b2x = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.u2c();
  checkKind_0(this, descriptor, actualClass);
  if (!this.f5h_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(PolymorphismValidator).c2x = function (baseClass, defaultSerializerProvider) {
};
protoOf(PolymorphismValidator).d2x = function (baseClass, defaultDeserializerProvider) {
};
function Key() {
}
function DescriptorSchemaCache() {
  this.u5e_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).h5h = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.u5e_1;
  var value_0 = this_0.e2(descriptor);
  var tmp;
  if (value_0 == null) {
    var answer = createMapForCache(2);
    this_0.h2(descriptor, answer);
    tmp = answer;
  } else {
    tmp = value_0;
  }
  var tmp0 = tmp;
  var tmp2 = key instanceof Key ? key : THROW_CCE();
  // Inline function 'kotlin.collections.set' call
  var value_1 = !(value == null) ? value : THROW_CCE();
  tmp0.h2(tmp2, value_1);
};
protoOf(DescriptorSchemaCache).v5e = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.i5h(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.h5h(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).i5h = function (descriptor, key) {
  var tmp0_safe_receiver = this.u5e_1.e2(descriptor);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    tmp = tmp0_safe_receiver.e2(key instanceof Key ? key : THROW_CCE());
  }
  var tmp_0 = tmp;
  return !(tmp_0 == null) ? tmp_0 : null;
};
function DiscriminatorHolder(discriminatorToSkip) {
  this.j5h_1 = discriminatorToSkip;
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.j5h_1 === unknownKey) {
    _this__u8e3s4.j5h_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.y2g(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.j5a_1.v5f() === 4) {
    $this.j5a_1.t5e('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.l5a_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.l5a_1 === -1)) {
      hasComma = $this.j5a_1.l5h();
    }
  } else {
    $this.j5a_1.k5h(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.j5a_1.w5f()) {
    if (decodingKey) {
      if ($this.l5a_1 === -1) {
        var tmp0 = $this.j5a_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.p5a_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected leading comma';
          tmp0.t5e(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.j5a_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.p5a_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.t5e(tmp$ret$2, position_0);
        }
      }
    }
    $this.l5a_1 = $this.l5a_1 + 1 | 0;
    tmp = $this.l5a_1;
  } else {
    if (hasComma && !$this.h5a_1.c5a_1.b5c_1) {
      invalidTrailingComma($this.j5a_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.h5a_1;
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.t2e(index);
    var elementDescriptor = descriptor.s2e(index);
    var tmp;
    if (isOptional && !elementDescriptor.h2e()) {
      tmp = $this.j5a_1.m5h(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.l2e(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.h2e()) {
        tmp_0 = $this.j5a_1.m5h(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.j5a_1.n5h($this.n5a_1.p5b_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.c5a_1.s5b_1 && elementDescriptor.h2e();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.j5a_1.x5f();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.j5a_1.l5h();
  while ($this.j5a_1.w5f()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.j5a_1.k5h(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.h5a_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.n5a_1.u5b_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.j5a_1.l5h();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.o5a_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.q5e(index);
        }
        return index;
      }
      tmp = tmp_0;
    } else {
      tmp = true;
    }
    var isUnknown = tmp;
    if (isUnknown) {
      hasComma = handleUnknown($this, key);
    }
  }
  if (hasComma && !$this.h5a_1.c5a_1.b5c_1) {
    invalidTrailingComma($this.j5a_1);
  }
  var tmp1_safe_receiver = $this.o5a_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r5e();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, key) {
  if ($this.n5a_1.o5b_1 || trySkip($this, $this.m5a_1, key)) {
    $this.j5a_1.p5h($this.n5a_1.p5b_1);
  } else {
    $this.j5a_1.o5h(key);
  }
  return $this.j5a_1.l5h();
}
function decodeListIndex($this) {
  var hasComma = $this.j5a_1.l5h();
  var tmp;
  if ($this.j5a_1.w5f()) {
    if (!($this.l5a_1 === -1) && !hasComma) {
      $this.j5a_1.t5e('Expected end of the array or comma');
    }
    $this.l5a_1 = $this.l5a_1 + 1 | 0;
    tmp = $this.l5a_1;
  } else {
    if (hasComma && !$this.h5a_1.c5a_1.b5c_1) {
      invalidTrailingComma($this.j5a_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.n5a_1.p5b_1) {
    tmp = $this.j5a_1.r5h();
  } else {
    tmp = $this.j5a_1.q5h();
  }
  return tmp;
}
function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
  AbstractDecoder.call(this);
  this.h5a_1 = json;
  this.i5a_1 = mode;
  this.j5a_1 = lexer;
  this.k5a_1 = this.h5a_1.w2g();
  this.l5a_1 = -1;
  this.m5a_1 = discriminatorHolder;
  this.n5a_1 = this.h5a_1.c5a_1;
  this.o5a_1 = this.n5a_1.s5b_1 ? null : new JsonElementMarker(descriptor);
}
protoOf(StreamingJsonDecoder).f5c = function () {
  return this.h5a_1;
};
protoOf(StreamingJsonDecoder).w2g = function () {
  return this.k5a_1;
};
protoOf(StreamingJsonDecoder).g5c = function () {
  return (new JsonTreeReader(this.h5a_1.c5a_1, this.j5a_1)).z5f();
};
protoOf(StreamingJsonDecoder).g2g = function (deserializer) {
  try {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.h5a_1.c5a_1.v5b_1;
    }
    if (tmp) {
      return deserializer.w2c(this);
    }
    var discriminator = classDiscriminator(deserializer.u2c(), this.h5a_1);
    var tmp0_elvis_lhs = this.j5a_1.s5h(discriminator, this.n5a_1.p5b_1);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
        var tmp_1;
        if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
          tmp_1 = true;
        } else {
          tmp_1 = this.f5c().c5a_1.v5b_1;
        }
        if (tmp_1) {
          tmp$ret$0 = tmp2.w2c(this);
          break $l$block;
        }
        var discriminator_0 = classDiscriminator(tmp2.u2c(), this.f5c());
        var tmp0 = this.g5c();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = tmp2.u2c().v2d();
        if (!(tmp0 instanceof JsonObject)) {
          var tmp_2 = getKClass(JsonObject).sa();
          var tmp_3 = getKClassFromExpression(tmp0).sa();
          var tmp$ret$1 = this.j5a_1.q5a_1.g5f();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
        }
        var jsonTree = tmp0;
        var tmp0_safe_receiver = jsonTree.pd(discriminator_0);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_4;
        try {
          tmp_4 = findPolymorphicSerializer(tmp2, this, type);
        } catch ($p) {
          var tmp_5;
          if ($p instanceof SerializationException) {
            var it = $p;
            throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
          } else {
            throw $p;
          }
        }
        var tmp_6 = tmp_4;
        var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
        tmp$ret$0 = readPolymorphicJson(this.f5c(), discriminator_0, jsonTree, actualSerializer);
      }
      return tmp$ret$0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var type_0 = tmp_0;
    var tmp_7;
    try {
      tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
    } catch ($p) {
      var tmp_8;
      if ($p instanceof SerializationException) {
        var it_0 = $p;
        var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
        var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
        this.j5a_1.t5e(message, VOID, hint);
      } else {
        throw $p;
      }
      tmp_7 = tmp_8;
    }
    var tmp_9 = tmp_7;
    var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
    this.m5a_1 = new DiscriminatorHolder(discriminator);
    return actualSerializer_0.w2c(this);
  } catch ($p) {
    if ($p instanceof MissingFieldException) {
      var e = $p;
      if (contains_0(ensureNotNull(e.message), 'at path'))
        throw e;
      throw new MissingFieldException(e.b2e_1, plus(e.message, ' at path: ') + this.j5a_1.q5a_1.g5f(), e);
    } else {
      throw $p;
    }
  }
};
protoOf(StreamingJsonDecoder).h2g = function (descriptor) {
  var newMode = switchMode(this.h5a_1, descriptor);
  this.j5a_1.q5a_1.b5f(descriptor);
  this.j5a_1.k5h(newMode.v5h_1);
  checkLeadingComma(this);
  var tmp;
  switch (newMode.l2_1) {
    case 1:
    case 2:
    case 3:
      tmp = new StreamingJsonDecoder(this.h5a_1, newMode, this.j5a_1, descriptor, this.m5a_1);
      break;
    default:
      var tmp_0;
      if (this.i5a_1.equals(newMode) && this.h5a_1.c5a_1.s5b_1) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this.h5a_1, newMode, this.j5a_1, descriptor, this.m5a_1);
      }

      tmp = tmp_0;
      break;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).i2g = function (descriptor) {
  if (this.h5a_1.c5a_1.o5b_1 && descriptor.n2e() === 0) {
    skipLeftoverElements(this, descriptor);
  }
  if (this.j5a_1.l5h() && !this.h5a_1.c5a_1.b5c_1) {
    invalidTrailingComma(this.j5a_1, '');
  }
  this.j5a_1.k5h(this.i5a_1.w5h_1);
  this.j5a_1.q5a_1.f5f();
};
protoOf(StreamingJsonDecoder).s2f = function () {
  var tmp;
  var tmp0_safe_receiver = this.o5a_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p5e_1;
  if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
    tmp = !this.j5a_1.x5h();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).t2f = function () {
  return null;
};
protoOf(StreamingJsonDecoder).t2g = function (descriptor, index, deserializer, previousValue) {
  var isMapKey = this.i5a_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
  if (isMapKey) {
    this.j5a_1.q5a_1.e5f();
  }
  var value = protoOf(AbstractDecoder).t2g.call(this, descriptor, index, deserializer, previousValue);
  if (isMapKey) {
    this.j5a_1.q5a_1.d5f(value);
  }
  return value;
};
protoOf(StreamingJsonDecoder).y2g = function (descriptor) {
  var index;
  switch (this.i5a_1.l2_1) {
    case 0:
      index = decodeObjectIndex(this, descriptor);
      break;
    case 2:
      index = decodeMapIndex(this);
      break;
    default:
      index = decodeListIndex(this);
      break;
  }
  if (!this.i5a_1.equals(WriteMode_MAP_getInstance())) {
    this.j5a_1.q5a_1.c5f(index);
  }
  return index;
};
protoOf(StreamingJsonDecoder).u2f = function () {
  return this.j5a_1.y5h();
};
protoOf(StreamingJsonDecoder).v2f = function () {
  var value = this.j5a_1.r5c();
  if (!value.equals(toLong(value.g3()))) {
    this.j5a_1.t5e("Failed to parse byte for input '" + value.toString() + "'");
  }
  return value.g3();
};
protoOf(StreamingJsonDecoder).w2f = function () {
  var value = this.j5a_1.r5c();
  if (!value.equals(toLong(value.h3()))) {
    this.j5a_1.t5e("Failed to parse short for input '" + value.toString() + "'");
  }
  return value.h3();
};
protoOf(StreamingJsonDecoder).x2f = function () {
  var value = this.j5a_1.r5c();
  if (!value.equals(toLong(value.d1()))) {
    this.j5a_1.t5e("Failed to parse int for input '" + value.toString() + "'");
  }
  return value.d1();
};
protoOf(StreamingJsonDecoder).y2f = function () {
  return this.j5a_1.r5c();
};
protoOf(StreamingJsonDecoder).z2f = function () {
  var tmp0 = this.j5a_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.y5f();
    try {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.t5e("Failed to parse type '" + 'float' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.h5a_1.c5a_1.x5b_1;
  if (specialFp || isFinite(result))
    return result;
  throwInvalidFloatingPointDecoded(this.j5a_1, result);
};
protoOf(StreamingJsonDecoder).a2g = function () {
  var tmp0 = this.j5a_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.y5f();
    try {
      tmp$ret$1 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.t5e("Failed to parse type '" + 'double' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.h5a_1.c5a_1.x5b_1;
  if (specialFp || isFinite_0(result))
    return result;
  throwInvalidFloatingPointDecoded(this.j5a_1, result);
};
protoOf(StreamingJsonDecoder).b2g = function () {
  var string = this.j5a_1.y5f();
  if (!(string.length === 1)) {
    this.j5a_1.t5e("Expected single char, but got '" + string + "'");
  }
  return charCodeAt(string, 0);
};
protoOf(StreamingJsonDecoder).c2g = function () {
  var tmp;
  if (this.n5a_1.p5b_1) {
    tmp = this.j5a_1.r5h();
  } else {
    tmp = this.j5a_1.x5f();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).e2g = function (descriptor) {
  return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.j5a_1, this.h5a_1) : protoOf(AbstractDecoder).e2g.call(this, descriptor);
};
protoOf(StreamingJsonDecoder).d2g = function (enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.h5a_1, this.c2g(), ' at path ' + this.j5a_1.q5a_1.g5f());
};
function JsonDecoderForUnsignedTypes(lexer, json) {
  AbstractDecoder.call(this);
  this.z5h_1 = lexer;
  this.a5i_1 = json.w2g();
}
protoOf(JsonDecoderForUnsignedTypes).w2g = function () {
  return this.a5i_1;
};
protoOf(JsonDecoderForUnsignedTypes).y2g = function (descriptor) {
  var message = 'unsupported';
  throw IllegalStateException_init_$Create$(toString(message));
};
protoOf(JsonDecoderForUnsignedTypes).x2f = function () {
  var tmp0 = this.z5h_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.y5f();
    try {
      // Inline function 'kotlin.UInt.toInt' call
      var this_0 = toUInt(input);
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.t5e("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).y2f = function () {
  var tmp0 = this.z5h_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.y5f();
    try {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = toULong(input);
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.t5e("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).v2f = function () {
  var tmp0 = this.z5h_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.y5f();
    try {
      // Inline function 'kotlin.UByte.toByte' call
      var this_0 = toUByte(input);
      tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.t5e("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).w2f = function () {
  var tmp0 = this.z5h_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.y5f();
    try {
      // Inline function 'kotlin.UShort.toShort' call
      var this_0 = toUShort(input);
      tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.t5e("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
  StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
  return $this;
}
function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
  return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
}
function encodeTypeInfo($this, discriminator, serialName) {
  $this.h5f_1.n5d();
  $this.l2h(discriminator);
  $this.h5f_1.q5d(_Char___init__impl__6a9atx(58));
  $this.h5f_1.p5d();
  $this.l2h(serialName);
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.h5f_1 = composer;
  this.i5f_1 = json;
  this.j5f_1 = mode;
  this.k5f_1 = modeReuseCache;
  this.l5f_1 = this.i5f_1.w2g();
  this.m5f_1 = this.i5f_1.c5a_1;
  this.n5f_1 = false;
  this.o5f_1 = null;
  this.p5f_1 = null;
  var i = this.j5f_1.l2_1;
  if (!(this.k5f_1 == null)) {
    if (!(this.k5f_1[i] === null) || !(this.k5f_1[i] === this)) {
      this.k5f_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).f5c = function () {
  return this.i5f_1;
};
protoOf(StreamingJsonEncoder).w2g = function () {
  return this.l5f_1;
};
protoOf(StreamingJsonEncoder).e2i = function (descriptor, index) {
  return this.m5f_1.n5b_1;
};
protoOf(StreamingJsonEncoder).z2h = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    if (this.f5c().c5a_1.v5b_1) {
      serializer.v2c(this, value);
      break $l$block;
    }
    var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
    var tmp;
    if (isPolymorphicSerializer) {
      tmp = !this.f5c().c5a_1.d5c_1.equals(ClassDiscriminatorMode_NONE_getInstance());
    } else {
      var tmp_0;
      switch (this.f5c().c5a_1.d5c_1.l2_1) {
        case 0:
        case 2:
          tmp_0 = false;
          break;
        case 1:
          // Inline function 'kotlin.let' call

          var it = serializer.u2c().l2e();
          tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    var needDiscriminator = tmp;
    var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.u2c(), this.f5c()) : null;
    var tmp_1;
    if (isPolymorphicSerializer) {
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        if (value == null) {
          var message = 'Value for serializer ' + toString(serializer.u2c()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          break $l$block_0;
        }
      }
      var actual = findPolymorphicSerializer_0(casted, this, value);
      if (!(baseClassDiscriminator == null)) {
        access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
      }
      checkKind(actual.u2c().l2e());
      tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
    } else {
      tmp_1 = serializer;
    }
    var actualSerializer = tmp_1;
    if (!(baseClassDiscriminator == null)) {
      var serialName = actualSerializer.u2c().v2d();
      this.o5f_1 = baseClassDiscriminator;
      this.p5f_1 = serialName;
    }
    actualSerializer.v2c(this, value);
  }
};
protoOf(StreamingJsonEncoder).h2g = function (descriptor) {
  var newMode = switchMode(this.i5f_1, descriptor);
  if (!(newMode.v5h_1 === _Char___init__impl__6a9atx(0))) {
    this.h5f_1.q5d(newMode.v5h_1);
    this.h5f_1.l5d();
  }
  var discriminator = this.o5f_1;
  if (!(discriminator == null)) {
    var tmp0_elvis_lhs = this.p5f_1;
    encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.v2d() : tmp0_elvis_lhs);
    this.o5f_1 = null;
    this.p5f_1 = null;
  }
  if (this.j5f_1.equals(newMode)) {
    return this;
  }
  var tmp1_safe_receiver = this.k5f_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.l2_1];
  return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.h5f_1, this.i5f_1, newMode, this.k5f_1) : tmp2_elvis_lhs;
};
protoOf(StreamingJsonEncoder).i2g = function (descriptor) {
  if (!(this.j5f_1.w5h_1 === _Char___init__impl__6a9atx(0))) {
    this.h5f_1.m5d();
    this.h5f_1.o5d();
    this.h5f_1.q5d(this.j5f_1.w5h_1);
  }
};
protoOf(StreamingJsonEncoder).a2h = function (descriptor, index) {
  switch (this.j5f_1.l2_1) {
    case 1:
      if (!this.h5f_1.k5d_1) {
        this.h5f_1.q5d(_Char___init__impl__6a9atx(44));
      }

      this.h5f_1.n5d();
      break;
    case 2:
      if (!this.h5f_1.k5d_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.h5f_1.q5d(_Char___init__impl__6a9atx(44));
          this.h5f_1.n5d();
          tmp_0 = true;
        } else {
          this.h5f_1.q5d(_Char___init__impl__6a9atx(58));
          this.h5f_1.p5d();
          tmp_0 = false;
        }
        tmp.n5f_1 = tmp_0;
      } else {
        this.n5f_1 = true;
        this.h5f_1.n5d();
      }

      break;
    case 3:
      if (index === 0)
        this.n5f_1 = true;
      if (index === 1) {
        this.h5f_1.q5d(_Char___init__impl__6a9atx(44));
        this.h5f_1.p5d();
        this.n5f_1 = false;
      }

      break;
    default:
      if (!this.h5f_1.k5d_1) {
        this.h5f_1.q5d(_Char___init__impl__6a9atx(44));
      }

      this.h5f_1.n5d();
      this.l2h(getJsonElementName(descriptor, this.i5f_1, index));
      this.h5f_1.q5d(_Char___init__impl__6a9atx(58));
      this.h5f_1.p5d();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).a2i = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.m5f_1.s5b_1) {
    protoOf(AbstractEncoder).a2i.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).n2h = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.h5f_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.h5f_1;
    } else {
      var tmp0 = this.h5f_1.j5d_1;
      var p1 = this.n5f_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.i5f_1, this.j5f_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.h5f_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.h5f_1;
    } else {
      var tmp0_0 = this.h5f_1.j5d_1;
      var p1_0 = this.n5f_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.i5f_1, this.j5f_1, null);
  } else if (!(this.o5f_1 == null)) {
    // Inline function 'kotlin.apply' call
    this.p5f_1 = descriptor.v2d();
    tmp = this;
  } else {
    tmp = protoOf(AbstractEncoder).n2h.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).c2h = function () {
  this.h5f_1.s5d('null');
};
protoOf(StreamingJsonEncoder).d2h = function (value) {
  if (this.n5f_1) {
    this.l2h(value.toString());
  } else {
    this.h5f_1.b5e(value);
  }
};
protoOf(StreamingJsonEncoder).e2h = function (value) {
  if (this.n5f_1) {
    this.l2h(value.toString());
  } else {
    this.h5f_1.w5d(value);
  }
};
protoOf(StreamingJsonEncoder).f2h = function (value) {
  if (this.n5f_1) {
    this.l2h(value.toString());
  } else {
    this.h5f_1.y5d(value);
  }
};
protoOf(StreamingJsonEncoder).g2h = function (value) {
  if (this.n5f_1) {
    this.l2h(value.toString());
  } else {
    this.h5f_1.z5d(value);
  }
};
protoOf(StreamingJsonEncoder).h2h = function (value) {
  if (this.n5f_1) {
    this.l2h(value.toString());
  } else {
    this.h5f_1.a5e(value);
  }
};
protoOf(StreamingJsonEncoder).i2h = function (value) {
  if (this.n5f_1) {
    this.l2h(value.toString());
  } else {
    this.h5f_1.u5d(value);
  }
  if (!this.m5f_1.x5b_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.h5f_1.j5d_1));
  }
};
protoOf(StreamingJsonEncoder).j2h = function (value) {
  if (this.n5f_1) {
    this.l2h(value.toString());
  } else {
    this.h5f_1.v5d(value);
  }
  if (!this.m5f_1.x5b_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.h5f_1.j5d_1));
  }
};
protoOf(StreamingJsonEncoder).k2h = function (value) {
  this.l2h(toString_1(value));
};
protoOf(StreamingJsonEncoder).l2h = function (value) {
  return this.h5f_1.c5e(value);
};
protoOf(StreamingJsonEncoder).m2h = function (enumDescriptor, index) {
  this.l2h(enumDescriptor.p2e(index));
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.m2e() && get_unsignedNumberDescriptors().u1(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.m2e() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).u2c(), serializer_0(Companion_getInstance()).u2c(), serializer_2(Companion_getInstance_1()).u2c(), serializer_3(Companion_getInstance_2()).u2c()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function toHexChar(i) {
  _init_properties_StringOps_kt__fcy1db();
  var d = i & 15;
  var tmp;
  if (d < 10) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp = numberToChar(d + tmp$ret$0 | 0);
  } else {
    var tmp_0 = d - 10 | 0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
  }
  return tmp;
}
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.c8(_Char___init__impl__6a9atx(34));
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(value) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(value, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        _this__u8e3s4.ic(value, lastPos, i);
        _this__u8e3s4.b8(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.ic(value, lastPos, value.length);
  else
    _this__u8e3s4.b8(value);
  _this__u8e3s4.c8(_Char___init__impl__6a9atx(34));
}
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
var properties_initialized_StringOps_kt_wzaea7;
function _init_properties_StringOps_kt__fcy1db() {
  if (!properties_initialized_StringOps_kt_wzaea7) {
    properties_initialized_StringOps_kt_wzaea7 = true;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(c >> 12);
        var c2 = toHexChar(c >> 8);
        var c3 = toHexChar(c >> 4);
        var c4 = toHexChar(c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    ESCAPE_STRINGS = this_0;
    // Inline function 'kotlin.apply' call
    var this_7 = new Int8Array(93);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 31)
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_7[c_0] = 1;
      }
       while (inductionVariable_0 <= 31);
    // Inline function 'kotlin.code' call
    var this_8 = _Char___init__impl__6a9atx(34);
    var tmp = Char__toInt_impl_vasixd(this_8);
    // Inline function 'kotlin.code' call
    var this_9 = _Char___init__impl__6a9atx(34);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$1);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$12);
    ESCAPE_MARKERS = this_7;
  }
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.h5i(tag), toString($this.i5i()));
}
function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  NamedValueDecoder.call(this);
  this.d5i_1 = json;
  this.e5i_1 = value;
  this.f5i_1 = polymorphicDiscriminator;
  this.g5i_1 = this.f5c().c5a_1;
}
protoOf(AbstractJsonTreeDecoder).f5c = function () {
  return this.d5i_1;
};
protoOf(AbstractJsonTreeDecoder).t = function () {
  return this.e5i_1;
};
protoOf(AbstractJsonTreeDecoder).w2g = function () {
  return this.f5c().w2g();
};
protoOf(AbstractJsonTreeDecoder).i5i = function () {
  var tmp0_safe_receiver = this.o2u();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = this.j5i(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? this.t() : tmp1_elvis_lhs;
};
protoOf(AbstractJsonTreeDecoder).h5i = function (currentTag) {
  return this.q2u() + ('.' + currentTag);
};
protoOf(AbstractJsonTreeDecoder).g5c = function () {
  return this.i5i();
};
protoOf(AbstractJsonTreeDecoder).g2g = function (deserializer) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.f5c().c5a_1.v5b_1;
    }
    if (tmp) {
      tmp$ret$0 = deserializer.w2c(this);
      break $l$block;
    }
    var discriminator = classDiscriminator(deserializer.u2c(), this.f5c());
    var tmp0 = this.g5c();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = deserializer.u2c().v2d();
    if (!(tmp0 instanceof JsonObject)) {
      var tmp_0 = getKClass(JsonObject).sa();
      var tmp_1 = getKClassFromExpression(tmp0).sa();
      var tmp$ret$1 = this.q2u();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
    }
    var jsonTree = tmp0;
    var tmp0_safe_receiver = jsonTree.pd(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp_2;
    try {
      tmp_2 = findPolymorphicSerializer(deserializer, this, type);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof SerializationException) {
        var it = $p;
        throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
      } else {
        throw $p;
      }
    }
    var tmp_4 = tmp_2;
    var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
    tmp$ret$0 = readPolymorphicJson(this.f5c(), discriminator, jsonTree, actualSerializer);
  }
  return tmp$ret$0;
};
protoOf(AbstractJsonTreeDecoder).p2u = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeDecoder).h2g = function (descriptor) {
  var currentObject = this.i5i();
  var tmp0_subject = descriptor.l2e();
  var tmp;
  var tmp_0;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_0 = true;
  } else {
    tmp_0 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_0) {
    var tmp_1 = this.f5c();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = descriptor.v2d();
    if (!(currentObject instanceof JsonArray)) {
      var tmp_2 = getKClass(JsonArray).sa();
      var tmp_3 = getKClassFromExpression(currentObject).sa();
      var tmp$ret$0 = this.q2u();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
    }
    tmp = new JsonTreeListDecoder(tmp_1, currentObject);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.f5c();
      var keyDescriptor = carrierDescriptor(descriptor.s2e(0), this_0.w2g());
      var keyKind = keyDescriptor.l2e();
      var tmp_4;
      var tmp_5;
      if (keyKind instanceof PrimitiveKind) {
        tmp_5 = true;
      } else {
        tmp_5 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_5) {
        var tmp_6 = this.f5c();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_0 = descriptor.v2d();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_7 = getKClass(JsonObject).sa();
          var tmp_8 = getKClassFromExpression(currentObject).sa();
          var tmp$ret$3 = this.q2u();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
        }
        tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
      } else {
        if (this_0.c5a_1.q5b_1) {
          var tmp_9 = this.f5c();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_1 = descriptor.v2d();
          if (!(currentObject instanceof JsonArray)) {
            var tmp_10 = getKClass(JsonArray).sa();
            var tmp_11 = getKClassFromExpression(currentObject).sa();
            var tmp$ret$7 = this.q2u();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
          }
          tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp = tmp_4;
    } else {
      var tmp_12 = this.f5c();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName_2 = descriptor.v2d();
      if (!(currentObject instanceof JsonObject)) {
        var tmp_13 = getKClass(JsonObject).sa();
        var tmp_14 = getKClassFromExpression(currentObject).sa();
        var tmp$ret$12 = this.q2u();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
      }
      tmp = new JsonTreeDecoder(tmp_12, currentObject, this.f5i_1);
    }
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).i2g = function (descriptor) {
};
protoOf(AbstractJsonTreeDecoder).s2f = function () {
  var tmp = this.i5i();
  return !(tmp instanceof JsonNull);
};
protoOf(AbstractJsonTreeDecoder).k5i = function (tag, enumDescriptor) {
  var tmp = this.f5c();
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
  var tmp2 = this.j5i(tag);
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var serialName = enumDescriptor.v2d();
  if (!(tmp2 instanceof JsonPrimitive)) {
    var tmp_0 = getKClass(JsonPrimitive).sa();
    var tmp_1 = getKClassFromExpression(tmp2).sa();
    var tmp$ret$0 = this.h5i(tag);
    throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
  }
  return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.h5c());
};
protoOf(AbstractJsonTreeDecoder).c2v = function (tag, enumDescriptor) {
  return this.k5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
};
protoOf(AbstractJsonTreeDecoder).l5i = function (tag) {
  return !(this.j5i(tag) === JsonNull_getInstance());
};
protoOf(AbstractJsonTreeDecoder).s2u = function (tag) {
  return this.l5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).m5i = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j5i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = get_booleanOrNull(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'boolean', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'boolean', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).t2u = function (tag) {
  return this.m5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).n5i = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j5i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var result = get_int(literal);
      var tmp0_elvis_lhs = (-128 <= result ? result <= 127 : false) ? toByte(result) : null;
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'byte', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'byte', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).u2u = function (tag) {
  return this.n5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).o5i = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j5i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var result = get_int(literal);
      var tmp0_elvis_lhs = (-32768 <= result ? result <= 32767 : false) ? toShort(result) : null;
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'short', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'short', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).v2u = function (tag) {
  return this.o5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).p5i = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j5i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = get_int(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'int', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'int', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).w2u = function (tag) {
  return this.p5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).q5i = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j5i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = get_long(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'long', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'long', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).x2u = function (tag) {
  return this.q5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).r5i = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j5i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = get_float(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'float', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'float', tag);
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.f5c().c5a_1.x5b_1;
  if (specialFp || isFinite(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.i5i()));
};
protoOf(AbstractJsonTreeDecoder).y2u = function (tag) {
  return this.r5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).s5i = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j5i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = get_double(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'double', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'double', tag);
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.f5c().c5a_1.x5b_1;
  if (specialFp || isFinite_0(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.i5i()));
};
protoOf(AbstractJsonTreeDecoder).z2u = function (tag) {
  return this.s5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).t5i = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j5i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = new Char(single(literal.h5c()));
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'char', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1.i1_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'char', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).a2v = function (tag) {
  return this.t5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).u5i = function (tag) {
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var value = this.j5i(tag);
  if (!(value instanceof JsonPrimitive)) {
    var tmp = getKClass(JsonPrimitive).sa();
    var tmp_0 = getKClassFromExpression(value).sa();
    var tmp$ret$0 = this.h5i(tag);
    throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
  }
  var value_0 = value;
  if (!(value_0 instanceof JsonLiteral))
    throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.h5i(tag), toString(this.i5i()));
  if (!value_0.o5c_1 && !this.f5c().c5a_1.p5b_1) {
    throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.h5i(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.i5i()));
  }
  return value_0.q5c_1;
};
protoOf(AbstractJsonTreeDecoder).b2v = function (tag) {
  return this.u5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).v5i = function (tag, inlineDescriptor) {
  var tmp;
  if (get_isUnsignedNumber(inlineDescriptor)) {
    var tmp_0 = this.f5c();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.j5i(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = inlineDescriptor.v2d();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_1 = getKClass(JsonPrimitive).sa();
      var tmp_2 = getKClassFromExpression(tmp2).sa();
      var tmp$ret$0 = this.h5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    var lexer = StringJsonLexer_0(tmp_0, tmp2.h5c());
    tmp = new JsonDecoderForUnsignedTypes(lexer, this.f5c());
  } else {
    tmp = protoOf(NamedValueDecoder).d2v.call(this, tag, inlineDescriptor);
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).d2v = function (tag, inlineDescriptor) {
  return this.v5i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).e2g = function (descriptor) {
  return !(this.o2u() == null) ? protoOf(NamedValueDecoder).e2g.call(this, descriptor) : (new JsonPrimitiveDecoder(this.f5c(), this.t(), this.f5i_1)).e2g(descriptor);
};
function coerceInputValue_0($this, descriptor, index, tag) {
  var tmp0 = $this.f5c();
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.t2e(index);
    var elementDescriptor = descriptor.s2e(index);
    var tmp;
    if (isOptional && !elementDescriptor.h2e()) {
      var tmp_0 = $this.j5i(tag);
      tmp = tmp_0 instanceof JsonNull;
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.l2e(), ENUM_getInstance())) {
      var tmp_1;
      if (elementDescriptor.h2e()) {
        var tmp_2 = $this.j5i(tag);
        tmp_1 = tmp_2 instanceof JsonNull;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp_3 = $this.j5i(tag);
      var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
      var tmp_4;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_4 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_4;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.c5a_1.s5b_1 && elementDescriptor.h2e();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function absenceIsNull($this, descriptor, index) {
  $this.f5j_1 = (!$this.f5c().c5a_1.s5b_1 && !descriptor.t2e(index) && descriptor.s2e(index).h2e());
  return $this.f5j_1;
}
function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
  AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
  this.c5j_1 = value;
  this.d5j_1 = polyDescriptor;
  this.e5j_1 = 0;
  this.f5j_1 = false;
}
protoOf(JsonTreeDecoder).t = function () {
  return this.c5j_1;
};
protoOf(JsonTreeDecoder).y2g = function (descriptor) {
  while (this.e5j_1 < descriptor.n2e()) {
    var _unary__edvuaz = this.e5j_1;
    this.e5j_1 = _unary__edvuaz + 1 | 0;
    var name = this.j2u(descriptor, _unary__edvuaz);
    var index = this.e5j_1 - 1 | 0;
    this.f5j_1 = false;
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.t();
    if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).c2(name)) {
      tmp_0 = true;
    } else {
      tmp_0 = absenceIsNull(this, descriptor, index);
    }
    if (tmp_0) {
      tmp = !this.g5i_1.u5b_1 || !coerceInputValue_0(this, descriptor, index, name);
    } else {
      tmp = false;
    }
    if (tmp) {
      return index;
    }
  }
  return -1;
};
protoOf(JsonTreeDecoder).s2f = function () {
  return !this.f5j_1 && protoOf(AbstractJsonTreeDecoder).s2f.call(this);
};
protoOf(JsonTreeDecoder).k2u = function (descriptor, index) {
  var strategy = namingStrategy(descriptor, this.f5c());
  var baseName = descriptor.p2e(index);
  if (strategy == null) {
    if (!this.g5i_1.y5b_1)
      return baseName;
    if (this.t().f2().u1(baseName))
      return baseName;
  }
  var deserializationNamesMap_0 = deserializationNamesMap(this.f5c(), descriptor);
  // Inline function 'kotlin.collections.find' call
  var tmp0 = this.t().f2();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (deserializationNamesMap_0.e2(element) === index) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_safe_receiver = tmp$ret$1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var fallbackName = strategy == null ? null : strategy.x5e(descriptor, index, baseName);
  return fallbackName == null ? baseName : fallbackName;
};
protoOf(JsonTreeDecoder).j5i = function (tag) {
  return getValue(this.t(), tag);
};
protoOf(JsonTreeDecoder).h2g = function (descriptor) {
  if (descriptor === this.d5j_1) {
    var tmp = this.f5c();
    var tmp2 = this.i5i();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = this.d5j_1.v2d();
    if (!(tmp2 instanceof JsonObject)) {
      var tmp_0 = getKClass(JsonObject).sa();
      var tmp_1 = getKClassFromExpression(tmp2).sa();
      var tmp$ret$0 = this.q2u();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return new JsonTreeDecoder(tmp, tmp2, this.f5i_1, this.d5j_1);
  }
  return protoOf(AbstractJsonTreeDecoder).h2g.call(this, descriptor);
};
protoOf(JsonTreeDecoder).i2g = function (descriptor) {
  var tmp;
  if (this.g5i_1.o5b_1) {
    tmp = true;
  } else {
    var tmp_0 = descriptor.l2e();
    tmp = tmp_0 instanceof PolymorphicKind;
  }
  if (tmp)
    return Unit_instance;
  var strategy = namingStrategy(descriptor, this.f5c());
  var tmp_1;
  if (strategy == null && !this.g5i_1.y5b_1) {
    tmp_1 = jsonCachedSerialNames(descriptor);
  } else if (!(strategy == null)) {
    tmp_1 = deserializationNamesMap(this.f5c(), descriptor).f2();
  } else {
    var tmp_2 = jsonCachedSerialNames(descriptor);
    var tmp0_safe_receiver = get_schemaCache(this.f5c()).i5h(descriptor, get_JsonDeserializationNamesKey());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f2();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
    tmp_1 = plus_0(tmp_2, tmp$ret$0);
  }
  var names = tmp_1;
  var _iterator__ex2g4s = this.t().f2().j();
  while (_iterator__ex2g4s.k()) {
    var key = _iterator__ex2g4s.l();
    if (!names.u1(key) && !(key === this.f5i_1)) {
      throw UnknownKeyException(key, this.t().toString());
    }
  }
};
function JsonTreeListDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.m5j_1 = value;
  this.n5j_1 = this.m5j_1.m();
  this.o5j_1 = -1;
}
protoOf(JsonTreeListDecoder).t = function () {
  return this.m5j_1;
};
protoOf(JsonTreeListDecoder).k2u = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListDecoder).j5i = function (tag) {
  return this.m5j_1.o(toInt(tag));
};
protoOf(JsonTreeListDecoder).y2g = function (descriptor) {
  while (this.o5j_1 < (this.n5j_1 - 1 | 0)) {
    this.o5j_1 = this.o5j_1 + 1 | 0;
    return this.o5j_1;
  }
  return -1;
};
function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
  this.v5j_1 = value;
  this.e2v('primitive');
}
protoOf(JsonPrimitiveDecoder).t = function () {
  return this.v5j_1;
};
protoOf(JsonPrimitiveDecoder).y2g = function (descriptor) {
  return 0;
};
protoOf(JsonPrimitiveDecoder).j5i = function (tag) {
  // Inline function 'kotlin.require' call
  if (!(tag === 'primitive')) {
    var message = "This input can only handle primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.v5j_1;
};
function JsonTreeMapDecoder(json, value) {
  JsonTreeDecoder.call(this, json, value);
  this.g5k_1 = value;
  this.h5k_1 = toList(this.g5k_1.f2());
  this.i5k_1 = imul(this.h5k_1.m(), 2);
  this.j5k_1 = -1;
}
protoOf(JsonTreeMapDecoder).t = function () {
  return this.g5k_1;
};
protoOf(JsonTreeMapDecoder).k2u = function (descriptor, index) {
  var i = index / 2 | 0;
  return this.h5k_1.o(i);
};
protoOf(JsonTreeMapDecoder).y2g = function (descriptor) {
  while (this.j5k_1 < (this.i5k_1 - 1 | 0)) {
    this.j5k_1 = this.j5k_1 + 1 | 0;
    return this.j5k_1;
  }
  return -1;
};
protoOf(JsonTreeMapDecoder).j5i = function (tag) {
  return (this.j5k_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.g5k_1, tag);
};
protoOf(JsonTreeMapDecoder).i2g = function (descriptor) {
};
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.u2c())).g2g(deserializer);
}
var WriteMode_OBJ_instance;
var WriteMode_LIST_instance;
var WriteMode_MAP_instance;
var WriteMode_POLY_OBJ_instance;
function values() {
  return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var WriteMode_entriesInitialized;
function WriteMode_initEntries() {
  if (WriteMode_entriesInitialized)
    return Unit_instance;
  WriteMode_entriesInitialized = true;
  WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
var $ENTRIES;
function WriteMode(name, ordinal, begin, end) {
  Enum.call(this, name, ordinal);
  this.v5h_1 = begin;
  this.w5h_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.l2e();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.s2e(0), _this__u8e3s4.w2g());
        var keyKind = keyDescriptor.l2e();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = WriteMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.c5a_1.q5b_1) {
            tmp_0 = WriteMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = WriteMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.l2e(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.m2e()) {
    tmp = carrierDescriptor(_this__u8e3s4.s2e(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function WriteMode_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_OBJ_instance;
}
function WriteMode_LIST_getInstance() {
  WriteMode_initEntries();
  return WriteMode_LIST_instance;
}
function WriteMode_MAP_getInstance() {
  WriteMode_initEntries();
  return WriteMode_MAP_instance;
}
function WriteMode_POLY_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_POLY_OBJ_instance;
}
function appendEscape($this, lastPosition, current) {
  $this.k5k(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.k5k(lastPosition, currentPosition);
  var result = $this.s5a_1.toString();
  $this.s5a_1.oc(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.r5a_1);
  $this.r5a_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.l5k(), $this.p5a_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.m5k(currentPosition);
  if (currentPosition === -1) {
    $this.t5e('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.l5k();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.l5k(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.t5e("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.s5a_1.c8(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.p5a_1 = startPos;
    $this.n5k();
    if (($this.p5a_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.t5e('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.p5a_1);
  }
  $this.s5a_1.c8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
  return startPos + 4 | 0;
}
function fromHexChar($this, source, currentPosition) {
  var character = charSequenceGet(source, currentPosition);
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
  } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
    // Inline function 'kotlin.code' call
    var tmp_1 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
    // Inline function 'kotlin.code' call
    var tmp_2 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(65);
    tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
  } else {
    $this.t5e("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.m5k(start);
  if (current >= charSequenceLength($this.l5k()) || current === -1) {
    $this.t5e('EOF');
  }
  var tmp = $this.l5k();
  var _unary__edvuaz = current;
  current = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = charSequenceGet(tmp, _unary__edvuaz);
  var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
  var tmp_0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(116);
  if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
    consumeBooleanLiteral($this, 'rue', current);
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(102);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
      consumeBooleanLiteral($this, 'alse', current);
      tmp_0 = false;
    } else {
      $this.t5e("Expected valid boolean literal prefix, but had '" + $this.y5f() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.l5k()) - current | 0) < literalSuffix.length) {
    $this.t5e('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.l5k(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.t5e("Expected valid boolean literal prefix, but had '" + $this.y5f() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.p5a_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -exponentAccumulator.i3();
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = exponentAccumulator.i3();
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function AbstractJsonLexer() {
  this.p5a_1 = 0;
  this.q5a_1 = new JsonPath();
  this.r5a_1 = null;
  this.s5a_1 = StringBuilder_init_$Create$();
}
protoOf(AbstractJsonLexer).n5k = function () {
};
protoOf(AbstractJsonLexer).l5h = function () {
  var current = this.o5k();
  var source = this.l5k();
  if (current >= charSequenceLength(source) || current === -1)
    return false;
  if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
    this.p5a_1 = this.p5a_1 + 1 | 0;
    return true;
  }
  return false;
};
protoOf(AbstractJsonLexer).p5k = function (c) {
  return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
};
protoOf(AbstractJsonLexer).t5a = function () {
  var nextToken = this.a5g();
  if (!(nextToken === 10)) {
    this.t5e('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.l5k(), this.p5a_1 - 1 | 0)) + ' instead');
  }
};
protoOf(AbstractJsonLexer).u5f = function (expected) {
  var token = this.a5g();
  if (!(token === expected)) {
    this.q5k(expected);
  }
  return token;
};
protoOf(AbstractJsonLexer).r5k = function (expected) {
  if (this.p5a_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
      var snapshot = this.p5a_1;
      try {
        this.p5a_1 = this.p5a_1 - 1 | 0;
        tmp$ret$1 = this.y5f();
        break $l$block;
      }finally {
        this.p5a_1 = snapshot;
      }
    }
    var inputLiteral = tmp$ret$1;
    if (inputLiteral === 'null') {
      this.s5e("Expected string literal but 'null' literal was found", this.p5a_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
    }
  }
  this.q5k(charToTokenClass(expected));
};
protoOf(AbstractJsonLexer).s5k = function (expectedToken, wasConsumed) {
  var expected = tokenDescription(expectedToken);
  var position = wasConsumed ? this.p5a_1 - 1 | 0 : this.p5a_1;
  var s = this.p5a_1 === charSequenceLength(this.l5k()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.l5k(), position));
  this.t5e('Expected ' + expected + ", but had '" + s + "' instead", position);
};
protoOf(AbstractJsonLexer).q5k = function (expectedToken, wasConsumed, $super) {
  wasConsumed = wasConsumed === VOID ? true : wasConsumed;
  return $super === VOID ? this.s5k(expectedToken, wasConsumed) : $super.s5k.call(this, expectedToken, wasConsumed);
};
protoOf(AbstractJsonLexer).v5f = function () {
  var source = this.l5k();
  var cpos = this.p5a_1;
  $l$loop_0: while (true) {
    cpos = this.m5k(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var ch = charSequenceGet(source, cpos);
    if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
      cpos = cpos + 1 | 0;
      continue $l$loop_0;
    }
    this.p5a_1 = cpos;
    return charToTokenClass(ch);
  }
  this.p5a_1 = cpos;
  return 10;
};
protoOf(AbstractJsonLexer).m5h = function (doConsume) {
  var current = this.o5k();
  current = this.m5k(current);
  var len = charSequenceLength(this.l5k()) - current | 0;
  if (len < 4 || current === -1)
    return false;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charCodeAt('null', i) === charSequenceGet(this.l5k(), current + i | 0)))
        return false;
    }
     while (inductionVariable <= 3);
  if (len > 4 && charToTokenClass(charSequenceGet(this.l5k(), current + 4 | 0)) === 0)
    return false;
  if (doConsume) {
    this.p5a_1 = current + 4 | 0;
  }
  return true;
};
protoOf(AbstractJsonLexer).x5h = function (doConsume, $super) {
  doConsume = doConsume === VOID ? true : doConsume;
  return $super === VOID ? this.m5h(doConsume) : $super.m5h.call(this, doConsume);
};
protoOf(AbstractJsonLexer).n5h = function (isLenient) {
  var token = this.v5f();
  var tmp;
  if (isLenient) {
    if (!(token === 1) && !(token === 0))
      return null;
    tmp = this.y5f();
  } else {
    if (!(token === 1))
      return null;
    tmp = this.x5f();
  }
  var string = tmp;
  this.r5a_1 = string;
  return string;
};
protoOf(AbstractJsonLexer).t5k = function () {
  this.r5a_1 = null;
};
protoOf(AbstractJsonLexer).u5k = function (startPos, endPos) {
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.l5k();
  return toString(charSequenceSubSequence(this_0, startPos, endPos));
};
protoOf(AbstractJsonLexer).x5f = function () {
  if (!(this.r5a_1 == null)) {
    return takePeeked(this);
  }
  return this.q5h();
};
protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
  var currentPosition = current;
  var lastPosition = startPosition;
  var char = charSequenceGet(source, currentPosition);
  var usedAppend = false;
  while (!(char === _Char___init__impl__6a9atx(34))) {
    if (char === _Char___init__impl__6a9atx(92)) {
      usedAppend = true;
      currentPosition = this.m5k(appendEscape(this, lastPosition, currentPosition));
      if (currentPosition === -1) {
        this.t5e('Unexpected EOF', currentPosition);
      }
      lastPosition = currentPosition;
    } else {
      currentPosition = currentPosition + 1 | 0;
      if (currentPosition >= charSequenceLength(source)) {
        usedAppend = true;
        this.k5k(lastPosition, currentPosition);
        currentPosition = this.m5k(currentPosition);
        if (currentPosition === -1) {
          this.t5e('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
    }
    char = charSequenceGet(source, currentPosition);
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.u5k(lastPosition, currentPosition);
  } else {
    tmp = decodedString(this, lastPosition, currentPosition);
  }
  var string = tmp;
  this.p5a_1 = currentPosition + 1 | 0;
  return string;
};
protoOf(AbstractJsonLexer).r5h = function () {
  var result = this.y5f();
  if (result === 'null' && wasUnquotedString(this)) {
    this.t5e("Unexpected 'null' value instead of string literal");
  }
  return result;
};
protoOf(AbstractJsonLexer).y5f = function () {
  if (!(this.r5a_1 == null)) {
    return takePeeked(this);
  }
  var current = this.o5k();
  if (current >= charSequenceLength(this.l5k()) || current === -1) {
    this.t5e('EOF', current);
  }
  var token = charToTokenClass(charSequenceGet(this.l5k(), current));
  if (token === 1) {
    return this.x5f();
  }
  if (!(token === 0)) {
    this.t5e('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.l5k(), current)));
  }
  var usedAppend = false;
  while (charToTokenClass(charSequenceGet(this.l5k(), current)) === 0) {
    current = current + 1 | 0;
    if (current >= charSequenceLength(this.l5k())) {
      usedAppend = true;
      this.k5k(this.p5a_1, current);
      var eof = this.m5k(current);
      if (eof === -1) {
        this.p5a_1 = current;
        return decodedString(this, 0, 0);
      } else {
        current = eof;
      }
    }
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.u5k(this.p5a_1, current);
  } else {
    tmp = decodedString(this, this.p5a_1, current);
  }
  var result = tmp;
  this.p5a_1 = current;
  return result;
};
protoOf(AbstractJsonLexer).k5k = function (fromIndex, toIndex) {
  this.s5a_1.ic(this.l5k(), fromIndex, toIndex);
};
protoOf(AbstractJsonLexer).p5h = function (allowLenientStrings) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var tokenStack = ArrayList_init_$Create$();
  var lastToken = this.v5f();
  if (!(lastToken === 8) && !(lastToken === 6)) {
    this.y5f();
    return Unit_instance;
  }
  $l$loop: while (true) {
    lastToken = this.v5f();
    if (lastToken === 1) {
      if (allowLenientStrings)
        this.y5f();
      else
        this.q5h();
      continue $l$loop;
    }
    var tmp0_subject = lastToken;
    if (tmp0_subject === 8 || tmp0_subject === 6) {
      tokenStack.e(lastToken);
    } else if (tmp0_subject === 9) {
      if (!(last(tokenStack) === 8))
        throw JsonDecodingException_0(this.p5a_1, 'found ] instead of } at path: ' + this.q5a_1.toString(), this.l5k());
      removeLast(tokenStack);
    } else if (tmp0_subject === 7) {
      if (!(last(tokenStack) === 6))
        throw JsonDecodingException_0(this.p5a_1, 'found } instead of ] at path: ' + this.q5a_1.toString(), this.l5k());
      removeLast(tokenStack);
    } else if (tmp0_subject === 10) {
      this.t5e('Unexpected end of input due to malformed JSON during ignoring unknown keys');
    }
    this.a5g();
    if (tokenStack.m() === 0)
      return Unit_instance;
  }
};
protoOf(AbstractJsonLexer).toString = function () {
  return "JsonReader(source='" + toString(this.l5k()) + "', currentPosition=" + this.p5a_1 + ')';
};
protoOf(AbstractJsonLexer).o5h = function (key) {
  var processed = this.u5k(0, this.p5a_1);
  var lastIndexOf_0 = lastIndexOf(processed, key);
  this.s5e("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
};
protoOf(AbstractJsonLexer).s5e = function (message, position, hint) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(hint) === 0) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  var hintMessage = tmp;
  throw JsonDecodingException_0(position, message + ' at path: ' + this.q5a_1.g5f() + hintMessage, this.l5k());
};
protoOf(AbstractJsonLexer).t5e = function (message, position, hint, $super) {
  position = position === VOID ? this.p5a_1 : position;
  hint = hint === VOID ? '' : hint;
  return $super === VOID ? this.s5e(message, position, hint) : $super.s5e.call(this, message, position, hint);
};
protoOf(AbstractJsonLexer).r5c = function () {
  var current = this.o5k();
  current = this.m5k(current);
  if (current >= charSequenceLength(this.l5k()) || current === -1) {
    this.t5e('EOF');
  }
  var tmp;
  if (charSequenceGet(this.l5k(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    if (current === charSequenceLength(this.l5k())) {
      this.t5e('EOF');
    }
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var accumulator = new Long(0, 0);
  var exponentAccumulator = new Long(0, 0);
  var isNegative = false;
  var isExponentPositive = false;
  var hasExponent = false;
  var start = current;
  $l$loop_4: while (!(current === charSequenceLength(this.l5k()))) {
    var ch = charSequenceGet(this.l5k(), current);
    if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
      if (current === start) {
        this.t5e('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
      }
      isExponentPositive = true;
      hasExponent = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
      if (current === start) {
        this.t5e("Unexpected symbol '-' in numeric literal");
      }
      isExponentPositive = false;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
      if (current === start) {
        this.t5e("Unexpected symbol '+' in numeric literal");
      }
      isExponentPositive = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45)) {
      if (!(current === start)) {
        this.t5e("Unexpected symbol '-' in numeric literal");
      }
      isNegative = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    var token = charToTokenClass(ch);
    if (!(token === 0))
      break $l$loop_4;
    current = current + 1 | 0;
    var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
    if (!(0 <= digit ? digit <= 9 : false)) {
      this.t5e("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
    }
    if (hasExponent) {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.plus' call
      exponentAccumulator = exponentAccumulator.t2(toLong(10)).r2(toLong(digit));
      continue $l$loop_4;
    }
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.minus' call
    accumulator = accumulator.t2(toLong(10)).s2(toLong(digit));
    if (accumulator.y(new Long(0, 0)) > 0) {
      this.t5e('Numeric value overflow');
    }
  }
  var hasChars = !(current === start);
  if (start === current || (isNegative && start === (current - 1 | 0))) {
    this.t5e('Expected numeric literal');
  }
  if (hasQuotation) {
    if (!hasChars) {
      this.t5e('EOF');
    }
    if (!(charSequenceGet(this.l5k(), current) === _Char___init__impl__6a9atx(34))) {
      this.t5e('Expected closing quotation mark');
    }
    current = current + 1 | 0;
  }
  this.p5a_1 = current;
  if (hasExponent) {
    var doubleAccumulator = accumulator.i3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
    if (doubleAccumulator > (new Long(-1, 2147483647)).i3() || doubleAccumulator < (new Long(0, -2147483648)).i3()) {
      this.t5e('Numeric value overflow');
    }
    // Inline function 'kotlin.math.floor' call
    if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
      this.t5e("Can't convert " + doubleAccumulator + ' to Long');
    }
    accumulator = numberToLong(doubleAccumulator);
  }
  var tmp_0;
  if (isNegative) {
    tmp_0 = accumulator;
  } else if (!accumulator.equals(new Long(0, -2147483648))) {
    tmp_0 = accumulator.y2();
  } else {
    this.t5e('Numeric value overflow');
  }
  return tmp_0;
};
protoOf(AbstractJsonLexer).y5h = function () {
  var current = this.o5k();
  if (current === charSequenceLength(this.l5k())) {
    this.t5e('EOF');
  }
  var tmp;
  if (charSequenceGet(this.l5k(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var result = consumeBoolean2(this, current);
  if (hasQuotation) {
    if (this.p5a_1 === charSequenceLength(this.l5k())) {
      this.t5e('EOF');
    }
    if (!(charSequenceGet(this.l5k(), this.p5a_1) === _Char___init__impl__6a9atx(34))) {
      this.t5e('Expected closing quotation mark');
    }
    this.p5a_1 = this.p5a_1 + 1 | 0;
  }
  return result;
};
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().w5k_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().v5k_1[c] : _Char___init__impl__6a9atx(0);
}
function initEscape($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 31)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2ESC($this, i, _Char___init__impl__6a9atx(117));
    }
     while (inductionVariable <= 31);
  initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
  initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
  initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
  initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
  initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
  initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
  initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
  initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
}
function initCharToToken($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 32)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2TC($this, i, 127);
    }
     while (inductionVariable <= 32);
  initC2TC($this, 9, 3);
  initC2TC($this, 10, 3);
  initC2TC($this, 13, 3);
  initC2TC($this, 32, 3);
  initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
  initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
  initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
  initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
  initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
  initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
  initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
  initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
}
function initC2ESC($this, c, esc) {
  if (!(esc === _Char___init__impl__6a9atx(117))) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
    $this.v5k_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.w5k_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
function CharMappings() {
  CharMappings_instance = this;
  this.v5k_1 = charArray(117);
  this.w5k_1 = new Int8Array(126);
  initEscape(this);
  initCharToToken(this);
}
var CharMappings_instance;
function CharMappings_getInstance() {
  if (CharMappings_instance == null)
    new CharMappings();
  return CharMappings_instance;
}
function StringJsonLexerWithComments(source) {
  StringJsonLexer.call(this, source);
}
protoOf(StringJsonLexerWithComments).a5g = function () {
  var source = this.l5k();
  var cpos = this.o5k();
  if (cpos >= source.length || cpos === -1)
    return 10;
  this.p5a_1 = cpos + 1 | 0;
  return charToTokenClass(charCodeAt(source, cpos));
};
protoOf(StringJsonLexerWithComments).w5f = function () {
  var current = this.o5k();
  if (current >= this.l5k().length || current === -1)
    return false;
  return this.p5k(charCodeAt(this.l5k(), current));
};
protoOf(StringJsonLexerWithComments).k5h = function (expected) {
  var source = this.l5k();
  var current = this.o5k();
  if (current >= source.length || current === -1) {
    this.p5a_1 = -1;
    this.r5k(expected);
  }
  var c = charCodeAt(source, current);
  this.p5a_1 = current + 1 | 0;
  if (c === expected)
    return Unit_instance;
  else {
    this.r5k(expected);
  }
};
protoOf(StringJsonLexerWithComments).v5f = function () {
  var source = this.l5k();
  var cpos = this.o5k();
  if (cpos >= source.length || cpos === -1)
    return 10;
  this.p5a_1 = cpos;
  return charToTokenClass(charCodeAt(source, cpos));
};
protoOf(StringJsonLexerWithComments).o5k = function () {
  var current = this.p5a_1;
  if (current === -1)
    return current;
  var source = this.l5k();
  $l$loop_1: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop_1;
    }
    if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
      var tmp0_subject = charCodeAt(source, current + 1 | 0);
      if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
        current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
        if (current === -1) {
          current = source.length;
        } else {
          current = current + 1 | 0;
        }
        continue $l$loop_1;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
        current = indexOf(source, '*/', current + 2 | 0);
        if (current === -1) {
          this.p5a_1 = source.length;
          this.t5e('Expected end of the block comment: "*/", but had EOF instead');
        } else {
          current = current + 2 | 0;
        }
        continue $l$loop_1;
      }
    }
    break $l$loop_1;
  }
  this.p5a_1 = current;
  return current;
};
function StringJsonLexer(source) {
  AbstractJsonLexer.call(this);
  this.g5l_1 = source;
}
protoOf(StringJsonLexer).l5k = function () {
  return this.g5l_1;
};
protoOf(StringJsonLexer).m5k = function (position) {
  return position < this.l5k().length ? position : -1;
};
protoOf(StringJsonLexer).a5g = function () {
  var source = this.l5k();
  var cpos = this.p5a_1;
  $l$loop: while (!(cpos === -1) && cpos < source.length) {
    var _unary__edvuaz = cpos;
    cpos = _unary__edvuaz + 1 | 0;
    var c = charCodeAt(source, _unary__edvuaz);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    this.p5a_1 = cpos;
    return charToTokenClass(c);
  }
  this.p5a_1 = source.length;
  return 10;
};
protoOf(StringJsonLexer).w5f = function () {
  var current = this.p5a_1;
  if (current === -1)
    return false;
  var source = this.l5k();
  $l$loop: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop;
    }
    this.p5a_1 = current;
    return this.p5k(c);
  }
  this.p5a_1 = current;
  return false;
};
protoOf(StringJsonLexer).o5k = function () {
  var current = this.p5a_1;
  if (current === -1)
    return current;
  var source = this.l5k();
  $l$loop: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop;
    }
  }
  this.p5a_1 = current;
  return current;
};
protoOf(StringJsonLexer).k5h = function (expected) {
  if (this.p5a_1 === -1) {
    this.r5k(expected);
  }
  var source = this.l5k();
  var cpos = this.p5a_1;
  $l$loop: while (cpos < source.length) {
    var _unary__edvuaz = cpos;
    cpos = _unary__edvuaz + 1 | 0;
    var c = charCodeAt(source, _unary__edvuaz);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    this.p5a_1 = cpos;
    if (c === expected)
      return Unit_instance;
    this.r5k(expected);
  }
  this.p5a_1 = -1;
  this.r5k(expected);
};
protoOf(StringJsonLexer).q5h = function () {
  this.k5h(_Char___init__impl__6a9atx(34));
  var current = this.p5a_1;
  var closingQuote = indexOf_0(this.l5k(), _Char___init__impl__6a9atx(34), current);
  if (closingQuote === -1) {
    this.y5f();
    this.s5k(1, false);
  }
  var inductionVariable = current;
  if (inductionVariable < closingQuote)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (charCodeAt(this.l5k(), i) === _Char___init__impl__6a9atx(92)) {
        return this.consumeString2(this.l5k(), this.p5a_1, i);
      }
    }
     while (inductionVariable < closingQuote);
  this.p5a_1 = closingQuote + 1 | 0;
  return substring(this.l5k(), current, closingQuote);
};
protoOf(StringJsonLexer).s5h = function (keyToMatch, isLenient) {
  var positionSnapshot = this.p5a_1;
  try {
    if (!(this.a5g() === 6))
      return null;
    var firstKey = this.n5h(isLenient);
    if (!(firstKey === keyToMatch))
      return null;
    this.t5k();
    if (!(this.a5g() === 5))
      return null;
    return this.n5h(isLenient);
  }finally {
    this.p5a_1 = positionSnapshot;
    this.t5k();
  }
};
function StringJsonLexer_0(json, source) {
  return !json.c5a_1.c5c_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.e5a_1;
}
function JsonToStringWriter() {
  this.f5a_1 = StringBuilder_init_$Create$_0(128);
}
protoOf(JsonToStringWriter).x5d = function (value) {
  this.f5a_1.mc(value);
};
protoOf(JsonToStringWriter).r5d = function (char) {
  this.f5a_1.c8(char);
};
protoOf(JsonToStringWriter).t5d = function (text) {
  this.f5a_1.b8(text);
};
protoOf(JsonToStringWriter).d5e = function (text) {
  printQuoted(this.f5a_1, text);
};
protoOf(JsonToStringWriter).g5a = function () {
  this.f5a_1.pc();
};
protoOf(JsonToStringWriter).toString = function () {
  return this.f5a_1.toString();
};
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(defer$1).h2e = get_isNullable;
protoOf(defer$1).m2e = get_isInline;
protoOf(defer$1).o2e = get_annotations;
protoOf(PolymorphismValidator).a2x = contextual;
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Tombstone_instance = new Tombstone();
//endregion
//region block: exports
export {
  JsonElementSerializer_getInstance as JsonElementSerializer_getInstancewor8ypl63wny,
  JsonClassDiscriminator as JsonClassDiscriminator3irfencugy52m,
  Json_0 as Jsonsmkyu9xjl7fv,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
