import { AnyFunction } from '../../types/any-function.type';
import { isFunction } from '../object';

const OPEN_PARENTHESIS = '(';
const CLOSE_PARENTHESIS = ')';
const EQUAL = '=';
const COMMA = ',';
const SINGLE_QUOTE = "'";
const DOUBLE_QUOTE = '"';
const SPACE = ' ';
const ESCAPE = '\\';

const FUNCTION_REGEX = /^(?:function|)?[\s]*([\w]*)\(([\w\s\:\(\)\=\>,]*)\)[\s|\=\>]+[\s]*[\{]?[\w+ ]*[\}]?$/;

interface Parameter {
  name: string;
  required: boolean;
  value?: string;
}

export const FunctionUtils = {
  parseFunction<T>(fnString: AnyFunction<T> | string): { name: string; parameters: Parameter[] } {
    if (isFunction<T>(fnString)) {
      return FunctionUtils.parseFunction(fnString.toString());
    }

    const matches = fnString.replace('\n', '').match(FUNCTION_REGEX);
    if (!matches) {
      return { name: '', parameters: [] };
    }

    const [, name, fnParameters] = matches;
    let parenthesisCount = 0;
    let isInEqualStatement = false;
    let isInSingleQuote = false;
    let isInDoubleQuote = false;
    let isInEscape = false;
    let currentParameterName = '';
    let currentParameterValue = '';
    const parameters: Parameter[] = [];
    const addCurrentParameter = () => {
      let required = true;
      if (isInEqualStatement) {
        isInEqualStatement = false;
        required = false;
      }

      const parameter: Parameter = {
        name: currentParameterName,
        required,
      };

      if (currentParameterValue !== '') {
        parameter.value = currentParameterValue;
      }

      parameters.push(parameter);

      currentParameterName = '';
      currentParameterValue = '';
    };

    for (const character of fnParameters) {
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
      } else if (character === EQUAL) {
        isInEqualStatement = true;
      } else if (character === COMMA) {
        addCurrentParameter();
      } else if (character === SINGLE_QUOTE) {
        isInSingleQuote = true;
      } else if (character === DOUBLE_QUOTE) {
        isInDoubleQuote = true;
      } else if (character === SPACE) {
        // Just ignore
      } else if (isInEqualStatement) {
        currentParameterValue += character;
      } else {
        // Variable name
        currentParameterName += character;
      }
    }

    if (currentParameterName !== '') {
      addCurrentParameter();
    }

    return { name, parameters };
  },
};
