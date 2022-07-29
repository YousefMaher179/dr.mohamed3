
const translations = {
  en: {
    DrMohamed:"Dr Mohamed" ,
    AlKhayat:"Al Khayat",
    home: "HOME" ,
    AboutME: "About ME" ,
    OurServices: "Our Services" ,
    BookAppointment: "Book Appointment" ,
    CONTACTUS: "CONTACT US" ,
    English:"English" ,
    Arabic:"Arabic" ,
    par1: " Dr. Mohamed Al Khayat Consultant of bariatric surgeries and laproscopy" ,
    par2: "As DR. Mohamed Al Khayat believes that the basis for entertainment in life is enjoying good health," ,
    par3: "he decided to help those who suffer from obesity and its complications" ,
    par4: "to return their enjoyment once more without any health restrictions and troubles that accompany obesity." ,
    par5: "- PH.D in General surgery" ,
    par6: "- Consultant of Bariatric and Laparoscopic surgeries" ,
    par7: "- Fellow ship of Royal Surgeons College-England" ,
    par8: "- Member of European and Egyptian Association for Bariatric surgery" ,
    par9: "- Founder of Pour Toi center for cosmetic medical services." ,
    par10: "Gastric sleeve is made together with gastric bypass by connecting stomach exit with the intestine after passing a part of it. All this is done without separating the stomach exit and so, There will be two ways for passage of food:*30% of food passes in its normal pass way and so vitamins and minerals are normally absorbed.*70% of food passes in gastric bypass pass way and so a lot of food and sugars are not absorbed which results in weight loss and treatment of diabetes." ,
    SASIBYPASS:"SASI BYPASS" ,
    LAPROSCOPICGASTRICBYPASSSURGERY:"LAPROSCOPIC GASTRIC BYPASS SURGERY" ,
    LAPAROSCOPICGASTRICSLEEVESURGERY:"LAPAROSCOPIC GASTRIC SLEEVE SURGERY" ,
    REDOBARIATRICSURGERIES:"REDO BARIATRIC SURGERIES" ,
    BookAppointment:"Book Appointment" ,
    TimeOpen:"Time Open" ,
    MondeyFriday:"Mondey-Friday" ,
    am11am:"7am - 11am" ,
    am10pm:"1am - 10pm" ,
    SatardaySunday:"Satarday-Sunday" ,
    am1am:"9am - 1am" ,
    am10pm:"11am - 10pm" ,
    CallUs01007644622:"Call Us: (010) 07-64-4622" ,
    YourName:"Your Name" ,
    YourEmail:"Your E-mail" ,
    Date:"Date" ,
    Time:"Time" ,
    HowManyPeople:"How Many People" ,
    Person1:"1 Person" ,
    Person2:"2 Person" ,
    Person3:"3 Person" ,
    Person4:"4 Person" ,
    Person5:"5 Person" ,
    Person6:"6+ Person" ,
  },
  ar: {
    AlKhayat:"الخياط ",
    home: " الرئيسية" ,
    AboutME: "تعريف بسيط" ,
    OurServices: "خدماتنا" ,
    BookAppointment: "حجز موعد" ,
    CONTACTUS: "اتصل بنا" ,
    English:"إنجليزي" ,
    Arabic:"عربي" ,
    par1: "د.محمد الخياط استشاري جراحات السمنة والمناظير " ,
    par2: ".كما يعتقد د. محمد الخياط أن أساس الترفيه في الحياة هو التمتع بصحة جيدة" ,
    par3: "قرر مساعدة من يعانون من السمنة ومضاعفاتها" ,
    par4: "لاستعادة متعتهم مرة أخرى دون أي قيود ومشاكل صحية تصاحب السمنة." ,
    par5: "- دكتوراة الجراحة العامة" ,
    par6: "- استشاري جراحات السمنة و المناظير" ,
    par7: "- زميل كلية الجراحين الملكية بإنجلترا" ,
    par8: "- عضو الجمعية الأوروبية والمصرية لجراحة السمنة" ,
    par9: "- .مؤسس مركز بيور توي للخدمات الطبية التجميلية" ,
    par10: "يتم إجراء تكميم المعدة جنبًا إلى جنب مع تحويل مسار المعدة عن طريق ربط مخرج المعدة بالأمعاء بعد اجتياز جزء منها. كل هذا يتم دون فصل مخرج المعدة وهكذا سيكون هناك طريقتان لمرور الطعام: * 30٪ من الطعام يمر بطريقه الطبيعي وبذلك يتم امتصاص الفيتامينات والمعادن بشكل طبيعي. * 70٪ من الطعام يمر في المعدة مجازة الطريق وبالتالي لا يتم امتصاص الكثير من الأطعمة والسكريات مما يؤدي إلى فقدان الوزن وعلاج مرض السكري." ,
    SASIBYPASS:"الساسي - عملية التقسيم الثنائى" ,
    LAPROSCOPICGASTRICBYPASSSURGERY:"تحويل المسار بالمنظار" ,
    LAPAROSCOPICGASTRICSLEEVESURGERY:"عملية تكميم المعدة" ,
    REDOBARIATRICSURGERIES:"تصحيح جراحات السمنة" ,
    BookAppointment:"حجز موعد" ,
    TimeOpen:"موعد الفتح" ,
    MondeyFriday:"الإثنين - الجمعة" ,
    am11am:"7 صباحًا - 11 صباحًا" ,
    am10pm:"1 صباحًا - 10 مساءً" ,
    SatardaySunday:"السبت - الأحد" ,
    am1am:"9 صباحًا - 1 صباحًا" ,
    am10pm:"11 ص - 10 م" ,
    CallUs01007644622:"اتصل بنا: 4622-64-07 (010)" ,
    YourName:"اسمك" ,
    YourEmail:"بريدك الالكتروني" ,
    Date:"تاريخ" ,
    Time:"موعد" ,
    HowManyPeople:"كم عدد الاشخاص" ,
    Person1:"1 شخص" ,
    Person2:"2 شخص" ,
    Person3:"3 شخص" ,
    Person4:"4 شخص" ,
    Person5:"5 شخص" ,
    Person6:"6+ شخص" ,
  },
};
const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
};




