const truncateString = (str, num) => str.slice(0, num) + `${str.length > num ? "..." : ""}`;

truncateString("A-tisket a-tasket A green and yellow basket", 8);