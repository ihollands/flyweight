interface Data {
  [index: string]: any;
}

interface ExtLink extends Data {
  href: string;
  text: string;
}

export type { Data, ExtLink };
