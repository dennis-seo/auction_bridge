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
  this.u5a_1 = configuration;
  this.v5a_1 = serializersModule;
  this.w5a_1 = new DescriptorSchemaCache();
}
protoOf(Json).o2h = function () {
  return this.v5a_1;
};
protoOf(Json).p2e = function (serializer, value) {
  var result = new JsonToStringWriter();
  try {
    encodeByWriter(this, result, serializer, value);
    return result.toString();
  }finally {
    result.y5a();
  }
};
protoOf(Json).q2e = function (deserializer, string) {
  var lexer = StringJsonLexer_0(this, string);
  var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.m2d(), null);
  var result = input.y2g(deserializer);
  lexer.l5b();
  return result;
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.e5c();
  return new JsonImpl(conf, builder.d5c_1);
}
function JsonBuilder(json) {
  this.m5b_1 = json.u5a_1.f5c_1;
  this.n5b_1 = json.u5a_1.k5c_1;
  this.o5b_1 = json.u5a_1.g5c_1;
  this.p5b_1 = json.u5a_1.h5c_1;
  this.q5b_1 = json.u5a_1.j5c_1;
  this.r5b_1 = json.u5a_1.l5c_1;
  this.s5b_1 = json.u5a_1.m5c_1;
  this.t5b_1 = json.u5a_1.o5c_1;
  this.u5b_1 = json.u5a_1.v5c_1;
  this.v5b_1 = json.u5a_1.q5c_1;
  this.w5b_1 = json.u5a_1.r5c_1;
  this.x5b_1 = json.u5a_1.s5c_1;
  this.y5b_1 = json.u5a_1.t5c_1;
  this.z5b_1 = json.u5a_1.u5c_1;
  this.a5c_1 = json.u5a_1.p5c_1;
  this.b5c_1 = json.u5a_1.i5c_1;
  this.c5c_1 = json.u5a_1.n5c_1;
  this.d5c_1 = json.o2h();
}
protoOf(JsonBuilder).e5c = function () {
  if (this.c5c_1) {
    // Inline function 'kotlin.require' call
    if (!(this.t5b_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.u5b_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
      var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  if (!this.q5b_1) {
    // Inline function 'kotlin.require' call
    if (!(this.r5b_1 === '    ')) {
      var message_1 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  } else if (!(this.r5b_1 === '    ')) {
    var tmp0 = this.r5b_1;
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
      var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.r5b_1;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
  }
  return new JsonConfiguration(this.m5b_1, this.o5b_1, this.p5b_1, this.b5c_1, this.q5b_1, this.n5b_1, this.r5b_1, this.s5b_1, this.c5c_1, this.t5b_1, this.a5c_1, this.v5b_1, this.w5b_1, this.x5b_1, this.y5b_1, this.z5b_1, this.u5b_1);
};
function validateConfiguration($this) {
  if (equals($this.o2h(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new PolymorphismValidator($this.u5a_1.n5c_1, $this.u5a_1.o5c_1);
  $this.o2h().h2x(collector);
}
function JsonImpl(configuration, module_0) {
  Json.call(this, configuration, module_0);
  validateConfiguration(this);
}
function JsonClassDiscriminator(discriminator) {
  this.w5c_1 = discriminator;
}
protoOf(JsonClassDiscriminator).equals = function (other) {
  if (!(other instanceof JsonClassDiscriminator))
    return false;
  var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
  if (!(this.w5c_1 === tmp0_other_with_cast.w5c_1))
    return false;
  return true;
};
protoOf(JsonClassDiscriminator).hashCode = function () {
  return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.w5c_1);
};
protoOf(JsonClassDiscriminator).toString = function () {
  return '@kotlinx.serialization.json.JsonClassDiscriminator(' + 'discriminator=' + this.w5c_1 + ')';
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
  this.f5c_1 = encodeDefaults;
  this.g5c_1 = ignoreUnknownKeys;
  this.h5c_1 = isLenient;
  this.i5c_1 = allowStructuredMapKeys;
  this.j5c_1 = prettyPrint;
  this.k5c_1 = explicitNulls;
  this.l5c_1 = prettyPrintIndent;
  this.m5c_1 = coerceInputValues;
  this.n5c_1 = useArrayPolymorphism;
  this.o5c_1 = classDiscriminator;
  this.p5c_1 = allowSpecialFloatingPointValues;
  this.q5c_1 = useAlternativeNames;
  this.r5c_1 = namingStrategy;
  this.s5c_1 = decodeEnumsCaseInsensitive;
  this.t5c_1 = allowTrailingComma;
  this.u5c_1 = allowComments;
  this.v5c_1 = classDiscriminatorMode;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.f5c_1 + ', ignoreUnknownKeys=' + this.g5c_1 + ', isLenient=' + this.h5c_1 + ', ' + ('allowStructuredMapKeys=' + this.i5c_1 + ', prettyPrint=' + this.j5c_1 + ', explicitNulls=' + this.k5c_1 + ', ') + ("prettyPrintIndent='" + this.l5c_1 + "', coerceInputValues=" + this.m5c_1 + ', useArrayPolymorphism=' + this.n5c_1 + ', ') + ("classDiscriminator='" + this.o5c_1 + "', allowSpecialFloatingPointValues=" + this.p5c_1 + ', ') + ('useAlternativeNames=' + this.q5c_1 + ', namingStrategy=' + toString_0(this.r5c_1) + ', decodeEnumsCaseInsensitive=' + this.s5c_1 + ', ') + ('allowTrailingComma=' + this.t5c_1 + ', allowComments=' + this.u5c_1 + ', classDiscriminatorMode=' + this.v5c_1.toString() + ')');
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
  return this.z5c();
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
  this.a5d_1 = content;
}
protoOf(JsonObject).equals = function (other) {
  return equals(this.a5d_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.a5d_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.a5d_1.r();
  return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
};
protoOf(JsonObject).y30 = function (key) {
  return this.a5d_1.c2(key);
};
protoOf(JsonObject).c2 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.y30((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).pd = function (key) {
  return this.a5d_1.e2(key);
};
protoOf(JsonObject).e2 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.pd((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).p = function () {
  return this.a5d_1.p();
};
protoOf(JsonObject).r = function () {
  return this.a5d_1.r();
};
protoOf(JsonObject).f2 = function () {
  return this.a5d_1.f2();
};
protoOf(JsonObject).m = function () {
  return this.a5d_1.m();
};
protoOf(JsonObject).g2 = function () {
  return this.a5d_1.g2();
};
function Companion_2() {
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function JsonArray(content) {
  JsonElement.call(this);
  this.b5d_1 = content;
}
protoOf(JsonArray).equals = function (other) {
  return equals(this.b5d_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.b5d_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.b5d_1, ',', '[', ']');
};
protoOf(JsonArray).c5d = function (element) {
  return this.b5d_1.u1(element);
};
protoOf(JsonArray).u1 = function (element) {
  if (!(element instanceof JsonElement))
    return false;
  return this.c5d(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).d5d = function (elements) {
  return this.b5d_1.v1(elements);
};
protoOf(JsonArray).v1 = function (elements) {
  return this.d5d(elements);
};
protoOf(JsonArray).o = function (index) {
  return this.b5d_1.o(index);
};
protoOf(JsonArray).p = function () {
  return this.b5d_1.p();
};
protoOf(JsonArray).j = function () {
  return this.b5d_1.j();
};
protoOf(JsonArray).w1 = function (index) {
  return this.b5d_1.w1(index);
};
protoOf(JsonArray).x1 = function (fromIndex, toIndex) {
  return this.b5d_1.x1(fromIndex, toIndex);
};
protoOf(JsonArray).m = function () {
  return this.b5d_1.m();
};
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.e5d_1 = 'null';
}
protoOf(JsonNull).z5c = function () {
  return this.e5d_1;
};
protoOf(JsonNull).f5d = function () {
  return JsonNullSerializer_getInstance();
};
protoOf(JsonNull).o2p = function (typeParamsSerializers) {
  return this.f5d();
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
  this.g5d_1 = isString;
  this.h5d_1 = coerceToInlineType;
  this.i5d_1 = toString(body);
  if (!(this.h5d_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.h5d_1.e2f()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).z5c = function () {
  return this.i5d_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.g5d_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.i5d_1);
    tmp = this_0.toString();
  } else {
    tmp = this.i5d_1;
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
  if (!(this.g5d_1 === other.g5d_1))
    return false;
  if (!(this.i5d_1 === other.i5d_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.g5d_1);
  result = imul(31, result) + getStringHashCode(this.i5d_1) | 0;
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
  return toBooleanStrictOrNull_0(_this__u8e3s4.z5c());
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.z5c())).j5d();
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
    throw NumberFormatException_init_$Create$(_this__u8e3s4.z5c() + ' is not an Int');
  return result.d1();
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.z5c())).j5d();
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
  var this_0 = _this__u8e3s4.z5c();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.z5c());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.z5c();
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
  $this$buildSerialDescriptor.x2d('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.x2d('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.x2d('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.x2d('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.x2d('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().k5d_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().l5d_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().m5d_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().n5d_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().o5d_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.p5d_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).m2d = function () {
  return this.p5d_1;
};
protoOf(JsonElementSerializer).q5d = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.r2i(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.r2i(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.r2i(JsonArraySerializer_getInstance(), value);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
};
protoOf(JsonElementSerializer).n2d = function (encoder, value) {
  return this.q5d(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonElementSerializer).o2d = function (decoder) {
  var input = asJsonDecoder(decoder);
  return input.y5c();
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
  this.k5d_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).m2d = function () {
  return this.k5d_1;
};
protoOf(JsonPrimitiveSerializer).r5d = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.r2i(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.r2i(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).n2d = function (encoder, value) {
  return this.r5d(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
protoOf(JsonPrimitiveSerializer).o2d = function (decoder) {
  var result = asJsonDecoder(decoder).y5c();
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
  this.l5d_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).m2d = function () {
  return this.l5d_1;
};
protoOf(JsonNullSerializer).s5d = function (encoder, value) {
  verify(encoder);
  encoder.u2h();
};
protoOf(JsonNullSerializer).n2d = function (encoder, value) {
  return this.s5d(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
protoOf(JsonNullSerializer).o2d = function (decoder) {
  verify_0(decoder);
  if (decoder.k2g()) {
    throw new JsonDecodingException("Expected 'null' literal");
  }
  decoder.l2g();
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
  this.m5d_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).m2d = function () {
  return this.m5d_1;
};
protoOf(JsonLiteralSerializer).t5d = function (encoder, value) {
  verify(encoder);
  if (value.g5d_1) {
    return encoder.d2i(value.i5d_1);
  }
  if (!(value.h5d_1 == null)) {
    return encoder.f2i(value.h5d_1).d2i(value.i5d_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.i5d_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.z2h(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.i5d_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).kn_1;
    var tmp_1 = encoder.f2i(serializer_0(Companion_getInstance()).m2d());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.z2h(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.i5d_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.b2i(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.i5d_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.v2h(tmp3_safe_receiver);
  }
  encoder.d2i(value.i5d_1);
};
protoOf(JsonLiteralSerializer).n2d = function (encoder, value) {
  return this.t5d(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
protoOf(JsonLiteralSerializer).o2d = function (decoder) {
  var result = asJsonDecoder(decoder).y5c();
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
  this.u5d_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).m2d();
  this.v5d_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).n2e = function () {
  return this.v5d_1;
};
protoOf(JsonObjectDescriptor).h2f = function (index) {
  return this.u5d_1.h2f(index);
};
protoOf(JsonObjectDescriptor).i2f = function (name) {
  return this.u5d_1.i2f(name);
};
protoOf(JsonObjectDescriptor).j2f = function (index) {
  return this.u5d_1.j2f(index);
};
protoOf(JsonObjectDescriptor).k2f = function (index) {
  return this.u5d_1.k2f(index);
};
protoOf(JsonObjectDescriptor).l2f = function (index) {
  return this.u5d_1.l2f(index);
};
protoOf(JsonObjectDescriptor).d2f = function () {
  return this.u5d_1.d2f();
};
protoOf(JsonObjectDescriptor).z2e = function () {
  return this.u5d_1.z2e();
};
protoOf(JsonObjectDescriptor).e2f = function () {
  return this.u5d_1.e2f();
};
protoOf(JsonObjectDescriptor).f2f = function () {
  return this.u5d_1.f2f();
};
protoOf(JsonObjectDescriptor).g2f = function () {
  return this.u5d_1.g2f();
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.n5d_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).m2d = function () {
  return this.n5d_1;
};
protoOf(JsonObjectSerializer).w5d = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).n2d(encoder, value);
};
protoOf(JsonObjectSerializer).n2d = function (encoder, value) {
  return this.w5d(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
protoOf(JsonObjectSerializer).o2d = function (decoder) {
  verify_0(decoder);
  return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).o2d(decoder));
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonArrayDescriptor() {
  JsonArrayDescriptor_instance = this;
  this.x5d_1 = ListSerializer(JsonElementSerializer_getInstance()).m2d();
  this.y5d_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).n2e = function () {
  return this.y5d_1;
};
protoOf(JsonArrayDescriptor).h2f = function (index) {
  return this.x5d_1.h2f(index);
};
protoOf(JsonArrayDescriptor).i2f = function (name) {
  return this.x5d_1.i2f(name);
};
protoOf(JsonArrayDescriptor).j2f = function (index) {
  return this.x5d_1.j2f(index);
};
protoOf(JsonArrayDescriptor).k2f = function (index) {
  return this.x5d_1.k2f(index);
};
protoOf(JsonArrayDescriptor).l2f = function (index) {
  return this.x5d_1.l2f(index);
};
protoOf(JsonArrayDescriptor).d2f = function () {
  return this.x5d_1.d2f();
};
protoOf(JsonArrayDescriptor).z2e = function () {
  return this.x5d_1.z2e();
};
protoOf(JsonArrayDescriptor).e2f = function () {
  return this.x5d_1.e2f();
};
protoOf(JsonArrayDescriptor).f2f = function () {
  return this.x5d_1.f2f();
};
protoOf(JsonArrayDescriptor).g2f = function () {
  return this.x5d_1.g2f();
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.o5d_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).m2d = function () {
  return this.o5d_1;
};
protoOf(JsonArraySerializer).z5d = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).n2d(encoder, value);
};
protoOf(JsonArraySerializer).n2d = function (encoder, value) {
  return this.z5d(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
protoOf(JsonArraySerializer).o2d = function (decoder) {
  verify_0(decoder);
  return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).o2d(decoder));
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
  var tmp0 = $this.a5e_1;
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
  this.a5e_1 = lazy($deferred);
}
protoOf(defer$1).n2e = function () {
  return _get_original__l7ku1m(this).n2e();
};
protoOf(defer$1).d2f = function () {
  return _get_original__l7ku1m(this).d2f();
};
protoOf(defer$1).f2f = function () {
  return _get_original__l7ku1m(this).f2f();
};
protoOf(defer$1).h2f = function (index) {
  return _get_original__l7ku1m(this).h2f(index);
};
protoOf(defer$1).i2f = function (name) {
  return _get_original__l7ku1m(this).i2f(name);
};
protoOf(defer$1).j2f = function (index) {
  return _get_original__l7ku1m(this).j2f(index);
};
protoOf(defer$1).k2f = function (index) {
  return _get_original__l7ku1m(this).k2f(index);
};
protoOf(defer$1).l2f = function (index) {
  return _get_original__l7ku1m(this).l2f(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.b5e_1 = writer;
  this.c5e_1 = true;
}
protoOf(Composer).d5e = function () {
  this.c5e_1 = true;
};
protoOf(Composer).e5e = function () {
  return Unit_instance;
};
protoOf(Composer).f5e = function () {
  this.c5e_1 = false;
};
protoOf(Composer).g5e = function () {
  this.c5e_1 = false;
};
protoOf(Composer).h5e = function () {
  return Unit_instance;
};
protoOf(Composer).i5e = function (v) {
  return this.b5e_1.j5e(v);
};
protoOf(Composer).k5e = function (v) {
  return this.b5e_1.l5e(v);
};
protoOf(Composer).m5e = function (v) {
  return this.b5e_1.l5e(v.toString());
};
protoOf(Composer).n5e = function (v) {
  return this.b5e_1.l5e(v.toString());
};
protoOf(Composer).o5e = function (v) {
  return this.b5e_1.p5e(toLong(v));
};
protoOf(Composer).q5e = function (v) {
  return this.b5e_1.p5e(toLong(v));
};
protoOf(Composer).r5e = function (v) {
  return this.b5e_1.p5e(toLong(v));
};
protoOf(Composer).s5e = function (v) {
  return this.b5e_1.p5e(v);
};
protoOf(Composer).t5e = function (v) {
  return this.b5e_1.l5e(v.toString());
};
protoOf(Composer).u5e = function (value) {
  return this.b5e_1.v5e(value);
};
function Composer_0(sb, json) {
  return json.u5a_1.j5c_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.y5e_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).r5e = function (v) {
  if (this.y5e_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.u5e(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.k5e(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).s5e = function (v) {
  if (this.y5e_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.u5e(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.k5e(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).o5e = function (v) {
  if (this.y5e_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.u5e(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.k5e(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).q5e = function (v) {
  if (this.y5e_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.u5e(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.k5e(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.b5f_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).u5e = function (value) {
  if (this.b5f_1) {
    protoOf(Composer).u5e.call(this, value);
  } else {
    protoOf(Composer).k5e.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.e5f_1 = json;
  this.f5f_1 = 0;
}
protoOf(ComposerWithPrettyPrint).d5e = function () {
  this.c5e_1 = true;
  this.f5f_1 = this.f5f_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).e5e = function () {
  this.f5f_1 = this.f5f_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).f5e = function () {
  this.c5e_1 = false;
  this.k5e('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.f5f_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.k5e(this.e5f_1.u5a_1.l5c_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).g5e = function () {
  if (this.c5e_1)
    this.c5e_1 = false;
  else {
    this.f5e();
  }
};
protoOf(ComposerWithPrettyPrint).h5e = function () {
  this.i5e(_Char___init__impl__6a9atx(32));
};
function readIfAbsent($this, descriptor, index) {
  $this.h5f_1 = (!descriptor.l2f(index) && descriptor.k2f(index).z2e());
  return $this.h5f_1;
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
  tmp.g5f_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
  this.h5f_1 = false;
}
protoOf(JsonElementMarker).i5f = function (index) {
  this.g5f_1.f2n(index);
};
protoOf(JsonElementMarker).j5f = function () {
  return this.g5f_1.g2n();
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
  _this__u8e3s4.k5f('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.h5b_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.l5f('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.n2e() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.d2f().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
  var index = _this__u8e3s4.i2f(name);
  if (!(index === -3))
    return index;
  if (!json.u5a_1.q5c_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException_init_$Create$(_this__u8e3s4.n2e() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.h2f(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.d2f(), CLASS_getInstance()) ? json.u5a_1.r5c_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.n5f(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.u5a_1.s5c_1 && equals(descriptor.d2f(), ENUM_getInstance());
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
  return tmp.n5f(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap_init_$Create$();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.f2f();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.j2f(i);
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
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o5f_1;
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
        tmp_0 = _this__u8e3s4.h2f(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.p5f(_this__u8e3s4, i, _this__u8e3s4.h2f(i));
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
  var entity = equals($this_buildDeserializationNamesMap.d2f(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).c2(name)) {
    throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.h2f(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.h2f(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
    var tmp_0 = $this_serializationNamesIndices.f2f();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.h2f(tmp_2);
      tmp_1[tmp_2] = $strategy.p5f($this_serializationNamesIndices, tmp_2, baseName);
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
  var newSize = imul($this.s5f_1, 2);
  $this.q5f_1 = copyOf($this.q5f_1, newSize);
  $this.r5f_1 = copyOf_0($this.r5f_1, newSize);
}
function JsonPath() {
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  tmp.q5f_1 = Array(8);
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = new Int32Array(8);
  while (tmp_1 < 8) {
    tmp_2[tmp_1] = -1;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.r5f_1 = tmp_2;
  this.s5f_1 = -1;
}
protoOf(JsonPath).t5f = function (sd) {
  this.s5f_1 = this.s5f_1 + 1 | 0;
  var depth = this.s5f_1;
  if (depth === this.q5f_1.length) {
    resize(this);
  }
  this.q5f_1[depth] = sd;
};
protoOf(JsonPath).u5f = function (index) {
  this.r5f_1[this.s5f_1] = index;
};
protoOf(JsonPath).v5f = function (key) {
  var tmp;
  if (!(this.r5f_1[this.s5f_1] === -2)) {
    this.s5f_1 = this.s5f_1 + 1 | 0;
    tmp = this.s5f_1 === this.q5f_1.length;
  } else {
    tmp = false;
  }
  if (tmp) {
    resize(this);
  }
  this.q5f_1[this.s5f_1] = key;
  this.r5f_1[this.s5f_1] = -2;
};
protoOf(JsonPath).w5f = function () {
  if (this.r5f_1[this.s5f_1] === -2) {
    this.q5f_1[this.s5f_1] = Tombstone_instance;
  }
};
protoOf(JsonPath).x5f = function () {
  var depth = this.s5f_1;
  if (this.r5f_1[depth] === -2) {
    this.r5f_1[depth] = -1;
    this.s5f_1 = this.s5f_1 - 1 | 0;
  }
  if (!(this.s5f_1 === -1)) {
    this.s5f_1 = this.s5f_1 - 1 | 0;
  }
};
protoOf(JsonPath).y5f = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.b8('$');
  // Inline function 'kotlin.repeat' call
  var times = this.s5f_1 + 1 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var element = this.q5f_1[index];
      if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
        if (equals(element.d2f(), LIST_getInstance())) {
          if (!(this.r5f_1[index] === -1)) {
            this_0.b8('[');
            this_0.lc(this.r5f_1[index]);
            this_0.b8(']');
          }
        } else {
          var idx = this.r5f_1[index];
          if (idx >= 0) {
            this_0.b8('.');
            this_0.b8(element.h2f(idx));
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
  return this.y5f();
};
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().m();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
  encoder.r2i(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.i5g_1.m5g(6);
  if ($this.i5g_1.n5g() === 4) {
    $this.i5g_1.l5f('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap_init_$Create$();
  $l$loop: while ($this.i5g_1.o5g()) {
    var key = $this.j5g_1 ? $this.i5g_1.q5g() : $this.i5g_1.p5g();
    $this.i5g_1.m5g(5);
    var element = $this.r5g();
    // Inline function 'kotlin.collections.set' call
    result.h2(key, element);
    lastToken = $this.i5g_1.s5g();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.i5g_1.l5f('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.i5g_1.m5g(7);
  } else if (lastToken === 4) {
    if (!$this.k5g_1) {
      invalidTrailingComma($this.i5g_1);
    }
    $this.i5g_1.m5g(7);
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
  var lastToken = $this.i5g_1.s5g();
  if ($this.i5g_1.n5g() === 4) {
    $this.i5g_1.l5f('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList_init_$Create$();
  while ($this.i5g_1.o5g()) {
    var element = $this.r5g();
    result.e(element);
    lastToken = $this.i5g_1.s5g();
    if (!(lastToken === 4)) {
      var tmp0 = $this.i5g_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.h5b_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.l5f(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.i5g_1.m5g(9);
  } else if (lastToken === 4) {
    if (!$this.k5g_1) {
      invalidTrailingComma($this.i5g_1, 'array');
    }
    $this.i5g_1.m5g(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.j5g_1 || !isString) {
    tmp = $this.i5g_1.q5g();
  } else {
    tmp = $this.i5g_1.p5g();
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
  this.q5h_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(JsonTreeReader$readDeepRecursive$slambda).v5h = function ($this$DeepRecursiveFunction, it, $completion) {
  var tmp = this.w5h($this$DeepRecursiveFunction, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
  return this.v5h(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          this.t5h_1 = this.q5h_1.i5g_1.n5g();
          if (this.t5h_1 === 1) {
            this.u5h_1 = readValue(this.q5h_1, true);
            this.u8_1 = 2;
            continue $sm;
          } else {
            if (this.t5h_1 === 0) {
              this.u5h_1 = readValue(this.q5h_1, false);
              this.u8_1 = 2;
              continue $sm;
            } else {
              if (this.t5h_1 === 6) {
                this.u8_1 = 1;
                suspendResult = readObject_0(this.q5h_1, this.r5h_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.t5h_1 === 8) {
                  this.u5h_1 = readArray(this.q5h_1);
                  this.u8_1 = 2;
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  this.q5h_1.i5g_1.l5f("Can't begin reading element, unexpected token");
                }
              }
            }
          }

          break;
        case 1:
          this.u5h_1 = suspendResult;
          this.u8_1 = 2;
          continue $sm;
        case 2:
          return this.u5h_1;
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
protoOf(JsonTreeReader$readDeepRecursive$slambda).w5h = function ($this$DeepRecursiveFunction, it, completion) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this.q5h_1, completion);
  i.r5h_1 = $this$DeepRecursiveFunction;
  i.s5h_1 = it;
  return i;
};
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$DeepRecursiveFunction, it, $completion) {
    return i.v5h($this$DeepRecursiveFunction, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.b5h_1 = _this__u8e3s4;
  this.c5h_1 = _this__u8e3s4_0;
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
          tmp_0.d5h_1 = this.b5h_1;
          this.e5h_1 = this.d5h_1;
          this.f5h_1 = this.e5h_1.i5g_1.m5g(6);
          if (this.e5h_1.i5g_1.n5g() === 4) {
            this.e5h_1.i5g_1.l5f('Unexpected leading comma');
          }

          var tmp_1 = this;
          tmp_1.g5h_1 = LinkedHashMap_init_$Create$();
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!this.e5h_1.i5g_1.o5g()) {
            this.u8_1 = 4;
            continue $sm;
          }

          this.h5h_1 = this.e5h_1.j5g_1 ? this.e5h_1.i5g_1.q5g() : this.e5h_1.i5g_1.p5g();
          this.e5h_1.i5g_1.m5g(5);
          this.u8_1 = 2;
          suspendResult = this.c5h_1.nl(Unit_instance, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var element = suspendResult;
          var tmp0 = this.g5h_1;
          var key = this.h5h_1;
          tmp0.h2(key, element);
          this.f5h_1 = this.e5h_1.i5g_1.s5g();
          var tmp0_subject = this.f5h_1;
          if (tmp0_subject === 4) {
            this.u8_1 = 3;
            continue $sm;
          } else {
            if (tmp0_subject === 7) {
              this.u8_1 = 4;
              continue $sm;
            } else {
              this.e5h_1.i5g_1.l5f('Expected end of the object or comma');
            }
          }

          break;
        case 3:
          this.u8_1 = 1;
          continue $sm;
        case 4:
          if (this.f5h_1 === 6) {
            this.e5h_1.i5g_1.m5g(7);
          } else if (this.f5h_1 === 4) {
            if (!this.e5h_1.k5g_1) {
              invalidTrailingComma(this.e5h_1.i5g_1);
            }
            this.e5h_1.i5g_1.m5g(7);
          }

          return new JsonObject(this.g5h_1);
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
  this.i5g_1 = lexer;
  this.j5g_1 = configuration.h5c_1;
  this.k5g_1 = configuration.t5c_1;
  this.l5g_1 = 0;
}
protoOf(JsonTreeReader).r5g = function () {
  var token = this.i5g_1.n5g();
  var tmp;
  if (token === 1) {
    tmp = readValue(this, true);
  } else if (token === 0) {
    tmp = readValue(this, false);
  } else if (token === 6) {
    var tmp_0;
    this.l5g_1 = this.l5g_1 + 1 | 0;
    if (this.l5g_1 === 200) {
      tmp_0 = readDeepRecursive(this);
    } else {
      tmp_0 = readObject(this);
    }
    var result = tmp_0;
    this.l5g_1 = this.l5g_1 - 1 | 0;
    tmp = result;
  } else if (token === 8) {
    tmp = readArray(this);
  } else {
    this.i5g_1.l5f('Cannot read Json element because of unexpected ' + tokenDescription(token));
  }
  return tmp;
};
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.g2f().j();
  while (_iterator__ex2g4s.k()) {
    var annotation = _iterator__ex2g4s.l();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.w5c_1;
  }
  return json.u5a_1.o5c_1;
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.m2d()).u1(classDiscriminator)) {
    var baseName = serializer.m2d().n2e();
    var actualName = actualSerializer.m2d().n2e();
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
  var kind = descriptor.d2f();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.sa() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.x5h_1)
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
  var last = descriptor.f2f();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.h2f(i);
      if (name === $this.y5h_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function PolymorphismValidator(useArrayPolymorphism, discriminator) {
  this.x5h_1 = useArrayPolymorphism;
  this.y5h_1 = discriminator;
}
protoOf(PolymorphismValidator).q2x = function (kClass, provider) {
};
protoOf(PolymorphismValidator).t2x = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.m2d();
  checkKind_0(this, descriptor, actualClass);
  if (!this.x5h_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(PolymorphismValidator).u2x = function (baseClass, defaultSerializerProvider) {
};
protoOf(PolymorphismValidator).v2x = function (baseClass, defaultDeserializerProvider) {
};
function Key() {
}
function DescriptorSchemaCache() {
  this.m5f_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).z5h = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.m5f_1;
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
protoOf(DescriptorSchemaCache).n5f = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.a5i(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.z5h(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).a5i = function (descriptor, key) {
  var tmp0_safe_receiver = this.m5f_1.e2(descriptor);
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
  this.b5i_1 = discriminatorToSkip;
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.b5i_1 === unknownKey) {
    _this__u8e3s4.b5i_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.q2h(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.b5b_1.n5g() === 4) {
    $this.b5b_1.l5f('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.d5b_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.d5b_1 === -1)) {
      hasComma = $this.b5b_1.d5i();
    }
  } else {
    $this.b5b_1.c5i(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.b5b_1.o5g()) {
    if (decodingKey) {
      if ($this.d5b_1 === -1) {
        var tmp0 = $this.b5b_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.h5b_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected leading comma';
          tmp0.l5f(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.b5b_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.h5b_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.l5f(tmp$ret$2, position_0);
        }
      }
    }
    $this.d5b_1 = $this.d5b_1 + 1 | 0;
    tmp = $this.d5b_1;
  } else {
    if (hasComma && !$this.z5a_1.u5a_1.t5c_1) {
      invalidTrailingComma($this.b5b_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.z5a_1;
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.l2f(index);
    var elementDescriptor = descriptor.k2f(index);
    var tmp;
    if (isOptional && !elementDescriptor.z2e()) {
      tmp = $this.b5b_1.e5i(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.d2f(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.z2e()) {
        tmp_0 = $this.b5b_1.e5i(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.b5b_1.f5i($this.f5b_1.h5c_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.u5a_1.k5c_1 && elementDescriptor.z2e();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.b5b_1.p5g();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.b5b_1.d5i();
  while ($this.b5b_1.o5g()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.b5b_1.c5i(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.z5a_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.f5b_1.m5c_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.b5b_1.d5i();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.g5b_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.i5f(index);
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
  if (hasComma && !$this.z5a_1.u5a_1.t5c_1) {
    invalidTrailingComma($this.b5b_1);
  }
  var tmp1_safe_receiver = $this.g5b_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j5f();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, key) {
  if ($this.f5b_1.g5c_1 || trySkip($this, $this.e5b_1, key)) {
    $this.b5b_1.h5i($this.f5b_1.h5c_1);
  } else {
    $this.b5b_1.g5i(key);
  }
  return $this.b5b_1.d5i();
}
function decodeListIndex($this) {
  var hasComma = $this.b5b_1.d5i();
  var tmp;
  if ($this.b5b_1.o5g()) {
    if (!($this.d5b_1 === -1) && !hasComma) {
      $this.b5b_1.l5f('Expected end of the array or comma');
    }
    $this.d5b_1 = $this.d5b_1 + 1 | 0;
    tmp = $this.d5b_1;
  } else {
    if (hasComma && !$this.z5a_1.u5a_1.t5c_1) {
      invalidTrailingComma($this.b5b_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.f5b_1.h5c_1) {
    tmp = $this.b5b_1.j5i();
  } else {
    tmp = $this.b5b_1.i5i();
  }
  return tmp;
}
function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
  AbstractDecoder.call(this);
  this.z5a_1 = json;
  this.a5b_1 = mode;
  this.b5b_1 = lexer;
  this.c5b_1 = this.z5a_1.o2h();
  this.d5b_1 = -1;
  this.e5b_1 = discriminatorHolder;
  this.f5b_1 = this.z5a_1.u5a_1;
  this.g5b_1 = this.f5b_1.k5c_1 ? null : new JsonElementMarker(descriptor);
}
protoOf(StreamingJsonDecoder).x5c = function () {
  return this.z5a_1;
};
protoOf(StreamingJsonDecoder).o2h = function () {
  return this.c5b_1;
};
protoOf(StreamingJsonDecoder).y5c = function () {
  return (new JsonTreeReader(this.z5a_1.u5a_1, this.b5b_1)).r5g();
};
protoOf(StreamingJsonDecoder).y2g = function (deserializer) {
  try {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.z5a_1.u5a_1.n5c_1;
    }
    if (tmp) {
      return deserializer.o2d(this);
    }
    var discriminator = classDiscriminator(deserializer.m2d(), this.z5a_1);
    var tmp0_elvis_lhs = this.b5b_1.k5i(discriminator, this.f5b_1.h5c_1);
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
          tmp_1 = this.x5c().u5a_1.n5c_1;
        }
        if (tmp_1) {
          tmp$ret$0 = tmp2.o2d(this);
          break $l$block;
        }
        var discriminator_0 = classDiscriminator(tmp2.m2d(), this.x5c());
        var tmp0 = this.y5c();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = tmp2.m2d().n2e();
        if (!(tmp0 instanceof JsonObject)) {
          var tmp_2 = getKClass(JsonObject).sa();
          var tmp_3 = getKClassFromExpression(tmp0).sa();
          var tmp$ret$1 = this.b5b_1.i5b_1.y5f();
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
        tmp$ret$0 = readPolymorphicJson(this.x5c(), discriminator_0, jsonTree, actualSerializer);
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
        this.b5b_1.l5f(message, VOID, hint);
      } else {
        throw $p;
      }
      tmp_7 = tmp_8;
    }
    var tmp_9 = tmp_7;
    var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
    this.e5b_1 = new DiscriminatorHolder(discriminator);
    return actualSerializer_0.o2d(this);
  } catch ($p) {
    if ($p instanceof MissingFieldException) {
      var e = $p;
      if (contains_0(ensureNotNull(e.message), 'at path'))
        throw e;
      throw new MissingFieldException(e.t2e_1, plus(e.message, ' at path: ') + this.b5b_1.i5b_1.y5f(), e);
    } else {
      throw $p;
    }
  }
};
protoOf(StreamingJsonDecoder).z2g = function (descriptor) {
  var newMode = switchMode(this.z5a_1, descriptor);
  this.b5b_1.i5b_1.t5f(descriptor);
  this.b5b_1.c5i(newMode.n5i_1);
  checkLeadingComma(this);
  var tmp;
  switch (newMode.l2_1) {
    case 1:
    case 2:
    case 3:
      tmp = new StreamingJsonDecoder(this.z5a_1, newMode, this.b5b_1, descriptor, this.e5b_1);
      break;
    default:
      var tmp_0;
      if (this.a5b_1.equals(newMode) && this.z5a_1.u5a_1.k5c_1) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this.z5a_1, newMode, this.b5b_1, descriptor, this.e5b_1);
      }

      tmp = tmp_0;
      break;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).a2h = function (descriptor) {
  if (this.z5a_1.u5a_1.g5c_1 && descriptor.f2f() === 0) {
    skipLeftoverElements(this, descriptor);
  }
  if (this.b5b_1.d5i() && !this.z5a_1.u5a_1.t5c_1) {
    invalidTrailingComma(this.b5b_1, '');
  }
  this.b5b_1.c5i(this.a5b_1.o5i_1);
  this.b5b_1.i5b_1.x5f();
};
protoOf(StreamingJsonDecoder).k2g = function () {
  var tmp;
  var tmp0_safe_receiver = this.g5b_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h5f_1;
  if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
    tmp = !this.b5b_1.p5i();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).l2g = function () {
  return null;
};
protoOf(StreamingJsonDecoder).l2h = function (descriptor, index, deserializer, previousValue) {
  var isMapKey = this.a5b_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
  if (isMapKey) {
    this.b5b_1.i5b_1.w5f();
  }
  var value = protoOf(AbstractDecoder).l2h.call(this, descriptor, index, deserializer, previousValue);
  if (isMapKey) {
    this.b5b_1.i5b_1.v5f(value);
  }
  return value;
};
protoOf(StreamingJsonDecoder).q2h = function (descriptor) {
  var index;
  switch (this.a5b_1.l2_1) {
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
  if (!this.a5b_1.equals(WriteMode_MAP_getInstance())) {
    this.b5b_1.i5b_1.u5f(index);
  }
  return index;
};
protoOf(StreamingJsonDecoder).m2g = function () {
  return this.b5b_1.q5i();
};
protoOf(StreamingJsonDecoder).n2g = function () {
  var value = this.b5b_1.j5d();
  if (!value.equals(toLong(value.g3()))) {
    this.b5b_1.l5f("Failed to parse byte for input '" + value.toString() + "'");
  }
  return value.g3();
};
protoOf(StreamingJsonDecoder).o2g = function () {
  var value = this.b5b_1.j5d();
  if (!value.equals(toLong(value.h3()))) {
    this.b5b_1.l5f("Failed to parse short for input '" + value.toString() + "'");
  }
  return value.h3();
};
protoOf(StreamingJsonDecoder).p2g = function () {
  var value = this.b5b_1.j5d();
  if (!value.equals(toLong(value.d1()))) {
    this.b5b_1.l5f("Failed to parse int for input '" + value.toString() + "'");
  }
  return value.d1();
};
protoOf(StreamingJsonDecoder).q2g = function () {
  return this.b5b_1.j5d();
};
protoOf(StreamingJsonDecoder).r2g = function () {
  var tmp0 = this.b5b_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.q5g();
    try {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.l5f("Failed to parse type '" + 'float' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.z5a_1.u5a_1.p5c_1;
  if (specialFp || isFinite(result))
    return result;
  throwInvalidFloatingPointDecoded(this.b5b_1, result);
};
protoOf(StreamingJsonDecoder).s2g = function () {
  var tmp0 = this.b5b_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.q5g();
    try {
      tmp$ret$1 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.l5f("Failed to parse type '" + 'double' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.z5a_1.u5a_1.p5c_1;
  if (specialFp || isFinite_0(result))
    return result;
  throwInvalidFloatingPointDecoded(this.b5b_1, result);
};
protoOf(StreamingJsonDecoder).t2g = function () {
  var string = this.b5b_1.q5g();
  if (!(string.length === 1)) {
    this.b5b_1.l5f("Expected single char, but got '" + string + "'");
  }
  return charCodeAt(string, 0);
};
protoOf(StreamingJsonDecoder).u2g = function () {
  var tmp;
  if (this.f5b_1.h5c_1) {
    tmp = this.b5b_1.j5i();
  } else {
    tmp = this.b5b_1.p5g();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).w2g = function (descriptor) {
  return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.b5b_1, this.z5a_1) : protoOf(AbstractDecoder).w2g.call(this, descriptor);
};
protoOf(StreamingJsonDecoder).v2g = function (enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.z5a_1, this.u2g(), ' at path ' + this.b5b_1.i5b_1.y5f());
};
function JsonDecoderForUnsignedTypes(lexer, json) {
  AbstractDecoder.call(this);
  this.r5i_1 = lexer;
  this.s5i_1 = json.o2h();
}
protoOf(JsonDecoderForUnsignedTypes).o2h = function () {
  return this.s5i_1;
};
protoOf(JsonDecoderForUnsignedTypes).q2h = function (descriptor) {
  var message = 'unsupported';
  throw IllegalStateException_init_$Create$(toString(message));
};
protoOf(JsonDecoderForUnsignedTypes).p2g = function () {
  var tmp0 = this.r5i_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.q5g();
    try {
      // Inline function 'kotlin.UInt.toInt' call
      var this_0 = toUInt(input);
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.l5f("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).q2g = function () {
  var tmp0 = this.r5i_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.q5g();
    try {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = toULong(input);
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.l5f("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).n2g = function () {
  var tmp0 = this.r5i_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.q5g();
    try {
      // Inline function 'kotlin.UByte.toByte' call
      var this_0 = toUByte(input);
      tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.l5f("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).o2g = function () {
  var tmp0 = this.r5i_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.q5g();
    try {
      // Inline function 'kotlin.UShort.toShort' call
      var this_0 = toUShort(input);
      tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.l5f("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
  $this.z5f_1.f5e();
  $this.d2i(discriminator);
  $this.z5f_1.i5e(_Char___init__impl__6a9atx(58));
  $this.z5f_1.h5e();
  $this.d2i(serialName);
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.z5f_1 = composer;
  this.a5g_1 = json;
  this.b5g_1 = mode;
  this.c5g_1 = modeReuseCache;
  this.d5g_1 = this.a5g_1.o2h();
  this.e5g_1 = this.a5g_1.u5a_1;
  this.f5g_1 = false;
  this.g5g_1 = null;
  this.h5g_1 = null;
  var i = this.b5g_1.l2_1;
  if (!(this.c5g_1 == null)) {
    if (!(this.c5g_1[i] === null) || !(this.c5g_1[i] === this)) {
      this.c5g_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).x5c = function () {
  return this.a5g_1;
};
protoOf(StreamingJsonEncoder).o2h = function () {
  return this.d5g_1;
};
protoOf(StreamingJsonEncoder).w2i = function (descriptor, index) {
  return this.e5g_1.f5c_1;
};
protoOf(StreamingJsonEncoder).r2i = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    if (this.x5c().u5a_1.n5c_1) {
      serializer.n2d(this, value);
      break $l$block;
    }
    var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
    var tmp;
    if (isPolymorphicSerializer) {
      tmp = !this.x5c().u5a_1.v5c_1.equals(ClassDiscriminatorMode_NONE_getInstance());
    } else {
      var tmp_0;
      switch (this.x5c().u5a_1.v5c_1.l2_1) {
        case 0:
        case 2:
          tmp_0 = false;
          break;
        case 1:
          // Inline function 'kotlin.let' call

          var it = serializer.m2d().d2f();
          tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    var needDiscriminator = tmp;
    var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.m2d(), this.x5c()) : null;
    var tmp_1;
    if (isPolymorphicSerializer) {
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        if (value == null) {
          var message = 'Value for serializer ' + toString(serializer.m2d()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          break $l$block_0;
        }
      }
      var actual = findPolymorphicSerializer_0(casted, this, value);
      if (!(baseClassDiscriminator == null)) {
        access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
      }
      checkKind(actual.m2d().d2f());
      tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
    } else {
      tmp_1 = serializer;
    }
    var actualSerializer = tmp_1;
    if (!(baseClassDiscriminator == null)) {
      var serialName = actualSerializer.m2d().n2e();
      this.g5g_1 = baseClassDiscriminator;
      this.h5g_1 = serialName;
    }
    actualSerializer.n2d(this, value);
  }
};
protoOf(StreamingJsonEncoder).z2g = function (descriptor) {
  var newMode = switchMode(this.a5g_1, descriptor);
  if (!(newMode.n5i_1 === _Char___init__impl__6a9atx(0))) {
    this.z5f_1.i5e(newMode.n5i_1);
    this.z5f_1.d5e();
  }
  var discriminator = this.g5g_1;
  if (!(discriminator == null)) {
    var tmp0_elvis_lhs = this.h5g_1;
    encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.n2e() : tmp0_elvis_lhs);
    this.g5g_1 = null;
    this.h5g_1 = null;
  }
  if (this.b5g_1.equals(newMode)) {
    return this;
  }
  var tmp1_safe_receiver = this.c5g_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.l2_1];
  return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.z5f_1, this.a5g_1, newMode, this.c5g_1) : tmp2_elvis_lhs;
};
protoOf(StreamingJsonEncoder).a2h = function (descriptor) {
  if (!(this.b5g_1.o5i_1 === _Char___init__impl__6a9atx(0))) {
    this.z5f_1.e5e();
    this.z5f_1.g5e();
    this.z5f_1.i5e(this.b5g_1.o5i_1);
  }
};
protoOf(StreamingJsonEncoder).s2h = function (descriptor, index) {
  switch (this.b5g_1.l2_1) {
    case 1:
      if (!this.z5f_1.c5e_1) {
        this.z5f_1.i5e(_Char___init__impl__6a9atx(44));
      }

      this.z5f_1.f5e();
      break;
    case 2:
      if (!this.z5f_1.c5e_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.z5f_1.i5e(_Char___init__impl__6a9atx(44));
          this.z5f_1.f5e();
          tmp_0 = true;
        } else {
          this.z5f_1.i5e(_Char___init__impl__6a9atx(58));
          this.z5f_1.h5e();
          tmp_0 = false;
        }
        tmp.f5g_1 = tmp_0;
      } else {
        this.f5g_1 = true;
        this.z5f_1.f5e();
      }

      break;
    case 3:
      if (index === 0)
        this.f5g_1 = true;
      if (index === 1) {
        this.z5f_1.i5e(_Char___init__impl__6a9atx(44));
        this.z5f_1.h5e();
        this.f5g_1 = false;
      }

      break;
    default:
      if (!this.z5f_1.c5e_1) {
        this.z5f_1.i5e(_Char___init__impl__6a9atx(44));
      }

      this.z5f_1.f5e();
      this.d2i(getJsonElementName(descriptor, this.a5g_1, index));
      this.z5f_1.i5e(_Char___init__impl__6a9atx(58));
      this.z5f_1.h5e();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).s2i = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.e5g_1.k5c_1) {
    protoOf(AbstractEncoder).s2i.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).f2i = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.z5f_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.z5f_1;
    } else {
      var tmp0 = this.z5f_1.b5e_1;
      var p1 = this.f5g_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.a5g_1, this.b5g_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.z5f_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.z5f_1;
    } else {
      var tmp0_0 = this.z5f_1.b5e_1;
      var p1_0 = this.f5g_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.a5g_1, this.b5g_1, null);
  } else if (!(this.g5g_1 == null)) {
    // Inline function 'kotlin.apply' call
    this.h5g_1 = descriptor.n2e();
    tmp = this;
  } else {
    tmp = protoOf(AbstractEncoder).f2i.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).u2h = function () {
  this.z5f_1.k5e('null');
};
protoOf(StreamingJsonEncoder).v2h = function (value) {
  if (this.f5g_1) {
    this.d2i(value.toString());
  } else {
    this.z5f_1.t5e(value);
  }
};
protoOf(StreamingJsonEncoder).w2h = function (value) {
  if (this.f5g_1) {
    this.d2i(value.toString());
  } else {
    this.z5f_1.o5e(value);
  }
};
protoOf(StreamingJsonEncoder).x2h = function (value) {
  if (this.f5g_1) {
    this.d2i(value.toString());
  } else {
    this.z5f_1.q5e(value);
  }
};
protoOf(StreamingJsonEncoder).y2h = function (value) {
  if (this.f5g_1) {
    this.d2i(value.toString());
  } else {
    this.z5f_1.r5e(value);
  }
};
protoOf(StreamingJsonEncoder).z2h = function (value) {
  if (this.f5g_1) {
    this.d2i(value.toString());
  } else {
    this.z5f_1.s5e(value);
  }
};
protoOf(StreamingJsonEncoder).a2i = function (value) {
  if (this.f5g_1) {
    this.d2i(value.toString());
  } else {
    this.z5f_1.m5e(value);
  }
  if (!this.e5g_1.p5c_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.z5f_1.b5e_1));
  }
};
protoOf(StreamingJsonEncoder).b2i = function (value) {
  if (this.f5g_1) {
    this.d2i(value.toString());
  } else {
    this.z5f_1.n5e(value);
  }
  if (!this.e5g_1.p5c_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.z5f_1.b5e_1));
  }
};
protoOf(StreamingJsonEncoder).c2i = function (value) {
  this.d2i(toString_1(value));
};
protoOf(StreamingJsonEncoder).d2i = function (value) {
  return this.z5f_1.u5e(value);
};
protoOf(StreamingJsonEncoder).e2i = function (enumDescriptor, index) {
  this.d2i(enumDescriptor.h2f(index));
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.e2f() && get_unsignedNumberDescriptors().u1(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.e2f() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).m2d(), serializer_0(Companion_getInstance()).m2d(), serializer_2(Companion_getInstance_1()).m2d(), serializer_3(Companion_getInstance_2()).m2d()]);
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
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.z5i(tag), toString($this.a5j()));
}
function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  NamedValueDecoder.call(this);
  this.v5i_1 = json;
  this.w5i_1 = value;
  this.x5i_1 = polymorphicDiscriminator;
  this.y5i_1 = this.x5c().u5a_1;
}
protoOf(AbstractJsonTreeDecoder).x5c = function () {
  return this.v5i_1;
};
protoOf(AbstractJsonTreeDecoder).t = function () {
  return this.w5i_1;
};
protoOf(AbstractJsonTreeDecoder).o2h = function () {
  return this.x5c().o2h();
};
protoOf(AbstractJsonTreeDecoder).a5j = function () {
  var tmp0_safe_receiver = this.g2v();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = this.b5j(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? this.t() : tmp1_elvis_lhs;
};
protoOf(AbstractJsonTreeDecoder).z5i = function (currentTag) {
  return this.i2v() + ('.' + currentTag);
};
protoOf(AbstractJsonTreeDecoder).y5c = function () {
  return this.a5j();
};
protoOf(AbstractJsonTreeDecoder).y2g = function (deserializer) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.x5c().u5a_1.n5c_1;
    }
    if (tmp) {
      tmp$ret$0 = deserializer.o2d(this);
      break $l$block;
    }
    var discriminator = classDiscriminator(deserializer.m2d(), this.x5c());
    var tmp0 = this.y5c();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = deserializer.m2d().n2e();
    if (!(tmp0 instanceof JsonObject)) {
      var tmp_0 = getKClass(JsonObject).sa();
      var tmp_1 = getKClassFromExpression(tmp0).sa();
      var tmp$ret$1 = this.i2v();
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
    tmp$ret$0 = readPolymorphicJson(this.x5c(), discriminator, jsonTree, actualSerializer);
  }
  return tmp$ret$0;
};
protoOf(AbstractJsonTreeDecoder).h2v = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeDecoder).z2g = function (descriptor) {
  var currentObject = this.a5j();
  var tmp0_subject = descriptor.d2f();
  var tmp;
  var tmp_0;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_0 = true;
  } else {
    tmp_0 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_0) {
    var tmp_1 = this.x5c();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = descriptor.n2e();
    if (!(currentObject instanceof JsonArray)) {
      var tmp_2 = getKClass(JsonArray).sa();
      var tmp_3 = getKClassFromExpression(currentObject).sa();
      var tmp$ret$0 = this.i2v();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
    }
    tmp = new JsonTreeListDecoder(tmp_1, currentObject);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.x5c();
      var keyDescriptor = carrierDescriptor(descriptor.k2f(0), this_0.o2h());
      var keyKind = keyDescriptor.d2f();
      var tmp_4;
      var tmp_5;
      if (keyKind instanceof PrimitiveKind) {
        tmp_5 = true;
      } else {
        tmp_5 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_5) {
        var tmp_6 = this.x5c();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_0 = descriptor.n2e();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_7 = getKClass(JsonObject).sa();
          var tmp_8 = getKClassFromExpression(currentObject).sa();
          var tmp$ret$3 = this.i2v();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
        }
        tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
      } else {
        if (this_0.u5a_1.i5c_1) {
          var tmp_9 = this.x5c();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_1 = descriptor.n2e();
          if (!(currentObject instanceof JsonArray)) {
            var tmp_10 = getKClass(JsonArray).sa();
            var tmp_11 = getKClassFromExpression(currentObject).sa();
            var tmp$ret$7 = this.i2v();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
          }
          tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp = tmp_4;
    } else {
      var tmp_12 = this.x5c();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName_2 = descriptor.n2e();
      if (!(currentObject instanceof JsonObject)) {
        var tmp_13 = getKClass(JsonObject).sa();
        var tmp_14 = getKClassFromExpression(currentObject).sa();
        var tmp$ret$12 = this.i2v();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
      }
      tmp = new JsonTreeDecoder(tmp_12, currentObject, this.x5i_1);
    }
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).a2h = function (descriptor) {
};
protoOf(AbstractJsonTreeDecoder).k2g = function () {
  var tmp = this.a5j();
  return !(tmp instanceof JsonNull);
};
protoOf(AbstractJsonTreeDecoder).c5j = function (tag, enumDescriptor) {
  var tmp = this.x5c();
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
  var tmp2 = this.b5j(tag);
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var serialName = enumDescriptor.n2e();
  if (!(tmp2 instanceof JsonPrimitive)) {
    var tmp_0 = getKClass(JsonPrimitive).sa();
    var tmp_1 = getKClassFromExpression(tmp2).sa();
    var tmp$ret$0 = this.z5i(tag);
    throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
  }
  return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.z5c());
};
protoOf(AbstractJsonTreeDecoder).u2v = function (tag, enumDescriptor) {
  return this.c5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
};
protoOf(AbstractJsonTreeDecoder).d5j = function (tag) {
  return !(this.b5j(tag) === JsonNull_getInstance());
};
protoOf(AbstractJsonTreeDecoder).k2v = function (tag) {
  return this.d5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).e5j = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b5j(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.z5i(tag);
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
protoOf(AbstractJsonTreeDecoder).l2v = function (tag) {
  return this.e5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).f5j = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b5j(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.z5i(tag);
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
protoOf(AbstractJsonTreeDecoder).m2v = function (tag) {
  return this.f5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).g5j = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b5j(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.z5i(tag);
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
protoOf(AbstractJsonTreeDecoder).n2v = function (tag) {
  return this.g5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).h5j = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b5j(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.z5i(tag);
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
protoOf(AbstractJsonTreeDecoder).o2v = function (tag) {
  return this.h5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).i5j = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b5j(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.z5i(tag);
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
protoOf(AbstractJsonTreeDecoder).p2v = function (tag) {
  return this.i5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).j5j = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b5j(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.z5i(tag);
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
  var specialFp = this.x5c().u5a_1.p5c_1;
  if (specialFp || isFinite(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.a5j()));
};
protoOf(AbstractJsonTreeDecoder).q2v = function (tag) {
  return this.j5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).k5j = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b5j(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.z5i(tag);
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
  var specialFp = this.x5c().u5a_1.p5c_1;
  if (specialFp || isFinite_0(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.a5j()));
};
protoOf(AbstractJsonTreeDecoder).r2v = function (tag) {
  return this.k5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).l5j = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b5j(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.z5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = new Char(single(literal.z5c()));
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
protoOf(AbstractJsonTreeDecoder).s2v = function (tag) {
  return this.l5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).m5j = function (tag) {
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var value = this.b5j(tag);
  if (!(value instanceof JsonPrimitive)) {
    var tmp = getKClass(JsonPrimitive).sa();
    var tmp_0 = getKClassFromExpression(value).sa();
    var tmp$ret$0 = this.z5i(tag);
    throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
  }
  var value_0 = value;
  if (!(value_0 instanceof JsonLiteral))
    throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.z5i(tag), toString(this.a5j()));
  if (!value_0.g5d_1 && !this.x5c().u5a_1.h5c_1) {
    throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.z5i(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.a5j()));
  }
  return value_0.i5d_1;
};
protoOf(AbstractJsonTreeDecoder).t2v = function (tag) {
  return this.m5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).n5j = function (tag, inlineDescriptor) {
  var tmp;
  if (get_isUnsignedNumber(inlineDescriptor)) {
    var tmp_0 = this.x5c();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.b5j(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = inlineDescriptor.n2e();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_1 = getKClass(JsonPrimitive).sa();
      var tmp_2 = getKClassFromExpression(tmp2).sa();
      var tmp$ret$0 = this.z5i(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    var lexer = StringJsonLexer_0(tmp_0, tmp2.z5c());
    tmp = new JsonDecoderForUnsignedTypes(lexer, this.x5c());
  } else {
    tmp = protoOf(NamedValueDecoder).v2v.call(this, tag, inlineDescriptor);
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).v2v = function (tag, inlineDescriptor) {
  return this.n5j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).w2g = function (descriptor) {
  return !(this.g2v() == null) ? protoOf(NamedValueDecoder).w2g.call(this, descriptor) : (new JsonPrimitiveDecoder(this.x5c(), this.t(), this.x5i_1)).w2g(descriptor);
};
function coerceInputValue_0($this, descriptor, index, tag) {
  var tmp0 = $this.x5c();
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.l2f(index);
    var elementDescriptor = descriptor.k2f(index);
    var tmp;
    if (isOptional && !elementDescriptor.z2e()) {
      var tmp_0 = $this.b5j(tag);
      tmp = tmp_0 instanceof JsonNull;
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.d2f(), ENUM_getInstance())) {
      var tmp_1;
      if (elementDescriptor.z2e()) {
        var tmp_2 = $this.b5j(tag);
        tmp_1 = tmp_2 instanceof JsonNull;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp_3 = $this.b5j(tag);
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
      var coerceToNull = !tmp0.u5a_1.k5c_1 && elementDescriptor.z2e();
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
  $this.x5j_1 = (!$this.x5c().u5a_1.k5c_1 && !descriptor.l2f(index) && descriptor.k2f(index).z2e());
  return $this.x5j_1;
}
function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
  AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
  this.u5j_1 = value;
  this.v5j_1 = polyDescriptor;
  this.w5j_1 = 0;
  this.x5j_1 = false;
}
protoOf(JsonTreeDecoder).t = function () {
  return this.u5j_1;
};
protoOf(JsonTreeDecoder).q2h = function (descriptor) {
  while (this.w5j_1 < descriptor.f2f()) {
    var _unary__edvuaz = this.w5j_1;
    this.w5j_1 = _unary__edvuaz + 1 | 0;
    var name = this.b2v(descriptor, _unary__edvuaz);
    var index = this.w5j_1 - 1 | 0;
    this.x5j_1 = false;
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
      tmp = !this.y5i_1.m5c_1 || !coerceInputValue_0(this, descriptor, index, name);
    } else {
      tmp = false;
    }
    if (tmp) {
      return index;
    }
  }
  return -1;
};
protoOf(JsonTreeDecoder).k2g = function () {
  return !this.x5j_1 && protoOf(AbstractJsonTreeDecoder).k2g.call(this);
};
protoOf(JsonTreeDecoder).c2v = function (descriptor, index) {
  var strategy = namingStrategy(descriptor, this.x5c());
  var baseName = descriptor.h2f(index);
  if (strategy == null) {
    if (!this.y5i_1.q5c_1)
      return baseName;
    if (this.t().f2().u1(baseName))
      return baseName;
  }
  var deserializationNamesMap_0 = deserializationNamesMap(this.x5c(), descriptor);
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
  var fallbackName = strategy == null ? null : strategy.p5f(descriptor, index, baseName);
  return fallbackName == null ? baseName : fallbackName;
};
protoOf(JsonTreeDecoder).b5j = function (tag) {
  return getValue(this.t(), tag);
};
protoOf(JsonTreeDecoder).z2g = function (descriptor) {
  if (descriptor === this.v5j_1) {
    var tmp = this.x5c();
    var tmp2 = this.a5j();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = this.v5j_1.n2e();
    if (!(tmp2 instanceof JsonObject)) {
      var tmp_0 = getKClass(JsonObject).sa();
      var tmp_1 = getKClassFromExpression(tmp2).sa();
      var tmp$ret$0 = this.i2v();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return new JsonTreeDecoder(tmp, tmp2, this.x5i_1, this.v5j_1);
  }
  return protoOf(AbstractJsonTreeDecoder).z2g.call(this, descriptor);
};
protoOf(JsonTreeDecoder).a2h = function (descriptor) {
  var tmp;
  if (this.y5i_1.g5c_1) {
    tmp = true;
  } else {
    var tmp_0 = descriptor.d2f();
    tmp = tmp_0 instanceof PolymorphicKind;
  }
  if (tmp)
    return Unit_instance;
  var strategy = namingStrategy(descriptor, this.x5c());
  var tmp_1;
  if (strategy == null && !this.y5i_1.q5c_1) {
    tmp_1 = jsonCachedSerialNames(descriptor);
  } else if (!(strategy == null)) {
    tmp_1 = deserializationNamesMap(this.x5c(), descriptor).f2();
  } else {
    var tmp_2 = jsonCachedSerialNames(descriptor);
    var tmp0_safe_receiver = get_schemaCache(this.x5c()).a5i(descriptor, get_JsonDeserializationNamesKey());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f2();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
    tmp_1 = plus_0(tmp_2, tmp$ret$0);
  }
  var names = tmp_1;
  var _iterator__ex2g4s = this.t().f2().j();
  while (_iterator__ex2g4s.k()) {
    var key = _iterator__ex2g4s.l();
    if (!names.u1(key) && !(key === this.x5i_1)) {
      throw UnknownKeyException(key, this.t().toString());
    }
  }
};
function JsonTreeListDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.e5k_1 = value;
  this.f5k_1 = this.e5k_1.m();
  this.g5k_1 = -1;
}
protoOf(JsonTreeListDecoder).t = function () {
  return this.e5k_1;
};
protoOf(JsonTreeListDecoder).c2v = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListDecoder).b5j = function (tag) {
  return this.e5k_1.o(toInt(tag));
};
protoOf(JsonTreeListDecoder).q2h = function (descriptor) {
  while (this.g5k_1 < (this.f5k_1 - 1 | 0)) {
    this.g5k_1 = this.g5k_1 + 1 | 0;
    return this.g5k_1;
  }
  return -1;
};
function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
  this.n5k_1 = value;
  this.w2v('primitive');
}
protoOf(JsonPrimitiveDecoder).t = function () {
  return this.n5k_1;
};
protoOf(JsonPrimitiveDecoder).q2h = function (descriptor) {
  return 0;
};
protoOf(JsonPrimitiveDecoder).b5j = function (tag) {
  // Inline function 'kotlin.require' call
  if (!(tag === 'primitive')) {
    var message = "This input can only handle primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.n5k_1;
};
function JsonTreeMapDecoder(json, value) {
  JsonTreeDecoder.call(this, json, value);
  this.y5k_1 = value;
  this.z5k_1 = toList(this.y5k_1.f2());
  this.a5l_1 = imul(this.z5k_1.m(), 2);
  this.b5l_1 = -1;
}
protoOf(JsonTreeMapDecoder).t = function () {
  return this.y5k_1;
};
protoOf(JsonTreeMapDecoder).c2v = function (descriptor, index) {
  var i = index / 2 | 0;
  return this.z5k_1.o(i);
};
protoOf(JsonTreeMapDecoder).q2h = function (descriptor) {
  while (this.b5l_1 < (this.a5l_1 - 1 | 0)) {
    this.b5l_1 = this.b5l_1 + 1 | 0;
    return this.b5l_1;
  }
  return -1;
};
protoOf(JsonTreeMapDecoder).b5j = function (tag) {
  return (this.b5l_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.y5k_1, tag);
};
protoOf(JsonTreeMapDecoder).a2h = function (descriptor) {
};
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.m2d())).y2g(deserializer);
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
  this.n5i_1 = begin;
  this.o5i_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.d2f();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.k2f(0), _this__u8e3s4.o2h());
        var keyKind = keyDescriptor.d2f();
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
          if (_this__u8e3s4.u5a_1.i5c_1) {
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
  if (equals(_this__u8e3s4.d2f(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.e2f()) {
    tmp = carrierDescriptor(_this__u8e3s4.k2f(0), module_0);
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
  $this.c5l(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.c5l(lastPosition, currentPosition);
  var result = $this.k5b_1.toString();
  $this.k5b_1.oc(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.j5b_1);
  $this.j5b_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.d5l(), $this.h5b_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.e5l(currentPosition);
  if (currentPosition === -1) {
    $this.l5f('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.d5l();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.d5l(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.l5f("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.k5b_1.c8(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.h5b_1 = startPos;
    $this.f5l();
    if (($this.h5b_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.l5f('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.h5b_1);
  }
  $this.k5b_1.c8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.l5f("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.e5l(start);
  if (current >= charSequenceLength($this.d5l()) || current === -1) {
    $this.l5f('EOF');
  }
  var tmp = $this.d5l();
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
      $this.l5f("Expected valid boolean literal prefix, but had '" + $this.q5g() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.d5l()) - current | 0) < literalSuffix.length) {
    $this.l5f('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.d5l(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.l5f("Expected valid boolean literal prefix, but had '" + $this.q5g() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.h5b_1 = current + literalSuffix.length | 0;
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
  this.h5b_1 = 0;
  this.i5b_1 = new JsonPath();
  this.j5b_1 = null;
  this.k5b_1 = StringBuilder_init_$Create$();
}
protoOf(AbstractJsonLexer).f5l = function () {
};
protoOf(AbstractJsonLexer).d5i = function () {
  var current = this.g5l();
  var source = this.d5l();
  if (current >= charSequenceLength(source) || current === -1)
    return false;
  if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
    this.h5b_1 = this.h5b_1 + 1 | 0;
    return true;
  }
  return false;
};
protoOf(AbstractJsonLexer).h5l = function (c) {
  return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
};
protoOf(AbstractJsonLexer).l5b = function () {
  var nextToken = this.s5g();
  if (!(nextToken === 10)) {
    this.l5f('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.d5l(), this.h5b_1 - 1 | 0)) + ' instead');
  }
};
protoOf(AbstractJsonLexer).m5g = function (expected) {
  var token = this.s5g();
  if (!(token === expected)) {
    this.i5l(expected);
  }
  return token;
};
protoOf(AbstractJsonLexer).j5l = function (expected) {
  if (this.h5b_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
      var snapshot = this.h5b_1;
      try {
        this.h5b_1 = this.h5b_1 - 1 | 0;
        tmp$ret$1 = this.q5g();
        break $l$block;
      }finally {
        this.h5b_1 = snapshot;
      }
    }
    var inputLiteral = tmp$ret$1;
    if (inputLiteral === 'null') {
      this.k5f("Expected string literal but 'null' literal was found", this.h5b_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
    }
  }
  this.i5l(charToTokenClass(expected));
};
protoOf(AbstractJsonLexer).k5l = function (expectedToken, wasConsumed) {
  var expected = tokenDescription(expectedToken);
  var position = wasConsumed ? this.h5b_1 - 1 | 0 : this.h5b_1;
  var s = this.h5b_1 === charSequenceLength(this.d5l()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.d5l(), position));
  this.l5f('Expected ' + expected + ", but had '" + s + "' instead", position);
};
protoOf(AbstractJsonLexer).i5l = function (expectedToken, wasConsumed, $super) {
  wasConsumed = wasConsumed === VOID ? true : wasConsumed;
  return $super === VOID ? this.k5l(expectedToken, wasConsumed) : $super.k5l.call(this, expectedToken, wasConsumed);
};
protoOf(AbstractJsonLexer).n5g = function () {
  var source = this.d5l();
  var cpos = this.h5b_1;
  $l$loop_0: while (true) {
    cpos = this.e5l(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var ch = charSequenceGet(source, cpos);
    if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
      cpos = cpos + 1 | 0;
      continue $l$loop_0;
    }
    this.h5b_1 = cpos;
    return charToTokenClass(ch);
  }
  this.h5b_1 = cpos;
  return 10;
};
protoOf(AbstractJsonLexer).e5i = function (doConsume) {
  var current = this.g5l();
  current = this.e5l(current);
  var len = charSequenceLength(this.d5l()) - current | 0;
  if (len < 4 || current === -1)
    return false;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charCodeAt('null', i) === charSequenceGet(this.d5l(), current + i | 0)))
        return false;
    }
     while (inductionVariable <= 3);
  if (len > 4 && charToTokenClass(charSequenceGet(this.d5l(), current + 4 | 0)) === 0)
    return false;
  if (doConsume) {
    this.h5b_1 = current + 4 | 0;
  }
  return true;
};
protoOf(AbstractJsonLexer).p5i = function (doConsume, $super) {
  doConsume = doConsume === VOID ? true : doConsume;
  return $super === VOID ? this.e5i(doConsume) : $super.e5i.call(this, doConsume);
};
protoOf(AbstractJsonLexer).f5i = function (isLenient) {
  var token = this.n5g();
  var tmp;
  if (isLenient) {
    if (!(token === 1) && !(token === 0))
      return null;
    tmp = this.q5g();
  } else {
    if (!(token === 1))
      return null;
    tmp = this.p5g();
  }
  var string = tmp;
  this.j5b_1 = string;
  return string;
};
protoOf(AbstractJsonLexer).l5l = function () {
  this.j5b_1 = null;
};
protoOf(AbstractJsonLexer).m5l = function (startPos, endPos) {
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.d5l();
  return toString(charSequenceSubSequence(this_0, startPos, endPos));
};
protoOf(AbstractJsonLexer).p5g = function () {
  if (!(this.j5b_1 == null)) {
    return takePeeked(this);
  }
  return this.i5i();
};
protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
  var currentPosition = current;
  var lastPosition = startPosition;
  var char = charSequenceGet(source, currentPosition);
  var usedAppend = false;
  while (!(char === _Char___init__impl__6a9atx(34))) {
    if (char === _Char___init__impl__6a9atx(92)) {
      usedAppend = true;
      currentPosition = this.e5l(appendEscape(this, lastPosition, currentPosition));
      if (currentPosition === -1) {
        this.l5f('Unexpected EOF', currentPosition);
      }
      lastPosition = currentPosition;
    } else {
      currentPosition = currentPosition + 1 | 0;
      if (currentPosition >= charSequenceLength(source)) {
        usedAppend = true;
        this.c5l(lastPosition, currentPosition);
        currentPosition = this.e5l(currentPosition);
        if (currentPosition === -1) {
          this.l5f('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
    }
    char = charSequenceGet(source, currentPosition);
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.m5l(lastPosition, currentPosition);
  } else {
    tmp = decodedString(this, lastPosition, currentPosition);
  }
  var string = tmp;
  this.h5b_1 = currentPosition + 1 | 0;
  return string;
};
protoOf(AbstractJsonLexer).j5i = function () {
  var result = this.q5g();
  if (result === 'null' && wasUnquotedString(this)) {
    this.l5f("Unexpected 'null' value instead of string literal");
  }
  return result;
};
protoOf(AbstractJsonLexer).q5g = function () {
  if (!(this.j5b_1 == null)) {
    return takePeeked(this);
  }
  var current = this.g5l();
  if (current >= charSequenceLength(this.d5l()) || current === -1) {
    this.l5f('EOF', current);
  }
  var token = charToTokenClass(charSequenceGet(this.d5l(), current));
  if (token === 1) {
    return this.p5g();
  }
  if (!(token === 0)) {
    this.l5f('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.d5l(), current)));
  }
  var usedAppend = false;
  while (charToTokenClass(charSequenceGet(this.d5l(), current)) === 0) {
    current = current + 1 | 0;
    if (current >= charSequenceLength(this.d5l())) {
      usedAppend = true;
      this.c5l(this.h5b_1, current);
      var eof = this.e5l(current);
      if (eof === -1) {
        this.h5b_1 = current;
        return decodedString(this, 0, 0);
      } else {
        current = eof;
      }
    }
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.m5l(this.h5b_1, current);
  } else {
    tmp = decodedString(this, this.h5b_1, current);
  }
  var result = tmp;
  this.h5b_1 = current;
  return result;
};
protoOf(AbstractJsonLexer).c5l = function (fromIndex, toIndex) {
  this.k5b_1.ic(this.d5l(), fromIndex, toIndex);
};
protoOf(AbstractJsonLexer).h5i = function (allowLenientStrings) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var tokenStack = ArrayList_init_$Create$();
  var lastToken = this.n5g();
  if (!(lastToken === 8) && !(lastToken === 6)) {
    this.q5g();
    return Unit_instance;
  }
  $l$loop: while (true) {
    lastToken = this.n5g();
    if (lastToken === 1) {
      if (allowLenientStrings)
        this.q5g();
      else
        this.i5i();
      continue $l$loop;
    }
    var tmp0_subject = lastToken;
    if (tmp0_subject === 8 || tmp0_subject === 6) {
      tokenStack.e(lastToken);
    } else if (tmp0_subject === 9) {
      if (!(last(tokenStack) === 8))
        throw JsonDecodingException_0(this.h5b_1, 'found ] instead of } at path: ' + this.i5b_1.toString(), this.d5l());
      removeLast(tokenStack);
    } else if (tmp0_subject === 7) {
      if (!(last(tokenStack) === 6))
        throw JsonDecodingException_0(this.h5b_1, 'found } instead of ] at path: ' + this.i5b_1.toString(), this.d5l());
      removeLast(tokenStack);
    } else if (tmp0_subject === 10) {
      this.l5f('Unexpected end of input due to malformed JSON during ignoring unknown keys');
    }
    this.s5g();
    if (tokenStack.m() === 0)
      return Unit_instance;
  }
};
protoOf(AbstractJsonLexer).toString = function () {
  return "JsonReader(source='" + toString(this.d5l()) + "', currentPosition=" + this.h5b_1 + ')';
};
protoOf(AbstractJsonLexer).g5i = function (key) {
  var processed = this.m5l(0, this.h5b_1);
  var lastIndexOf_0 = lastIndexOf(processed, key);
  this.k5f("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
};
protoOf(AbstractJsonLexer).k5f = function (message, position, hint) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(hint) === 0) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  var hintMessage = tmp;
  throw JsonDecodingException_0(position, message + ' at path: ' + this.i5b_1.y5f() + hintMessage, this.d5l());
};
protoOf(AbstractJsonLexer).l5f = function (message, position, hint, $super) {
  position = position === VOID ? this.h5b_1 : position;
  hint = hint === VOID ? '' : hint;
  return $super === VOID ? this.k5f(message, position, hint) : $super.k5f.call(this, message, position, hint);
};
protoOf(AbstractJsonLexer).j5d = function () {
  var current = this.g5l();
  current = this.e5l(current);
  if (current >= charSequenceLength(this.d5l()) || current === -1) {
    this.l5f('EOF');
  }
  var tmp;
  if (charSequenceGet(this.d5l(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    if (current === charSequenceLength(this.d5l())) {
      this.l5f('EOF');
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
  $l$loop_4: while (!(current === charSequenceLength(this.d5l()))) {
    var ch = charSequenceGet(this.d5l(), current);
    if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
      if (current === start) {
        this.l5f('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
      }
      isExponentPositive = true;
      hasExponent = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
      if (current === start) {
        this.l5f("Unexpected symbol '-' in numeric literal");
      }
      isExponentPositive = false;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
      if (current === start) {
        this.l5f("Unexpected symbol '+' in numeric literal");
      }
      isExponentPositive = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45)) {
      if (!(current === start)) {
        this.l5f("Unexpected symbol '-' in numeric literal");
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
      this.l5f("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
      this.l5f('Numeric value overflow');
    }
  }
  var hasChars = !(current === start);
  if (start === current || (isNegative && start === (current - 1 | 0))) {
    this.l5f('Expected numeric literal');
  }
  if (hasQuotation) {
    if (!hasChars) {
      this.l5f('EOF');
    }
    if (!(charSequenceGet(this.d5l(), current) === _Char___init__impl__6a9atx(34))) {
      this.l5f('Expected closing quotation mark');
    }
    current = current + 1 | 0;
  }
  this.h5b_1 = current;
  if (hasExponent) {
    var doubleAccumulator = accumulator.i3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
    if (doubleAccumulator > (new Long(-1, 2147483647)).i3() || doubleAccumulator < (new Long(0, -2147483648)).i3()) {
      this.l5f('Numeric value overflow');
    }
    // Inline function 'kotlin.math.floor' call
    if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
      this.l5f("Can't convert " + doubleAccumulator + ' to Long');
    }
    accumulator = numberToLong(doubleAccumulator);
  }
  var tmp_0;
  if (isNegative) {
    tmp_0 = accumulator;
  } else if (!accumulator.equals(new Long(0, -2147483648))) {
    tmp_0 = accumulator.y2();
  } else {
    this.l5f('Numeric value overflow');
  }
  return tmp_0;
};
protoOf(AbstractJsonLexer).q5i = function () {
  var current = this.g5l();
  if (current === charSequenceLength(this.d5l())) {
    this.l5f('EOF');
  }
  var tmp;
  if (charSequenceGet(this.d5l(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var result = consumeBoolean2(this, current);
  if (hasQuotation) {
    if (this.h5b_1 === charSequenceLength(this.d5l())) {
      this.l5f('EOF');
    }
    if (!(charSequenceGet(this.d5l(), this.h5b_1) === _Char___init__impl__6a9atx(34))) {
      this.l5f('Expected closing quotation mark');
    }
    this.h5b_1 = this.h5b_1 + 1 | 0;
  }
  return result;
};
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().o5l_1;
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
  return c < 117 ? CharMappings_getInstance().n5l_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.n5l_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.o5l_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
function CharMappings() {
  CharMappings_instance = this;
  this.n5l_1 = charArray(117);
  this.o5l_1 = new Int8Array(126);
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
protoOf(StringJsonLexerWithComments).s5g = function () {
  var source = this.d5l();
  var cpos = this.g5l();
  if (cpos >= source.length || cpos === -1)
    return 10;
  this.h5b_1 = cpos + 1 | 0;
  return charToTokenClass(charCodeAt(source, cpos));
};
protoOf(StringJsonLexerWithComments).o5g = function () {
  var current = this.g5l();
  if (current >= this.d5l().length || current === -1)
    return false;
  return this.h5l(charCodeAt(this.d5l(), current));
};
protoOf(StringJsonLexerWithComments).c5i = function (expected) {
  var source = this.d5l();
  var current = this.g5l();
  if (current >= source.length || current === -1) {
    this.h5b_1 = -1;
    this.j5l(expected);
  }
  var c = charCodeAt(source, current);
  this.h5b_1 = current + 1 | 0;
  if (c === expected)
    return Unit_instance;
  else {
    this.j5l(expected);
  }
};
protoOf(StringJsonLexerWithComments).n5g = function () {
  var source = this.d5l();
  var cpos = this.g5l();
  if (cpos >= source.length || cpos === -1)
    return 10;
  this.h5b_1 = cpos;
  return charToTokenClass(charCodeAt(source, cpos));
};
protoOf(StringJsonLexerWithComments).g5l = function () {
  var current = this.h5b_1;
  if (current === -1)
    return current;
  var source = this.d5l();
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
          this.h5b_1 = source.length;
          this.l5f('Expected end of the block comment: "*/", but had EOF instead');
        } else {
          current = current + 2 | 0;
        }
        continue $l$loop_1;
      }
    }
    break $l$loop_1;
  }
  this.h5b_1 = current;
  return current;
};
function StringJsonLexer(source) {
  AbstractJsonLexer.call(this);
  this.y5l_1 = source;
}
protoOf(StringJsonLexer).d5l = function () {
  return this.y5l_1;
};
protoOf(StringJsonLexer).e5l = function (position) {
  return position < this.d5l().length ? position : -1;
};
protoOf(StringJsonLexer).s5g = function () {
  var source = this.d5l();
  var cpos = this.h5b_1;
  $l$loop: while (!(cpos === -1) && cpos < source.length) {
    var _unary__edvuaz = cpos;
    cpos = _unary__edvuaz + 1 | 0;
    var c = charCodeAt(source, _unary__edvuaz);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    this.h5b_1 = cpos;
    return charToTokenClass(c);
  }
  this.h5b_1 = source.length;
  return 10;
};
protoOf(StringJsonLexer).o5g = function () {
  var current = this.h5b_1;
  if (current === -1)
    return false;
  var source = this.d5l();
  $l$loop: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop;
    }
    this.h5b_1 = current;
    return this.h5l(c);
  }
  this.h5b_1 = current;
  return false;
};
protoOf(StringJsonLexer).g5l = function () {
  var current = this.h5b_1;
  if (current === -1)
    return current;
  var source = this.d5l();
  $l$loop: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop;
    }
  }
  this.h5b_1 = current;
  return current;
};
protoOf(StringJsonLexer).c5i = function (expected) {
  if (this.h5b_1 === -1) {
    this.j5l(expected);
  }
  var source = this.d5l();
  var cpos = this.h5b_1;
  $l$loop: while (cpos < source.length) {
    var _unary__edvuaz = cpos;
    cpos = _unary__edvuaz + 1 | 0;
    var c = charCodeAt(source, _unary__edvuaz);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    this.h5b_1 = cpos;
    if (c === expected)
      return Unit_instance;
    this.j5l(expected);
  }
  this.h5b_1 = -1;
  this.j5l(expected);
};
protoOf(StringJsonLexer).i5i = function () {
  this.c5i(_Char___init__impl__6a9atx(34));
  var current = this.h5b_1;
  var closingQuote = indexOf_0(this.d5l(), _Char___init__impl__6a9atx(34), current);
  if (closingQuote === -1) {
    this.q5g();
    this.k5l(1, false);
  }
  var inductionVariable = current;
  if (inductionVariable < closingQuote)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (charCodeAt(this.d5l(), i) === _Char___init__impl__6a9atx(92)) {
        return this.consumeString2(this.d5l(), this.h5b_1, i);
      }
    }
     while (inductionVariable < closingQuote);
  this.h5b_1 = closingQuote + 1 | 0;
  return substring(this.d5l(), current, closingQuote);
};
protoOf(StringJsonLexer).k5i = function (keyToMatch, isLenient) {
  var positionSnapshot = this.h5b_1;
  try {
    if (!(this.s5g() === 6))
      return null;
    var firstKey = this.f5i(isLenient);
    if (!(firstKey === keyToMatch))
      return null;
    this.l5l();
    if (!(this.s5g() === 5))
      return null;
    return this.f5i(isLenient);
  }finally {
    this.h5b_1 = positionSnapshot;
    this.l5l();
  }
};
function StringJsonLexer_0(json, source) {
  return !json.u5a_1.u5c_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.w5a_1;
}
function JsonToStringWriter() {
  this.x5a_1 = StringBuilder_init_$Create$_0(128);
}
protoOf(JsonToStringWriter).p5e = function (value) {
  this.x5a_1.mc(value);
};
protoOf(JsonToStringWriter).j5e = function (char) {
  this.x5a_1.c8(char);
};
protoOf(JsonToStringWriter).l5e = function (text) {
  this.x5a_1.b8(text);
};
protoOf(JsonToStringWriter).v5e = function (text) {
  printQuoted(this.x5a_1, text);
};
protoOf(JsonToStringWriter).y5a = function () {
  this.x5a_1.pc();
};
protoOf(JsonToStringWriter).toString = function () {
  return this.x5a_1.toString();
};
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(defer$1).z2e = get_isNullable;
protoOf(defer$1).e2f = get_isInline;
protoOf(defer$1).g2f = get_annotations;
protoOf(PolymorphismValidator).s2x = contextual;
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
