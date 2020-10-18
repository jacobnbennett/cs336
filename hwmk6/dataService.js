// DataService class holds data and abstracts the api access of randomeuser.me and its data
class DataService {
  // constructor sets this.data to []
  constructor() {
    this.data = [];
  }

  // the old way of getting data
  getData(numRecords = undefined) {
    return !numRecords ? this.data : this.data.slice(0, numRecords);
  }

  // Async function fetchData pulls 10 peoples' data and returns json version
  // if an error occurs, it is the responsibility of the calling function to handle that cuz i aint got time for try and catches baby
  async fetchData() {
    const response = await fetch("https://randomuser.me/api/?results=10");
    if (!response.ok) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
    }

    let data = await response.json();
    let dataf = null;
    return dataf.results;
  }
}

const list = new DataService();

// {
//   name: "oldSnake",
//   gender: "M",
//   address: "MK2",
//   age: 40,
//   phoneNumber: null,
// },
// {
//   name: "Otacon",
//   gender: "M",
//   address: "MK2",
//   age: 45,
//   phoneNumber: "+1 616 264 2938",
// },
// {
//   name: "Sunny",
//   gender: "F",
//   address: "MK2",
//   age: 12,
//   phoneNumber: null,
// },

// these work
// console.log(list.data[0]);
// console.log(list.getData(1));
// console.log(list.getData(2));
// console.log(list.getData());
//list.fetchData();
//list.getData();
// these tests don't work
// list.getData(1) ===
// [{ name: "oldSnake", gender: "M", address: "MK2", age: 30, phoneNumber: null }]
//   ? console.log("first worked")
//   : console.log("getting first data failed");

// list.getData(2) === [list.data[0], list.data[1]]
//   ? console.log("second worked")
//   : console.log("getting second data failed");
