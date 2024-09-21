'use strict';

function getElementWidth(content, padding, border) {
  const contentVal = Number.parseFloat(content);
  const paddingVal = Number.parseFloat(padding);
  const borderVal = Number.parseFloat(border);

  return contentVal + (paddingVal + borderVal) * 2;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
