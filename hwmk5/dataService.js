class DataService {
  // static get data() {
  //   return [
  //     {
  //       name: "oldSnake",
  //       gender: "M",
  //       address: "MK2",
  //       age: 30,
  //       phoneNumber: null,
  //     },
  //     {
  //       name: "Otacon",
  //       gender: "M",
  //       address: "MK2",
  //       age: 30,
  //       phoneNumber: "+1 616 264 2938",
  //     },
  //     {
  //       name: "Sunny",
  //       gender: "F",
  //       address: "MK2",
  //       age: 12,
  //       phoneNumber: null,
  //     },
  //   ];
  // }

  constructor() {}

  getData(numRecords = undefined) {
    return !numRecords ? this.data : this.data.slice(0, numRecords);
  }
}

const list = new DataService();
list.data = [
  {
    name: "oldSnake",
    gender: "M",
    address: "MK2",
    age: 40,
    phoneNumber: null,
  },
  {
    name: "Otacon",
    gender: "M",
    address: "MK2",
    age: 45,
    phoneNumber: "+1 616 264 2938",
  },
  {
    name: "Sunny",
    gender: "F",
    address: "MK2",
    age: 12,
    phoneNumber: null,
  },
];

// these work
// console.log(list.data[0]);
// console.log(list.getData(1));
// console.log(list.getData(2));
console.log(list.getData());

// these tests don't work
// list.getData(1) ===
// [{ name: "oldSnake", gender: "M", address: "MK2", age: 30, phoneNumber: null }]
//   ? console.log("first worked")
//   : console.log("getting first data failed");

// list.getData(2) === [list.data[0], list.data[1]]
//   ? console.log("second worked")
//   : console.log("getting second data failed");
