/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


let configInfo = {

    path: 'user/:id',
    indexRoute: require("./abstract"),

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./info"));
        });
    }

};

module.exports = configInfo;