const OPEN_PARENTHESIS = '(';
const CLOSE_PARENTHESIS = ')';
const EQUAL = '=';
const COMMA = ',';
const SINGLE_QUOTE = "'";
const DOUBLE_QUOTE = '"';
const ESCAPE = '\\';
export const functionParameterParser = (fn: (...args: any[]) => unknown) => {
  const getFnParameterString = (fnString: string) => {
    fnString = ~fnString.indexOf(`(`) ? fnString.slice(fnString.indexOf(`(`)) : fnString;
    fnString = (fnString.match(/(^[a-z_](?=(=>|=>{)))|((^\([^)].+\)|\(\))(?=(=>|{)))/i) || [fnString])[0];
    return !fnString.startsWith(`(`) ? `(${fnString})` : fnString;
  };

  const fnParameterString = getFnParameterString(fn.toString().replace(/\s+/g, ``));
  if (fnParameterString === '()') {
    return { all: [], required: [], optionals: [] };
  }

  let parenthesisCount = 0;
  let isInEqualStatement = false;
  let isInSingleQuote = false;
  let isInDoubleQuote = false;
  let isInEscape = false;
  let currentParameterName = '';
  let currentParameterValue = '';
  const parameters: { name: string; value: string; required: boolean }[] = [];
  const addCurrentParameter = () => {
    let required = true;
    if (isInEqualStatement) {
      isInEqualStatement = false;
      required = false;
    }

    const parameter: any = {
      name: currentParameterName,
      required
    };

    if (currentParameterValue !== '') {
      parameter.value = currentParameterValue;
    }

    parameters.push(parameter);

    currentParameterName = '';
    currentParameterValue = '';
  };

  for (const character of fnParameterString) {
    if (isInEscape) {
      isInEscape = false;
      if (isInEqualStatement) {
        currentParameterValue += `${ESCAPE}${character}`;
      }
      continue;
    }

    if (character === ESCAPE) {
      isInEscape = true;
      continue;
    }

    if (isInSingleQuote) {
      if (character === SINGLE_QUOTE) {
        isInSingleQuote = false;
      } else if (isInEqualStatement) {
        currentParameterValue += character;
      }

      continue;
    }

    if (isInDoubleQuote) {
      if (character === DOUBLE_QUOTE) {
        isInDoubleQuote = false;
      } else if (isInEqualStatement) {
        currentParameterValue += character;
      }

      continue;
    }

    if (character === OPEN_PARENTHESIS) {
      parenthesisCount++;
    } else if (character === CLOSE_PARENTHESIS) {
      parenthesisCount--;
      if (parenthesisCount === 0) {
        addCurrentParameter();
      }
    } else if (character === EQUAL) {
      isInEqualStatement = true;
    } else if (character === COMMA) {
      addCurrentParameter();
    } else if (character === SINGLE_QUOTE) {
      isInSingleQuote = true;
    } else if (character === DOUBLE_QUOTE) {
      isInDoubleQuote = true;
    } else if (isInEqualStatement) {
      currentParameterValue += character;
    } else {
      // Variable name
      currentParameterName += character;
    }
  }

  return {
    all: parameters,
    required: parameters.filter((parameter) => parameter.required),
    optionals: parameters.filter((parameter) => !parameter.required)
  };
};
