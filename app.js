const wrapper = document.querySelector('.sliderWrapper');
const menuItem = document.querySelectorAll('.menuItem');

menuItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log('You clicked me hahahaaa...');
    });
});
