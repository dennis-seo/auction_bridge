import {
  Unit_instance1fbcbse1fwigr as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  protoOf180f3jzyo7rfj as protoOf,
  Collection1k04j3hzsbod0 as Collection,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  LinkedHashMap_init_$Create$1f9mb1z5f3dxn as LinkedHashMap_init_$Create$,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  KtMutableMap1kqeifoi36kpz as KtMutableMap,
  LinkedHashSet_init_$Create$3o6z3oewjhki9 as LinkedHashSet_init_$Create$,
  KtMutableSetwuwn7k5m570a as KtMutableSet,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ConcurrentMutableCollection, 'ConcurrentMutableCollection', VOID, VOID, [Collection]);
initMetadataForClass(ConcurrentMutableIterator, 'ConcurrentMutableIterator');
initMetadataForClass(ConcurrentMutableMap, 'ConcurrentMutableMap', ConcurrentMutableMap_init_$Create$, VOID, [KtMutableMap]);
initMetadataForClass(ConcurrentMutableSet, 'ConcurrentMutableSet', ConcurrentMutableSet_init_$Create$, ConcurrentMutableCollection, [ConcurrentMutableCollection, KtMutableSet]);
//endregion
function ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this$0) {
  return function () {
    return this$0.j5l_1.m();
  };
}
function ConcurrentMutableCollection$contains$lambda(this$0, $element) {
  return function () {
    return this$0.j5l_1.u1($element);
  };
}
function ConcurrentMutableCollection$containsAll$lambda(this$0, $elements) {
  return function () {
    return this$0.j5l_1.v1($elements);
  };
}
function ConcurrentMutableCollection$isEmpty$lambda(this$0) {
  return function () {
    return this$0.j5l_1.p();
  };
}
function ConcurrentMutableCollection$add$lambda(this$0, $element) {
  return function () {
    return this$0.j5l_1.e($element);
  };
}
function ConcurrentMutableCollection$addAll$lambda(this$0, $elements) {
  return function () {
    return this$0.j5l_1.n($elements);
  };
}
function ConcurrentMutableCollection$clear$lambda(this$0) {
  return function () {
    this$0.j5l_1.y1();
    return Unit_instance;
  };
}
function ConcurrentMutableCollection$iterator$lambda(this$0) {
  return function () {
    return new ConcurrentMutableIterator(this$0.k5l_1, this$0.j5l_1.j());
  };
}
function ConcurrentMutableCollection(rootArg, del) {
  rootArg = rootArg === VOID ? null : rootArg;
  this.j5l_1 = del;
  var tmp = this;
  tmp.k5l_1 = rootArg == null ? this : rootArg;
}
protoOf(ConcurrentMutableCollection).m = function () {
  this.k5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this)();
};
protoOf(ConcurrentMutableCollection).u1 = function (element) {
  this.k5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableCollection$contains$lambda(this, element)();
};
protoOf(ConcurrentMutableCollection).v1 = function (elements) {
  this.k5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableCollection$containsAll$lambda(this, elements)();
};
protoOf(ConcurrentMutableCollection).p = function () {
  this.k5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableCollection$isEmpty$lambda(this)();
};
protoOf(ConcurrentMutableCollection).e = function (element) {
  this.k5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableCollection$add$lambda(this, element)();
};
protoOf(ConcurrentMutableCollection).n = function (elements) {
  this.k5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableCollection$addAll$lambda(this, elements)();
};
protoOf(ConcurrentMutableCollection).y1 = function () {
  this.k5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  ConcurrentMutableCollection$clear$lambda(this)();
};
protoOf(ConcurrentMutableCollection).j = function () {
  this.k5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableCollection$iterator$lambda(this)();
};
function ConcurrentMutableIterator$hasNext$lambda(this$0) {
  return function () {
    return this$0.m5l_1.k();
  };
}
function ConcurrentMutableIterator$next$lambda(this$0) {
  return function () {
    return this$0.m5l_1.l();
  };
}
function ConcurrentMutableIterator$remove$lambda(this$0) {
  return function () {
    this$0.m5l_1.b4();
    return Unit_instance;
  };
}
function ConcurrentMutableIterator(root, del) {
  this.l5l_1 = root;
  this.m5l_1 = del;
}
protoOf(ConcurrentMutableIterator).k = function () {
  this.l5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableIterator$hasNext$lambda(this)();
};
protoOf(ConcurrentMutableIterator).l = function () {
  this.l5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableIterator$next$lambda(this)();
};
protoOf(ConcurrentMutableIterator).b4 = function () {
  this.l5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  ConcurrentMutableIterator$remove$lambda(this)();
};
function ConcurrentMutableMap_init_$Init$($this) {
  // Inline function 'kotlin.collections.mutableMapOf' call
  var tmp$ret$0 = LinkedHashMap_init_$Create$();
  ConcurrentMutableMap.call($this, null, tmp$ret$0);
  return $this;
}
function ConcurrentMutableMap_init_$Create$() {
  return ConcurrentMutableMap_init_$Init$(objectCreate(protoOf(ConcurrentMutableMap)));
}
function ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this$0) {
  return function () {
    return this$0.n5l_1.m();
  };
}
function ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this$0) {
  return function () {
    return new ConcurrentMutableSet(this$0, this$0.n5l_1.r());
  };
}
function ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this$0) {
  return function () {
    return new ConcurrentMutableSet(this$0, this$0.n5l_1.f2());
  };
}
function ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this$0) {
  return function () {
    return new ConcurrentMutableCollection(this$0, this$0.n5l_1.g2());
  };
}
function ConcurrentMutableMap$containsKey$lambda(this$0, $key) {
  return function () {
    return this$0.n5l_1.c2($key);
  };
}
function ConcurrentMutableMap$get$lambda(this$0, $key) {
  return function () {
    return this$0.n5l_1.e2($key);
  };
}
function ConcurrentMutableMap$isEmpty$lambda(this$0) {
  return function () {
    return this$0.n5l_1.p();
  };
}
function ConcurrentMutableMap$clear$lambda(this$0) {
  return function () {
    this$0.n5l_1.y1();
    return Unit_instance;
  };
}
function ConcurrentMutableMap$put$lambda(this$0, $key, $value) {
  return function () {
    return this$0.n5l_1.h2($key, $value);
  };
}
function ConcurrentMutableMap$putAll$lambda(this$0, $from) {
  return function () {
    this$0.n5l_1.j2($from);
    return Unit_instance;
  };
}
function ConcurrentMutableMap$remove$lambda(this$0, $key) {
  return function () {
    return this$0.n5l_1.i2($key);
  };
}
function ConcurrentMutableMap(rootArg, del) {
  rootArg = rootArg === VOID ? null : rootArg;
  this.n5l_1 = del;
  var tmp = this;
  tmp.o5l_1 = rootArg == null ? this : rootArg;
}
protoOf(ConcurrentMutableMap).m = function () {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this)();
};
protoOf(ConcurrentMutableMap).r = function () {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this)();
};
protoOf(ConcurrentMutableMap).f2 = function () {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this)();
};
protoOf(ConcurrentMutableMap).g2 = function () {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this)();
};
protoOf(ConcurrentMutableMap).c2 = function (key) {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$containsKey$lambda(this, key)();
};
protoOf(ConcurrentMutableMap).e2 = function (key) {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$get$lambda(this, key)();
};
protoOf(ConcurrentMutableMap).p = function () {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$isEmpty$lambda(this)();
};
protoOf(ConcurrentMutableMap).y1 = function () {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  ConcurrentMutableMap$clear$lambda(this)();
};
protoOf(ConcurrentMutableMap).h2 = function (key, value) {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$put$lambda(this, key, value)();
};
protoOf(ConcurrentMutableMap).j2 = function (from) {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  ConcurrentMutableMap$putAll$lambda(this, from)();
};
protoOf(ConcurrentMutableMap).i2 = function (key) {
  this.o5l_1;
  // Inline function 'co.touchlab.stately.concurrency.synchronize' call
  return ConcurrentMutableMap$remove$lambda(this, key)();
};
function ConcurrentMutableSet_init_$Init$($this) {
  // Inline function 'kotlin.collections.mutableSetOf' call
  var tmp$ret$0 = LinkedHashSet_init_$Create$();
  ConcurrentMutableSet.call($this, null, tmp$ret$0);
  return $this;
}
function ConcurrentMutableSet_init_$Create$() {
  return ConcurrentMutableSet_init_$Init$(objectCreate(protoOf(ConcurrentMutableSet)));
}
function ConcurrentMutableSet(rootArg, del) {
  ConcurrentMutableCollection.call(this, rootArg, del);
  this.r5l_1 = del;
}
//region block: exports
export {
  ConcurrentMutableMap_init_$Create$ as ConcurrentMutableMap_init_$Create$2pukvvine294o,
};
//endregion

//# sourceMappingURL=Stately-stately-concurrent-collections.mjs.map
