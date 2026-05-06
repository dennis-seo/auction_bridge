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
  this.n58_1 = configuration;
  this.o58_1 = serializersModule;
  this.p58_1 = new DescriptorSchemaCache();
}
protoOf(Json).g2f = function () {
  return this.o58_1;
};
protoOf(Json).h2c = function (serializer, value) {
  var result = new JsonToStringWriter();
  try {
    encodeByWriter(this, result, serializer, value);
    return result.toString();
  }finally {
    result.r58();
  }
};
protoOf(Json).i2c = function (deserializer, string) {
  var lexer = StringJsonLexer_0(this, string);
  var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.e2b(), null);
  var result = input.q2e(deserializer);
  lexer.e59();
  return result;
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.x59();
  return new JsonImpl(conf, builder.w59_1);
}
function JsonBuilder(json) {
  this.f59_1 = json.n58_1.y59_1;
  this.g59_1 = json.n58_1.d5a_1;
  this.h59_1 = json.n58_1.z59_1;
  this.i59_1 = json.n58_1.a5a_1;
  this.j59_1 = json.n58_1.c5a_1;
  this.k59_1 = json.n58_1.e5a_1;
  this.l59_1 = json.n58_1.f5a_1;
  this.m59_1 = json.n58_1.h5a_1;
  this.n59_1 = json.n58_1.o5a_1;
  this.o59_1 = json.n58_1.j5a_1;
  this.p59_1 = json.n58_1.k5a_1;
  this.q59_1 = json.n58_1.l5a_1;
  this.r59_1 = json.n58_1.m5a_1;
  this.s59_1 = json.n58_1.n5a_1;
  this.t59_1 = json.n58_1.i5a_1;
  this.u59_1 = json.n58_1.b5a_1;
  this.v59_1 = json.n58_1.g5a_1;
  this.w59_1 = json.g2f();
}
protoOf(JsonBuilder).x59 = function () {
  if (this.v59_1) {
    // Inline function 'kotlin.require' call
    if (!(this.m59_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.n59_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
      var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  if (!this.j59_1) {
    // Inline function 'kotlin.require' call
    if (!(this.k59_1 === '    ')) {
      var message_1 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  } else if (!(this.k59_1 === '    ')) {
    var tmp0 = this.k59_1;
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
      var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.k59_1;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
  }
  return new JsonConfiguration(this.f59_1, this.h59_1, this.i59_1, this.u59_1, this.j59_1, this.g59_1, this.k59_1, this.l59_1, this.v59_1, this.m59_1, this.t59_1, this.o59_1, this.p59_1, this.q59_1, this.r59_1, this.s59_1, this.n59_1);
};
function validateConfiguration($this) {
  if (equals($this.g2f(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new PolymorphismValidator($this.n58_1.g5a_1, $this.n58_1.h5a_1);
  $this.g2f().z2u(collector);
}
function JsonImpl(configuration, module_0) {
  Json.call(this, configuration, module_0);
  validateConfiguration(this);
}
function JsonClassDiscriminator(discriminator) {
  this.p5a_1 = discriminator;
}
protoOf(JsonClassDiscriminator).equals = function (other) {
  if (!(other instanceof JsonClassDiscriminator))
    return false;
  var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
  if (!(this.p5a_1 === tmp0_other_with_cast.p5a_1))
    return false;
  return true;
};
protoOf(JsonClassDiscriminator).hashCode = function () {
  return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.p5a_1);
};
protoOf(JsonClassDiscriminator).toString = function () {
  return '@kotlinx.serialization.json.JsonClassDiscriminator(' + 'discriminator=' + this.p5a_1 + ')';
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
  this.y59_1 = encodeDefaults;
  this.z59_1 = ignoreUnknownKeys;
  this.a5a_1 = isLenient;
  this.b5a_1 = allowStructuredMapKeys;
  this.c5a_1 = prettyPrint;
  this.d5a_1 = explicitNulls;
  this.e5a_1 = prettyPrintIndent;
  this.f5a_1 = coerceInputValues;
  this.g5a_1 = useArrayPolymorphism;
  this.h5a_1 = classDiscriminator;
  this.i5a_1 = allowSpecialFloatingPointValues;
  this.j5a_1 = useAlternativeNames;
  this.k5a_1 = namingStrategy;
  this.l5a_1 = decodeEnumsCaseInsensitive;
  this.m5a_1 = allowTrailingComma;
  this.n5a_1 = allowComments;
  this.o5a_1 = classDiscriminatorMode;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.y59_1 + ', ignoreUnknownKeys=' + this.z59_1 + ', isLenient=' + this.a5a_1 + ', ' + ('allowStructuredMapKeys=' + this.b5a_1 + ', prettyPrint=' + this.c5a_1 + ', explicitNulls=' + this.d5a_1 + ', ') + ("prettyPrintIndent='" + this.e5a_1 + "', coerceInputValues=" + this.f5a_1 + ', useArrayPolymorphism=' + this.g5a_1 + ', ') + ("classDiscriminator='" + this.h5a_1 + "', allowSpecialFloatingPointValues=" + this.i5a_1 + ', ') + ('useAlternativeNames=' + this.j5a_1 + ', namingStrategy=' + toString_0(this.k5a_1) + ', decodeEnumsCaseInsensitive=' + this.l5a_1 + ', ') + ('allowTrailingComma=' + this.m5a_1 + ', allowComments=' + this.n5a_1 + ', classDiscriminatorMode=' + this.o5a_1.toString() + ')');
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
  return this.s5a();
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
  this.t5a_1 = content;
}
protoOf(JsonObject).equals = function (other) {
  return equals(this.t5a_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.t5a_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.t5a_1.r();
  return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
};
protoOf(JsonObject).q2y = function (key) {
  return this.t5a_1.c2(key);
};
protoOf(JsonObject).c2 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.q2y((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).r2y = function (key) {
  return this.t5a_1.e2(key);
};
protoOf(JsonObject).e2 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.r2y((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).p = function () {
  return this.t5a_1.p();
};
protoOf(JsonObject).r = function () {
  return this.t5a_1.r();
};
protoOf(JsonObject).f2 = function () {
  return this.t5a_1.f2();
};
protoOf(JsonObject).m = function () {
  return this.t5a_1.m();
};
protoOf(JsonObject).g2 = function () {
  return this.t5a_1.g2();
};
function Companion_2() {
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function JsonArray(content) {
  JsonElement.call(this);
  this.u5a_1 = content;
}
protoOf(JsonArray).equals = function (other) {
  return equals(this.u5a_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.u5a_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.u5a_1, ',', '[', ']');
};
protoOf(JsonArray).v5a = function (element) {
  return this.u5a_1.u1(element);
};
protoOf(JsonArray).u1 = function (element) {
  if (!(element instanceof JsonElement))
    return false;
  return this.v5a(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).w5a = function (elements) {
  return this.u5a_1.v1(elements);
};
protoOf(JsonArray).v1 = function (elements) {
  return this.w5a(elements);
};
protoOf(JsonArray).o = function (index) {
  return this.u5a_1.o(index);
};
protoOf(JsonArray).p = function () {
  return this.u5a_1.p();
};
protoOf(JsonArray).j = function () {
  return this.u5a_1.j();
};
protoOf(JsonArray).w1 = function (index) {
  return this.u5a_1.w1(index);
};
protoOf(JsonArray).x1 = function (fromIndex, toIndex) {
  return this.u5a_1.x1(fromIndex, toIndex);
};
protoOf(JsonArray).m = function () {
  return this.u5a_1.m();
};
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.x5a_1 = 'null';
}
protoOf(JsonNull).s5a = function () {
  return this.x5a_1;
};
protoOf(JsonNull).y5a = function () {
  return JsonNullSerializer_getInstance();
};
protoOf(JsonNull).g2n = function (typeParamsSerializers) {
  return this.y5a();
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
  this.z5a_1 = isString;
  this.a5b_1 = coerceToInlineType;
  this.b5b_1 = toString(body);
  if (!(this.a5b_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.a5b_1.w2c()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).s5a = function () {
  return this.b5b_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.z5a_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.b5b_1);
    tmp = this_0.toString();
  } else {
    tmp = this.b5b_1;
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
  if (!(this.z5a_1 === other.z5a_1))
    return false;
  if (!(this.b5b_1 === other.b5b_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.z5a_1);
  result = imul(31, result) + getStringHashCode(this.b5b_1) | 0;
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
  return toBooleanStrictOrNull_0(_this__u8e3s4.s5a());
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.s5a())).c5b();
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
    throw NumberFormatException_init_$Create$(_this__u8e3s4.s5a() + ' is not an Int');
  return result.d1();
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.s5a())).c5b();
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
  var this_0 = _this__u8e3s4.s5a();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.s5a());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.s5a();
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
  $this$buildSerialDescriptor.p2b('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.p2b('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.p2b('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.p2b('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.p2b('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().d5b_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().e5b_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().f5b_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().g5b_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().h5b_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.i5b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).e2b = function () {
  return this.i5b_1;
};
protoOf(JsonElementSerializer).j5b = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.j2g(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.j2g(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.j2g(JsonArraySerializer_getInstance(), value);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
};
protoOf(JsonElementSerializer).f2b = function (encoder, value) {
  return this.j5b(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonElementSerializer).g2b = function (decoder) {
  var input = asJsonDecoder(decoder);
  return input.r5a();
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
  this.d5b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).e2b = function () {
  return this.d5b_1;
};
protoOf(JsonPrimitiveSerializer).k5b = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.j2g(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.j2g(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).f2b = function (encoder, value) {
  return this.k5b(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
protoOf(JsonPrimitiveSerializer).g2b = function (decoder) {
  var result = asJsonDecoder(decoder).r5a();
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
  this.e5b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).e2b = function () {
  return this.e5b_1;
};
protoOf(JsonNullSerializer).l5b = function (encoder, value) {
  verify(encoder);
  encoder.m2f();
};
protoOf(JsonNullSerializer).f2b = function (encoder, value) {
  return this.l5b(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
protoOf(JsonNullSerializer).g2b = function (decoder) {
  verify_0(decoder);
  if (decoder.c2e()) {
    throw new JsonDecodingException("Expected 'null' literal");
  }
  decoder.d2e();
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
  this.f5b_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).e2b = function () {
  return this.f5b_1;
};
protoOf(JsonLiteralSerializer).m5b = function (encoder, value) {
  verify(encoder);
  if (value.z5a_1) {
    return encoder.v2f(value.b5b_1);
  }
  if (!(value.a5b_1 == null)) {
    return encoder.x2f(value.a5b_1).v2f(value.b5b_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.b5b_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.r2f(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.b5b_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).om_1;
    var tmp_1 = encoder.x2f(serializer_0(Companion_getInstance()).e2b());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.r2f(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.b5b_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.t2f(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.b5b_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.n2f(tmp3_safe_receiver);
  }
  encoder.v2f(value.b5b_1);
};
protoOf(JsonLiteralSerializer).f2b = function (encoder, value) {
  return this.m5b(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
protoOf(JsonLiteralSerializer).g2b = function (decoder) {
  var result = asJsonDecoder(decoder).r5a();
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
  this.n5b_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).e2b();
  this.o5b_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).f2c = function () {
  return this.o5b_1;
};
protoOf(JsonObjectDescriptor).z2c = function (index) {
  return this.n5b_1.z2c(index);
};
protoOf(JsonObjectDescriptor).a2d = function (name) {
  return this.n5b_1.a2d(name);
};
protoOf(JsonObjectDescriptor).b2d = function (index) {
  return this.n5b_1.b2d(index);
};
protoOf(JsonObjectDescriptor).c2d = function (index) {
  return this.n5b_1.c2d(index);
};
protoOf(JsonObjectDescriptor).d2d = function (index) {
  return this.n5b_1.d2d(index);
};
protoOf(JsonObjectDescriptor).v2c = function () {
  return this.n5b_1.v2c();
};
protoOf(JsonObjectDescriptor).r2c = function () {
  return this.n5b_1.r2c();
};
protoOf(JsonObjectDescriptor).w2c = function () {
  return this.n5b_1.w2c();
};
protoOf(JsonObjectDescriptor).x2c = function () {
  return this.n5b_1.x2c();
};
protoOf(JsonObjectDescriptor).y2c = function () {
  return this.n5b_1.y2c();
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.g5b_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).e2b = function () {
  return this.g5b_1;
};
protoOf(JsonObjectSerializer).p5b = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).f2b(encoder, value);
};
protoOf(JsonObjectSerializer).f2b = function (encoder, value) {
  return this.p5b(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
protoOf(JsonObjectSerializer).g2b = function (decoder) {
  verify_0(decoder);
  return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).g2b(decoder));
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonArrayDescriptor() {
  JsonArrayDescriptor_instance = this;
  this.q5b_1 = ListSerializer(JsonElementSerializer_getInstance()).e2b();
  this.r5b_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).f2c = function () {
  return this.r5b_1;
};
protoOf(JsonArrayDescriptor).z2c = function (index) {
  return this.q5b_1.z2c(index);
};
protoOf(JsonArrayDescriptor).a2d = function (name) {
  return this.q5b_1.a2d(name);
};
protoOf(JsonArrayDescriptor).b2d = function (index) {
  return this.q5b_1.b2d(index);
};
protoOf(JsonArrayDescriptor).c2d = function (index) {
  return this.q5b_1.c2d(index);
};
protoOf(JsonArrayDescriptor).d2d = function (index) {
  return this.q5b_1.d2d(index);
};
protoOf(JsonArrayDescriptor).v2c = function () {
  return this.q5b_1.v2c();
};
protoOf(JsonArrayDescriptor).r2c = function () {
  return this.q5b_1.r2c();
};
protoOf(JsonArrayDescriptor).w2c = function () {
  return this.q5b_1.w2c();
};
protoOf(JsonArrayDescriptor).x2c = function () {
  return this.q5b_1.x2c();
};
protoOf(JsonArrayDescriptor).y2c = function () {
  return this.q5b_1.y2c();
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.h5b_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).e2b = function () {
  return this.h5b_1;
};
protoOf(JsonArraySerializer).s5b = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).f2b(encoder, value);
};
protoOf(JsonArraySerializer).f2b = function (encoder, value) {
  return this.s5b(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
protoOf(JsonArraySerializer).g2b = function (decoder) {
  verify_0(decoder);
  return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).g2b(decoder));
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
  var tmp0 = $this.t5b_1;
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
  this.t5b_1 = lazy($deferred);
}
protoOf(defer$1).f2c = function () {
  return _get_original__l7ku1m(this).f2c();
};
protoOf(defer$1).v2c = function () {
  return _get_original__l7ku1m(this).v2c();
};
protoOf(defer$1).x2c = function () {
  return _get_original__l7ku1m(this).x2c();
};
protoOf(defer$1).z2c = function (index) {
  return _get_original__l7ku1m(this).z2c(index);
};
protoOf(defer$1).a2d = function (name) {
  return _get_original__l7ku1m(this).a2d(name);
};
protoOf(defer$1).b2d = function (index) {
  return _get_original__l7ku1m(this).b2d(index);
};
protoOf(defer$1).c2d = function (index) {
  return _get_original__l7ku1m(this).c2d(index);
};
protoOf(defer$1).d2d = function (index) {
  return _get_original__l7ku1m(this).d2d(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.u5b_1 = writer;
  this.v5b_1 = true;
}
protoOf(Composer).w5b = function () {
  this.v5b_1 = true;
};
protoOf(Composer).x5b = function () {
  return Unit_instance;
};
protoOf(Composer).y5b = function () {
  this.v5b_1 = false;
};
protoOf(Composer).z5b = function () {
  this.v5b_1 = false;
};
protoOf(Composer).a5c = function () {
  return Unit_instance;
};
protoOf(Composer).b5c = function (v) {
  return this.u5b_1.c5c(v);
};
protoOf(Composer).d5c = function (v) {
  return this.u5b_1.e5c(v);
};
protoOf(Composer).f5c = function (v) {
  return this.u5b_1.e5c(v.toString());
};
protoOf(Composer).g5c = function (v) {
  return this.u5b_1.e5c(v.toString());
};
protoOf(Composer).h5c = function (v) {
  return this.u5b_1.i5c(toLong(v));
};
protoOf(Composer).j5c = function (v) {
  return this.u5b_1.i5c(toLong(v));
};
protoOf(Composer).k5c = function (v) {
  return this.u5b_1.i5c(toLong(v));
};
protoOf(Composer).l5c = function (v) {
  return this.u5b_1.i5c(v);
};
protoOf(Composer).m5c = function (v) {
  return this.u5b_1.e5c(v.toString());
};
protoOf(Composer).n5c = function (value) {
  return this.u5b_1.o5c(value);
};
function Composer_0(sb, json) {
  return json.n58_1.c5a_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.r5c_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).k5c = function (v) {
  if (this.r5c_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.n5c(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.d5c(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).l5c = function (v) {
  if (this.r5c_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.n5c(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.d5c(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).h5c = function (v) {
  if (this.r5c_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.n5c(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.d5c(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).j5c = function (v) {
  if (this.r5c_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.n5c(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.d5c(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.u5c_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).n5c = function (value) {
  if (this.u5c_1) {
    protoOf(Composer).n5c.call(this, value);
  } else {
    protoOf(Composer).d5c.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.x5c_1 = json;
  this.y5c_1 = 0;
}
protoOf(ComposerWithPrettyPrint).w5b = function () {
  this.v5b_1 = true;
  this.y5c_1 = this.y5c_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).x5b = function () {
  this.y5c_1 = this.y5c_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).y5b = function () {
  this.v5b_1 = false;
  this.d5c('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.y5c_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.d5c(this.x5c_1.n58_1.e5a_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).z5b = function () {
  if (this.v5b_1)
    this.v5b_1 = false;
  else {
    this.y5b();
  }
};
protoOf(ComposerWithPrettyPrint).a5c = function () {
  this.b5c(_Char___init__impl__6a9atx(32));
};
function readIfAbsent($this, descriptor, index) {
  $this.a5d_1 = (!descriptor.d2d(index) && descriptor.c2d(index).r2c());
  return $this.a5d_1;
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
  tmp.z5c_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
  this.a5d_1 = false;
}
protoOf(JsonElementMarker).b5d = function (index) {
  this.z5c_1.x2k(index);
};
protoOf(JsonElementMarker).c5d = function () {
  return this.z5c_1.y2k();
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
  _this__u8e3s4.d5d('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.a59_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.e5d('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.f2c() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.v2c().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
  var index = _this__u8e3s4.a2d(name);
  if (!(index === -3))
    return index;
  if (!json.n58_1.j5a_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException_init_$Create$(_this__u8e3s4.f2c() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.z2c(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.v2c(), CLASS_getInstance()) ? json.n58_1.k5a_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.g5d(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.n58_1.l5a_1 && equals(descriptor.v2c(), ENUM_getInstance());
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
  return tmp.g5d(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap_init_$Create$();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.x2c();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.b2d(i);
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
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h5d_1;
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
        tmp_0 = _this__u8e3s4.z2c(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.i5d(_this__u8e3s4, i, _this__u8e3s4.z2c(i));
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
  var entity = equals($this_buildDeserializationNamesMap.v2c(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).c2(name)) {
    throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.z2c(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.z2c(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
    var tmp_0 = $this_serializationNamesIndices.x2c();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.z2c(tmp_2);
      tmp_1[tmp_2] = $strategy.i5d($this_serializationNamesIndices, tmp_2, baseName);
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
  var newSize = imul($this.l5d_1, 2);
  $this.j5d_1 = copyOf($this.j5d_1, newSize);
  $this.k5d_1 = copyOf_0($this.k5d_1, newSize);
}
function JsonPath() {
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  tmp.j5d_1 = Array(8);
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = new Int32Array(8);
  while (tmp_1 < 8) {
    tmp_2[tmp_1] = -1;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.k5d_1 = tmp_2;
  this.l5d_1 = -1;
}
protoOf(JsonPath).m5d = function (sd) {
  this.l5d_1 = this.l5d_1 + 1 | 0;
  var depth = this.l5d_1;
  if (depth === this.j5d_1.length) {
    resize(this);
  }
  this.j5d_1[depth] = sd;
};
protoOf(JsonPath).n5d = function (index) {
  this.k5d_1[this.l5d_1] = index;
};
protoOf(JsonPath).o5d = function (key) {
  var tmp;
  if (!(this.k5d_1[this.l5d_1] === -2)) {
    this.l5d_1 = this.l5d_1 + 1 | 0;
    tmp = this.l5d_1 === this.j5d_1.length;
  } else {
    tmp = false;
  }
  if (tmp) {
    resize(this);
  }
  this.j5d_1[this.l5d_1] = key;
  this.k5d_1[this.l5d_1] = -2;
};
protoOf(JsonPath).p5d = function () {
  if (this.k5d_1[this.l5d_1] === -2) {
    this.j5d_1[this.l5d_1] = Tombstone_instance;
  }
};
protoOf(JsonPath).q5d = function () {
  var depth = this.l5d_1;
  if (this.k5d_1[depth] === -2) {
    this.k5d_1[depth] = -1;
    this.l5d_1 = this.l5d_1 - 1 | 0;
  }
  if (!(this.l5d_1 === -1)) {
    this.l5d_1 = this.l5d_1 - 1 | 0;
  }
};
protoOf(JsonPath).r5d = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.b8('$');
  // Inline function 'kotlin.repeat' call
  var times = this.l5d_1 + 1 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var element = this.j5d_1[index];
      if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
        if (equals(element.v2c(), LIST_getInstance())) {
          if (!(this.k5d_1[index] === -1)) {
            this_0.b8('[');
            this_0.lc(this.k5d_1[index]);
            this_0.b8(']');
          }
        } else {
          var idx = this.k5d_1[index];
          if (idx >= 0) {
            this_0.b8('.');
            this_0.b8(element.z2c(idx));
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
  return this.r5d();
};
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().m();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
  encoder.j2g(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.b5e_1.f5e(6);
  if ($this.b5e_1.g5e() === 4) {
    $this.b5e_1.e5d('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap_init_$Create$();
  $l$loop: while ($this.b5e_1.h5e()) {
    var key = $this.c5e_1 ? $this.b5e_1.j5e() : $this.b5e_1.i5e();
    $this.b5e_1.f5e(5);
    var element = $this.k5e();
    // Inline function 'kotlin.collections.set' call
    result.h2(key, element);
    lastToken = $this.b5e_1.l5e();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.b5e_1.e5d('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.b5e_1.f5e(7);
  } else if (lastToken === 4) {
    if (!$this.d5e_1) {
      invalidTrailingComma($this.b5e_1);
    }
    $this.b5e_1.f5e(7);
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
  var lastToken = $this.b5e_1.l5e();
  if ($this.b5e_1.g5e() === 4) {
    $this.b5e_1.e5d('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList_init_$Create$();
  while ($this.b5e_1.h5e()) {
    var element = $this.k5e();
    result.e(element);
    lastToken = $this.b5e_1.l5e();
    if (!(lastToken === 4)) {
      var tmp0 = $this.b5e_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.a59_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.e5d(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.b5e_1.f5e(9);
  } else if (lastToken === 4) {
    if (!$this.d5e_1) {
      invalidTrailingComma($this.b5e_1, 'array');
    }
    $this.b5e_1.f5e(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.c5e_1 || !isString) {
    tmp = $this.b5e_1.j5e();
  } else {
    tmp = $this.b5e_1.i5e();
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
  this.j5f_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(JsonTreeReader$readDeepRecursive$slambda).o5f = function ($this$DeepRecursiveFunction, it, $completion) {
  var tmp = this.p5f($this$DeepRecursiveFunction, it, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).l9 = function (p1, p2, $completion) {
  var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
  return this.o5f(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          this.m5f_1 = this.j5f_1.b5e_1.g5e();
          if (this.m5f_1 === 1) {
            this.n5f_1 = readValue(this.j5f_1, true);
            this.u8_1 = 2;
            continue $sm;
          } else {
            if (this.m5f_1 === 0) {
              this.n5f_1 = readValue(this.j5f_1, false);
              this.u8_1 = 2;
              continue $sm;
            } else {
              if (this.m5f_1 === 6) {
                this.u8_1 = 1;
                suspendResult = readObject_0(this.j5f_1, this.k5f_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.m5f_1 === 8) {
                  this.n5f_1 = readArray(this.j5f_1);
                  this.u8_1 = 2;
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  this.j5f_1.b5e_1.e5d("Can't begin reading element, unexpected token");
                }
              }
            }
          }

          break;
        case 1:
          this.n5f_1 = suspendResult;
          this.u8_1 = 2;
          continue $sm;
        case 2:
          return this.n5f_1;
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
protoOf(JsonTreeReader$readDeepRecursive$slambda).p5f = function ($this$DeepRecursiveFunction, it, completion) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this.j5f_1, completion);
  i.k5f_1 = $this$DeepRecursiveFunction;
  i.l5f_1 = it;
  return i;
};
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$DeepRecursiveFunction, it, $completion) {
    return i.o5f($this$DeepRecursiveFunction, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.u5e_1 = _this__u8e3s4;
  this.v5e_1 = _this__u8e3s4_0;
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
          tmp_0.w5e_1 = this.u5e_1;
          this.x5e_1 = this.w5e_1;
          this.y5e_1 = this.x5e_1.b5e_1.f5e(6);
          if (this.x5e_1.b5e_1.g5e() === 4) {
            this.x5e_1.b5e_1.e5d('Unexpected leading comma');
          }

          var tmp_1 = this;
          tmp_1.z5e_1 = LinkedHashMap_init_$Create$();
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!this.x5e_1.b5e_1.h5e()) {
            this.u8_1 = 4;
            continue $sm;
          }

          this.a5f_1 = this.x5e_1.c5e_1 ? this.x5e_1.b5e_1.j5e() : this.x5e_1.b5e_1.i5e();
          this.x5e_1.b5e_1.f5e(5);
          this.u8_1 = 2;
          suspendResult = this.v5e_1.rk(Unit_instance, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var element = suspendResult;
          var tmp0 = this.z5e_1;
          var key = this.a5f_1;
          tmp0.h2(key, element);
          this.y5e_1 = this.x5e_1.b5e_1.l5e();
          var tmp0_subject = this.y5e_1;
          if (tmp0_subject === 4) {
            this.u8_1 = 3;
            continue $sm;
          } else {
            if (tmp0_subject === 7) {
              this.u8_1 = 4;
              continue $sm;
            } else {
              this.x5e_1.b5e_1.e5d('Expected end of the object or comma');
            }
          }

          break;
        case 3:
          this.u8_1 = 1;
          continue $sm;
        case 4:
          if (this.y5e_1 === 6) {
            this.x5e_1.b5e_1.f5e(7);
          } else if (this.y5e_1 === 4) {
            if (!this.x5e_1.d5e_1) {
              invalidTrailingComma(this.x5e_1.b5e_1);
            }
            this.x5e_1.b5e_1.f5e(7);
          }

          return new JsonObject(this.z5e_1);
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
  this.b5e_1 = lexer;
  this.c5e_1 = configuration.a5a_1;
  this.d5e_1 = configuration.m5a_1;
  this.e5e_1 = 0;
}
protoOf(JsonTreeReader).k5e = function () {
  var token = this.b5e_1.g5e();
  var tmp;
  if (token === 1) {
    tmp = readValue(this, true);
  } else if (token === 0) {
    tmp = readValue(this, false);
  } else if (token === 6) {
    var tmp_0;
    this.e5e_1 = this.e5e_1 + 1 | 0;
    if (this.e5e_1 === 200) {
      tmp_0 = readDeepRecursive(this);
    } else {
      tmp_0 = readObject(this);
    }
    var result = tmp_0;
    this.e5e_1 = this.e5e_1 - 1 | 0;
    tmp = result;
  } else if (token === 8) {
    tmp = readArray(this);
  } else {
    this.b5e_1.e5d('Cannot read Json element because of unexpected ' + tokenDescription(token));
  }
  return tmp;
};
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.y2c().j();
  while (_iterator__ex2g4s.k()) {
    var annotation = _iterator__ex2g4s.l();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.p5a_1;
  }
  return json.n58_1.h5a_1;
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.e2b()).u1(classDiscriminator)) {
    var baseName = serializer.e2b().f2c();
    var actualName = actualSerializer.e2b().f2c();
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
  var kind = descriptor.v2c();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.sa() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.q5f_1)
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
  var last = descriptor.x2c();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.z2c(i);
      if (name === $this.r5f_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function PolymorphismValidator(useArrayPolymorphism, discriminator) {
  this.q5f_1 = useArrayPolymorphism;
  this.r5f_1 = discriminator;
}
protoOf(PolymorphismValidator).i2v = function (kClass, provider) {
};
protoOf(PolymorphismValidator).l2v = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.e2b();
  checkKind_0(this, descriptor, actualClass);
  if (!this.q5f_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(PolymorphismValidator).m2v = function (baseClass, defaultSerializerProvider) {
};
protoOf(PolymorphismValidator).n2v = function (baseClass, defaultDeserializerProvider) {
};
function Key() {
}
function DescriptorSchemaCache() {
  this.f5d_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).s5f = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.f5d_1;
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
protoOf(DescriptorSchemaCache).g5d = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.t5f(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.s5f(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).t5f = function (descriptor, key) {
  var tmp0_safe_receiver = this.f5d_1.e2(descriptor);
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
  this.u5f_1 = discriminatorToSkip;
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.u5f_1 === unknownKey) {
    _this__u8e3s4.u5f_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.i2f(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.u58_1.g5e() === 4) {
    $this.u58_1.e5d('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.w58_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.w58_1 === -1)) {
      hasComma = $this.u58_1.w5f();
    }
  } else {
    $this.u58_1.v5f(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.u58_1.h5e()) {
    if (decodingKey) {
      if ($this.w58_1 === -1) {
        var tmp0 = $this.u58_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.a59_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected leading comma';
          tmp0.e5d(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.u58_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.a59_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.e5d(tmp$ret$2, position_0);
        }
      }
    }
    $this.w58_1 = $this.w58_1 + 1 | 0;
    tmp = $this.w58_1;
  } else {
    if (hasComma && !$this.s58_1.n58_1.m5a_1) {
      invalidTrailingComma($this.u58_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.s58_1;
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.d2d(index);
    var elementDescriptor = descriptor.c2d(index);
    var tmp;
    if (isOptional && !elementDescriptor.r2c()) {
      tmp = $this.u58_1.x5f(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.v2c(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.r2c()) {
        tmp_0 = $this.u58_1.x5f(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.u58_1.y5f($this.y58_1.a5a_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.n58_1.d5a_1 && elementDescriptor.r2c();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.u58_1.i5e();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.u58_1.w5f();
  while ($this.u58_1.h5e()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.u58_1.v5f(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.s58_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.y58_1.f5a_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.u58_1.w5f();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.z58_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.b5d(index);
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
  if (hasComma && !$this.s58_1.n58_1.m5a_1) {
    invalidTrailingComma($this.u58_1);
  }
  var tmp1_safe_receiver = $this.z58_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c5d();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, key) {
  if ($this.y58_1.z59_1 || trySkip($this, $this.x58_1, key)) {
    $this.u58_1.a5g($this.y58_1.a5a_1);
  } else {
    $this.u58_1.z5f(key);
  }
  return $this.u58_1.w5f();
}
function decodeListIndex($this) {
  var hasComma = $this.u58_1.w5f();
  var tmp;
  if ($this.u58_1.h5e()) {
    if (!($this.w58_1 === -1) && !hasComma) {
      $this.u58_1.e5d('Expected end of the array or comma');
    }
    $this.w58_1 = $this.w58_1 + 1 | 0;
    tmp = $this.w58_1;
  } else {
    if (hasComma && !$this.s58_1.n58_1.m5a_1) {
      invalidTrailingComma($this.u58_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.y58_1.a5a_1) {
    tmp = $this.u58_1.c5g();
  } else {
    tmp = $this.u58_1.b5g();
  }
  return tmp;
}
function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
  AbstractDecoder.call(this);
  this.s58_1 = json;
  this.t58_1 = mode;
  this.u58_1 = lexer;
  this.v58_1 = this.s58_1.g2f();
  this.w58_1 = -1;
  this.x58_1 = discriminatorHolder;
  this.y58_1 = this.s58_1.n58_1;
  this.z58_1 = this.y58_1.d5a_1 ? null : new JsonElementMarker(descriptor);
}
protoOf(StreamingJsonDecoder).q5a = function () {
  return this.s58_1;
};
protoOf(StreamingJsonDecoder).g2f = function () {
  return this.v58_1;
};
protoOf(StreamingJsonDecoder).r5a = function () {
  return (new JsonTreeReader(this.s58_1.n58_1, this.u58_1)).k5e();
};
protoOf(StreamingJsonDecoder).q2e = function (deserializer) {
  try {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.s58_1.n58_1.g5a_1;
    }
    if (tmp) {
      return deserializer.g2b(this);
    }
    var discriminator = classDiscriminator(deserializer.e2b(), this.s58_1);
    var tmp0_elvis_lhs = this.u58_1.d5g(discriminator, this.y58_1.a5a_1);
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
          tmp_1 = this.q5a().n58_1.g5a_1;
        }
        if (tmp_1) {
          tmp$ret$0 = tmp2.g2b(this);
          break $l$block;
        }
        var discriminator_0 = classDiscriminator(tmp2.e2b(), this.q5a());
        var tmp0 = this.r5a();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = tmp2.e2b().f2c();
        if (!(tmp0 instanceof JsonObject)) {
          var tmp_2 = getKClass(JsonObject).sa();
          var tmp_3 = getKClassFromExpression(tmp0).sa();
          var tmp$ret$1 = this.u58_1.b59_1.r5d();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
        }
        var jsonTree = tmp0;
        var tmp0_safe_receiver = jsonTree.r2y(discriminator_0);
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
        tmp$ret$0 = readPolymorphicJson(this.q5a(), discriminator_0, jsonTree, actualSerializer);
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
        this.u58_1.e5d(message, VOID, hint);
      } else {
        throw $p;
      }
      tmp_7 = tmp_8;
    }
    var tmp_9 = tmp_7;
    var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
    this.x58_1 = new DiscriminatorHolder(discriminator);
    return actualSerializer_0.g2b(this);
  } catch ($p) {
    if ($p instanceof MissingFieldException) {
      var e = $p;
      if (contains_0(ensureNotNull(e.message), 'at path'))
        throw e;
      throw new MissingFieldException(e.l2c_1, plus(e.message, ' at path: ') + this.u58_1.b59_1.r5d(), e);
    } else {
      throw $p;
    }
  }
};
protoOf(StreamingJsonDecoder).r2e = function (descriptor) {
  var newMode = switchMode(this.s58_1, descriptor);
  this.u58_1.b59_1.m5d(descriptor);
  this.u58_1.v5f(newMode.g5g_1);
  checkLeadingComma(this);
  var tmp;
  switch (newMode.l2_1) {
    case 1:
    case 2:
    case 3:
      tmp = new StreamingJsonDecoder(this.s58_1, newMode, this.u58_1, descriptor, this.x58_1);
      break;
    default:
      var tmp_0;
      if (this.t58_1.equals(newMode) && this.s58_1.n58_1.d5a_1) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this.s58_1, newMode, this.u58_1, descriptor, this.x58_1);
      }

      tmp = tmp_0;
      break;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).s2e = function (descriptor) {
  if (this.s58_1.n58_1.z59_1 && descriptor.x2c() === 0) {
    skipLeftoverElements(this, descriptor);
  }
  if (this.u58_1.w5f() && !this.s58_1.n58_1.m5a_1) {
    invalidTrailingComma(this.u58_1, '');
  }
  this.u58_1.v5f(this.t58_1.h5g_1);
  this.u58_1.b59_1.q5d();
};
protoOf(StreamingJsonDecoder).c2e = function () {
  var tmp;
  var tmp0_safe_receiver = this.z58_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a5d_1;
  if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
    tmp = !this.u58_1.i5g();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).d2e = function () {
  return null;
};
protoOf(StreamingJsonDecoder).d2f = function (descriptor, index, deserializer, previousValue) {
  var isMapKey = this.t58_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
  if (isMapKey) {
    this.u58_1.b59_1.p5d();
  }
  var value = protoOf(AbstractDecoder).d2f.call(this, descriptor, index, deserializer, previousValue);
  if (isMapKey) {
    this.u58_1.b59_1.o5d(value);
  }
  return value;
};
protoOf(StreamingJsonDecoder).i2f = function (descriptor) {
  var index;
  switch (this.t58_1.l2_1) {
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
  if (!this.t58_1.equals(WriteMode_MAP_getInstance())) {
    this.u58_1.b59_1.n5d(index);
  }
  return index;
};
protoOf(StreamingJsonDecoder).e2e = function () {
  return this.u58_1.j5g();
};
protoOf(StreamingJsonDecoder).f2e = function () {
  var value = this.u58_1.c5b();
  if (!value.equals(toLong(value.g3()))) {
    this.u58_1.e5d("Failed to parse byte for input '" + value.toString() + "'");
  }
  return value.g3();
};
protoOf(StreamingJsonDecoder).g2e = function () {
  var value = this.u58_1.c5b();
  if (!value.equals(toLong(value.h3()))) {
    this.u58_1.e5d("Failed to parse short for input '" + value.toString() + "'");
  }
  return value.h3();
};
protoOf(StreamingJsonDecoder).h2e = function () {
  var value = this.u58_1.c5b();
  if (!value.equals(toLong(value.d1()))) {
    this.u58_1.e5d("Failed to parse int for input '" + value.toString() + "'");
  }
  return value.d1();
};
protoOf(StreamingJsonDecoder).i2e = function () {
  return this.u58_1.c5b();
};
protoOf(StreamingJsonDecoder).j2e = function () {
  var tmp0 = this.u58_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.j5e();
    try {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.e5d("Failed to parse type '" + 'float' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.s58_1.n58_1.i5a_1;
  if (specialFp || isFinite(result))
    return result;
  throwInvalidFloatingPointDecoded(this.u58_1, result);
};
protoOf(StreamingJsonDecoder).k2e = function () {
  var tmp0 = this.u58_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.j5e();
    try {
      tmp$ret$1 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.e5d("Failed to parse type '" + 'double' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.s58_1.n58_1.i5a_1;
  if (specialFp || isFinite_0(result))
    return result;
  throwInvalidFloatingPointDecoded(this.u58_1, result);
};
protoOf(StreamingJsonDecoder).l2e = function () {
  var string = this.u58_1.j5e();
  if (!(string.length === 1)) {
    this.u58_1.e5d("Expected single char, but got '" + string + "'");
  }
  return charCodeAt(string, 0);
};
protoOf(StreamingJsonDecoder).m2e = function () {
  var tmp;
  if (this.y58_1.a5a_1) {
    tmp = this.u58_1.c5g();
  } else {
    tmp = this.u58_1.i5e();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).o2e = function (descriptor) {
  return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.u58_1, this.s58_1) : protoOf(AbstractDecoder).o2e.call(this, descriptor);
};
protoOf(StreamingJsonDecoder).n2e = function (enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.s58_1, this.m2e(), ' at path ' + this.u58_1.b59_1.r5d());
};
function JsonDecoderForUnsignedTypes(lexer, json) {
  AbstractDecoder.call(this);
  this.k5g_1 = lexer;
  this.l5g_1 = json.g2f();
}
protoOf(JsonDecoderForUnsignedTypes).g2f = function () {
  return this.l5g_1;
};
protoOf(JsonDecoderForUnsignedTypes).i2f = function (descriptor) {
  var message = 'unsupported';
  throw IllegalStateException_init_$Create$(toString(message));
};
protoOf(JsonDecoderForUnsignedTypes).h2e = function () {
  var tmp0 = this.k5g_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.j5e();
    try {
      // Inline function 'kotlin.UInt.toInt' call
      var this_0 = toUInt(input);
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.e5d("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).i2e = function () {
  var tmp0 = this.k5g_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.j5e();
    try {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = toULong(input);
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.e5d("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).f2e = function () {
  var tmp0 = this.k5g_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.j5e();
    try {
      // Inline function 'kotlin.UByte.toByte' call
      var this_0 = toUByte(input);
      tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.e5d("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).g2e = function () {
  var tmp0 = this.k5g_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.j5e();
    try {
      // Inline function 'kotlin.UShort.toShort' call
      var this_0 = toUShort(input);
      tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.e5d("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
  $this.s5d_1.y5b();
  $this.v2f(discriminator);
  $this.s5d_1.b5c(_Char___init__impl__6a9atx(58));
  $this.s5d_1.a5c();
  $this.v2f(serialName);
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.s5d_1 = composer;
  this.t5d_1 = json;
  this.u5d_1 = mode;
  this.v5d_1 = modeReuseCache;
  this.w5d_1 = this.t5d_1.g2f();
  this.x5d_1 = this.t5d_1.n58_1;
  this.y5d_1 = false;
  this.z5d_1 = null;
  this.a5e_1 = null;
  var i = this.u5d_1.l2_1;
  if (!(this.v5d_1 == null)) {
    if (!(this.v5d_1[i] === null) || !(this.v5d_1[i] === this)) {
      this.v5d_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).q5a = function () {
  return this.t5d_1;
};
protoOf(StreamingJsonEncoder).g2f = function () {
  return this.w5d_1;
};
protoOf(StreamingJsonEncoder).o2g = function (descriptor, index) {
  return this.x5d_1.y59_1;
};
protoOf(StreamingJsonEncoder).j2g = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    if (this.q5a().n58_1.g5a_1) {
      serializer.f2b(this, value);
      break $l$block;
    }
    var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
    var tmp;
    if (isPolymorphicSerializer) {
      tmp = !this.q5a().n58_1.o5a_1.equals(ClassDiscriminatorMode_NONE_getInstance());
    } else {
      var tmp_0;
      switch (this.q5a().n58_1.o5a_1.l2_1) {
        case 0:
        case 2:
          tmp_0 = false;
          break;
        case 1:
          // Inline function 'kotlin.let' call

          var it = serializer.e2b().v2c();
          tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    var needDiscriminator = tmp;
    var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.e2b(), this.q5a()) : null;
    var tmp_1;
    if (isPolymorphicSerializer) {
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        if (value == null) {
          var message = 'Value for serializer ' + toString(serializer.e2b()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          break $l$block_0;
        }
      }
      var actual = findPolymorphicSerializer_0(casted, this, value);
      if (!(baseClassDiscriminator == null)) {
        access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
      }
      checkKind(actual.e2b().v2c());
      tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
    } else {
      tmp_1 = serializer;
    }
    var actualSerializer = tmp_1;
    if (!(baseClassDiscriminator == null)) {
      var serialName = actualSerializer.e2b().f2c();
      this.z5d_1 = baseClassDiscriminator;
      this.a5e_1 = serialName;
    }
    actualSerializer.f2b(this, value);
  }
};
protoOf(StreamingJsonEncoder).r2e = function (descriptor) {
  var newMode = switchMode(this.t5d_1, descriptor);
  if (!(newMode.g5g_1 === _Char___init__impl__6a9atx(0))) {
    this.s5d_1.b5c(newMode.g5g_1);
    this.s5d_1.w5b();
  }
  var discriminator = this.z5d_1;
  if (!(discriminator == null)) {
    var tmp0_elvis_lhs = this.a5e_1;
    encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.f2c() : tmp0_elvis_lhs);
    this.z5d_1 = null;
    this.a5e_1 = null;
  }
  if (this.u5d_1.equals(newMode)) {
    return this;
  }
  var tmp1_safe_receiver = this.v5d_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.l2_1];
  return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.s5d_1, this.t5d_1, newMode, this.v5d_1) : tmp2_elvis_lhs;
};
protoOf(StreamingJsonEncoder).s2e = function (descriptor) {
  if (!(this.u5d_1.h5g_1 === _Char___init__impl__6a9atx(0))) {
    this.s5d_1.x5b();
    this.s5d_1.z5b();
    this.s5d_1.b5c(this.u5d_1.h5g_1);
  }
};
protoOf(StreamingJsonEncoder).k2f = function (descriptor, index) {
  switch (this.u5d_1.l2_1) {
    case 1:
      if (!this.s5d_1.v5b_1) {
        this.s5d_1.b5c(_Char___init__impl__6a9atx(44));
      }

      this.s5d_1.y5b();
      break;
    case 2:
      if (!this.s5d_1.v5b_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.s5d_1.b5c(_Char___init__impl__6a9atx(44));
          this.s5d_1.y5b();
          tmp_0 = true;
        } else {
          this.s5d_1.b5c(_Char___init__impl__6a9atx(58));
          this.s5d_1.a5c();
          tmp_0 = false;
        }
        tmp.y5d_1 = tmp_0;
      } else {
        this.y5d_1 = true;
        this.s5d_1.y5b();
      }

      break;
    case 3:
      if (index === 0)
        this.y5d_1 = true;
      if (index === 1) {
        this.s5d_1.b5c(_Char___init__impl__6a9atx(44));
        this.s5d_1.a5c();
        this.y5d_1 = false;
      }

      break;
    default:
      if (!this.s5d_1.v5b_1) {
        this.s5d_1.b5c(_Char___init__impl__6a9atx(44));
      }

      this.s5d_1.y5b();
      this.v2f(getJsonElementName(descriptor, this.t5d_1, index));
      this.s5d_1.b5c(_Char___init__impl__6a9atx(58));
      this.s5d_1.a5c();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).k2g = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.x5d_1.d5a_1) {
    protoOf(AbstractEncoder).k2g.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).x2f = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.s5d_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.s5d_1;
    } else {
      var tmp0 = this.s5d_1.u5b_1;
      var p1 = this.y5d_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.t5d_1, this.u5d_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.s5d_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.s5d_1;
    } else {
      var tmp0_0 = this.s5d_1.u5b_1;
      var p1_0 = this.y5d_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.t5d_1, this.u5d_1, null);
  } else if (!(this.z5d_1 == null)) {
    // Inline function 'kotlin.apply' call
    this.a5e_1 = descriptor.f2c();
    tmp = this;
  } else {
    tmp = protoOf(AbstractEncoder).x2f.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).m2f = function () {
  this.s5d_1.d5c('null');
};
protoOf(StreamingJsonEncoder).n2f = function (value) {
  if (this.y5d_1) {
    this.v2f(value.toString());
  } else {
    this.s5d_1.m5c(value);
  }
};
protoOf(StreamingJsonEncoder).o2f = function (value) {
  if (this.y5d_1) {
    this.v2f(value.toString());
  } else {
    this.s5d_1.h5c(value);
  }
};
protoOf(StreamingJsonEncoder).p2f = function (value) {
  if (this.y5d_1) {
    this.v2f(value.toString());
  } else {
    this.s5d_1.j5c(value);
  }
};
protoOf(StreamingJsonEncoder).q2f = function (value) {
  if (this.y5d_1) {
    this.v2f(value.toString());
  } else {
    this.s5d_1.k5c(value);
  }
};
protoOf(StreamingJsonEncoder).r2f = function (value) {
  if (this.y5d_1) {
    this.v2f(value.toString());
  } else {
    this.s5d_1.l5c(value);
  }
};
protoOf(StreamingJsonEncoder).s2f = function (value) {
  if (this.y5d_1) {
    this.v2f(value.toString());
  } else {
    this.s5d_1.f5c(value);
  }
  if (!this.x5d_1.i5a_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.s5d_1.u5b_1));
  }
};
protoOf(StreamingJsonEncoder).t2f = function (value) {
  if (this.y5d_1) {
    this.v2f(value.toString());
  } else {
    this.s5d_1.g5c(value);
  }
  if (!this.x5d_1.i5a_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.s5d_1.u5b_1));
  }
};
protoOf(StreamingJsonEncoder).u2f = function (value) {
  this.v2f(toString_1(value));
};
protoOf(StreamingJsonEncoder).v2f = function (value) {
  return this.s5d_1.n5c(value);
};
protoOf(StreamingJsonEncoder).w2f = function (enumDescriptor, index) {
  this.v2f(enumDescriptor.z2c(index));
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.w2c() && get_unsignedNumberDescriptors().u1(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.w2c() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).e2b(), serializer_0(Companion_getInstance()).e2b(), serializer_2(Companion_getInstance_1()).e2b(), serializer_3(Companion_getInstance_2()).e2b()]);
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
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.s5g(tag), toString($this.t5g()));
}
function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  NamedValueDecoder.call(this);
  this.o5g_1 = json;
  this.p5g_1 = value;
  this.q5g_1 = polymorphicDiscriminator;
  this.r5g_1 = this.q5a().n58_1;
}
protoOf(AbstractJsonTreeDecoder).q5a = function () {
  return this.o5g_1;
};
protoOf(AbstractJsonTreeDecoder).t = function () {
  return this.p5g_1;
};
protoOf(AbstractJsonTreeDecoder).g2f = function () {
  return this.q5a().g2f();
};
protoOf(AbstractJsonTreeDecoder).t5g = function () {
  var tmp0_safe_receiver = this.y2s();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = this.u5g(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? this.t() : tmp1_elvis_lhs;
};
protoOf(AbstractJsonTreeDecoder).s5g = function (currentTag) {
  return this.a2t() + ('.' + currentTag);
};
protoOf(AbstractJsonTreeDecoder).r5a = function () {
  return this.t5g();
};
protoOf(AbstractJsonTreeDecoder).q2e = function (deserializer) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.q5a().n58_1.g5a_1;
    }
    if (tmp) {
      tmp$ret$0 = deserializer.g2b(this);
      break $l$block;
    }
    var discriminator = classDiscriminator(deserializer.e2b(), this.q5a());
    var tmp0 = this.r5a();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = deserializer.e2b().f2c();
    if (!(tmp0 instanceof JsonObject)) {
      var tmp_0 = getKClass(JsonObject).sa();
      var tmp_1 = getKClassFromExpression(tmp0).sa();
      var tmp$ret$1 = this.a2t();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
    }
    var jsonTree = tmp0;
    var tmp0_safe_receiver = jsonTree.r2y(discriminator);
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
    tmp$ret$0 = readPolymorphicJson(this.q5a(), discriminator, jsonTree, actualSerializer);
  }
  return tmp$ret$0;
};
protoOf(AbstractJsonTreeDecoder).z2s = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeDecoder).r2e = function (descriptor) {
  var currentObject = this.t5g();
  var tmp0_subject = descriptor.v2c();
  var tmp;
  var tmp_0;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_0 = true;
  } else {
    tmp_0 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_0) {
    var tmp_1 = this.q5a();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = descriptor.f2c();
    if (!(currentObject instanceof JsonArray)) {
      var tmp_2 = getKClass(JsonArray).sa();
      var tmp_3 = getKClassFromExpression(currentObject).sa();
      var tmp$ret$0 = this.a2t();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
    }
    tmp = new JsonTreeListDecoder(tmp_1, currentObject);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.q5a();
      var keyDescriptor = carrierDescriptor(descriptor.c2d(0), this_0.g2f());
      var keyKind = keyDescriptor.v2c();
      var tmp_4;
      var tmp_5;
      if (keyKind instanceof PrimitiveKind) {
        tmp_5 = true;
      } else {
        tmp_5 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_5) {
        var tmp_6 = this.q5a();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_0 = descriptor.f2c();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_7 = getKClass(JsonObject).sa();
          var tmp_8 = getKClassFromExpression(currentObject).sa();
          var tmp$ret$3 = this.a2t();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
        }
        tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
      } else {
        if (this_0.n58_1.b5a_1) {
          var tmp_9 = this.q5a();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_1 = descriptor.f2c();
          if (!(currentObject instanceof JsonArray)) {
            var tmp_10 = getKClass(JsonArray).sa();
            var tmp_11 = getKClassFromExpression(currentObject).sa();
            var tmp$ret$7 = this.a2t();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
          }
          tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp = tmp_4;
    } else {
      var tmp_12 = this.q5a();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName_2 = descriptor.f2c();
      if (!(currentObject instanceof JsonObject)) {
        var tmp_13 = getKClass(JsonObject).sa();
        var tmp_14 = getKClassFromExpression(currentObject).sa();
        var tmp$ret$12 = this.a2t();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
      }
      tmp = new JsonTreeDecoder(tmp_12, currentObject, this.q5g_1);
    }
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).s2e = function (descriptor) {
};
protoOf(AbstractJsonTreeDecoder).c2e = function () {
  var tmp = this.t5g();
  return !(tmp instanceof JsonNull);
};
protoOf(AbstractJsonTreeDecoder).v5g = function (tag, enumDescriptor) {
  var tmp = this.q5a();
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
  var tmp2 = this.u5g(tag);
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var serialName = enumDescriptor.f2c();
  if (!(tmp2 instanceof JsonPrimitive)) {
    var tmp_0 = getKClass(JsonPrimitive).sa();
    var tmp_1 = getKClassFromExpression(tmp2).sa();
    var tmp$ret$0 = this.s5g(tag);
    throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
  }
  return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.s5a());
};
protoOf(AbstractJsonTreeDecoder).m2t = function (tag, enumDescriptor) {
  return this.v5g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
};
protoOf(AbstractJsonTreeDecoder).w5g = function (tag) {
  return !(this.u5g(tag) === JsonNull_getInstance());
};
protoOf(AbstractJsonTreeDecoder).c2t = function (tag) {
  return this.w5g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).x5g = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.u5g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.s5g(tag);
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
protoOf(AbstractJsonTreeDecoder).d2t = function (tag) {
  return this.x5g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).y5g = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.u5g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.s5g(tag);
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
protoOf(AbstractJsonTreeDecoder).e2t = function (tag) {
  return this.y5g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).z5g = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.u5g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.s5g(tag);
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
protoOf(AbstractJsonTreeDecoder).f2t = function (tag) {
  return this.z5g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).a5h = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.u5g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.s5g(tag);
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
protoOf(AbstractJsonTreeDecoder).g2t = function (tag) {
  return this.a5h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).b5h = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.u5g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.s5g(tag);
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
protoOf(AbstractJsonTreeDecoder).h2t = function (tag) {
  return this.b5h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).c5h = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.u5g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.s5g(tag);
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
  var specialFp = this.q5a().n58_1.i5a_1;
  if (specialFp || isFinite(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.t5g()));
};
protoOf(AbstractJsonTreeDecoder).i2t = function (tag) {
  return this.c5h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).d5h = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.u5g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.s5g(tag);
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
  var specialFp = this.q5a().n58_1.i5a_1;
  if (specialFp || isFinite_0(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.t5g()));
};
protoOf(AbstractJsonTreeDecoder).j2t = function (tag) {
  return this.d5h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).e5h = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.u5g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).sa();
      var tmp_0 = getKClassFromExpression(value).sa();
      var tmp$ret$0 = this.s5g(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = new Char(single(literal.s5a()));
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
protoOf(AbstractJsonTreeDecoder).k2t = function (tag) {
  return this.e5h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).f5h = function (tag) {
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var value = this.u5g(tag);
  if (!(value instanceof JsonPrimitive)) {
    var tmp = getKClass(JsonPrimitive).sa();
    var tmp_0 = getKClassFromExpression(value).sa();
    var tmp$ret$0 = this.s5g(tag);
    throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
  }
  var value_0 = value;
  if (!(value_0 instanceof JsonLiteral))
    throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.s5g(tag), toString(this.t5g()));
  if (!value_0.z5a_1 && !this.q5a().n58_1.a5a_1) {
    throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.s5g(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.t5g()));
  }
  return value_0.b5b_1;
};
protoOf(AbstractJsonTreeDecoder).l2t = function (tag) {
  return this.f5h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).g5h = function (tag, inlineDescriptor) {
  var tmp;
  if (get_isUnsignedNumber(inlineDescriptor)) {
    var tmp_0 = this.q5a();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.u5g(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = inlineDescriptor.f2c();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_1 = getKClass(JsonPrimitive).sa();
      var tmp_2 = getKClassFromExpression(tmp2).sa();
      var tmp$ret$0 = this.s5g(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    var lexer = StringJsonLexer_0(tmp_0, tmp2.s5a());
    tmp = new JsonDecoderForUnsignedTypes(lexer, this.q5a());
  } else {
    tmp = protoOf(NamedValueDecoder).n2t.call(this, tag, inlineDescriptor);
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).n2t = function (tag, inlineDescriptor) {
  return this.g5h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).o2e = function (descriptor) {
  return !(this.y2s() == null) ? protoOf(NamedValueDecoder).o2e.call(this, descriptor) : (new JsonPrimitiveDecoder(this.q5a(), this.t(), this.q5g_1)).o2e(descriptor);
};
function coerceInputValue_0($this, descriptor, index, tag) {
  var tmp0 = $this.q5a();
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.d2d(index);
    var elementDescriptor = descriptor.c2d(index);
    var tmp;
    if (isOptional && !elementDescriptor.r2c()) {
      var tmp_0 = $this.u5g(tag);
      tmp = tmp_0 instanceof JsonNull;
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.v2c(), ENUM_getInstance())) {
      var tmp_1;
      if (elementDescriptor.r2c()) {
        var tmp_2 = $this.u5g(tag);
        tmp_1 = tmp_2 instanceof JsonNull;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp_3 = $this.u5g(tag);
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
      var coerceToNull = !tmp0.n58_1.d5a_1 && elementDescriptor.r2c();
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
  $this.q5h_1 = (!$this.q5a().n58_1.d5a_1 && !descriptor.d2d(index) && descriptor.c2d(index).r2c());
  return $this.q5h_1;
}
function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
  AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
  this.n5h_1 = value;
  this.o5h_1 = polyDescriptor;
  this.p5h_1 = 0;
  this.q5h_1 = false;
}
protoOf(JsonTreeDecoder).t = function () {
  return this.n5h_1;
};
protoOf(JsonTreeDecoder).i2f = function (descriptor) {
  while (this.p5h_1 < descriptor.x2c()) {
    var _unary__edvuaz = this.p5h_1;
    this.p5h_1 = _unary__edvuaz + 1 | 0;
    var name = this.t2s(descriptor, _unary__edvuaz);
    var index = this.p5h_1 - 1 | 0;
    this.q5h_1 = false;
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
      tmp = !this.r5g_1.f5a_1 || !coerceInputValue_0(this, descriptor, index, name);
    } else {
      tmp = false;
    }
    if (tmp) {
      return index;
    }
  }
  return -1;
};
protoOf(JsonTreeDecoder).c2e = function () {
  return !this.q5h_1 && protoOf(AbstractJsonTreeDecoder).c2e.call(this);
};
protoOf(JsonTreeDecoder).u2s = function (descriptor, index) {
  var strategy = namingStrategy(descriptor, this.q5a());
  var baseName = descriptor.z2c(index);
  if (strategy == null) {
    if (!this.r5g_1.j5a_1)
      return baseName;
    if (this.t().f2().u1(baseName))
      return baseName;
  }
  var deserializationNamesMap_0 = deserializationNamesMap(this.q5a(), descriptor);
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
  var fallbackName = strategy == null ? null : strategy.i5d(descriptor, index, baseName);
  return fallbackName == null ? baseName : fallbackName;
};
protoOf(JsonTreeDecoder).u5g = function (tag) {
  return getValue(this.t(), tag);
};
protoOf(JsonTreeDecoder).r2e = function (descriptor) {
  if (descriptor === this.o5h_1) {
    var tmp = this.q5a();
    var tmp2 = this.t5g();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = this.o5h_1.f2c();
    if (!(tmp2 instanceof JsonObject)) {
      var tmp_0 = getKClass(JsonObject).sa();
      var tmp_1 = getKClassFromExpression(tmp2).sa();
      var tmp$ret$0 = this.a2t();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return new JsonTreeDecoder(tmp, tmp2, this.q5g_1, this.o5h_1);
  }
  return protoOf(AbstractJsonTreeDecoder).r2e.call(this, descriptor);
};
protoOf(JsonTreeDecoder).s2e = function (descriptor) {
  var tmp;
  if (this.r5g_1.z59_1) {
    tmp = true;
  } else {
    var tmp_0 = descriptor.v2c();
    tmp = tmp_0 instanceof PolymorphicKind;
  }
  if (tmp)
    return Unit_instance;
  var strategy = namingStrategy(descriptor, this.q5a());
  var tmp_1;
  if (strategy == null && !this.r5g_1.j5a_1) {
    tmp_1 = jsonCachedSerialNames(descriptor);
  } else if (!(strategy == null)) {
    tmp_1 = deserializationNamesMap(this.q5a(), descriptor).f2();
  } else {
    var tmp_2 = jsonCachedSerialNames(descriptor);
    var tmp0_safe_receiver = get_schemaCache(this.q5a()).t5f(descriptor, get_JsonDeserializationNamesKey());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f2();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
    tmp_1 = plus_0(tmp_2, tmp$ret$0);
  }
  var names = tmp_1;
  var _iterator__ex2g4s = this.t().f2().j();
  while (_iterator__ex2g4s.k()) {
    var key = _iterator__ex2g4s.l();
    if (!names.u1(key) && !(key === this.q5g_1)) {
      throw UnknownKeyException(key, this.t().toString());
    }
  }
};
function JsonTreeListDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.x5h_1 = value;
  this.y5h_1 = this.x5h_1.m();
  this.z5h_1 = -1;
}
protoOf(JsonTreeListDecoder).t = function () {
  return this.x5h_1;
};
protoOf(JsonTreeListDecoder).u2s = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListDecoder).u5g = function (tag) {
  return this.x5h_1.o(toInt(tag));
};
protoOf(JsonTreeListDecoder).i2f = function (descriptor) {
  while (this.z5h_1 < (this.y5h_1 - 1 | 0)) {
    this.z5h_1 = this.z5h_1 + 1 | 0;
    return this.z5h_1;
  }
  return -1;
};
function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
  this.g5i_1 = value;
  this.o2t('primitive');
}
protoOf(JsonPrimitiveDecoder).t = function () {
  return this.g5i_1;
};
protoOf(JsonPrimitiveDecoder).i2f = function (descriptor) {
  return 0;
};
protoOf(JsonPrimitiveDecoder).u5g = function (tag) {
  // Inline function 'kotlin.require' call
  if (!(tag === 'primitive')) {
    var message = "This input can only handle primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.g5i_1;
};
function JsonTreeMapDecoder(json, value) {
  JsonTreeDecoder.call(this, json, value);
  this.r5i_1 = value;
  this.s5i_1 = toList(this.r5i_1.f2());
  this.t5i_1 = imul(this.s5i_1.m(), 2);
  this.u5i_1 = -1;
}
protoOf(JsonTreeMapDecoder).t = function () {
  return this.r5i_1;
};
protoOf(JsonTreeMapDecoder).u2s = function (descriptor, index) {
  var i = index / 2 | 0;
  return this.s5i_1.o(i);
};
protoOf(JsonTreeMapDecoder).i2f = function (descriptor) {
  while (this.u5i_1 < (this.t5i_1 - 1 | 0)) {
    this.u5i_1 = this.u5i_1 + 1 | 0;
    return this.u5i_1;
  }
  return -1;
};
protoOf(JsonTreeMapDecoder).u5g = function (tag) {
  return (this.u5i_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.r5i_1, tag);
};
protoOf(JsonTreeMapDecoder).s2e = function (descriptor) {
};
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.e2b())).q2e(deserializer);
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
  this.g5g_1 = begin;
  this.h5g_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.v2c();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.c2d(0), _this__u8e3s4.g2f());
        var keyKind = keyDescriptor.v2c();
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
          if (_this__u8e3s4.n58_1.b5a_1) {
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
  if (equals(_this__u8e3s4.v2c(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.w2c()) {
    tmp = carrierDescriptor(_this__u8e3s4.c2d(0), module_0);
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
  $this.v5i(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.v5i(lastPosition, currentPosition);
  var result = $this.d59_1.toString();
  $this.d59_1.oc(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.c59_1);
  $this.c59_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.w5i(), $this.a59_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.x5i(currentPosition);
  if (currentPosition === -1) {
    $this.e5d('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.w5i();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.w5i(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.e5d("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.d59_1.c8(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.a59_1 = startPos;
    $this.y5i();
    if (($this.a59_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.e5d('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.a59_1);
  }
  $this.d59_1.c8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.e5d("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.x5i(start);
  if (current >= charSequenceLength($this.w5i()) || current === -1) {
    $this.e5d('EOF');
  }
  var tmp = $this.w5i();
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
      $this.e5d("Expected valid boolean literal prefix, but had '" + $this.j5e() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.w5i()) - current | 0) < literalSuffix.length) {
    $this.e5d('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.w5i(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.e5d("Expected valid boolean literal prefix, but had '" + $this.j5e() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.a59_1 = current + literalSuffix.length | 0;
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
  this.a59_1 = 0;
  this.b59_1 = new JsonPath();
  this.c59_1 = null;
  this.d59_1 = StringBuilder_init_$Create$();
}
protoOf(AbstractJsonLexer).y5i = function () {
};
protoOf(AbstractJsonLexer).w5f = function () {
  var current = this.z5i();
  var source = this.w5i();
  if (current >= charSequenceLength(source) || current === -1)
    return false;
  if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
    this.a59_1 = this.a59_1 + 1 | 0;
    return true;
  }
  return false;
};
protoOf(AbstractJsonLexer).a5j = function (c) {
  return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
};
protoOf(AbstractJsonLexer).e59 = function () {
  var nextToken = this.l5e();
  if (!(nextToken === 10)) {
    this.e5d('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.w5i(), this.a59_1 - 1 | 0)) + ' instead');
  }
};
protoOf(AbstractJsonLexer).f5e = function (expected) {
  var token = this.l5e();
  if (!(token === expected)) {
    this.b5j(expected);
  }
  return token;
};
protoOf(AbstractJsonLexer).c5j = function (expected) {
  if (this.a59_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
      var snapshot = this.a59_1;
      try {
        this.a59_1 = this.a59_1 - 1 | 0;
        tmp$ret$1 = this.j5e();
        break $l$block;
      }finally {
        this.a59_1 = snapshot;
      }
    }
    var inputLiteral = tmp$ret$1;
    if (inputLiteral === 'null') {
      this.d5d("Expected string literal but 'null' literal was found", this.a59_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
    }
  }
  this.b5j(charToTokenClass(expected));
};
protoOf(AbstractJsonLexer).d5j = function (expectedToken, wasConsumed) {
  var expected = tokenDescription(expectedToken);
  var position = wasConsumed ? this.a59_1 - 1 | 0 : this.a59_1;
  var s = this.a59_1 === charSequenceLength(this.w5i()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.w5i(), position));
  this.e5d('Expected ' + expected + ", but had '" + s + "' instead", position);
};
protoOf(AbstractJsonLexer).b5j = function (expectedToken, wasConsumed, $super) {
  wasConsumed = wasConsumed === VOID ? true : wasConsumed;
  return $super === VOID ? this.d5j(expectedToken, wasConsumed) : $super.d5j.call(this, expectedToken, wasConsumed);
};
protoOf(AbstractJsonLexer).g5e = function () {
  var source = this.w5i();
  var cpos = this.a59_1;
  $l$loop_0: while (true) {
    cpos = this.x5i(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var ch = charSequenceGet(source, cpos);
    if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
      cpos = cpos + 1 | 0;
      continue $l$loop_0;
    }
    this.a59_1 = cpos;
    return charToTokenClass(ch);
  }
  this.a59_1 = cpos;
  return 10;
};
protoOf(AbstractJsonLexer).x5f = function (doConsume) {
  var current = this.z5i();
  current = this.x5i(current);
  var len = charSequenceLength(this.w5i()) - current | 0;
  if (len < 4 || current === -1)
    return false;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charCodeAt('null', i) === charSequenceGet(this.w5i(), current + i | 0)))
        return false;
    }
     while (inductionVariable <= 3);
  if (len > 4 && charToTokenClass(charSequenceGet(this.w5i(), current + 4 | 0)) === 0)
    return false;
  if (doConsume) {
    this.a59_1 = current + 4 | 0;
  }
  return true;
};
protoOf(AbstractJsonLexer).i5g = function (doConsume, $super) {
  doConsume = doConsume === VOID ? true : doConsume;
  return $super === VOID ? this.x5f(doConsume) : $super.x5f.call(this, doConsume);
};
protoOf(AbstractJsonLexer).y5f = function (isLenient) {
  var token = this.g5e();
  var tmp;
  if (isLenient) {
    if (!(token === 1) && !(token === 0))
      return null;
    tmp = this.j5e();
  } else {
    if (!(token === 1))
      return null;
    tmp = this.i5e();
  }
  var string = tmp;
  this.c59_1 = string;
  return string;
};
protoOf(AbstractJsonLexer).e5j = function () {
  this.c59_1 = null;
};
protoOf(AbstractJsonLexer).f5j = function (startPos, endPos) {
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.w5i();
  return toString(charSequenceSubSequence(this_0, startPos, endPos));
};
protoOf(AbstractJsonLexer).i5e = function () {
  if (!(this.c59_1 == null)) {
    return takePeeked(this);
  }
  return this.b5g();
};
protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
  var currentPosition = current;
  var lastPosition = startPosition;
  var char = charSequenceGet(source, currentPosition);
  var usedAppend = false;
  while (!(char === _Char___init__impl__6a9atx(34))) {
    if (char === _Char___init__impl__6a9atx(92)) {
      usedAppend = true;
      currentPosition = this.x5i(appendEscape(this, lastPosition, currentPosition));
      if (currentPosition === -1) {
        this.e5d('Unexpected EOF', currentPosition);
      }
      lastPosition = currentPosition;
    } else {
      currentPosition = currentPosition + 1 | 0;
      if (currentPosition >= charSequenceLength(source)) {
        usedAppend = true;
        this.v5i(lastPosition, currentPosition);
        currentPosition = this.x5i(currentPosition);
        if (currentPosition === -1) {
          this.e5d('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
    }
    char = charSequenceGet(source, currentPosition);
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.f5j(lastPosition, currentPosition);
  } else {
    tmp = decodedString(this, lastPosition, currentPosition);
  }
  var string = tmp;
  this.a59_1 = currentPosition + 1 | 0;
  return string;
};
protoOf(AbstractJsonLexer).c5g = function () {
  var result = this.j5e();
  if (result === 'null' && wasUnquotedString(this)) {
    this.e5d("Unexpected 'null' value instead of string literal");
  }
  return result;
};
protoOf(AbstractJsonLexer).j5e = function () {
  if (!(this.c59_1 == null)) {
    return takePeeked(this);
  }
  var current = this.z5i();
  if (current >= charSequenceLength(this.w5i()) || current === -1) {
    this.e5d('EOF', current);
  }
  var token = charToTokenClass(charSequenceGet(this.w5i(), current));
  if (token === 1) {
    return this.i5e();
  }
  if (!(token === 0)) {
    this.e5d('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.w5i(), current)));
  }
  var usedAppend = false;
  while (charToTokenClass(charSequenceGet(this.w5i(), current)) === 0) {
    current = current + 1 | 0;
    if (current >= charSequenceLength(this.w5i())) {
      usedAppend = true;
      this.v5i(this.a59_1, current);
      var eof = this.x5i(current);
      if (eof === -1) {
        this.a59_1 = current;
        return decodedString(this, 0, 0);
      } else {
        current = eof;
      }
    }
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.f5j(this.a59_1, current);
  } else {
    tmp = decodedString(this, this.a59_1, current);
  }
  var result = tmp;
  this.a59_1 = current;
  return result;
};
protoOf(AbstractJsonLexer).v5i = function (fromIndex, toIndex) {
  this.d59_1.ic(this.w5i(), fromIndex, toIndex);
};
protoOf(AbstractJsonLexer).a5g = function (allowLenientStrings) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var tokenStack = ArrayList_init_$Create$();
  var lastToken = this.g5e();
  if (!(lastToken === 8) && !(lastToken === 6)) {
    this.j5e();
    return Unit_instance;
  }
  $l$loop: while (true) {
    lastToken = this.g5e();
    if (lastToken === 1) {
      if (allowLenientStrings)
        this.j5e();
      else
        this.b5g();
      continue $l$loop;
    }
    var tmp0_subject = lastToken;
    if (tmp0_subject === 8 || tmp0_subject === 6) {
      tokenStack.e(lastToken);
    } else if (tmp0_subject === 9) {
      if (!(last(tokenStack) === 8))
        throw JsonDecodingException_0(this.a59_1, 'found ] instead of } at path: ' + this.b59_1.toString(), this.w5i());
      removeLast(tokenStack);
    } else if (tmp0_subject === 7) {
      if (!(last(tokenStack) === 6))
        throw JsonDecodingException_0(this.a59_1, 'found } instead of ] at path: ' + this.b59_1.toString(), this.w5i());
      removeLast(tokenStack);
    } else if (tmp0_subject === 10) {
      this.e5d('Unexpected end of input due to malformed JSON during ignoring unknown keys');
    }
    this.l5e();
    if (tokenStack.m() === 0)
      return Unit_instance;
  }
};
protoOf(AbstractJsonLexer).toString = function () {
  return "JsonReader(source='" + toString(this.w5i()) + "', currentPosition=" + this.a59_1 + ')';
};
protoOf(AbstractJsonLexer).z5f = function (key) {
  var processed = this.f5j(0, this.a59_1);
  var lastIndexOf_0 = lastIndexOf(processed, key);
  this.d5d("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
};
protoOf(AbstractJsonLexer).d5d = function (message, position, hint) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(hint) === 0) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  var hintMessage = tmp;
  throw JsonDecodingException_0(position, message + ' at path: ' + this.b59_1.r5d() + hintMessage, this.w5i());
};
protoOf(AbstractJsonLexer).e5d = function (message, position, hint, $super) {
  position = position === VOID ? this.a59_1 : position;
  hint = hint === VOID ? '' : hint;
  return $super === VOID ? this.d5d(message, position, hint) : $super.d5d.call(this, message, position, hint);
};
protoOf(AbstractJsonLexer).c5b = function () {
  var current = this.z5i();
  current = this.x5i(current);
  if (current >= charSequenceLength(this.w5i()) || current === -1) {
    this.e5d('EOF');
  }
  var tmp;
  if (charSequenceGet(this.w5i(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    if (current === charSequenceLength(this.w5i())) {
      this.e5d('EOF');
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
  $l$loop_4: while (!(current === charSequenceLength(this.w5i()))) {
    var ch = charSequenceGet(this.w5i(), current);
    if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
      if (current === start) {
        this.e5d('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
      }
      isExponentPositive = true;
      hasExponent = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
      if (current === start) {
        this.e5d("Unexpected symbol '-' in numeric literal");
      }
      isExponentPositive = false;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
      if (current === start) {
        this.e5d("Unexpected symbol '+' in numeric literal");
      }
      isExponentPositive = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45)) {
      if (!(current === start)) {
        this.e5d("Unexpected symbol '-' in numeric literal");
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
      this.e5d("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
      this.e5d('Numeric value overflow');
    }
  }
  var hasChars = !(current === start);
  if (start === current || (isNegative && start === (current - 1 | 0))) {
    this.e5d('Expected numeric literal');
  }
  if (hasQuotation) {
    if (!hasChars) {
      this.e5d('EOF');
    }
    if (!(charSequenceGet(this.w5i(), current) === _Char___init__impl__6a9atx(34))) {
      this.e5d('Expected closing quotation mark');
    }
    current = current + 1 | 0;
  }
  this.a59_1 = current;
  if (hasExponent) {
    var doubleAccumulator = accumulator.i3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
    if (doubleAccumulator > (new Long(-1, 2147483647)).i3() || doubleAccumulator < (new Long(0, -2147483648)).i3()) {
      this.e5d('Numeric value overflow');
    }
    // Inline function 'kotlin.math.floor' call
    if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
      this.e5d("Can't convert " + doubleAccumulator + ' to Long');
    }
    accumulator = numberToLong(doubleAccumulator);
  }
  var tmp_0;
  if (isNegative) {
    tmp_0 = accumulator;
  } else if (!accumulator.equals(new Long(0, -2147483648))) {
    tmp_0 = accumulator.y2();
  } else {
    this.e5d('Numeric value overflow');
  }
  return tmp_0;
};
protoOf(AbstractJsonLexer).j5g = function () {
  var current = this.z5i();
  if (current === charSequenceLength(this.w5i())) {
    this.e5d('EOF');
  }
  var tmp;
  if (charSequenceGet(this.w5i(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var result = consumeBoolean2(this, current);
  if (hasQuotation) {
    if (this.a59_1 === charSequenceLength(this.w5i())) {
      this.e5d('EOF');
    }
    if (!(charSequenceGet(this.w5i(), this.a59_1) === _Char___init__impl__6a9atx(34))) {
      this.e5d('Expected closing quotation mark');
    }
    this.a59_1 = this.a59_1 + 1 | 0;
  }
  return result;
};
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().h5j_1;
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
  return c < 117 ? CharMappings_getInstance().g5j_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.g5j_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.h5j_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
function CharMappings() {
  CharMappings_instance = this;
  this.g5j_1 = charArray(117);
  this.h5j_1 = new Int8Array(126);
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
protoOf(StringJsonLexerWithComments).l5e = function () {
  var source = this.w5i();
  var cpos = this.z5i();
  if (cpos >= source.length || cpos === -1)
    return 10;
  this.a59_1 = cpos + 1 | 0;
  return charToTokenClass(charCodeAt(source, cpos));
};
protoOf(StringJsonLexerWithComments).h5e = function () {
  var current = this.z5i();
  if (current >= this.w5i().length || current === -1)
    return false;
  return this.a5j(charCodeAt(this.w5i(), current));
};
protoOf(StringJsonLexerWithComments).v5f = function (expected) {
  var source = this.w5i();
  var current = this.z5i();
  if (current >= source.length || current === -1) {
    this.a59_1 = -1;
    this.c5j(expected);
  }
  var c = charCodeAt(source, current);
  this.a59_1 = current + 1 | 0;
  if (c === expected)
    return Unit_instance;
  else {
    this.c5j(expected);
  }
};
protoOf(StringJsonLexerWithComments).g5e = function () {
  var source = this.w5i();
  var cpos = this.z5i();
  if (cpos >= source.length || cpos === -1)
    return 10;
  this.a59_1 = cpos;
  return charToTokenClass(charCodeAt(source, cpos));
};
protoOf(StringJsonLexerWithComments).z5i = function () {
  var current = this.a59_1;
  if (current === -1)
    return current;
  var source = this.w5i();
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
          this.a59_1 = source.length;
          this.e5d('Expected end of the block comment: "*/", but had EOF instead');
        } else {
          current = current + 2 | 0;
        }
        continue $l$loop_1;
      }
    }
    break $l$loop_1;
  }
  this.a59_1 = current;
  return current;
};
function StringJsonLexer(source) {
  AbstractJsonLexer.call(this);
  this.r5j_1 = source;
}
protoOf(StringJsonLexer).w5i = function () {
  return this.r5j_1;
};
protoOf(StringJsonLexer).x5i = function (position) {
  return position < this.w5i().length ? position : -1;
};
protoOf(StringJsonLexer).l5e = function () {
  var source = this.w5i();
  var cpos = this.a59_1;
  $l$loop: while (!(cpos === -1) && cpos < source.length) {
    var _unary__edvuaz = cpos;
    cpos = _unary__edvuaz + 1 | 0;
    var c = charCodeAt(source, _unary__edvuaz);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    this.a59_1 = cpos;
    return charToTokenClass(c);
  }
  this.a59_1 = source.length;
  return 10;
};
protoOf(StringJsonLexer).h5e = function () {
  var current = this.a59_1;
  if (current === -1)
    return false;
  var source = this.w5i();
  $l$loop: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop;
    }
    this.a59_1 = current;
    return this.a5j(c);
  }
  this.a59_1 = current;
  return false;
};
protoOf(StringJsonLexer).z5i = function () {
  var current = this.a59_1;
  if (current === -1)
    return current;
  var source = this.w5i();
  $l$loop: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop;
    }
  }
  this.a59_1 = current;
  return current;
};
protoOf(StringJsonLexer).v5f = function (expected) {
  if (this.a59_1 === -1) {
    this.c5j(expected);
  }
  var source = this.w5i();
  var cpos = this.a59_1;
  $l$loop: while (cpos < source.length) {
    var _unary__edvuaz = cpos;
    cpos = _unary__edvuaz + 1 | 0;
    var c = charCodeAt(source, _unary__edvuaz);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    this.a59_1 = cpos;
    if (c === expected)
      return Unit_instance;
    this.c5j(expected);
  }
  this.a59_1 = -1;
  this.c5j(expected);
};
protoOf(StringJsonLexer).b5g = function () {
  this.v5f(_Char___init__impl__6a9atx(34));
  var current = this.a59_1;
  var closingQuote = indexOf_0(this.w5i(), _Char___init__impl__6a9atx(34), current);
  if (closingQuote === -1) {
    this.j5e();
    this.d5j(1, false);
  }
  var inductionVariable = current;
  if (inductionVariable < closingQuote)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (charCodeAt(this.w5i(), i) === _Char___init__impl__6a9atx(92)) {
        return this.consumeString2(this.w5i(), this.a59_1, i);
      }
    }
     while (inductionVariable < closingQuote);
  this.a59_1 = closingQuote + 1 | 0;
  return substring(this.w5i(), current, closingQuote);
};
protoOf(StringJsonLexer).d5g = function (keyToMatch, isLenient) {
  var positionSnapshot = this.a59_1;
  try {
    if (!(this.l5e() === 6))
      return null;
    var firstKey = this.y5f(isLenient);
    if (!(firstKey === keyToMatch))
      return null;
    this.e5j();
    if (!(this.l5e() === 5))
      return null;
    return this.y5f(isLenient);
  }finally {
    this.a59_1 = positionSnapshot;
    this.e5j();
  }
};
function StringJsonLexer_0(json, source) {
  return !json.n58_1.n5a_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.p58_1;
}
function JsonToStringWriter() {
  this.q58_1 = StringBuilder_init_$Create$_0(128);
}
protoOf(JsonToStringWriter).i5c = function (value) {
  this.q58_1.mc(value);
};
protoOf(JsonToStringWriter).c5c = function (char) {
  this.q58_1.c8(char);
};
protoOf(JsonToStringWriter).e5c = function (text) {
  this.q58_1.b8(text);
};
protoOf(JsonToStringWriter).o5c = function (text) {
  printQuoted(this.q58_1, text);
};
protoOf(JsonToStringWriter).r58 = function () {
  this.q58_1.pc();
};
protoOf(JsonToStringWriter).toString = function () {
  return this.q58_1.toString();
};
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(defer$1).r2c = get_isNullable;
protoOf(defer$1).w2c = get_isInline;
protoOf(defer$1).y2c = get_annotations;
protoOf(PolymorphismValidator).k2v = contextual;
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
