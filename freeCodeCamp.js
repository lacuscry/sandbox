const titleCase = str => str.toLowerCase().replace(/(\s\w)|(^.)/g, x => x.toUpperCase());

titleCase("I'm a little tea pot");