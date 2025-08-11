class KitchenDutyCalendar {
    constructor() {
        this.currentDate = new Date();
        this.startDate = new Date('2024-01-01'); // Starting date for calculations
        this.startWeek = 0; // 0 = Giant, 1 = Take 5
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderCalendar();
        this.updateTodayInfo();
    }

    setupEventListeners() {
        const prevBtn = document.getElementById('prevMonth');
        const nextBtn = document.getElementById('nextMonth');
        
        // Click events
        prevBtn.addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });

        nextBtn.addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });
        
        // Touch events for better mobile experience
        prevBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });

        nextBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.currentDate.setMonth(this.currentDate.getMonth() - 1);
                this.renderCalendar();
            } else if (e.key === 'ArrowRight') {
                this.currentDate.setMonth(this.currentDate.getMonth() + 1);
                this.renderCalendar();
            }
        });
    }

    getResponsibilityForDate(date) {
        // Calculate weeks since start date
        const timeDiff = date.getTime() - this.startDate.getTime();
        const weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
        
        // Alternate between Giant (0) and Take 5 (1) every week
        const weekResponsibility = (weeksDiff + this.startWeek) % 2;
        
        return weekResponsibility === 0 ? 'Giant' : 'Take 5';
    }

    getResponsibilityLogo(responsibility) {
        return responsibility === 'Giant' ? 'G' : 'T';
    }

    renderCalendar() {
        const monthYear = document.getElementById('monthYear');
        const calendarDays = document.getElementById('calendarDays');
        
        // Update month/year display
        const options = { month: 'long', year: 'numeric' };
        monthYear.textContent = this.currentDate.toLocaleDateString('en-US', options);
        
        // Clear previous calendar
        calendarDays.innerHTML = '';
        
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day other-month';
            calendarDays.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            const currentDate = new Date(year, month, day);
            const responsibility = this.getResponsibilityForDate(currentDate);
            const logo = this.getResponsibilityLogo(responsibility);
            
            // Check if this is today
            const today = new Date();
            if (currentDate.toDateString() === today.toDateString()) {
                dayElement.classList.add('today');
            }
            
            // Add responsibility class
            dayElement.classList.add(responsibility.toLowerCase().replace(' ', ''));
            
            // Create the day content
            const dayNumber = document.createElement('span');
            dayNumber.textContent = day;
            dayNumber.style.marginBottom = '5px';
            
            const dutyLogo = document.createElement('div');
            dutyLogo.className = 'duty-logo';
            dutyLogo.textContent = logo;
            
            dayElement.appendChild(dayNumber);
            dayElement.appendChild(dutyLogo);
            
            // Add tooltip
            dayElement.title = `${responsibility} - ${currentDate.toLocaleDateString()}`;
            
            calendarDays.appendChild(dayElement);
        }
        
        // Fill remaining cells to complete the grid
        const totalCells = startingDayOfWeek + daysInMonth;
        const remainingCells = 7 - (totalCells % 7);
        if (remainingCells < 7) {
            for (let i = 0; i < remainingCells; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day other-month';
                calendarDays.appendChild(emptyDay);
            }
        }
    }

    updateTodayInfo() {
        const todayPerson = document.getElementById('todayPerson');
        const today = new Date();
        const responsibility = this.getResponsibilityForDate(today);
        
        todayPerson.textContent = responsibility;
        todayPerson.className = `today-person ${responsibility.toLowerCase().replace(' ', '')}`;
    }
}

// Initialize the calendar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new KitchenDutyCalendar();
});
