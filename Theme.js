document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    if (themeToggle) {
        if (localStorage.getItem('theme') === 'dark') {
          htmlEl.classList.add('dark-mode');
          themeToggle.innerHTML = '☀︎';
        } else {
          themeToggle.innerHTML = '☾ ⋆';
        }

        themeToggle.addEventListener('click', () => {
            htmlEl.classList.toggle('dark-mode');

            if (htmlEl.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '☀︎';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '☾ ⋆';
            }
        });
    } else {
        if (localStorage.getItem('theme') === 'dark') {
          htmlEl.classList.add('dark-mode');
        }
    }
});
