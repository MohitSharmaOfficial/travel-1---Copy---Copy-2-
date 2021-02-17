const card_section = document.getElementById('card-section');
let isDown = false;
let startX ;
let scroll_Left ;
card_section.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX ;
    scroll_Left = card_section.scrollLeft;
});
card_section.addEventListener('mouseleave', () => {
    isDown = false;

});
card_section.addEventListener('mouseup', () => {
    isDown = false;

});
card_section.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = startX - x;
    card_section.scrollLeft = walk;
});
card_section.addEventListener('scroll',()=>{
    card_section.scrollLeft = walk;
});










// REVIEW SECTION
// var reviewdata = {
//     '0': {
//         src: './IMAGES/Profile-Image 1-1.jpg',
//         personname: 'Edward Smith',
//         place: 'From Canada',
//         para: "The hotel was simple amazing and I couldn't thank Blitz more for helping out. I've been a customer for awhile and I have to say it's probably my favourite site!"
//     },
//     '1': {
//         src: './IMAGES/Profile-Image 1-2.jpg',
//         personname: 'Amit Shukla',
//         place: 'From India',
//         para: "I tried lots of traveling sites and agencies but I don't think that I could have asked for a better stay than Klausturhof provided by BliTz . Thanks to BliTz."
//     },
//     '2': {
//         src: './IMAGES/Profile-Image 1-3.jpg',
//         personname: 'Joyce Mead',
//         place: 'From America',
//         para: "We booked Hotel Eucalyptus through BliTz after reading a handful of reviews, and it was easily the best decision we made for our trip to Santorini."
//     },
//     '3': {
//         src: './IMAGES/Profile-Image 1-4.jpg',
//         personname: 'Erato Smilga',
//         place: 'From Iceland',
//         para: "BliTz is just amazing, no need to worry about Hotels and Flight tickets anymore.Thanks to BliTz and I will keep on recommending BliTz to my friends."
//     },

// };

// var review_section_img = document.getElementById('review-section-img');
// var review_section_para = document.getElementById('review-section-para');
// var review_section_person_name = document.getElementById('review-section-person-name');
// var review_section_place = document.getElementById('review-section-place');

// var previous_review = document.getElementById('previous-review');
// var next_review = document.getElementById('next-review');

// var itemnumber = '0';

// next_review.addEventListener('click', function () {
//     if (itemnumber == '3') {
//         itemnumber = '0';
//     }
//     else { itemnumber++; }
//     showperson();
// });
// previous_review.addEventListener('click', function () {
//     if (itemnumber == '0') {
//         itemnumber = '3';
//     }
//     else { itemnumber--; }
//     showperson();
// });

// var showperson = function () {
//     review_section_person_name.textContent = reviewdata[itemnumber].personname;
//     review_section_place.textContent = reviewdata[itemnumber].place;
//     review_section_para.textContent = reviewdata[itemnumber].para;
//     review_section_img.src = reviewdata[itemnumber].src;
// };