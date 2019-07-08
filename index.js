function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
    for (let i=0; i < lis.length; i++) {
        lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    };

}
 function deepestChild() {
   let item = document.querySelector('#grand-node');
    while(item.childElementCount > 0) {
        item = item.children[0];
    }
    return item;
 }
