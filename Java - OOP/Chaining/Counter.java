package Chaining;

public class Counter {
    public int ini;
    public int val;

    public Counter(int ini) {
        this.ini = ini;
        this.val = ini;
    }

    public Counter() {
        this(0);
    }

    public Counter set(int _new)    { this.val  = _new;           return this;     }
    public Counter reset()          { this.val  = this.ini;       return this;     }
    public Counter increment()      { this.val ++ ;               return this;     }
    public Counter decrement()      { this.val -- ;               return this;     }
    public Counter add(int by)      { this.val += by;             return this;     }
    public Counter sub(int by)      { this.val -= by;             return this;     }
    public Counter mul(int by)      { this.val  = this.val * by;  return this;     }
    public Counter div(int by)      { this.val  = this.val / by;  return this;     }
    public int     get()            {                             return this.val; }
}