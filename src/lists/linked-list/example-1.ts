import {Node} from '.';

const nodeNext = new Node<number>(2);
const nodePrev = new Node<number>(3);

const node = new Node<number>(1, nodePrev, nodeNext);
console.log('ξ * ', node.toString());
