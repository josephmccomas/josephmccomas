let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
    setTheme('light');
} else {
    setTheme(style);
}

for (let i of switches) {
    i.addEventListener('click', function () {
        let theme = this.dataset.theme;
        setTheme(theme);
    });
}

function setTheme(theme) {
    if (theme === 'light') {
        document.getElementById('switcher-id').href = './themes/light.css';
    } else if (theme === 'stars') {
        document.getElementById('switcher-id').href = './themes/stars.css';
    } else if (theme === 'dark') {
        document.getElementById('switcher-id').href = './themes/dark.css';
    }
    localStorage.setItem('style', theme);
}


// for (let i of switches) {
//     i.addEventListener('click', function () {
//         let theme = this.dataset.theme;
//         console.log(theme);
//     });
// }
//
// function setTheme(theme) {
//     if (theme === 'light') {
//         document.getElementById('switcher-id').href = './styles/light.css';
//     } else if (theme === 'stars') {
//         document.getElementById('switcher-id').href = './styles/stars.css';
//     } else if (theme === 'dark') {
//         document.getElementById('switcher-id').href = './styles/dark.css';
//     }
// }
//
// let style = localStorage.getItem('style');
//
// if (style == null) {
//     setTheme('light');
// } else {
//     setTheme(style);
// }
//
// localStorage.setItem('style', theme);
//
// let switches = document.getElementsByClassName('switch');
//
//
//
// // for (let i of switches) {
// //     i.addEventListener('click', function () {
// //         let theme = this.dataset.theme;
// //         console.log(theme);
// //         setTheme(theme);
// //     });
// // }
//
// // let style = localStorage.getItem('style');
// //
// // if (style == null) {
// //     setTheme('light');
// // } else {
// //     setTheme(style);
// // }
//
// // for (let i of switches) {
// //     i.addEventListener('click', function () {
// //         let theme = this.dataset.theme;
// //         setTheme(theme);
// //     });
// // }
//
// // function setTheme(theme) {
// //     if (theme === 'light') {
// //         document.getElementById('switcher-id').href = './themes/light.css';
// //     } else if (theme === 'stars') {
// //         document.getElementById('switcher-id').href = './themes/stars.css';
// //     } else if (theme === 'dark') {
// //         document.getElementById('switcher-id').href = './themes/dark.css';
// //     }
// //     localStorage.setItem('style', theme);
// // }