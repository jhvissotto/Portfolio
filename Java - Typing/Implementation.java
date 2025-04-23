interface ICounter {
    ICounter reset();
    ICounter increment();
    ICounter decrement();
    ICounter add(int by);
    ICounter sub(int by);
    ICounter set(int by);
    int      getValue();
}

class Counter implements ICounter {
    public int initial;
    public int value;

    public Counter(int initial) { 
        this.initial = initial; 
        this.value   = initial; 
   }

    @Override public ICounter reset()     { this.value  = this.initial; return this;       }
    @Override public ICounter increment() { this.value ++;              return this;       }
    @Override public ICounter decrement() { this.value --;              return this;       }
    @Override public ICounter add(int by) { this.value += by;           return this;       }
    @Override public ICounter sub(int by) { this.value -= by;           return this;       }
    @Override public ICounter set(int by) { this.value  = by;           return this;       }
    @Override public int      getValue()  {                             return this.value; }
}