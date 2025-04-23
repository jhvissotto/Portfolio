class ICounter {
    public:
        virtual ICounter& reset()     = 0;
        virtual ICounter& increment() = 0;
        virtual ICounter& decrement() = 0;
        virtual ICounter& add(int by) = 0;
        virtual ICounter& sub(int by) = 0;
        virtual ICounter& set(int by) = 0;
        virtual int get()       const = 0;
        virtual ~ICounter()           = default;  // Virtual destructor for cleanup
};


class Counter: public ICounter {
    private:
        int initial;  
        int value;

    public:
        Counter(int iniVal): 
            initial(iniVal), 
              value(iniVal) {}

        ICounter& reset()       override { value  = initial;  return *this;  }
        ICounter& increment()   override { value ++;          return *this;  }
        ICounter& decrement()   override { value --;          return *this;  }
        ICounter& add(int by)   override { value += by;       return *this;  }
        ICounter& sub(int by)   override { value -= by;       return *this;  }
        ICounter& set(int by)   override { value  = by;       return *this;  }
        int       get() const   override {                    return  value; }
};