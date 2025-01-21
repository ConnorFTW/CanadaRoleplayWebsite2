// Feature lists for each package
const packageFeatures = {
    lifetime: [
        "Special Discord Roles",
        "Military Roleplay Access",
        "LEO & Fire/EMS Interaction",
        "15% Off All Car Packs",
        "Drift Mode Access",
        "Vehicle Auto Pilot",
        "Night Vision & Thermal",
        "No Turbulence & Infinite Fuel",
        "vMenu Permissions",
        "Group6 Access",
        "Beta Tester Role",
        "Social Media Advertising",
        "Ultra Supporter Discord Role",
        "Hitman Roleplay",
        "Drive Boats Access"
    ],
    basic: [
        "Supporter Discord Role",
        "Military Roleplay Access",
        "Fire/LEO Interaction",
        "Drift Mode Access",
        "Vehicle Auto Pilot",
        "Night Vision & Thermal",
        "No Turbulence & Infinite Fuel",
        "Beta Tester Access",
        "Social Media Advertising",
        "Custom Tag In-Game",
        "Free Access to All Car Packs",
        "1x Custom CIV Vehicle",
        "10+ Supporter Vehicles",
        "Basic Business Location",
        "Employee Management",
        "Basic Inventory System",
        "Business Discord Role",
        "Simple Analytics",
        "Basic Marketing Tools",
        "Customer Database",
        "Standard Support",
        "Business Bank Account",
        "Basic Customization Options"
    ],
    ultra: [
        "All Basic Supporter Perks",
        "2x Custom CIV Vehicles",
        "20+ Supporter Vehicles",
        "Custom Chat Color",
        "Ultra Supporter Discord Role",
        "Priority Queue",
        "Hitman Roleplay",
        "Drive Boats Access",
        "Fly Airplanes Access"
    ],
    advanced: [
        "Premium Location Options",
        "Advanced Management Tools",
        "Custom Business Branding",
        "Extended Storage Access",
        "Advanced Analytics",
        "Priority Support",
        "Multiple Locations",
        "Custom Interiors",
        "Employee Benefits System",
        "Business Expansion Options"
    ],
    security: [
        "Security Personnel",
        "CCTV System",
        "Alarm Systems",
        "Secure Storage",
        "Access Control",
        "Security Protocols",
        "Guard Scheduling",
        "Emergency Response",
        "Asset Protection",
        "Security Reports"
    ]
};

// Package titles
const packageTitles = {
    lifetime: "Canada Lifetime ULTRA Supporter",
    basic: "Canada Basic Supporter",
    ultra: "Canada Ultra Supporter",
    basic: "Business Basic",
    advanced: "Business Advanced",
    security: "Business Security"
};

