const userTheme = localStorage.getItem('theme')

if (userTheme === 'dark') {
	document.documentElement.classList.add('dark')
} else {
	document.documentElement.classList.remove('dark')
}

const toggle = document.getElementById('toggleMode')
toggle.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark')
})
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const sidebar = document.getElementById('sidebar')

menuBtn.addEventListener('click', () => {
	sidebar.classList.remove('translate-x-full')
})

closeBtn.addEventListener('click', () => {
	sidebar.classList.add('translate-x-full')
})
