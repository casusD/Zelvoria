type LangType = "en" | "ru"; // Определяем возможные значения языка

interface IDetails {
  title: {
    company: string;
    vacancy: Record<LangType, string>; // Используем Record для правильной типизации
  };
  text: Record<LangType, string>;
  card: {
    requirements: {
      header: Record<LangType, string>;
      list: Record<LangType, string[]>;
    };
    responsibilities: {
      header: Record<LangType, string>;
      list: Record<LangType, string[]>;
    };
    offers: {
      header: Record<LangType, string>;
      list: Record<LangType, string[]>;
    };
  };
}

export const deatilsData: IDetails[] = [
  {
    title: {
      company: "Zeronto",
      vacancy: {
        en: "Programmer",
        ru: "Программист",
      },
    },
    text: {
      en: "Before applying for your chosen position, carefully review our requirements, the list of services provided, as well as the main responsibilities that this position entails. This will help you better understand whether you meet our expectations and whether this position is right for you. We strive to ensure that every employee is as competent and self-confident as possible in the workplace.",
      ru: "Прежде чем подавать заявку на выбранную вами вакансию, внимательно ознакомьтесь с нашими требованиями, перечнем предоставляемых услуг, а также основными обязанностями, которые предполагает эта должность. Это поможет вам лучше понять, соответствуете ли вы нашим ожиданиям и подходит ли вам эта должность. Мы стремимся к тому, чтобы каждый сотрудник был максимально компетентным и уверенным в себе на рабочем месте.",
    },
    card: {
      requirements: {
        header: {
          en: "Requirements",
          ru: "Требования",
        },
        list: {
          en: [
            "Gender doesn't matter",
            "Work experience of at least 3 years",
            "Knowledge of the Russian language",
            "Age does not matter",
            "Knowledge of php laravel",
            "Registration does not matter",
          ],
          ru: [
            "Пол не имеет значения",
            "Опыт работы от 3-х лет",
            "Знание русского языка",
            "Возраст не имеет значения",
            "Знания php laravel",
            "Прописка не имеет значение",
          ],
        },
      },
      responsibilities: {
        header: {
          en: "Responsibilities",
          ru: "Обязанности",
        },
        list: {
          en: [
            "Writing server code",
            "Working with databases",
            "Creating and maintaining APIs",
            "Testing and debugging",
            "Ensuring security",
          ],
          ru: [
            "Написание серверного кода",
            "Работа с базами данных",
            "Cоздание и поддержка API",
            "Тестирование и отладка",
            "Обеспечение безопасности",
          ],
        },
      },
      offers: {
        header: {
          en: "We offer",
          ru: "Мы предлагаем",
        },
        list: {
          en: [
            "Working hours from 9 to 18",
            "Meals",
            "Salary based on the results of the interview",
            "Students are being considered",
            "Location city center",
          ],
          ru: [
            "Режим работы с 9 до 18",
            "Питание",
            "З/плата по итогам собеседования",
            "Студенты рассматриваются",
            "Местоположение центр города",
          ],
        },
      },
    },
  },
  {
    title: {
      company: "Vexora",
      vacancy: {
        en: "Medical Assistant",
        ru: "Фельдшер",
      },
    },
    text: {
      en: "Before applying for your chosen position, carefully review our requirements, the list of services provided, as well as the main responsibilities that this position entails. This will help you better understand whether you meet our expectations and whether this position is right for you. We strive to ensure that every employee is as competent and self-confident as possible in the workplace.",
      ru: "Прежде чем подавать заявку на выбранную вами вакансию, внимательно ознакомьтесь с нашими требованиями, перечнем предоставляемых услуг, а также основными обязанностями, которые предполагает эта должность. Это поможет вам лучше понять, соответствуете ли вы нашим ожиданиям и подходит ли вам эта должность. Мы стремимся к тому, чтобы каждый сотрудник был максимально компетентным и уверенным в себе на рабочем месте.",
    },
    card: {
      requirements: {
        header: {
          en: "Requirements",
          ru: "Требования",
        },
        list: {
          en: [
            "Gender doesn't matter",
            "Work experience of at least 3 years",
            "Knowledge of the Russian language",
            "Age does not matter",
            "Knowledge of php laravel",
            "Registration does not matter",
          ],
          ru: [
            "Пол не имеет значения",
            "Опыт работы от 3-х лет",
            "Знание русского языка",
            "Возраст не имеет значения",
            "Знания php laravel",
            "Прописка не имеет значение",
          ],
        },
      },
      responsibilities: {
        header: {
          en: "Responsibilities",
          ru: "Обязанности",
        },
        list: {
          en: [
            "Writing server code",
            "Working with databases",
            "Creating and maintaining APIs",
            "Testing and debugging",
            "Ensuring security",
          ],
          ru: [
            "Написание серверного кода",
            "Работа с базами данных",
            "Cоздание и поддержка API",
            "Тестирование и отладка",
            "Обеспечение безопасности",
          ],
        },
      },
      offers: {
        header: {
          en: "We offer",
          ru: "Мы предлагаем",
        },
        list: {
          en: [
            "Working hours from 9 to 18",
            "Meals",
            "Salary based on the results of the interview",
            "Students are being considered",
            "Location city center",
          ],
          ru: [
            "Режим работы с 9 до 18",
            "Питание",
            "З/плата по итогам собеседования",
            "Студенты рассматриваются",
            "Местоположение центр города",
          ],
        },
      },
    },
  },
  {
    title: {
      company: "Lunexis",
      vacancy: {
        en: "Tourism specialist",
        ru: "Специалист по туризму",
      },
    },
    text: {
      en: "Before applying for your chosen position, carefully review our requirements, the list of services provided, as well as the main responsibilities that this position entails. This will help you better understand whether you meet our expectations and whether this position is right for you. We strive to ensure that every employee is as competent and self-confident as possible in the workplace.",
      ru: "Прежде чем подавать заявку на выбранную вами вакансию, внимательно ознакомьтесь с нашими требованиями, перечнем предоставляемых услуг, а также основными обязанностями, которые предполагает эта должность. Это поможет вам лучше понять, соответствуете ли вы нашим ожиданиям и подходит ли вам эта должность. Мы стремимся к тому, чтобы каждый сотрудник был максимально компетентным и уверенным в себе на рабочем месте.",
    },
    card: {
      requirements: {
        header: {
          en: "Requirements",
          ru: "Требования",
        },
        list: {
          en: [
            "Gender doesn't matter",
            "Work experience of at least 3 years",
            "Knowledge of the Russian language",
            "Age does not matter",
            "Knowledge of php laravel",
            "Registration does not matter",
          ],
          ru: [
            "Пол не имеет значения",
            "Опыт работы от 3-х лет",
            "Знание русского языка",
            "Возраст не имеет значения",
            "Знания php laravel",
            "Прописка не имеет значение",
          ],
        },
      },
      responsibilities: {
        header: {
          en: "Responsibilities",
          ru: "Обязанности",
        },
        list: {
          en: [
            "Writing server code",
            "Working with databases",
            "Creating and maintaining APIs",
            "Testing and debugging",
            "Ensuring security",
          ],
          ru: [
            "Написание серверного кода",
            "Работа с базами данных",
            "Cоздание и поддержка API",
            "Тестирование и отладка",
            "Обеспечение безопасности",
          ],
        },
      },
      offers: {
        header: {
          en: "We offer",
          ru: "Мы предлагаем",
        },
        list: {
          en: [
            "Working hours from 9 to 18",
            "Meals",
            "Salary based on the results of the interview",
            "Students are being considered",
            "Location city center",
          ],
          ru: [
            "Режим работы с 9 до 18",
            "Питание",
            "З/плата по итогам собеседования",
            "Студенты рассматриваются",
            "Местоположение центр города",
          ],
        },
      },
    },
  },
  {
    title: {
      company: "Brizora",
      vacancy: {
        en: "Nursing Assistant",
        ru: "Ассистент медсестры",
      },
    },
    text: {
      en: "Before applying for your chosen position, carefully review our requirements, the list of services provided, as well as the main responsibilities that this position entails. This will help you better understand whether you meet our expectations and whether this position is right for you. We strive to ensure that every employee is as competent and self-confident as possible in the workplace.",
      ru: "Прежде чем подавать заявку на выбранную вами вакансию, внимательно ознакомьтесь с нашими требованиями, перечнем предоставляемых услуг, а также основными обязанностями, которые предполагает эта должность. Это поможет вам лучше понять, соответствуете ли вы нашим ожиданиям и подходит ли вам эта должность. Мы стремимся к тому, чтобы каждый сотрудник был максимально компетентным и уверенным в себе на рабочем месте.",
    },
    card: {
      requirements: {
        header: {
          en: "Requirements",
          ru: "Требования",
        },
        list: {
          en: [
            "Gender doesn't matter",
            "Work experience of at least 3 years",
            "Knowledge of the Russian language",
            "Age does not matter",
            "Knowledge of php laravel",
            "Registration does not matter",
          ],
          ru: [
            "Пол не имеет значения",
            "Опыт работы от 3-х лет",
            "Знание русского языка",
            "Возраст не имеет значения",
            "Знания php laravel",
            "Прописка не имеет значение",
          ],
        },
      },
      responsibilities: {
        header: {
          en: "Responsibilities",
          ru: "Обязанности",
        },
        list: {
          en: [
            "Writing server code",
            "Working with databases",
            "Creating and maintaining APIs",
            "Testing and debugging",
            "Ensuring security",
          ],
          ru: [
            "Написание серверного кода",
            "Работа с базами данных",
            "Cоздание и поддержка API",
            "Тестирование и отладка",
            "Обеспечение безопасности",
          ],
        },
      },
      offers: {
        header: {
          en: "We offer",
          ru: "Мы предлагаем",
        },
        list: {
          en: [
            "Working hours from 9 to 18",
            "Meals",
            "Salary based on the results of the interview",
            "Students are being considered",
            "Location city center",
          ],
          ru: [
            "Режим работы с 9 до 18",
            "Питание",
            "З/плата по итогам собеседования",
            "Студенты рассматриваются",
            "Местоположение центр города",
          ],
        },
      },
    },
  },
  {
    title: {
      company: "Terniq",
      vacancy: {
        en: "Marketing Coordinator",
        ru: "Координатор по маркетингу",
      },
    },
    text: {
      en: "Before applying for your chosen position, carefully review our requirements, the list of services provided, as well as the main responsibilities that this position entails. This will help you better understand whether you meet our expectations and whether this position is right for you. We strive to ensure that every employee is as competent and self-confident as possible in the workplace.",
      ru: "Прежде чем подавать заявку на выбранную вами вакансию, внимательно ознакомьтесь с нашими требованиями, перечнем предоставляемых услуг, а также основными обязанностями, которые предполагает эта должность. Это поможет вам лучше понять, соответствуете ли вы нашим ожиданиям и подходит ли вам эта должность. Мы стремимся к тому, чтобы каждый сотрудник был максимально компетентным и уверенным в себе на рабочем месте.",
    },
    card: {
      requirements: {
        header: {
          en: "Requirements",
          ru: "Требования",
        },
        list: {
          en: [
            "Gender doesn't matter",
            "Work experience of at least 3 years",
            "Knowledge of the Russian language",
            "Age does not matter",
            "Knowledge of php laravel",
            "Registration does not matter",
          ],
          ru: [
            "Пол не имеет значения",
            "Опыт работы от 3-х лет",
            "Знание русского языка",
            "Возраст не имеет значения",
            "Знания php laravel",
            "Прописка не имеет значение",
          ],
        },
      },
      responsibilities: {
        header: {
          en: "Responsibilities",
          ru: "Обязанности",
        },
        list: {
          en: [
            "Writing server code",
            "Working with databases",
            "Creating and maintaining APIs",
            "Testing and debugging",
            "Ensuring security",
          ],
          ru: [
            "Написание серверного кода",
            "Работа с базами данных",
            "Cоздание и поддержка API",
            "Тестирование и отладка",
            "Обеспечение безопасности",
          ],
        },
      },
      offers: {
        header: {
          en: "We offer",
          ru: "Мы предлагаем",
        },
        list: {
          en: [
            "Working hours from 9 to 18",
            "Meals",
            "Salary based on the results of the interview",
            "Students are being considered",
            "Location city center",
          ],
          ru: [
            "Режим работы с 9 до 18",
            "Питание",
            "З/плата по итогам собеседования",
            "Студенты рассматриваются",
            "Местоположение центр города",
          ],
        },
      },
    },
  },
  {
    title: {
      company: "Sylox",
      vacancy: {
        en: "Programmer",
        ru: "Программист",
      },
    },
    text: {
      en: "Before applying for your chosen position, carefully review our requirements, the list of services provided, as well as the main responsibilities that this position entails. This will help you better understand whether you meet our expectations and whether this position is right for you. We strive to ensure that every employee is as competent and self-confident as possible in the workplace.",
      ru: "Прежде чем подавать заявку на выбранную вами вакансию, внимательно ознакомьтесь с нашими требованиями, перечнем предоставляемых услуг, а также основными обязанностями, которые предполагает эта должность. Это поможет вам лучше понять, соответствуете ли вы нашим ожиданиям и подходит ли вам эта должность. Мы стремимся к тому, чтобы каждый сотрудник был максимально компетентным и уверенным в себе на рабочем месте.",
    },
    card: {
      requirements: {
        header: {
          en: "Requirements",
          ru: "Требования",
        },
        list: {
          en: [
            "Gender doesn't matter",
            "Work experience of at least 3 years",
            "Knowledge of the Russian language",
            "Age does not matter",
            "Knowledge of php laravel",
            "Registration does not matter",
          ],
          ru: [
            "Пол не имеет значения",
            "Опыт работы от 3-х лет",
            "Знание русского языка",
            "Возраст не имеет значения",
            "Знания php laravel",
            "Прописка не имеет значение",
          ],
        },
      },
      responsibilities: {
        header: {
          en: "Responsibilities",
          ru: "Обязанности",
        },
        list: {
          en: [
            "Writing server code",
            "Working with databases",
            "Creating and maintaining APIs",
            "Testing and debugging",
            "Ensuring security",
          ],
          ru: [
            "Написание серверного кода",
            "Работа с базами данных",
            "Cоздание и поддержка API",
            "Тестирование и отладка",
            "Обеспечение безопасности",
          ],
        },
      },
      offers: {
        header: {
          en: "We offer",
          ru: "Мы предлагаем",
        },
        list: {
          en: [
            "Working hours from 9 to 18",
            "Meals",
            "Salary based on the results of the interview",
            "Students are being considered",
            "Location city center",
          ],
          ru: [
            "Режим работы с 9 до 18",
            "Питание",
            "З/плата по итогам собеседования",
            "Студенты рассматриваются",
            "Местоположение центр города",
          ],
        },
      },
    },
  },
  {
    title: {
      company: "Xelvora",
      vacancy: {
        en: "Sales Manager",
        ru: "Менеджер по продажам",
      },
    },
    text: {
      en: "Before applying for your chosen position, carefully review our requirements, the list of services provided, as well as the main responsibilities that this position entails. This will help you better understand whether you meet our expectations and whether this position is right for you. We strive to ensure that every employee is as competent and self-confident as possible in the workplace.",
      ru: "Прежде чем подавать заявку на выбранную вами вакансию, внимательно ознакомьтесь с нашими требованиями, перечнем предоставляемых услуг, а также основными обязанностями, которые предполагает эта должность. Это поможет вам лучше понять, соответствуете ли вы нашим ожиданиям и подходит ли вам эта должность. Мы стремимся к тому, чтобы каждый сотрудник был максимально компетентным и уверенным в себе на рабочем месте.",
    },
    card: {
      requirements: {
        header: {
          en: "Requirements",
          ru: "Требования",
        },
        list: {
          en: [
            "Gender doesn't matter",
            "Work experience of at least 3 years",
            "Knowledge of the Russian language",
            "Age does not matter",
            "Knowledge of php laravel",
            "Registration does not matter",
          ],
          ru: [
            "Пол не имеет значения",
            "Опыт работы от 3-х лет",
            "Знание русского языка",
            "Возраст не имеет значения",
            "Знания php laravel",
            "Прописка не имеет значение",
          ],
        },
      },
      responsibilities: {
        header: {
          en: "Responsibilities",
          ru: "Обязанности",
        },
        list: {
          en: [
            "Writing server code",
            "Working with databases",
            "Creating and maintaining APIs",
            "Testing and debugging",
            "Ensuring security",
          ],
          ru: [
            "Написание серверного кода",
            "Работа с базами данных",
            "Cоздание и поддержка API",
            "Тестирование и отладка",
            "Обеспечение безопасности",
          ],
        },
      },
      offers: {
        header: {
          en: "We offer",
          ru: "Мы предлагаем",
        },
        list: {
          en: [
            "Working hours from 9 to 18",
            "Meals",
            "Salary based on the results of the interview",
            "Students are being considered",
            "Location city center",
          ],
          ru: [
            "Режим работы с 9 до 18",
            "Питание",
            "З/плата по итогам собеседования",
            "Студенты рассматриваются",
            "Местоположение центр города",
          ],
        },
      },
    },
  },
  {
    title: {
      company: "Dravex",
      vacancy: {
        en: "Travel Manager",
        ru: "Менеджер по путешествиям",
      },
    },
    text: {
      en: "Before applying for your chosen position, carefully review our requirements, the list of services provided, as well as the main responsibilities that this position entails. This will help you better understand whether you meet our expectations and whether this position is right for you. We strive to ensure that every employee is as competent and self-confident as possible in the workplace.",
      ru: "Прежде чем подавать заявку на выбранную вами вакансию, внимательно ознакомьтесь с нашими требованиями, перечнем предоставляемых услуг, а также основными обязанностями, которые предполагает эта должность. Это поможет вам лучше понять, соответствуете ли вы нашим ожиданиям и подходит ли вам эта должность. Мы стремимся к тому, чтобы каждый сотрудник был максимально компетентным и уверенным в себе на рабочем месте.",
    },
    card: {
      requirements: {
        header: {
          en: "Requirements",
          ru: "Требования",
        },
        list: {
          en: [
            "Gender doesn't matter",
            "Work experience of at least 3 years",
            "Knowledge of the Russian language",
            "Age does not matter",
            "Knowledge of php laravel",
            "Registration does not matter",
          ],
          ru: [
            "Пол не имеет значения",
            "Опыт работы от 3-х лет",
            "Знание русского языка",
            "Возраст не имеет значения",
            "Знания php laravel",
            "Прописка не имеет значение",
          ],
        },
      },
      responsibilities: {
        header: {
          en: "Responsibilities",
          ru: "Обязанности",
        },
        list: {
          en: [
            "Writing server code",
            "Working with databases",
            "Creating and maintaining APIs",
            "Testing and debugging",
            "Ensuring security",
          ],
          ru: [
            "Написание серверного кода",
            "Работа с базами данных",
            "Cоздание и поддержка API",
            "Тестирование и отладка",
            "Обеспечение безопасности",
          ],
        },
      },
      offers: {
        header: {
          en: "We offer",
          ru: "Мы предлагаем",
        },
        list: {
          en: [
            "Working hours from 9 to 18",
            "Meals",
            "Salary based on the results of the interview",
            "Students are being considered",
            "Location city center",
          ],
          ru: [
            "Режим работы с 9 до 18",
            "Питание",
            "З/плата по итогам собеседования",
            "Студенты рассматриваются",
            "Местоположение центр города",
          ],
        },
      },
    },
  },
];
