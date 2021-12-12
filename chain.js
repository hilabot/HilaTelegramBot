const main = {
  text: `שלום! אני בוב,
המענה האוטומטי של תחום היל"ה
<b>הי</b>שתלמויות <b>ל</b>אורך <b>ה</b>שירות
תודה שבחרת להתכתב איתי בטלגרם. אני כאן לשירותיך.

לפני שנתחיל, השירות ניתן בכפוף להנחיות בטחון המידע, ולכן השיחה תתבצע בסיווג בלמ"ס בלבד <b>,ללא צילום מחשבים צבאיים או העברת מידע מסווג</b>.

<b>אז במה אוכל לעזור?</b>`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "מידע כללי על הקורסים שלנו",
            callback_data: "aboutCourses",
          },
        ],
        [
          {
            text: "מידע/עזרה על קורס שהינך רשום אליו",
            callback_data: "aboutMyCourse",
          },
        ],
        [
          {
            text: "מידע על מבחני כניסה",
            callback_data: "enterTestsInformation",
          },
        ],
        [{ text: "מידע על קורסי שלב", callback_data: "levelTestInformation" }],
        [{ text: 'מידע על סקו"פ', callback_data: "scoopInformation" }],
        [{ text: "שאלות נפוצות", callback_data: "commonQuestions" }],
        [{ text: "דרכי תקשורת ושעות פעילות", callback_data: "contactUs" }],
      ],
    }),
  },
};

// 1 - מידע כללי על הקורסים שלנו
const aboutCourses = {
  text: "מידע כללי על הקורסים שלנו – יש לבחור את האפשרות המתאימה עבורך:",
  opts: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "מה ההבדל בין קורס פרונטלי/רשתי/מקוון?",
            callback_data: "coursesType",
          },
        ],
        [
          {
            text: 'איזה קורסים יש למוקד היל"ה להציע?',
            callback_data: "whichCourses",
          },
        ],
        [{ text: 'לכמה שעות גמו"ש מוכר קורס?', callback_data: "gmush" }],
        [{ text: "איך נרשמים לקורס?", callback_data: "register" }],
        [
          {
            text: "חזרה לתפריט הראשי",
            callback_data: "main",
          },
        ],
      ],
    }),
  },
};

const coursesType = {
  text: `<b>מה ההבדל בין קורס פרונטלי/רשתי/מקוון?</b> \n \n<b>👩🏽‍🏫 קורס פרונטלי </b> קורס אשר מתקיים פיזית בבסמח אחת המכללות האזרחיות שאנו עובדים איתם. \n  \n <b>💻 קורס מקוון</b> קורס אשר יתקיים דרך הזום וביום האחרון לקורס המבחן המסכם יתקיים מרחוק. \n  \n <b>🌐 קורס רשתי </b> קורס אשר מתקיים על בסיס למידה עצמאית ברשת הצה"לית. ביום האחרון לקורס יתקיים מבחן מסכם אשר הנרשמים יצטרכו להגיע פיזית למדור שלנו.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "aboutCourses",
          },
        ],
      ],
    }),
  },
};

const whichCourses = {
  text: `למוקד היל"ה יש מגוון רחב של קורסים בתחום הסייבר, תכנות, תשתיות ומחשוב אישי. על מנת להיות מעודכנים בכלל הקורסים שלנו, יש לחפש ברשת האדומה 'מרש"ל', שם תוכלו להתעדכן במגוון הקורסים שלנו ובמחזורים מדוייקים של כל קורס.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "aboutCourses",
          },
        ],
      ],
    }),
  },
};

const gmush = {
  text: `שעות זכרות לגמו"ש משתנים בין קורס לקורס (ואף יש קורסים שלא מוכרים לגמו"ש כלל). על מנת להיות מעודכנים בכלל הקורסים שלנו, יש לחפש ברשת האדומה 'מרש"ל', שם תוכלו לראות כמה שעות גמו"ש מוכר קורס שמעניין אתכם.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "aboutCourses",
          },
        ],
      ],
    }),
  },
};

const register = {
  text: `על מנת להרשם לקורס יש לפנות אל רשם הקורסים של היחידה שלכם. איך יודעים מי רשם הקורסים שלי? יש לפנות אל שלישות היחידה שלכם שבדר"כ ידעו לתת לכם מענה בנושא`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "aboutCourses",
          },
        ],
      ],
    }),
  },
};

