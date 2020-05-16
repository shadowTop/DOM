// const div = dom.create("<td>hi</td>");
// console.log(div);
// dom.after(test,div)
// const div3 = dom.create('<div>new</div>')
// // dom.wrap(div3,test)

// const nodes = dom.empty(empty)
// console.log(nodes)

// dom.attr(test,title,'我是title')
// const  title =dom.attr(test,title)
// console.log(title)
// dom.text(test, '你好这是新的内容')
// dom.style(style, {border :'1px solid red' ,color:'blue'})

const red0 = dom.find('.red')[0] // 获取对应的元素
dom.style(red0, 'color', '#fff') // 设置 div.style.color
console.log(dom.style(red0,'color')) 
const red1 = dom.find('.red')[1]

const red2 = dom.find('.red')[2]
console.log(dom.style(red2, 'background-color'))

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素