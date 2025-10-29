export default function getText() {
    let education = {
        one: `Образовательная программа Skillbox, Frontend-разработчик, 2023`,
        two: `Учебный центр «Специалист» при МГТУ им.Н.Э.Баумана, курс HTML и CSS, Удостоверение о повышении квалификации, 2021`,
        three: `Учебный центр «Специалист» при МГТУ им.Н.Э.Баумана, курс JavaScript, Удостоверение о повышении квалификации, 2021`,
        four: `Учебный центр «Специалист» при МГТУ им.Н.Э.Баумана, курс Основы программирования и баз данных, Удостоверение о повышении квалификации, 2021`,
        five: `Московский государственный психолого-педагогический университет, Психология, 2013, Магистр`,
        six: `Московский государственный психолого-педагогический университет, Психология, 2009, Специалист`
    };

    let greeting = {
        one: `Добрый день!`,
        two: `Вы попали на сайт-визитку`,
        three: `Меня зовут Олеся Фигуровская, ниже представлена информация обо мне`
    };
    

    let stack = {
        one: `HTML5, CSS (flex, grid), Sass/Scss, БЭМ, кроссбраузерная и адаптивная верстка`,
        two: ` JavaScript`,
        three: `Vue2`,
        four: `Vue3`,
        five: `Vue2`,
        six: `Vuex`,
        seven: `Pinia`,
        eight: `Инструменты сборки и контроля версий: Gulp, Webpack, Vite, Git`,
        nine: `Работа с дизайном и прототипами в Figma`,
        ten: `Bootstrap, API`
    };

    let personalData = {
        one: `Меня зовут Олеся. Я родилась и живу в городе Москве. Училась также здесь. Работала много лет в сфере образования - и государственного и коммерческого. Несколько лет назад решила кардинально сменить сферу приложения своих усилий на более интересную, результативную и с возможностью менять что-то к лучшему. Так открыла для себя разработку. Прошла несколько курсов и далее учусь в основном по Интернет-учебникам и сайтам.`,
        two: `В настоящее время я - начинающий Frontend-разработчик с сильным желанием развиваться и применять современные технологии веб-разработки. Имею 12+ лет опыта в управлении и технической поддержке, что развило навыки работы в команде, ответственность и умение быстро обучаться. Готова к полной занятости без переездов и командировок.`,
        three: `Ключевые навыки:
        Frontend: HTML5, CSS3 (Flexbox, Grid), Sass/Scss, Less, JavaScript (ES6+), ООП, Vue2, Vue3, Vuex, Pinia, Bootstrap, Кроссбраузерная и адаптивная верстка
        Инструменты: Gulp, Webpack, Vite, Git, Figma
        Работа с API, GitHub, командная разработка`,
        four: ` Я обладаю высокой степенью самоорганизации, техническим складом ума и упорством — не останавливаюсь, пока не разберусь в задаче до конца. Быстро учусь, умею формулировать вопросы и находить нужную информацию. В настоящее время активно осваиваю Node.js и Express, чтобы расширить свои возможности как разработчика.`,
        five: `Буду рада возможности применить свои знания и развиваться в вашей команде, внося вклад в интересные проекты и совершенствуя профессиональные навыки.`
    };

    let projects = {
        one: {
            descr: ``,
            link: `https://ofigurovskaya.github.io/vue3-shop/#/`
        },
        two: {
            descr: ``,
            link: `https://ofigurovskaya.github.io/vue-app/index.html#/`
        },
        three: {
            descr: ``,
            link: `https://ofigurovskaya.github.io/project/`
        },
        four: {
            descr: ``,
            link: `https://ofigurovskaya.github.io/Lagoona/`
        },
        five: {
            descr: ``,
            link: `https://ofigurovskaya.github.io/Evklid/`
        },
        six: {
            descr: ``,
            link: `https://ofigurovskaya.github.io/checklist-vue/`
        },
        seven: {
            descr: ``,
            link: `https://ofigurovskaya.github.io/books/`
        },
        eight: {
            descr: ``,
            link: `https://ofigurovskaya.github.io/test07_25/#/`
        }
    };
    let contacts = {
phone: `+7 916 637 49 49`,
telegram: `@figurovskayaO`,
mail: `figurovskayaoo@gmail.com`,
git: `https://github.com/OFigurovskaya/`
    }

    return {
        education, greeting, stack, personalData, projects, contacts
    }

}