/////////////////////////////////////
// 2 - מידע על קורס שהינך רשום אליו
const aboutMyCourse = {
  text: "לאיזה קורס נרשמת?",
  opts: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "פרונטלי",
            callback_data: "frontalCourse",
          },
        ],
        [
          {
            text: "מקוון",
            callback_data: "hybridCourse",
          },
        ],
        [{ text: "רשתי", callback_data: "onlineCourse" }],
        [
          {
            text: "חזרה לתפריט הראשי",
            callback_data: "main",
          },
        ],
      ],
    }),
  },
};

// קורס פרונטלי
const frontalCourse = {
  text: `בחר נושא`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "מידע כללי (מיקום, צווי סיפוח, שעות)",
            callback_data: "frontalGeneralInformation",
          },
        ],
        [{ text: "ביטול רישום לקורס", callback_data: "cancelRegistration" }],
        [
          {
            text: "מידע על מבחן מסכם, ציונים ותעודות",
            callback_data: "gradesTestsInformation",
          },
        ],
        [
          {
            text: "אישורי כניסה לרכבים במהלך הקורס",
            callback_data: "carsInformation",
          },
        ],
        [
          {
            text: "חזרה",
            callback_data: "aboutMyCourse",
          },
        ],
      ],
    }),
  },
};

const carsInformation = {
  text: `אישור כניסה לרכב ינתן לדרגת סרן/רס"ר ומעלה בלבד.
  יש לשלוח מקסימום שלושה ימי עסקים לפני תחילת הקורס בקשה למייל הצה"לי שלנו – 6020 + Ctrl k עם הפרטים הבאים: תאריכי אישור הכניסה, שם מלא, מספר אישי, דרגה, מספר רכב, סוג רכב וצבע.
  `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "frontalCourse",
          },
        ],
      ],
    }),
  },
};

const frontalGeneralInformation = {
  text: `כשבוע לפני תחילת הקורס ישלח למייל הצה"לי של כל משתלם הוראת זימון מפורטת עם כלל הפרטים של מיקום, תאריכים, שעות וסימול צווי סיפוח + תפתח קבוצת וואטסאפ.
            צווי סיפוח – יש לשלוח צווי סיפוח במייל הצה"לי ל 6020 + Cntrl k עם הסימול אשר מופיע בהוראת הזימון או שהמשתלם יגיע עם צו הסיפוח מודפס ביום הראשון לקורס`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "gradesTestsInformation",
          },
        ],
      ],
    }),
  },
};

const testGradeInformation = {
  text: `ציון מבחן יוזן ב'קיוסק אישי' ברשת האדומה מקסימום שבועיים לאחר מועד הבחינה.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "gradesTestsInformation",
          },
        ],
      ],
    }),
  },
};

const objectTestGradeInformation = {
  text: `על מנת לערער על ציון יש לשלוח מייל ברשת האדומה ל 6020 + Ctrl k`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "gradesTestsInformation",
          },
        ],
      ],
    }),
  },
};

const gettingDiplomaInformation = {
  text: `לקבלת תעודת סיום קורס יש לשלוח לנו הודעה במייל הצה"לי - 6020 + Ctrl k עם הפרטים הבאים: שם מלא, מספר אישי, שם הקורס ודרגה. 
  במידה ואתם אכן זכאים תעודה, היא תשלח אליכם במייל הצה"לי
  `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "gradesTestsInformation",
          },
        ],
      ],
    }),
  },
};

const cancelRegistration = {
  text: `ביטול רישום לקורס יתבצע מול המוקד הטלפוני שלנו. יש לציין כי ביטול משתלם יתבצע מקסימום שבועיים לפני תחילת הקורס. אם לא, היחידה לא תזוכה תקציבית.  `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "aboutMyCourse",
          },
        ],
      ],
    }),
  },
};

const gradesTestsInformation = {
  text: `מידע על מבחן מסכם, ציונים ותעודות`,
  opts: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "מידע על מבחן מסכם",
            callback_data: "frontalGeneralInformation",
          },
        ],
        [
          {
            text: "איך ניתן לדעת את ציון המבחן?",
            callback_data: "testGradeInformation",
          },
        ],
        [
          {
            text: "ערעור על ציון מבחן",
            callback_data: "objectTestGradeInformation",
          },
        ],
        [
          {
            text: `קבלת תעודה מבסמ"ח/מהמכללה`,
            callback_data: "gettingDiplomaInformation",
          },
        ],
        [
          {
            text: "חזרה",
            callback_data: "aboutMyCourse",
          },
        ],
      ],
    }),
  },
};

