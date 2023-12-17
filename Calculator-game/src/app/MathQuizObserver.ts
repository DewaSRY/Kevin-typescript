export abstract class Observer {
  protected subject: MathQuizObserver = MathQuizObserver.getSubject();

  abstract update(): void;
}

export default class MathQuizObserver {
  private subjects: Observer[] = new Array<Observer>();
  public static init: MathQuizObserver | null = null;

  static getSubject() {
    if (MathQuizObserver.init === null) {
      MathQuizObserver.init = new MathQuizObserver();
    }
    return MathQuizObserver.init;
  }
  public subscribe(obj: Observer) {
    this.subjects.push(obj);
  }
  public getALlSubject() {
    return this.subjects;
  }
  public notify() {
    for (let s of this.subjects) {
      s.update();
    }
  }
}