// Store item details
const itemDetails = {
    'ultra-lifetime': {
        title: 'Ultra Supporter (Lifetime)',
        description: 'Canada Roleplay is not, and will never be, a pay-to-win server. Our goal is to provide a fair and enjoyable experience for everyone. However, running a server of this scale comes with significant costs, and we greatly appreciate any support from our community.\n\nBy purchasing a supporter package, you're not only helping to keep the server running but also unlocking access to a variety of great perks, as listed below. Your contributions play a vital role in maintaining and enhancing the server, and we can't thank you enough for being part of this amazing journey!',
        features: [
            'Infinite Fuel',
            'Boats',
            'Priority Suggestions',
            'Allowed to do Security Roleplay',
            'Access to Motorcycles',
            'Access to use Drift Mode',
            'Ultra Supporter Role',
            'Access to Sport Vehicle Pack',
            'Access to Utility Vehicle Pack',
            'Maximum Speed Limit Change to 170kmph',
            'Access to Underglow',
            'Access to VStancer',
            'Airplanes out of AOP',
            'Access to do Security Roleplay',
            'Unlimited Ammunition',
            'Access to Auto Pilot Menu',
            'Access to Night Vision and Thermal Visible',
            'Access to All Vehicle Packs (while subscription is active)'
        ],
        price: '$69.99',
        link: 'https://canada-roleplay.mysellix.io/product/ultra-supporter-3-months-copy'
    },
    'ultra-3month': {
        title: 'Ultra Supporter (3 Months)',
        description: 'Canada Roleplay is not, and will never be, a pay-to-win server. Our goal is to provide a fair and enjoyable experience for everyone. However, running a server of this scale comes with significant costs, and we greatly appreciate any support from our community.\n\nBy purchasing a supporter package, you're not only helping to keep the server running but also unlocking access to a variety of great perks, as listed below. Your contributions play a vital role in maintaining and enhancing the server, and we can't thank you enough for being part of this amazing journey!',
        features: [
            'Infinite Fuel',
            'Boats',
            'Priority Suggestions',
            'Allowed to do Security Roleplay',
            'Access to Motorcycles',
            'Access to use Drift Mode',
            'Ultra Supporter Role',
            'Access to Sport Vehicle Pack',
            'Access to Utility Vehicle Pack',
            'Maximum Speed Limit Change to 170kmph',
            'Access to Underglow',
            'Access to VStancer',
            'Airplanes out of AOP',
            'Access to do Security Roleplay',
            'Unlimited Ammunition',
            'Access to Auto Pilot Menu',
            'Access to Night Vision and Thermal Visible',
            'Access to All Vehicle Packs (while subscription is active)'
        ],
        price: '$44.97',
        link: 'https://canada-roleplay.mysellix.io/product/ultra-support-3-months'
    },
    'ultra-monthly': {
        title: 'Ultra Supporter',
        description: 'Canada Roleplay is not, and will never be, a pay-to-win server. Our goal is to provide a fair and enjoyable experience for everyone. However, running a server of this scale comes with significant costs, and we greatly appreciate any support from our community.\n\nBy purchasing a supporter package, you're not only helping to keep the server running but also unlocking access to a variety of great perks, as listed below. Your contributions play a vital role in maintaining and enhancing the server, and we can't thank you enough for being part of this amazing journey!',
        features: [
            'Infinite Fuel',
            'Boats',
            'Priority Suggestions',
            'Allowed to do Security Roleplay',
            'Access to Motorcycles',
            'Access to use Drift Mode',
            'Ultra Supporter Role',
            'Access to Sport Vehicle Pack',
            'Access to Utility Vehicle Pack',
            'Maximum Speed Limit Change to 170kmph',
            'Access to Underglow',
            'Access to VStancer',
            'Airplanes out of AOP',
            'Access to do Security Roleplay',
            'Unlimited Ammunition',
            'Access to Auto Pilot Menu',
            'Access to Night Vision and Thermal Visible',
            'Access to All Vehicle Packs (while subscription is active)'
        ],
        price: '$19.99/month',
        link: 'https://canada-roleplay.mysellix.io/product/ultra-supporter'
    },
    'supporter-lifetime': {
        title: 'Supporter (Lifetime)',
        description: 'Canada Roleplay is not, and will never be, a pay-to-win server. Our goal is to provide a fair and enjoyable experience for everyone. However, running a server of this scale comes with significant costs, and we greatly appreciate any support from our community.',
        features: [
            'Infinite Fuel',
            'Boats',
            'Priority Suggestions',
            'Allowed to do Security Roleplay',
            'Access to Motorcycles',
            'Access to use Drift Mode',
            'Access to Sport Vehicle Pack',
            'Access to Utility Vehicle Pack',
            'Maximum Speed Limit Change to 170kmph',
            'Access to Underglow',
            'Access to VStancer',
            'All permissions are given automatically through Discord Roles'
        ],
        price: '$59.99',
        link: 'https://canada-roleplay.mysellix.io/product/supporter-3-months-copy'
    },
    'supporter-3month': {
        title: 'Supporter (3 Months)',
        description: 'Canada Roleplay is not, and will never be, a pay-to-win server. Our goal is to provide a fair and enjoyable experience for everyone. However, running a server of this scale comes with significant costs, and we greatly appreciate any support from our community.',
        features: [
            'Infinite Fuel',
            'Boats',
            'Priority Suggestions',
            'Allowed to do Security Roleplay',
            'Access to Motorcycles',
            'Access to use Drift Mode',
            'Access to Sport Vehicle Pack',
            'Access to Utility Vehicle Pack',
            'Maximum Speed Limit Change to 170kmph',
            'Access to Underglow',
            'Access to VStancer',
            'All permissions are given automatically through Discord Roles'
        ],
        price: '$44.97',
        link: 'https://canada-roleplay.mysellix.io/product/supporter-3-months'
    },
    'civ-personal': {
        title: 'Civ Personal',
        description: 'Canada Roleplay is dedicated to creating a unique and immersive experience for every player. While our server is free to enjoy, we offer the opportunity to enhance your gameplay with a custom civilian persona tailored to your preferences.',
        features: [
            'PLEASE OPEN A TICKET BEFORE PURCHASE',
            'Choose vehicles from gta5-mods.com/vehicles/',
            'Personalized details and backstory',
            'Custom character features'
        ],
        price: '$22.50',
        link: 'https://canada-roleplay.mysellix.io/product/civ-personal'
    },
    'civ-personal-3month': {
        title: 'Civ Personal (3 Months)',
        description: 'Canada Roleplay is dedicated to creating a unique and immersive experience for every player. While our server is free to enjoy, we offer the opportunity to enhance your gameplay with a custom civilian persona tailored to your preferences.',
        features: [
            'PLEASE OPEN A TICKET BEFORE PURCHASE',
            'Choose vehicles from gta5-mods.com/vehicles/',
            'Personalized details and backstory',
            'Custom character features'
        ],
        price: '$23.99',
        link: 'https://canada-roleplay.mysellix.io/product/civ-personal-3-months-678c987851ab2'
    },
    'leo-catalogue': {
        title: 'LEO Personal Catalogue',
        description: 'Canada Roleplay is proud to offer players the opportunity to customize their Law Enforcement Officer (LEO) experience. To purchase a custom LEO personal you must first achieve the rank of Constable Class 2.',
        features: [
            'Must be Constable Class 2 or higher',
            'Select from exclusive catalog options',
            'Personalize your LEO experience',
            'Enhanced roleplay features'
        ],
        price: '$24.99',
        link: 'https://canada-roleplay.mysellix.io/product/leo-personal-class-2-and-above-from'
    },
    'leo-custom': {
        title: 'LEO Personal Custom W/Livery',
        description: 'Canada Roleplay offers an exciting opportunity to take your Law Enforcement Officer (LEO) experience to the next level with a fully customized personal and a personalized vehicle livery.',
        features: [
            'Must be Constable Class 3 or higher',
            'Custom vehicle livery',
            'Personalized design options',
            'Ticket required for request',
            'Guided customization process'
        ],
        price: '$29.99',
        link: 'https://canada-roleplay.mysellix.io/product/leo-personal-custom-w-livery'
    },
    'custom-callsign': {
        title: 'Custom Callsign (1 Vehicle)',
        description: 'Canada Roleplay gives players the option to personalize their vehicles with a custom callsign of their choice, regardless of rank.',
        features: [
            'Choose your unique callsign',
            'Apply to vehicle of choice',
            'No rank requirements',
            'Support ticket assistance'
        ],
        price: '$9.99',
        link: 'https://canada-roleplay.mysellix.io/product/custom-callsign-on-1-vehicle'
    },
    'business-package': {
        title: 'Business Package',
        description: 'Canada Roleplay offers an exclusive Business Package for players looking to take ownership of their in-game business locations.',
        features: [
            'Custom door locks',
            'Full access control',
            'Support ticket assistance',
            'Enhanced business roleplay'
        ],
        price: '$34.99',
        link: 'https://canada-roleplay.mysellix.io/product/buisness-package'
    },
    'drift-pack': {
        title: 'Drift Pack',
        description: 'Canada Roleplay is excited to offer a premium car pack that grants you access to a stunning selection of vehicles! No roles or tickets are required—simply enjoy the freedom to explore and drive these amazing vehicles.',
        features: [
            'Instant access',
            'No roles required',
            'No tickets needed',
            'View photos: imgur.com/a/drift-pack-7Z9KfRp'
        ],
        price: '$8.99',
        link: 'https://canada-roleplay.mysellix.io/product/utility-vehicle-pack-5-vehicles-copy'
    },
    'classic-pack': {
        title: 'Classic Car Pack',
        description: 'Canada Roleplay is excited to offer a premium car pack that grants you access to a stunning selection of vehicles! No roles or tickets are required—simply enjoy the freedom to explore and drive these amazing vehicles.',
        features: [
            'Instant access',
            'No roles required',
            'No tickets needed',
            'View photos: imgur.com/a/classical-car-pack-gIycnx6'
        ],
        price: '$6.99',
        link: 'https://canada-roleplay.mysellix.io/product/supporter-car-pack-60-vehicles'
    },
    'fnf-pack': {
        title: 'Fast & Furious Pack',
        description: 'Canada Roleplay is excited to offer a premium car pack that grants you access to a stunning selection of vehicles! No roles or tickets are required—simply enjoy the freedom to explore and drive these amazing vehicles.',
        features: [
            'Instant access',
            'No roles required',
            'No tickets needed',
            'View photos: imgur.com/a/JtvcdQU'
        ],
        price: '$6.99',
        link: 'https://canada-roleplay.mysellix.io/product/classic-car-pack-11-vehicles-copy'
    },
    'utility-pack': {
        title: 'Utility Vehicle Pack',
        description: 'Canada Roleplay is excited to offer a premium car pack that grants you access to a stunning selection of vehicles! No roles or tickets are required—simply enjoy the freedom to explore and drive these amazing vehicles.',
        features: [
            'Instant access',
            'No roles required',
            'No tickets needed',
            'View photos: imgur.com/a/utility-pack-1apMpzD'
        ],
        price: '$6.99',
        link: 'https://canada-roleplay.mysellix.io/product/fast-furious-car-pack-10-vehicles-copy'
    }
};

