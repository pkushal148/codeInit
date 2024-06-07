// Function to search for the characters of a digraph
// in the key square and return their position
function search(keyT, a, b, arr) {
  let i, j;

  if (a === "j") a = "i";
  else if (b === "j") b = "i";

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (keyT[i][j] === a) {
        arr[0] = i;
        arr[1] = j;
      } else if (keyT[i][j] === b) {
        arr[2] = i;
        arr[3] = j;
      }
    }
  }
  return arr;
}

// Function to find the modulus with 5

// Function for performing the encryption
function encrypt(str, keyT, ps) {
  let i;
  let a = new Array(4).fill(0);
  let newstr = new Array(ps);

  for (i = 0; i < ps; i += 2) {
    let brr = search(keyT, str[i], str[i + 1], a);
    let k1 = brr[0];
    let k2 = brr[1];
    let k3 = brr[2];
    let k4 = brr[3];
    if (k1 === k3) {
      newstr[i] = keyT[k1][(k2 + 1) % 5];
      newstr[i + 1] = keyT[k1][(k4 + 1) % 5];
    } else if (k2 === k4) {
      newstr[i] = keyT[(k1 + 1) % 5][k2];
      newstr[i + 1] = keyT[(k3 + 1) % 5][k2];
    } else {
      newstr[i] = keyT[k1][k4];
      newstr[i + 1] = keyT[k3][k2];
    }
  }
  let res = "";

  for (let i = 0; i < newstr.length; i++) {
    res += newstr[i];
  }
  return res;
}

// Function to encrypt using Playfair Cipher
function encryptByPlayfairCipher(str, key) {
  let ps;
  let keyT = new Array(5);

  for (let i = 0; i < 5; i++) {
    keyT[i] = new Array(5);
  }
  str = str.trim();
  key = key.trim();
  str = str.toLowerCase();

  key = key.toLowerCase();
  ps = str.length;

  //key grid
  const finalKey = Grid(key);
  const gridKey = GridKey(finalKey);
  const finalGrid = fillGrid(gridKey);

  //plain text processing
  const level1 = str.replaceAll("j", "i");
  let level2 = "";
  for (let i = 0; i < level1.length - 1; i++) {
    level2 += level1[i];
    if (level1[i] === level1[i + 1]) {
      level2 += "x";
    }
  }
  level2 += level1[level1.length - 1];
  const seen = new Set();
  seen.add("j");

  let level3 = level2;
  if (level2.length % 2 !== 0) {
    level3 += "z";
  }

  str = level3;
  ps = str.length;
  return encrypt(str, finalGrid, ps);
}

function decrypt(str, keyT, ps) {
  let i;
  let a = new Array(4).fill(0);
  let newstr = new Array(ps);

  for (i = 0; i < ps; i += 2) {
    let brr = search(keyT, str[i], str[i + 1], a);
    let k1 = brr[0];
    let k2 = brr[1];
    let k3 = brr[2];
    let k4 = brr[3];
    if (k1 === k3) {
      if (k2 === 0) {
        newstr[i] = keyT[k1][4 % 5];
      } else {
        newstr[i] = keyT[k1][(k2 - 1) % 5];
      }
      if (k4 === 0) {
        newstr[i] = keyT[k1][4 % 5];
      } else {
        newstr[i] = keyT[k1][(k4 - 1) % 5];
      }
    } else if (k2 === k4) {
      if (k1 === 0) {
        newstr[i] = keyT[4][k2];
      } else {
        newstr[i] = keyT[k1 - 1][k2];
      }
      if (k3 === 0) {
        newstr[i + 1] = keyT[4][k2];
      } else {
        newstr[i + 1] = keyT[k3 - 1][k2];
      }
    } else {
      newstr[i] = keyT[k1][k4];
      newstr[i + 1] = keyT[k3][k2];
    }
  }
  let res = "";

  for (let i = 0; i < newstr.length; i++) {
    res += newstr[i];
  }
  return res;
}

function decryptByPlayfairCipher(str, key) {
  let ps;
  let keyT = new Array(5);

  for (let i = 0; i < 5; i++) {
    keyT[i] = new Array(5);
  }
  str = str.trim();
  key = key.trim();
  str = str.toLowerCase();

  key = key.toLowerCase();
  ps = str.length;

  //key grid
  const finalKey = Grid(key);
  const gridKey = GridKey(finalKey);
  const finalGrid = fillGrid(gridKey);

  if (str.length % 2 !== 0) {
    str += "z";
  }

  ps = str.length;
  return decrypt(str, finalGrid, ps);
}