// קורס מקוון
const hybridCourse = {
  text: `בחר נושא`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "מידע כללי (מיקום, צווי סיפוח, שעות)",
            callback_data: "hybridGeneralInformation",
          },
        ],
        [{ text: "ביטול רישום לקורס", callback_data: "cancelRegistration" }],
        [
          {
            text: "מידע על מבחן מסכם, ציונים ותעודות",
            callback_data: "gradesTestsInformation",
          },
        ],
        [
          {
            text: "חזרה",
            callback_data: "aboutMyCourse",
          },
        ],
      ],
    }),
  },
};

const hybridGeneralInformation = {
  text: `הקורס יתבצע ע"י הזום. כשבוע לפני תחילת הקורס תפתח קבוצת וואטסאפ עם הפרטים המלאים.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "hybridCourse",
          },
        ],
      ],
    }),
  },
};

// קורס רשתי
const onlineCourse = {
  text: `בחר נושא`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "מידע כללי (מיקום, צווי סיפוח, שעות)",
            callback_data: "onlineGeneralInformation",
          },
        ],
        [{ text: "ביטול רישום לקורס", callback_data: "cancelRegistration" }],
        [
          {
            text: "מידע על מבחן מסכם, ציונים ותעודות",
            callback_data: "gradesTestsInformation",
          },
        ],
        [
          {
            text: "חזרה",
            callback_data: "aboutMyCourse",
          },
        ],
      ],
    }),
  },
};

const onlineGeneralInformation = {
  text: `הקורס יתבצע בלמידה עצמאית מרחוק ע"י מערכת ה'קנבס' ברשת האדומה. ביום הפתיחה של הקורס ישלח אליכם למייל הצה"לי פרטים על מועד המבחן, מיקום והשעה בה תצטרכו להגיע`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "onlineCourse",
          },
        ],
      ],
    }),
  },
};

////////////////////
// 3 - מידע על מבחני כניסה
const enterTestsInformation = {
  text: `מידע על מבחני כניסה`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "?מתי צריך לעשות מבחן כניסה",
            callback_data: "whenEnterTest",
          },
        ],
        [
          {
            text: "?איפה מתבצע מבחן הכניסה",
            callback_data: "whereEnterTest",
          },
        ],
        [
          {
            text: "?איך נרשמים למבחן כניסה",
            callback_data: "regitserEnterTest",
          },
        ],
        [
          {
            text: "?איך אדע אם אני רשום למבחן כניסה",
            callback_data: "checkRegitserEnterTest",
          },
        ],
        [
          {
            text: "?לכמה זמן תקף מבחן כניסה",
            callback_data: "expireEnterTest",
          },
        ],
        [
          {
            text: "?איך מבטלים/דוחים רישום למבחן כניסה",
            callback_data: "cencelEnterTest",
          },
        ],
        [
          {
            text: "חזרה לתפריט הראשי",
            callback_data: "main",
          },
        ],
      ],
    }),
  },
};

const whenEnterTest = {
  text: `חלק מהקורסים שיש לנו להציע מחייבים מבחן כניסה לפני קליטה לקורס עצמו. על מנת לדעת אילו קורסים דורשים מבחן כניסה יש לחפש ברשת האדומה 'מרש"ל', ובכל קורס אשר תבחרו באתר יהיה כתוב בפרטיו האם דרוש מבחן כניסה או לא.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "enterTestsInformation",
          },
        ],
      ],
    }),
  },
};