// Feature popup function
function showFeatures(packageType) {
    const popup = document.getElementById('featurePopup');
    const title = document.getElementById('popupTitle');
    const featureList = document.getElementById('popupFeatures');
    
    title.textContent = packageTitles[packageType];
    featureList.innerHTML = packageFeatures[packageType]
        .map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`)
        .join('');
    
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Gallery functionality
function initializeGalleries() {
    const galleries = document.querySelectorAll('.department-gallery');
    
    galleries.forEach(gallery => {
        const track = gallery.querySelector('.gallery-track');
        const images = track.querySelectorAll('img');
        const dotsContainer = gallery.querySelector('.gallery-dots');
        
        // Set initial track width to accommodate all images
        track.style.width = `${images.length * 100}%`;
        
        // Set each image width to be proportional
        images.forEach(img => {
            img.style.width = `${100 / images.length}%`;
        });
        
        // Create dots for each image
        images.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.classList.add('gallery-dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });
        
        let currentIndex = 0;
        let slideInterval;
        
        function updateGallery() {
            // Update track position
            track.style.transform = `translateX(-${currentIndex * (100 / images.length)}%)`;
            
            // Update dots
            const dots = dotsContainer.querySelectorAll('.gallery-dot');
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateGallery();
            resetInterval(); // Reset the timer when manually changing slides
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery();
        }
        
        function startInterval() {
            slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        }
        
        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }
        
        // Initialize gallery
        updateGallery();
        startInterval();
        
        // Pause autoplay on hover
        gallery.addEventListener('mouseenter', () => clearInterval(slideInterval));
        gallery.addEventListener('mouseleave', startInterval);
    });
}

// Helper Functions
function filterItems(filter) {
    const items = document.querySelectorAll('.store-item');
    let firstVisibleItem = null;
    
    items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            if (!firstVisibleItem) firstVisibleItem = item;
        } else {
            item.style.display = 'none';
        }
    });

    if (firstVisibleItem) {
        scrollToElement(firstVisibleItem);
    }
}

function scrollToElement(element) {
    window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 100
    });
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Popup close functionality
    const popup = document.getElementById('featurePopup');
    const closeBtn = document.querySelector('.close-popup');

    if (closeBtn && popup) {
        closeBtn.onclick = () => {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        window.onclick = (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };
    }

    // Modal Elements
    const modal = document.getElementById('detailsModal');
    const modalCloseBtn = document.querySelector('.close-modal');

    // Modal Functions
    window.showDetails = function(itemId) {
        const item = itemDetails[itemId];
        if (!item) return;

        document.getElementById('modalTitle').textContent = item.title;
        document.getElementById('modalPrice').textContent = item.price;
        document.getElementById('modalDescription').textContent = item.description;
        document.getElementById('modalFeatures').innerHTML = `
            <h3>Features:</h3>
            <ul>
                ${item.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        document.getElementById('modalPurchaseBtn').href = item.link;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event Listeners
    if (modalCloseBtn) modalCloseBtn.onclick = closeModal;

    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            filterItems(filter);
        });
    });

    // Make store items clickable
    document.querySelectorAll('.store-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.view-details') && !e.target.closest('.purchase-btn')) {
                scrollToElement(item);
            }
        });
        item.setAttribute('tabindex', '0');
    });

    // Initialize galleries
    initializeGalleries();

    // Server status updates
    async function fetchServerStatus() {
        try {
            const response = await fetch('https://servers-frontend.fivem.net/api/servers/single/87mdv4');
            const data = await response.json();
            
            if (data && data.Data) {
                const playerCount = data.Data.clients;
                const maxPlayers = data.Data.sv_maxclients;
                
                const currentPlayersElement = document.getElementById('current-players');
                if (currentPlayersElement) {
                    currentPlayersElement.textContent = playerCount;
                    const playerCountElement = document.getElementById('player-count');
                    if (playerCountElement && maxPlayers) {
                        playerCountElement.innerHTML = `<i class="fas fa-users"></i><span id="current-players">${playerCount}</span>/${maxPlayers} Online`;
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching server status:', error);
        }
    }

    fetchServerStatus();
    setInterval(fetchServerStatus, 30000);
});

// Store navigation
document.querySelectorAll('.store-nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and sections
        document.querySelectorAll('.store-nav-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.store-section').forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked button and corresponding section
        button.classList.add('active');
        const category = button.dataset.category;
        document.getElementById(category).classList.add('active');
    });
});