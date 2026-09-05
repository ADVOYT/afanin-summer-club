/**
 * 🌟 منصة نادي أفانين الصيفي الرقمية 2026
 * ملف المؤثرات التفاعلية والجافا سكريبت الموحد (afanin_effects.js)
 */

document.addEventListener("DOMContentLoaded", function () {
    
    // 0️⃣ معالجة شاشة الترحيب (Splash Screen) وتحديد وقت العرض بـ 3 ثوانٍ
    const overlay = document.getElementById('splash-screen-overlay');
    if (overlay) {
        if (sessionStorage.getItem('afaninSplashShown')) {
            overlay.style.display = 'none';
        } else {
            overlay.style.transition = "opacity 0.7s ease-out, visibility 0.7s";
            setTimeout(function() {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    sessionStorage.setItem('afaninSplashShown', 'true');
                }, 700);
            }, 2500);
        }
    }

    // 1️⃣ تفاعل العداد في صفحة التوثيق
    const daysEl = document.getElementById("main_days");
    if (daysEl) {
        daysEl.innerText = "00";
        document.getElementById("main_hours").innerText = "00";
        document.getElementById("main_minutes").innerText = "00";
        document.getElementById("main_seconds").innerText = "00";
    }

    // 2️⃣ تأثير الظهور التدريجي الناعم عند التمرير لكروت البرنامج والجداول
    const luxuryCards = document.querySelectorAll(".luxury-card, .program-premium-card, .schedule-capsule-card");
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -10px 0px" };

    const cardObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    luxuryCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        cardObserver.observe(card);
    });
});