const validators = require('./validation');
const userRepository = require('../database/repositories/user.repository');
const { CYCLE, RECURSION } = require('../constants/globalVar');

const createUser = async (body) => {
  const { value, error } = validators.validate(body, validators.userValidator);
  if (error) return { error };

  const { error: dbError } = await userRepository.createUser(
    value.email,
    value.name
  );

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: { created: 1 }, status: 201 } };
};

const getFactorial = async (query) => {
  const { value, error } = validators.validate(
    query,
    validators.numberValidator
  );

  if (error) return { error };
  switch (value.type) {
    case CYCLE: {
      let timeLoop = performance.now();
      const factorial = countFactorialCycle(value.number); // цикл
      timeLoop = performance.now() - timeLoop;
      return { result: { data: { timeLoop, factorial }, status: 201 } };
    }

    case RECURSION: {
      let timeLoop = performance.now();
      let factorial = countFactorialRecursion(value.number); // recursion
      timeLoop = performance.now() - timeLoop;
      return { result: { data: { timeLoop, factorial }, status: 201 } };
    }

    default: {
      return { error: { data: 'Algoritm type is not found!', status: 404 } };
    }
  }
};

function countFactorialCycle(num) {
  let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

function countFactorialRecursion(num) {
  return num != 1 ? num * countFactorialRecursion(num - 1) : 1;
}

module.exports = { createUser, getFactorial };
