public interface ICounter {
    int       Initial { get; }
    int       Value   { get; }
    ICounter  Reset();
    ICounter  Increment();
    ICounter  Decrement();
    ICounter  Add(int by);
    ICounter  Sub(int by);
    ICounter  Set(int by);
    int       Get();
}


public class Counter: ICounter {
    
    public int Initial { get; private set; }
    public int Value   { get; private set; }

    public Counter(int inival) { 
        Initial = inival; 
        Value   = inival; 
    }

    public ICounter  Reset()     { Value  = Initial;  return this;  }
    public ICounter  Increment() { Value ++;          return this;  }
    public ICounter  Decrement() { Value --;          return this;  }
    public ICounter  Add(int by) { Value += by;       return this;  }
    public ICounter  Sub(int by) { Value -= by;       return this;  }
    public ICounter  Set(int by) { Value  = by;       return this;  }
    public int       Get()       {                    return Value; }
}