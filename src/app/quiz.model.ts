// defines structure of application's model

export class Choice {
  constructor(public value?: string, public dropValues?: string[], public correct?: boolean) {}
}

export class Question {
  constructor(
    public label: string | HTMLElement,
    public choices?: Choice[],
    public metadata?: IMetadata,
    public options?: string[],
    public answers?: string[],
    public type?: string
  ) {}
}

// represents data to load
export class Quiz {
  constructor(
    public label: string,
    public name: string,
    public description: string,
    public fileName: string
  ) {}
}

// represents data app will collect each time user answers question
export class Answers {
  constructor(public values: Choice[] = []) {}
}

interface IMetadata {
  description: string | HTMLElement;
  reference: string;
}