const whereEnterTest = {
  text: `מבחן הכניסה יתבצע בשלישות רמת גן, בניין בסמ"ח, קומה 4 בכיתת אורן`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "enterTestsInformation",
          },
        ],
      ],
    }),
  },
};

const regitserEnterTest = {
  text: `.הרשמה למבחן כניסה מתבצעת דרך רשם הקורסים היחידתי באתר ה'מרש"ל'. מחפשים את הקורס אליו מעוניינים להבחן -> יורדים עד סוף הדף -> ניתן להתעדכן על תאריכי מבחני כניסה קרובים `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "enterTestsInformation",
          },
        ],
      ],
    }),
  },
};

const checkRegitserEnterTest = {
  text: `תוכלו לוודא זאת מול רשם הקורסים היחידתי או לשלוח אלינו מייל ברשת האדומה – 6020 + Ctrl k`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "enterTestsInformation",
          },
        ],
      ],
    }),
  },
};

const expireEnterTest = {
  text: `מבחן כניסה תקף לחצי שנה מיום מועד המבחן.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "enterTestsInformation",
          },
        ],
      ],
    }),
  },
};

const cencelEnterTest = {
  text: `על מנת לבטל/לדחות רישום למבחן כניסה יש לדבר עם רשם הקורסים של היחידה שלכם או לשלוח אלינו מייל ברשת האדומה– 6020 + Ctrl k`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "enterTestsInformation",
          },
        ],
      ],
    }),
  },
};

////////////////////////////////
// 4 - מידע על קורסי שלב
const levelTestInformation = {
  text: `מידע על קורסי שלב`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "?איך ניתן לדעת לאיזה קורס שלב אתם זכאים",
            callback_data: "allowedLevelTests",
          },
        ],
        [
          {
            text: "?לא הוזן לכם קורס שלב, מה עושים",
            callback_data: "noLevelTests",
          },
        ],
        [
          {
            text: "תהליך רישום לקורס שלב",
            callback_data: "registerLevelTests",
          },
        ],
        [
          {
            text: "מידע על תעודה לצורך שלב",
            callback_data: "diplomaLevelTests",
          },
        ],
        [
          {
            text: "חזרה לתפריט הראשי",
            callback_data: "main",
          },
        ],
      ],
    }),
  },
};

const allowedLevelTests = {
  text: `יש לפנות אל שלישות היחידה ולבקש נוהל 17 מעודכן, שם נמצא המידע לאיזה קורס שלב אתם זכאים  על סמך קורס היסוד שביצעתם.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "levelTestInformation",
          },
        ],
      ],
    }),
  },
};

const noLevelTests = {
  text: `יש לשלוח לנו מייל ברשת האדומה – 6020 + Ctrl k עם הפרטים הבאים: מספר אישי, מקצוע החייל, שלב להזנה ושם הקורס שבוצע`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "levelTestInformation",
          },
        ],
      ],
    }),
  },
};

const registerLevelTests = {
  text: `ראשית, יש לבחור קורס אחד מתוך רשימת הקורסים שמוכרים לשלב
  לאחר מכן הרישום יתבצע בשני מישורים במקביל:
  1.	כל חייל יכנס וימלא את פרטיו באחד מין הקישורים:
     לשלב 9 – https://tiny.cc/pro9
     לשלב 11 – https://tiny.cc/pro11
  2.	נכנסים לאתר ה'מרש"ל' ומחפשים בשורת החיפוש "שלבים"
  3.	בוחרים ב"שלבים 09/11 לתכניתנים". הרישום יתבצע ע"י רשם הקורסים היחידתי.
  במידה ולא קיים מחזור פתוח לרישום עבור המדרגה יש לפנות אלינו במייל האדום – 6020 + Ctrl k
  בתום תהליך הרישום וההסדרה התקציבית החייל יוכל לקבל את הקורס תוך פרק זמן של כשבועיים.
  `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "levelTestInformation",
          },
        ],
      ],
    }),
  },
};

