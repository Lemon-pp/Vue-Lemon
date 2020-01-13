const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '深入丽姐Java虚拟机',
        data: '2006-9',
        price: 85.00,
        count: 2,
      },
      {
        id: 2,
        name: '疯狂Java讲义',
        data: '2006-9',
        price: 185.00,
        count: 2,
      },
      {
        id: 3,
        name: 'Java讲义',
        data: '2006-9',
        price: 15.00,
        count: 2,
      },
      {
        id: 4,
        name: 'JavaEE讲义',
        data: '2006-9',
        price: 105.00,
        count: 2,
      }
    ],
  },
  computed: {
    getSum() {
      let result = 0;
      // for (let i = 0; i < this.books.length; i++){
      //   result += this.books[i].price * this.books[i].count;
      // }
      // for (let i in this.books) {
      //   result += this.books[i].price * this.books[i].count;
      // }
      // for (let book of this.books) {
      //   // console.log(book);
      //   result += book.price * book.count;
      //   }
      // return result;
      return this.books.reduce(function (pre, book) {
        return pre + book.price * book.count;
      }, 0)
    }
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      if (this.books[index].count > 1){
        this.books[index].count--
      }
    },
    removeClick(index) {
      this.books.splice(index, 1);
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})

const nums = [10, 20, 40, 80, 110, 330, 530];

let total = nums.filter(function (n) {
  return n <= 100;
}).map(function (n) {
  return n * 2;
}).reduce(function (previousValue, n) {
  return previousValue + n;
}, 0)
console.log(total);

//箭头函数
let total2 = nums.filter(n => n <= 100).map(n => n * 2).reduce((previousValue, n) => previousValue + n);
console.log(total2);

// let nums2 = [];
//讲小于100的数字添加到新数组
// for (let n of nums) {
//   if (n <= 100){
//     nums2.push(n);
//   }
// }
// console.log(nums2);

//js高级函数：
// 1.filter：参数为一个回调函数，必须返回Boolean值
//true: 函数内部会自动将回调的n加入到新数组
//false： 函数内部会过滤这次的n

let nums2 = nums.filter(function (n) {
  return n < 100;
})
console.log(nums2);

//将小于100的数字乘以2添加到新数组
// let nums3 = [];
// // for (let n of nums2){
// //   nums3.push(n * 2);
// // }
// console.log(nums3);

//2.map: 参数为回调函数，
let nums3 = nums2.map(function (n) {
  return n * 2 ;
})
console.log(nums3);

//将nums3的数字汇总
// let sum = 0;
// for (let n of nums3){
//   sum += n;
// }
// console.log(sum);

//3.reduce:参数为回调函数，回调函数中有两个值（previousValue， 当前的值 ）
//作用：对数组中所有的内容进行汇总
let sum = nums3.reduce(function (previousValue, n) {
  return previousValue + n ;
}, 0);
console.log(sum);

