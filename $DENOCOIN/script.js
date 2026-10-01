  // ===== TOKENOMICS PIE CHART =====
    function initializePieChart() {
        const pieChart = document.getElementById('pieChart');
        if (!pieChart) return;
        
        const tokenomicsData = [
            { category: 'Liquidity Pool (Locked)', percentage: 80, color: '#4fc3f7' },
            { category: 'Marketing & Burns', percentage: 15, color: '#d4af37' },
            { category: 'Development (Locked 6mo)', percentage: 5, color: '#7b2cbf' }
        ];
        
        // Calculate conic gradient
        let accumulatedPercentage = 0;
        const conicGradientStops = tokenomicsData.map((item) => {
            const startPercentage = accumulatedPercentage;
            accumulatedPercentage += item.percentage;
            return `${item.color} ${startPercentage}% ${accumulatedPercentage}%`;
        }).join(', ');
        
        pieChart.style.background = `conic-gradient(${conicGradientStops})`;
    }
    
    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    function createIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Trigger specific animations based on section
                    if (entry.target.classList.contains('tokenomics-section')) {
                        initializePieChart();
                        animateProgressBars();
                    }
                    
                    if (entry.target.classList.contains('roadmap-section')) {
                        animateRoadmapItems();
                    }
                }
            });
        }, observerOptions);
        
        // Observe sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Observe feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            observer.observe(card);
        });
        
        // Observe step cards
        const stepCards = document.querySelectorAll('.step-card');
        stepCards.forEach(card => {
            observer.observe(card);
        });
    }
    
    // ===== PROGRESS BAR ANIMATIONS =====
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.distribution-progress');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const percentage = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = percentage;
                }, 100);
            }, index * 200);
        });
    }
    

       
    // ===== ROADMAP ANIMATIONS =====
    function animateRoadmapItems() {
        const roadmapItems = document.querySelectorAll('.roadmap-item');
        roadmapItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-in');
            }, index * 200);
        });
    }