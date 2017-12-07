var configValue = require('./config');

module.exports = {
    getDbConnectionString: function  (){
        return 'mongodb://' + configValue.uname + ':' + configValue.pwd + '@ds137090.mlab.com:37090/nodevinitodo';
    }
}

