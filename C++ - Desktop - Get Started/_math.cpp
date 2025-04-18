#include <iostream>
#include <armadillo>
#include <nlohmann/json.hpp>

using namespace std;
using json = nlohmann::json;


void describe() {
    arma::vec X = {10, 20, 30, 40, 50}; 
    
    json describe = {
        { "sum",     arma::sum(X)    },
        { "prod",    arma::prod(X)   },
        { "mean",    arma::mean(X)   },
        { "median",  arma::median(X) },
        { "stddev",  arma::stddev(X) },
        { "max",     arma::max(X)    },
        { "min",     arma::min(X)    }
    };

    cout << describe.dump(2) << endl;
}


void _math() {
    describe();
}