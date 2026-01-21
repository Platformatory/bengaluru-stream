---
layout: page
title: Events - Bengaluru Streams
---

<section class="bg-gradient-to-b from-teal to-green py-12 md:py-16 px-4 md:px-8">
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
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

{% include footer.html %}
