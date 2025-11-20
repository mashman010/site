const header = document.querySelector('h1');
const body = document.body;
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('pages');

function updateHeaderText() {
    if (header) {
        const originalText = header.textContent;
        header.textContent = "🎵 Welcome to the White Album Experience! 🎵";
        
        setTimeout(() => {
            header.textContent = originalText;
        }, 3000);
    }
}

function changeBackgroundColor() {
    const colors = ['#f0f0f0', '#e8e8e8', '#ffffff', '#fafafa'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}

function applyDayOfWeekStyle() {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    const footer = document.querySelector('footer');
    
    const songsOfTheDay = [
        { title: "Back in the U.S.S.R.", url: "https://www.youtube.com/watch?v=yOYArc7mFiE&list=PLNACNZTj08nZPqLKjW-t5pyopLQn1FZ5q&index=1" },
        { title: "Dear Prudence", url: "https://www.youtube.com/watch?v=I4xw_Dx0pIg&list=PLNACNZTj08nZPqLKjW-t5pyopLQn1FZ5q&index=2" },
        { title: "While My Guitar Gently Weeps", url: "https://www.youtube.com/watch?v=YFDg-pgE0Hk&list=PLNACNZTj08nZPqLKjW-t5pyopLQn1FZ5q&index=7" },
        { title: "Blackbird", url: "https://www.youtube.com/watch?v=c5GCNDw4X_0&list=PLNACNZTj08nZPqLKjW-t5pyopLQn1FZ5q&index=11" },
        { title: "Helter Skelter", url: "https://www.youtube.com/watch?v=Uk1hCSA89fc&list=PLNACNZTj08nZPqLKjW-t5pyopLQn1FZ5q&index=23" },
        { title: "Mother Nature's Son", url: "https://www.youtube.com/watch?v=9Ta9FUOQ4oY&list=PLNACNZTj08nZPqLKjW-t5pyopLQn1FZ5q&index=20" },
        { title: "Good Night", url: "https://www.youtube.com/watch?v=FBxeM77LO7w&list=PLNACNZTj08nZPqLKjW-t5pyopLQn1FZ5q&index=30" }
    ];
    
    if (footer) {
        const todaysSong = songsOfTheDay[dayOfWeek];
        
        let songDisplay = footer.querySelector('.song-of-day');
        if (!songDisplay) {
            songDisplay = document.createElement('p');
            songDisplay.className = 'song-of-day';
            footer.insertBefore(songDisplay, footer.firstChild);
        }
        
        songDisplay.innerHTML = `🎵 Song of the Day: <a href="${todaysSong.url}" target="_blank">${todaysSong.title}</a>`;
        
        if (dayOfWeek === 0) {
            footer.style.backgroundColor = '#FFD700';
            footer.style.padding = '20px';
        } else if (dayOfWeek === 1) {
            footer.style.backgroundColor = '#87CEEB';
            footer.style.padding = '20px';
        } else if (dayOfWeek === 2) {
            footer.style.backgroundColor = '#90EE90';
            footer.style.padding = '20px';
        } else if (dayOfWeek === 3) {
            footer.style.backgroundColor = '#DDA0DD';
            footer.style.padding = '20px';
        } else if (dayOfWeek === 4) {
            footer.style.backgroundColor = '#FFB347';
            footer.style.padding = '20px';
        } else if (dayOfWeek === 5) {
            footer.style.backgroundColor = '#FFB6C1';
            footer.style.padding = '20px';
        } else {
            footer.style.backgroundColor = '#E6E6FA';
            footer.style.padding = '20px';
        }
    }
}

function toggleMobileNav() {
    if (navMenu) {
        navMenu.classList.toggle('show-nav');
    }
}

if (header) {
    header.addEventListener('click', updateHeaderText);
}

if (body) {
    body.addEventListener('dblclick', changeBackgroundColor);
}

if (navToggle) {
    navToggle.addEventListener('click', toggleMobileNav);
}

applyDayOfWeekStyle();