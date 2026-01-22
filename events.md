---
layout: page
title: Events - Bengaluru Streams
---

<section class="min-h-[60vh] bg-twilight flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 pt-20 pb-20">
    
    <!-- Background Image Slideshow -->
    <div class="absolute inset-0 pointer-events-none">
        <img src="/assets/images/vidhana-soudha-bangalore-karnataka-hero.jpeg" alt="Background"
            class="hero-bg-image w-full h-full object-cover opacity-70 active">
        <img src="/assets/images/avinash_upadhyaya.png" alt="Background"
            class="hero-bg-image w-full h-full object-cover opacity-70">
        <img src="/assets/images/presentation_1.png" alt="Background"
            class="hero-bg-image w-full h-full object-cover opacity-70">
        <img src="/assets/images/presentation_2.png" alt="Background"
            class="hero-bg-image w-full h-full object-cover opacity-70">
        <img src="/assets/images/presentation_3.png" alt="Background"
            class="hero-bg-image w-full h-full object-cover opacity-70">
        <div class="absolute inset-0 bg-gradient-to-b from-twilight via-twilight/80 to-french"></div>
    </div>

    <style>
        .hero-bg-image {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 2s ease-in-out;
        }

        .hero-bg-image.active {
            opacity: 0.7;
        }
    </style>

    <!-- Top Bar Navigation / Logo -->
    <div class="absolute top-8 left-8 md:top-12 md:left-12 z-20">
        <a href="/">
            <img src="/assets/images/bengaluru_streams.png" alt="Logo" class="h-12 md:h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity">
        </a>
    </div>

    <div class="absolute top-8 right-8 md:top-12 md:right-12 z-20 text-white">
        <!-- Top Right Marker -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="opacity-50 rotate-90">
            <path d="M0 24V0H24" stroke="currentColor" stroke-width="2" />
        </svg>
    </div>

    <!-- Main Content -->
    <div class="z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center space-y-4 md:space-y-6">
        <!-- Typography -->
        <h1 class="flex flex-col items-center justify-center font-black leading-[0.85] tracking-tighter text-white select-none">
            <span class="text-[10vw] md:text-[6rem] lg:text-[8rem] uppercase">All Events</span>
        </h1>

        <p class="text-white/80 font-semibold text-base md:text-lg uppercase tracking-wider max-w-2xl mx-auto">
            Explore our past and upcoming events on distributed systems, streaming, and real-time data
        </p>
    </div>

    <!-- Corner Markers (Bottom) -->
    <div class="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white/50 z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M0 0V24H24" stroke="currentColor" stroke-width="2" />
        </svg>
    </div>

    <div class="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-white/50 z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M24 0V24H0" stroke="currentColor" stroke-width="2" />
        </svg>
    </div>
</section>

<section class="bg-gradient-to-b from-french via-teal to-green py-12 md:py-16 px-4 md:px-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10">
            <h2 class="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
                All Events
            </h2>
            <div class="h-1 w-20 bg-aqua mx-auto rounded-full"></div>
        </div>

        {% assign current_date_ts = site.time | date: '%Y-%m-%d' | date: '%s' %}
        
        <h3 class="text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4">Upcoming Events</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {% assign sorted_upcoming = site.events | sort: "date" %}
            {% assign upcoming_found = false %}
            {% for event in sorted_upcoming %}
                {% assign event_ts = event.date | date: '%s' %}
                {% if event_ts >= current_date_ts %}
                    {% include event-card.html event=event vertical=true %}
                    {% assign upcoming_found = true %}
                {% endif %}
            {% endfor %}
            
            {% if upcoming_found == false %}
                <p class="text-white/70 italic">No upcoming events scheduled at the moment. Stay tuned!</p>
            {% endif %}
        </div>

        <h3 class="text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4">Past Events</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
            {% assign sorted_past = site.events | sort: "date" | reverse %}
            {% for event in sorted_past %}
                {% assign event_ts = event.date | date: '%s' %}
                {% if event_ts < current_date_ts %}
                    {% include event-card.html event=event vertical=true %}
                {% endif %}
            {% endfor %}
        </div>
    </div>
</section>

{% include footer-events.html %}
