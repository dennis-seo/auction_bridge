import {
  Companion_instance2oawqq9qiaris as Companion_instance,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  _Result___init__impl__xyqfz83hut4nr3dfvi3 as _Result___init__impl__xyqfz8,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createFailure8paxfkfa5dc7 as createFailure,
  Result3t1vadv16kmzk as Result,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  toString1h6jjoch8cjt8 as toString_0,
  newThrowablezl37abp36p5f as newThrowable,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  VOID3gxj6tk5isa35 as VOID,
  isInterface3d6p8outrmvmk as isInterface,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  toLongw1zpgk99d84b as toLong,
  numberToLong1a4cndvg6c52s as numberToLong,
  intercepted2ogpsikxxj4u0 as intercepted,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  returnIfSuspendedqak8u4r448cu as returnIfSuspended,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  Long2qws0ah9gnpki as Long,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  IllegalStateException_init_$Init$3ccqbeatlpw5c as IllegalStateException_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  EmptyCoroutineContext_getInstance31fow51ayy30t as EmptyCoroutineContext_getInstance,
  Continuation1aa2oekvx7jm7 as Continuation,
  initMetadataForFunctionReferencen3g5fpj34t8u as initMetadataForFunctionReference,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  CancellationException_init_$Create$1muhzgve35v78 as CancellationException_init_$Create$,
  CancellationException3b36o9qz53rgr as CancellationException,
  StringBuilder_init_$Create$2ujvu6cqvzuyn as StringBuilder_init_$Create$,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  encodeToByteArray22651fhg4p67t as encodeToByteArray,
  toString1pkumu07cwy4m as toString_1,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  replaceqbix900hl8kl as replace,
  IllegalArgumentException_init_$Create$3ewkh27kzt8z8 as IllegalArgumentException_init_$Create$,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toByte4i43936u611k as toByte,
  decodeToString1x4faah2liw2p as decodeToString,
  setOf45ia9pnfhe90 as setOf,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  startCoroutineCancellable18shtfwdieib as startCoroutineCancellable,
  get_job2zvlvce9o9a29 as get_job,
  Job13y4jkazwjho0 as Job,
  cancel1xim2hrvjmwpn as cancel,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
} from './kotlinx-coroutines-core.mjs';
import {
  Buffergs925ekssbch as Buffer,
  IOException_init_$Create$1wkk79fgwuoz2 as IOException_init_$Create$,
  EOFException_init_$Create$2ki37nn86l2yt as EOFException_init_$Create$,
  IOException1wyutdmfe71nu as IOException,
  IOException_init_$Create$2jyze3554lamk as IOException_init_$Create$_0,
  readString2nvggcfaijfhd as readString,
  readByteArray1fhzfwi2j014k as readByteArray,
  readString3v6duspiz33tv as readString_0,
  writeString33ca4btrgctw7 as writeString,
  IOException_init_$Init$3tijvyh8jladu as IOException_init_$Init$,
  readByteArray1ri21h2rciakw as readByteArray_0,
} from './kotlinx-io-kotlinx-io-core.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForCompanion(Companion);
initMetadataForObject(Empty, 'Empty');
initMetadataForClass(Closed, 'Closed');
function resume() {
  return this.s23().f9(Companion_getInstance().p23_1);
}
function resume_0(throwable) {
  var tmp = this.s23();
  var tmp_0;
  if (throwable == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
    tmp_0 = new Result(tmp$ret$2);
  }
  var tmp1_elvis_lhs = tmp_0;
  return tmp.f9(tmp1_elvis_lhs == null ? Companion_getInstance().p23_1 : tmp1_elvis_lhs.hl_1);
}
initMetadataForInterface(Task, 'Task');
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.c26(min, $completion) : $super.c26.call(this, min, $completion);
}
initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForCoroutine($readRemainingCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($readRemainingCOROUTINE$_0, CoroutineImpl);
initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
initMetadataForClass(WriterJob, 'WriterJob');
initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(CloseToken, 'CloseToken');
initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
function close() {
  this.tq();
}
initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
initMetadataForCompanion(Companion_1);
initMetadataForClass(Charset, 'Charset');
initMetadataForObject(Charsets, 'Charsets');
initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
initMetadataForClass(toKtor$1);
initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
//endregion
function Companion() {
  Companion_instance_0 = this;
  this.o23_1 = new Closed(null);
  var tmp = this;
  // Inline function 'kotlin.Companion.success' call
  tmp.p23_1 = _Result___init__impl__xyqfz8(Unit_instance);
}
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 == null)
    new Companion();
  return Companion_instance_0;
}
function Empty() {
}
protoOf(Empty).toString = function () {
  return 'Empty';
};
protoOf(Empty).hashCode = function () {
  return -231472095;
};
protoOf(Empty).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Empty))
    return false;
  other instanceof Empty || THROW_CCE();
  return true;
};
var Empty_instance;
function Empty_getInstance() {
  return Empty_instance;
}
function Closed(cause) {
  this.q23_1 = cause;
}
protoOf(Closed).toString = function () {
  return 'Closed(cause=' + toString(this.q23_1) + ')';
};
protoOf(Closed).hashCode = function () {
  return this.q23_1 == null ? 0 : hashCode(this.q23_1);
};
protoOf(Closed).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Closed))
    return false;
  var tmp0_other_with_cast = other instanceof Closed ? other : THROW_CCE();
  if (!equals(this.q23_1, tmp0_other_with_cast.q23_1))
    return false;
  return true;
};
function Task() {
}
function Read(continuation) {
  this.w23_1 = continuation;
  this.x23_1 = null;
  if (get_DEVELOPMENT_MODE()) {
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.w23_1), 16));
    stackTraceToString(this_0);
    tmp.x23_1 = this_0;
  }
}
protoOf(Read).s23 = function () {
  return this.w23_1;
};
protoOf(Read).r23 = function () {
  return this.x23_1;
};
protoOf(Read).t23 = function () {
  return 'read';
};
function Write(continuation) {
  this.y23_1 = continuation;
  this.z23_1 = null;
  if (get_DEVELOPMENT_MODE()) {
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.y23_1), 16));
    stackTraceToString(this_0);
    tmp.z23_1 = this_0;
  }
}
protoOf(Write).s23 = function () {
  return this.y23_1;
};
protoOf(Write).r23 = function () {
  return this.z23_1;
};
protoOf(Write).t23 = function () {
  return 'write';
};
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.d24_1;
  $this.b24_1.s21($this.f24_1);
  $this.c24_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.e24_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Write) {
    tmp = $this.e24_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.u23();
  }
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().o23_1;
  var continuation = $this.e24_1.atomicfu$getAndSet(closeContinuation);
  if (!isInterface(continuation, Task))
    return Unit_instance;
  continuation.v23(cause);
}
function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.q24_1 = _this__u8e3s4;
  this.r24_1 = min;
}
protoOf($awaitContentCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 4;
          rethrowCloseCauseIfNeeded_1(this.q24_1);
          if (this.q24_1.f24_1.m().y(toLong(this.r24_1)) >= 0)
            return true;
          var tmp_0 = this;
          tmp_0.s24_1 = this.q24_1;
          this.t24_1 = this.s24_1;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!(numberToLong(this.q24_1.c24_1).r2(this.q24_1.f24_1.m()).y(toLong(this.r24_1)) < 0 && this.q24_1.h24_1.kotlinx$atomicfu$value == null)) {
            this.u8_1 = 3;
            continue $sm;
          }

          this.u8_1 = 2;
          var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
          cancellable.wr();
          var tmp0 = this.t24_1;
          var tmp2 = new Read(cancellable);
          l$ret$1: do {
            var previous = tmp0.e24_1.kotlinx$atomicfu$value;
            if (!(previous instanceof Closed)) {
              if (!tmp0.e24_1.atomicfu$compareAndSet(previous, tmp2)) {
                tmp2.u23();
                break l$ret$1;
              }
            }
            if (previous instanceof Read) {
              previous.v23(new ConcurrentIOException(tmp2.t23(), previous.r23()));
            } else {
              if (isInterface(previous, Task)) {
                previous.u23();
              } else {
                if (previous instanceof Closed) {
                  tmp2.v23(previous.q23_1);
                  break l$ret$1;
                } else {
                  if (!equals(previous, Empty_instance)) {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }
            if (!(numberToLong(this.q24_1.c24_1).r2(this.q24_1.f24_1.m()).y(toLong(this.r24_1)) < 0 && this.q24_1.h24_1.kotlinx$atomicfu$value == null)) {
              var current = tmp0.e24_1.kotlinx$atomicfu$value;
              var tmp_1;
              if (current instanceof Read) {
                tmp_1 = tmp0.e24_1.atomicfu$compareAndSet(current, Empty_instance);
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                current.u23();
              }
            }
          }
           while (false);
          suspendResult = returnIfSuspended(cancellable.xr(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.u8_1 = 1;
          continue $sm;
        case 3:
          if (this.q24_1.f24_1.m().y(new Long(1048576, 0)) < 0) {
            moveFlushToReadBuffer(this.q24_1);
          }

          return this.q24_1.f24_1.m().y(toLong(this.r24_1)) >= 0;
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
function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.c25_1 = _this__u8e3s4;
}
protoOf($flushCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 4;
          rethrowCloseCauseIfNeeded_1(this.c25_1);
          this.c25_1.f25();
          if (this.c25_1.c24_1 < 1048576)
            return Unit_instance;
          var tmp_0 = this;
          tmp_0.d25_1 = this.c25_1;
          this.e25_1 = this.d25_1;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!(this.c25_1.c24_1 >= 1048576 && this.c25_1.h24_1.kotlinx$atomicfu$value == null)) {
            this.u8_1 = 3;
            continue $sm;
          }

          this.u8_1 = 2;
          var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
          cancellable.wr();
          var tmp0 = this.e25_1;
          var tmp2 = new Write(cancellable);
          l$ret$1: do {
            var previous = tmp0.e24_1.kotlinx$atomicfu$value;
            if (!(previous instanceof Closed)) {
              if (!tmp0.e24_1.atomicfu$compareAndSet(previous, tmp2)) {
                tmp2.u23();
                break l$ret$1;
              }
            }
            if (previous instanceof Write) {
              previous.v23(new ConcurrentIOException(tmp2.t23(), previous.r23()));
            } else {
              if (isInterface(previous, Task)) {
                previous.u23();
              } else {
                if (previous instanceof Closed) {
                  tmp2.v23(previous.q23_1);
                  break l$ret$1;
                } else {
                  if (!equals(previous, Empty_instance)) {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }
            if (!(this.c25_1.c24_1 >= 1048576 && this.c25_1.h24_1.kotlinx$atomicfu$value == null)) {
              var current = tmp0.e24_1.kotlinx$atomicfu$value;
              var tmp_1;
              if (current instanceof Write) {
                tmp_1 = tmp0.e24_1.atomicfu$compareAndSet(current, Empty_instance);
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                current.u23();
              }
            }
          }
           while (false);
          suspendResult = returnIfSuspended(cancellable.xr(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.u8_1 = 1;
          continue $sm;
        case 3:
          return Unit_instance;
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
function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.o25_1 = _this__u8e3s4;
}
protoOf($flushAndCloseCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 4;
          var tmp_0 = this;
          tmp_0.p25_1 = this.o25_1;
          this.q25_1 = this.p25_1;
          this.v8_1 = 2;
          var tmp_1 = this;
          tmp_1.s25_1 = Companion_instance;
          var tmp_2 = this;
          tmp_2.t25_1 = this.q25_1;
          this.u25_1 = this.t25_1;
          this.u8_1 = 1;
          suspendResult = this.u25_1.v25(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var tmp_3 = this;
          this.s25_1;
          tmp_3.r25_1 = _Result___init__impl__xyqfz8(Unit_instance);
          this.v8_1 = 4;
          this.u8_1 = 3;
          continue $sm;
        case 2:
          this.v8_1 = 4;
          var tmp_4 = this.x8_1;
          if (tmp_4 instanceof Error) {
            var e = this.x8_1;
            var tmp_5 = this;
            tmp_5.r25_1 = _Result___init__impl__xyqfz8(createFailure(e));
            this.u8_1 = 3;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 3:
          this.v8_1 = 4;
          if (!this.o25_1.h24_1.atomicfu$compareAndSet(null, get_CLOSED()))
            return Unit_instance;
          closeSlot(this.o25_1, null);
          return Unit_instance;
        case 4:
          throw this.x8_1;
      }
    } catch ($p) {
      var e_0 = $p;
      if (this.v8_1 === 4) {
        throw e_0;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e_0;
      }
    }
   while (true);
};
function ByteChannel(autoFlush) {
  autoFlush = autoFlush === VOID ? false : autoFlush;
  this.a24_1 = autoFlush;
  this.b24_1 = new Buffer();
  this.c24_1 = 0;
  this.d24_1 = new Object();
  this.e24_1 = atomic$ref$1(Empty_instance);
  this.f24_1 = new Buffer();
  this.g24_1 = new Buffer();
  this.h24_1 = atomic$ref$1(null);
}
protoOf(ByteChannel).w25 = function () {
  var tmp0_safe_receiver = this.x25();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  if (this.f24_1.q20()) {
    moveFlushToReadBuffer(this);
  }
  return this.f24_1;
};
protoOf(ByteChannel).y25 = function () {
  var tmp0_safe_receiver = this.x25();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  if (this.z25()) {
    throw IOException_init_$Create$('Channel is closed for write');
  }
  return this.g24_1;
};
protoOf(ByteChannel).x25 = function () {
  var tmp0_safe_receiver = this.h24_1.kotlinx$atomicfu$value;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1();
};
protoOf(ByteChannel).z25 = function () {
  return !(this.h24_1.kotlinx$atomicfu$value == null);
};
protoOf(ByteChannel).b26 = function () {
  return !(this.x25() == null) || (this.z25() && this.c24_1 === 0 && this.f24_1.q20());
};
protoOf(ByteChannel).c26 = function (min, $completion) {
  var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ByteChannel).v25 = function ($completion) {
  var tmp = new $flushCOROUTINE$(this, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ByteChannel).f25 = function () {
  if (this.g24_1.q20())
    return Unit_instance;
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  this.d24_1;
  var count = this.g24_1.m().d1();
  this.b24_1.g22(this.g24_1);
  this.c24_1 = this.c24_1 + count | 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = this.e24_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Read) {
    tmp = this.e24_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.u23();
  }
};
protoOf(ByteChannel).z3 = function () {
  this.f25();
  if (!this.h24_1.atomicfu$compareAndSet(null, get_CLOSED()))
    return Unit_instance;
  closeSlot(this, null);
};
protoOf(ByteChannel).e26 = function ($completion) {
  var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(ByteChannel).f26 = function (cause) {
  if (!(this.h24_1.kotlinx$atomicfu$value == null))
    return Unit_instance;
  var closedToken = new CloseToken(cause);
  this.h24_1.atomicfu$compareAndSet(null, closedToken);
  var actualCause = closedToken.h1();
  closeSlot(this, actualCause);
};
protoOf(ByteChannel).toString = function () {
  return 'ByteChannel[' + hashCode(this) + ']';
};
function ConcurrentIOException(taskName, cause) {
  cause = cause === VOID ? null : cause;
  IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
  captureStack(this, ConcurrentIOException);
}
function ByteReadChannel(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = new Buffer();
  this_0.y21(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_0(source);
}
function ByteReadChannel_0(source) {
  return new SourceByteReadChannel(source);
}
function ByteReadChannel$Companion$Empty$1() {
  this.g26_1 = null;
  this.h26_1 = new Buffer();
}
protoOf(ByteReadChannel$Companion$Empty$1).x25 = function () {
  return this.g26_1;
};
protoOf(ByteReadChannel$Companion$Empty$1).b26 = function () {
  return true;
};
protoOf(ByteReadChannel$Companion$Empty$1).w25 = function () {
  return this.h26_1;
};
protoOf(ByteReadChannel$Companion$Empty$1).c26 = function (min, $completion) {
  return false;
};
protoOf(ByteReadChannel$Companion$Empty$1).f26 = function (cause) {
};
function Companion_0() {
  Companion_instance_1 = this;
  var tmp = this;
  tmp.i26_1 = new ByteReadChannel$Companion$Empty$1();
}
var Companion_instance_1;
function Companion_getInstance_0() {
  if (Companion_instance_1 == null)
    new Companion_0();
  return Companion_instance_1;
}
function ByteReadChannel_1() {
}
function cancel_0(_this__u8e3s4) {
  _this__u8e3s4.f26(IOException_init_$Create$('Channel was cancelled'));
}
function readRemaining(_this__u8e3s4, $completion) {
  var tmp = new $readRemainingCOROUTINE$(_this__u8e3s4, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function get_availableForRead(_this__u8e3s4) {
  return _this__u8e3s4.w25().p20().m().d1();
}
function readPacket(_this__u8e3s4, packet, $completion) {
  var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function discard(_this__u8e3s4, max, $completion) {
  max = max === VOID ? new Long(-1, 2147483647) : max;
  var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function toByteArray(_this__u8e3s4, $completion) {
  var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function copyTo(_this__u8e3s4, channel, limit, $completion) {
  var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.x25();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function readBuffer(_this__u8e3s4, $completion) {
  var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.x25();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.x25();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function readRemaining_0(_this__u8e3s4, max, $completion) {
  var tmp = new $readRemainingCOROUTINE$_0(_this__u8e3s4, max, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.r26_1 = _this__u8e3s4;
}
protoOf($readRemainingCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 4;
          this.s26_1 = BytePacketBuilder();
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!!this.r26_1.b26()) {
            this.u8_1 = 3;
            continue $sm;
          }

          this.s26_1.g22(this.r26_1.w25());
          this.u8_1 = 2;
          suspendResult = this.r26_1.d26(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.u8_1 = 1;
          continue $sm;
        case 3:
          rethrowCloseCauseIfNeeded(this.r26_1);
          return this.s26_1.p20();
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
function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.b27_1 = _this__u8e3s4;
  this.c27_1 = packet;
}
protoOf($readPacketCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 6;
          this.d27_1 = new Buffer();
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!(this.d27_1.m().y(toLong(this.c27_1)) < 0)) {
            this.u8_1 = 5;
            continue $sm;
          }

          if (this.b27_1.w25().q20()) {
            this.u8_1 = 2;
            suspendResult = this.b27_1.d26(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.u8_1 = 3;
            continue $sm;
          }

        case 2:
          this.u8_1 = 3;
          continue $sm;
        case 3:
          if (this.b27_1.b26()) {
            this.u8_1 = 5;
            continue $sm;
          } else {
            this.u8_1 = 4;
            continue $sm;
          }

        case 4:
          if (get_remaining(this.b27_1.w25()).y(numberToLong(this.c27_1).s2(this.d27_1.m())) > 0) {
            this.b27_1.w25().r21(this.d27_1, numberToLong(this.c27_1).s2(this.d27_1.m()));
          } else {
            this.b27_1.w25().s21(this.d27_1);
          }

          this.u8_1 = 1;
          continue $sm;
        case 5:
          if (this.d27_1.m().y(toLong(this.c27_1)) < 0) {
            throw EOFException_init_$Create$('Not enough data available, required ' + this.c27_1 + ' bytes but only ' + this.d27_1.m().toString() + ' available');
          }

          return this.d27_1;
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
function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.m27_1 = _this__u8e3s4;
  this.n27_1 = max;
}
protoOf($discardCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 5;
          this.o27_1 = this.n27_1;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!(this.o27_1.y(new Long(0, 0)) > 0 && !this.m27_1.b26())) {
            this.u8_1 = 4;
            continue $sm;
          }

          if (get_availableForRead(this.m27_1) === 0) {
            this.u8_1 = 2;
            suspendResult = this.m27_1.d26(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.u8_1 = 3;
            continue $sm;
          }

        case 2:
          this.u8_1 = 3;
          continue $sm;
        case 3:
          var tmp0 = this.o27_1;
          var b = get_remaining(this.m27_1.w25());
          var count = tmp0.y(b) <= 0 ? tmp0 : b;
          discard_0(this.m27_1.w25(), count);
          this.o27_1 = this.o27_1.s2(count);
          this.u8_1 = 1;
          continue $sm;
        case 4:
          return this.n27_1.s2(this.o27_1);
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
function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.x27_1 = _this__u8e3s4;
  this.y27_1 = buffer;
  this.z27_1 = offset;
  this.a28_1 = length;
}
protoOf($readAvailableCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          if (this.x27_1.b26())
            return -1;
          if (this.x27_1.w25().q20()) {
            this.u8_1 = 1;
            suspendResult = this.x27_1.d26(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.u8_1 = 2;
            continue $sm;
          }

        case 1:
          this.u8_1 = 2;
          continue $sm;
        case 2:
          if (this.x27_1.b26())
            return -1;
          return readAvailable_0(this.x27_1.w25(), this.y27_1, this.z27_1, this.a28_1);
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
function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.j28_1 = _this__u8e3s4;
}
protoOf($toByteArrayCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 2;
          this.u8_1 = 1;
          suspendResult = readBuffer(this.j28_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          return readBytes(ARGUMENT);
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
function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.s28_1 = _this__u8e3s4;
  this.t28_1 = channel;
  this.u28_1 = limit;
}
protoOf($copyToCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 12;
          this.v28_1 = this.u28_1;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          this.v8_1 = 8;
          this.v8_1 = 7;
          this.u8_1 = 2;
          continue $sm;
        case 2:
          if (!(!this.s28_1.b26() && this.v28_1.y(new Long(0, 0)) > 0)) {
            this.u8_1 = 6;
            continue $sm;
          }

          if (this.s28_1.w25().q20()) {
            this.u8_1 = 3;
            suspendResult = this.s28_1.d26(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.u8_1 = 4;
            continue $sm;
          }

        case 3:
          this.u8_1 = 4;
          continue $sm;
        case 4:
          var tmp_0 = this;
          var tmp0 = this.v28_1;
          var b = get_remaining(this.s28_1.w25());
          tmp_0.x28_1 = tmp0.y(b) <= 0 ? tmp0 : b;
          this.s28_1.w25().r21(this.t28_1.y25(), this.x28_1);
          this.v28_1 = this.v28_1.s2(this.x28_1);
          this.u8_1 = 5;
          suspendResult = this.t28_1.v25(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.u8_1 = 2;
          continue $sm;
        case 6:
          this.w28_1 = Unit_instance;
          this.v8_1 = 12;
          this.u8_1 = 10;
          continue $sm;
        case 7:
          this.v8_1 = 8;
          var tmp_1 = this.x8_1;
          if (tmp_1 instanceof Error) {
            this.y28_1 = this.x8_1;
            var tmp_2 = this;
            this.s28_1.f26(this.y28_1);
            close_0(this.t28_1, this.y28_1);
            throw this.y28_1;
          } else {
            throw this.x8_1;
          }

        case 8:
          this.v8_1 = 12;
          this.z28_1 = this.x8_1;
          this.u8_1 = 9;
          suspendResult = this.t28_1.v25(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 9:
          throw this.z28_1;
        case 10:
          this.v8_1 = 12;
          this.u8_1 = 11;
          suspendResult = this.t28_1.v25(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 11:
          return this.u28_1.s2(this.v28_1);
        case 12:
          throw this.x8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v8_1 === 12) {
        throw e;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e;
      }
    }
   while (true);
};
function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.i29_1 = _this__u8e3s4;
}
protoOf($readBufferCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 4;
          this.j29_1 = new Buffer();
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!!this.i29_1.b26()) {
            this.u8_1 = 3;
            continue $sm;
          }

          this.j29_1.g22(this.i29_1.w25());
          this.u8_1 = 2;
          suspendResult = this.i29_1.d26(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.u8_1 = 1;
          continue $sm;
        case 3:
          var tmp0_safe_receiver = this.i29_1.x25();
          if (tmp0_safe_receiver == null)
            null;
          else {
            throw tmp0_safe_receiver;
          }

          return this.j29_1;
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
function $readRemainingCOROUTINE$_0(_this__u8e3s4, max, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.s29_1 = _this__u8e3s4;
  this.t29_1 = max;
}
protoOf($readRemainingCOROUTINE$_0).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 4;
          this.u29_1 = BytePacketBuilder();
          this.v29_1 = this.t29_1;
          this.u8_1 = 1;
          continue $sm;
        case 1:
          if (!(!this.s29_1.b26() && this.v29_1.y(new Long(0, 0)) > 0)) {
            this.u8_1 = 3;
            continue $sm;
          }

          if (this.v29_1.y(get_remaining(this.s29_1.w25())) >= 0) {
            this.v29_1 = this.v29_1.s2(get_remaining(this.s29_1.w25()));
            this.s29_1.w25().s21(this.u29_1);
          } else {
            this.s29_1.w25().r21(this.u29_1, this.v29_1);
            this.v29_1 = new Long(0, 0);
          }

          this.u8_1 = 2;
          suspendResult = this.s29_1.d26(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.u8_1 = 1;
          continue $sm;
        case 3:
          return this.u29_1.p20();
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
function flushIfNeeded(_this__u8e3s4, $completion) {
  var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
}
function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.e2a_1 = _this__u8e3s4;
}
protoOf($flushIfNeededCOROUTINE$).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 3;
          rethrowCloseCauseIfNeeded_0(this.e2a_1);
          var tmp_0;
          var tmp_1 = this.e2a_1;
          var tmp0_safe_receiver = tmp_1 instanceof ByteChannel ? tmp_1 : null;
          if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a24_1) === true) {
            tmp_0 = true;
          } else {
            tmp_0 = get_size(this.e2a_1.y25()) >= 1048576;
          }

          if (tmp_0) {
            this.u8_1 = 1;
            suspendResult = this.e2a_1.v25(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.u8_1 = 2;
            continue $sm;
          }

        case 1:
          this.u8_1 = 2;
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
function get_NO_CALLBACK() {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return NO_CALLBACK;
}
var NO_CALLBACK;
function WriterJob(channel, job) {
  this.f2a_1 = channel;
  this.g2a_1 = job;
}
protoOf(WriterJob).hr = function () {
  return this.g2a_1;
};
function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
  autoFlush = autoFlush === VOID ? false : autoFlush;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
}
function WriterScope(channel, coroutineContext) {
  this.h2a_1 = channel;
  this.i2a_1 = coroutineContext;
}
protoOf(WriterScope).xn = function () {
  return this.i2a_1;
};
function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  _this__u8e3s4.y25().y21(value, startIndex, endIndex);
  return flushIfNeeded(_this__u8e3s4, $completion);
}
function writePacket(_this__u8e3s4, copy, $completion) {
  _this__u8e3s4.y25().g22(copy);
  return flushIfNeeded(_this__u8e3s4, $completion);
}
function get_isCompleted(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return _this__u8e3s4.hr().to();
}
function close_0(_this__u8e3s4, cause) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  if (cause == null) {
    fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
  } else {
    _this__u8e3s4.f26(cause);
  }
}
function invokeOnCompletion(_this__u8e3s4, block) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  var tmp = _this__u8e3s4.hr();
  tmp.ap(invokeOnCompletion$lambda(block));
}
function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  // Inline function 'kotlin.apply' call
  var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
  this_0.ap(writer$lambda(channel));
  var job = this_0;
  return new WriterJob(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function NO_CALLBACK$1() {
  this.j2a_1 = EmptyCoroutineContext_getInstance();
}
protoOf(NO_CALLBACK$1).a9 = function () {
  return this.j2a_1;
};
protoOf(NO_CALLBACK$1).b9 = function (result) {
  return Unit_instance;
};
protoOf(NO_CALLBACK$1).f9 = function (result) {
  return this.b9(result);
};
function ByteWriteChannel$flushAndClose$ref(p0) {
  this.k2a_1 = p0;
}
protoOf(ByteWriteChannel$flushAndClose$ref).l2a = function ($completion) {
  return this.k2a_1.e26($completion);
};
protoOf(ByteWriteChannel$flushAndClose$ref).pa = function ($completion) {
  return this.l2a($completion);
};
function ByteWriteChannel$flushAndClose$ref_0(p0) {
  var i = new ByteWriteChannel$flushAndClose$ref(p0);
  var l = function ($completion) {
    return i.l2a($completion);
  };
  l.callableName = 'flushAndClose';
  l.$arity = 0;
  return l;
}
function invokeOnCompletion$lambda($block) {
  return function (it) {
    $block();
    return Unit_instance;
  };
}
function writer$slambda($block, $channel, resultContinuation) {
  this.u2a_1 = $block;
  this.v2a_1 = $channel;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(writer$slambda).o1h = function ($this$launch, $completion) {
  var tmp = this.p1h($this$launch, $completion);
  tmp.w8_1 = Unit_instance;
  tmp.x8_1 = null;
  return tmp.c9();
};
protoOf(writer$slambda).k9 = function (p1, $completion) {
  return this.o1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(writer$slambda).c9 = function () {
  var suspendResult = this.w8_1;
  $sm: do
    try {
      var tmp = this.u8_1;
      switch (tmp) {
        case 0:
          this.v8_1 = 14;
          this.x2a_1 = Job(get_job(this.w2a_1.xn()));
          this.u8_1 = 1;
          continue $sm;
        case 1:
          this.v8_1 = 4;
          this.v8_1 = 3;
          this.u8_1 = 2;
          suspendResult = this.u2a_1(new WriterScope(this.v2a_1, this.w2a_1.xn().vh(this.x2a_1)), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.x2a_1.uv();
          var tmp_0 = this;
          var tmp_1;
          if (get_job(this.w2a_1.xn()).uo()) {
            this.v2a_1.f26(get_job(this.w2a_1.xn()).xo());
            tmp_1 = Unit_instance;
          }

          tmp_0.y2a_1 = tmp_1;
          this.v8_1 = 14;
          this.u8_1 = 9;
          continue $sm;
        case 3:
          this.v8_1 = 4;
          var tmp_2 = this.x8_1;
          if (tmp_2 instanceof Error) {
            this.z2a_1 = this.x8_1;
            var tmp_3 = this;
            cancel(this.x2a_1, 'Exception thrown while writing to channel', this.z2a_1);
            this.v2a_1.f26(this.z2a_1);
            tmp_3.y2a_1 = Unit_instance;
            this.v8_1 = 14;
            this.u8_1 = 9;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 4:
          this.v8_1 = 14;
          this.a2b_1 = this.x8_1;
          this.u8_1 = 5;
          suspendResult = this.x2a_1.ep(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          var tmp_4 = this;
          tmp_4.b2b_1 = this.w2a_1;
          this.c2b_1 = this.b2b_1;
          this.v8_1 = 7;
          var tmp_5 = this;
          tmp_5.e2b_1 = Companion_instance;
          var tmp_6 = this;
          tmp_6.f2b_1 = this.c2b_1;
          this.g2b_1 = this.f2b_1;
          this.u8_1 = 6;
          suspendResult = this.v2a_1.e26(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 6:
          this.h2b_1 = Unit_instance;
          var tmp_7 = this;
          this.e2b_1;
          var value = this.h2b_1;
          tmp_7.d2b_1 = _Result___init__impl__xyqfz8(value);
          this.v8_1 = 14;
          this.u8_1 = 8;
          continue $sm;
        case 7:
          this.v8_1 = 14;
          var tmp_8 = this.x8_1;
          if (tmp_8 instanceof Error) {
            this.i2b_1 = this.x8_1;
            var tmp_9 = this;
            var exception = this.i2b_1;
            tmp_9.d2b_1 = _Result___init__impl__xyqfz8(createFailure(exception));
            this.u8_1 = 8;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 8:
          this.v8_1 = 14;
          throw this.a2b_1;
        case 9:
          this.v8_1 = 14;
          this.u8_1 = 10;
          suspendResult = this.x2a_1.ep(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 10:
          var tmp_10 = this;
          tmp_10.j2b_1 = this.w2a_1;
          this.k2b_1 = this.j2b_1;
          this.v8_1 = 12;
          var tmp_11 = this;
          tmp_11.m2b_1 = Companion_instance;
          var tmp_12 = this;
          tmp_12.n2b_1 = this.k2b_1;
          this.o2b_1 = this.n2b_1;
          this.u8_1 = 11;
          suspendResult = this.v2a_1.e26(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 11:
          var tmp_13 = this;
          this.m2b_1;
          tmp_13.l2b_1 = _Result___init__impl__xyqfz8(Unit_instance);
          this.v8_1 = 14;
          this.u8_1 = 13;
          continue $sm;
        case 12:
          this.v8_1 = 14;
          var tmp_14 = this.x8_1;
          if (tmp_14 instanceof Error) {
            var e = this.x8_1;
            var tmp_15 = this;
            tmp_15.l2b_1 = _Result___init__impl__xyqfz8(createFailure(e));
            this.u8_1 = 13;
            continue $sm;
          } else {
            throw this.x8_1;
          }

        case 13:
          this.v8_1 = 14;
          return Unit_instance;
        case 14:
          throw this.x8_1;
      }
    } catch ($p) {
      var e_0 = $p;
      if (this.v8_1 === 14) {
        throw e_0;
      } else {
        this.u8_1 = this.v8_1;
        this.x8_1 = e_0;
      }
    }
   while (true);
};
protoOf(writer$slambda).p1h = function ($this$launch, completion) {
  var i = new writer$slambda(this.u2a_1, this.v2a_1, completion);
  i.w2a_1 = $this$launch;
  return i;
};
function writer$slambda_0($block, $channel, resultContinuation) {
  var i = new writer$slambda($block, $channel, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.o1h($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
function writer$lambda($channel) {
  return function (it) {
    var tmp;
    if (!(it == null) && !$channel.z25()) {
      $channel.f26(it);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
  if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
    properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
    NO_CALLBACK = new NO_CALLBACK$1();
  }
}
function get_CLOSED() {
  _init_properties_CloseToken_kt__9ucr41();
  return CLOSED;
}
var CLOSED;
function CloseToken(origin) {
  var tmp = this;
  var tmp_0;
  if (origin == null) {
    tmp_0 = null;
  } else {
    if (origin instanceof CancellationException) {
      var tmp_1;
      if (isInterface(origin, CopyableThrowable)) {
        tmp_1 = origin.dw();
      } else {
        var tmp0_elvis_lhs = origin.message;
        tmp_1 = CancellationException_init_$Create$(tmp0_elvis_lhs == null ? 'Channel was cancelled' : tmp0_elvis_lhs, origin);
      }
      tmp_0 = tmp_1;
    } else {
      var tmp_2;
      if (origin instanceof IOException) {
        tmp_2 = isInterface(origin, CopyableThrowable);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_0 = origin.dw();
      } else {
        var tmp1_elvis_lhs = origin.message;
        tmp_0 = IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was closed' : tmp1_elvis_lhs, origin);
      }
    }
  }
  tmp.a26_1 = tmp_0;
}
protoOf(CloseToken).h1 = function () {
  var tmp;
  if (this.a26_1 == null) {
    tmp = null;
  } else {
    var tmp_0 = this.a26_1;
    if (tmp_0 instanceof IOException) {
      var tmp_1;
      var tmp_2 = this.a26_1;
      if (isInterface(tmp_2, CopyableThrowable)) {
        tmp_1 = this.a26_1.dw();
      } else {
        tmp_1 = IOException_init_$Create$_0(this.a26_1.message, this.a26_1);
      }
      tmp = tmp_1;
    } else {
      var tmp_3 = this.a26_1;
      if (!(tmp_3 == null) ? isInterface(tmp_3, CopyableThrowable) : false) {
        var tmp0_elvis_lhs = this.a26_1.dw();
        tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$(this.a26_1.message, this.a26_1) : tmp0_elvis_lhs;
      } else {
        tmp = CancellationException_init_$Create$(this.a26_1.message, this.a26_1);
      }
    }
  }
  return tmp;
};
var properties_initialized_CloseToken_kt_lgg8zn;
function _init_properties_CloseToken_kt__9ucr41() {
  if (!properties_initialized_CloseToken_kt_lgg8zn) {
    properties_initialized_CloseToken_kt_lgg8zn = true;
    CLOSED = new CloseToken(null);
  }
}
function readText(_this__u8e3s4) {
  return readString(_this__u8e3s4);
}
function SourceByteReadChannel(source) {
  this.p2b_1 = source;
  this.q2b_1 = null;
}
protoOf(SourceByteReadChannel).x25 = function () {
  var tmp0_safe_receiver = this.q2b_1;
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1();
};
protoOf(SourceByteReadChannel).b26 = function () {
  return this.p2b_1.q20();
};
protoOf(SourceByteReadChannel).w25 = function () {
  var tmp0_safe_receiver = this.x25();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  return this.p2b_1;
};
protoOf(SourceByteReadChannel).c26 = function (min, $completion) {
  var tmp0_safe_receiver = this.x25();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  return get_remaining(this.p2b_1).y(toLong(min)) >= 0;
};
protoOf(SourceByteReadChannel).f26 = function (cause) {
  if (!(this.q2b_1 == null))
    return Unit_instance;
  this.p2b_1.z3();
  var tmp = this;
  var tmp1_elvis_lhs = cause == null ? null : cause.message;
  tmp.q2b_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
};
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  var tmp0 = toLong(max);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = input.p20().m();
  // Inline function 'kotlin.text.buildString' call
  var capacity = (tmp0.y(b) <= 0 ? tmp0 : b).d1();
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$(capacity);
  decode_0(_this__u8e3s4, input, this_0, max);
  return this_0.toString();
}
function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
  var start = fromIndex;
  if (start >= toIndex)
    return Unit_instance;
  $l$loop: while (true) {
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
    // Inline function 'kotlin.check' call
    if (!(rc >= 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    start = start + rc | 0;
    if (start >= toIndex)
      break $l$loop;
  }
}
function encode(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
  return builder;
}
function canRead(_this__u8e3s4) {
  return !_this__u8e3s4.q20();
}
function readBytes(_this__u8e3s4, count) {
  count = count === VOID ? _this__u8e3s4.m().d1() : count;
  return readByteArray(_this__u8e3s4, count);
}
function BytePacketBuilder() {
  return new Buffer();
}
function writePacket_0(_this__u8e3s4, packet) {
  _this__u8e3s4.g22(packet);
}
function build(_this__u8e3s4) {
  return _this__u8e3s4.p20();
}
function get_size(_this__u8e3s4) {
  return _this__u8e3s4.p20().m().d1();
}
function writeFully_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  _this__u8e3s4.y21(buffer, offset, offset + length | 0);
}
var ByteReadPacketEmpty;
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.p20().m();
}
function discard_0(_this__u8e3s4, count) {
  count = count === VOID ? new Long(-1, 2147483647) : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.s20(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = count.y(b) <= 0 ? count : b;
  _this__u8e3s4.p20().m21(countToDiscard);
  return countToDiscard;
}
function copy(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.p20().l22();
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.q20() && block(_this__u8e3s4.p20())) {
  }
}
var properties_initialized_ByteReadPacket_kt_hw4st4;
function _init_properties_ByteReadPacket_kt__28475y() {
  if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
    properties_initialized_ByteReadPacket_kt_hw4st4 = true;
    ByteReadPacketEmpty = new Buffer();
  }
}
function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var result = _this__u8e3s4.n21(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().r2b_1 : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().r2b_1)) {
    if (max === 2147483647)
      return readString(_this__u8e3s4);
    var tmp0 = _this__u8e3s4.p20().m();
    // Inline function 'kotlin.math.min' call
    var b = toLong(max);
    var count = tmp0.y(b) <= 0 ? tmp0 : b;
    return readString_0(_this__u8e3s4, count);
  }
  return decode(charset.u2b(), _this__u8e3s4, max);
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().r2b_1 : charset;
  if (charset.equals(Charsets_getInstance().r2b_1))
    return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
  return encodeToByteArray_0(charset.v2b(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().r2b_1 : charset;
  if (charset === Charsets_getInstance().r2b_1) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.v2b(), _this__u8e3s4, text, fromIndex, toIndex);
}
function get_ByteArrayPool() {
  _init_properties_ByteArrayPool_kt__kfi3uj();
  return ByteArrayPool;
}
var ByteArrayPool;
function ByteArrayPool$1() {
  DefaultPool.call(this, 128);
}
protoOf(ByteArrayPool$1).z2b = function () {
  return new Int8Array(4096);
};
var properties_initialized_ByteArrayPool_kt_td6pfh;
function _init_properties_ByteArrayPool_kt__kfi3uj() {
  if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
    properties_initialized_ByteArrayPool_kt_td6pfh = true;
    ByteArrayPool = new ByteArrayPool$1();
  }
}
function ObjectPool() {
}
function Companion_1() {
}
protoOf(Companion_1).i2c = function (name) {
  switch (name) {
    case 'UTF-8':
    case 'utf-8':
    case 'UTF8':
    case 'utf8':
      return Charsets_getInstance().r2b_1;
  }
  var tmp;
  var tmp_0;
  switch (name) {
    case 'ISO-8859-1':
    case 'iso-8859-1':
      tmp_0 = true;
      break;
    default:
      // Inline function 'kotlin.let' call

      var it = replace(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
      var tmp_1;
      if (it === 'iso-8859-1') {
        tmp_1 = true;
      } else {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = it.toLowerCase() === 'iso-8859-1';
      }

      tmp_0 = tmp_1;
      break;
  }
  if (tmp_0) {
    tmp = true;
  } else {
    tmp = name === 'latin1' || name === 'Latin1';
  }
  if (tmp) {
    return Charsets_getInstance().s2b_1;
  }
  throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
};
protoOf(Companion_1).j2c = function (charset) {
  var tmp;
  switch (charset) {
    case 'UTF-8':
    case 'utf-8':
    case 'UTF8':
    case 'utf8':
      tmp = true;
      break;
    default:
      var tmp_0;
      var tmp_1;
      switch (charset) {
        case 'ISO-8859-1':
        case 'iso-8859-1':
          tmp_1 = true;
          break;
        default:
          // Inline function 'kotlin.let' call

          var it = replace(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
          var tmp_2;
          if (it === 'iso-8859-1') {
            tmp_2 = true;
          } else {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp_2 = it.toLowerCase() === 'iso-8859-1';
          }

          tmp_1 = tmp_2;
          break;
      }

      if (tmp_1) {
        tmp_0 = true;
      } else {
        tmp_0 = charset === 'latin1';
      }

      if (tmp_0) {
        tmp = true;
      } else {
        tmp = false;
      }

      break;
  }
  return tmp;
};
var Companion_instance_2;
function Companion_getInstance_1() {
  return Companion_instance_2;
}
function Charset(_name) {
  this.t2b_1 = _name;
}
protoOf(Charset).equals = function (other) {
  if (this === other)
    return true;
  if (other == null || !(this.constructor == other.constructor))
    return false;
  if (!(other instanceof Charset))
    THROW_CCE();
  return this.t2b_1 === other.t2b_1;
};
protoOf(Charset).hashCode = function () {
  return getStringHashCode(this.t2b_1);
};
protoOf(Charset).toString = function () {
  return this.t2b_1;
};
function get_name(_this__u8e3s4) {
  return _this__u8e3s4.t2b_1;
}
function Charsets() {
  Charsets_instance = this;
  this.r2b_1 = new CharsetImpl('UTF-8');
  this.s2b_1 = new CharsetImpl('ISO-8859-1');
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance == null)
    new Charsets();
  return Charsets_instance;
}
function MalformedInputException(message) {
  IOException_init_$Init$(message, this);
  captureStack(this, MalformedInputException);
}
function CharsetDecoder(_charset) {
  this.k2c_1 = _charset;
}
function CharsetEncoder(_charset) {
  this.l2c_1 = _charset;
}
function CharsetImpl(name) {
  Charset.call(this, name);
}
protoOf(CharsetImpl).v2b = function () {
  return new CharsetEncoderImpl(this);
};
protoOf(CharsetImpl).u2b = function () {
  return new CharsetDecoderImpl(this);
};
function CharsetEncoderImpl(charset) {
  CharsetEncoder.call(this, charset);
  this.o2c_1 = charset;
}
protoOf(CharsetEncoderImpl).toString = function () {
  return 'CharsetEncoderImpl(charset=' + this.o2c_1.toString() + ')';
};
protoOf(CharsetEncoderImpl).hashCode = function () {
  return this.o2c_1.hashCode();
};
protoOf(CharsetEncoderImpl).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CharsetEncoderImpl))
    return false;
  var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
  if (!this.o2c_1.equals(tmp0_other_with_cast.o2c_1))
    return false;
  return true;
};
function CharsetDecoderImpl(charset) {
  CharsetDecoder.call(this, charset);
  this.q2c_1 = charset;
}
protoOf(CharsetDecoderImpl).toString = function () {
  return 'CharsetDecoderImpl(charset=' + this.q2c_1.toString() + ')';
};
protoOf(CharsetDecoderImpl).hashCode = function () {
  return this.q2c_1.hashCode();
};
protoOf(CharsetDecoderImpl).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CharsetDecoderImpl))
    return false;
  var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
  if (!this.q2c_1.equals(tmp0_other_with_cast.q2c_1))
    return false;
  return true;
};
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
  var tmp0 = input.p20().m();
  // Inline function 'kotlin.comparisons.minOf' call
  var b = toLong(max);
  var count = tmp0.y(b) <= 0 ? tmp0 : b;
  var tmp = readByteArray(input, count.d1());
  var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
  var tmp_0;
  try {
    tmp_0 = decoder.r2c(array);
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp_0;
  dst.f(result);
  return result.length;
}
function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  var start = fromIndex;
  if (start >= toIndex)
    return new Int8Array(0);
  var dst = new Buffer();
  var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
  start = start + rc | 0;
  if (start === toIndex) {
    return readByteArray_0(dst);
  }
  encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
  return readByteArray_0(dst);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4.k2c_1;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(fromIndex <= toIndex)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException_init_$Create$(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().s2b_1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().r2b_1)) {
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException_init_$Create$(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$5);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.b22(result);
  return result.length;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4.l2c_1;
}
function forName(_this__u8e3s4, name) {
  return Companion_instance_2.i2c(name);
}
function isSupported(_this__u8e3s4, name) {
  return Companion_instance_2.j2c(name);
}
function Decoder(encoding, fatal) {
  fatal = fatal === VOID ? true : fatal;
  var tmp;
  try {
    tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      tmp_0 = new TextDecoderFallback(encoding, fatal);
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function toKtor(_this__u8e3s4) {
  return new toKtor$1(_this__u8e3s4);
}
function textDecoderOptions(fatal) {
  fatal = fatal === VOID ? false : fatal;
  // Inline function 'kotlin.apply' call
  var this_0 = new Object();
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.with' call
  this_0.fatal = fatal;
  return this_0;
}
function toKtor$1($this_toKtor) {
  this.s2c_1 = $this_toKtor;
}
protoOf(toKtor$1).r2c = function (buffer) {
  return this.s2c_1.decode(buffer);
};
function get_ENCODING_ALIASES() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return ENCODING_ALIASES;
}
var ENCODING_ALIASES;
function get_REPLACEMENT() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return REPLACEMENT;
}
var REPLACEMENT;
function TextDecoderFallback(encoding, fatal) {
  this.t2c_1 = fatal;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.lowercase' call
  // Inline function 'kotlin.js.asDynamic' call
  var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
  // Inline function 'kotlin.check' call
  if (!get_ENCODING_ALIASES().u1(requestedEncoding)) {
    var message = encoding + ' is not supported.';
    throw IllegalStateException_init_$Create$(toString_1(message));
  }
}
protoOf(TextDecoderFallback).r2c = function (buffer) {
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
  var inductionVariable = 0;
  var last = bytes.length;
  if (inductionVariable < last)
    $l$loop: do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var byte = bytes[index];
      var point = toCodePoint(byte);
      if (point < 0) {
        // Inline function 'kotlin.check' call
        if (!!this.t2c_1) {
          var message = 'Invalid character: ' + point;
          throw IllegalStateException_init_$Create$(toString_1(message));
        }
        writeFully_0(builder, get_REPLACEMENT());
        continue $l$loop;
      }
      if (point > 255) {
        builder.h22(toByte(point >> 8));
      }
      builder.h22(toByte(point & 255));
    }
     while (inductionVariable < last);
  return decodeToString(readByteArray_0(builder));
};
function toCodePoint(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  var value = _this__u8e3s4 & 255;
  if (isASCII(value)) {
    return value;
  }
  return get_WIN1252_TABLE()[value - 128 | 0];
}
function isASCII(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
}
var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
  if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
    properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
    ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
    // Inline function 'kotlin.byteArrayOf' call
    REPLACEMENT = new Int8Array([-17, -65, -67]);
  }
}
function encodeISO88591(input, fromIndex, toIndex, dst) {
  if (fromIndex >= toIndex)
    return 0;
  var inductionVariable = fromIndex;
  if (inductionVariable < toIndex)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(input, index);
      var character = Char__toInt_impl_vasixd(this_0);
      if (character > 255) {
        failedToMapError(character);
      }
      dst.h22(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
}
function get_WIN1252_TABLE() {
  _init_properties_Win1252Table_kt__tl0v64();
  return WIN1252_TABLE;
}
var WIN1252_TABLE;
var properties_initialized_Win1252Table_kt_pkmjoq;
function _init_properties_Win1252Table_kt__tl0v64() {
  if (!properties_initialized_Win1252Table_kt_pkmjoq) {
    properties_initialized_Win1252Table_kt_pkmjoq = true;
    // Inline function 'kotlin.intArrayOf' call
    WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
  }
}
function DefaultPool(capacity) {
  this.a2c_1 = capacity;
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  var size = this.a2c_1;
  tmp.b2c_1 = Array(size);
  this.c2c_1 = 0;
}
protoOf(DefaultPool).d2c = function (instance) {
};
protoOf(DefaultPool).e2c = function (instance) {
  return instance;
};
protoOf(DefaultPool).f2c = function (instance) {
};
protoOf(DefaultPool).g2c = function () {
  if (this.c2c_1 === 0)
    return this.z2b();
  this.c2c_1 = this.c2c_1 - 1 | 0;
  var idx = this.c2c_1;
  var tmp = this.b2c_1[idx];
  var instance = !(tmp == null) ? tmp : THROW_CCE();
  this.b2c_1[idx] = null;
  return this.e2c(instance);
};
protoOf(DefaultPool).h2c = function (instance) {
  this.f2c(instance);
  if (this.c2c_1 === this.a2c_1) {
    this.d2c(instance);
  } else {
    var _unary__edvuaz = this.c2c_1;
    this.c2c_1 = _unary__edvuaz + 1 | 0;
    this.b2c_1[_unary__edvuaz] = instance;
  }
};
protoOf(DefaultPool).tq = function () {
  var inductionVariable = 0;
  var last = this.c2c_1;
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = this.b2c_1[i];
      var instance = !(tmp == null) ? tmp : THROW_CCE();
      this.b2c_1[i] = null;
      this.d2c(instance);
    }
     while (inductionVariable < last);
  this.c2c_1 = 0;
};
function get_DEVELOPMENT_MODE() {
  return false;
}
//region block: post-declaration
protoOf(Read).u23 = resume;
protoOf(Read).v23 = resume_0;
protoOf(Write).u23 = resume;
protoOf(Write).v23 = resume_0;
protoOf(ByteChannel).d26 = awaitContent$default;
protoOf(ByteReadChannel$Companion$Empty$1).d26 = awaitContent$default;
protoOf(SourceByteReadChannel).d26 = awaitContent$default;
protoOf(DefaultPool).z3 = close;
//endregion
//region block: init
Empty_instance = new Empty();
Companion_instance_2 = new Companion_1();
//endregion
//region block: exports
export {
  copyTo as copyTo2vm7vz7rr51or,
  discard as discard2tnmk0ppobupv,
  readAvailable as readAvailable22vc1bmbuj93x,
  readPacket as readPacket2q2gamtzwxjd1,
  readRemaining as readRemaining1x8kk1vq7p6gm,
  readRemaining_0 as readRemainingi0v421zacxv6,
  toByteArray as toByteArrayafjflk7yznm4,
  writeFully as writeFully3gv1ab611t04k,
  writePacket as writePacketg3gtxxix1x9l,
  Charsets_getInstance as Charsets_getInstanceqs70pvl4noow,
  Companion_getInstance_0 as Companion_getInstance2ai11rhpust2a,
  MalformedInputException as MalformedInputExceptionbvc6h5ij0ias,
  decode as decode1t43jmuxrxpmo,
  encode as encode35e4rpnc94tb5,
  forName as forName2faodmskqnoz5,
  isSupported as isSupported2nf870ypy50et,
  get_name as get_name2f11g4r0d5pxp,
  BytePacketBuilder as BytePacketBuilder2biodf4wxvlba,
  build as buildjygoh729rhy8,
  canRead as canRead1guo8vbveth0f,
  copy as copy2kusxwbm42p4v,
  discard_0 as discard3ugntd47xyll6,
  readText_0 as readText27783kyxjxi1g,
  takeWhile as takeWhile34751tcfg6owx,
  toByteArray_0 as toByteArray1i3ns5jnoqlv6,
  writeFully_0 as writeFully359t6q8kam2g5,
  writePacket_0 as writePacket1weetk0dtcyx2,
  writeText as writeText19qfzm98fbm4l,
  get_ByteArrayPool as get_ByteArrayPool3f7yrgvqxz9ct,
  ByteChannel as ByteChannel3cxdguezl3lu7,
  ByteReadChannel as ByteReadChannel1cb89sbyipkce,
  ByteReadChannel_1 as ByteReadChannel2wzou76jce72d,
  WriterScope as WriterScope3b0bo1enaee6b,
  get_availableForRead as get_availableForRead28yb35u7qm4tu,
  cancel_0 as canceldn4b3cdqcfny,
  close_0 as close3semq7pafb42g,
  invokeOnCompletion as invokeOnCompletionvmw9mjsupd6z,
  get_isCompleted as get_isCompleted2vv2dxgxvs29m,
  readText as readText3frapgncbqrcg,
  writer as writer1eia5its2a1fh,
};
//endregion

//# sourceMappingURL=ktor-ktor-io.mjs.map
