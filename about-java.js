
 function createParticles() {
      const container = document.getElementById('particles');
      const count = 22; // Slightly reduced for performance
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 1;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 12 + 8) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.opacity = Math.random() * 0.5 + 0.2;
        fragment.appendChild(p);
      }
      container.appendChild(fragment);
    }

    // ===== 2. ⚡ FAST SMOOTH SCROLL (400–500ms, custom easing) =====
    /**
     * Fast custom smooth scroll using requestAnimationFrame.
     * Duration: ~450ms (responsive & premium feel).
     * Avoids slow native smooth-scroll on some browsers.
     */
    function fastScrollTo(targetY, duration = 450) {
      const startY = window.pageYOffset;
      const diff = targetY - startY;
      let startTime = null;

      // Ease-out cubic — fast start, smooth finish
      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        window.scrollTo(0, startY + diff * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    function smoothScrollToDashboard() {
      const dashboard = document.getElementById('dashboard');
      const targetY = dashboard.getBoundingClientRect().top + window.pageYOffset - 20;
      fastScrollTo(targetY, 450); // ⚡ 450ms — fast & responsive
    }

    // ===== 3. ANIMATED COUNTERS (1.5s) =====
    function animateCounters() {
      const counters = [
        { el: document.getElementById('counter1'), target: 12345 },
        { el: document.getElementById('counter2'), target: 245 },
        { el: document.getElementById('counter3'), target: 50 }
      ];

      const duration = 1500; // Per spec: ~1.5s
      const startTime = performance.now();

      function updateCounters(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

        counters.forEach(c => {
          c.el.textContent = Math.floor(eased * c.target).toLocaleString();
        });

        if (progress < 1) {
          requestAnimationFrame(updateCounters);
        } else {
          counters.forEach(c => c.el.textContent = c.target.toLocaleString());
        }
      }

      requestAnimationFrame(updateCounters);
    }

    // ===== 4. CHART DATA & UPDATE (fast 450ms transitions) =====
    const chartData = {
      thisYear: {
        path: 'M0,85 Q30,70 60,75 T120,55 T180,60 T240,35 T300,45',
        area: 'M0,85 Q30,70 60,75 T120,55 T180,60 T240,35 T300,45 L300,100 L0,100 Z',
        dots: [
          { id: 'dot1', cx: 60, cy: 75 },
          { id: 'dot2', cx: 120, cy: 55 },
          { id: 'dot3', cx: 180, cy: 60 },
          { id: 'dot4', cx: 240, cy: 35 }
        ]
      },
      lastYear: {
        path: 'M0,90 Q40,80 80,85 T140,70 T200,75 T260,55 T300,65',
        area: 'M0,90 Q40,80 80,85 T140,70 T200,75 T260,55 T300,65 L300,100 L0,100 Z',
        dots: [
          { id: 'dot1', cx: 80, cy: 85 },
          { id: 'dot2', cx: 140, cy: 70 },
          { id: 'dot3', cx: 200, cy: 75 },
          { id: 'dot4', cx: 260, cy: 55 }
        ]
      }
    };

    function updateChart(filter) {
      const data = chartData[filter];
      if (!data) return;

      document.getElementById('chartLine').setAttribute('d', data.path);
      document.getElementById('chartArea').setAttribute('d', data.area);

      data.dots.forEach(dot => {
        const el = document.getElementById(dot.id);
        if (el) {
          el.setAttribute('cx', dot.cx);
          el.setAttribute('cy', dot.cy);
        }
      });
    }

    // ===== 5. HOTSPOT SELECTION =====
    function selectHotspot(element) {
      document.querySelectorAll('.hotspot-item').forEach(item => {
        item.classList.remove('active');
      });
      element.classList.add('active');

      const detail = document.getElementById('hotspotDetail');
      detail.innerHTML = `<strong>${element.dataset.hotspot} — ${element.dataset.name}</strong><br>${element.dataset.info}`;
      detail.classList.add('visible');
    }

    // ===== 6. MAP MODAL (300ms open/close) =====
    function openMapModal() {
      document.getElementById('mapModal').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMapModal() {
      document.getElementById('mapModal').classList.remove('open');
      document.body.style.overflow = '';
    }

    // ===== 7. LIVE STATUS =====
    const liveMessages = [
      'Cleanup operations active',
      'Plastic collection in progress',
      'New hotspot detected',
      'Cleanup zone restored',
      'Ocean cleanup team active'
    ];
    let liveIndex = 0;

    function updateLiveStatus() {
      const el = document.getElementById('liveMessage');
      el.style.opacity = '0';
      setTimeout(() => {
        liveIndex = (liveIndex + 1) % liveMessages.length;
        el.textContent = liveMessages[liveIndex];
        el.style.opacity = '1';
      }, 250);
    }

    // ===== 8. MAP TOOLTIP =====
    function showTooltip(marker) {
      const container = document.getElementById('worldMapContainer');
      const rect = container.getBoundingClientRect();
      const tooltip = document.createElement('div');
      tooltip.className = 'map-tooltip';

      const priorityClass = marker.dataset.priority === 'High' ? 'priority-high' : 'priority-medium';

      tooltip.innerHTML = `
        <strong>${marker.dataset.location}</strong>
        Cleanup Priority: <span class="${priorityClass}">${marker.dataset.priority}</span><br>
        Status: ${marker.dataset.status} · ${marker.dataset.removed}
      `;

      const markerRect = marker.getBoundingClientRect();
      const x = markerRect.left + markerRect.width / 2 - rect.left;
      const y = markerRect.top - rect.top;

      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
      tooltip.style.position = 'absolute';

      container.appendChild(tooltip);
      requestAnimationFrame(() => tooltip.classList.add('visible'));

      return tooltip;
    }

    // ===== 9. INITIALIZATION =====
    document.addEventListener('DOMContentLoaded', function () {
      createParticles();

      // Counters start after a very short delay for perceived performance
      setTimeout(animateCounters, 400);

      // ===== View Dashboard Button (⚡ fast, responsive) =====
      const viewBtn = document.getElementById('viewDashboardBtn');
      const btnText = document.getElementById('btnText');
      const dashboard = document.getElementById('dashboard');

      viewBtn.addEventListener('click', function () {
        // 1. Immediate visual feedback (fast)
        btnText.textContent = 'Exploring Data...';
        viewBtn.classList.add('loading');

        // 2. Start scroll immediately (450ms)
        smoothScrollToDashboard();

        // 3. Highlight dashboard (0.55s glow)
        dashboard.classList.add('highlight');

        // 4. Reset button after 1.2s (no waiting needed — scroll is done in 450ms)
        setTimeout(() => {
          btnText.textContent = 'View Dashboard';
          viewBtn.classList.remove('loading');
        }, 1200);

        // 5. Remove highlight after 1.6s
        setTimeout(() => {
          dashboard.classList.remove('highlight');
        }, 1600);
      });

      // Chart filter buttons
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          updateChart(this.dataset.filter);
        });
      });

      // Hotspot items
      document.querySelectorAll('.hotspot-item').forEach(item => {
        item.addEventListener('click', function () {
          selectHotspot(this);
        });
      });

      // Map markers
      let activeTooltip = null;

      document.querySelectorAll('.map-marker').forEach(marker => {
        marker.addEventListener('mouseenter', function () {
          if (activeTooltip) activeTooltip.remove();
          activeTooltip = showTooltip(this);
        });

        marker.addEventListener('mouseleave', function () {
          if (activeTooltip) {
            activeTooltip.classList.remove('visible');
            const t = activeTooltip;
            setTimeout(() => t.remove(), 180);
            activeTooltip = null;
          }
        });

        marker.addEventListener('click', function (e) {
          e.stopPropagation();
          document.querySelectorAll('.map-marker').forEach(m => m.classList.remove('active'));
          this.classList.add('active');

          if (activeTooltip) activeTooltip.remove();
          activeTooltip = showTooltip(this);
          activeTooltip.style.opacity = '1';
          activeTooltip.style.transform = 'translate(-50%, -100%) translateY(-12px)';
        });
      });

      // Close tooltip when clicking elsewhere
      document.addEventListener('click', function () {
        if (activeTooltip) {
          activeTooltip.classList.remove('visible');
          const t = activeTooltip;
          setTimeout(() => t.remove(), 180);
          activeTooltip = null;
        }
      });

      // View Full Map button
      document.getElementById('viewMapBtn').addEventListener('click', openMapModal);

      // Modal close
      document.getElementById('modalClose').addEventListener('click', closeMapModal);
      document.getElementById('mapModal').addEventListener('click', function (e) {
        if (e.target === this) closeMapModal();
      });

      // ESC key to close modal
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMapModal();
      });

      // Live status updates
      setInterval(updateLiveStatus, 4000);
    });