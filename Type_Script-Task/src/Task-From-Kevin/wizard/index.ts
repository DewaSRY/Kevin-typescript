// const pad: (ident: number) => string;

function dateWizard(date: Date, format: string) {
  var details = dateWizard.dateDetails(date);
  return format.replace(
    /{([^}]+)}/g,
    function (s, match: keyof typeof details) {
      return dateWizard.pad(details[match]);
    }
  );
}

dateWizard.pad = function (n: number) {
  let s = String(n);
  while (s.length < 2) {
    s = "0" + s;
  }
  return s;
};

dateWizard.dateDetails = function dateDetails(date: Date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

dateWizard.utcDateDetails = function getUTCDateDetails(date: Date) {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    date: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  };
};

export { dateWizard };
