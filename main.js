import { LinkedList } from "./script.js";

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> null
console.log(list.size()); // 3
console.log(list.head().value); // 5
console.log(list.tail().value); // 20
console.log(list.at(1).value); // 10
console.log(list.contains(20)); // true
console.log(list.find(10)); // 1
list.insertAt(15, 2);
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null
list.removeAt(1);
console.log(list.toString()); // ( 5 ) -> ( 15 ) -> ( 20 ) -> null

