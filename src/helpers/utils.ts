import classNames from 'classnames';

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const shuffleArray = (array: any[]): any[] => {
  const copy = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

const transitionVisible =
  ([defaultClass, hiddenClass, visibleClass]: [string, string, string]) =>
  (isVisible: boolean) =>
    classNames(defaultClass, isVisible ? visibleClass : hiddenClass);

const range = (start: number = 0, end: number): number[] => {
  const length = end - start;

  return [...Array.from({ length }, (x, i) => i + start)];
};

export { shuffleArray, getRandomInt, transitionVisible, range };
