class Counter {
    int ini;
    int val;

    Counter(int ini) {
        this.ini = ini;
        this.val = ini;
    }

    Counter() {
        this(0);
    }

    Counter set(int _new)    { this.val  = _new;           return this;     }
    Counter reset()          { this.val  = this.ini;       return this;     }
    Counter increment()      { this.val ++ ;               return this;     }
    Counter decrement()      { this.val -- ;               return this;     }
    Counter add(int by)      { this.val += by;             return this;     }
    Counter sub(int by)      { this.val -= by;             return this;     }
    Counter mul(int by)      { this.val  = this.val * by;  return this;     }
    Counter div(int by)      { this.val  = this.val / by;  return this;     }
    int     get()            {                             return this.val; }
}


public class Chaining {
    public static void main(String[] args) {
        Counter counter = new Counter();
        int value = counter.add(100).sub(10).increment().decrement().get();
        System.out.println("value: " + value);
    }
}