Function.prototype.myBind = function(context, ...args) {
//     const that = this;
//     return function(...rest) {
//         return that.call(context, ...args.concat(rest));
//       }

       return (...rest) => {
           return this.call(context, ...args.concat(rest));
         }
};

function log(...props) {
    console.log(this.name, this.age, ...props);
};

const obj = {name: 'Roma', age: 42};

const bound = log.myBind(obj, 45, '34');
bound(24, 25);


