// Only change code below this line
function urlSlug(title) {
    let str = title
      .toLowerCase()
      .split(' ')
      .filter(a => a)
      .map((a, i, arr) => i < arr.length - 1 ? `${a}-` : a)
      .join('');

    return str;
}
// Only change code above this line
urlSlug(" Winter Is  Coming")
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");