import {
  IndexOutOfBoundsException_init_$Create$2w5dv25cjssuw as IndexOutOfBoundsException_init_$Create$,
  Long2qws0ah9gnpki as Long,
  IllegalArgumentException_init_$Create$3ewkh27kzt8z8 as IllegalArgumentException_init_$Create$,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  protoOf180f3jzyo7rfj as protoOf,
  toString1pkumu07cwy4m as toString,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  toLongw1zpgk99d84b as toLong,
  StringBuilder_init_$Create$2ujvu6cqvzuyn as StringBuilder_init_$Create$,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  IllegalArgumentException_init_$Create$3vjwoodhlckbo as IllegalArgumentException_init_$Create$_0,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  Exception_init_$Init$7nmtst2tre47 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  Exception_init_$Init$33ewqhqmjrfx6 as Exception_init_$Init$_0,
  Exception_init_$Init$393utbttlf2x4 as Exception_init_$Init$_1,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.y21(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.y21.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex.y(new Long(0, 0)) < 0 || endIndex.y(size) > 0) {
    throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex.y(endIndex) > 0) {
    throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset.y(new Long(0, 0)) < 0 || offset.y(size) > 0 || size.s2(offset).y(byteCount) < 0 || byteCount.y(new Long(0, 0)) < 0) {
    throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.m().toString() + ', required: ' + byteCount.toString() + ')');
}
function Buffer() {
  this.m20_1 = null;
  this.n20_1 = null;
  this.o20_1 = new Long(0, 0);
}
protoOf(Buffer).m = function () {
  return this.o20_1;
};
protoOf(Buffer).p20 = function () {
  return this;
};
protoOf(Buffer).q20 = function () {
  return this.m().equals(new Long(0, 0));
};
protoOf(Buffer).r20 = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount.y(new Long(0, 0)) >= 0)) {
    var message = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.m().y(byteCount) < 0) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.m().toString() + ', required: ' + byteCount.toString() + ')');
  }
};
protoOf(Buffer).s20 = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount.y(new Long(0, 0)) >= 0)) {
    var message = 'byteCount: ' + byteCount.toString() + ' < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.m().y(byteCount) >= 0;
};
protoOf(Buffer).t20 = function () {
  var tmp0_elvis_lhs = this.m20_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throwEof(this, new Long(1, 0));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var segment = tmp;
  var segmentSize = segment.b21();
  if (segmentSize === 0) {
    this.c21();
    return this.t20();
  }
  var v = segment.d21();
  this.o20_1 = this.o20_1.s2(new Long(1, 0));
  if (segmentSize === 1) {
    this.c21();
  }
  return v;
};
protoOf(Buffer).e21 = function () {
  var tmp0_elvis_lhs = this.m20_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throwEof(this, new Long(2, 0));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var segment = tmp;
  var segmentSize = segment.b21();
  if (segmentSize < 2) {
    this.r20(new Long(2, 0));
    if (segmentSize === 0) {
      this.c21();
      return this.e21();
    }
    // Inline function 'kotlinx.io.and' call
    var tmp_0 = (this.t20() & 255) << 8;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = this.t20() & 255;
    return toShort(tmp_0 | tmp$ret$1);
  }
  var v = segment.f21();
  this.o20_1 = this.o20_1.s2(new Long(2, 0));
  if (segmentSize === 2) {
    this.c21();
  }
  return v;
};
protoOf(Buffer).g21 = function () {
  return Unit_instance;
};
protoOf(Buffer).h21 = function (out, startIndex, endIndex) {
  checkBounds(this.m(), startIndex, endIndex);
  if (startIndex.equals(endIndex))
    return Unit_instance;
  var currentOffset = startIndex;
  var remainingByteCount = endIndex.s2(startIndex);
  out.o20_1 = out.o20_1.r2(remainingByteCount);
  var s = this.m20_1;
  while (currentOffset.y(toLong(ensureNotNull(s).w20_1 - s.v20_1 | 0)) >= 0) {
    currentOffset = currentOffset.s2(toLong(s.w20_1 - s.v20_1 | 0));
    s = s.z20_1;
  }
  while (remainingByteCount.y(new Long(0, 0)) > 0) {
    var copy = ensureNotNull(s).i21();
    copy.v20_1 = copy.v20_1 + currentOffset.d1() | 0;
    var tmp = copy;
    var tmp0 = copy.v20_1 + remainingByteCount.d1() | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = copy.w20_1;
    tmp.w20_1 = Math.min(tmp0, b);
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (out.m20_1 == null) {
      out.m20_1 = copy;
      out.n20_1 = copy;
    } else if (false) {
      out.n20_1 = ensureNotNull(out.n20_1).j21(copy).k21();
      if (ensureNotNull(out.n20_1).a21_1 == null) {
        out.m20_1 = out.n20_1;
      }
    } else {
      out.n20_1 = ensureNotNull(out.n20_1).j21(copy);
    }
    remainingByteCount = remainingByteCount.s2(toLong(copy.w20_1 - copy.v20_1 | 0));
    currentOffset = new Long(0, 0);
    s = s.z20_1;
  }
};
protoOf(Buffer).l21 = function () {
  var result = this.m();
  if (result.equals(new Long(0, 0)))
    return new Long(0, 0);
  var tail = ensureNotNull(this.n20_1);
  if (tail.w20_1 < 8192 && tail.y20_1) {
    result = result.s2(toLong(tail.w20_1 - tail.v20_1 | 0));
  }
  return result;
};
protoOf(Buffer).y1 = function () {
  return this.m21(this.m());
};
protoOf(Buffer).m21 = function (byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.y(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var remainingByteCount = byteCount;
  while (remainingByteCount.y(new Long(0, 0)) > 0) {
    var tmp0_elvis_lhs = this.m20_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp0 = remainingByteCount;
    // Inline function 'kotlinx.io.minOf' call
    var b = head.w20_1 - head.v20_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = toLong(b);
    var toSkip = (tmp0.y(b_0) <= 0 ? tmp0 : b_0).d1();
    this.o20_1 = this.o20_1.s2(toLong(toSkip));
    remainingByteCount = remainingByteCount.s2(toLong(toSkip));
    head.v20_1 = head.v20_1 + toSkip | 0;
    if (head.v20_1 === head.w20_1) {
      this.c21();
    }
  }
};
protoOf(Buffer).n21 = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var tmp0_elvis_lhs = this.m20_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var s = tmp;
  var tmp0 = endIndex - startIndex | 0;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = s.b21();
  var toCopy = Math.min(tmp0, b);
  s.o21(sink, startIndex, startIndex + toCopy | 0);
  this.o20_1 = this.o20_1.s2(toLong(toCopy));
  if (isEmpty(s)) {
    this.c21();
  }
  return toCopy;
};
protoOf(Buffer).p21 = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.y(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.m().equals(new Long(0, 0)))
    return new Long(-1, -1);
  var bytesWritten = byteCount.y(this.m()) > 0 ? this.m() : byteCount;
  sink.q21(this, bytesWritten);
  return bytesWritten;
};
protoOf(Buffer).r21 = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.y(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.m().y(byteCount) < 0) {
    sink.q21(this, this.m());
    throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.m().toString() + ' bytes were written.');
  }
  sink.q21(this, byteCount);
};
protoOf(Buffer).s21 = function (sink) {
  var byteCount = this.m();
  if (byteCount.y(new Long(0, 0)) > 0) {
    sink.q21(this, byteCount);
  }
  return byteCount;
};
protoOf(Buffer).t21 = function () {
  return buffered(new PeekSource(this));
};
protoOf(Buffer).u21 = function (minimumCapacity) {
  // Inline function 'kotlin.require' call
  if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
    var message = 'unexpected capacity';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.n20_1 == null) {
    var result = SegmentPool_instance.x21();
    this.m20_1 = result;
    this.n20_1 = result;
    return result;
  }
  var t = ensureNotNull(this.n20_1);
  if ((t.w20_1 + minimumCapacity | 0) > 8192 || !t.y20_1) {
    var newTail = t.j21(SegmentPool_instance.x21());
    this.n20_1 = newTail;
    return newTail;
  }
  return t;
};
protoOf(Buffer).y21 = function (source, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = source.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var currentOffset = startIndex;
  while (currentOffset < endIndex) {
    var tail = this.u21(1);
    var tmp0 = endIndex - currentOffset | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = tail.z21();
    var toCopy = Math.min(tmp0, b);
    tail.a22(source, currentOffset, currentOffset + toCopy | 0);
    currentOffset = currentOffset + toCopy | 0;
  }
  var tmp = this;
  var tmp0_0 = this.o20_1;
  // Inline function 'kotlin.Long.plus' call
  var other = endIndex - startIndex | 0;
  tmp.o20_1 = tmp0_0.r2(toLong(other));
};
protoOf(Buffer).q21 = function (source, byteCount) {
  // Inline function 'kotlin.require' call
  if (!!(source === this)) {
    var message = 'source == this';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  checkOffsetAndCount(source.o20_1, new Long(0, 0), byteCount);
  var remainingByteCount = byteCount;
  while (remainingByteCount.y(new Long(0, 0)) > 0) {
    if (remainingByteCount.y(toLong(ensureNotNull(source.m20_1).b21())) < 0) {
      var tail = this.n20_1;
      var tmp;
      if (!(tail == null) && tail.y20_1) {
        var tmp0 = remainingByteCount;
        // Inline function 'kotlin.Long.plus' call
        var other = tail.w20_1;
        var tmp0_0 = tmp0.r2(toLong(other));
        // Inline function 'kotlin.Long.minus' call
        var other_0 = tail.c22() ? 0 : tail.v20_1;
        tmp = tmp0_0.s2(toLong(other_0)).y(new Long(8192, 0)) <= 0;
      } else {
        tmp = false;
      }
      if (tmp) {
        ensureNotNull(source.m20_1).e22(tail, remainingByteCount.d1());
        source.o20_1 = source.o20_1.s2(remainingByteCount);
        this.o20_1 = this.o20_1.r2(remainingByteCount);
        return Unit_instance;
      } else {
        source.m20_1 = ensureNotNull(source.m20_1).d22(remainingByteCount.d1());
      }
    }
    var segmentToMove = ensureNotNull(source.m20_1);
    var movedByteCount = toLong(segmentToMove.b21());
    source.m20_1 = segmentToMove.f22();
    if (source.m20_1 == null) {
      source.n20_1 = null;
    }
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (this.m20_1 == null) {
      this.m20_1 = segmentToMove;
      this.n20_1 = segmentToMove;
    } else if (true) {
      this.n20_1 = ensureNotNull(this.n20_1).j21(segmentToMove).k21();
      if (ensureNotNull(this.n20_1).a21_1 == null) {
        this.m20_1 = this.n20_1;
      }
    } else {
      this.n20_1 = ensureNotNull(this.n20_1).j21(segmentToMove);
    }
    source.o20_1 = source.o20_1.s2(movedByteCount);
    this.o20_1 = this.o20_1.r2(movedByteCount);
    remainingByteCount = remainingByteCount.s2(movedByteCount);
  }
};
protoOf(Buffer).g22 = function (source) {
  var totalBytesRead = new Long(0, 0);
  $l$loop: while (true) {
    var readCount = source.p21(this, new Long(8192, 0));
    if (readCount.equals(new Long(-1, -1)))
      break $l$loop;
    totalBytesRead = totalBytesRead.r2(readCount);
  }
  return totalBytesRead;
};
protoOf(Buffer).h22 = function (byte) {
  this.u21(1).i22(byte);
  this.o20_1 = this.o20_1.r2(new Long(1, 0));
};
protoOf(Buffer).j22 = function (short) {
  this.u21(2).k22(short);
  this.o20_1 = this.o20_1.r2(new Long(2, 0));
};
protoOf(Buffer).l22 = function () {
  var result = new Buffer();
  if (this.m().equals(new Long(0, 0)))
    return result;
  var head = ensureNotNull(this.m20_1);
  var headCopy = head.i21();
  result.m20_1 = headCopy;
  result.n20_1 = headCopy;
  var s = head.z20_1;
  while (!(s == null)) {
    result.n20_1 = ensureNotNull(result.n20_1).j21(s.i21());
    s = s.z20_1;
  }
  result.o20_1 = this.m();
  return result;
};
protoOf(Buffer).z3 = function () {
  return Unit_instance;
};
protoOf(Buffer).toString = function () {
  if (this.m().equals(new Long(0, 0)))
    return 'Buffer(size=0)';
  var maxPrintableBytes = 64;
  // Inline function 'kotlinx.io.minOf' call
  var b = this.m();
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(maxPrintableBytes);
  var len = (a.y(b) <= 0 ? a : b).d1();
  var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.m().y(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
  var bytesWritten = 0;
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = this.m20_1;
  while (!(curr == null)) {
    var tmp0 = get_SegmentReadContextImpl();
    var segment = curr;
    var idx = 0;
    while (bytesWritten < len && idx < segment.b21()) {
      var _unary__edvuaz = idx;
      idx = _unary__edvuaz + 1 | 0;
      var b_0 = tmp0.m22(segment, _unary__edvuaz);
      bytesWritten = bytesWritten + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.shr' call
      var tmp$ret$2 = b_0 >> 4;
      var tmp_0 = builder.c8(tmp[tmp$ret$2 & 15]);
      var tmp_1 = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$3 = b_0 & 15;
      tmp_0.c8(tmp_1[tmp$ret$3]);
    }
    curr = curr.z20_1;
  }
  if (this.m().y(toLong(maxPrintableBytes)) > 0) {
    builder.c8(_Char___init__impl__6a9atx(8230));
  }
  return 'Buffer(size=' + this.m().toString() + ' hex=' + builder.toString() + ')';
};
protoOf(Buffer).c21 = function () {
  var oldHead = ensureNotNull(this.m20_1);
  var nextHead = oldHead.z20_1;
  this.m20_1 = nextHead;
  if (nextHead == null) {
    this.n20_1 = null;
  } else {
    nextHead.a21_1 = null;
  }
  oldHead.z20_1 = null;
  SegmentPool_instance.n22(oldHead);
};
protoOf(Buffer).o22 = function () {
  var oldTail = ensureNotNull(this.n20_1);
  var newTail = oldTail.a21_1;
  this.n20_1 = newTail;
  if (newTail == null) {
    this.m20_1 = null;
  } else {
    newTail.z20_1 = null;
  }
  oldTail.a21_1 = null;
  SegmentPool_instance.n22(oldTail);
};
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
function PeekSource(upstream) {
  this.p22_1 = upstream;
  this.q22_1 = this.p22_1.p20();
  this.r22_1 = this.q22_1.m20_1;
  var tmp = this;
  var tmp0_safe_receiver = this.q22_1.m20_1;
  var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v20_1;
  tmp.s22_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  this.t22_1 = false;
  this.u22_1 = new Long(0, 0);
}
protoOf(PeekSource).p21 = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  if (!!this.t22_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.y(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  // Inline function 'kotlin.check' call
  if (!(this.r22_1 == null || (this.r22_1 === this.q22_1.m20_1 && this.s22_1 === ensureNotNull(this.q22_1.m20_1).v20_1))) {
    var message_1 = 'Peek source is invalid because upstream source was used';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
  if (byteCount.equals(new Long(0, 0)))
    return new Long(0, 0);
  // Inline function 'kotlin.Long.plus' call
  var tmp$ret$7 = this.u22_1.r2(toLong(1));
  if (!this.p22_1.s20(tmp$ret$7))
    return new Long(-1, -1);
  if (this.r22_1 == null && !(this.q22_1.m20_1 == null)) {
    this.r22_1 = this.q22_1.m20_1;
    this.s22_1 = ensureNotNull(this.q22_1.m20_1).v20_1;
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.q22_1.m().s2(this.u22_1);
  var toCopy = byteCount.y(b) <= 0 ? byteCount : b;
  this.q22_1.h21(sink, this.u22_1, this.u22_1.r2(toCopy));
  this.u22_1 = this.u22_1.r2(toCopy);
  return toCopy;
};
protoOf(PeekSource).z3 = function () {
  this.t22_1 = true;
};
function RealSource(source) {
  this.v22_1 = source;
  this.w22_1 = false;
  this.x22_1 = new Buffer();
}
protoOf(RealSource).p20 = function () {
  return this.x22_1;
};
protoOf(RealSource).p21 = function (sink, byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.w22_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(byteCount.y(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  if (this.x22_1.m().equals(new Long(0, 0))) {
    var read = this.v22_1.p21(this.x22_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return new Long(-1, -1);
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.x22_1.m();
  var toRead = byteCount.y(b) <= 0 ? byteCount : b;
  return this.x22_1.p21(sink, toRead);
};
protoOf(RealSource).q20 = function () {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.w22_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  return this.x22_1.q20() && this.v22_1.p21(this.x22_1, new Long(8192, 0)).equals(new Long(-1, -1));
};
protoOf(RealSource).r20 = function (byteCount) {
  if (!this.s20(byteCount))
    throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
};
protoOf(RealSource).s20 = function (byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.w22_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(byteCount.y(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  while (this.x22_1.m().y(byteCount) < 0) {
    if (this.v22_1.p21(this.x22_1, new Long(8192, 0)).equals(new Long(-1, -1)))
      return false;
  }
  return true;
};
protoOf(RealSource).n21 = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  if (this.x22_1.m().equals(new Long(0, 0))) {
    var read = this.v22_1.p21(this.x22_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return -1;
  }
  var tmp0 = endIndex - startIndex | 0;
  // Inline function 'kotlinx.io.minOf' call
  var b = this.x22_1.m();
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(tmp0);
  var toRead = (a.y(b) <= 0 ? a : b).d1();
  return this.x22_1.n21(sink, startIndex, startIndex + toRead | 0);
};
protoOf(RealSource).r21 = function (sink, byteCount) {
  try {
    this.r20(byteCount);
  } catch ($p) {
    if ($p instanceof EOFException) {
      var e = $p;
      sink.q21(this.x22_1, this.x22_1.m());
      throw e;
    } else {
      throw $p;
    }
  }
  this.x22_1.r21(sink, byteCount);
};
protoOf(RealSource).s21 = function (sink) {
  var totalBytesWritten = new Long(0, 0);
  while (!this.v22_1.p21(this.x22_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
    var emitByteCount = this.x22_1.l21();
    if (emitByteCount.y(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.r2(emitByteCount);
      sink.q21(this.x22_1, emitByteCount);
    }
  }
  if (this.x22_1.m().y(new Long(0, 0)) > 0) {
    totalBytesWritten = totalBytesWritten.r2(this.x22_1.m());
    sink.q21(this.x22_1, this.x22_1.m());
  }
  return totalBytesWritten;
};
protoOf(RealSource).e21 = function () {
  this.r20(new Long(2, 0));
  return this.x22_1.e21();
};
protoOf(RealSource).t21 = function () {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.w22_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  return buffered(new PeekSource(this));
};
protoOf(RealSource).z3 = function () {
  if (this.w22_1)
    return Unit_instance;
  this.w22_1 = true;
  this.v22_1.z3();
  this.x22_1.y1();
};
protoOf(RealSource).toString = function () {
  return 'buffered(' + toString(this.v22_1) + ')';
};
function Segment_init_$Init$($this) {
  Segment.call($this);
  $this.u20_1 = new Int8Array(8192);
  $this.y20_1 = true;
  $this.x20_1 = null;
  return $this;
}
function Segment_init_$Create$() {
  return Segment_init_$Init$(objectCreate(protoOf(Segment)));
}
function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
  Segment.call($this);
  $this.u20_1 = data;
  $this.v20_1 = pos;
  $this.w20_1 = limit;
  $this.x20_1 = shareToken;
  $this.y20_1 = owner;
  return $this;
}
function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
  return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
}
function Companion() {
  this.y22_1 = 8192;
  this.z22_1 = 1024;
}
protoOf(Companion).a23 = function () {
  return Segment_init_$Create$();
};
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
protoOf(Segment).c22 = function () {
  var tmp1_safe_receiver = this.x20_1;
  var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b23();
  return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
};
protoOf(Segment).i21 = function () {
  var tmp0_elvis_lhs = this.x20_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = SegmentPool_instance.c23();
    this.x20_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var t = tmp;
  var tmp_0 = this.v20_1;
  var tmp_1 = this.w20_1;
  // Inline function 'kotlin.also' call
  t.d23();
  return Segment_init_$Create$_0(this.u20_1, tmp_0, tmp_1, t, false);
};
protoOf(Segment).f22 = function () {
  var result = this.z20_1;
  if (!(this.a21_1 == null)) {
    ensureNotNull(this.a21_1).z20_1 = this.z20_1;
  }
  if (!(this.z20_1 == null)) {
    ensureNotNull(this.z20_1).a21_1 = this.a21_1;
  }
  this.z20_1 = null;
  this.a21_1 = null;
  return result;
};
protoOf(Segment).j21 = function (segment) {
  segment.a21_1 = this;
  segment.z20_1 = this.z20_1;
  if (!(this.z20_1 == null)) {
    ensureNotNull(this.z20_1).a21_1 = segment;
  }
  this.z20_1 = segment;
  return segment;
};
protoOf(Segment).d22 = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount > 0 && byteCount <= (this.w20_1 - this.v20_1 | 0))) {
    var message = 'byteCount out of range';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var prefix;
  if (byteCount >= 1024) {
    prefix = this.i21();
  } else {
    prefix = SegmentPool_instance.x21();
    var tmp0 = this.u20_1;
    var tmp2 = prefix.u20_1;
    var tmp4 = this.v20_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.v20_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, 0, tmp4, endIndex);
  }
  prefix.w20_1 = prefix.v20_1 + byteCount | 0;
  this.v20_1 = this.v20_1 + byteCount | 0;
  if (!(this.a21_1 == null)) {
    ensureNotNull(this.a21_1).j21(prefix);
  } else {
    prefix.z20_1 = this;
    this.a21_1 = prefix;
  }
  return prefix;
};
protoOf(Segment).k21 = function () {
  // Inline function 'kotlin.check' call
  if (!!(this.a21_1 == null)) {
    var message = 'cannot compact';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (!ensureNotNull(this.a21_1).y20_1)
    return this;
  var byteCount = this.w20_1 - this.v20_1 | 0;
  var availableByteCount = (8192 - ensureNotNull(this.a21_1).w20_1 | 0) + (ensureNotNull(this.a21_1).c22() ? 0 : ensureNotNull(this.a21_1).v20_1) | 0;
  if (byteCount > availableByteCount)
    return this;
  var predecessor = this.a21_1;
  this.e22(ensureNotNull(predecessor), byteCount);
  var successor = this.f22();
  // Inline function 'kotlin.check' call
  if (!(successor == null)) {
    throw IllegalStateException_init_$Create$('Check failed.');
  }
  SegmentPool_instance.n22(this);
  return predecessor;
};
protoOf(Segment).i22 = function (byte) {
  var _unary__edvuaz = this.w20_1;
  this.w20_1 = _unary__edvuaz + 1 | 0;
  this.u20_1[_unary__edvuaz] = byte;
};
protoOf(Segment).k22 = function (short) {
  var data = this.u20_1;
  var limit = this.w20_1;
  var _unary__edvuaz = limit;
  limit = _unary__edvuaz + 1 | 0;
  data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
  var _unary__edvuaz_0 = limit;
  limit = _unary__edvuaz_0 + 1 | 0;
  data[_unary__edvuaz_0] = toByte(short & 255);
  this.w20_1 = limit;
};
protoOf(Segment).d21 = function () {
  var _unary__edvuaz = this.v20_1;
  this.v20_1 = _unary__edvuaz + 1 | 0;
  return this.u20_1[_unary__edvuaz];
};
protoOf(Segment).f21 = function () {
  var data = this.u20_1;
  var pos = this.v20_1;
  var _unary__edvuaz = pos;
  pos = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlinx.io.and' call
  var tmp = (data[_unary__edvuaz] & 255) << 8;
  var _unary__edvuaz_0 = pos;
  pos = _unary__edvuaz_0 + 1 | 0;
  // Inline function 'kotlinx.io.and' call
  var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
  var s = toShort(tmp | tmp$ret$1);
  this.v20_1 = pos;
  return s;
};
protoOf(Segment).e22 = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  if (!sink.y20_1) {
    var message = 'only owner can write';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if ((sink.w20_1 + byteCount | 0) > 8192) {
    if (sink.c22())
      throw IllegalArgumentException_init_$Create$_0();
    if (((sink.w20_1 + byteCount | 0) - sink.v20_1 | 0) > 8192)
      throw IllegalArgumentException_init_$Create$_0();
    var tmp0 = sink.u20_1;
    var tmp2 = sink.u20_1;
    var tmp4 = sink.v20_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = sink.w20_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, 0, tmp4, endIndex);
    sink.w20_1 = sink.w20_1 - sink.v20_1 | 0;
    sink.v20_1 = 0;
  }
  var tmp0_0 = this.u20_1;
  var tmp2_0 = sink.u20_1;
  var tmp4_0 = sink.w20_1;
  var tmp6 = this.v20_1;
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex_0 = this.v20_1 + byteCount | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = tmp0_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_0, tmp2_0, tmp4_0, tmp6, endIndex_0);
  sink.w20_1 = sink.w20_1 + byteCount | 0;
  this.v20_1 = this.v20_1 + byteCount | 0;
};
protoOf(Segment).o21 = function (dst, dstStartOffset, dstEndOffset) {
  var len = dstEndOffset - dstStartOffset | 0;
  var tmp0 = this.u20_1;
  var tmp6 = this.v20_1;
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = this.v20_1 + len | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
  this.v20_1 = this.v20_1 + len | 0;
};
protoOf(Segment).a22 = function (src, srcStartOffset, srcEndOffset) {
  var tmp2 = this.u20_1;
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset = this.w20_1;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = src;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
  this.w20_1 = this.w20_1 + (srcEndOffset - srcStartOffset | 0) | 0;
};
protoOf(Segment).b21 = function () {
  return this.w20_1 - this.v20_1 | 0;
};
protoOf(Segment).z21 = function () {
  return this.u20_1.length - this.w20_1 | 0;
};
protoOf(Segment).e23 = function (readOnly) {
  return this.u20_1;
};
protoOf(Segment).f23 = function (index) {
  return this.u20_1[this.v20_1 + index | 0];
};
protoOf(Segment).g23 = function (index, value) {
  this.u20_1[this.w20_1 + index | 0] = value;
};
protoOf(Segment).h23 = function (index, b0, b1) {
  var d = this.u20_1;
  var l = this.w20_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
};
protoOf(Segment).i23 = function (index, b0, b1, b2) {
  var d = this.u20_1;
  var l = this.w20_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
};
protoOf(Segment).j23 = function (index, b0, b1, b2, b3) {
  var d = this.u20_1;
  var l = this.w20_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
  d[(l + index | 0) + 3 | 0] = b3;
};
function Segment() {
  this.v20_1 = 0;
  this.w20_1 = 0;
  this.x20_1 = null;
  this.y20_1 = false;
  this.z20_1 = null;
  this.a21_1 = null;
}
function SegmentCopyTracker() {
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.b21() === 0;
}
function AlwaysSharedCopyTracker() {
  AlwaysSharedCopyTracker_instance = this;
  SegmentCopyTracker.call(this);
}
protoOf(AlwaysSharedCopyTracker).b23 = function () {
  return true;
};
protoOf(AlwaysSharedCopyTracker).d23 = function () {
  return Unit_instance;
};
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance == null)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function Sink() {
}
function Source() {
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = new Long(2147483647, 0);
    while (_this__u8e3s4.p20().m().y(new Long(2147483647, 0)) < 0 && _this__u8e3s4.s20(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      fetchSize = fetchSize.t2(toLong(2));
    }
    // Inline function 'kotlin.check' call
    if (!(_this__u8e3s4.p20().m().y(new Long(2147483647, 0)) < 0)) {
      var message = "Can't create an array of size " + _this__u8e3s4.p20().m().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    arraySize = _this__u8e3s4.p20().m().d1();
  } else {
    _this__u8e3s4.r20(toLong(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.p20(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.n21(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = toLong(byteCount);
  // Inline function 'kotlin.require' call
  if (!(byteCount_0.y(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function readString(_this__u8e3s4) {
  _this__u8e3s4.s20(new Long(-1, 2147483647));
  return commonReadUtf8(_this__u8e3s4.p20(), _this__u8e3s4.p20().m());
}
function readString_0(_this__u8e3s4, byteCount) {
  _this__u8e3s4.r20(byteCount);
  return commonReadUtf8(_this__u8e3s4.p20(), byteCount);
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount.equals(new Long(0, 0)))
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.m20_1;
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (toLong(curr.b21()).y(byteCount) >= 0) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp0 = curr.e23(true);
      var tmp2 = curr.v20_1;
      var tmp0_0 = curr.w20_1;
      // Inline function 'kotlin.math.min' call
      var b = tmp2 + byteCount.d1() | 0;
      var tmp$ret$0 = Math.min(tmp0_0, b);
      result = commonToUtf8String(tmp0, tmp2, tmp$ret$0);
      _this__u8e3s4.m21(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.d1()));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException_init_$Create$(toString(message));
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.p20();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.u21(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.z21() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.n23(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charCodeAt(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.n23(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.w20_1 = tail.w20_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp.o20_1 = this_0.o20_1.r2(toLong(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.z21() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.z21();
          throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.w20_1 = tail.w20_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_0.o20_1 = this_0.o20_1.r2(toLong(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.o22();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.u21(2);
        get_SegmentWriteContextImpl().m23(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.w20_1 = tail_0.w20_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_1.o20_1 = this_0.o20_1.r2(toLong(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.z21() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.z21();
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.w20_1 = tail_0.w20_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_2.o20_1 = this_0.o20_1.r2(toLong(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.o22();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.u21(3);
        get_SegmentWriteContextImpl().l23(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.w20_1 = tail_1.w20_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_3.o20_1 = this_0.o20_1.r2(toLong(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.z21() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.z21();
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.w20_1 = tail_1.w20_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_4.o20_1 = this_0.o20_1.r2(toLong(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.o22();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_3 = charCodeAt(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_3);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(63);
        var tmp$ret$26 = Char__toInt_impl_vasixd(this_4);
        this_0.h22(toByte(tmp$ret$26));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.u21(4);
          get_SegmentWriteContextImpl().k23(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.w20_1 = tail_2.w20_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_6.o20_1 = this_0.o20_1.r2(toLong(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.z21() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.z21();
            throw IllegalStateException_init_$Create$(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.w20_1 = tail_2.w20_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_7.o20_1 = this_0.o20_1.r2(toLong(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.o22();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.g21();
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      var c = numberToChar(b0);
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = c;
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = c_0;
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp2 = index;
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp2];
          var b1 = _this__u8e3s4[tmp2 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            var c_2 = numberToChar(65533);
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = c_2;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            var c_3 = numberToChar(65533);
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = c_3;
          } else {
            var c_4 = numberToChar(codePoint);
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = c_4;
          }
          tmp$ret$5 = 2;
        }
        index = tmp + tmp$ret$5 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$19;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp2_0 + 2 | 0)) {
              var c_5 = numberToChar(65533);
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = c_5;
              var tmp_1;
              if (endIndex <= (tmp2_0 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$19 = 1;
                break $l$block_4;
              } else {
                tmp$ret$19 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp2_0];
            var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              var c_6 = numberToChar(65533);
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = c_6;
              tmp$ret$19 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              var c_7 = numberToChar(65533);
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = c_7;
              tmp$ret$19 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              var c_8 = numberToChar(65533);
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = c_8;
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              var c_9 = numberToChar(65533);
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = c_9;
            } else {
              var c_10 = numberToChar(codePoint_0);
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = c_10;
            }
            tmp$ret$19 = 3;
          }
          index = tmp_0 + tmp$ret$19 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$41;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp2_1 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = c_11;
                  var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = c_12;
                } else {
                  var c_13 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = c_13;
                }
                var tmp_3;
                if (endIndex <= (tmp2_1 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$41 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp2_1 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$41 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$41 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp2_1];
              var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = c_14;
                  var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = c_15;
                } else {
                  var c_16 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = c_16;
                }
                tmp$ret$41 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = c_17;
                  var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = c_18;
                } else {
                  var c_19 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = c_19;
                }
                tmp$ret$41 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = c_20;
                  var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = c_21;
                } else {
                  var c_22 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = c_22;
                }
                tmp$ret$41 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = c_23;
                  var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = c_24;
                } else {
                  var c_25 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = c_25;
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = c_26;
                  var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = c_27;
                } else {
                  var c_28 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = c_28;
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = c_29;
                  var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = c_30;
                } else {
                  var c_31 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = c_31;
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = c_32;
                  var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = c_33;
                } else {
                  var c_34 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = c_34;
                }
              }
              tmp$ret$41 = 4;
            }
            index = tmp_2 + tmp$ret$41 | 0;
          } else {
            var c_35 = _Char___init__impl__6a9atx(65533);
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = c_35;
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
function UnsafeBufferOperations() {
}
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
function SegmentReadContextImpl$1() {
}
protoOf(SegmentReadContextImpl$1).m22 = function (segment, offset) {
  return segment.f23(offset);
};
function SegmentWriteContextImpl$1() {
}
protoOf(SegmentWriteContextImpl$1).n23 = function (segment, offset, value) {
  segment.g23(offset, value);
};
protoOf(SegmentWriteContextImpl$1).m23 = function (segment, offset, b0, b1) {
  segment.h23(offset, b0, b1);
};
protoOf(SegmentWriteContextImpl$1).l23 = function (segment, offset, b0, b1, b2) {
  segment.i23(offset, b0, b1, b2);
};
protoOf(SegmentWriteContextImpl$1).k23 = function (segment, offset, b0, b1, b2, b3) {
  segment.j23(offset, b0, b1, b2, b3);
};
function BufferIterationContextImpl$1() {
}
protoOf(BufferIterationContextImpl$1).m22 = function (segment, offset) {
  return get_SegmentReadContextImpl().m22(segment, offset);
};
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function IOException_init_$Init$($this) {
  Exception_init_$Init$($this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$() {
  var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$);
  return tmp;
}
function IOException_init_$Init$_0(message, $this) {
  Exception_init_$Init$_0(message, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_0(message) {
  var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_0);
  return tmp;
}
function IOException_init_$Init$_1(message, cause, $this) {
  Exception_init_$Init$_1(message, cause, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_1(message, cause) {
  var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_1);
  return tmp;
}
function IOException() {
  captureStack(this, IOException);
}
function EOFException_init_$Init$($this) {
  IOException_init_$Init$($this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$() {
  var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$);
  return tmp;
}
function EOFException_init_$Init$_0(message, $this) {
  IOException_init_$Init$_0(message, $this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$_0(message) {
  var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$_0);
  return tmp;
}
function EOFException() {
  captureStack(this, EOFException);
}
function SegmentPool() {
  this.v21_1 = 0;
  this.w21_1 = 0;
}
protoOf(SegmentPool).x21 = function () {
  return Companion_instance.a23();
};
protoOf(SegmentPool).n22 = function (segment) {
};
protoOf(SegmentPool).c23 = function () {
  return AlwaysSharedCopyTracker_getInstance();
};
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
protoOf(Buffer).b22 = write$default;
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  EOFException_init_$Create$_0 as EOFException_init_$Create$2ki37nn86l2yt,
  IOException_init_$Init$_0 as IOException_init_$Init$3tijvyh8jladu,
  IOException_init_$Create$_0 as IOException_init_$Create$1wkk79fgwuoz2,
  IOException_init_$Create$_1 as IOException_init_$Create$2jyze3554lamk,
  Buffer as Buffergs925ekssbch,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readString as readString2nvggcfaijfhd,
  readString_0 as readString3v6duspiz33tv,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