function getRulesd(str, keyT, ps) {
  let i;
  let a = new Array(4).fill(0);
  let newstr = new Array(ps);

  let rule = [];

  for (i = 0; i < ps; i += 2) {
    let brr = search(keyT, str[i], str[i + 1], a);
    let k1 = brr[0];
    let k2 = brr[1];
    let k3 = brr[2];
    let k4 = brr[3];
    if (k1 === k3) {
      if (k2 === 0) {
        newstr[i] = keyT[k1][4 % 5];
      } else {
        newstr[i] = keyT[k1][(k2 - 1) % 5];
      }
      if (k4 === 0) {
        newstr[i] = keyT[k1][4 % 5];
      } else {
        newstr[i] = keyT[k1][(k4 - 1) % 5];
      }
      rule.push(1);
    } else if (k2 === k4) {
      if (k1 === 0) {
        newstr[i] = keyT[4][k2];
      } else {
        newstr[i] = keyT[k1 - 1][k2];
      }
      if (k3 === 0) {
        newstr[i + 1] = keyT[4][k2];
      } else {
        newstr[i + 1] = keyT[k3 - 1][k2];
      }
      rule.push(2);
    } else {
      newstr[i] = keyT[k1][k4];
      newstr[i + 1] = keyT[k3][k2];
      rule.push(3);
    }
  }
  console.log(rule);
  return rule;
}

function getRules(str, keyT, ps) {
  let i;
  let a = new Array(4).fill(0);
  let newstr = new Array(ps);
  let rule = [];
  str = getPlainText(str);
  ps = str.length;

  for (i = 0; i < ps; i += 2) {
    let brr = search(keyT, str[i], str[i + 1], a);
    let k1 = brr[0];
    let k2 = brr[1];
    let k3 = brr[2];
    let k4 = brr[3];
    if (k1 === k3) {
      newstr[i] = keyT[k1][(k2 + 1) % 5];
      newstr[i + 1] = keyT[k1][(k4 + 1) % 5];
      rule.push(2);
    } else if (k2 === k4) {
      newstr[i] = keyT[(k1 + 1) % 5][k2];
      newstr[i + 1] = keyT[(k3 + 1) % 5][k2];
      rule.push(1);
    } else {
      newstr[i] = keyT[k1][k4];
      newstr[i + 1] = keyT[k3][k2];
      rule.push(3);
    }
  }

  return rule;
}

function Duplicate(Key) {
  if (!Key) {
    return { final_key: null, duplicates: null };
  }

  const seen = new Set();
  const duplicates = new Set();
  let finalKey = "";
  for (let i = 0; i < Key.length; i++) {
    if (seen.has(Key[i])) {
      duplicates.add(i);
    } else {
      seen.add(Key[i]);
      finalKey += Key[i];
    }
  }
  // console.log(finalKey);

  return { finalKey, duplicates };
}

function Grid(Key) {
  if (!Key) {
    return null;
  }
  const { finalKey } = Duplicate(Key);
  return finalKey.replace("j", "");
}

function GridKey(Key) {
  if (!Key) {
    return null;
  }
  const gridKey = new Array(5).fill(null).map(() => new Array(5).fill(""));
  let k = 0;
  let n = Key.length;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (k < n) {
        gridKey[i][j] = Key[k];
        k++;
      } else {
        gridKey[i][j] = " ";
      }
    }
  }
  return gridKey;
}

function fillGrid(gridKey) {
  if (!gridKey) {
    return null;
  }
  const seen = new Set();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (gridKey[i][j] === " ") {
        break;
      }
      seen.add(gridKey[i][j]);
    }
  }

  let miss = "";
  for (let i = 97; i <= 122; i++) {
    let c = String.fromCharCode(i);
    if (seen.has(c) || c === "j") {
      continue;
    } else {
      miss += String.fromCharCode(i);
    }
  }

  let k = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (gridKey[i][j] === " ") {
        gridKey[i][j] = miss[k];
        k++;
      }
    }
  }
  return gridKey;
}

function getDigraphs(text) {
  const Text = [];
  let i = 0;
  while (i < text.length) {
    let temp = text[i] + text[i + 1];
    Text.push(temp);
    i = i + 2;
  }
  return Text;
}

function getPlainText(text) {
  const level1 = text.replaceAll("j", "i");
  let level2 = "";
  for (let i = 0; i < level1.length - 1; i++) {
    level2 += level1[i];
    if (level1[i] === level1[i + 1]) {
      level2 += "x";
    }
  }
  level2 += level1[level1.length - 1];
  const seen = new Set();
  seen.add("j");

  let level3 = level2;
  if (level2.length % 2 !== 0) {
    level3 += "z";
  }
  return level3;
}

function getCipherText(text) {
  if (text.length % 2 !== 0) {
    text += "z";
  }
  return text;
}

export {
  encryptByPlayfairCipher,
  Duplicate,
  Grid,
  GridKey,
  fillGrid,
  getDigraphs,
  getPlainText,
  getRules,
  decryptByPlayfairCipher,
  getRulesd,
  getCipherText,
};
