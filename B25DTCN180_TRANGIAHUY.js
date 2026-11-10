window.onload = function() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    alert('Hôm nay là ngày ' + day + '/' + month + '/' + year + ', Chào mừng bạn đến với trang của Trần Gia Huy!');

    document.getElementById('current-year').innerText = year;
};

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    document.getElementById('digital-clock').innerText = hours + ':' + minutes + ':' + seconds;
}

setInterval(updateClock, 1000);
updateClock();

let avatar = document.getElementById('avatar-img');
let modal = document.getElementById('image-modal');
let modalImg = document.getElementById('modal-img');
let closeBtn = document.getElementById('close-modal');

avatar.onclick = function() {
    modal.style.display = 'flex';
    modalImg.src = this.src;
};

closeBtn.onclick = function() {
    modal.style.display = 'none';
};

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};

let toggleBtn = document.getElementById('toggle-hobbies-btn');
let moreHobbies = document.getElementById('more-hobbies');

toggleBtn.onclick = function() {
    if (moreHobbies.classList.contains('hidden')) {
        moreHobbies.classList.remove('hidden');
        toggleBtn.innerText = 'Thu gọn';
    } else {
        moreHobbies.classList.add('hidden');
        toggleBtn.innerText = 'Xem thêm';
    }
};