// Leadership data
const leadershipData = [
    {
        name: "Sarah Johnson",
        title: "Chief Executive Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-github", url: "#" }
        ]
    },
    {
        name: "Michael Chen",
        title: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-medium", url: "#" }
        ]
    },
    {
        name: "Priya Patel",
        title: "Chief Product Officer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
        socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    },
    {
        name: "David Kim",
        title: "Chief Marketing Officer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-youtube", url: "#" }
        ]
    },
    {
        name: "Emma Williams",
        title: "VP of Engineering",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-github", url: "#" },
            { icon: "fab fa-dev", url: "#" }
        ]
    },
    {
        name: "James Rodriguez",
        title: "VP of Design",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80",
        socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-behance", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    }
];

// Function to render leadership cards
function renderLeadershipBoard() {
    const board = document.getElementById('leadershipBoard');
    
    leadershipData.forEach(leader => {
        const card = document.createElement('div');
        card.className = 'leader-card';
        
        card.innerHTML = `
            <img src="${leader.image}" alt="${leader.name}" class="leader-image">
            <h2 class="leader-name">${leader.name}</h2>
            <p class="leader-title">${leader.title}</p>
            <div class="social-links">
                ${leader.socials.map(social => `
                    <a href="${social.url}" class="social-link" target="_blank" rel="noopener noreferrer">
                        <i class="${social.icon}"></i>
                    </a>
                `).join('')}
            </div>
        `;
        
        board.appendChild(card);
    });
}

// Initialize the board when the page loads
window.onload = renderLeadershipBoard;