const diplomaLevelTests = {
  text: `את התעודה שהתקבלה בסוף הקורס יש לשלוח אל scoopbasmach@gmail.com. 
  בכל מחזור אשר תרשמו יוגדר תאריך לסיום הקורס.
   לאחר תאריך הסיום <b> לא תינתן האפשרות להזנת השלב ועל החייל יהיה להירשם מחדש </b>.
  `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "levelTestInformation",
          },
        ],
      ],
    }),
  },
};
////////////////////////////////
// 5 - סקופ
const scoopInformation = {
  text: `מידע על סקו"פ`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "?מה זה",
            callback_data: "whatIsScoop",
          },
        ],
        [
          {
            text: "תהליך ההרשמה",
            callback_data: "registerScoop",
          },
        ],
        [
          {
            text: "חזרה לתפריט הראשי",
            callback_data: "main",
          },
        ],
      ],
    }),
  },
};

const whatIsScoop = {
  text: `סקו"פ – סביבת קורסים פתוחה, הינו פרוייקט המאפשר לרכוש קורסים מקצועיים באתרים אזרחיים כגון udemy.  `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "scoopInformation",
          },
        ],
      ],
    }),
  },
};

const registerScoop = {
  text: `1.	בוחרים קורס באתר הרצוי, לדוגמה udemy.
  2.	מבצעים רישום בשני מקומות במקביל: (שימו לב! חייב להירשם בשני המקומות על מנת שנוכל לרכוש עבורך את הקורס)
  1)	באתר ה'מרש"ל' – מחפשים בשורת החיפוש 'מדרגה' (מדרגת מחיר). הרישום יתבצע ע"י רשם הקורסים היחידתי לפי מדרגת המחיר המתאימה.
       לדוגמה: אם מחיר קורס הינו 30$, שזה בערך 100 ₪, רשם הקורסים ירשום את החייל למדרגת המחיר הקרובה ביותר שהיא 150 ₪.
       במידה ולא קיים מחזור פתוח לרישום עבור המדרגה הרצויה, יש לפנות אלינו במייל ברשת האדומה – 6020 + Ctrl k .
  2)	יש להרשם בקישור הבא: https://bit.ly/2nT5uCV 
  
  בתום תהליך הרישום וההסדרה התקציבית תוכלו לקבל את הקורס תוך פרק זמן של כשבועיים, ישירות לכתובת המייל האזרחית האישית שהזנתם בעת הרישום.
  יש למלא כתובת מייל נכונה וזמינה, אחרת הקורס לא יגיע ליעדו ולא תקבלו החזר כספי.
  `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "scoopInformation",
          },
        ],
      ],
    }),
  },
};

//////////////////////////////
// 6 - שאלות נפוצות
const commonQuestions = {
  text: `שאלות נפוצות`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: `?מה זה מרש"ל`,
            callback_data: "whatIsMarshal",
          },
        ],
        [
          {
            text: `?מה זה קנבס`,
            callback_data: "whatIsCanvas",
          },
        ],
        [
          {
            text: `?מתי תאושרו לקורס ומה התהליך`,
            callback_data: "approveCourse",
          },
        ],
        [
          {
            text: `?איך תדעו מי רשם הקורסים היחידתי שלכם`,
            callback_data: "coursesRasham",
          },
        ],
        [
          {
            text: `?מי זכאי לתעודת סיום קורס של בסמח/מכללה`,
            callback_data: "diplomaCourse",
          },
        ],
        [
          {
            text: "חזרה לתפריט הראשי",
            callback_data: "main",
          },
        ],
      ],
    }),
  },
};

