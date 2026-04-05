function initializeTailwind() {
    return {
        config(userConfig = {}) {
            return {
                content: [],
                theme: {
                    extend: {},
                },
                plugins: [],
                ...userConfig,
            }
        },
        theme: {
            extend: {},
        },
    }
}

// Initialize Tailwind
document.documentElement.setAttribute('data-tailwind-config', JSON.stringify(initializeTailwind()))

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu')
    const icon = document.getElementById('mobile-icon')
    menu.classList.toggle('hidden')
    
    if (!menu.classList.contains('hidden')) {
        icon.classList.replace('fa-bars', 'fa-xmark')
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars')
    }
}

// Dark/Light theme toggle (default dark)
// function toggleTheme() {
//     // Portfolio ini sudah full dark, jadi toggle hanya simulasi
//     const icon = document.getElementById('theme-icon')
//     if (icon.classList.contains('fa-moon')) {
//         icon.classList.replace('fa-moon', 'fa-sun')
//         // Bisa ditambahkan class light nanti jika ingin
//         console.log('%c🌞 Mode terang diaktifkan (demo)', 'color:#00d4ff; font-size:10px')
//     } else {
//         icon.classList.replace('fa-sun', 'fa-moon')
//     }
// }

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    
    updateThemeIcons();
}

function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const sun = document.getElementById('sun-icon');
    const moon = document.getElementById('moon-icon');
    
    if (sun && moon) {
        if (isDark) {
            sun.classList.add('hidden');
            moon.classList.remove('hidden');
        } else {
            sun.classList.remove('hidden');
            moon.classList.add('hidden');
        }
    }
}
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-icon');
    if (menu && icon) {
        menu.classList.toggle('hidden');
        if (!menu.classList.contains('hidden')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    }
}
// Filter projects by search
function filterProjects() {
    const input = document.getElementById('search-input').value.toLowerCase().trim()
    const cards = document.querySelectorAll('#project-grid > div')
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title')
        if (!input) {
            card.style.display = 'block'
        } else {
            card.style.display = title.includes(input) ? 'block' : 'none'
        }
    })
    
    // Jika tidak ada hasil
    const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none')
    if (visibleCards.length === 0 && input !== '') {
        const grid = document.getElementById('project-grid')
        if (!document.getElementById('no-result')) {
            const noResult = document.createElement('div')
            noResult.id = 'no-result'
            noResult.className = 'col-span-full text-center py-12 text-white/60'
            noResult.innerHTML = `
                <i class="fa-solid fa-magnifying-glass text-6xl mb-4 block"></i>
                <p>Tidak ada proyek yang cocok dengan "<span class="text-[#00d4ff]">${input}</span>"</p>
                <button onclick="resetSearch()" class="mt-6 text-xs px-6 py-3 border border-white/30 rounded-3xl">Reset Pencarian</button>
            `
            grid.appendChild(noResult)
        }
    } else {
        const noResult = document.getElementById('no-result')
        if (noResult) noResult.remove()
    }
}

function resetSearch() {
    document.getElementById('search-input').value = ''
    filterProjects()
}

// Keyboard shortcut hint
console.log('%c🎉 Portfolio siap! Tekan "/" untuk fokus ke pencarian proyek', 'background:#00d4ff;color:#000;font-size:10px;padding:1px 3px;border-radius:2px')

// Auto focus search when pressing "/"
document.addEventListener('keydown', function(e) {
    if (e.key === '/' && document.activeElement.tagName === "BODY") {
        e.preventDefault()
        document.getElementById('search-input').focus()
    }
})





































