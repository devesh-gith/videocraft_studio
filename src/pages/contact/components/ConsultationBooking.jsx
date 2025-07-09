import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Mock available time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Mock calendar data
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = currentDate.getMonth() === month;
      const isToday = currentDate.toDateString() === new Date().toDateString();
      const isPast = currentDate < new Date().setHours(0, 0, 0, 0);
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
      
      days.push({
        date: new Date(currentDate),
        day: currentDate.getDate(),
        isCurrentMonth,
        isToday,
        isPast,
        isAvailable: isCurrentMonth && !isPast && !isWeekend,
        isSelected: selectedDate && currentDate.toDateString() === selectedDate.toDateString()
      });
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  const handleDateSelect = (day) => {
    if (day.isAvailable) {
      setSelectedDate(day.date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookConsultation = () => {
    if (selectedDate && selectedTime) {
      alert(`Consultation booked for ${selectedDate.toLocaleDateString()} at ${selectedTime}. You'll receive a confirmation email shortly.`);
    }
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Schedule a 30-minute strategy session to discuss your project vision and explore how we can bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar */}
          <div className="bg-card rounded-2xl cinematic-shadow p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-headline font-semibold text-foreground">
                Select Date
              </h3>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateMonth(-1)}
                  className="text-text-secondary hover:text-foreground"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                <span className="text-lg font-medium text-foreground min-w-[140px] text-center">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateMonth(1)}
                  className="text-text-secondary hover:text-foreground"
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {dayNames.map(day => (
                <div key={day} className="text-center text-sm font-medium text-text-secondary py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays().map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(day)}
                  disabled={!day.isAvailable}
                  className={`
                    aspect-square flex items-center justify-center text-sm rounded-lg smooth-transition
                    ${day.isCurrentMonth ? 'text-foreground' : 'text-text-secondary/50'}
                    ${day.isToday ? 'bg-accent/20 text-accent font-semibold' : ''}
                    ${day.isSelected ? 'bg-accent text-background font-semibold' : ''}
                    ${day.isAvailable && !day.isSelected ? 'hover:bg-accent/10 hover:text-accent' : ''}
                    ${!day.isAvailable ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                  `}
                >
                  {day.day}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent/20 rounded-full"></div>
                <span>Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Time Slots & Booking */}
          <div className="space-y-8">
            {/* Time Slots */}
            <div className="bg-card rounded-2xl cinematic-shadow p-8">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
                Available Times
                {selectedDate && (
                  <span className="block text-sm font-normal text-text-secondary mt-1">
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                )}
              </h3>

              {selectedDate ? (
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        p-3 rounded-lg text-sm font-medium smooth-transition border
                        ${selectedTime === time 
                          ? 'bg-accent text-background border-accent' :'bg-input text-foreground border-border hover:border-accent hover:text-accent'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon name="Calendar" size={48} className="mx-auto text-text-secondary mb-4" />
                  <p className="text-text-secondary">
                    Please select a date to view available times
                  </p>
                </div>
              )}
            </div>

            {/* Consultation Details */}
            <div className="bg-card rounded-2xl cinematic-shadow p-8">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
                What to Expect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="text-accent mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">30-Minute Session</div>
                    <div className="text-sm text-text-secondary">Comprehensive project discussion</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Video" size={20} className="text-accent mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Video Call</div>
                    <div className="text-sm text-text-secondary">Zoom link sent via email</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="FileText" size={20} className="text-accent mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Custom Proposal</div>
                    <div className="text-sm text-text-secondary">Detailed quote within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={20} className="text-accent mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">No Obligation</div>
                    <div className="text-sm text-text-secondary">Free consultation, no strings attached</div>
                  </div>
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-center space-x-2 text-accent mb-2">
                    <Icon name="CheckCircle" size={16} />
                    <span className="font-medium">Ready to Book</span>
                  </div>
                  <div className="text-sm text-foreground">
                    {selectedDate.toLocaleDateString()} at {selectedTime}
                  </div>
                </div>
              )}

              <Button
                variant="default"
                size="lg"
                fullWidth
                className="mt-6 bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                iconName="Calendar"
                iconPosition="left"
                iconSize={18}
                onClick={handleBookConsultation}
                disabled={!selectedDate || !selectedTime}
              >
                Confirm Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;