const whatIsMarshal = {
  text: `מרש"ל – מערכת רישום לקורסים, היא המערכת דרכה מתנהל כל תהליך הרישום ומעקב אחר הקורסים. ניתן לצפות בכל המידע הרלוונטי עבור כל קורס – תאריכים, מיקום, סילבוס ועוד.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "commonQuestions",
          },
        ],
      ],
    }),
  },
};

const whatIsCanvas = {
  text: `קנבס היא מערכת ברשת האדומה המשמשת להעברת השתלמויות רשתיות. למידה רשתית בקנבס כוללת סרטונים נוחים למשתמש, תרגולים ובחלק מהפעמים גם סיכומים בכתב של פרקים.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "commonQuestions",
          },
        ],
      ],
    }),
  },
};

const approveCourse = {
  text: `השלבים המלאים על מנת להרשם ולהקלט בהצלחה לקורס:
  1.	רישום החייל לקורס הרצוי ע"י רשם הקורסים היחידתי
  2.	אישור החייל מבחינה תקציבית ע"י קצין התקציבים היחידתי
  3.	אישור סופי של תחום היל"ה

  *יש לציין כי חייל הנרשם לקורס יקלט סופית רק אם יש מקום פנוי
  *במידה והנכם מעוניינים לבטל רישום לקורס, יש להודיע על כך מקסימום שבועיים לפני תחילת הקורס על מנת שהיחידה תזוכה תקציבית.
  `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "commonQuestions",
          },
        ],
      ],
    }),
  },
};

const coursesRasham = {
  text: `יש לפנות אל שלישות היחידה שלכם. אם לא קיבלתם שם מענה תוכלו לפנות ליחידת המחשוב של בסמ"ח – 03-675-5348 `,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "commonQuestions",
          },
        ],
      ],
    }),
  },
};

const diplomaCourse = {
  text: `ביום האחרון של הקורס שלכם יתבצע מבחן מסכם על כל החומר הנלמד. אם קיבלתם 70 ומעלה אתם זכאים תעודה.
  *לבקשת תעודה יש לשלוח לנו מייל ברשת האדומה – 6020 + Ctrl k עם הפרטים הבאים: שם מלא, מספר אישי, דרגה והקורס אשר ביצעתם.`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה",
            callback_data: "commonQuestions",
          },
        ],
      ],
    }),
  },
};

/////////////////////////////
// 7 - יצירת קשר
const contactUs = {
  text: `* המוקד הטלפוני שלנו – 03-675-6020.  שעות פעילות בין הימים א'-ד': 8:30-12:00, 13:00-16:00. ביום ה': 8:30-12:00, 13:00-15:00
  
  * המייל הצה"לי שלנו – 6020 + Ctrl k. שעות פעילות בין הימים א'-ד': 8:30-17:30. ביום ה': 8:30-16:00`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "חזרה לתפריט הראשי",
            callback_data: "main",
          },
        ],
      ],
    }),
  },
};
////////////////////////////
const responsesMap = {
  main,
  aboutCourses,
  coursesType,
  whichCourses,
  gmush,
  register,
  aboutMyCourse,
  frontalCourse,
  frontalGeneralInformation,
  testGradeInformation,
  objectTestGradeInformation,
  gettingDiplomaInformation,
  cancelRegistration,
  gradesTestsInformation,
  hybridCourse,
  hybridGeneralInformation,
  onlineCourse,
  onlineGeneralInformation,
  carsInformation,
  enterTestsInformation,
  whenEnterTest,
  whereEnterTest,
  regitserEnterTest,
  checkRegitserEnterTest,
  expireEnterTest,
  cencelEnterTest,
  levelTestInformation,
  allowedLevelTests,
  noLevelTests,
  registerLevelTests,
  diplomaLevelTests,
  scoopInformation,
  whatIsScoop,
  registerScoop,
  commonQuestions,
  whatIsMarshal,
  whatIsCanvas,
  approveCourse,
  coursesRasham,
  diplomaCourse,
  contactUs,
};

module.exports = { responsesMap };
