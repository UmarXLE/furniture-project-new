// export const scrollTo = (id) => {
//     const element = document.getElementById(id);
//     if (window.location.pathname === '/') {
//         window.scrollTo({
//             behavior: 'smooth',
//             top: element.offsetTop - 70,
//         });
//     } else {
//         window.location.href = `/#${id}`;
//     }
// };

export const scrollTo = (id) => {
    const element = document.querySelector(`#${id}`);
    window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 70,
    })
}


export const scrollToUp = () => {
    const scrollStep = -window.scrollY / (500 / 15); 
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep); 
        } else {
            clearInterval(scrollInterval); 
        }
    }, 15);
};