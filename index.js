const arr = ["Milo", "Otis", "Garfield"],
  append = [...arr, "Odie"],
  prepend = ["Odie", ...arr],
  removeFirst = [...arr.slice(1)],
  removeLast = [...arr.slice(0, -1)];
