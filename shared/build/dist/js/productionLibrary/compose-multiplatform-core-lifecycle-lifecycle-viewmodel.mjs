import {
  Unit_instance1fbcbse1fwigr as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  EmptyCoroutineContext_getInstance31fow51ayy30t as EmptyCoroutineContext_getInstance,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  NotImplementedErrorfzlkpv14xxr8 as NotImplementedError,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  RuntimeException_init_$Create$3l9mowrs7hjww as RuntimeException_init_$Create$,
  Exceptiondt2hlxn7j7vw as Exception,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  LinkedHashMap_init_$Create$1f9mb1z5f3dxn as LinkedHashMap_init_$Create$,
  LinkedHashSet_init_$Create$3o6z3oewjhki9 as LinkedHashSet_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
import {
  cancel2en0dn4yvpufo as cancel,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  Dispatchers_getInstanceitgtkvqfcnx3 as Dispatchers_getInstance,
  SupervisorJobythnfxkr3jxc as SupervisorJob,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(CloseableCoroutineScope, 'CloseableCoroutineScope', VOID, VOID, [AutoCloseable, CoroutineScope]);
initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
initMetadataForClass(ViewModel, 'ViewModel');
initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
//endregion
function get_VIEW_MODEL_SCOPE_LOCK() {
  _init_properties_ViewModel_kt__8pkmem();
  return VIEW_MODEL_SCOPE_LOCK;
}
var VIEW_MODEL_SCOPE_LOCK;
function get_viewModelScope(_this__u8e3s4) {
  _init_properties_ViewModel_kt__8pkmem();
  // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
  get_VIEW_MODEL_SCOPE_LOCK();
  var tmp0_elvis_lhs = _this__u8e3s4.p1y('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY');
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = createViewModelScope();
    _this__u8e3s4.q1y('androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY', this_0);
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var properties_initialized_ViewModel_kt_igete4;
function _init_properties_ViewModel_kt__8pkmem() {
  if (!properties_initialized_ViewModel_kt_igete4) {
    properties_initialized_ViewModel_kt_igete4 = true;
    VIEW_MODEL_SCOPE_LOCK = new SynchronizedObject();
  }
}
function CloseableCoroutineScope(coroutineContext) {
  this.r1y_1 = coroutineContext;
}
protoOf(CloseableCoroutineScope).tn = function () {
  return this.r1y_1;
};
protoOf(CloseableCoroutineScope).z3 = function () {
  return cancel(this.r1y_1);
};
function createViewModelScope() {
  var tmp;
  try {
    tmp = Dispatchers_getInstance().kz().ez();
  } catch ($p) {
    var tmp_0;
    if ($p instanceof NotImplementedError) {
      var _ = $p;
      tmp_0 = EmptyCoroutineContext_getInstance();
    } else {
      if ($p instanceof IllegalStateException) {
        var __0 = $p;
        tmp_0 = EmptyCoroutineContext_getInstance();
      } else {
        throw $p;
      }
    }
    tmp = tmp_0;
  }
  var dispatcher = tmp;
  return new CloseableCoroutineScope(dispatcher.rh(SupervisorJob()));
}
function ViewModelImpl_init_$Init$($this) {
  ViewModelImpl.call($this);
  return $this;
}
function ViewModelImpl_init_$Create$() {
  return ViewModelImpl_init_$Init$(objectCreate(protoOf(ViewModelImpl)));
}
function closeWithRuntimeException($this, closeable) {
  try {
    if (closeable == null)
      null;
    else {
      closeable.z3();
    }
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      throw RuntimeException_init_$Create$(e);
    } else {
      throw $p;
    }
  }
}
protoOf(ViewModelImpl).q1y = function (key, closeable) {
  if (this.v1y_1) {
    closeWithRuntimeException(this, closeable);
    return Unit_instance;
  }
  // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
  this.s1y_1;
  var oldCloseable = this.t1y_1.h2(key, closeable);
  closeWithRuntimeException(this, oldCloseable);
};
protoOf(ViewModelImpl).p1y = function (key) {
  // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
  this.s1y_1;
  var tmp = this.t1y_1.e2(key);
  return (tmp == null ? true : isInterface(tmp, AutoCloseable)) ? tmp : THROW_CCE();
};
function ViewModelImpl() {
  this.s1y_1 = new SynchronizedObject();
  var tmp = this;
  // Inline function 'kotlin.collections.mutableMapOf' call
  tmp.t1y_1 = LinkedHashMap_init_$Create$();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableSetOf' call
  tmp_0.u1y_1 = LinkedHashSet_init_$Create$();
  this.v1y_1 = false;
}
function ViewModel_init_$Init$($this) {
  ViewModel.call($this);
  $this.o1y_1 = ViewModelImpl_init_$Create$();
  return $this;
}
protoOf(ViewModel).q1y = function (key, closeable) {
  this.o1y_1.q1y(key, closeable);
};
protoOf(ViewModel).p1y = function (key) {
  return this.o1y_1.p1y(key);
};
function ViewModel() {
}
function SynchronizedObject() {
}
//region block: exports
export {
  ViewModel as ViewModelpz26qsovwjw0,
  get_viewModelScope as get_viewModelScope3i5ussysxvgw5,
  ViewModel_init_$Init$ as ViewModel_init_$Init$2rx58w95s3ghm,
};
//endregion

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel.mjs.map
